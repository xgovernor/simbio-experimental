import type { Metadata } from "next";
import "@/styles/globals.scss";
import { StoreProvider } from "@/store/StoreProvider";
import Script from "next/script";
// import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "Simbio",
  assets: "http://localhost/assets",
  description: "A centralized blood donation platform",
  applicationName: "SIMBIO",
  authors: [{ name: "Dot9 Lab", url: "https://dot9.dev" }],
  creator: "Dot9 Lab",
  icons: "/favicon.svg",
  manifest: "/manifest.json",

  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  //   { media: "(prefers-color-scheme: dark)", color: "#18181b" }
  // ]
};

export default async function RootLayout({
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
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />

          {/* Meta Codes */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content={metadata.title as string}
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          {/* <meta name="msapplication-TileColor" content="#2B5797" /> */}
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#143B52" />

          <link rel="apple-touch-icon" href="/favicon.svg" />
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon.svg" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
          <link rel="apple-touch-icon" sizes="167x167" href="/favicon.svg" />

          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.svg" />
          <link rel="mask-icon" href="/favicon.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://simbio.dot9.dev" />
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
          <meta property="og:url" content="https://simbio.dot9.dev" />
          <meta
            property="og:image"
            content="https://simbio.dot9.dev/favicon.svg"
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

          <Script strategy="lazyOnload" id="clarity-script">
            {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "ku1hcvfs7d");
        `}
          </Script>
        </head>
        <body>{children}</body>
      </html>
    </StoreProvider>
  );
}
