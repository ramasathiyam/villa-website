"use client";

import { Children, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./CardGrid.module.css";

// Card row used for Rooms and Activities (CLAUDE.md §8.5). Takes any card component as
// children (RoomCard, ActivityCard). When `dotCount` is given, the row becomes a
// horizontally-draggable/scrollable carousel (mouse drag, touch swipe, arrow buttons, or
// clicking a dot) — plain CSS scroll-snap + a small drag handler, no carousel library.
export type CardGridProps = {
  heading?: string;
  children: ReactNode;
  dotCount?: number;
};

export default function CardGrid({ heading, children, dotCount }: CardGridProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const items = Children.toArray(children);

  // Track which slide is currently in view, so the dots reflect real scroll position.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const slides = Array.from(track.children) as HTMLElement[];
        let closest = 0;
        let closestDist = Infinity;
        slides.forEach((slide, i) => {
          const dist = Math.abs(slide.offsetLeft - track.scrollLeft);
          if (dist < closestDist) {
            closestDist = dist;
            closest = i;
          }
        });
        setActiveIndex(closest);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Mouse drag-to-scroll — touch swipe and scrollbar drag already work natively via
  // overflow-x:auto, this just adds the same for mouse pointers.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let dragging = false;
    let startX = 0;
    let startScrollLeft = 0;

    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      startX = e.clientX;
      startScrollLeft = track.scrollLeft;
      track.setPointerCapture(e.pointerId);
      track.classList.add(styles.dragging);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      track.scrollLeft = startScrollLeft - (e.clientX - startX);
    };
    const endDrag = (e: PointerEvent) => {
      dragging = false;
      track.classList.remove(styles.dragging);
      try {
        track.releasePointerCapture(e.pointerId);
      } catch {
        // pointer already released — nothing to do
      }
    };

    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointermove", onPointerMove);
    track.addEventListener("pointerup", endDrag);
    track.addEventListener("pointercancel", endDrag);
    return () => {
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("pointerup", endDrag);
      track.removeEventListener("pointercancel", endDrag);
    };
  }, []);

  function scrollToIndex(index: number) {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (track && slide) track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
  }

  function scrollByDirection(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0] as HTMLElement | undefined;
    const step = first ? first.getBoundingClientRect().width : track.clientWidth;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <section className={styles.section}>
      {heading && (
        <div className={styles.heading}>
          <SectionHeading>{heading}</SectionHeading>
        </div>
      )}

      <div className={styles.track} ref={trackRef}>
        {items.map((child, index) => (
          <div className={styles.slide} key={index}>
            {child}
          </div>
        ))}
      </div>

      {dotCount && dotCount > 1 && (
        <div className={styles.dots}>
          <button
            type="button"
            className={styles.arrow}
            aria-label="Previous"
            onClick={() => scrollByDirection(-1)}
          >
            ‹
          </button>
          {Array.from({ length: dotCount }).map((_, index) => (
            <button
              type="button"
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex}
              className={[styles.dot, index === activeIndex ? styles.dotActive : ""].join(" ")}
              onClick={() => scrollToIndex(index)}
            />
          ))}
          <button
            type="button"
            className={styles.arrow}
            aria-label="Next"
            onClick={() => scrollByDirection(1)}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
