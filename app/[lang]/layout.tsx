import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { siteUrl } from "@/lib/contact";
import { dictionaries, isLocale, locales } from "@/lib/i18n";

import "../globals.css";

const font = Inter({
  subsets: ["latin"],
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = dictionaries[lang];
  return {
    metadataBase: new URL(siteUrl),
    title: { default: meta.title, template: `%s | Interlogic` },
    description: meta.description,
    keywords: [...meta.keywords],
    applicationName: "Interlogic Careers",
    authors: [{ name: "Interlogic", url: "https://inter-logic.eu" }],
    creator: "Interlogic",
    publisher: "Interlogic",
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
      shortcut: "/icon.svg",
      apple: "/icon.svg",
    },
    alternates: {
      canonical: `/${lang}`,
      languages: { nl: "/nl", en: "/en", de: "/de", "x-default": "/nl" },
    },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      siteName: "Interlogic",
      locale: lang === "nl" ? "nl_NL" : lang === "de" ? "de_DE" : "en_GB",
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: "/images/hero-interlogic.jpg",
          width: 1920,
          height: 1200,
          alt: meta.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/images/hero-interlogic.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  return (
    <html lang={lang} className={`${font.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
