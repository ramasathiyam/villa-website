import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./RuleLink.module.css";

export type RuleLinkProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  /** Renders a non-navigating, visually-muted state when there's no real page/flow to
   * link to yet (e.g. no About/seasonal-event page, undefined booking flow — plan §M),
   * instead of pointing at a fabricated URL. */
  disabled?: boolean;
  disabledReason?: string;
  /** For external links (e.g. "View on Google Maps") — passed through to the anchor. */
  target?: string;
  rel?: string;
};

export default function RuleLink({
  href,
  children,
  className,
  disabled,
  disabledReason,
  target,
  rel,
}: RuleLinkProps) {
  const classes = [styles.ruleLink, disabled && styles.disabled, className].filter(Boolean).join(" ");

  if (disabled || !href) {
    return (
      <span className={classes} aria-disabled="true" title={disabledReason}>
        <span className={styles.rule} aria-hidden="true" />
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={classes} target={target} rel={rel}>
      <span className={styles.rule} aria-hidden="true" />
      {children}
    </Link>
  );
}
