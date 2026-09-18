import Image from "next/image";
import type { Activity } from "@/data/activities";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import PriceBadge from "@/components/ui/PriceBadge";
import styles from "./ActivityCard.module.css";

export type ActivityCardProps = {
  activity: Activity;
  /** Rounds and clips the image wrapper — used on the Activity page's "Exceptional
   * Experiences" grid for visual consistency across all cards (one of the source photos,
   * the reused Frame 9 (2).png snorkeling shot, already has rounded corners baked into the
   * PNG itself, so this also keeps that one clipping cleanly instead of showing the
   * placeholder pattern through its transparent corners). Defaults to false (sharp
   * corners, matching Home's activity teaser cards and the rest of the design system). */
  roundedImage?: boolean;
};

export default function ActivityCard({ activity, roundedImage = false }: ActivityCardProps) {
  return (
    <article className={styles.card}>
      <div className={[styles.imageWrap, roundedImage ? styles.imageWrapRounded : ""].join(" ")}>
        {activity.image ? (
          <Image src={activity.image} alt={activity.name} fill className={styles.image} />
        ) : (
          // TODO: replace with real activity photography once available (plan §M.1)
          <span aria-hidden="true" />
        )}
        {activity.price && <PriceBadge amount={activity.price} className={styles.badge} />}
      </div>

      <div className={styles.body}>
        <EyebrowLabel showBullet={false}>Experience</EyebrowLabel>
        <h3 className={styles.title}>{activity.name}</h3>
        {activity.description && <p className={styles.description}>{activity.description}</p>}
        {activity.includes && activity.includes.length > 0 && (
          <ul className={styles.includes}>
            {/* Keyed by index, not the string itself — the placeholder "Yoga Session"
                entry (src/data/activities.ts) repeats the same line 4x, which produced
                duplicate keys and a React console error when the value was used as key. */}
            {activity.includes.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
