import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import RevealGroup from "@/components/animations/RevealGroup";
import RevealItem from "@/components/animations/RevealItem";
import styles from "./Testimonials.module.css";

// Cream-background 3-column testimonials (CLAUDE.md §8.6) — used on Dining in the
// reference set. The screenshot shows Lorem-ipsum placeholder text; real quotes are
// required before shipping (plan §M.5) — do not fabricate guest quotes here.
export type Testimonial = {
  quote: string;
  name: string;
  rating: number;
};

export type TestimonialsProps = {
  heading?: string;
  items: Testimonial[];
};

export default function Testimonials({ heading = "What Our Guests Say", items }: TestimonialsProps) {
  return (
    <section className={styles.section}>
      <Reveal>
        <SectionHeading>{heading}</SectionHeading>
      </Reveal>
      <RevealGroup className={styles.grid}>
        {items.map((item, index) => (
          <RevealItem className={styles.card} index={index} key={item.name}>
            <p>&ldquo;{item.quote}&rdquo;</p>
            <div className={styles.avatarRow}>
              <span className={styles.avatar} aria-hidden="true" />
              <div>
                <p>{item.name}</p>
                <p aria-label={`${item.rating} out of 5 stars`}>
                  {"★".repeat(item.rating)}
                </p>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
