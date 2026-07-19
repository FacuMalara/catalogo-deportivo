import Link from "next/link";
import { Button } from "@heroui/react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-slate-200">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-slate-900">
        Producto no encontrado
      </h2>
      <p className="mt-2 text-slate-600">
        El producto que buscás no existe o fue removido del catálogo.
      </p>
      <Link href="/" className="mt-8">
        <Button variant="primary">Volver al catálogo</Button>
      </Link>
    </div>
  );
}
