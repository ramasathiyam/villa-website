import Image from "next/image";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import RuleLink from "@/components/ui/RuleLink";
import Reveal from "@/components/animations/Reveal";
import styles from "./FeatureBlock.module.css";

// Eyebrow + heading + paragraph + rule-link beside an image, alternating sides
// (CLAUDE.md §8.3). Used on Home (default) and twice on Spa (overlap variant, plan §D).
export type FeatureBlockProps = {
  eyebrow?: string;
  heading: string;
  body: string;
  linkLabel?: string;
  linkHref?: string;
  linkDisabled?: boolean;
  linkDisabledReason?: string;
  image?: { src: string; alt: string };
  imageSide?: "left" | "right";
  imagePosition?: string;
  /** "overlap" floats the text as a card partially over the image's edge — the SPA
   * page's deliberate accent (CLAUDE.md §6), used sparingly, not the default pattern. */
  variant?: "default" | "overlap";
};

export default function FeatureBlock({
  eyebrow,
  heading,
  body,
  linkLabel,
  linkHref,
  linkDisabled,
  linkDisabledReason,
  image,
  imageSide = "right",
  imagePosition = "center",
  variant = "default",
}: FeatureBlockProps) {
  const isOverlap = variant === "overlap";

  return (
    <section
      className={[
        styles.block,
        isOverlap ? styles.overlapBlock : "",
        !isOverlap && imageSide === "left" ? styles.reverse : "",
        isOverlap && imageSide === "left" ? styles.overlapImageLeft : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Reveal className={[styles.text, isOverlap ? styles.card : ""].filter(Boolean).join(" ")}>
        {eyebrow && <EyebrowLabel>{eyebrow}</EyebrowLabel>}
        <SectionHeading as="h2" align="left">
          {heading}
        </SectionHeading>
        <p>{body}</p>
        {linkLabel && (
          <RuleLink href={linkHref} disabled={linkDisabled} disabledReason={linkDisabledReason}>
            {linkLabel}
          </RuleLink>
        )}
      </Reveal>

      <div className={styles.imageWrap}>
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
          <span aria-hidden="true" />
        )}
      </div>
    </section>
  );
}
