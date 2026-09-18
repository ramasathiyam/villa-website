import Image from "next/image";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import RuleLink from "@/components/ui/RuleLink";
import Reveal from "@/components/animations/Reveal";
import styles from "./PromoBanner.module.css";

// Full-width dark promo banner (e.g. "Amed Escape", "Halloween") — appears on every
// page directly before the footer (CLAUDE.md §8.4). Shared component, per-page content.
export type PromoBannerProps = {
  eyebrow: string;
  heading: string;
  body: string;
  linkLabel?: string;
  linkHref?: string;
  linkDisabled?: boolean;
  linkDisabledReason?: string;
  image?: { src: string; alt: string };
  /** CSS object-position, for photos whose subject isn't centered (e.g. the Halloween
   * banner's temple sits at the left edge of the source photo). Defaults to center. */
  imagePosition?: string;
  /** Wraps the text in a semi-transparent boxed panel sized to its content (e.g. Amed
   * Escape) instead of spreading it across the full banner (e.g. Halloween, which relies
   * on the photo's own dark tones for contrast instead of a boxed panel). */
  contentPanel?: boolean;
  /** Optional override for the body-copy column's width (default 360px via .copy), e.g.
   * a wider value so a specific instance's paragraph wraps to fewer lines. Scoped to the
   * single instance that passes it — every other PromoBanner keeps the shared default. */
  copyClassName?: string;
};

export default function PromoBanner({
  eyebrow,
  heading,
  body,
  linkLabel,
  linkHref,
  linkDisabled,
  linkDisabledReason,
  image,
  imagePosition = "center",
  contentPanel = false,
  copyClassName,
}: PromoBannerProps) {
  const textColumns = (
    <>
      <div className={styles.textCol}>
        <EyebrowLabel>{eyebrow}</EyebrowLabel>
        <SectionHeading as="h2" align="left">
          {heading}
        </SectionHeading>
      </div>
      <div className={[styles.copy, copyClassName].filter(Boolean).join(" ")}>
        <p>{body}</p>
        {linkLabel && (
          <RuleLink href={linkHref} disabled={linkDisabled} disabledReason={linkDisabledReason}>
            {linkLabel}
          </RuleLink>
        )}
      </div>
    </>
  );

  return (
    <section className={styles.banner}>
      {image ? (
        <Reveal variant="image">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={styles.image}
            style={{ objectPosition: imagePosition }}
          />
        </Reveal>
      ) : (
        // TODO: replace with real photography once available (plan §M.1)
        <div className={styles.placeholder} aria-hidden="true" />
      )}
      <div className={styles.overlay} aria-hidden="true" />

      <Reveal className={styles.content}>
        {contentPanel ? <div className={styles.panel}>{textColumns}</div> : textColumns}
      </Reveal>
    </section>
  );
}
