"use client";

import { Button } from "@heroui/react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import type { CartProduct } from "@/lib/cart-types";

type ProductActionsProps = {
  product: CartProduct;
};

export function ProductActions({ product }: ProductActionsProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const { addItem } = useCart();

  function requireAuth(action: () => void) {
    if (!session?.user) {
      const loginUrl = `/login?callbackUrl=${encodeURIComponent(pathname)}`;
      router.push(loginUrl);
      return;
    }
    action();
  }

  function handleAddToCart() {
    requireAuth(() => {
      addItem(product);
      router.push("/carrito");
    });
  }

  function handleBuyNow() {
    requireAuth(() => {
      addItem(product);
      router.push("/carrito");
    });
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button variant="primary" fullWidth onPress={handleAddToCart}>
        Agregar al carrito
      </Button>
      <Button variant="secondary" fullWidth onPress={handleBuyNow}>
        Comprar ahora
      </Button>
    </div>
  );
}
