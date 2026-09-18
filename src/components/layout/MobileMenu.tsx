"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { NavItem } from "@/data/navigation";
import Button from "@/components/ui/Button";
import styles from "./MobileMenu.module.css";

// Hamburger nav toggle for small screens — required for a responsive Navbar (CLAUDE.md §11),
// even though no reference screenshot shows a mobile state (see plan §H). No extra dependency:
// plain useState + a couple of DOM effects for Escape-to-close and focus handling.
// Items with `children` (Dining) expand in place on tap — mobile has no hover, so the
// desktop CSS-only dropdown doesn't apply here.
export type MobileMenuProps = {
  navItems: NavItem[];
};

export default function MobileMenu({ navItems }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function close() {
    setOpen(false);
    setOpenSubmenu(null);
    toggleButtonRef.current?.focus();
  }

  function toggleSubmenu(label: string) {
    setOpenSubmenu((current) => (current === label ? null : label));
  }

  return (
    <>
      <button
        ref={toggleButtonRef}
        type="button"
        className={styles.toggle}
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      {open && (
        <div className={styles.panel} role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.close}
            aria-label="Close menu"
            onClick={close}
          >
            &times;
          </button>

          <ul className={styles.panelLinks}>
            {navItems.map((item) => {
              if (item.children) {
                const expanded = openSubmenu === item.label;
                return (
                  <li key={item.label} className={styles.panelGroup}>
                    <button
                      type="button"
                      className={styles.panelSubmenuTrigger}
                      onClick={() => toggleSubmenu(item.label)}
                      aria-expanded={expanded}
                    >
                      {item.label}
                      <span aria-hidden="true">{expanded ? "−" : "+"}</span>
                    </button>
                    {expanded && (
                      <ul className={styles.panelSubmenu}>
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link href={child.href ?? "/"} onClick={close}>
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  {item.disabled ? (
                    <span aria-disabled="true" title="Page coming soon" className={styles.panelLinkDisabled}>
                      {item.label}
                    </span>
                  ) : (
                    <Link href={item.href ?? "/"} onClick={close}>
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <Button
            variant="primary"
            disabled
            disabledReason="Booking flow not defined yet — see plan §M.10"
          >
            Book Now
          </Button>
        </div>
      )}
    </>
  );
}
