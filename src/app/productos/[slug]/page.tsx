import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Breadcrumbs,
  Button,
  Chip,
  Separator,
} from "@heroui/react";
import { ProductImage } from "@/components/ProductImage";
import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/format";

export const dynamic = "force-dynamic";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await prisma.product.findUnique({
    where: { slug },
    include: { category: true },
  });

  if (!product) {
    return { title: "Producto no encontrado" };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = await prisma.product.findUnique({
    where: { slug },
    include: { category: true },
  });

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs className="mb-6">
        <Breadcrumbs.Item href="/">Inicio</Breadcrumbs.Item>
        <Breadcrumbs.Item
          href={`/?categoria=${product.category.slug}`}
        >
          {product.category.name}
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>{product.name}</Breadcrumbs.Item>
      </Breadcrumbs>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100">
          <ProductImage
            src={product.imageUrl}
            alt={product.name}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <div className="mb-3 flex flex-wrap gap-2">
              <Chip color="success" variant="soft">
                {product.category.name}
              </Chip>
              {product.featured && (
                <Chip color="accent" variant="soft">
                  Destacado
                </Chip>
              )}
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {product.name}
            </h1>
            {product.brand && (
              <p className="mt-2 text-lg text-slate-500">{product.brand}</p>
            )}
          </div>

          <p className="text-3xl font-bold text-emerald-600">
            {formatPrice(product.price)}
          </p>

          <Separator />

          <div>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Descripción
            </h2>
            <p className="leading-relaxed text-slate-700">
              {product.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-slate-500">Deporte</span>
              <p className="text-slate-900">{product.sport}</p>
            </div>
            {product.brand && (
              <div>
                <span className="font-medium text-slate-500">Marca</span>
                <p className="text-slate-900">{product.brand}</p>
              </div>
            )}
          </div>

          <Link href="/">
            <Button variant="secondary">← Volver al catálogo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
