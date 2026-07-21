"use client";

import type { ReactNode } from "react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { RouterProvider } from "react-aria-components";
import { useRouter } from "next/navigation";
import { CartProvider } from "@/context/CartContext";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

type ProvidersProps = {
  children: ReactNode;
  session: Session | null;
};

export function Providers({ children, session }: ProvidersProps) {
  const router = useRouter();

  return (
    <SessionProvider session={session}>
      <RouterProvider navigate={router.push}>
        <CartProvider>{children}</CartProvider>
      </RouterProvider>
    </SessionProvider>
  );
}
