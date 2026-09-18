"use client";

import Button from "@/components/ui/Button";
import styles from "./RoomSearchBar.module.css";

// Floating room-search panel overlapping the hero's bottom edge (design/ROOM.png).
// Static UI only, like the Contact form and newsletter box — no availability/booking
// backend exists yet (CLAUDE.md: no unnecessary backend functionality; plan §M.10).
// Field labels are corrected from the reference's "Guess"/"Bads" (typos that would
// confuse a real guest filling in the form) to "Guest"/"Beds", matching the same
// judgment call already applied to the Contact page's "Massage" -> "Message" fix.
const FIELDS = [
  { id: "check-in", label: "Check-In", type: "date" },
  { id: "check-out", label: "Check-Out", type: "date" },
  { id: "guest", label: "Guest", type: "number" },
  { id: "beds", label: "Beds", type: "number" },
  { id: "baths", label: "Baths", type: "number" },
] as const;

export default function RoomSearchBar() {
  return (
    <div className={styles.wrap}>
      <form className={styles.panel} onSubmit={(event) => event.preventDefault()}>
        {FIELDS.map((field) => (
          <div className={styles.field} key={field.id}>
            <label className={styles.label} htmlFor={`room-search-${field.id}`}>
              {field.label}
            </label>
            <input
              id={`room-search-${field.id}`}
              className={styles.input}
              type={field.type}
              name={field.id}
              min={field.type === "number" ? 1 : undefined}
            />
          </div>
        ))}

        <Button type="submit" variant="solid" className={styles.submit}>
          Search
        </Button>
      </form>
    </div>
  );
}
