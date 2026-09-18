import Hero from "@/components/sections/Hero";
import IntroSection from "@/components/sections/IntroSection";
import ContactSection from "@/components/sections/ContactSection";
import PromoBanner from "@/components/sections/PromoBanner";

// Section order and copy follow /design/Contact.png (plan §I "Contact" mapping):
// Hero (left-aligned title, matches Activity's pattern) -> Contact Us (IntroSection) ->
// Contact Us / Get in Touch (ContactSection: info column + form) -> Amed Escape (PromoBanner).
const BOOKING_UNDEFINED = "Booking flow not defined yet — see plan §M.10";
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/MGx11Qekuz8wZY7k9";

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="The Balinese Style Hotel in Amed Bali"
        titleAlign="left"
        image={{
          src: "/images/contact/contact-hero.png",
          alt: "Refill mineral water bottle on a café table at Amed Café & Hotel Kebun Wayan",
        }}
      />

      <IntroSection
        heading="Contact Us"
        body="Nestled in the tranquil village of Amed, Kebun Wayan is a charming café and hotel surrounded by tropical gardens, offering a peaceful escape with the authentic beauty of Bali."
        linkLabel="Book Now"
        linkDisabled
        linkDisabledReason={BOOKING_UNDEFINED}
      />

      <ContactSection
        eyebrow="Amed Café & Hotel Kebun Wayan"
        heading="Contact Us"
        // TODO: the reference shows Lorem Ipsum placeholder text here — not real copy,
        // not carried over. Replace with real intro copy for this section.
        body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London,"
        formHeading="Get in Touch"
        infoItems={[
          {
            icon: <span aria-hidden="true">⌖</span>,
            label: "Visit Us",
            value: (
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
                Jl. Raya Amed, Karangasem, Indonesia 80852
              </a>
            ),
          },
          {
            icon: <span aria-hidden="true">☎</span>,
            label: "Phone",
            value: (
              <>
                <a href="tel:+6236323473">(0363) 23473</a>
                <br />
                <a href="tel:+6287715021995">087715021995</a>
              </>
            ),
          },
          {
            icon: <span aria-hidden="true">✉</span>,
            label: "Email",
            // TODO: placeholder — no real email address was provided (plan §M.7).
            value: "info@amedcafe.com",
          },
        ]}
      />

      <PromoBanner
        eyebrow="Explore"
        heading="Amed Escape"
        body="Experience the peaceful charm of Amed, where tropical surroundings, ocean views, and authentic Balinese hospitality come together to create a memorable stay."
        linkLabel="Discover More"
        linkDisabled
        linkDisabledReason="No dedicated page built yet"
        image={{
          src: "/images/contact/promo-amed-escape.png",
          alt: "Rooftop sunset with cocktail overlooking the ocean in Amed",
        }}
        contentPanel
      />
    </>
  );
}
