import type { CSSProperties } from "react";
import Image from "next/image";
import RevealGroup from "@/components/animations/RevealGroup";
import RevealItem from "@/components/animations/RevealItem";
import Reveal from "@/components/animations/Reveal";
import styles from "./GalleryStrip.module.css";

// Row of images with captions — menu highlights / food strip on Dining (CLAUDE.md §8.7).
export type GalleryItem = {
  image: { src: string; alt: string };
  title?: string;
  description?: string;
  caption?: string;
};

export type GalleryStripProps = {
  items: GalleryItem[];
  columns?: number;
};

export default function GalleryStrip({ items, columns = 3 }: GalleryStripProps) {
  return (
    <section className={styles.section}>
      <RevealGroup className={styles.row} style={{ "--columns": columns } as CSSProperties}>
        {items.map((item, index) => (
          <RevealItem className={styles.item} index={index} key={item.image.alt || index}>
            <div className={styles.imageWrap}>
              <Reveal variant="image">
                <Image src={item.image.src} alt={item.image.alt} fill className={styles.image} />
              </Reveal>
            </div>
            {(item.title || item.description) && (
              <div className={styles.captionBlock}>
                {item.title && <p className={styles.captionTitle}>{item.title}</p>}
                {item.description && <p className={styles.captionDescription}>{item.description}</p>}
              </div>
            )}
            {item.caption && <p className={styles.caption}>{item.caption}</p>}
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
