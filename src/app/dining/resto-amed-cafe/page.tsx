import Hero from "@/components/sections/Hero";
import IntroSection from "@/components/sections/IntroSection";
import FeatureBlock from "@/components/sections/FeatureBlock";
import GalleryStrip from "@/components/sections/GalleryStrip";
import Testimonials from "@/components/sections/Testimonials";
import PromoBanner from "@/components/sections/PromoBanner";

// Section order and copy follow /design/Resto Amed Cafe.png (Dining task): Hero (left
// title) -> Amed Cafe (IntroSection) -> 3-image gallery -> 2x FeatureBlock -> testimonials
// -> 3-image gallery -> Amed Escape (PromoBanner).
const BOOKING_UNDEFINED = "Booking flow not defined yet — see plan §M.10";
const ASSET_DIR = "/images/dining/resto-amed-cafe";

// Reused verbatim from Home/Spa — no Resto-specific paragraph was provided, and the
// reference itself shows Lorem Ipsum here, which was not carried over.
const HOTEL_BLURB =
  "Amed Café & Hotel Kebun Wayan is a heritage beachfront hotel located on Jemeluk Beach, Amed, Karangasem. As one of the oldest and most respected accommodations in Amed, it offers a unique charm that blends Balinese tradition, oceanfront relaxation, and community warmth.";

export default function RestoAmedCafePage() {
  return (
    <>
      <Hero
        title="Resto Amed Cafe"
        subtitle="The Balinese Style Hotel in Amed Bali"
        titleAlign="left"
        image={{ src: `${ASSET_DIR}/hero.png`, alt: "Guests dining oceanside at Resto Amed Cafe" }}
      />

      <IntroSection
        heading="Amed Cafe"
        body="Nestled in the tranquil village of Amed, Kebun Wayan is a charming café and hotel surrounded by tropical gardens, offering a peaceful escape with the authentic beauty of Bali."
        linkLabel="Book Now"
        linkDisabled
        linkDisabledReason={BOOKING_UNDEFINED}
      />

      <GalleryStrip
        columns={3}
        items={[
          { image: { src: `${ASSET_DIR}/gallery-1-wings.png`, alt: "Grilled chicken wings" } },
          { image: { src: `${ASSET_DIR}/gallery-2-tuna.png`, alt: "Seared tuna with tropical salsa" } },
          { image: { src: `${ASSET_DIR}/gallery-3-croquette-beer.png`, alt: "Croquettes served with a cold beer" } },
        ]}
      />

      <FeatureBlock
        eyebrow="Amed · Bali"
        heading="Amed Café & Hotel Kebun Wayan"
        body={HOTEL_BLURB}
        linkLabel="Discover More"
        linkDisabled
        linkDisabledReason="No About page built yet"
        imageSide="left"
        image={{ src: `${ASSET_DIR}/feature-1-friends.png`, alt: "Friends sharing a meal and drinks at Resto Amed Cafe" }}
      />

      <FeatureBlock
        eyebrow="Amed · Bali"
        heading="Amed Café & Hotel Kebun Wayan"
        body={HOTEL_BLURB}
        linkLabel="Discover More"
        linkDisabled
        linkDisabledReason="No About page built yet"
        imageSide="right"
        image={{ src: `${ASSET_DIR}/feature-2-family.png`, alt: "Family celebrating a meal together by the beach" }}
      />

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
          { image: { src: `${ASSET_DIR}/gallery-4-welcome.png`, alt: "Welcome dessert plate" } },
          { image: { src: `${ASSET_DIR}/gallery-5-croquette.png`, alt: "Croquettes plated with herbs" } },
          { image: { src: `${ASSET_DIR}/gallery-6-croquette-close.png`, alt: "Close-up of croquettes with sauce" } },
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
