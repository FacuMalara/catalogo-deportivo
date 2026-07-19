"use client";

import { Button } from "@heroui/react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <h1 className="text-2xl font-semibold text-slate-900">
        No pudimos cargar el catálogo
      </h1>
      <p className="mt-3 text-slate-600">
        Suele deberse a que falta la variable{" "}
        <code className="rounded bg-slate-100 px-1">DATABASE_URL</code> en
        Vercel o la conexión a MongoDB Atlas falló.
      </p>
      <p className="mt-2 text-sm text-slate-500">{error.message}</p>
      <Button className="mt-8" variant="primary" onPress={reset}>
        Reintentar
      </Button>
    </div>
  );
}
