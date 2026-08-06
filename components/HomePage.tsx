import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { vacancies } from "@/data/vacancies";
import { contactEmail, contactPhoneHref } from "@/lib/contact";
import { dictionaries, type Locale } from "@/lib/i18n";

function ArrowRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="size-5 fill-none stroke-current stroke-2"
    >
      <path d="M4 10h12m-5-5 5 5-5 5" />
    </svg>
  );
}

export default function HomePage({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const activeVacancies = vacancies.filter((vacancy) => vacancy.active);

  return (
    <main className="overflow-hidden">
      <section className="bg-brand-950 relative isolate min-h-[680px] text-white">
        <Image
          src="/images/hero-interlogic.jpg"
          alt={t.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="from-brand-950/95 via-brand-950/75 to-brand-950/5 absolute inset-0 -z-10 bg-linear-to-r" />
        <div className="from-brand-950/55 to-brand-950/10 absolute inset-0 -z-10 bg-linear-to-t via-transparent" />

        <Header locale={locale} />

        <div className="mx-auto flex min-h-[570px] max-w-7xl items-center px-6 pb-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-brand-500 flex items-center gap-3 text-sm font-medium tracking-[0.18em] uppercase">
              <span className="bg-brand-500 size-1.5 rounded-full" />
              {t.hero.eyebrow}
            </p>
            <h1 className="mt-7 text-5xl leading-[0.96] font-semibold tracking-[-0.05em] text-balance drop-shadow-sm sm:text-7xl lg:text-8xl">
              {t.hero.titleLead} {t.hero.titleStrong}
              <span className="text-brand-500 mt-5 flex items-center gap-4 text-[0.42em] leading-tight font-medium tracking-[-0.02em] sm:gap-6">
                <span className="bg-brand-500 h-px w-10 shrink-0 sm:w-16" />
                <span>
                  {t.hero.accentLead} {t.hero.accentStrong}
                </span>
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              {t.hero.text}
            </p>
            <a
              href="#vacatures"
              className="bg-brand-500 hover:bg-brand-600 mt-10 inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {t.hero.cta} <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist-50 py-20 sm:py-24 lg:py-28">
        <div className="bg-brand-500/5 absolute top-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="shadow-card grid overflow-hidden rounded-3xl border border-mist-200 bg-white lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative p-8 sm:p-12 lg:p-16">
              <div className="bg-brand-500 absolute top-0 left-8 h-1 w-16 rounded-b-full sm:left-12 lg:left-16" />
              <p className="text-brand-600 text-sm font-bold tracking-[0.2em] uppercase">
                {t.intro.eyebrow}
              </p>
              <h2 className="text-brand-950 mt-5 max-w-lg text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
                {t.intro.title}
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                {t.intro.text}
              </p>
            </div>

            <div className="border-t border-mist-200 bg-mist-50/70 px-8 py-4 sm:px-12 lg:border-t-0 lg:border-l lg:px-14 lg:py-8">
              {t.intro.strengths.map(([title, description], index) => (
                <div
                  key={title}
                  className="grid gap-3 border-b border-mist-200 py-7 last:border-b-0 sm:grid-cols-[48px_1fr] sm:gap-5"
                >
                  <span className="text-brand-600 flex size-10 items-center justify-center rounded-full bg-white text-xs font-bold shadow-sm ring-1 ring-mist-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-brand-950 font-semibold">{title}</h3>
                    <p className="mt-1.5 max-w-md text-sm leading-6 text-slate-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="vacatures"
        className="bg-brand-950 relative scroll-mt-0 overflow-hidden text-white"
      >
        <div className="bg-brand-500/10 absolute -top-48 right-0 size-96 rounded-full blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="relative flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-brand-500 text-sm font-medium tracking-[0.18em] uppercase">
                {t.jobs.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {t.jobs.title}
              </h2>
            </div>
            <div className="sm:text-right">
              <p className="text-brand-500 text-3xl font-semibold">
                {activeVacancies.length}
              </p>
              <p className="mt-1 text-sm text-slate-400">
                {activeVacancies.length === 1 ? t.jobs.singular : t.jobs.plural}
              </p>
            </div>
          </div>

          <div className="relative mt-12 grid gap-4">
            {activeVacancies.length ? (
              activeVacancies.map((vacancy) => (
                <Link
                  key={vacancy.slug}
                  href={`/${locale}/vacatures/${vacancy.slug}/`}
                  className="group text-brand-950 hover:shadow-brand-500/10 block rounded-2xl bg-white p-7 shadow-2xl shadow-black/15 transition duration-300 hover:-translate-y-1 sm:p-9"
                >
                  <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
                    <div>
                      <p className="text-brand-600 text-sm font-semibold">
                        {vacancy.translations[locale].department}
                      </p>
                      <h3 className="text-brand-950 mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                        {vacancy.translations[locale].title}
                      </h3>
                      <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {vacancy.locations.map((location) => (
                          <span
                            key={location}
                            className="bg-brand-500/10 text-brand-600 rounded-full px-3 py-1.5 font-medium"
                          >
                            {location}
                          </span>
                        ))}
                        {[
                          vacancy.translations[locale].employmentType,
                          `${vacancy.hours} ${t.vacancy.hoursSuffix}`,
                          vacancy.translations[locale].experience,
                        ]
                          .filter(Boolean)
                          .map((item) => (
                            <span
                              key={item}
                              className="rounded-full bg-mist-100 px-3 py-1.5"
                            >
                              {item}
                            </span>
                          ))}
                      </div>
                    </div>
                    <span className="bg-brand-500 group-hover:bg-brand-600 inline-flex shrink-0 items-center gap-3 self-start rounded-full px-5 py-3 text-sm font-semibold text-white transition sm:self-auto">
                      {t.jobs.view}
                      <span className="transition-transform group-hover:translate-x-0.5">
                        <ArrowRight />
                      </span>
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-xl font-semibold text-white">
                  {t.jobs.empty}
                </h3>
                <p className="mt-3 text-slate-300">{t.jobs.emptyText}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-brand-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-brand-500 text-sm font-medium tracking-[0.18em] uppercase">
              {t.contact.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              {t.contact.title}
            </h2>
            <p className="mt-3 max-w-xl text-white/85">{t.contact.text}</p>
          </div>
          <div className="flex flex-wrap items-center gap-7">
            <a
              href={`tel:${contactPhoneHref}`}
              className="bg-brand-500 hover:bg-brand-600 inline-flex shrink-0 items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {t.contact.call}
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="border-brand-500 hover:text-brand-500 inline-flex shrink-0 items-center justify-center gap-3 border-b pb-2 text-sm font-semibold transition hover:gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {t.contact.email} <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
