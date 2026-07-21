"use client";

import { Button } from "@heroui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import type { CartProduct } from "@/lib/cart-types";

type ProductCardActionsProps = {
  product: CartProduct;
};

export function ProductCardActions({ product }: ProductCardActionsProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const { addItem } = useCart();

  function handleAddToCart() {
    if (!session?.user) {
      router.push(
        `/login?callbackUrl=${encodeURIComponent(`/productos/${product.slug}`)}`,
      );
      return;
    }
    addItem(product);
  }

  return (
    <Button size="sm" variant="secondary" onPress={handleAddToCart}>
      + Carrito
    </Button>
  );
}
