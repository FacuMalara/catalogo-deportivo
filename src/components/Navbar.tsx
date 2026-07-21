import Link from "next/link";
import { auth, signOut } from "@/auth";
import { Button } from "@heroui/react";

export async function Navbar() {
  const session = await auth();

  return (
    <header className="border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-emerald-600 transition-colors hover:text-emerald-700"
        >
          SportCatalog
        </Link>

        <div className="flex items-center gap-3">
          {session?.user ? (
            <>
              <div className="hidden text-right sm:block">
                <p className="text-sm font-medium text-slate-900">
                  {session.user.name}
                </p>
                <p className="text-xs text-slate-500">{session.user.email}</p>
              </div>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/login" });
                }}
              >
                <Button type="submit" size="sm" variant="secondary">
                  Cerrar sesión
                </Button>
              </form>
            </>
          ) : (
            <Link href="/login">
              <Button size="sm" variant="primary">
                Iniciar sesión
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
