import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { vacancies } from "@/data/vacancies";

type VacancyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return vacancies
    .filter((vacancy) => vacancy.active)
    .map((vacancy) => ({
      slug: vacancy.slug,
    }));
}

export async function generateMetadata({
  params,
}: VacancyPageProps): Promise<Metadata> {
  const { slug } = await params;

  const vacancy = vacancies.find((item) => item.slug === slug && item.active);

  if (!vacancy) {
    return {
      title: "Vacature niet gevonden | Interlogic",
    };
  }

  const title = `${vacancy.title} | Werken bij Interlogic`;

  return {
    title,
    description: vacancy.description,
    openGraph: {
      title,
      description: vacancy.description,
      type: "website",
      images: [
        {
          url: vacancy.image,
          width: 1200,
          height: 630,
          alt: `${vacancy.title} bij Interlogic`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: vacancy.description,
      images: [vacancy.image],
    },
  };
}

export default async function VacancyPage({ params }: VacancyPageProps) {
  const { slug } = await params;

  const vacancy = vacancies.find((item) => item.slug === slug && item.active);

  if (!vacancy) {
    notFound();
  }

  const formattedPublishedAt = vacancy.publishedAt.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const emailSubject = encodeURIComponent(`Sollicitatie ${vacancy.title}`);

  return (
    <main>
      {/* Vacaturehero */}
      <section className="relative isolate overflow-hidden bg-[#071b2b] text-white">
        <div className="absolute inset-0">
          <img
            src={vacancy.image}
            alt=""
            className="h-full w-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#071b2b] via-[#071b2b]/95 to-[#071b2b]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071b2b]/80 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:py-32">
          <Link
            href="/#vacatures"
            className="inline-flex items-center text-sm font-semibold text-[#00a7bd] transition hover:text-white"
          >
            <span aria-hidden="true" className="mr-2">
              ←
            </span>
            Terug naar vacatures
          </Link>

          <p className="mt-12 text-sm font-semibold tracking-[0.22em] text-[#00a7bd] uppercase">
            {vacancy.department}
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {vacancy.title}
          </h1>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-slate-200 sm:text-base">
            <span>{vacancy.location}</span>
            <span aria-hidden="true">•</span>
            <span>{vacancy.employmentType}</span>
            <span aria-hidden="true">•</span>
            <span>{vacancy.hours} uur</span>

            {vacancy.experience && (
              <>
                <span aria-hidden="true">•</span>
                <span>{vacancy.experience}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Vacature-inhoud */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20 lg:py-24">
          <article>
            <p className="text-sm font-semibold tracking-[0.22em] text-[#008599] uppercase">
              De functie
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071b2b]">
              Over deze vacature
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              {vacancy.description}
            </p>

            <div className="mt-12 border-t border-slate-200 pt-10">
              <h2 className="text-2xl font-bold tracking-tight text-[#071b2b]">
                Werken bij Interlogic
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Bij Interlogic werk je binnen een professioneel en betrokken
                team. We houden van duidelijke afspraken, korte lijnen en
                collega&apos;s die verantwoordelijkheid nemen. Samen zorgen we
                ervoor dat onze klanten iedere dag op ons kunnen rekenen.
              </p>
            </div>

            <div className="mt-12 border-t border-slate-200 pt-10">
              <dl className="grid gap-10 md:grid-cols-3">
                <div>
                  <dt className="text-sm font-medium text-slate-500">
                    Locaties
                  </dt>

                  <dd className="mt-3 flex flex-wrap gap-2">
                    {vacancy.locations.map((location) => (
                      <span
                        key={location}
                        className="rounded-full border border-[#00a7bd]/20 bg-[#00a7bd]/5 px-3 py-1 text-sm font-medium text-[#008599]"
                      >
                        {location}
                      </span>
                    ))}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-slate-500">
                    Dienstverband
                  </dt>

                  <dd className="mt-3 text-lg font-semibold text-[#071b2b]">
                    {vacancy.employmentType}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-slate-500">
                    Uren per week
                  </dt>

                  <dd className="mt-3 text-lg font-semibold text-[#071b2b]">
                    {vacancy.hours} uur
                  </dd>
                </div>
              </dl>
            </div>
          </article>

          {/* Sollicitatiekaart */}
          <aside>
            <div className="sticky top-6 rounded-lg border border-slate-200 bg-[#f3f6f7] p-6 sm:p-8">
              <div className="h-1 w-12 bg-[#00a7bd]" />

              <h2 className="mt-6 text-2xl font-bold tracking-tight text-[#071b2b]">
                Interesse in deze functie?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Denk je dat deze vacature bij je past? Stuur ons dan een e-mail
                met je contactgegevens en cv.
              </p>

              <a
                href={`mailto:werkenbij@interlogic.nl?subject=${emailSubject}`}
                className="mt-7 inline-flex w-full justify-center rounded-md bg-[#00a7bd] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#008599]"
              >
                Solliciteer direct
              </a>

              <div className="mt-7 border-t border-slate-200 pt-6">
                <p className="text-sm text-slate-500">Vacature gepubliceerd</p>

                <p className="mt-1 text-sm font-medium text-[#071b2b]">
                  {formattedPublishedAt}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Onderste CTA */}
      <section className="bg-[#00a7bd] text-white">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 px-6 py-14 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Toch op zoek naar een andere functie?
            </h2>

            <p className="mt-3 text-white/85">
              Bekijk alle actuele vacatures bij Interlogic.
            </p>
          </div>

          <Link
            href="/#vacatures"
            className="inline-flex shrink-0 justify-center rounded-md bg-[#071b2b] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#102d43]"
          >
            Bekijk alle vacatures
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#071b2b]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Interlogic</p>
          <p>We think forward.</p>
        </div>
      </footer>
    </main>
  );
}
