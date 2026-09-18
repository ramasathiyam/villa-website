import SectionHeading from "@/components/ui/SectionHeading";
import RuleLink from "@/components/ui/RuleLink";
import styles from "./IntroSection.module.css";

// Centered heading + short paragraph + rule-link, e.g. "About Us" / "Rooms" / "Spa"
// intros (CLAUDE.md §8.2).
export type IntroSectionProps = {
  heading: string;
  body: string;
  linkLabel?: string;
  linkHref?: string;
  linkDisabled?: boolean;
  linkDisabledReason?: string;
};

export default function IntroSection({
  heading,
  body,
  linkLabel,
  linkHref,
  linkDisabled,
  linkDisabledReason,
}: IntroSectionProps) {
  return (
    <section className={styles.intro}>
      <SectionHeading>{heading}</SectionHeading>
      <p>{body}</p>
      {linkLabel && (
        <RuleLink href={linkHref} disabled={linkDisabled} disabledReason={linkDisabledReason}>
          {linkLabel}
        </RuleLink>
      )}
    </section>
  );
}
