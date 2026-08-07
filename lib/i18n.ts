export const locales = ["nl", "en", "de"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const localeNames: Record<Locale, string> = {
  nl: "NL",
  en: "EN",
  de: "DE",
};

export const dictionaries = {
  nl: {
    meta: {
      title: "Vacatures in transport & logistiek | Werken bij Interlogic",
      description:
        "Bekijk de vacatures bij Interlogic in Coevorden en Almelo. Werk als chauffeur, planner of logistiek professional mee aan betrouwbaar transport door Europa.",
      keywords: [
        "werken bij Interlogic",
        "vacatures transport",
        "vacatures logistiek",
        "chauffeur vacature",
        "transportplanner vacature",
        "vacatures Coevorden",
        "vacatures Almelo",
      ],
      imageAlt: "Interlogic vrachtwagens – werken in transport en logistiek",
    },
    intro: {
      eyebrow: "We think forward",
      title: "Werk waar je trots op kunt zijn",
      text: "Bij Interlogic ben je geen nummer. Jouw vakmanschap telt en jouw ideeën doen ertoe. We werken nuchter, helpen elkaar en vieren wat we samen voor elkaar krijgen.",
      strengths: [
        [
          "Vertrouwen",
          "Je krijgt de ruimte om je werk op jouw manier goed te doen.",
        ],
        [
          "Goed geregeld",
          "Duidelijke afspraken, modern materieel en korte lijnen.",
        ],
        [
          "Blijven groeien",
          "Ontwikkel jezelf in een team dat samen vooruit wil.",
        ],
      ],
    },
    jobs: {
      eyebrow: "Jouw volgende stap",
      title: "Kom bij ons werken",
      singular: "openstaande vacature",
      plural: "openstaande vacatures",
      view: "Bekijk vacature",
      empty: "Momenteel geen openstaande vacatures",
      emptyText: "Houd deze pagina in de gaten voor nieuwe mogelijkheden.",
    },
    contact: {
      eyebrow: "Nog vragen?",
      title: "Eerst even kennismaken?",
      text: "Mail ons of bel direct naar 0546-898960. We maken graag tijd voor je.",
      quote:
        "Een familiebedrijf waar mensen centraal staan, waar je elkaar vertrouwt en waar je samen bouwt aan de toekomst.",
      quoteBy: "Peter ter Luun",
      quoteRole: "Controller",
      call: "Bel 0546-898960",
      email: "Stuur een e-mail",
    },
    vacancy: {
      back: "Terug naar vacatures",
      function: "De functie",
      about: "Over deze vacature",
      workingAt: "Werken bij Interlogic",
      workingText:
        "Je werkt binnen een professioneel en betrokken team. We houden van duidelijke afspraken, korte lijnen en collega’s die verantwoordelijkheid nemen. Samen zorgen we dat onze klanten iedere dag op ons kunnen rekenen.",
      expect: "Dit kun je verwachten",
      expectTitle: "Alles om goed én met plezier te werken",
      benefits: [
        "Vertrouwen en verantwoordelijkheid",
        "Korte lijnen met je collega’s",
        "Professioneel, modern materieel",
        "Ruimte om jezelf te ontwikkelen",
        "Gezellige bedrijfsfeesten met je collega’s",
        "Sport met voordeel via de zaak",
      ],
      locations: "Locaties",
      employment: "Dienstverband",
      hours: "Uren per week",
      hoursSuffix: "uur",
      applyTitle: "Zie jij jezelf hier al werken?",
      applyText:
        "Laat van je horen. Een korte kennismaking is vaak de beste eerste stap.",
      apply: "Solliciteer direct",
      applyIndeed: "Solliciteer via Indeed",
      share: "Deel deze vacature",
      copied: "Link gekopieerd",
      published: "Vacature gepubliceerd",
      otherTitle: "Toch op zoek naar een andere functie?",
      otherText: "Bekijk alle actuele vacatures bij Interlogic.",
      all: "Bekijk alle vacatures",
      subject: "Sollicitatie",
    },
  },
  en: {
    meta: {
      title: "Transport & logistics jobs | Careers at Interlogic",
      description:
        "Explore careers at Interlogic in Coevorden and Almelo. Join us as a driver, transport planner or logistics professional and help keep Europe moving.",
      keywords: [
        "Interlogic careers",
        "transport jobs Netherlands",
        "logistics jobs Netherlands",
        "international driver job",
        "transport planner job",
        "jobs Coevorden",
        "jobs Almelo",
      ],
      imageAlt: "Interlogic trucks – careers in transport and logistics",
    },
    intro: {
      eyebrow: "We think forward",
      title: "Work you can be proud of",
      text: "At Interlogic, you are never just a number. Your expertise matters and your ideas count. We stay practical, help each other and celebrate what we achieve together.",
      strengths: [
        ["Trust", "You get the freedom to do your job well in your own way."],
        [
          "Well organised",
          "Clear agreements, modern equipment and direct communication.",
        ],
        [
          "Keep growing",
          "Develop yourself in a team that wants to move forward together.",
        ],
      ],
    },
    jobs: {
      eyebrow: "Your next move",
      title: "Come work with us",
      singular: "open vacancy",
      plural: "open vacancies",
      view: "View vacancy",
      empty: "No vacancies at the moment",
      emptyText: "Check back soon for new opportunities.",
    },
    contact: {
      eyebrow: "Any questions?",
      title: "Would you like to meet first?",
      text: "Email us or call 0546-898960. We’re happy to make time for you.",
      quote:
        "A family business where people come first, where you trust one another and build the future together.",
      quoteBy: "Peter ter Luun",
      quoteRole: "Controller",
      call: "Call 0546-898960",
      email: "Send an email",
    },
    vacancy: {
      back: "Back to vacancies",
      function: "The role",
      about: "About this vacancy",
      workingAt: "Working at Interlogic",
      workingText:
        "You will join a professional and committed team. We value clear agreements, direct communication and colleagues who take responsibility. Together, we make sure our customers can rely on us every day.",
      expect: "What you can expect",
      expectTitle: "Everything you need to work well and enjoy it",
      benefits: [
        "Trust and responsibility",
        "Direct communication with colleagues",
        "Professional, modern equipment",
        "Room to develop yourself",
        "Enjoyable company events with your colleagues",
        "Exercise with support from the company",
      ],
      locations: "Locations",
      employment: "Employment",
      hours: "Hours per week",
      hoursSuffix: "hours",
      applyTitle: "Can you see yourself working here?",
      applyText:
        "Get in touch. A short introduction is often the best first step.",
      apply: "Apply now",
      applyIndeed: "Apply via Indeed",
      share: "Share this vacancy",
      copied: "Link copied",
      published: "Vacancy published",
      otherTitle: "Looking for a different role?",
      otherText: "View all current vacancies at Interlogic.",
      all: "View all vacancies",
      subject: "Application",
    },
  },
  de: {
    meta: {
      title: "Jobs in Transport & Logistik | Karriere bei Interlogic",
      description:
        "Entdecke Stellen bei Interlogic in Coevorden und Almelo. Arbeite als Fahrer, Transportplaner oder Logistikprofi und halte Europa mit uns in Bewegung.",
      keywords: [
        "Karriere Interlogic",
        "Jobs Transport Niederlande",
        "Jobs Logistik Niederlande",
        "Berufskraftfahrer Stelle",
        "Transportplaner Stelle",
        "Jobs Coevorden",
        "Jobs Almelo",
      ],
      imageAlt: "Interlogic-Lkw – Karriere in Transport und Logistik",
    },
    intro: {
      eyebrow: "We think forward",
      title: "Arbeit, auf die du stolz sein kannst",
      text: "Bei Interlogic bist du keine Nummer. Dein Können zählt und deine Ideen sind willkommen. Wir arbeiten pragmatisch, helfen einander und feiern, was wir gemeinsam erreichen.",
      strengths: [
        [
          "Vertrauen",
          "Du bekommst den Freiraum, deine Arbeit auf deine Weise gut zu machen.",
        ],
        [
          "Gut organisiert",
          "Klare Absprachen, moderne Ausstattung und kurze Wege.",
        ],
        [
          "Gemeinsam wachsen",
          "Entwickle dich in einem Team weiter, das gemeinsam vorankommen will.",
        ],
      ],
    },
    jobs: {
      eyebrow: "Dein nächster Schritt",
      title: "Komm in unser Team",
      singular: "offene Stelle",
      plural: "offene Stellen",
      view: "Stelle ansehen",
      empty: "Zurzeit keine offenen Stellen",
      emptyText:
        "Schau bald wieder vorbei, um neue Möglichkeiten zu entdecken.",
    },
    contact: {
      eyebrow: "Noch Fragen?",
      title: "Erst einmal kennenlernen?",
      text: "Schreib uns oder ruf direkt unter 0546-898960 an. Wir nehmen uns gerne Zeit für dich.",
      quote:
        "Ein Familienunternehmen, in dem der Mensch im Mittelpunkt steht, man einander vertraut und gemeinsam an der Zukunft baut.",
      quoteBy: "Peter ter Luun",
      quoteRole: "Controller",
      call: "0546-898960 anrufen",
      email: "E-Mail senden",
    },
    vacancy: {
      back: "Zurück zu den Stellen",
      function: "Die Position",
      about: "Über diese Stelle",
      workingAt: "Arbeiten bei Interlogic",
      workingText:
        "Du arbeitest in einem professionellen und engagierten Team. Wir schätzen klare Absprachen, kurze Wege und Kolleginnen und Kollegen, die Verantwortung übernehmen. Gemeinsam sorgen wir dafür, dass sich unsere Kunden jeden Tag auf uns verlassen können.",
      expect: "Das kannst du erwarten",
      expectTitle: "Alles, um gut und mit Freude zu arbeiten",
      benefits: [
        "Vertrauen und Verantwortung",
        "Kurze Wege im Team",
        "Professionelle, moderne Ausstattung",
        "Raum für deine Entwicklung",
        "Schöne Firmenfeiern mit deinen Kolleginnen und Kollegen",
        "Vergünstigt über das Unternehmen trainieren",
      ],
      locations: "Standorte",
      employment: "Anstellung",
      hours: "Stunden pro Woche",
      hoursSuffix: "Stunden",
      applyTitle: "Kannst du dir vorstellen, hier zu arbeiten?",
      applyText:
        "Melde dich bei uns. Ein kurzes Kennenlernen ist oft der beste erste Schritt.",
      apply: "Jetzt bewerben",
      applyIndeed: "Über Indeed bewerben",
      share: "Stelle teilen",
      copied: "Link kopiert",
      published: "Stelle veröffentlicht",
      otherTitle: "Suchst du eine andere Position?",
      otherText: "Alle aktuellen Stellen bei Interlogic ansehen.",
      all: "Alle Stellen ansehen",
      subject: "Bewerbung",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
