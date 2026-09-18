import type { Metadata } from "next";
import { Elsie, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/animations/Reveal";
import "./globals.css";

// Confirmed brand fonts: Elsie (heading/display) + Inter (body/UI) — see tokens.css
// §Typography for which components use which. Elsie only ships weight 400 and 900
// (no variable axis), so it must be requested explicitly; Inter is a variable font.
const elsie = Elsie({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-elsie",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amed Café & Hotel Kebun Wayan",
  description: "The Balinese style hotel in Amed, Bali.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${elsie.variable} ${inter.variable}`}>
      <body>
        {/* Navbar overlays whatever is at the top of the page (currently every route opens
            with a Hero, per CLAUDE.md §2). A solid/non-overlay state for hero-less pages
            is a future concern — see Navbar.module.css TODO. */}
        <Navbar />
        <main>{children}</main>
        {/* Footer: subtle fade-in only, per the motion spec — no translateY/movement. */}
        <Reveal variant="fade">
          <Footer />
        </Reveal>
      </body>
    </html>
  );
}
