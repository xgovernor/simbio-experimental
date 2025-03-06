import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "./app/routes";

export const runtime = "experimental-edge";

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware
export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const callbackUrl = nextUrl.searchParams.get("callback_url");
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  console.log("====================================")

  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(
        new URL(callbackUrl || DEFAULT_LOGIN_REDIRECT, nextUrl),
      );
    }
    return NextResponse.next();
  }

  if (!isPublicRoute && !isLoggedIn) {
    let callbackUrl = nextUrl.pathname;

    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    return NextResponse.redirect(
      new URL(`/auth/login?callback_url=${encodedCallbackUrl}`, nextUrl),
    );
  }

  return NextResponse.next();
});


// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
