import Image from "next/image";
import type { Room } from "@/data/rooms";
import PriceBadge from "@/components/ui/PriceBadge";
import styles from "./RoomCard.module.css";

export type RoomCardProps = {
  room: Room;
};

// Booking platform logos shown on each room card in design/ROOM.png (Traveloka, tiket.com,
// Agoda) — transparent HD logo assets provided directly in design/room/ (Frame 82 (1)1.png,
// Frame 82 (1).png, Frame 82 (2).png), rendered on this component's own flat tan background
// (not a flattened screenshot crop, so no baked-in shadow/background mismatch). No real
// affiliate links were provided for these platforms, so the buttons stay visual-only
// (non-navigating).
const OTA_LOGOS = [
  { name: "Traveloka", src: "/images/rooms/icons/ota-traveloka.png" },
  { name: "tiket.com", src: "/images/rooms/icons/ota-tiket.png" },
  { name: "Agoda", src: "/images/rooms/icons/ota-agoda.png" },
];

// Reuses the same Central Reservations number already published in the Footer/Contact
// page (tel:+6287715021995) — a real, already-confirmed contact number, not a new one.
const WHATSAPP_NUMBER = "6287715021995";

export default function RoomCard({ room }: RoomCardProps) {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi, I'd like to enquire about the ${room.name} at Amed Café & Hotel Kebun Wayan.`
  )}`;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {room.image ? (
          <Image src={room.image} alt={room.name} fill className={styles.image} />
        ) : (
          // TODO: replace with real room photography once available (plan §M.1)
          <span aria-hidden="true" />
        )}
        <PriceBadge
          amount={`${room.currency}${room.ratePerNight.toLocaleString()}`}
          unit="Night"
          className={styles.badge}
        />
        <a
          className={styles.whatsapp}
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Enquire about ${room.name} on WhatsApp`}
        >
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <circle cx="16" cy="16" r="16" fill="#fff" />
            <path
              fill="#25D366"
              d="M16 5.3A10.6 10.6 0 0 0 6.9 21.4L5.3 26.7l5.5-1.4A10.6 10.6 0 1 0 16 5.3Zm0 1.9a8.7 8.7 0 0 1 7.3 13.4l-.2.4.9 3.1-3.2-.8-.4.2A8.7 8.7 0 1 1 16 7.2Zm-3.9 4.3c-.2 0-.5 0-.7.3-.2.2-.9.9-.9 2.1s.9 2.4 1 2.6c.1.1 1.8 2.9 4.5 4 2.2 1 2.7.8 3.2.7.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.4-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.6-.9-2.1-.2-.5-.4-.4-.6-.4h-.5Z"
            />
          </svg>
        </a>
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{room.name}</h3>
        <p className={styles.meta}>Guests: {room.maxGuests}</p>
        <p className={styles.meta}>Room Size: {room.sizeSqm} m²</p>
        <p className={styles.meta}>Bedding: {room.bedding}</p>
        {room.includesBreakfast && <p className={styles.meta}>Includes Breakfast</p>}
      </div>

      <div className={styles.otaRow}>
        {OTA_LOGOS.map((ota) => (
          <span key={ota.name} className={styles.otaButton} title={`${ota.name} — booking link not yet available`}>
            <Image src={ota.src} alt={ota.name} fill className={styles.otaImage} />
          </span>
        ))}
      </div>
    </article>
  );
}
