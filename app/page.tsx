import Link from "next/link";

import { vacancies } from "@/data/vacancies";

export default function HomePage() {
  const activeVacancies = vacancies.filter((vacancy) => vacancy.active);

  return (
    <main>
      {/* Hero */}
      <section className="relative isolate min-h-[680px] overflow-hidden bg-[#071b2b] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-interlogic.jpg"
            alt="Interlogic vrachtwagens"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#071b2b] via-[#071b2b]/90 to-[#071b2b]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071b2b]/70 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[680px] max-w-6xl items-center px-6 py-28 sm:py-36">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-[#00a7bd] uppercase">
              Werken bij Interlogic
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Klaar voor de rit?
              <span className="block text-[#00a7bd]">
                Interlogic brengt je verder.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Werk mee aan betrouwbare logistiek door heel Europa. Op de weg, in
              de loods of achter de planning.
            </p>

            <div className="mt-10">
              <a
                href="#vacatures"
                className="inline-flex items-center rounded-md bg-[#00a7bd] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#008599] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Bekijk onze vacatures
                <span aria-hidden="true" className="ml-2">
                  ↓
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introductie */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-28">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-[#008599] uppercase">
              We think forward
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071b2b] sm:text-4xl">
              Samen houden we transport in beweging
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600">
              Bij Interlogic werken mensen die verantwoordelijkheid nemen,
              praktisch denken en samen resultaten behalen. We bieden een
              professionele werkomgeving met korte lijnen, modern materieel en
              ruimte om jezelf verder te ontwikkelen.
            </p>

            <div className="mt-10 grid gap-8 border-t border-slate-200 pt-10 sm:grid-cols-3">
              <div>
                <div className="mb-4 h-1 w-10 bg-[#00a7bd]" />

                <h3 className="font-semibold text-[#071b2b]">Korte lijnen</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Direct contact, duidelijke afspraken en snel schakelen.
                </p>
              </div>

              <div>
                <div className="mb-4 h-1 w-10 bg-[#00a7bd]" />

                <h3 className="font-semibold text-[#071b2b]">
                  Modern materieel
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Werken met professioneel en goed onderhouden materieel.
                </p>
              </div>

              <div>
                <div className="mb-4 h-1 w-10 bg-[#00a7bd]" />

                <h3 className="font-semibold text-[#071b2b]">Samen vooruit</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Ruimte om jezelf te ontwikkelen en verantwoordelijkheid te
                  nemen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vacatures */}
      <section id="vacatures" className="scroll-mt-8 bg-[#f3f6f7]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:py-28">
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-[0.22em] text-[#008599] uppercase">
              Kom bij ons werken
            </p>

            <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <h2 className="text-3xl font-bold tracking-tight text-[#071b2b] sm:text-4xl">
                Actuele vacatures
              </h2>

              <p className="max-w-md text-slate-600">
                Bekijk onze openstaande functies en ontdek waar jij Interlogic
                verder kunt brengen.
              </p>
            </div>
          </div>

          {activeVacancies.length > 0 ? (
            <div className="grid gap-5">
              {activeVacancies.map((vacancy) => (
                <Link
                  key={vacancy.slug}
                  href={`/vacatures/${vacancy.slug}/`}
                  className="group rounded-lg border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-[#00a7bd] hover:shadow-lg sm:p-8"
                >
                  <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
                    <div>
                      <p className="text-sm font-semibold text-[#008599]">
                        {vacancy.department}
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#071b2b]">
                        {vacancy.title}
                      </h3>

                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
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

                      <p className="mt-5 max-w-3xl leading-7 text-slate-600">
                        {vacancy.description}
                      </p>
                    </div>

                    <span className="inline-flex shrink-0 items-center font-semibold text-[#008599]">
                      Bekijk vacature
                      <span
                        aria-hidden="true"
                        className="ml-2 transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-slate-200 bg-white p-8 sm:p-10">
              <h3 className="text-xl font-semibold text-[#071b2b]">
                Momenteel geen openstaande vacatures
              </h3>

              <p className="mt-3 max-w-xl leading-7 text-slate-600">
                Op dit moment hebben we geen openstaande functies. Houd deze
                pagina in de gaten voor nieuwe mogelijkheden bij Interlogic.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#00a7bd] text-white">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 px-6 py-16 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] uppercase opacity-80">
              Vragen?
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Meer weten over werken bij Interlogic?
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-white/85">
              Neem gerust contact met ons op. We vertellen je graag meer over
              Interlogic en onze openstaande functies.
            </p>
          </div>

          <a
            href="mailto:werkenbij@interlogic.nl"
            className="inline-flex shrink-0 justify-center rounded-md bg-[#071b2b] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#102d43]"
          >
            Neem contact op
          </a>
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
