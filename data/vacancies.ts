import type { Vacancy } from "@/types/vacancy";

export const vacancies: Vacancy[] = [
  {
    slug: "internationaal-chauffeur",
    locations: ["Coevorden", "Almelo"],
    hours: 40,
    publishedAt: new Date("2026-08-05"),
    image: "/images/chauffeur-01.webp",
    active: true,
    translations: {
      nl: {
        title: "Internationaal Chauffeur",
        department: "Transport",
        employmentType: "Fulltime",
        description:
          "Breng onze lading veilig en op tijd door Europa en word het vertrouwde gezicht van Interlogic onderweg.",
        sections: [
          {
            title: "Wat ga je doen?",
            paragraphs: [
              "Als internationaal chauffeur bij Interlogic ben je dagelijks onderweg voor onze klanten in heel Europa. Je zorgt dat iedere lading veilig, zorgvuldig en op tijd op de bestemming aankomt.",
              "Onderweg heb je direct contact met onze planning. Je werkt zelfstandig, maar staat er nooit alleen voor: samen zorgen we dat iedere rit goed verloopt.",
            ],
            bullets: [
              "Internationale transporten veilig en efficiënt uitvoeren",
              "Lading en transportdocumenten zorgvuldig controleren",
              "Contact onderhouden met de planning en onze klanten",
              "Ons materieel netjes en professioneel gebruiken",
            ],
          },
          {
            title: "Waarom past deze functie bij jou?",
            paragraphs: [
              "Je houdt van vrijheid op de weg, neemt verantwoordelijkheid en vindt het belangrijk om afspraken na te komen. Met jouw rustige en professionele houding ben je een vertrouwd gezicht voor onze klanten.",
            ],
          },
        ],
      },
      en: {
        title: "International Driver",
        department: "Transport",
        employmentType: "Full-time",
        description:
          "Deliver our cargo safely and on time across Europe and become the trusted face of Interlogic on the road.",
        sections: [
          {
            title: "What will you do?",
            paragraphs: [
              "As an international driver at Interlogic, you will be on the road for our customers across Europe. You make sure every load reaches its destination safely, carefully and on time.",
              "You stay in direct contact with our planning team while on the road. You work independently, but you are never on your own: together, we make every journey run smoothly.",
            ],
            bullets: [
              "Carry out international transports safely and efficiently",
              "Carefully check cargo and transport documents",
              "Stay in touch with planning and our customers",
              "Use our equipment neatly and professionally",
            ],
          },
          {
            title: "Why is this role right for you?",
            paragraphs: [
              "You enjoy the freedom of the road, take responsibility and value keeping your commitments. Your calm and professional attitude makes you a trusted face for our customers.",
            ],
          },
        ],
      },
      de: {
        title: "Internationaler Fahrer",
        department: "Transport",
        employmentType: "Vollzeit",
        description:
          "Bringe unsere Ladung sicher und pünktlich durch Europa und werde unterwegs zum vertrauten Gesicht von Interlogic.",
        sections: [
          {
            title: "Was wirst du tun?",
            paragraphs: [
              "Als internationaler Fahrer bei Interlogic bist du täglich für unsere Kunden in ganz Europa unterwegs. Du sorgst dafür, dass jede Ladung sicher, sorgfältig und pünktlich ihr Ziel erreicht.",
              "Unterwegs stehst du in direktem Kontakt mit unserer Disposition. Du arbeitest selbstständig, bist aber nie auf dich allein gestellt: Gemeinsam sorgen wir dafür, dass jede Fahrt reibungslos verläuft.",
            ],
            bullets: [
              "Internationale Transporte sicher und effizient durchführen",
              "Ladung und Transportdokumente sorgfältig kontrollieren",
              "Kontakt mit der Disposition und unseren Kunden halten",
              "Unsere Fahrzeuge ordentlich und professionell nutzen",
            ],
          },
          {
            title: "Warum passt diese Position zu dir?",
            paragraphs: [
              "Du liebst die Freiheit auf der Straße, übernimmst Verantwortung und hältst deine Zusagen ein. Mit deiner ruhigen und professionellen Art bist du ein vertrautes Gesicht für unsere Kunden.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "senior-transportplanner",
    locations: ["Coevorden"],
    hours: 40,
    publishedAt: new Date("2026-08-06"),
    image: "/images/planner-01.webp",
    indeedUrl: "https://indeed.nl",
    active: true,
    translations: {
      nl: {
        title: "Senior Transportplanner",
        department: "Planning",
        employmentType: "Fulltime",
        experience: "Senior",
        description:
          "Houd overzicht, stuur onze transporten slim aan en zorg samen met chauffeurs en collega’s dat iedere rit klopt.",
        sections: [
          {
            title: "Wat ga je doen?",
            paragraphs: [
              "Als Senior Planner ben jij de verbindende schakel tussen onze chauffeurs, klanten en interne organisatie. Je houdt overzicht over de dagelijkse transportplanning en zorgt dat mensen, materieel en afspraken slim samenkomen.",
              "Je schakelt snel wanneer de situatie daarom vraagt, maar verliest kwaliteit en klantbelang nooit uit het oog. Dankzij jouw ervaring herken je knelpunten vroeg en help je het team steeds slimmer en efficiënter te werken.",
            ],
            bullets: [
              "De dagelijkse nationale en internationale transportplanning coördineren",
              "Chauffeurs begeleiden en ondersteunen tijdens hun ritten",
              "Proactief schakelen met klanten en collega’s",
              "Capaciteit, routes en materieel efficiënt inzetten",
              "Knelpunten signaleren en passende oplossingen organiseren",
              "Kennis delen en minder ervaren planners verder helpen",
            ],
          },
          {
            title: "Waarom past deze functie bij jou?",
            paragraphs: [
              "Je krijgt energie van een dynamische planning en blijft rustig wanneer er veel tegelijk gebeurt. Je communiceert duidelijk, durft beslissingen te nemen en weet mensen op een prettige manier mee te krijgen.",
            ],
            bullets: [
              "Je hebt ruime ervaring binnen transportplanning of logistiek",
              "Je denkt vooruit en houdt ook onder druk het overzicht",
              "Je bent praktisch, besluitvaardig en klantgericht",
              "Je werkt graag samen en neemt vanzelf verantwoordelijkheid",
            ],
          },
        ],
      },
      en: {
        title: "Senior Transport Planner",
        department: "Planning",
        employmentType: "Full-time",
        experience: "Senior",
        description:
          "Stay in control, coordinate our transports intelligently and work with drivers and colleagues to make every journey run smoothly.",
        sections: [
          {
            title: "What will you do?",
            paragraphs: [
              "As a Senior Transport Planner, you are the vital link between our drivers, customers and internal organisation. You oversee daily transport planning and make sure people, equipment and commitments come together efficiently.",
              "You respond quickly when circumstances change without losing sight of quality or the customer. Your experience helps you identify issues early and enables the team to work smarter and more efficiently.",
            ],
            bullets: [
              "Coordinate daily national and international transport planning",
              "Guide and support drivers during their journeys",
              "Communicate proactively with customers and colleagues",
              "Deploy capacity, routes and equipment efficiently",
              "Identify issues and organise practical solutions",
              "Share knowledge and support less experienced planners",
            ],
          },
          {
            title: "Why is this role right for you?",
            paragraphs: [
              "You thrive in a dynamic planning environment and remain calm when several things happen at once. You communicate clearly, make confident decisions and know how to bring people along with you.",
            ],
            bullets: [
              "You have extensive experience in transport planning or logistics",
              "You think ahead and stay in control under pressure",
              "You are practical, decisive and customer-focused",
              "You enjoy teamwork and naturally take responsibility",
            ],
          },
        ],
      },
      de: {
        title: "Senior Transportplaner",
        department: "Disposition",
        employmentType: "Vollzeit",
        experience: "Senior",
        description:
          "Behalte den Überblick, steuere unsere Transporte intelligent und sorge gemeinsam mit Fahrern und Kollegen dafür, dass jede Fahrt reibungslos verläuft.",
        sections: [
          {
            title: "Was wirst du tun?",
            paragraphs: [
              "Als Senior Transportplaner bist du das verbindende Element zwischen unseren Fahrern, Kunden und der internen Organisation. Du behältst den Überblick über die tägliche Transportplanung und sorgst dafür, dass Menschen, Fahrzeuge und Vereinbarungen effizient zusammenkommen.",
              "Wenn sich die Situation ändert, reagierst du schnell, ohne Qualität und Kundeninteresse aus den Augen zu verlieren. Dank deiner Erfahrung erkennst du Engpässe frühzeitig und hilfst dem Team, immer intelligenter und effizienter zu arbeiten.",
            ],
            bullets: [
              "Die tägliche nationale und internationale Transportplanung koordinieren",
              "Fahrer während ihrer Touren begleiten und unterstützen",
              "Proaktiv mit Kunden und Kollegen kommunizieren",
              "Kapazitäten, Routen und Fahrzeuge effizient einsetzen",
              "Engpässe erkennen und passende Lösungen organisieren",
              "Wissen teilen und weniger erfahrene Planer unterstützen",
            ],
          },
          {
            title: "Warum passt diese Position zu dir?",
            paragraphs: [
              "Du arbeitest gerne in einer dynamischen Disposition und bleibst ruhig, wenn vieles gleichzeitig passiert. Du kommunizierst klar, triffst sichere Entscheidungen und kannst andere auf angenehme Weise mitnehmen.",
            ],
            bullets: [
              "Du verfügst über umfassende Erfahrung in der Transportplanung oder Logistik",
              "Du denkst voraus und behältst auch unter Druck den Überblick",
              "Du arbeitest pragmatisch, entscheidungsstark und kundenorientiert",
              "Du arbeitest gerne im Team und übernimmst selbstverständlich Verantwortung",
            ],
          },
        ],
      },
    },
  },
];
