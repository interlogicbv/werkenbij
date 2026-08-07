import type { Metadata } from "next";

import { siteUrl } from "@/lib/contact";
import { dictionaries } from "@/lib/i18n";

import "./globals.css";

const { meta } = dictionaries.nl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: meta.title, template: "%s | Interlogic" },
  description: meta.description,
  applicationName: "Interlogic Careers",
  authors: [{ name: "Interlogic", url: "https://inter-logic.eu" }],
  creator: "Interlogic",
  publisher: "Interlogic",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
