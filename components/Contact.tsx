import { contactEmail, contactPhoneHref } from "@/lib/contact";
import { dictionaries, type Locale } from "@/lib/i18n";

function ArrowRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="size-5 fill-none stroke-current stroke-2"
    >
      <path d="M4 10h12m-5-5 5 5-5 5" />
    </svg>
  );
}

export default function Contact({ locale }: { locale: Locale }) {
  const { contact } = dictionaries[locale];

  return (
    <section className="text-brand-950 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20 lg:px-8 lg:py-28">
        <div className="max-w-xl">
          <p className="text-brand-600 text-xs font-bold tracking-[0.22em] uppercase sm:text-sm">
            {contact.eyebrow}
          </p>
          <h2 className="text-brand-950 mt-5 text-4xl leading-[1.03] font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            {contact.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {contact.text}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-7">
            <a
              href={`tel:${contactPhoneHref}`}
              className="bg-brand-500 hover:bg-brand-600 focus-visible:outline-brand-500 inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-semibold text-white transition focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {contact.call}
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="border-brand-500 text-brand-950 hover:text-brand-600 focus-visible:outline-brand-500 inline-flex shrink-0 items-center justify-center gap-3 border-b pb-2 text-sm font-semibold transition hover:gap-4 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {contact.email} <ArrowRight />
            </a>
          </div>
        </div>

        <figure className="relative overflow-hidden rounded-[1.75rem] border border-mist-200 bg-mist-50 p-8 sm:p-10 lg:p-12">
          <blockquote className="text-brand-950 relative max-w-2xl text-2xl leading-snug font-semibold tracking-[-0.025em] sm:text-3xl">
            “{contact.quote}”
          </blockquote>
          <figcaption className="mt-8">
            <span>
              <strong className="text-brand-950 block text-sm">
                {contact.quoteBy}
              </strong>
              <span className="text-sm text-slate-500">
                {contact.quoteRole}
              </span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
