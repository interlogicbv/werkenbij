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
    <header className="relative z-20">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8"
        aria-label={nav.main}
      >
        <Link
          href={`/${locale}`}
          className="focus-visible:outline-brand-500 focus-visible:outline-2 focus-visible:outline-offset-4"
          aria-label={nav.homeLabel}
        >
          <Image
            src="/images/white_logo.png"
            alt="Interlogic"
            width={1088}
            height={458}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href={`/${locale}/#vacatures`}
            className="hover:border-brand-500 hover:text-brand-500 focus-visible:outline-brand-500 hidden border-b border-white/40 pb-1 text-sm font-medium text-white transition focus-visible:outline-2 focus-visible:outline-offset-4 sm:block"
          >
            {nav.vacancies}
          </Link>
          <div
            className="bg-brand-950/20 flex items-center rounded-full border border-white/20 p-1 backdrop-blur-sm"
            aria-label={nav.language}
          >
            {locales.map((item) => (
              <Link
                key={item}
                href={`/${item}${path}`}
                hrefLang={item}
                aria-current={item === locale ? "page" : undefined}
                className={`focus-visible:outline-brand-500 rounded-full px-2.5 py-1.5 text-xs font-semibold transition focus-visible:outline-2 ${item === locale ? "text-brand-950 bg-white" : "text-white/70 hover:text-white"}`}
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
