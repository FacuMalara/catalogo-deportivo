import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const hasDatabaseUrl = Boolean(process.env.DATABASE_URL);

  if (!hasDatabaseUrl) {
    return NextResponse.json(
      {
        ok: false,
        error: "DATABASE_URL no está configurada en Vercel.",
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
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Error desconocido de base de datos";

    return NextResponse.json(
      {
        ok: false,
        error: message,
      },
      { status: 500 },
    );
  }
}
