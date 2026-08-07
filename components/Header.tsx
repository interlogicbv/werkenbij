import Image from "next/image";
import Link from "next/link";

import Menubar from "@/components/Menubar";
import type { Locale } from "@/lib/i18n";

export default function Header({
  locale,
  slug,
  image,
  title,
  department,
  details,
  backLabel,
}: {
  locale: Locale;
  slug: string;
  image: string;
  title: string;
  department: string;
  details: (string | undefined)[];
  backLabel: string;
}) {
  return (
    <header className="bg-brand-950 relative isolate overflow-hidden text-white">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[40%_center] opacity-65 sm:object-center"
      />
      <div className="from-brand-950/95 via-brand-950/75 to-brand-950/15 absolute inset-0 -z-10 bg-linear-to-r" />
      <div className="from-brand-950/60 to-brand-950/10 absolute inset-0 -z-10 bg-linear-to-t via-transparent" />
      <Menubar locale={locale} subpage={`vacatures/${slug}/`} />
      <div className="mx-auto max-w-7xl px-6 pt-6 pb-20 sm:pt-8 lg:px-8 lg:pt-10 lg:pb-28">
        <Link
          href={`/${locale}/#vacatures`}
          className="group hover:border-brand-500/40 hover:bg-brand-500/10 focus-visible:outline-brand-500 inline-flex min-h-12 items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white transition focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <span
            aria-hidden="true"
            className="text-lg transition-transform group-hover:-translate-x-1"
          >
            ←
          </span>
          {backLabel}
        </Link>
        <p className="text-brand-500 mt-14 text-xs font-bold tracking-[0.22em] uppercase sm:text-sm">
          {department}
        </p>
        <h1 className="mt-5 max-w-4xl text-[2.35rem] leading-[1.02] font-bold tracking-tighter text-balance sm:text-[3.25rem] lg:text-[4rem]">
          {title}
        </h1>
        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm font-medium text-slate-200 sm:text-base">
          {details
            .filter((item): item is string => Boolean(item))
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
    </header>
  );
}
