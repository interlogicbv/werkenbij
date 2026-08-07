import Image from "next/image";
import Link from "next/link";
import { localeNames, locales, type Locale } from "@/lib/i18n";
import { websiteChrome } from "@/lib/website-chrome";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const companyUrl = "https://nieuw.inter-logic.eu";

export default function Menubar({
  locale,
  subpage = "",
}: {
  locale: Locale;
  subpage?: string;
}) {
  const t = websiteChrome[locale];
  const home = `/${locale}/`;
  return (
    <header className="relative z-20 px-4 pt-4 sm:px-6 sm:pt-6">
      <nav
        className="bg-brand-950/45 mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/12 px-4 py-3 shadow-2xl shadow-black/10 backdrop-blur-xl sm:px-5"
        aria-label={t.nav.main}
      >
        <Link
          href={home}
          aria-label={t.nav.home}
          className="focus-visible:outline-brand-500 shrink-0 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <Image
            src={`${basePath}/images/white_logo.png`}
            alt="Interlogic"
            width={1088}
            height={458}
            priority
            className="h-8 w-auto sm:h-9 lg:h-10"
          />
        </Link>
        <div className="flex min-w-0 items-center gap-3 sm:gap-4 lg:gap-7">
          <div className="hidden items-center gap-8 lg:flex">
            <a
              href={`${companyUrl}/${locale}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white/75 transition hover:text-white"
            >
              {t.nav.about}
            </a>
            <Link
              href={`${home}#vacatures`}
              className="text-sm font-medium text-white/75 transition hover:text-white"
            >
              {t.nav.careers}
            </Link>
          </div>
          <div
            className="flex shrink-0 items-center rounded-full border border-white/15 bg-white/5 p-1 lg:ml-1"
            aria-label={t.nav.language}
          >
            {locales.map((item) => (
              <Link
                key={item}
                href={`/${item}/${subpage}`}
                hrefLang={item}
                aria-current={item === locale ? "page" : undefined}
                className={`rounded-full px-2 py-1.5 text-[10px] font-bold transition sm:px-2.5 sm:text-xs ${item === locale ? "text-brand-950 bg-white shadow-sm" : "text-white/60 hover:text-white"}`}
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
