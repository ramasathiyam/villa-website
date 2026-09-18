"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { NavItem } from "@/data/navigation";
import styles from "./Navbar.module.css";

export type NavDropdownProps = {
  item: NavItem;
};

// Desktop "Dining" dropdown: opens on hover (mouseenter/mouseleave on the whole wrapper,
// not the trigger alone — moving between the trigger and the menu never fires the
// wrapper's mouseleave, so the menu can't be lost mid-transition) and also toggles on
// click, per the Dining dropdown fix task. Selecting a submenu link explicitly closes it
// (Next.js client-side navigation doesn't move the pointer or unmount the Navbar, so a
// pure CSS :hover would otherwise stay open after the click). A document click-outside
// listener also closes it for click-only/touch input where hover events don't fire.
export default function NavDropdown({ item }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <li
      ref={rootRef}
      className={styles.navItemWithChildren}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      data-open={open ? "true" : undefined}
    >
      <button
        type="button"
        className={styles.dropdownTrigger}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={(event) => {
          const next = !open;
          setOpen(next);
          // Closing via click: without this, the button keeps focus after the click and
          // the CSS `:focus-within` keyboard-accessibility fallback (see Navbar.module.css)
          // would keep the menu visually open regardless of the state we just set.
          if (!next) event.currentTarget.blur();
        }}
      >
        {item.label}
        <span className={styles.caret} aria-hidden="true">
          ▾
        </span>
      </button>
      <div className={styles.dropdown}>
        <ul>
          {item.children?.map((child) => (
            <li key={child.label}>
              <Link
                href={child.href ?? "/"}
                onClick={(event) => {
                  setOpen(false);
                  // Same reasoning as the trigger's blur-on-close: the link keeps focus
                  // after the click, which would keep `:focus-within` (the keyboard
                  // fallback) holding the menu open regardless of the state above.
                  event.currentTarget.blur();
                }}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
