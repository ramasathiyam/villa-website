import Image from "next/image";
import Hero from "@/components/sections/Hero";
import RoomSearchBar from "@/components/sections/RoomSearchBar";
import IntroSection from "@/components/sections/IntroSection";
import PromoBanner from "@/components/sections/PromoBanner";
import RoomCard from "@/components/cards/RoomCard";
import SectionHeading from "@/components/ui/SectionHeading";
import PriceBadge from "@/components/ui/PriceBadge";
import Button from "@/components/ui/Button";
import { rooms, familyRoom } from "@/data/rooms";
import styles from "./page.module.css";

// Section order and copy follow /design/ROOM.png (Room task): Hero (+ search bar
// overlapping its bottom edge) -> Rooms (IntroSection) -> 6-card room grid -> Family
// Room + Hotel Information composite -> Amed Escape (PromoBanner).
const BOOKING_UNDEFINED = "Booking flow not defined yet — see plan §M.10";

// Reference shows this paragraph in Title Case; normalized to sentence case to match
// every other body paragraph on the site (same class of cleanup as "Massage" -> "Message"
// on the Contact page), and "Amed Cafe" -> "Amed Café" to match the brand spelling used
// everywhere else. Trailing comma before the final sentence in the reference is a typo,
// corrected to a period.
const HOTEL_INFO =
  "Each room at the hotel is equipped with a wardrobe. In addition to a private bathroom with a shower and complimentary toiletries, rooms at Amed Café & Hotel Kebun Wayan also offer free WiFi. Some rooms feature sea views. All units are fitted with air conditioning and a work desk. A daily breakfast is served with buffet.";

export default function RoomPage() {
  return (
    <>
      <Hero
        title="Rooms"
        subtitle="The Balinese Style Hotel in Amed Bali"
        image={{ src: "/images/rooms/hero.png", alt: "Close-up of a Balinese-carved bed headboard with patterned cushions" }}
      />
      <RoomSearchBar />

      <IntroSection
        heading="Rooms"
        body="Nestled in the tranquil village of Amed, Kebun Wayan is a charming café and hotel surrounded by tropical gardens, offering a peaceful escape with the authentic beauty of Bali."
        linkLabel="Book Now"
        linkDisabled
        linkDisabledReason={BOOKING_UNDEFINED}
      />

      <div className={styles.roomGrid}>
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>

      {/* Family Room + Hotel Information composite — the reference bakes a "FAMILY ROOM"
          label and price badge into the photo itself; both are re-rendered here as real
          HTML/CSS overlays (PriceBadge component) on a clean crop of the same photo,
          consistent with how every other card's price badge on this site is a CSS
          overlay, not part of the image. The reference also shows Traveloka/tiket.com/
          Agoda booking buttons on each room card — omitted everywhere on this page since
          no real asset or booking link for those platforms was provided; "Book Now"
          (disabled, booking flow undefined) already represents that same gap. */}
      <div className={styles.familyRoom}>
        <div className={styles.familyPhoto}>
          <Image
            src={familyRoom.image}
            alt="Family Room bed with carved wooden headboard and folded towel elephants"
            fill
            className={styles.familyPhotoImg}
          />
          <span className={styles.familyLabel}>Family Room</span>
          <PriceBadge
            amount={`${familyRoom.currency}${familyRoom.ratePerNight.toLocaleString()}`}
            unit="Night"
            className={styles.familyBadge}
          />
        </div>

        <div className={styles.familyDetailCol}>
          <div className={styles.familyDetailPhoto}>
            <Image
              src="/images/rooms/family-room-detail.png"
              alt="Bedside table with a lamp and fresh flowers in the Family Room"
              fill
              className={styles.familyDetailImg}
            />
          </div>
          <div className={styles.familyDetailPhoto}>
            <Image
              src="/images/rooms/family-room-detail.png"
              alt="Bedside table with a lamp and fresh flowers in the Family Room"
              fill
              className={styles.familyDetailImg}
            />
          </div>
        </div>

        <div className={styles.familyInfo}>
          <SectionHeading as="h2" align="left" uppercase={false}>
            Hotel Information
          </SectionHeading>
          <p>{HOTEL_INFO}</p>

          <div className={styles.familyMeta}>
            <p className={styles.familyMetaItem}>Guests: {familyRoom.maxGuests}</p>
            <p className={styles.familyMetaItem}>Include: Breakfast</p>
            <p className={styles.familyMetaItem}>Room Size: {familyRoom.sizeSqm} m²</p>
            <p className={styles.familyMetaItem}>Bedding: {familyRoom.bedding}</p>
          </div>

          <div className={styles.familyFooter}>
            <Button variant="solid" disabled disabledReason={BOOKING_UNDEFINED}>
              Book Now
            </Button>
          </div>
        </div>
      </div>

      <PromoBanner
        eyebrow="Explore"
        heading="Amed Escape"
        body="Experience the peaceful charm of Amed, where tropical surroundings, ocean views, and authentic Balinese hospitality come together to create a memorable stay."
        linkLabel="Discover More"
        linkDisabled
        linkDisabledReason="No dedicated page built yet"
        contentPanel
        image={{ src: "/images/rooms/promo-amed-escape.png", alt: "Rooftop sunset with cocktail overlooking the ocean in Amed" }}
      />
    </>
  );
}
