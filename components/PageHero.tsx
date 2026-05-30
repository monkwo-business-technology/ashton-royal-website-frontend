import Image from "next/image";
import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  image,
  alt,
  cta,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle: string;
  image: string;
  alt: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="px-4 pt-28 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/50 shadow-[0_40px_90px_-50px_rgba(8,26,61,0.6)]">
          <Image
            src={image}
            alt={alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 72rem"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/92 via-blue-900/70 to-blue-900/25" />
          <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_0%_100%,rgba(255,156,77,0.3),transparent_55%)]" />

          <div className="relative max-w-2xl p-9 py-16 sm:p-14 sm:py-20">
            <nav className="mb-5 flex items-center gap-2 text-xs text-cloud/70">
              <Link href="/" className="hover:text-cloud">Home</Link>
              <span>/</span>
              <span className="text-orange-200">{eyebrow}</span>
            </nav>
            <p className="eyebrow text-orange-200">{eyebrow}</p>
            <h1 className="mt-4 font-display text-4xl font-light leading-[1.05] tracking-tight text-cloud sm:text-6xl">
              {title}{" "}
              {highlight && <span className="italic text-orange-200">{highlight}</span>}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cloud/80">
              {subtitle}
            </p>
            {cta && (
              <Link href={cta.href} className="btn-orange mt-8 inline-flex px-7 py-3.5">
                {cta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
