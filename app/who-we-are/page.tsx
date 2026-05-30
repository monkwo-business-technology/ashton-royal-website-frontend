import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { IMAGES, TEAM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who We Are — Ashton Royal Living",
  description:
    "Ashton Royal Living is a family-first communal housing community for veterans, seniors, sober living, and independent adults, supported by a personal care team with 25+ years of experience.",
};

const values = [
  { title: "Compassion first", body: "We extend a compassionate hand to everyone who walks through our doors." },
  { title: "Dignity & respect", body: "Every individual is valued, respected, and embraced — exactly as they are." },
  { title: "Safety & wellbeing", body: "Drug & alcohol-free homes with a personal care team nurturing daily wellbeing." },
  { title: "Belonging", body: "Senior, veteran, or new beginning — you'll always find a place to belong here." },
];

const stats = [
  { value: "25+", label: "Years of Combined Experience" },
  { value: "10K+", label: "Happy Residents" },
  { value: "5K+", label: "Care & Support Touchpoints" },
  { value: "100%", label: "Equal Housing Opportunity" },
];

export default function WhoWeAre() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="Who We Are"
        title="More than housing —"
        highlight="we're a family."
        subtitle="Step into a world where warmth and support greet you at every turn. We provide safe, affordable communal housing for veterans, seniors, sober living, and independent adults."
        image={IMAGES.caregiverSenior}
        alt="A caregiver and a senior resident sharing a warm moment"
        cta={{ label: "Meet our team", href: "#team" }}
      />

      {/* Story */}
      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative aspect-[5/4] overflow-hidden rounded-[2.5rem] border border-white/50 shadow-[0_30px_70px_-40px_rgba(8,26,61,0.5)]">
            <Image src={IMAGES.cooking} alt="Residents and staff preparing a meal together" fill sizes="(max-width:1024px) 100vw, 32rem" className="object-cover" />
          </Reveal>
          <div>
            <Reveal><p className="eyebrow text-orange-600">Our Story</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl font-light leading-tight tracking-tight text-blue-900 sm:text-5xl">
                A community built on <span className="italic text-gild font-semibold">care</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                At Ashton Royal Living, we&rsquo;re more than just a housing community.
                Our mission is to extend a compassionate hand and nurture a sense of
                wellbeing in every individual who walks through our doors.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                Our staff — including our personal care team — together has over{" "}
                <strong className="font-semibold text-blue-800">25 years</strong> of
                experience, and we work alongside an amazing team to make every home safe,
                welcoming, and full of belonging.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Veterans", "Seniors", "Sober Living", "Independent Adults"].map((t) => (
                  <span key={t} className="rounded-full border border-blue-700/15 bg-white/60 px-4 py-2 text-sm font-medium text-blue-800">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-6xl">
          <Reveal><p className="eyebrow text-orange-600">What We Stand For</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-light leading-tight tracking-tight text-blue-900 sm:text-4xl">
              Values that shape every home.
            </h2>
          </Reveal>
          <Stagger amount={0.08} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="glass h-full rounded-3xl p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-blue-900">{v.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-28 px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Reveal><p className="eyebrow text-orange-600">Our People</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl font-light leading-tight tracking-tight text-blue-900 sm:text-5xl">
                The team behind the <span className="italic text-gild font-semibold">warmth</span>.
              </h2>
            </Reveal>
          </div>
          <Stagger amount={0.1} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m) => (
              <StaggerItem key={m.name}>
                <div className="group glass overflow-hidden rounded-3xl">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image src={m.image} alt={`Portrait of ${m.name}, ${m.role}`} fill sizes="(max-width:1024px) 50vw, 16rem" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />
                    <div className="absolute bottom-0 p-5 text-cloud">
                      <p className="font-display text-lg font-semibold">{m.name}</p>
                      <p className="text-sm text-orange-200">{m.role}</p>
                    </div>
                  </div>
                  <p className="p-5 text-[0.92rem] leading-relaxed text-ink-soft">{m.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-6xl">
          <Stagger amount={0.1} className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/60 bg-orange-400/20 lg:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="glass-dark h-full px-6 py-8 text-center">
                  <p className="font-display text-4xl font-semibold text-orange-200 sm:text-5xl">{s.value}</p>
                  <p className="mt-2 text-sm leading-snug text-cloud/70">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand title="Come see what belonging feels like." />
    </main>
  );
}
