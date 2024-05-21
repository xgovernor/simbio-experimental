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

// function generateHybridId(request: any) {
//   // Timestamp:
//   const timestamp = Date.now();

//   // IP address (if available in request headers):
//   const ipAddress =
//     request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip");
//   const ipHash = ipAddress ? ipAddress.split(".").slice(0, 2).join("") : ""; // Use first two octets

//   // Device ID (using a custom random string generator):
//   const deviceId = generateRandomDeviceId();

//   return `${timestamp}${ipHash}${deviceId}`;
// }

// function generateRandomDeviceId() {
//   const characters = "abcdef0123456789";
//   let result = "";
//   for (let i = 0; i < 6; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return result;
// }

// export default async function middleware(req: NextRequest) {
//   // User agent information
//   // const agent = userAgent(req);
//   // console.log(agent);
//   // console.log("User", session);
//   console.log("X-Request-ID", req.headers.get("x-request-id"));

//   // Request ID
//   const requestId = generateHybridId(req); // Use your preferred ID generation method
//   req.headers.set("x-request-id", requestId);

//   return NextResponse.next();
// }

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
