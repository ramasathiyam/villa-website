import Image from "next/image";
import Hero from "@/components/sections/Hero";
import IntroSection from "@/components/sections/IntroSection";
import GalleryStrip from "@/components/sections/GalleryStrip";
import CardGrid from "@/components/sections/CardGrid";
import MenuItemCard from "@/components/cards/MenuItemCard";
import Testimonials from "@/components/sections/Testimonials";
import PromoBanner from "@/components/sections/PromoBanner";
import { signatureCocktails } from "@/data/menu";
import Reveal from "@/components/animations/Reveal";
import styles from "./page.module.css";

// Section order and copy follow /design/Barak Rooftop and bar.png (Dining task): Hero ->
// Barak Rooftop and Bar (IntroSection) -> Menu Highlight (5-image gallery) -> Signature
// Cocktails (carousel + candid photo) -> testimonials -> 3-image gallery (shared with
// Resto Amed Cafe) -> Amed Escape (PromoBanner).
const BOOKING_UNDEFINED = "Booking flow not defined yet — see plan §M.10";
const ASSET_DIR = "/images/dining/barak-rooftop-and-bar";

export default function BarakRooftopAndBarPage() {
  return (
    <>
      <Hero
        title="Barak Rooftop and Bar"
        subtitle="The Balinese Style Hotel in Amed Bali"
        titleAlign="left"
        image={{ src: `${ASSET_DIR}/hero.png`, alt: "Guests enjoying sunset at Barak Rooftop and Bar" }}
      />

      <IntroSection
        heading="Barak Rooftop and Bar"
        body="Nestled in the tranquil village of Amed, Kebun Wayan is a charming café and hotel surrounded by tropical gardens, offering a peaceful escape with the authentic beauty of Bali."
        linkLabel="Book Now"
        linkDisabled
        linkDisabledReason={BOOKING_UNDEFINED}
      />

      {/* Caption text ("GRILEWEAODK" / "Lemon Butter, Garlic, Herbs") is transcribed
          verbatim from design/Barak Rooftop and bar.png per explicit instruction — it's
          identical under all 5 photos in the reference (not real distinct dish names,
          most likely template placeholder text), but the client asked for it to match
          the design exactly rather than be omitted. Replace with real dish names/
          descriptions once provided. */}
      <GalleryStrip
        columns={5}
        items={[
          {
            image: { src: `${ASSET_DIR}/menu-1.png`, alt: "Frosted berry cocktail with citrus" },
            title: "Grileweaodk",
            description: "Lemon Butter, Garlic, Herbs",
          },
          {
            image: { src: `${ASSET_DIR}/menu-2.png`, alt: "Cocktail in a copper mug with mint and orange" },
            title: "Grileweaodk",
            description: "Lemon Butter, Garlic, Herbs",
          },
          {
            image: { src: `${ASSET_DIR}/menu-3.png`, alt: "Blue curaçao cocktail with blackberry garnish" },
            title: "Grileweaodk",
            description: "Lemon Butter, Garlic, Herbs",
          },
          {
            image: { src: `${ASSET_DIR}/menu-4.png`, alt: "Orange cocktail with citrus peel garnish" },
            title: "Grileweaodk",
            description: "Lemon Butter, Garlic, Herbs",
          },
          {
            image: { src: `${ASSET_DIR}/menu-5.png`, alt: "Pink cocktail beside a bottle of gin" },
            title: "Grileweaodk",
            description: "Lemon Butter, Garlic, Herbs",
          },
        ]}
      />

      {/* Reference shows the cocktail carousel on a cream panel beside the candid photo,
          side by side on desktop/tablet (design/Barak Rooftop and bar.png) — not stacked. */}
      <div className={styles.cocktailsRow}>
        <div className={styles.cocktailsCarousel}>
          <CardGrid heading="Signature Cocktails" dotCount={signatureCocktails.length}>
            {signatureCocktails.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </CardGrid>
        </div>
        <div className={styles.cocktailsPhoto}>
          <Reveal variant="image">
            <Image
              src={`${ASSET_DIR}/feature-friends.png`}
              alt="Guests sharing drinks and laughter at Barak Rooftop and Bar"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={styles.cocktailsPhotoImg}
            />
          </Reveal>
        </div>
      </div>

      {/* TODO: reference shows Lorem Ipsum quotes + the same "-SOPHIA-" name and a stock
          illustrated avatar repeated 3x — not real guest testimonials. Not carried over;
          replace with real quotes, names, and photos before launch (plan §M.5). */}
      <Testimonials
        items={[
          { quote: "Placeholder — real guest testimonial not yet available.", name: "Guest 1", rating: 5 },
          { quote: "Placeholder — real guest testimonial not yet available.", name: "Guest 2", rating: 5 },
          { quote: "Placeholder — real guest testimonial not yet available.", name: "Guest 3", rating: 5 },
        ]}
      />

      <GalleryStrip
        columns={3}
        items={[
          { image: { src: `${ASSET_DIR}/gallery-1-welcome.png`, alt: "Welcome dessert plate" } },
          { image: { src: `${ASSET_DIR}/gallery-2-croquette.png`, alt: "Croquettes plated with herbs" } },
          { image: { src: `${ASSET_DIR}/gallery-3-croquette-close.png`, alt: "Close-up of croquettes with sauce" } },
        ]}
      />

      <PromoBanner
        eyebrow="Explore"
        heading="Amed Escape"
        body="Experience the peaceful charm of Amed, where tropical surroundings, ocean views, and authentic Balinese hospitality come together to create a memorable stay."
        linkLabel="Discover More"
        linkDisabled
        linkDisabledReason="No dedicated page built yet"
        contentPanel
        image={{ src: `${ASSET_DIR}/promo-amed-escape.png`, alt: "Rooftop sunset with cocktail overlooking the ocean in Amed" }}
      />
    </>
  );
}
