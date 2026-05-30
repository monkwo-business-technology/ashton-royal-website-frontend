import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Housing } from "@/components/Housing";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Housing />
      <Contact />
    </main>
  );
}
