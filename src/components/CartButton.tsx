"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { useCart } from "@/context/CartContext";

export function CartButton() {
  const { totalItems, hydrated } = useCart();

  return (
    <Link href="/carrito" className="relative">
      <Button size="sm" variant="ghost" aria-label="Ver carrito">
        Carrito
        {hydrated && totalItems > 0 && (
          <span className="ml-1.5 inline-flex min-w-5 items-center justify-center rounded-full bg-emerald-600 px-1.5 py-0.5 text-xs font-semibold text-white">
            {totalItems}
          </span>
        )}
      </Button>
    </Link>
  );
}
