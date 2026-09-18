"use client";

import { useLayoutEffect, useRef } from "react";

// Shared scroll-reveal logic for Reveal and RevealGroup.
//
// This sets `data-armed`/`data-visible` directly on the DOM node (imperatively, via the
// ref) instead of through React state — useLayoutEffect here is doing exactly what React
// recommends it for: synchronizing an external/DOM concern before paint, not driving a
// re-render. It also means the attributes are simply absent by default (both on the
// server-rendered markup and on the very first client render before this effect runs),
// which is what Reveal.module.css / RevealGroup.module.css treat as "fully visible" — so
// a page where this effect never runs at all (JS disabled, script blocked, hydration
// failure) just stays visible. Nothing can get stuck invisible.
//
// The reveal REPLAYS every time the element enters the viewport (scrolling down or back
// up), and fades back out when it leaves — the observer is never disconnected after the
// first reveal. Content already on-screen at mount is marked visible immediately (no
// animate-in flash on first load), but stays observed so scrolling it away and back still
// replays the animation like everything else.
export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Set the correct state synchronously before first paint, so there's no flash of
    // hidden content for anything already on-screen at mount.
    const rect = el.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    el.setAttribute("data-armed", "true");
    if (alreadyInView) {
      el.setAttribute("data-visible", "true");
    }

    if (typeof IntersectionObserver === "undefined") {
      el.removeAttribute("data-armed");
      el.setAttribute("data-visible", "true");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          el.setAttribute("data-visible", "true");
        } else {
          el.removeAttribute("data-visible");
        }
      },
      // No negative rootMargin: an element sitting right at the bottom of a short page
      // (e.g. the Footer on a short mobile viewport) may never satisfy a shrunk trigger
      // zone even at max scroll, since the page can't scroll any further to compensate —
      // that would leave it stuck invisible. A tiny threshold reveals as soon as any
      // sliver of the element is on-screen, which is early enough to feel intentional.
      { threshold: Math.min(threshold, 0.05) }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
