import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-emerald-600 transition-colors hover:text-emerald-700"
        >
          SportCatalog
        </Link>
        <p className="hidden text-sm text-slate-500 sm:block">
          Tu catálogo de productos deportivos
        </p>
      </div>
    </header>
  );
}
