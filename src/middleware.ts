import NextAuth from "next-auth";
import authConfig from "@/auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = Boolean(req.auth);
  const { pathname } = req.nextUrl;

  const isAuthRoute =
    pathname.startsWith("/login") || pathname.startsWith("/api/auth");

  if (isAuthRoute) {
    if (isLoggedIn && pathname.startsWith("/login")) {
      return Response.redirect(new URL("/", req.nextUrl));
    }
    return;
  }

  if (pathname.startsWith("/carrito") && !isLoggedIn) {
    const loginUrl = new URL("/login", req.nextUrl);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return Response.redirect(loginUrl);
  }
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
