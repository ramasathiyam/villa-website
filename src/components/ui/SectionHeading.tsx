import type { ReactNode, ElementType } from "react";
import styles from "./SectionHeading.module.css";

// Serif section heading — e.g. "About Us", "Activities", "Hotel Information" (CLAUDE.md §3).
// `as` picks the semantic heading level (each page should only have one h1, via Hero).
export type SectionHeadingProps = {
  children: ReactNode;
  as?: ElementType;
  align?: "center" | "left";
  /** Most section headings are uppercase in the references (e.g. "ABOUT US",
   * "EXCEPTIONAL EXPERIENCES") — but not all of them (Activity's "Get Active Outdoors or
   * Try Something New" is Title Case) — so this stays overridable per the actual reference
   * rather than being forced everywhere. Defaults to true. */
  uppercase?: boolean;
  className?: string;
};

export default function SectionHeading({
  children,
  as: Tag = "h2",
  align = "center",
  uppercase = true,
  className,
}: SectionHeadingProps) {
  return (
    <Tag
      className={[styles.heading, styles[align], !uppercase && styles.noUppercase, className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
