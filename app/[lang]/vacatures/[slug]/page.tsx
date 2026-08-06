import type { Metadata } from "next";
import { notFound } from "next/navigation";

import VacancyPage from "@/components/VacancyPage";
import { vacancies } from "@/data/vacancies";
import { isLocale, locales } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    vacancies
      .filter((vacancy) => vacancy.active)
      .map(({ slug }) => ({ lang, slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/vacatures/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const vacancy = vacancies.find((item) => item.slug === slug && item.active);
  if (!vacancy) return {};
  const content = vacancy.translations[lang];
  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `/${lang}/vacatures/${slug}`,
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `/${locale}/vacatures/${slug}`]),
      ),
    },
    openGraph: {
      title: content.title,
      description: content.description,
      type: "website",
      url: `/${lang}/vacatures/${slug}`,
      siteName: "Interlogic",
      locale: lang === "nl" ? "nl_NL" : lang === "de" ? "de_DE" : "en_GB",
      images: [
        {
          url: vacancy.image,
          width: 1200,
          height: 630,
          alt: `${content.title} – Interlogic`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: [vacancy.image],
    },
  };
}

export default async function LocalizedVacancyPage({
  params,
}: PageProps<"/[lang]/vacatures/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  return <VacancyPage locale={lang} slug={slug} />;
}
