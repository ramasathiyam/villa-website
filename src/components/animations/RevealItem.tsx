import type { CSSProperties, ReactNode } from "react";
import styles from "./RevealGroup.module.css";

export type RevealItemProps = {
  children: ReactNode;
  /** Position within the group — drives the stagger delay (index * --motion-stagger-step).
   * Capped at 6 so a long grid doesn't force a long wait for the last few cards. */
  index?: number;
  className?: string;
};

// Pairs with RevealGroup. No hooks/observer of its own (server-renderable) — purely a CSS
// custom-property + class name; visibility is driven entirely by the ancestor
// RevealGroup's data-armed/data-visible attributes (see RevealGroup.module.css).
export default function RevealItem({ children, index = 0, className }: RevealItemProps) {
  const style = { "--stagger-i": Math.min(index, 6) } as CSSProperties;

  return (
    <div className={[styles.item, className].filter(Boolean).join(" ")} style={style}>
      {children}
    </div>
  );
}
