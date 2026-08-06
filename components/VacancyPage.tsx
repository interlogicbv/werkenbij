import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { vacancies } from "@/data/vacancies";
import { contactEmail, contactPhoneHref } from "@/lib/contact";
import { dictionaries, type Locale } from "@/lib/i18n";

export default function VacancyPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const t = dictionaries[locale];
  const vacancy = vacancies.find((item) => item.slug === slug && item.active);
  if (!vacancy) notFound();
  const content = vacancy.translations[locale];

  const publishedAt = vacancy.publishedAt.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const emailSubject = encodeURIComponent(
    `${t.vacancy.subject} ${content.title}`,
  );

  return (
    <main className="overflow-hidden">
      <section className="bg-brand-950 relative isolate overflow-hidden text-white">
        <Image
          src={vacancy.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[40%_center] opacity-65 sm:object-center"
        />
        <div className="from-brand-950/95 via-brand-950/75 to-brand-950/15 absolute inset-0 -z-10 bg-linear-to-r" />
        <div className="from-brand-950/60 to-brand-950/10 absolute inset-0 -z-10 bg-linear-to-t via-transparent" />
        <Header locale={locale} path={`/vacatures/${vacancy.slug}`} />
        <div className="mx-auto max-w-7xl px-6 pt-6 pb-20 sm:pt-8 lg:px-8 lg:pt-10 lg:pb-28">
          <Link
            href={`/${locale}/#vacatures`}
            className="text-brand-500 focus-visible:outline-brand-500 inline-flex items-center gap-2 text-sm font-bold transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <span aria-hidden="true">←</span> {t.vacancy.back}
          </Link>
          <p className="text-brand-500 mt-14 text-sm font-medium tracking-[0.18em] uppercase">
            {content.department}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl leading-tight font-semibold tracking-[-0.04em] text-balance sm:text-6xl lg:text-7xl">
            {content.title}
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm font-medium text-slate-200 sm:text-base">
            {[
              vacancy.locations.join(" & "),
              content.employmentType,
              `${vacancy.hours} ${t.vacancy.hoursSuffix}`,
              content.experience,
            ]
              .filter(Boolean)
              .map((item, index) => (
                <span key={item} className="contents">
                  {index > 0 && (
                    <span aria-hidden="true" className="text-brand-500">
                      •
                    </span>
                  )}
                  <span>{item}</span>
                </span>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-24 lg:px-8 lg:py-28">
          <article>
            <p className="text-brand-600 text-sm font-medium tracking-[0.18em] uppercase">
              {t.vacancy.function}
            </p>
            <h2 className="text-brand-950 mt-4 text-4xl font-semibold tracking-tight">
              {t.vacancy.about}
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
              {content.description}
            </p>

            <div className="mt-14 space-y-12 border-t border-mist-200 pt-12">
              {content.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-brand-950 text-2xl font-semibold tracking-tight">
                    {section.title}
                  </h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-5 max-w-3xl leading-8 text-slate-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-6 grid gap-3 text-slate-600 sm:grid-cols-2">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex gap-3 leading-7">
                          <span
                            aria-hidden="true"
                            className="bg-brand-500 mt-2.5 size-1.5 shrink-0 rounded-full"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-14 border-t border-mist-200 pt-12">
              <h2 className="text-brand-950 text-2xl font-semibold tracking-tight">
                {t.vacancy.workingAt}
              </h2>
              <p className="mt-5 max-w-3xl leading-8 text-slate-600">
                {t.vacancy.workingText}
              </p>
            </div>

            <div className="mt-14 border-t border-mist-200 pt-12">
              <p className="text-brand-600 text-sm font-medium tracking-[0.18em] uppercase">
                {t.vacancy.expect}
              </p>
              <h2 className="text-brand-950 mt-4 text-2xl font-semibold tracking-tight">
                {t.vacancy.expectTitle}
              </h2>
              <ul className="mt-7 grid gap-4 text-slate-600 sm:grid-cols-2">
                {t.vacancy.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="bg-brand-500/10 text-brand-600 flex size-6 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                    >
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <dl className="mt-14 grid gap-8 border-y border-mist-200 py-8 sm:grid-cols-3">
              <div>
                <dt className="text-sm font-medium text-slate-500">
                  {t.vacancy.locations}
                </dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {vacancy.locations.map((location) => (
                    <span
                      key={location}
                      className="text-brand-600 text-sm font-semibold"
                    >
                      {location}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-500">
                  {t.vacancy.employment}
                </dt>
                <dd className="text-brand-950 mt-3 text-lg font-bold">
                  {content.employmentType}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-500">
                  {t.vacancy.hours}
                </dt>
                <dd className="text-brand-950 mt-3 text-lg font-bold">
                  {vacancy.hours} {t.vacancy.hoursSuffix}
                </dd>
              </div>
            </dl>
          </article>

          <aside>
            <div className="border-brand-500 sticky top-6 border-t-2 pt-7">
              <h2 className="text-brand-950 text-2xl font-semibold tracking-tight">
                {t.vacancy.applyTitle}
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                {t.vacancy.applyText}
              </p>
              <a
                href={`mailto:${contactEmail}?subject=${emailSubject}`}
                className="bg-brand-950 hover:bg-brand-900 focus-visible:outline-brand-500 mt-7 inline-flex w-full justify-center px-5 py-4 text-sm font-semibold text-white transition focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                {t.vacancy.apply}
              </a>
              {vacancy.indeedUrl && (
                <a
                  href={vacancy.indeedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-500 hover:bg-brand-600 focus-visible:outline-brand-500 mt-3 inline-flex w-full items-center justify-center gap-2 px-5 py-4 text-sm font-semibold text-white transition focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {t.vacancy.applyIndeed}
                  <span aria-hidden="true">↗</span>
                </a>
              )}
              <a
                href={`tel:${contactPhoneHref}`}
                className="text-brand-950 hover:border-brand-500 hover:text-brand-600 focus-visible:outline-brand-500 mt-3 inline-flex w-full justify-center border border-mist-200 px-5 py-3.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                {t.vacancy.orCall}
              </a>
              <div className="mt-7 border-t border-mist-200 pt-6">
                <p className="text-sm text-slate-500">{t.vacancy.published}</p>
                <p className="text-brand-950 mt-1 text-sm font-medium">
                  {publishedAt}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="text-brand-950 bg-mist-50">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-16 sm:flex-row sm:items-center lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              {t.vacancy.otherTitle}
            </h2>
            <p className="mt-3 text-slate-600">{t.vacancy.otherText}</p>
          </div>
          <Link
            href={`/${locale}/#vacatures`}
            className="border-brand-500 hover:text-brand-600 focus-visible:outline-brand-500 inline-flex shrink-0 justify-center border-b pb-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {t.vacancy.all}
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
