# Amed Café & Hotel Kebun Wayan — Website

Premium Balinese-style villa/hotel website (Amed, Bali). This file is the source of truth for design and development decisions. **The screenshots in `/design` are the primary visual reference** — when in doubt, match them over generic "modern hotel template" instincts.

Reference files inspected:
- `design/Home design.png` — homepage
- `design/ROOM.png` — Rooms listing page
- `design/Activity.png` — Activities page
- `design/SPA.png` — Spa page
- `design/Barak Rooftop and bar.png` (+ duplicate `(1).png`) — Rooftop bar/dining page

No mobile screenshots were provided. Mobile layout rules below are **inferred** from the desktop hierarchy, not copied from a reference — flag this explicitly if the client provides mobile comps later.

---

## 1. Overall Visual Style

- Boutique/editorial travel-magazine feel, not a generic SaaS-y hotel template. Quiet, warm, photography-led.
- Confidence comes from large authentic photography and negative space, not from UI decoration (no glassmorphism, no heavy shadows, no gradients, no rounded "app-like" cards, no icon soup).
- Every page follows the exact same skeleton: full-bleed hero with page title → intro copy → 1–2 content sections → a dark full-width promo banner ("AMED ESCAPE") → footer. This repetition IS the design system — new pages should reuse it, not invent new patterns.
- Ornamentation is limited to: a short horizontal rule "—" before link labels, small uppercase "eyebrow" labels with a tiny circular bullet icon, and thin dividers. That's it.

## 2. Navbar Structure

Identical on every page, overlaid directly on the hero image (transparent, no solid bar), text in white:

1. Thin utility row at the very top: phone icon + envelope/email icon, small, left-aligned.
2. Main row: centered circular logo badge (line-art hut/palm icon + "AMED CAFÉ & HOTEL KEBUN WAYAN" in small serif caps beneath it).
3. Horizontal nav links, centered, below/around the logo, small uppercase sans-serif with letter-spacing: `HOME · ROOM · ACTIVITY · DINING · SPA · SPECIAL OFFERS · CONTACT US`.
4. A "BOOK NOW" button, top-right corner, present on **every** page — outline/tan pill, small, uppercase, letter-spaced.
5. No solid background color on the navbar — it relies on the hero photo's dark tones (or a subtle dark gradient at the very top) for contrast. Design for a scrolled/sticky state too (e.g., solid dark or white bar on scroll) even though the screenshots don't show it, since this is expected production behavior.

## 3. Typography

- **Display/heading font:** elegant high-contrast serif (Playfair-Display-like). Used for:
  - Hero titles: ALL CAPS, wide letter-spacing, large size (e.g. "AMED CAFÉ & HOTEL KEBUN WAYAN", "ROOMS", "SPA", "BARAK ROOFTOP AND BAR").
  - Section headings: Title Case, medium size (e.g. "About Us", "Activities", "Hotel Information").
- **Nav links / labels / buttons:** clean sans-serif, uppercase, letter-spaced, small (~11–13px equivalent).
- **Body copy:** sans-serif, regular weight, muted gray, centered under section headings or left-aligned in two-column blocks, comfortable line-height, small size (~14–15px equivalent). Never large "hero paragraph" sizing.
- **Hero subtitle/tagline:** serif, all-caps, wide letter-spacing, smaller than the title — always "THE BALINESE STYLE HOTEL IN AMED BALI" style treatment (note: source has a typo "BALINESS" — decide with client whether to correct it or preserve verbatim).
- **Eyebrow labels:** tiny uppercase sans, letter-spaced, preceded by a small circular/bullet icon — e.g. "EXPLORE", "AMED · BALI", "EXPERIENCE", "SEASONAL EVENT". Always precede a heading.
- Only two font families total (one serif, one sans). Do not introduce a third.

## 4. Color Palette

Sampled visually from the screenshots — treat as approximate; refine with real color-picking against source files before final implementation.

| Role | Approx. value | Notes |
|---|---|---|
| Page background | `#FFFFFF` | default section bg |
| Footer / dark banner bg | `#0A0A0A`–`#111111` | near-black, used for footer and the "Amed Escape" promo band overlay |
| Cream/ivory panel bg | `#F4EFE6` | testimonials section, overlapping text card on SPA page |
| Heading / primary text | `#262421` | near-black warm charcoal, not pure black |
| Body / muted text | `#6E6B66` | gray with a warm tint |
| Tan / khaki accent (buttons, price badges) | `#C2A46B`–`#B9A06A` | "Book Now" pill, "Search" button, room price ribbons |
| Divider / rule lines | `#A8A49C` | thin short rules next to "Discover More" links |
| Hero overlay | `rgba(0,0,0,0.3–0.5)` | gradient over hero photography for text legibility |

No bright/saturated brand color exists — warmth comes entirely from photography (terracotta roofs, golden-hour light, wood tones), not from UI paint. **Do not invent a saturated "brand teal/orange" accent color** — stay neutral + tan.

## 5. Spacing System

- Generous vertical rhythm between sections — large breathing room (approx. 80–120px desktop between major sections).
- Hero sections are full-bleed (edge-to-edge, no side margins).
- Content sections sit in a centered, comfortably-wide container (roughly 1200–1280px), with consistent side gutters.
- Card grids (rooms, activities): 3-column, even gutters, image flush to the top of the card with content padding (~20–24px) below.
- Two-column feature blocks: image and text roughly balanced 50/50, with a clear vertical gap between them on mobile.
- Consistent pattern: eyebrow label → small gap → heading → small gap → paragraph → small gap → rule+link. Don't compress this rhythm.

## 6. Image Treatment & Crop Style

- Full-bleed, cinematic, warm/golden-hour toned photography — authentic and candid (real guests, real food texture), not generic stock.
- **Sharp corners everywhere.** No border-radius on photos, no drop shadows, no filters/duotones beyond the natural warm grade already in the photos.
- Hero images: wide landscape crop, dark gradient overlay (top-down and/or bottom-up) purely for text legibility.
- Content pairs: one large image + one text block, image roughly 4:3 or a tall-ish rectangle.
- Collage grids (seen on Activity page): 2×2 grid of small square-ish images beside one large image.
- Overlapping layout used sparingly: a text card overlapping the edge of a photo (SPA page) — this is a deliberate accent, not a default pattern; don't overuse it.
- Price/rate badges sit directly on top of card images as a small light pill in a corner (e.g. "Rp700.000 / Night").

## 7. Buttons

- **No rounded corners on any button.** Sharp rectangles only, consistent with the rest of the UI.
- **Primary "BOOK NOW"**: small rectangular pill, tan/khaki outline or fill, dark uppercase letter-spaced label. Appears top-right of every navbar, unconditionally.
- **Text-link CTAs** ("DISCOVER MORE", "BOOK NOW" inline): not boxed buttons — a short horizontal rule "—" followed by uppercase letter-spaced text. No underline, no arrow icon, no hover-box.
- **Card action button** ("Book Now" on room cards): small solid tan/khaki rectangle, dark text, bottom-right of the card.
- **Form buttons** ("Search" on the room finder, "Submit" on the newsletter): solid tan/khaki or outline rectangle matching the input field height, uppercase small label.
- Keep exactly these 3 button treatments (primary nav pill, text-rule link, solid form/card button). Don't add a 4th style or icon buttons beyond the fixed set (social icons, phone/mail icons).

## 8. Section Patterns (reusable across every page)

1. **Hero** — full-bleed photo, overlaid nav, centered serif ALL-CAPS title + tagline subtitle.
2. **Intro** — centered heading, short centered paragraph, rule+"Book Now" link.
3. **Feature block** — eyebrow label + serif heading + paragraph + rule+link on one side, large image on the other. Alternates image-left/image-right across instances.
4. **Promo banner** ("Amed Escape" / seasonal event) — full-width dark photo with overlay, eyebrow label, heading, paragraph, rule+link. **Appears on every single page**, directly before the footer. Treat this as a mandatory shared component, not a homepage-only section.
5. **Card grid** — 3-column cards (rooms/activities/experiences), image + price badge + title + meta + CTA, with carousel dots below on some pages.
6. **Testimonials** — cream background, 3-column quotes with circular avatar + star rating.
7. **Gallery strip** — row of photography (menu highlights, food shots), consistent aspect ratio, small caption underneath.
8. **Footer** — see below.

## 9. Footer

Identical on every page, black background:

- Top strip: "BECOME A MEMBER / STAY CONNECTED" heading on the left, email input + "Submit" button on the right.
- Middle: 3–4 columns —
  1. Logo + hotel name (left)
  2. "Contact Us" (general enquiries + central reservations, email/phone)
  3. "About Us" (nav link list: Room, Activity, Dining, Spa, Special Offers)
  4. "Location" (small embedded map thumbnail)
- Bottom bar: circular social icons (Facebook, Instagram, LinkedIn, YouTube) left, copyright text right, separated by a thin divider line above.

## 10. Desktop Layout

- Centered content container (~1200–1280px).
- Large hero height (~500–600px equivalent).
- 3-column grids for cards; 2-column (roughly even split) for feature sections.
- Same header/footer shell wraps every page; only the hero image + page title change.

## 11. Mobile Layout (inferred — no reference screenshots provided)

- Collapse the nav into a hamburger menu; keep the centered logo and the "Book Now" button visible in the collapsed header.
- Single-column stacking for all multi-column sections (feature blocks, card grids, footer columns).
- Full-width images, maintaining crop style (no corner rounding).
- Preserve the same section order and rhythm — just stack it; do not drop the promo banner or reorder the footer.
- Reduce (don't eliminate) vertical spacing/section padding proportionally — keep the same relative rhythm, not a cramped mobile-only layout.
- Revisit this section and replace it with real rules if/when mobile comps are provided.

## 12. Recurring Visual Elements Across Pages

- Same navbar shell + same tagline "THE BALINESE STYLE HOTEL IN AMED BALI" under every page's hero title.
- Same "Amed Escape" dark promo banner before the footer, on every page.
- Same footer, unchanged, on every page.
- Eyebrow-label → serif-heading → rule-link rhythm repeats within nearly every section.
- Price badges ("Rp xxx.xxx / Night", "Rp xxx.xxx/Pax") as light pills on card images.
- Circular logo badge (line-art hut/palm icon) used in navbar and footer.

---

## Development Rules

Tech stack is **not yet chosen** — these rules are intentionally stack-agnostic. Pick a stack when implementation starts and append its specific conventions here.

- **Fidelity first.** Build to match the screenshots' hierarchy, proportions, spacing, and type treatment — do not "improve" it into a generic AI-template look (no default rounded cards, no drop-shadow-everywhere, no gradient buttons, no icon-heavy feature grids that aren't in the reference).
- **Component reuse.** The section patterns in §8 (Hero, Feature block, Promo banner, Card grid, Testimonials, Gallery strip, Footer) should each be a single reusable component parameterized by content (image, title, copy, links) — every page assembles from the same small component set instead of bespoke per-page markup.
- **Navbar + footer are shared shells.** One Navbar component and one Footer component used on every route; never duplicate their markup per page.
- **Responsive by default.** Every component must work from mobile through desktop per §11; build mobile-first or verify both ends for every component before considering it done.
- **No unnecessary dependencies.** No UI kit that fights this minimal, custom aesthetic (no default Bootstrap/MUI look-and-feel). Prefer plain CSS/utility classes or a lightweight approach matching whatever framework gets chosen; only add a library when it solves a real, specific need (e.g. a date-picker for the room search, a lightweight carousel).
- **No decorative UI beyond the references.** No icons, badges, animations, or patterns that aren't present in the screenshots. If a section needs something the screenshots don't cover, extend the existing visual language (same type scale, same tan/neutral palette, same sharp-corner rule) rather than introducing new styles.
- **Images.** Treat photography as a first-class asset: serve responsive/optimized images, preserve the sharp-corner/no-filter treatment, and never crop into rounded or heavily stylized containers.
- **Accessibility & semantics.** Use semantic HTML landmarks (`nav`, `header`, `main`, `footer`, proper heading levels), sufficient contrast for text-over-image (the overlay gradients in §6 exist for this reason — keep them), and accessible form labels for the room search / newsletter forms.
- **Production-ready basics.** SEO-friendly metadata per page, proper alt text on all imagery, no console errors/warnings, and a build that passes linting before considering a page complete.
