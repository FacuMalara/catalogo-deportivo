import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/require-auth";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { error } = await requireAuth();
  if (error) return error;

  const { searchParams } = new URL(request.url);
  const categoria = searchParams.get("categoria");

  const products = await prisma.product.findMany({
    where: categoria ? { category: { slug: categoria } } : undefined,
    include: { category: true },
    orderBy: { name: "asc" },
  });

  return NextResponse.json(products);
}
