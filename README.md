# Werken bij Interlogic

Versie 1.0.0 van de meertalige recruitmentsite van Interlogic, bereikbaar via [werkenbij.inter-logic.eu](https://werkenbij.inter-logic.eu). De site toont actuele vacatures en vacaturedetailpagina's in het Nederlands, Engels en Duits.

## Techniek

- Next.js 16 met App Router en volledige statische export
- React 19 en TypeScript
- Tailwind CSS 4
- Gelokaliseerde routes, metadata en social previews
- Publicatie via GitHub Pages

## Lokaal ontwikkelen

```bash
npm install
npm run dev
```

Open daarna [http://localhost:3000](http://localhost:3000). Zowel `/` als `/nl/` toont de Nederlandse homepage. Daarnaast zijn `/en/` en `/de/` beschikbaar.

## Scripts

```bash
npm run dev          # Ontwikkelserver
npm run lint         # ESLint-controle
npm run format       # Prettier en Tailwind-class sorting
npm run format:check # Formatteringscontrole zonder wijzigingen
npm run build        # TypeScript-controle en statische productiebuild
```

Voer voor een release uit:

```bash
npm run lint
npm run format:check
npm run build
```

## Vacatures beheren

Alle vacaturedata staat in [`data/vacancies.ts`](data/vacancies.ts). Een actieve vacature genereert automatisch een Nederlandse, Engelse en Duitse detailpagina en wordt automatisch verwerkt in:

- het vacatureoverzicht;
- de vacatureteller in de Hero;
- de vacaturedetailpagina;
- canonical- en `hreflang`-links;
- Open Graph- en Twitter/X-metadata;
- de deelknop.

Een vacature heeft deze hoofdvelden:

```ts
{
  slug: "voorbeeld-vacature",
  locations: ["Coevorden"],
  hours: 40,
  publishedAt: new Date("2026-08-07"),
  image: "/images/voorbeeld-vacature.webp",
  indeedUrl: "https://nl.indeed.com/viewjob?jk=...", // optioneel
  active: true,
  translations: {
    nl: { /* Nederlandse inhoud */ },
    en: { /* Engelse inhoud */ },
    de: { /* Duitse inhoud */ },
  },
}
```

Zet `active` op `false` om de vacature bij de volgende build uit het overzicht en de statische routes te verwijderen. `indeedUrl` is optioneel; zonder deze waarde verschijnt geen Indeed-knop.

## Vacatureafbeeldingen

Iedere vacature gebruikt twee afbeeldingen in `public/images`:

```text
voorbeeld-vacature.webp    Hero-afbeelding op de vacaturepagina
voorbeeld-vacature-og.jpg  Deelafbeelding voor social media
```

Aanbevolen specificaties:

- Hero: WebP, 2400 × 1350 pixels (16:9), bij voorkeur kleiner dan 500 KB
- Social preview: JPEG, exact 1200 × 630 pixels
- Gebruik dezelfde basisnaam; de metadata leidt `-og.jpg` automatisch af van het WebP-pad
- Plaats geen tekst in de foto vanwege responsive uitsnedes

De homepage gebruikt `public/images/hero-interlogic.jpg` voor zowel de Hero als de homepage-metadata.

## Content en vertalingen

- Vacatureteksten staan per taal in [`data/vacancies.ts`](data/vacancies.ts).
- Algemene interface- en metadatateksten staan in [`lib/i18n.ts`](lib/i18n.ts).
- Teksten voor Hero, Menubar en Footer staan in [`lib/website-chrome.ts`](lib/website-chrome.ts).
- Domein en contactgegevens staan in [`lib/contact.ts`](lib/contact.ts).

## Routes

```text
/                                      Nederlandse homepage
/nl/                                   Nederlandse homepage
/en/                                   Engelse homepage
/de/                                   Duitse homepage
/{taal}/vacatures/{slug}/              Vacaturedetailpagina
```

De taalwisselaar behoudt op vacaturepagina's dezelfde vacature en verandert alleen de taal.

## Metadata en delen

Homepages en vacaturepagina's bevatten gelokaliseerde:

- titels en descriptions;
- canonical URL's;
- `hreflang`-links voor NL, EN, DE en `x-default`;
- Open Graph-data;
- Twitter/X Cards;
- absolute afbeeldings-URL's en alt-teksten.

De deelknop opent waar mogelijk het native deelmenu. Als dit niet beschikbaar is, wordt de vacature-URL naar het klembord gekopieerd.

## Projectstructuur

```text
app/                       Routes, layouts en metadata
components/                Paginaonderdelen en vacatureweergave
data/vacancies.ts          Vacaturedata en vertalingen
lib/contact.ts             Domein en contactgegevens
lib/i18n.ts                Algemene meertalige content
lib/website-chrome.ts      Hero-, navigatie- en Footer-content
public/images/             Logo's, Hero- en vacatureafbeeldingen
types/vacancy.ts           TypeScript-model voor vacatures
```

## Publicatie

De workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) bouwt en publiceert de site bij iedere push naar `main`. `npm run build` schrijft de volledige statische website naar `out`; er is in productie geen Node.js-server nodig.

Benodigde GitHub Pages-instellingen:

1. Kies onder **Settings → Pages** als bron **GitHub Actions**.
2. Stel `werkenbij.inter-logic.eu` in als custom domain.
3. Schakel **Enforce HTTPS** in.

DNS-record:

```text
Naam: werkenbij
Type: CNAME
Waarde: interlogicbv.github.io
```
