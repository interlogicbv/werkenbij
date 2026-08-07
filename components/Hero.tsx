import Image from "next/image";

import ArrowRight from "@/components/ArrowRight";
import Menubar from "@/components/Menubar";
import { vacancies } from "@/data/vacancies";
import type { Locale } from "@/lib/i18n";
import { websiteChrome } from "@/lib/website-chrome";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Hero({ locale }: { locale: Locale }) {
  const { hero, nav } = websiteChrome[locale];
  const activeVacancies = vacancies.filter((vacancy) => vacancy.active);
  const stats = [
    ...hero.stats.slice(0, 2),
    [String(activeVacancies.length), nav.careers],
  ];

  return (
    <section className="bg-brand-950 relative isolate min-h-190 overflow-hidden text-white sm:min-h-205 lg:min-h-215">
      <Image
        src={`${basePath}/images/hero-interlogic.jpg`}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover object-[62%_center] sm:object-center"
      />
      <div className="from-brand-950 via-brand-950/82 to-brand-950/15 absolute inset-0 -z-20 bg-linear-to-r" />
      <div className="from-brand-950 to-brand-950/35 absolute inset-0 -z-20 bg-linear-to-t via-transparent" />
      <Menubar locale={locale} />

      <div className="mx-auto flex min-h-152.5 max-w-7xl items-center px-5 pb-32 sm:min-h-162.5 sm:px-8 sm:pb-36 lg:px-8">
        <div className="w-full max-w-3xl pt-12 sm:pt-16 lg:pt-20">
          <p className="text-brand-500 hidden items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase sm:flex sm:text-sm">
            <span className="bg-brand-500 h-px w-8" />
            {hero.accent}
          </p>

          <h1 className="mt-6 text-[2.35rem] leading-[1.02] font-bold tracking-tighter text-balance sm:text-[3.25rem] lg:text-[4rem]">
            {hero.titleLead}
            <br />
            <span className="mt-2 inline-block text-[0.68em] font-normal tracking-tight text-white/70 sm:mt-3">
              {hero.titleStrong}
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            {hero.text}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#vacatures"
              className="group bg-brand-500 shadow-brand-950/20 hover:bg-brand-600 inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
            >
              {hero.cta}
              <ArrowRight />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="bg-brand-950/75 grid grid-cols-3 overflow-hidden rounded-t-[1.75rem] border border-b-0 border-white/15 shadow-2xl backdrop-blur-xl">
            {stats.map(([value, label], index) => (
              <div
                key={label}
                className={`px-3 py-5 sm:px-8 sm:py-7 ${index === 1 ? "border-x border-white/10" : ""}`}
              >
                <p className="text-lg font-semibold text-white sm:text-3xl">
                  {value}
                </p>
                <p className="mt-1 text-[9px] leading-4 text-slate-400 sm:text-xs">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
