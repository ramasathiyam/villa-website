export type MenuItem = {
  id: string;
  name: string;
  description: string;
  image: string;
};

// "Signature Cocktails" carousel on Barak Rooftop and Bar (/design/Barak Rooftop and bar.png).
// The reference shows the same name + ingredient line ("Azure Sunset" / "Vodka Peach Lemon
// Gin Blue Lime") repeated under all 4 cards, despite each having a visually distinct photo.
// Transcribed verbatim since it's legible real text (unlike the "Menu Highlight" strip's
// gibberish captions, which were not carried over) — but this repetition is very likely
// template placeholder, not 4 genuinely distinct recipes. Flag back to the client.
export const signatureCocktails: MenuItem[] = [
  {
    id: "cocktail-1",
    name: "Azure Sunset",
    description: "Vodka Peach Lemon Gin Blue Lime",
    image: "/images/dining/barak-rooftop-and-bar/cocktail-1.png",
  },
  {
    id: "cocktail-2",
    name: "Azure Sunset",
    description: "Vodka Peach Lemon Gin Blue Lime",
    image: "/images/dining/barak-rooftop-and-bar/cocktail-2.png",
  },
  {
    id: "cocktail-3",
    name: "Azure Sunset",
    description: "Vodka Peach Lemon Gin Blue Lime",
    image: "/images/dining/barak-rooftop-and-bar/cocktail-3.png",
  },
  {
    id: "cocktail-4",
    name: "Azure Sunset",
    description: "Vodka Peach Lemon Gin Blue Lime",
    image: "/images/dining/barak-rooftop-and-bar/cocktail-4.png",
  },
];
