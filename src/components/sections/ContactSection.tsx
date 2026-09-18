"use client";

import type { ReactNode } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import styles from "./ContactSection.module.css";

// One-off composite for the Contact page's "Contact Us / Get in Touch" section
// (/design/Contact.png): an info column (address/phone/email) beside a contact form.
// No existing component covers this shape (FeatureBlock is text+image, not text+form),
// so it isn't force-fit into one.
export type ContactInfoItem = {
  icon: ReactNode;
  label: string;
  value: ReactNode;
};

export type ContactSectionProps = {
  eyebrow: string;
  heading: string;
  body: string;
  infoItems: ContactInfoItem[];
  formHeading: string;
};

export default function ContactSection({
  eyebrow,
  heading,
  body,
  infoItems,
  formHeading,
}: ContactSectionProps) {
  return (
    <section className={styles.section}>
      <div>
        <div className={styles.infoHeader}>
          <p className={styles.eyebrowRule}>{eyebrow}</p>
          <SectionHeading as="h2" align="left" uppercase={false}>
            {heading}
          </SectionHeading>
          <p className={styles.body}>{body}</p>
        </div>

        <ul className={styles.infoList}>
          {infoItems.map((item) => (
            <li className={styles.infoItem} key={item.label}>
              <span className={styles.infoIcon} aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <p className={styles.infoLabel}>{item.label}</p>
                <p className={styles.infoValue}>{item.value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <SectionHeading as="h2" align="left" className={styles.formHeading}>
          {formHeading}
        </SectionHeading>

        {/* Static UI only — no backend wired (CLAUDE.md: no unnecessary backend
            functionality). preventDefault just stops the native GET-reload. */}
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className={styles.fieldLabel} htmlFor="contact-first-name">
              Name *
            </label>
            <div className={styles.fieldRow}>
              <input
                id="contact-first-name"
                className={styles.input}
                type="text"
                name="firstName"
                placeholder="First Name"
                required
              />
              <input
                className={styles.input}
                type="text"
                name="lastName"
                placeholder="Last Name"
                aria-label="Last Name"
                required
              />
            </div>
          </div>

          <div>
            <label className={styles.fieldLabel} htmlFor="contact-email">
              Email *
            </label>
            <input
              id="contact-email"
              className={styles.input}
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label className={styles.fieldLabel} htmlFor="contact-phone">
              Phone *
            </label>
            <input
              id="contact-phone"
              className={styles.input}
              type="tel"
              name="phone"
              placeholder="Your Number"
              required
            />
          </div>

          <div>
            {/* Reference shows "Massage *" — a typo for "Message" in the source design;
                corrected here since it's a functional form label (leaving it would
                genuinely confuse visitors on a spa/hotel site), unlike descriptive
                copy typos elsewhere that were preserved verbatim. */}
            <label className={styles.fieldLabel} htmlFor="contact-message">
              Message *
            </label>
            <textarea
              id="contact-message"
              className={styles.textarea}
              name="message"
              placeholder="Your Message"
              required
            />
          </div>

          <div className={styles.submitRow}>
            <Button type="submit" variant="solid">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
