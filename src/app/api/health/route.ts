import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/require-auth";

export const dynamic = "force-dynamic";

export async function GET() {
  const { error } = await requireAuth();
  if (error) return error;

  const hasDatabaseUrl = Boolean(process.env.DATABASE_URL);

  if (!hasDatabaseUrl) {
    return NextResponse.json(
      {
        ok: false,
        error: "DATABASE_URL no está configurada.",
      },
      { status: 500 },
    );
  }

  try {
    const count = await prisma.product.count();

    return NextResponse.json({
      ok: true,
      products: count,
      message: "Conexión a MongoDB correcta.",
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Error desconocido de base de datos";

    return NextResponse.json(
      {
        ok: false,
        error: message,
      },
      { status: 500 },
    );
  }
}
