import Image from "next/image";
import Button from "@/components/ui/Button";
import RuleLink from "@/components/ui/RuleLink";
import { navItems } from "@/data/navigation";
import styles from "./Footer.module.css";

// Shared footer, identical on every page (CLAUDE.md §9). Contact info and socials are
// clearly-marked placeholders pending plan §M item 7 — nothing there is real yet.
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/MGx11Qekuz8wZY7k9";

export default function Footer() {
  // Matches the /design footer's "About Us" column (Room, Activity, Dining, Spa, Special
  // Offers) — Special Offers still has no page, so it renders disabled like in the navbar.
  // "Dining" is now a dropdown-only parent (no page of its own — two separate venues),
  // so its two real pages are flattened into this flat footer list instead of the parent.
  const aboutLinks = navItems.flatMap((item) => {
    if (item.children) return item.children;
    if (item.href === "/" || item.label === "Contact Us") return [];
    return [item];
  });

  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <div>
          <p className={styles.newsletterHeading}>Become a Member</p>
          <p className={styles.newsletterSub}>Stay Connected</p>
        </div>
        {/* TODO: wire to a real newsletter service once one is chosen (plan §M.11) */}
        <form className={styles.newsletterForm}>
          <input type="email" name="email" placeholder="Email Address" required />
          <Button type="submit" variant="solid">
            Submit
          </Button>
        </form>
      </div>

      <div className={styles.columns}>
        <div className={styles.brand}>
          <Image
            src="/images/logo/logo-white.png"
            alt="Amed Café & Hotel Kebun Wayan"
            width={398}
            height={212}
            className={styles.brandMark}
          />
        </div>

        <div>
          <h3>Contact Us</h3>
          <ul>
            {/* TODO: email is still a placeholder — no real address was provided
                (plan §M.7). Phone numbers below are real, given directly. */}
            <li>info@amedcafe.com</li>
            <li>
              <a href="tel:+6236323473">(0363) 23473</a>
            </li>
            <li>
              <a href="tel:+6287715021995">087715021995</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>About Us</h3>
          <ul>
            {aboutLinks.map((item) => (
              <li key={item.label}>
                {item.disabled ? (
                  <span aria-disabled="true" title="Page coming soon" className={styles.linkDisabled}>
                    {item.label}
                  </span>
                ) : (
                  <a href={item.href}>{item.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Location</h3>
          <address className={styles.address}>
            Amed Café &amp; Hotel Kebun Wayan
            <br />
            Jl. Raya Amed,
            <br />
            Karangasem, Indonesia 80852
          </address>
          <a
            className={styles.mapImageLink}
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Amed Café & Hotel Kebun Wayan on Google Maps"
          >
            <Image
              src="/images/footer/map.png"
              alt="Map showing the location of Amed Café & Hotel Kebun Wayan"
              width={789}
              height={288}
              className={styles.mapImage}
            />
          </a>
          <RuleLink
            className={styles.mapsLink}
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </RuleLink>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <ul className={styles.socials}>
          {/* TODO: replace with real social URLs (plan §M.7) — currently non-navigating */}
          <li>
            <span aria-disabled="true" title="Facebook link not yet available">
              FB
            </span>
          </li>
          <li>
            <span aria-disabled="true" title="Instagram link not yet available">
              IG
            </span>
          </li>
          <li>
            <span aria-disabled="true" title="LinkedIn link not yet available">
              LI
            </span>
          </li>
          <li>
            <span aria-disabled="true" title="YouTube link not yet available">
              YT
            </span>
          </li>
        </ul>
        <p>Copyright © {new Date().getFullYear()} Amed Café &amp; Hotel Kebun Wayan</p>
      </div>
    </footer>
  );
}
