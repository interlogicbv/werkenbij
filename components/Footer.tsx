export default function Footer() {
  return (
    <footer className="bg-brand-950 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-6 py-8 text-sm lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>{new Date().getFullYear()} Interlogic</p>
        <p className="focus-visible:outline-brand-500 hidden transition focus-visible:outline-2 focus-visible:outline-offset-4 sm:block">
          We think forward!
        </p>
      </div>
    </footer>
  );
}
