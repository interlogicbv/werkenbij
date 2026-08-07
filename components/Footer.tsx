import Image from "next/image";
import Link from "next/link";

import ArrowRight from "@/components/ArrowRight";
import type { Locale } from "@/lib/i18n";
import { websiteChrome } from "@/lib/website-chrome";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const companyUrl = "https://nieuw.inter-logic.eu";

export default function Footer({ locale }: { locale: Locale }) {
  const t = websiteChrome[locale];

  return (
    <footer className="bg-brand-950 text-white">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-8 sm:px-8 sm:pt-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 xl:grid-cols-[1.2fr_0.9fr_0.7fr_0.9fr] xl:gap-14">
          <div>
            <Image
              src={`${basePath}/images/white_logo.png`}
              alt="Interlogic"
              width={1088}
              height={458}
              className="h-11 w-auto"
            />
            <p className="mt-7 hidden max-w-md text-2xl leading-tight font-medium text-white sm:block sm:text-3xl">
              {t.footer}
            </p>
            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              {t.hero.text}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <SocialLink
                href="https://nl.linkedin.com/company/interlogicbv"
                label="LinkedIn"
                mark="in"
              />
              <SocialLink
                href="https://www.facebook.com/interlogicbv"
                label="Facebook"
                mark="f"
              />
              <SocialLink
                href="https://www.instagram.com/interlogicbv/"
                label="Instagram"
                mark="ig"
              />
            </div>
          </div>
          <div>
            <p className="text-brand-500 text-xs font-bold tracking-[0.2em] uppercase">
              Interlogic B.V.
            </p>
            <address className="mt-6 text-sm leading-6 text-slate-300 not-italic">
              <p>
                De Mars 9<br />
                7742 PT Coevorden
                <br />
                Nederland
              </p>
              <div className="mt-4 flex flex-col items-start gap-1">
                <a
                  href="tel:+31546898960"
                  className="transition hover:text-white"
                >
                  0546-898960
                </a>
                <a
                  href="mailto:info@inter-logic.eu"
                  className="transition hover:text-white"
                >
                  info@inter-logic.eu
                </a>
              </div>
            </address>
            <dl className="mt-5 space-y-2 text-xs text-slate-400">
              <div className="flex flex-wrap gap-x-2">
                <dt>{t.company.chamber}:</dt>
                <dd>60269863</dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt>{t.company.vat}:</dt>
                <dd>NL853836553B01</dd>
              </div>
            </dl>
          </div>
          <div>
            <p className="text-brand-500 text-xs font-bold tracking-[0.2em] uppercase">
              {t.company.discover}
            </p>
            <nav
              className="mt-6 flex flex-col items-start gap-4 text-sm"
              aria-label={t.nav.main}
            >
              <Link
                href={`${companyUrl}/${locale}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 transition hover:translate-x-1 hover:text-white"
              >
                {t.nav.about}
              </Link>
              <Link
                href={`/${locale}/#vacatures`}
                className="text-slate-300 transition hover:translate-x-1 hover:text-white"
              >
                {t.nav.careers}
              </Link>
              <a
                href={`${companyUrl}/documents/interlogic-vsme-rapport.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 transition hover:translate-x-1 hover:text-white"
              >
                {t.report}
              </a>
              <a
                href={`${companyUrl}/documents/privacyverklaring-interlogic.pdf`}
                hrefLang="nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 transition hover:translate-x-1 hover:text-white"
              >
                {t.company.privacy}
              </a>
              <a
                href={`${companyUrl}/documents/algemene-voorwaarden-interlogic.pdf`}
                hrefLang="nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 transition hover:translate-x-1 hover:text-white"
              >
                {t.company.terms}
              </a>
            </nav>
          </div>
          <div>
            <p className="text-brand-500 text-xs font-bold tracking-[0.2em] uppercase">
              {t.nav.request}
            </p>
            <a
              href="tel:+31546898960"
              className="hover:text-brand-500 mt-6 block text-2xl font-semibold tracking-tight text-white transition"
            >
              0546 898960
            </a>
            <a
              href="mailto:personeel@inter-logic.eu"
              className="hover:text-brand-500 mt-3 block text-sm font-medium text-slate-300 transition"
            >
              personeel@inter-logic.eu
            </a>
            <a
              href="#vacatures"
              className="group hover:border-brand-500/40 hover:bg-brand-500/10 mt-7 inline-flex min-h-12 items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white transition"
            >
              {t.hero.cta}
              <ArrowRight />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Interlogic B.V.</p>
          <p className="hidden sm:block">{t.footer}</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  mark,
}: {
  href: string;
  label: string;
  mark: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:border-brand-500/50 hover:bg-brand-500 inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs font-bold text-white transition hover:-translate-y-0.5"
      aria-label={`${label} - Interlogic`}
      title={label}
    >
      <span aria-hidden="true">{mark}</span>
    </a>
  );
}
