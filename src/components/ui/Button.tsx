import type { ReactNode, MouseEventHandler } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

// Two of the three button treatments from CLAUDE.md §7:
// "primary"  — the tan-outline nav pill (e.g. Book Now in the header)
// "solid"    — the filled tan rectangle (room card CTA, search/submit buttons)
// The third treatment (rule + text link, e.g. "— DISCOVER MORE") is RuleLink, not this component.
export type ButtonProps = {
  variant?: "primary" | "solid";
  href?: string;
  type?: "button" | "submit";
  onClick?: MouseEventHandler;
  children: ReactNode;
  className?: string;
  /** Renders a non-navigating, visually-muted state for actions with no real target yet
   * (e.g. booking flow, plan §M.10) instead of linking to a fabricated "#" URL. */
  disabled?: boolean;
  /** Tooltip shown on the disabled state, explaining why it doesn't do anything yet. */
  disabledReason?: string;
};

export default function Button({
  variant = "primary",
  href,
  type = "button",
  onClick,
  children,
  className,
  disabled = false,
  disabledReason,
}: ButtonProps) {
  const classes = [styles.button, styles[variant], disabled && styles.disabled, className]
    .filter(Boolean)
    .join(" ");

  if (disabled) {
    return (
      <span className={classes} aria-disabled="true" title={disabledReason}>
        {children}
      </span>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
