# Werken bij Interlogic

De meertalige recruitmentsite van Interlogic, bereikbaar via
[werkenbij.inter-logic.eu](https://werkenbij.inter-logic.eu). De site toont actuele vacatures, uitgebreide vacatureteksten en contactmogelijkheden in het Nederlands, Engels en Duits.

## Techniek

- Next.js 16 met App Router en statische generatie
- React 19 en TypeScript
- Tailwind CSS 4
- Next.js Image en Font Optimization
- Meertalige routes en metadata zonder externe i18n-library

## Lokaal starten

Installeer de dependencies:

```bash
npm install
```

Start de ontwikkelserver:

```bash
npm run dev
```

Open vervolgens [http://localhost:3000](http://localhost:3000). De root-URL verwijst standaard door naar `/nl`.

## Scripts

```bash
npm run dev          # Ontwikkelserver
npm run build        # Productiebuild en TypeScript-controle
npm run lint         # ESLint uitvoeren
npm run format       # Prettier en Tailwind-class sorting uitvoeren
npm run format:check # Controleren zonder bestanden te wijzigen
```

Voer voor iedere oplevering minimaal het volgende uit:

```bash
npm run lint
npm run build
```

## Talen en routes

De ondersteunde talen staan in [`lib/i18n.ts`](lib/i18n.ts):

- Nederlands: `/nl`
- Engels: `/en`
- Duits: `/de`

Voor iedere actieve vacature worden automatisch drie statische pagina’s gegenereerd:

```text
/nl/vacatures/[slug]
/en/vacatures/[slug]
/de/vacatures/[slug]
```

De taalwisselaar behoudt op een vacaturepagina dezelfde vacature en wisselt alleen de taal.

## Een vacature toevoegen

Alle vacatures staan in [`data/vacancies.ts`](data/vacancies.ts). Voeg aan de `vacancies`-array één object toe. TypeScript verplicht de Nederlandse, Engelse en Duitse inhoud.

```ts
{
  slug: "voorbeeld-vacature",
  locations: ["Coevorden", "Almelo"],
  hours: 40,
  publishedAt: new Date("2026-08-06"),
  image: "/images/voorbeeld-vacature.webp",
  active: true,
  translations: {
    nl: {
      title: "Voorbeeldvacature",
      department: "Afdeling",
      employmentType: "Fulltime",
      experience: "Senior",
      description: "Korte tekst voor de vacaturekaart en metadata.",
      sections: [
        {
          title: "Wat ga je doen?",
          paragraphs: ["Een uitgebreide alinea over de functie."],
          bullets: ["Eerste taak", "Tweede taak"],
        },
      ],
    },
    en: {
      // Engelse vertaling met dezelfde velden
    },
    de: {
      // Duitse vertaling met dezelfde velden
    },
  },
}
```

De `description` is de korte samenvatting voor de homepage, zoekmachines en socialmedia-preview. Gebruik `sections` voor de uitgebreide vacaturetekst. Iedere sectie ondersteunt:

- `title`: verplichte tussenkop
- `paragraphs`: optionele lijst met alinea’s
- `bullets`: optionele lijst met opsommingstekens

Zet `active` op `false` om een vacature en alle bijbehorende taalroutes niet meer te genereren.

## Indeed

Een Indeed-link is optioneel en hoort bij het algemene vacatureobject:

```ts
indeedUrl: "https://nl.indeed.com/viewjob?jk=...",
```

Wanneer `indeedUrl` aanwezig is, verschijnt een afzonderlijke turquoise knop die Indeed in een nieuw tabblad opent. De normale e-mail- en belmogelijkheden blijven beschikbaar. Laat het veld weg wanneer de vacature niet op Indeed staat.

## Afbeeldingen

Plaats vacatureafbeeldingen in `public/images` en verwijs ernaar vanaf `/images/...`.

Aanbevolen formaat:

- WebP
- 2400 × 1350 pixels (16:9)
- Bij voorkeur kleiner dan 500 KB
- Belangrijkste onderwerp in het midden of iets rechts daarvan
- Geen tekst in de foto vanwege responsive uitsnedes

Het witte headerlogo staat in `public/images/white_logo.png`. Het favicon staat als schaalbare SVG in `app/icon.svg`.

## Vertalingen

Er zijn twee soorten vertalingen:

1. Vacaturespecifieke teksten staan per vacature in `data/vacancies.ts`.
2. Algemene interface- en metadatateksten staan in `lib/i18n.ts`.

Voeg functietitels, omschrijvingen en uitgebreide vacaturesecties dus niet aan `i18n.ts` toe.

## Metadata en SEO

De overview-metadata wordt per taal opgebouwd vanuit `lib/i18n.ts`. Iedere vacature gebruikt automatisch de vertaalde titel, description en eigen vacatureafbeelding.

De site genereert onder andere:

- Canonical URL’s
- `hreflang` voor Nederlands, Engels en Duits
- Open Graph- en Twitter/X-previewdata
- Gelokaliseerde titels en descriptions
- Statische, indexeerbare vacaturepagina’s

De publieke basis-URL en contactgegevens staan centraal in [`lib/contact.ts`](lib/contact.ts).

## Projectstructuur

```text
app/[lang]/                 Gelokaliseerde routes, layout en metadata
components/                 Gedeelde header, footer en paginaweergaven
data/vacancies.ts           Vacaturedata en vacaturevertalingen
lib/contact.ts              Domein en contactgegevens
lib/i18n.ts                 Talen en algemene interfacevertalingen
public/images/              Logo’s en vacatureafbeeldingen
types/vacancy.ts            TypeScript-structuur voor vacatures
```

## Publicatie via GitHub Pages

Maak vóór publicatie altijd een schone productiebuild:

```bash
npm run lint
npm run format:check
npm run build
```

De site gebruikt een volledige statische Next.js-export. `npm run build` schrijft alle HTML, CSS, JavaScript en afbeeldingen naar de map `out`. Er is na de build geen Node.js-server nodig.

De workflow in `.github/workflows/deploy-pages.yml` wordt automatisch uitgevoerd bij iedere push naar `main`:

1. De repository wordt uitgecheckt.
2. Node.js 20 wordt geïnstalleerd.
3. `npm ci` installeert exact de versies uit `package-lock.json`.
4. `npm run build` genereert de statische site in `out`.
5. `out` wordt als GitHub Pages-artifact geüpload.
6. GitHub publiceert het artifact in de `github-pages`-omgeving.

De workflow kan ook handmatig worden gestart via **GitHub → Actions → Deploy to GitHub Pages → Run workflow**.

### Eenmalige GitHub-instellingen

1. Open **Settings → Pages** in de repository.
2. Selecteer bij **Build and deployment** de bron **GitHub Actions**.
3. Vul bij **Custom domain** `werkenbij.inter-logic.eu` in.
4. Schakel **Enforce HTTPS** in zodra GitHub het certificaat heeft uitgegeven.

Configureer bij de DNS-provider een CNAME-record:

```text
Naam: werkenbij
Type: CNAME
Waarde: interlogicbv.github.io
```

Het custom domein zorgt ervoor dat er geen repositorynaam als `basePath` nodig is.

De statische `public/index.html` stuurt bezoekers van `/` door naar `/nl/`. De taal- en vacaturepagina’s worden als afzonderlijke mappen met een `index.html` geëxporteerd dankzij `trailingSlash: true`.
