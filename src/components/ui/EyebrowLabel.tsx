import type { ReactNode } from "react";
import styles from "./EyebrowLabel.module.css";

// Small uppercase label with a bullet, preceding a heading — e.g. "EXPLORE", "AMED · BALI",
// "EXPERIENCE", "SEASONAL EVENT" (CLAUDE.md §3).
export type EyebrowLabelProps = {
  children: ReactNode;
  className?: string;
  /** Some usages (e.g. the "Experience" label on activity cards) don't show the bullet. */
  showBullet?: boolean;
};

export default function EyebrowLabel({ children, className, showBullet = true }: EyebrowLabelProps) {
  return (
    <span className={[styles.eyebrow, className].filter(Boolean).join(" ")}>
      {showBullet && <span className={styles.bullet} aria-hidden="true" />}
      {children}
    </span>
  );
}
