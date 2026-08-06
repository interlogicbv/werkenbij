import type { Locale } from "@/lib/i18n";

export type VacancySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type VacancyTranslation = {
  title: string;
  department: string;
  employmentType: string;
  description: string;
  experience?: string;
  sections: VacancySection[];
};

export type Vacancy = {
  slug: string;
  locations: string[];
  hours: number;
  publishedAt: Date;
  image: string;
  indeedUrl?: string;
  active: boolean;
  translations: Record<Locale, VacancyTranslation>;
};
