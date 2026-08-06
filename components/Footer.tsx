import Image from "next/image";
import Link from "next/link";

import { contactEmail, contactPhone, contactPhoneHref } from "@/lib/contact";
import { dictionaries, type Locale } from "@/lib/i18n";

const companyUrl = "https://inter-logic.eu";

function ArrowRight() {
  return (
    <span
      aria-hidden="true"
      className="text-lg transition-transform group-hover:translate-x-1"
    >
      →
    </span>
  );
}

export default function Footer({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];

  return (
    <footer className="bg-brand-950 relative isolate overflow-hidden text-white">
      <div className="bg-brand-500/8 absolute -right-36 -bottom-52 -z-10 size-[34rem] rounded-full blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-8 sm:px-8 sm:pt-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.9fr] lg:gap-16">
          <div>
            <Image
              src="/images/white_logo.png"
              alt="Interlogic"
              width={1088}
              height={458}
              className="h-11 w-auto"
            />
            <p className="font-brand-script mt-7 hidden max-w-md -rotate-2 text-2xl leading-tight text-white sm:block sm:text-3xl">
              {t.hero.accentLead} {t.hero.accentStrong}
            </p>
            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              {t.hero.text}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                [
                  "LinkedIn",
                  "in",
                  "https://nl.linkedin.com/company/interlogicbv",
                ],
                ["Facebook", "f", "https://www.facebook.com/interlogicbv"],
                ["Instagram", "ig", "https://www.instagram.com/interlogicbv/"],
              ].map(([name, mark, href]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:border-brand-500/40 hover:bg-brand-500/10 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 pr-4 pl-1.5 text-xs font-semibold text-white transition"
                  aria-label={`Interlogic op ${name}`}
                >
                  <span className="bg-brand-500 flex size-8 items-center justify-center rounded-full text-xs font-bold text-white">
                    {mark}
                  </span>
                  {name}
                  <span
                    aria-hidden="true"
                    className="group-hover:text-brand-500 text-slate-500 transition"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-brand-500 text-xs font-bold tracking-[0.2em] uppercase">
              {t.hero.eyebrow}
            </p>
            <nav
              className="mt-6 flex flex-col items-start gap-4 text-sm"
              aria-label={t.nav.main}
            >
              <Link
                href={`/${locale}/#werken-bij`}
                className="text-slate-300 transition hover:translate-x-1 hover:text-white"
              >
                {t.nav.workingAt}
              </Link>
              <Link
                href={`/${locale}/#vacatures`}
                className="text-slate-300 transition hover:translate-x-1 hover:text-white"
              >
                {t.nav.vacancies}
              </Link>
              <a
                href={`${companyUrl}/${locale}/`}
                className="text-slate-300 transition hover:translate-x-1 hover:text-white"
              >
                {t.nav.company}
              </a>
            </nav>
          </div>

          <div>
            <p className="text-brand-500 text-xs font-bold tracking-[0.2em] uppercase">
              {t.contact.eyebrow}
            </p>
            <a
              href={`tel:${contactPhoneHref}`}
              className="hover:text-brand-500 mt-6 block text-2xl font-semibold tracking-tight text-white transition"
            >
              {contactPhone}
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="hover:text-brand-500 mt-3 block text-sm font-medium text-slate-300 transition"
            >
              {contactEmail}
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="group hover:border-brand-500/40 hover:bg-brand-500/10 mt-7 inline-flex min-h-12 items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white transition"
            >
              {t.contact.email}
              <ArrowRight />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Interlogic</p>
          <p className="font-brand-script hidden text-base text-slate-400 sm:block">
            We think forward!
          </p>
        </div>
      </div>
    </footer>
  );
}
