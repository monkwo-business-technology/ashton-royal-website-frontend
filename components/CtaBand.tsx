import Link from "next/link";
import { CONTACT } from "@/lib/site";

export function CtaBand({
  title = "Ready to feel right at home?",
  subtitle = "Book a visit or send us a message — our team can't wait to welcome you.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-900 to-[#04102a]" />
          <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_85%_15%,rgba(255,156,77,0.3),transparent_55%),radial-gradient(70%_60%_at_10%_90%,rgba(30,92,192,0.5),transparent_55%)]" />
          <div className="relative flex flex-col items-start gap-6 p-10 sm:flex-row sm:items-center sm:justify-between sm:p-14">
            <div>
              <h2 className="font-display text-3xl font-light leading-tight text-cloud sm:text-4xl">
                {title}
              </h2>
              <p className="mt-3 max-w-md text-cloud/75">{subtitle}</p>
              <a
                href={CONTACT.phoneHref}
                className="mt-4 inline-block font-display text-2xl font-semibold text-orange-200"
              >
                {CONTACT.phone}
              </a>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link href="/appointment" className="btn-orange px-7 py-3.5">
                Book an Appointment
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-cloud/30 px-7 py-3.5 font-semibold text-cloud transition-colors hover:bg-cloud/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
