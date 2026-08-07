import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Vacancies from "@/components/Vacancies";
import Work from "@/components/Work";
import { dictionaries, isLocale, locales } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = dictionaries[lang];
  const openGraphLocales = { nl: "nl_NL", en: "en_GB", de: "de_DE" } as const;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    keywords: [...meta.keywords],
    alternates: {
      canonical: `/${lang}`,
      languages: { nl: "/nl", en: "/en", de: "/de", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      url: `/${lang}/`,
      siteName: "Werken bij Interlogic",
      locale: openGraphLocales[lang],
      alternateLocale: locales
        .filter((locale) => locale !== lang)
        .map((locale) => openGraphLocales[locale]),
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1280,
          height: 630,
          type: "image/jpeg",
          alt: meta.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [{ url: "/images/og-image.jpg", alt: meta.imageAlt }],
    },
  };
}

export default async function LocalizedHomePage({
  params,
}: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <main className="overflow-hidden">
      <Hero locale={lang} />
      <Work locale={lang} />
      <Vacancies locale={lang} />
      <Contact locale={lang} />
      <Footer locale={lang} />
    </main>
  );
}
