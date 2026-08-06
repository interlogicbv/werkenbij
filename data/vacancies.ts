import { Vacancy } from "@/types/vacancy";

export const vacancies: Vacancy[] = [
  {
    slug: "internationaal-chauffeur",
    title: "Internationaal Chauffeur",
    department: "Transport",
    locations: ["Coevorden", "Almelo"],
    employmentType: "Fulltime",
    hours: 40,
    description: "Lorem ipsum dolor sit amet.",
    publishedAt: new Date("2026-08-05"),
    image: "/images/chauffeur-01.png",
    active: true,
  },
];
