import type { Metadata } from "next";
import "@/styles/globals.scss";
import { StoreProvider } from "@/store/StoreProvider";
// import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "Simbio",
  description: "A centralized blood donation platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      {/* <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}> */}
      <html lang="en" className="overflow-hidden">
        <head>
          <meta charSet="utf-8" />
          <meta name="description" content={metadata.description as string} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{metadata.title as string}</title>

          {/* Meta Codes */}
          <meta name="application-name" content={metadata.title as string} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content={metadata.title as string}
          />
          <meta name="description" content={metadata.description as string} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />

          <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/touch-icon-ipad.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/touch-icon-iphone-retina.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/icons/touch-icon-ipad-retina.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/favicon.ico" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://yourdomain.com" />
          <meta name="twitter:title" content={metadata.title as string} />
          <meta
            name="twitter:description"
            content={metadata.description as string}
          />
          <meta
            name="twitter:image"
            content="https://yourdomain.com/icons/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@abutahermuhammad" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={metadata.title as string} />
          <meta
            property="og:description"
            content={metadata.description as string}
          />
          <meta property="og:site_name" content={metadata.title as string} />
          <meta property="og:url" content="https://yourdomain.com" />
          <meta
            property="og:image"
            content="https://yourdomain.com/icons/apple-touch-icon.png"
          />

          {/* apple splash screen images */}
          {/*
        <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' />
        */}
        </head>
        <body>{children}</body>
      </html>
    </StoreProvider>
  );
}
