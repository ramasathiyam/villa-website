import styles from "./PriceBadge.module.css";

export type PriceBadgeProps = {
  amount: string;
  unit?: string;
  className?: string;
};

export default function PriceBadge({ amount, unit, className }: PriceBadgeProps) {
  return (
    <span className={[styles.badge, className].filter(Boolean).join(" ")}>
      {amount}
      {unit ? ` / ${unit}` : ""}
    </span>
  );
}
