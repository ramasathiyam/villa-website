"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInView } from "./useInView";
import styles from "./Reveal.module.css";

export type RevealProps = {
  children: ReactNode;
  /** "fade-up" (default) — opacity + a small translateY, for headings/paragraphs/CTAs.
   * "image" — opacity + a subtle scale(1.03 -> 1), for photos. Renders as an
   * absolutely-positioned inset wrapper (matches next/image `fill`), so it must be
   * placed inside an existing `position: relative` image container.
   * "fade" — opacity only, no movement (e.g. the Footer). */
  variant?: "fade-up" | "image" | "fade";
  /** Stagger delay in ms (e.g. 80, 160) — applied as a CSS transition-delay. */
  delay?: number;
  className?: string;
};

const VARIANT_CLASS = {
  "fade-up": styles.fadeUp,
  image: styles.image,
  fade: styles.fade,
} as const;

// Single-element scroll reveal — see useInView.ts for the "never stuck invisible"
// guarantee. Kept deliberately small: opacity + transform only, one Intersection
// Observer per instance, animates once and stays visible.
export default function Reveal({ children, variant = "fade-up", delay = 0, className }: RevealProps) {
  const ref = useInView<HTMLDivElement>();
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div ref={ref} className={[styles.reveal, VARIANT_CLASS[variant], className].filter(Boolean).join(" ")} style={style}>
      {children}
    </div>
  );
}
