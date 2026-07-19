import { Suspense } from "react";
import { Chip } from "@heroui/react";
import { CatalogFilters } from "@/components/CatalogFilters";
import { ProductCard } from "@/components/ProductCard";
import { ProductGrid } from "@/components/ProductGrid";
import { prisma } from "@/lib/prisma";

type HomeProps = {
  searchParams: Promise<{ categoria?: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { categoria } = await searchParams;

  const [categories, products, featuredProducts] = await Promise.all([
    prisma.category.findMany({ orderBy: { name: "asc" } }),
    prisma.product.findMany({
      where: categoria
        ? { category: { slug: categoria } }
        : undefined,
      include: { category: true },
      orderBy: { name: "asc" },
    }),
    categoria
      ? Promise.resolve([])
      : prisma.product.findMany({
          where: { featured: true },
          include: { category: true },
          take: 4,
        }),
  ]);

  const activeCategory = categories.find((cat) => cat.slug === categoria);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Catálogo deportivo
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Encontrá equipamiento para fútbol, running, fitness, natación, básquet
          y tenis.
        </p>
      </section>

      <section className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Suspense fallback={<div className="h-10 w-48 animate-pulse rounded-lg bg-slate-200" />}>
          <CatalogFilters categories={categories} />
        </Suspense>
        {activeCategory && (
          <Chip color="accent" variant="soft">
            Filtrando: {activeCategory.name}
          </Chip>
        )}
      </section>

      {!categoria && featuredProducts.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">
            Destacados
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="mb-4 text-xl font-semibold text-slate-900">
          {activeCategory
            ? `Productos de ${activeCategory.name}`
            : "Todos los productos"}
        </h2>
        <ProductGrid products={products} />
      </section>
    </div>
  );
}
