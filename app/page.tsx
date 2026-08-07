import type { Metadata } from "next";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Vacancies from "@/components/Vacancies";
import Work from "@/components/Work";
import { dictionaries } from "@/lib/i18n";

const { meta } = dictionaries.nl;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  keywords: [...meta.keywords],
  alternates: {
    canonical: "/nl/",
    languages: { nl: "/nl/", en: "/en/", de: "/de/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Werken bij Interlogic",
    locale: "nl_NL",
    alternateLocale: ["en_GB", "de_DE"],
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

export default function DefaultHomePage() {
  return (
    <main className="overflow-hidden">
      <Hero locale="nl" />
      <Work locale="nl" />
      <Vacancies locale="nl" />
      <Contact locale="nl" />
      <Footer locale="nl" />
    </main>
  );
}
