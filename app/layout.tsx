import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

// Global app font — used for both display and body across every page.
const baloo = Baloo_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-baloo",
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className={baloo.variable}>
      <body>
        <div className="page-atmosphere" aria-hidden="true" />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
