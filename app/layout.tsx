import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Ashton Royal Living — Safe, Affordable Communal Housing",
  description:
    "Ashton Royal Living provides safe, affordable communal housing for veterans, seniors, sober living, and independent adults. Furnished VIP rooms, meal prep, medication assistance, and a personal care team with 25+ years of experience.",
  keywords: [
    "communal housing",
    "veteran housing",
    "senior living",
    "sober living",
    "affordable shared housing",
    "VIP furnished rooms",
  ],
  openGraph: {
    title: "Ashton Royal Living",
    description:
      "Empowering Lives, Fostering Community. Safe, affordable communal housing for those in need.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <div className="page-atmosphere" aria-hidden="true" />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
