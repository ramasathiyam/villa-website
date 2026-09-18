import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import styles from "./ActivityShowcase.module.css";

// One-off composite specific to the Activity page's "Get Active Outdoors or Try
// Something New" section (/design/Activity.png): a large photo with overlaid caption +
// heading + CTA on one side, a 2x2 photo collage on the other. No existing shared
// component covers this shape (FeatureBlock is text-column + single image; this is
// image-with-overlay-text + a 4-photo grid), so it isn't force-fit into one.
export type ActivityShowcaseProps = {
  heading: string;
  mainImage: { src: string; alt: string };
  mainCaption: string;
  mainHeading: string;
  linkLabel: string;
  linkDisabled?: boolean;
  linkDisabledReason?: string;
  collage: { src: string; alt: string }[];
};

export default function ActivityShowcase({
  heading,
  mainImage,
  mainCaption,
  mainHeading,
  linkLabel,
  linkDisabled,
  linkDisabledReason,
  collage,
}: ActivityShowcaseProps) {
  return (
    <section className={styles.section}>
      <Reveal className={styles.heading}>
        <h2 className={styles.sectionHeading}>{heading}</h2>
      </Reveal>

      <div className={styles.grid}>
        <div className={styles.main}>
          <Reveal variant="image">
            <Image src={mainImage.src} alt={mainImage.alt} fill className={styles.mainImage} />
          </Reveal>
          <div className={styles.mainOverlay} aria-hidden="true" />
          <Reveal className={styles.mainContent}>
            <span className={styles.mainCaption}>{mainCaption}</span>
            <p className={styles.mainHeading}>{mainHeading}</p>
            <div>
              <Button variant="primary" disabled={linkDisabled} disabledReason={linkDisabledReason}>
                {linkLabel}
              </Button>
            </div>
          </Reveal>
        </div>

        <div className={styles.collage}>
          {collage.map((item) => (
            <div className={styles.collageTile} key={item.alt}>
              <Reveal variant="image">
                <Image src={item.src} alt={item.alt} fill className={styles.collageImage} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
