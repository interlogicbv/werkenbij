import Image from "next/image";
import Link from "next/link";

import ArrowRight from "@/components/ArrowRight";
import Footer from "@/components/Footer";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function NotFound() {
  return (
    <main>
      <section className="bg-brand-950 relative isolate flex min-h-[72vh] overflow-hidden text-white">
        <Image
          src={`${basePath}/images/hero-interlogic.jpg`}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover object-center"
        />
        <div className="from-brand-950 via-brand-950/90 to-brand-950/55 absolute inset-0 -z-20 bg-linear-to-r" />
        <div className="from-brand-950 to-brand-950/35 absolute inset-0 -z-20 bg-linear-to-t via-transparent" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_0.72fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="section-eyebrow text-brand-500">Foutcode 404</p>
            <h1 className="mt-5 max-w-2xl text-[2.35rem] leading-[1.02] font-bold tracking-tighter text-balance sm:text-[3.5rem] lg:text-[4.5rem]">
              Deze digitale snelweg is afgesloten
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              De pagina die u zoekt is verplaatst, verwijderd of heeft nooit
              bestaan. Via de homepage helpen we u graag weer op weg.
            </p>
            <Link
              href="/nl/"
              className="group bg-brand-500 hover:bg-brand-600 focus-visible:outline-brand-500 mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              Terug naar de website
              <ArrowRight />
            </Link>
          </div>

          <div
            className="relative mx-auto hidden aspect-square w-full max-w-105 items-center justify-center lg:flex"
            aria-hidden="true"
          >
            <div className="absolute inset-0 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm" />
            <div className="bg-brand-950/80 absolute top-1/2 left-1/2 h-[125%] w-28 -translate-x-1/2 -translate-y-1/2 rotate-35 shadow-2xl">
              <div className="mx-auto h-full w-px border-l-4 border-dashed border-white/40" />
            </div>
            <div className="border-brand-500 text-brand-950 relative flex size-56 rotate-3 flex-col items-center justify-center rounded-full border-12 bg-white shadow-2xl">
              <span className="text-7xl font-black tracking-tighter">404</span>
              <span className="mt-1 text-xs font-bold tracking-[0.2em] uppercase">
                Route afgesloten
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer locale="nl" />
    </main>
  );
}
