import { notFound } from "next/navigation";

import HomePage from "@/components/HomePage";
import { isLocale } from "@/lib/i18n";

export default async function LocalizedHomePage({
  params,
}: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <HomePage locale={lang} />;
}
