import type { Metadata } from "next";
import { CartView } from "@/components/CartView";

export const metadata: Metadata = {
  title: "Carrito",
};

export default function CartPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground">
        Carrito de compras
      </h1>
      <CartView />
    </div>
  );
}
