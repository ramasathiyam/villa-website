import type { ReactNode } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

// Full-bleed hero with centered serif title (CLAUDE.md §8.1). Used on every page — only
// the image, title, and subtitle differ per plan §I. Navbar overlays this from the root
// layout (src/app/layout.tsx), not from here — see that file's comment.
export type HeroProps = {
  title: string;
  subtitle?: string;
  image?: { src: string; alt: string };
  /** CSS object-position, for photos whose subject isn't centered. Defaults to center. */
  imagePosition?: string;
  /** Most heroes center the title (Home, Room, Spa, Dining); Activity's reference left-aligns
   * it instead ("Discover More / Experience More"). Defaults to center. */
  titleAlign?: "center" | "left";
  /** "tagline" (default) is the small uppercase tracked treatment used everywhere else
   * ("THE BALINESE STYLE HOTEL IN AMED BALI"). "statement" is a longer sentence-case
   * paragraph (Activity's reference) — normal case, wider max-width, always centered
   * regardless of titleAlign. */
  subtitleVariant?: "tagline" | "statement";
  /** Optional slot for page-specific content anchored to the hero, e.g. Room's search bar. */
  children?: ReactNode;
};

export default function Hero({
  title,
  subtitle,
  image,
  imagePosition = "center",
  titleAlign = "center",
  subtitleVariant = "tagline",
  children,
}: HeroProps) {
  return (
    <section className={styles.hero}>
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          className={styles.image}
          style={{ objectPosition: imagePosition }}
        />
      ) : (
        // TODO: replace with real photography once available (plan §M.1)
        <div className={styles.placeholder}>Hero image placeholder — awaiting real photography</div>
      )}

      <div className={styles.overlay} aria-hidden="true" />

      <div className={[styles.content, titleAlign === "left" ? styles.contentLeft : ""].join(" ")}>
        <h1 className={[styles.title, titleAlign === "left" ? styles.titleLeft : ""].join(" ")}>
          {title}
        </h1>
        {subtitle && (
          <p
            className={[styles.subtitle, subtitleVariant === "statement" ? styles.subtitleStatement : ""].join(
              " "
            )}
          >
            {subtitle}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}
