// Primary nav, matching the link set shown in every /design screenshot (CLAUDE.md §2).
// "Special Offers" has no reference screenshot yet (CLAUDE.md §F / plan §C / plan §M.9) —
// it stays in the nav for visual parity but renders disabled (non-navigating) instead of
// a fabricated "#" URL. "Contact Us" links to the real /contact page.
// "Dining" is a dropdown trigger only (no page of its own — two separate venues instead,
// per the Dining task): hovering/tapping it reveals Resto Amed Cafe and Barak Rooftop and
// Bar, each with a real page.
export type NavItem = {
  label: string;
  href?: string;
  disabled?: boolean;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Room", href: "/room" },
  { label: "Activity", href: "/activity" },
  {
    label: "Dining",
    children: [
      { label: "Resto Amed Cafe", href: "/dining/resto-amed-cafe" },
      { label: "Barak Rooftop and Bar", href: "/dining/barak-rooftop-and-bar" },
    ],
  },
  { label: "Spa", href: "/spa" },
  { label: "Special Offers", href: "/", disabled: true },
  { label: "Contact Us", href: "/contact" },
];
