"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, Separator } from "@heroui/react";
import { ProductImage } from "@/components/ProductImage";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";

export function CartView() {
  const { items, totalPrice, updateQuantity, removeItem, clearCart } =
    useCart();
  const [purchased, setPurchased] = useState(false);

  if (purchased) {
    return (
      <div className="mx-auto max-w-lg rounded-xl border border-border bg-surface px-6 py-12 text-center">
        <h1 className="text-2xl font-bold text-foreground">
          ¡Compra confirmada!
        </h1>
        <p className="mt-3 text-muted">
          Gracias por tu pedido. Te enviaremos la confirmación por email.
        </p>
        <Link href="/" className="mt-8 inline-block">
          <Button variant="primary">Seguir comprando</Button>
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-lg rounded-xl border border-dashed border-border bg-surface px-6 py-16 text-center">
        <h1 className="text-2xl font-semibold text-foreground">
          Tu carrito está vacío
        </h1>
        <p className="mt-2 text-muted">
          Explorá el catálogo y agregá productos para comprar.
        </p>
        <Link href="/" className="mt-8 inline-block">
          <Button variant="primary">Ver catálogo</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
      <div className="space-y-4">
        {items.map((item) => (
          <article
            key={item.slug}
            className="flex gap-4 rounded-xl border border-border bg-surface p-4"
          >
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-border/50">
              <ProductImage src={item.imageUrl} alt={item.name} />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <Link
                href={`/productos/${item.slug}`}
                className="font-medium text-foreground hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                {item.name}
              </Link>
              <p className="text-sm text-muted">{formatPrice(item.price)} c/u</p>
              <div className="flex flex-wrap items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onPress={() =>
                    updateQuantity(item.slug, Math.max(1, item.quantity - 1))
                  }
                  isDisabled={item.quantity <= 1}
                >
                  −
                </Button>
                <span className="min-w-8 text-center text-sm font-medium">
                  {item.quantity}
                </span>
                <Button
                  size="sm"
                  variant="ghost"
                  onPress={() => updateQuantity(item.slug, item.quantity + 1)}
                >
                  +
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  onPress={() => removeItem(item.slug)}
                >
                  Quitar
                </Button>
              </div>
            </div>
            <p className="shrink-0 font-semibold text-foreground">
              {formatPrice(item.price * item.quantity)}
            </p>
          </article>
        ))}
      </div>

      <aside className="h-fit rounded-xl border border-border bg-surface p-6">
        <h2 className="text-lg font-semibold text-foreground">Resumen</h2>
        <Separator className="my-4" />
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">Subtotal</span>
          <span className="font-semibold text-foreground">
            {formatPrice(totalPrice)}
          </span>
        </div>
        <Button
          className="mt-6"
          variant="primary"
          fullWidth
          onPress={() => {
            clearCart();
            setPurchased(true);
          }}
        >
          Confirmar compra
        </Button>
        <Link href="/" className="mt-3 block">
          <Button variant="secondary" fullWidth>
            Seguir comprando
          </Button>
        </Link>
      </aside>
    </div>
  );
}
