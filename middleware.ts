import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export default withAuth(
  async function middleware(req) {
    const { pathname } = req.nextUrl;

    const token = await getToken({ req });
    const isAuthenticated = !!token;

    if (pathname === "/") {
      if (isAuthenticated) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
      return NextResponse.redirect(new URL("/signin", req.url));
    }

    if (pathname === "/signin") {
      if (isAuthenticated) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
      return null
    }

    if(!isAuthenticated) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  },
  {
    callbacks: {
      async authorized() {
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.
        return true;
      },
    },
  }
);
export const config = {
  matcher: ["/", "/dashboard/:path*", "/signin"],
};
