import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/navigation";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";
import NavDropdown from "./NavDropdown";
import styles from "./Navbar.module.css";

// Shared header, overlaid on every page's hero (CLAUDE.md §2): a thin utility row
// (contact icons + Book Now), a centered logo row, and a centered nav-links row.
export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.utilityRow}>
        <div className={styles.contactIcons}>
          {/* TODO: wire to real tel:/mailto: once contact info is confirmed (plan §M.7) */}
          <span aria-label="Phone">☎</span>
          <span aria-label="Email">✉</span>
        </div>

        <div className={styles.utilityRight}>
          <Button
            variant="primary"
            disabled
            disabledReason="Booking flow not defined yet — see plan §M.10"
          >
            Book Now
          </Button>
          <MobileMenu navItems={navItems} />
        </div>
      </div>

      <div className={styles.logoRow}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo/logo-white.png"
            alt="Amed Café & Hotel Kebun Wayan"
            width={398}
            height={212}
            className={styles.logoImage}
            priority
          />
        </Link>
      </div>

      <nav className={styles.navRow} aria-label="Primary">
        <ul className={styles.links}>
          {navItems.map((item) => {
            if (item.children) {
              return <NavDropdown key={item.label} item={item} />;
            }

            return item.disabled ? (
              <li key={item.label}>
                <span
                  className={styles.linkDisabled}
                  aria-disabled="true"
                  title="Page coming soon"
                >
                  {item.label}
                </span>
              </li>
            ) : (
              <li key={item.label}>
                <Link href={item.href ?? "/"}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
