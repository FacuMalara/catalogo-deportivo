import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";
import { Button, Card } from "@heroui/react";

type LoginPageProps = {
  searchParams: Promise<{ callbackUrl?: string; error?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const session = await auth();
  const { callbackUrl, error } = await searchParams;

  if (session?.user) {
    redirect(callbackUrl ?? "/");
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center px-4 py-12">
      <Card className="w-full p-8">
        <Card.Header className="flex flex-col items-start gap-2">
          <Card.Title className="text-2xl">SportCatalog</Card.Title>
          <Card.Description>
            Iniciá sesión con Google para agregar productos al carrito y
            completar tu compra.
          </Card.Description>
        </Card.Header>
        <Card.Content className="flex flex-col gap-4">
          {error && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/50 dark:text-red-300">
              No se pudo iniciar sesión. Intentá de nuevo.
            </p>
          )}
          <form
            action={async () => {
              "use server";
              await signIn("google", {
                redirectTo: callbackUrl ?? "/",
              });
            }}
          >
            <Button type="submit" variant="primary" fullWidth>
              Continuar con Google
            </Button>
          </form>
        </Card.Content>
      </Card>
    </div>
  );
}
