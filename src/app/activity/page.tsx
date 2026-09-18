import Hero from "@/components/sections/Hero";
import IntroSection from "@/components/sections/IntroSection";
import ActivityShowcase from "@/components/sections/ActivityShowcase";
import CardGrid from "@/components/sections/CardGrid";
import PromoBanner from "@/components/sections/PromoBanner";
import ActivityCard from "@/components/cards/ActivityCard";
import { exceptionalExperiences } from "@/data/activities";

// Section order and copy follow /design/Activity.png (plan §I "Activity" mapping):
// Hero (left-aligned title + sentence subtitle) -> Activities (IntroSection) ->
// "Get Active Outdoors..." (ActivityShowcase) -> Exceptional Experiences (CardGrid) ->
// Create Memorable Moments (PromoBanner).
const BOOKING_UNDEFINED = "Booking flow not defined yet — see plan §M.10";

export default function ActivityPage() {
  return (
    <>
      <Hero
        title={"Discover More\nExperience More"}
        subtitle="From the sea to the shore, discover unique experiences and activities that bring you closer to the beauty of Amed."
        titleAlign="left"
        subtitleVariant="statement"
        image={{
          src: "/images/activities/activity-hero.png",
          alt: "Guests relaxing in stretch pose beside the pool at Amed Café & Hotel Kebun Wayan",
        }}
      />

      <IntroSection
        heading="Activities"
        // TODO: the screenshot's paragraph here referenced "The Kayon Hotels & Resorts"
        // in Ubud — a different, unrelated property — clearly leftover template text (same
        // issue as Home's Activity intro), not real copy for this site. Not carried over.
        body="From untamed wilderness to the heart of Ubud, The Kayon Hotels & Resorts is a family-owned collection and each uniquely designed
yet united by the same soul."
        linkLabel="Book Now"
        linkDisabled
        linkDisabledReason={BOOKING_UNDEFINED}
      />

      <ActivityShowcase
        heading="Get Active Outdoors or Try Something New"
        mainImage={{
          src: "/images/activities/activity-feature.png",
          alt: "Divers wading into the sea from traditional Balinese boats in Amed",
        }}
        mainCaption="Amed Café & Hotel Kebun Wayan."
        mainHeading="Discover and book activities with us."
        linkLabel="View"
        linkDisabled
        linkDisabledReason={BOOKING_UNDEFINED}
        collage={[
          { src: "/images/activities/collage-wellness.png", alt: "Guests practicing yoga poolside at sunrise" },
          { src: "/images/activities/collage-connect.png", alt: "Writing on lontar leaves" },
          { src: "/images/activities/collage-fishing.png", alt: "Fisherman holding the day's catch" },
          { src: "/images/activities/collage-snorkeling.png", alt: "Snorkelers among reef fish" },
        ]}
      />

      <CardGrid heading="Exceptional Experiences" dotCount={exceptionalExperiences.length}>
        {exceptionalExperiences.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} roundedImage />
        ))}
      </CardGrid>

      <PromoBanner
        eyebrow="Explore"
        heading="Create Memorable Moments"
        body="From underwater adventures to authentic Balinese experiences, there is always something to discover."
        linkLabel="Discover More"
        linkDisabled
        linkDisabledReason="No dedicated page built yet"
        image={{
          src: "/images/activities/promo-memorable-moments.png",
          alt: "Aerial view of the hotel's rooftop terrace and garden",
        }}
        contentPanel
      />
    </>
  );
}
