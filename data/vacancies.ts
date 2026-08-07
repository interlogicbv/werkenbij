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
          "Houd je van internationale ritten, goed materieel en duidelijke afspraken? Stap in en breng onze deel- en complete ladingen door heel Europa.",
        sections: [
          {
            title: "Europa wordt jouw werkgebied",
            paragraphs: [
              "Als Internationaal Chauffeur bij Interlogic vervoer je deel- en complete ladingen naar uiteenlopende bestemmingen in Europa. Je bent gedurende de werkweek van huis en krijgt onderweg veel vrijheid en verantwoordelijkheid.",
              "Een belangrijk onderdeel van je werk is het efficiënt koppelen en wisselen van trailers op strategische locaties. Je houdt contact met onze planning, controleert je documenten en zorgt dat lading, materieel en afspraken in goede handen zijn.",
            ],
            bullets: [
              "Deel- en complete ladingen door Europa vervoeren",
              "Trailers veilig en efficiënt koppelen en wisselen",
              "Lading en transportdocumenten zorgvuldig controleren",
              "Onderweg duidelijk afstemmen met de planning en klanten",
              "Jouw truck netjes houden en professioneel omgaan met ons materieel",
            ],
          },
          {
            title: "Dit neem jij mee",
            paragraphs: [
              "Je werkt graag zelfstandig, maar weet dat goed transport teamwork is. Ook wanneer een rit anders loopt dan gepland, blijf je rustig, betrouwbaar en oplossingsgericht.",
            ],
            bullets: [
              "Rijbewijs B, C en CE, een geldige Code 95 en bestuurderskaart",
              "Een goede beheersing van het Nederlands; Duits en/of Engels is mooi meegenomen",
              "De bereidheid om van maandag tot en met vrijdag onderweg te zijn",
              "Een zelfstandige, zorgvuldige en betrouwbare werkhouding",
            ],
          },
          {
            title: "Daarom rijd je bij Interlogic",
            paragraphs: [
              "Je vertrekt vanuit Coevorden of Almelo en rijdt met modern, goed uitgerust materieel dat onderweg echt jouw werkplek is. Je komt terecht in een klein en hecht team met korte lijnen naar de planning.",
            ],
            bullets: [
              "Arbeidsvoorwaarden en salaris volgens de cao Beroepsgoederenvervoer",
              "Uitzicht op een vast dienstverband",
              "Bedrijfsfitness, aanvullende vakantiedagen en gezamenlijke teamactiviteiten",
              "Een professionele organisatie waarin afspraak ook echt afspraak is",
            ],
          },
        ],
      },
      en: {
        title: "International Driver",
        department: "Transport",
        employmentType: "Full-time",
        description:
          "Do you enjoy international routes, quality equipment and clear agreements? Get behind the wheel and move our part and full loads across Europe.",
        sections: [
          {
            title: "Europe becomes your workplace",
            paragraphs: [
              "As an International Driver at Interlogic, you transport part and full loads to a wide range of destinations across Europe. You spend the working week away from home and enjoy considerable freedom and responsibility on the road.",
              "Efficiently coupling and exchanging trailers at strategic locations is an important part of your work. You stay in contact with planning, check your documents and make sure cargo, equipment and commitments are in safe hands.",
            ],
            bullets: [
              "Transport part and full loads throughout Europe",
              "Couple and exchange trailers safely and efficiently",
              "Carefully check cargo and transport documents",
              "Coordinate clearly with planning and customers while on the road",
              "Keep your truck tidy and treat our equipment professionally",
            ],
          },
          {
            title: "What you bring",
            paragraphs: [
              "You enjoy working independently while understanding that successful transport is a team effort. When a journey takes an unexpected turn, you remain calm, reliable and solution-oriented.",
            ],
            bullets: [
              "B, C and CE driving licences, a valid Code 95 qualification and driver card",
              "A good command of Dutch; German and/or English is an advantage",
              "Willingness to be away from home from Monday through Friday",
              "An independent, careful and reliable approach to work",
            ],
          },
          {
            title: "Why drive for Interlogic",
            paragraphs: [
              "You start from Coevorden or Almelo and drive modern, well-equipped vehicles that become a genuine workplace on the road. You join a close-knit team with direct contact to planning.",
            ],
            bullets: [
              "Salary and employment conditions in accordance with the Dutch road haulage collective agreement",
              "The prospect of a permanent contract",
              "Company fitness, additional leave days and team activities",
              "A professional organisation where agreements really matter",
            ],
          },
        ],
      },
      de: {
        title: "Internationaler Fahrer",
        department: "Transport",
        employmentType: "Vollzeit",
        description:
          "Du liebst internationale Touren, gutes Material und klare Absprachen? Dann steige ein und bringe unsere Teil- und Komplettladungen durch ganz Europa.",
        sections: [
          {
            title: "Europa wird dein Arbeitsplatz",
            paragraphs: [
              "Als internationaler Fahrer bei Interlogic transportierst du Teil- und Komplettladungen zu unterschiedlichen Zielen in Europa. Während der Arbeitswoche bist du unterwegs und genießt dabei viel Freiheit und Verantwortung.",
              "Das effiziente An- und Abkuppeln sowie Wechseln von Aufliegern an strategischen Standorten ist ein wichtiger Teil deiner Arbeit. Du hältst Kontakt mit unserer Disposition, prüfst deine Dokumente und sorgst dafür, dass Ladung, Fahrzeug und Vereinbarungen in guten Händen sind.",
            ],
            bullets: [
              "Teil- und Komplettladungen durch Europa transportieren",
              "Auflieger sicher und effizient an- und abkuppeln sowie wechseln",
              "Ladung und Transportdokumente sorgfältig kontrollieren",
              "Unterwegs klar mit Disposition und Kunden kommunizieren",
              "Deinen Lkw sauber halten und professionell mit unserem Material umgehen",
            ],
          },
          {
            title: "Das bringst du mit",
            paragraphs: [
              "Du arbeitest gerne selbstständig, weißt aber auch, dass guter Transport Teamarbeit ist. Läuft eine Tour anders als geplant, bleibst du ruhig, zuverlässig und lösungsorientiert.",
            ],
            bullets: [
              "Führerscheine B, C und CE, gültige Code-95-Qualifikation und Fahrerkarte",
              "Gute Niederländischkenntnisse; Deutsch und/oder Englisch sind von Vorteil",
              "Bereitschaft, von Montag bis Freitag unterwegs zu sein",
              "Eine selbstständige, sorgfältige und zuverlässige Arbeitsweise",
            ],
          },
          {
            title: "Darum fährst du bei Interlogic",
            paragraphs: [
              "Du startest in Coevorden oder Almelo und fährst mit modernen, gut ausgestatteten Fahrzeugen, die unterwegs zu deinem echten Arbeitsplatz werden. Dich erwartet ein kleines, eng verbundenes Team mit kurzen Wegen zur Disposition.",
            ],
            bullets: [
              "Gehalt und Arbeitsbedingungen nach dem niederländischen Tarifvertrag für den Güterverkehr",
              "Aussicht auf eine Festanstellung",
              "Betriebliche Fitnessangebote, zusätzliche Urlaubstage und gemeinsame Teamaktivitäten",
              "Eine professionelle Organisation, in der Absprachen wirklich zählen",
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
          "Jij kijkt verder dan de planning van vandaag en brengt klanten, chauffeurs en collega’s samen in een transportproces dat klopt.",
        sections: [
          {
            title: "Jij houdt de planning in beweging",
            paragraphs: [
              "Transportplanning is iedere dag anders. Juist dat maakt jouw werk interessant. Als Senior Transportplanner bij Interlogic overzie je niet alleen wat er vandaag rijdt, maar bouw je meerdere dagen vooruit aan een haalbare en efficiënte planning.",
              "Je stemt continu af met chauffeurs, klanten, sales en je collega’s op de planning. Verandert er onderweg iets? Dan houd jij het hoofd koel, maak je een duidelijke keuze en zorg je dat iedereen op tijd weet waar die aan toe is.",
            ],
            bullets: [
              "De bezetting, routes en inzet van materieel meerdere dagen vooruit plannen",
              "De voortgang bewaken en vroeg bijsturen bij afwijkingen of knelpunten",
              "Duidelijk communiceren met chauffeurs, klanten, sales en collega’s",
              "Commerciële kansen herkennen zonder de uitvoerbaarheid uit het oog te verliezen",
              "Beslissingen nemen die goed zijn voor de klant, het team en Interlogic",
              "Met jouw ervaring bijdragen aan rust, kwaliteit en ontwikkeling op de afdeling",
            ],
          },
          {
            title: "Dit breng jij mee",
            paragraphs: [
              "Jij kent de dynamiek van transport en voelt je thuis op een afdeling waar tempo, verantwoordelijkheid en teamwork samenkomen. Je ziet wat er nodig is, spreekt mensen gemakkelijk aan en durft knopen door te hakken.",
            ],
            bullets: [
              "Je hebt ruime ervaring als transportplanner of in een vergelijkbare logistieke functie",
              "Je beschikt over mbo+ of hbo werk- en denkniveau, bij voorkeur richting transport en logistiek",
              "Je denkt vooruit, werkt nauwkeurig en houdt overzicht wanneer de druk oploopt",
              "Je communiceert overtuigend en combineert klantgerichtheid met commercieel inzicht",
              "Je beheerst het Nederlands en kunt je goed redden in het Duits en Engels",
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
          "You look beyond today’s schedule and bring customers, drivers and colleagues together in a transport operation that works.",
        sections: [
          {
            title: "You keep planning in motion",
            paragraphs: [
              "Transport planning is different every day, and that is exactly what makes your work interesting. As Senior Transport Planner at Interlogic, you oversee today’s operations while building a realistic and efficient schedule several days ahead.",
              "You coordinate continuously with drivers, customers, sales and your planning colleagues. When circumstances change, you stay calm, make a clear decision and ensure everyone knows what to expect in good time.",
            ],
            bullets: [
              "Plan staffing, routes and equipment several days ahead",
              "Monitor progress and intervene early when issues or changes arise",
              "Communicate clearly with drivers, customers, sales and colleagues",
              "Recognise commercial opportunities while keeping plans workable",
              "Make decisions that serve the customer, the team and Interlogic",
              "Use your experience to strengthen calm, quality and development within the department",
            ],
          },
          {
            title: "What you bring",
            paragraphs: [
              "You understand the dynamics of transport and feel at home in a department where pace, responsibility and teamwork come together. You see what needs to happen, communicate easily and are comfortable making decisions.",
            ],
            bullets: [
              "You have extensive experience as a transport planner or in a comparable logistics role",
              "You have vocational or higher professional working and thinking ability, preferably in transport and logistics",
              "You think ahead, work accurately and remain in control under pressure",
              "You communicate convincingly and combine customer focus with commercial awareness",
              "You are fluent in Dutch and can communicate effectively in German and English",
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
          "Du blickst über die heutige Planung hinaus und verbindest Kunden, Fahrer und Kollegen zu einem Transportablauf, der funktioniert.",
        sections: [
          {
            title: "Du hältst die Planung in Bewegung",
            paragraphs: [
              "Transportplanung ist jeden Tag anders – genau das macht deine Arbeit interessant. Als Senior Transportplaner bei Interlogic überblickst du nicht nur den heutigen Betrieb, sondern erstellst mehrere Tage im Voraus eine realistische und effiziente Planung.",
              "Du stimmst dich laufend mit Fahrern, Kunden, Vertrieb und deinen Kollegen in der Disposition ab. Ändert sich unterwegs etwas, bleibst du ruhig, triffst eine klare Entscheidung und sorgst dafür, dass alle rechtzeitig wissen, woran sie sind.",
            ],
            bullets: [
              "Besetzung, Routen und Fahrzeuge mehrere Tage im Voraus planen",
              "Den Ablauf überwachen und bei Abweichungen oder Engpässen frühzeitig eingreifen",
              "Klar mit Fahrern, Kunden, Vertrieb und Kollegen kommunizieren",
              "Geschäftliche Chancen erkennen, ohne die Umsetzbarkeit aus den Augen zu verlieren",
              "Entscheidungen treffen, die dem Kunden, dem Team und Interlogic dienen",
              "Mit deiner Erfahrung zu Ruhe, Qualität und Entwicklung in der Abteilung beitragen",
            ],
          },
          {
            title: "Das bringst du mit",
            paragraphs: [
              "Du kennst die Dynamik des Transportwesens und fühlst dich in einer Abteilung wohl, in der Tempo, Verantwortung und Teamarbeit zusammenkommen. Du erkennst, was nötig ist, gehst offen auf Menschen zu und triffst gerne Entscheidungen.",
            ],
            bullets: [
              "Du hast umfassende Erfahrung als Transportplaner oder in einer vergleichbaren Logistikfunktion",
              "Du verfügst über ein entsprechendes berufliches oder akademisches Niveau, vorzugsweise im Bereich Transport und Logistik",
              "Du denkst voraus, arbeitest präzise und behältst auch unter Druck den Überblick",
              "Du kommunizierst überzeugend und verbindest Kundenorientierung mit kaufmännischem Gespür",
              "Du beherrschst Niederländisch und kannst dich auf Deutsch und Englisch gut verständigen",
            ],
          },
        ],
      },
    },
  },
];
