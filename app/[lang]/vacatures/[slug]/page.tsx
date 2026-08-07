import type { Metadata } from "next";
import { notFound } from "next/navigation";

import VacancyPage from "@/components/VacancyPage";
import { vacancies } from "@/data/vacancies";
import { siteUrl } from "@/lib/contact";
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
  const vacancyPath = `/${lang}/vacatures/${slug}/`;
  const vacancyUrl = new URL(vacancyPath, siteUrl).toString();
  const shareImage = vacancy.image.replace(/\.webp$/, "-og.jpg");
  const shareImageUrl = new URL(shareImage, siteUrl).toString();
  const socialTitle = `${content.title} | Werken bij Interlogic`;
  const imageAlt = `${content.title} – Werken bij Interlogic`;
  const openGraphLocales = { nl: "nl_NL", en: "en_GB", de: "de_DE" } as const;

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: vacancyUrl,
      languages: {
        ...Object.fromEntries(
          locales.map((locale) => [locale, `/${locale}/vacatures/${slug}/`]),
        ),
        "x-default": `/nl/vacatures/${slug}/`,
      },
    },
    openGraph: {
      title: socialTitle,
      description: content.description,
      type: "website",
      url: vacancyUrl,
      siteName: "Werken bij Interlogic",
      locale: openGraphLocales[lang],
      alternateLocale: locales
        .filter((locale) => locale !== lang)
        .map((locale) => openGraphLocales[locale]),
      images: [
        {
          url: shareImageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: content.description,
      images: [{ url: shareImageUrl, alt: imageAlt }],
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
