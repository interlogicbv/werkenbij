import Link from "next/link";

import ArrowRight from "@/components/ArrowRight";
import { vacancies } from "@/data/vacancies";
import { dictionaries, type Locale } from "@/lib/i18n";

export default function Vacancies({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const activeVacancies = vacancies
    .filter((vacancy) => vacancy.active)
    .sort(
      (first, second) =>
        second.publishedAt.getTime() - first.publishedAt.getTime(),
    );

  return (
    <section
      id="vacatures"
      className="bg-brand-950 relative scroll-mt-0 overflow-hidden text-white"
    >
      <div className="bg-brand-500/10 absolute -top-48 right-0 size-96 rounded-full blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        <div className="relative flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-brand-500 text-xs font-bold tracking-[0.22em] uppercase sm:text-sm">
              {t.jobs.eyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
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
                    <p className="text-brand-600 text-xs font-bold tracking-[0.16em] uppercase">
                      {vacancy.translations[locale].department}
                    </p>
                    <h3 className="text-brand-950 mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                      {vacancy.translations[locale].title}
                    </h3>
                    <time
                      dateTime={vacancy.publishedAt.toISOString()}
                      className="mt-2 block text-xs text-slate-500"
                    >
                      {t.vacancy.published}:{" "}
                      {vacancy.publishedAt.toLocaleDateString(locale, {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
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
  );
}
