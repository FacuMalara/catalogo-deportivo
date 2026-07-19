import Link from "next/link";
import { Card, Chip, Button } from "@heroui/react";
import type { Category, Product } from "@prisma/client";
import { formatPrice } from "@/lib/format";
import { ProductImage } from "./ProductImage";

export type ProductWithCategory = Product & { category: Category };

export function ProductCard({ product }: { product: ProductWithCategory }) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-md">
      <div className="relative aspect-square bg-slate-100">
        <ProductImage src={product.imageUrl} alt={product.name} />
        {product.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-medium text-white">
            Destacado
          </span>
        )}
      </div>
      <Card.Header>
        <Card.Title className="line-clamp-2 text-base">{product.name}</Card.Title>
        {product.brand && (
          <Card.Description>{product.brand}</Card.Description>
        )}
      </Card.Header>
      <Card.Content>
        <Chip color="success" size="sm" variant="soft">
          {product.category.name}
        </Chip>
      </Card.Content>
      <Card.Footer className="flex items-center justify-between gap-2">
        <span className="text-lg font-semibold text-slate-900">
          {formatPrice(product.price)}
        </span>
        <Link href={`/productos/${product.slug}`}>
          <Button size="sm" variant="primary">
            Ver detalle
          </Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}
