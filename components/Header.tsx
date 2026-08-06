import Image from "next/image";
import Link from "next/link";

import { dictionaries, localeNames, locales, type Locale } from "@/lib/i18n";

export default function Header({
  locale,
  path = "",
}: {
  locale: Locale;
  path?: string;
}) {
  const { nav } = dictionaries[locale];

  return (
    <header className="relative z-20 px-4 pt-4 sm:px-6 sm:pt-6">
      <nav
        className="bg-brand-950/45 mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/12 px-4 py-3 shadow-2xl shadow-black/10 backdrop-blur-xl sm:px-5"
        aria-label={nav.main}
      >
        <Link
          href={`/${locale}`}
          className="focus-visible:outline-brand-500 shrink-0 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4"
          aria-label={nav.homeLabel}
        >
          <Image
            src="/images/white_logo.png"
            alt="Interlogic"
            width={1088}
            height={458}
            priority
            className="h-8 w-auto sm:h-9 lg:h-10"
          />
        </Link>
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Link
            href={`/${locale}/#vacatures`}
            className="focus-visible:outline-brand-500 hidden text-sm font-medium text-white/75 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 sm:block"
          >
            {nav.vacancies}
          </Link>
          <div
            className="flex shrink-0 items-center rounded-full border border-white/15 bg-white/5 p-1"
            aria-label={nav.language}
          >
            {locales.map((item) => (
              <Link
                key={item}
                href={`/${item}${path}`}
                hrefLang={item}
                aria-current={item === locale ? "page" : undefined}
                className={`focus-visible:outline-brand-500 rounded-full px-2 py-1.5 text-[10px] font-bold transition focus-visible:outline-2 sm:px-2.5 sm:text-xs ${item === locale ? "text-brand-950 bg-white shadow-sm" : "text-white/60 hover:text-white"}`}
              >
                {localeNames[item]}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
