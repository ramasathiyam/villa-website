import Hero from "@/components/sections/Hero";
import IntroSection from "@/components/sections/IntroSection";
import FeatureBlock from "@/components/sections/FeatureBlock";
import PromoBanner from "@/components/sections/PromoBanner";

// Section order and copy follow /design/SPA.png (plan §I "Spa" mapping):
// Hero -> Spa (IntroSection) -> two alternating FeatureBlock overlap sections
// (same eyebrow/heading/body content repeats in the reference itself — see note below)
// -> Amed Escape (PromoBanner).
const BOOKING_UNDEFINED = "Booking flow not defined yet — see plan §M.10";

export default function SpaPage() {
  return (
    <>
      <Hero
        title="Spa"
        subtitle="The Balinese Style Hotel in Amed Bali"
        image={{
          src: "/images/spa/spa-hero.png",
          alt: "Candles and hot stones beside a spa massage treatment",
        }}
      />

      <IntroSection
        heading="Spa"
        body="Nestled in the tranquil village of Amed, Kebun Wayan is a charming café and hotel surrounded by tropical gardens, offering a peaceful escape with the authentic beauty of Bali."
        linkLabel="Book Now"
        linkDisabled
        linkDisabledReason={BOOKING_UNDEFINED}
      />

      {/* The reference shows this exact eyebrow/heading/paragraph twice (once per
          FeatureBlock) — not a transcription mistake, that's genuinely what's in
          /design/SPA.png. Only one treatment photo (design/spa/kayonresort-hero.jpg.png)
          was provided, so both blocks reuse it too — see plan §M note about needing a
          second, distinct spa photo before launch. */}
      <FeatureBlock
        variant="overlap"
        eyebrow="Amed · Bali"
        heading="Amed Café & Hotel Kebun Wayan"
        body="Amed Café & Hotel Kebun Wayan is a heritage beachfront hotel located on Jemeluk Beach, Amed, Karangasem. As one of the oldest and most respected accommodations in Amed, it offers a unique charm that blends Balinese tradition, oceanfront relaxation, and community warmth."
        linkLabel="Discover More"
        linkDisabled
        linkDisabledReason="No About page built yet"
        imageSide="right"
        image={{
          src: "/images/spa/spa-treatment.png",
          alt: "Guest receiving a shoulder massage at the spa",
        }}
      />

      <FeatureBlock
        variant="overlap"
        eyebrow="Amed · Bali"
        heading="Amed Café & Hotel Kebun Wayan"
        body="Amed Café & Hotel Kebun Wayan is a heritage beachfront hotel located on Jemeluk Beach, Amed, Karangasem. As one of the oldest and most respected accommodations in Amed, it offers a unique charm that blends Balinese tradition, oceanfront relaxation, and community warmth."
        linkLabel="Discover More"
        linkDisabled
        linkDisabledReason="No About page built yet"
        imageSide="left"
        image={{
          src: "/images/spa/spa-treatment.png",
          alt: "Guest receiving a shoulder massage at the spa",
        }}
      />

      <PromoBanner
        eyebrow="Explore"
        heading="Amed Escape"
        body="Experience the peaceful charm of Amed, where tropical surroundings, ocean views, and authentic Balinese hospitality come together to create a memorable stay."
        linkLabel="Discover More"
        linkDisabled
        linkDisabledReason="No dedicated page built yet"
        image={{
          src: "/images/spa/promo-amed-escape.png",
          alt: "Rooftop sunset with cocktail overlooking the ocean in Amed",
        }}
        contentPanel
      />
    </>
  );
}
