export type Vacancy = {
  slug: string;
  title: string;
  department: string;
  locations: string[];
  employmentType: "Fulltime" | "Parttime";
  experience?: "Junior" | "Medior" | "Senior";
  hours: number;
  description: string;
  publishedAt: Date;
  image: string;
  active: boolean;
};
