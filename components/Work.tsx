import Image from "next/image";

import { dictionaries, type Locale } from "@/lib/i18n";

export default function Work({ locale }: { locale: Locale }) {
  const { intro } = dictionaries[locale];

  return (
    <section
      id="werken-bij"
      className="relative scroll-mt-8 overflow-hidden bg-mist-50 py-20 sm:py-28 lg:py-32"
    >
      <div className="bg-brand-500/5 absolute top-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="shadow-card grid overflow-hidden rounded-3xl border border-mist-200 bg-white lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="bg-brand-500 absolute top-0 left-8 h-1 w-16 rounded-b-full sm:left-12 lg:left-16" />
            <p className="text-brand-600 text-xs font-bold tracking-[0.22em] uppercase sm:text-sm">
              {intro.eyebrow}
            </p>
            <h2 className="text-brand-950 mt-5 max-w-lg text-4xl leading-[1.03] font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {intro.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {intro.text}
            </p>
          </div>

          <div className="border-t border-mist-200 bg-mist-50/70 px-8 py-4 sm:px-12 lg:border-t-0 lg:border-l lg:px-14 lg:py-8">
            {intro.strengths.map(([title, description], index) => (
              <div
                key={title}
                className="grid gap-3 border-b border-mist-200 py-7 last:border-b-0 sm:grid-cols-[48px_1fr] sm:gap-5"
              >
                <span className="text-brand-600 flex size-10 items-center justify-center rounded-full bg-white text-xs font-bold shadow-sm ring-1 ring-mist-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-brand-950 text-xl font-semibold">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-[1.15fr_0.85fr]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
            <Image
              src="/images/team-overleg.webp"
              alt={intro.imageAlts[0]}
              fill
              sizes="(min-width: 640px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
            <Image
              src="/images/team-kantoor.webp"
              alt={intro.imageAlts[1]}
              fill
              sizes="(min-width: 640px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
