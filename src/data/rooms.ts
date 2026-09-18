// Room inventory transcribed from design/ROOM.png (names, rates, sizes, bedding, guest
// count). The reference reuses the same single sunset-view photo for all 6 room-type
// cards (only the Family Room below has its own distinct photo) — kept as-is here since
// it's real photography, just applied to every card the way the source design does.
// Rates/sizes are the reference's own figures — unconfirmed placeholders per CLAUDE.md
// §M.4 until the client signs off on real pricing.
export type Room = {
  id: string;
  name: string;
  ratePerNight: number;
  currency: string;
  sizeSqm: number;
  maxGuests: number;
  bedding: string;
  includesBreakfast: boolean;
  image: string;
};

export const rooms: Room[] = [
  {
    id: "superior-double-twin",
    name: "Superior Double / Twin Room",
    ratePerNight: 700000,
    currency: "Rp",
    sizeSqm: 24,
    maxGuests: 5,
    bedding: "1 Large Double Bed OR 2 Single Beds",
    includesBreakfast: true,
    image: "/images/rooms/room-card.png",
  },
  {
    id: "deluxe-room-pool-view",
    name: "Deluxe Room Pool View",
    ratePerNight: 800000,
    currency: "Rp",
    sizeSqm: 30,
    maxGuests: 5,
    bedding: "1 Large Double Bed OR 2 Single Beds",
    includesBreakfast: true,
    image: "/images/rooms/room-card.png",
  },
  {
    id: "deluxe-double-sea-view",
    name: "Deluxe Double Room With Sea View",
    ratePerNight: 950000,
    currency: "Rp",
    sizeSqm: 30,
    maxGuests: 5,
    bedding: "1 Extra Large Double Bed",
    includesBreakfast: true,
    image: "/images/rooms/room-card.png",
  },
  {
    id: "deluxe-twin-room",
    name: "Deluxe Twin Room",
    ratePerNight: 950000,
    currency: "Rp",
    sizeSqm: 30,
    maxGuests: 5,
    bedding: "2 Single Beds",
    includesBreakfast: true,
    image: "/images/rooms/room-card.png",
  },
  {
    id: "triple-room-tv",
    name: "Triple Room With TV",
    ratePerNight: 900000,
    currency: "Rp",
    sizeSqm: 33,
    maxGuests: 5,
    bedding: "1 Large Double Bed + 1 Single Bed, OR 3 Single Beds",
    includesBreakfast: true,
    image: "/images/rooms/room-card.png",
  },
  {
    id: "triple-room-pool-view",
    name: "Triple Room With Pool View",
    ratePerNight: 900000,
    currency: "Rp",
    sizeSqm: 33,
    maxGuests: 5,
    bedding: "1 Large Double Bed + 1 Single Bed",
    includesBreakfast: true,
    image: "/images/rooms/room-card.png",
  },
];

// Family Room: a distinct composite section in the reference (own large photo + two
// detail shots + a "Hotel Information" copy block), not just another grid card.
export const familyRoom: Room = {
  id: "family-room",
  name: "Family Room",
  ratePerNight: 700000,
  currency: "Rp",
  sizeSqm: 24,
  maxGuests: 5,
  bedding: "1 Large Double Bed OR 2 Single Beds",
  includesBreakfast: true,
  image: "/images/rooms/family-room-main.png",
};
