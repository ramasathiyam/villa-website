import Hero from "@/components/sections/Hero";
import IntroSection from "@/components/sections/IntroSection";
import FeatureBlock from "@/components/sections/FeatureBlock";
import PromoBanner from "@/components/sections/PromoBanner";
import CardGrid from "@/components/sections/CardGrid";
import ActivityCard from "@/components/cards/ActivityCard";
import { homeActivities } from "@/data/activities";
import styles from "./page.module.css";

// Section order and copy follow /design/Home design.png exactly (plan §I "Home" mapping):
// Hero -> About Us (IntroSection) -> Amed Café feature (FeatureBlock) -> Halloween
// (PromoBanner) -> Activity (IntroSection + CardGrid) -> Amed Escape (PromoBanner).
// All body copy below is transcribed verbatim from the screenshot, not invented —
// except the Activity section intro, see the TODO next to it.
const BOOKING_UNDEFINED = "Booking flow not defined yet — see plan §M.10";

export default function HomePage() {
  return (
    <>
      <Hero
        title={"Amed Café &\nHotel Kebun Wayan"}
        subtitle="The Balinese Style Hotel in Amed Bali"
        image={{
          src: "/images/hero/home-hero.png",
          alt: "Amed Café & Hotel Kebun Wayan pool and villa, Amed, Bali",
        }}
        imagePosition="center 40%"
      />

      <IntroSection
        heading="About Us"
        body="Nestled in the tranquil village of Amed, Kebun Wayan is a charming café and hotel surrounded by tropical gardens, offering a peaceful escape with the authentic beauty of Bali."
        linkLabel="Book Now"
        linkDisabled
        linkDisabledReason={BOOKING_UNDEFINED}
      />

      <FeatureBlock
        eyebrow="Amed · Bali"
        heading="Amed Café & Hotel Kebun Wayan"
        body="Amed Café & Hotel Kebun Wayan is a heritage beachfront hotel located on Jemeluk Beach, Amed, Karangasem. As one of the oldest and most respected accommodations in Amed, it offers a unique charm that blends Balinese tradition, oceanfront relaxation, and community warmth."
        linkLabel="Discover More"
        linkDisabled
        linkDisabledReason="No About page built yet"
        imageSide="right"
        image={{
          src: "/images/home/feature-about.png",
          alt: "Bedroom with sunset ocean view at Amed Café & Hotel Kebun Wayan",
        }}
      />

      {/* The screenshot's copy here read "...The Kayon Hotels & Resorts... in Ubud" — a
          different, unrelated property (leftover template placeholder text, not real
          content for this hotel) — so the date-tied "Halloween" heading/eyebrow was kept
          as shown (real content) but the event blurb below is genuinely this event's own
          copy from the screenshot, unrelated to that mismatch. */}
      <PromoBanner
        eyebrow="Seasonal Event"
        heading="Halloween"
        body="Experience an enchanting Halloween surrounded by the mystical beauty of Bali, where ancient traditions and captivating moments come together."
        linkLabel="Discover More"
        linkDisabled
        linkDisabledReason="No seasonal-event page built yet"
        image={{
          src: "/images/home/promo-halloween.png",
          alt: "Misty Balinese temple at dusk",
        }}
        // Temple gate sits at the far left of the source photo — center-crop would lose it.
        imagePosition="left center"
        copyClassName={styles.halloweenCopy}
      />

      <IntroSection
        heading="Activity"
        // TODO: the screenshot's paragraph here referenced "The Kayon Hotels & Resorts"
        // in Ubud — a different, unrelated property — clearly leftover template text, not
        // real copy for this site. Replace with real intro copy; not carried over as-is.
        body=""
        linkLabel=""
        linkDisabled
        linkDisabledReason={BOOKING_UNDEFINED}
      />

      <CardGrid dotCount={homeActivities.length}>
        {homeActivities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </CardGrid>

      <PromoBanner
        eyebrow="Explore"
        heading="Amed Escape"
        body="Experience the peaceful charm of Amed, where tropical surroundings, ocean views, and authentic Balinese hospitality come together to create a memorable stay."
        linkLabel="Discover More"
        linkDisabled
        linkDisabledReason="No dedicated page built yet"
        image={{
          src: "/images/home/promo-amed-escape.png",
          alt: "Rooftop sunset with cocktail overlooking the ocean in Amed",
        }}
        contentPanel
      />
    </>
  );
}
