// Two shapes come from the reference screenshots (see plan §I):
// - Home's teaser cards ("Wellness"/"Fishing"/"Connect"): image + eyebrow + title + a
//   short description, no price. Copy below is transcribed verbatim from
//   /design/Home design.png (real design copy, not placeholder).
// - The full Activity page's "Exceptional Experiences" cards (below) additionally show a
//   price and a bullet list of inclusions, from /design/Activity.png.
export type Activity = {
  id: string;
  name: string;
  description?: string;
  price?: string;
  includes?: string[];
  image?: string;
};

export const homeActivities: Activity[] = [
  {
    id: "wellness",
    name: "Wellness",
    description:
      "Rejuvenate your body and mind through peaceful wellness experiences surrounded by the natural beauty of Amed.",
    image: "/images/activities/wellness.png",
  },
  {
    id: "fishing",
    name: "Fishing",
    description:
      "Set out into the waters of Amed for an authentic fishing experience, surrounded by the sea, mountains, and local coastal life.",
    image: "/images/activities/fishing.png",
  },
  {
    id: "connect",
    name: "Connect",
    description:
      "Discover Balinese heritage through the traditional art of writing on lontar leaves, a meaningful experience to share and remember.",
    image: "/images/activities/connect.png",
  },
  // TODO: duplicates of Fishing/Connect, added only so the Home carousel has enough
  // cards to actually overflow and be draggable at desktop width (3 cards fit exactly
  // 3-per-row with nothing left to scroll). Replace with real additional experiences —
  // do not leave these duplicates in production.
  {
    id: "fishing-2",
    name: "Fishing",
    description:
      "Set out into the waters of Amed for an authentic fishing experience, surrounded by the sea, mountains, and local coastal life.",
    image: "/images/activities/fishing.png",
  },
  {
    id: "connect-2",
    name: "Connect",
    description:
      "Discover Balinese heritage through the traditional art of writing on lontar leaves, a meaningful experience to share and remember.",
    image: "/images/activities/connect.png",
  },
];

// "Exceptional Experiences" card grid on the Activity page (/design/Activity.png).
// Copy transcribed verbatim, including its two typos ("propided", "workshoop") —
// preserved as shown in the reference rather than silently corrected; worth flagging
// back to the client rather than editing without being asked.
export const exceptionalExperiences: Activity[] = [
  {
    id: "snorkeling-trip",
    name: "Snorkeling Trip",
    price: "Rp700.000/Pax",
    includes: ["Snorkeling equipment", "Traditional boat", "3 spot snorkeling"],
    image: "/images/activities/snorkeling-trip.png",
  },
  {
    id: "fishing-bbq",
    name: "Fishing trip & BBQ",
    price: "Rp1.200.000/2 Pax",
    includes: [
      "Boat and equipment fishing",
      "Freshly caught fish grilled on-site",
      "Complimentary side dishes and fish tools",
      "Complimentary welcome drink",
    ],
    image: "/images/activities/fishing-bbq.png",
  },
  {
    id: "writing-lontar",
    name: "Writing on Lontar",
    price: "Rp200.000/Pax",
    includes: [
      "Writing practice on lontar leaves",
      "All materials propided",
      "Afternoon tea after workshoop",
      "Balinese sarong provided during activity",
      "Complimentary photo session",
    ],
    image: "/images/activities/writing-lontar.png",
  },
  // TODO: 4th experience — real content not available yet. Temporarily duplicates
  // "Fishing trip & BBQ" (photo + description) per explicit instruction, just to fill
  // the slot and exercise the carousel with 4 cards. Replace with real content + a
  // distinct photo once available — do not leave this duplicate in production.
  {
    id: "placeholder-experience-4",
    name: "Yoga Session",
    price: "Rp100.000/2 Pax",
    includes: [
      "All materials provided Afternoon tea after worksho",
      "All materials provided Afternoon tea after worksho",
      "All materials provided Afternoon tea after worksho",
      "All materials provided Afternoon tea after worksho",
    ],
    image: "/images/activities/activity-hero.png",
  },
];
