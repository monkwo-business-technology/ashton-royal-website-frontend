import Image from "next/image";
import Link from "next/link";
import { NAV, CONTACT } from "@/lib/site";

const legal = ["Privacy Policy", "Terms of Service", "FAQ", "Equal Housing"];

export function Footer() {
  return (
    <footer className="relative px-4 pb-10 pt-8">
      <div className="mx-auto max-w-6xl">
        <div className="glass rounded-[2.5rem] p-9 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <Link href="/" className="flex items-center gap-3">
                <span className="relative block h-12 w-12 overflow-hidden rounded-full ring-1 ring-orange-400/60">
                  <Image src="/logo.jpg" alt="Ashton Royal Living" fill className="object-cover" sizes="48px" />
                </span>
                <span className="flex flex-col leading-none">
                  <span className="font-display text-xl font-semibold tracking-tight text-blue-900">
                    Ashton Royal Living
                  </span>
                  <span className="eyebrow text-[0.6rem] text-orange-600">
                    Empowering Lives
                  </span>
                </span>
              </Link>
              <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">
                Safe and affordable communal housing for veterans, seniors, sober
                living, and independent adults. We can&rsquo;t wait to welcome you home.
              </p>
              <div className="mt-6 flex flex-col gap-1">
                <a
                  href={CONTACT.phoneHref}
                  className="font-display text-lg font-semibold text-blue-900 hover:text-blue-700"
                >
                  {CONTACT.phone}
                </a>
                <a
                  href={CONTACT.emailHref}
                  className="text-sm text-ink-soft hover:text-blue-700"
                >
                  {CONTACT.email}
                </a>
                <span className="text-sm text-ink-soft">{CONTACT.area}</span>
              </div>
            </div>

            <div>
              <p className="eyebrow text-orange-600">Explore</p>
              <ul className="mt-4 space-y-2.5">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      className="text-ink-soft transition-colors hover:text-blue-800"
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/appointment"
                    className="text-ink-soft transition-colors hover:text-blue-800"
                  >
                    Book an Appointment
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow text-orange-600">Company</p>
              <ul className="mt-4 space-y-2.5">
                {legal.map((l) => (
                  <li key={l}>
                    <Link
                      href="/contact"
                      className="text-ink-soft transition-colors hover:text-blue-800"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="my-8 hairline" />

          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-ink-soft sm:flex-row sm:text-left">
            <p>&copy; {2024} Ashton Royal Living. All rights reserved.</p>
            <p>
              Developed by{" "}
              <span className="font-semibold text-blue-800">
                iTechNetronics LLC
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
