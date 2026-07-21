import Link from "next/link";
import { auth, signOut } from "@/auth";
import { Button } from "@heroui/react";
import { ThemeToggle } from "@/components/ThemeToggle";

export async function Navbar() {
  const session = await auth();

  return (
    <header className="border-b border-border bg-surface shadow-sm transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-emerald-600 transition-colors hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300"
        >
          SportCatalog
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          {session?.user ? (
            <>
              <div className="hidden text-right sm:block">
                <p className="text-sm font-medium text-foreground">
                  {session.user.name}
                </p>
                <p className="text-xs text-muted">{session.user.email}</p>
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
