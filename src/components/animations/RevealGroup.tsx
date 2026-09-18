"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInView } from "./useInView";

export type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  /** Passed straight through to the root div — e.g. a grid's --columns custom property. */
  style?: CSSProperties;
};

// Wraps a group of RevealItem children (e.g. a card grid) with ONE Intersection Observer
// instead of one per card. This also sidesteps a real bug: cards inside a horizontally
// scrollable carousel (CardGrid) can sit outside the browser viewport horizontally, so a
// per-card observer would leave off-screen cards stuck invisible until the user drags the
// carousel. Revealing based on the group's own vertical position avoids that entirely —
// used for the plain (non-carousel) grids: Room cards, gallery strips, testimonials.
export default function RevealGroup({ children, className, style }: RevealGroupProps) {
  const ref = useInView<HTMLDivElement>(0.05);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
