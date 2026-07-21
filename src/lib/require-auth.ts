import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function requireAuth() {
  const session = await auth();

  if (!session?.user) {
    return {
      session: null,
      error: NextResponse.json(
        { error: "No autorizado. Iniciá sesión con Google." },
        { status: 401 },
      ),
    };
  }

  return { session, error: null };
}
