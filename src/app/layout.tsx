import "@/styles/globals.scss";
import type { Metadata } from "next";
import { StoreProvider } from "@/store/StoreProvider";
import Script from "next/script";
import { auth } from "@/lib/auth";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import DATA from "@/assets/data/info.json";
import OG_IMAGE from "@/assets/images/OG Image_ Global.svg";
import OG_IMAGE_1 from "@/assets/images/OG Image_ Global.jpg";
// import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || DATA.base_url),
  title: DATA.title,
  // assets: `${DATA.base_url}/assets`,
  description: DATA.description,
  applicationName: DATA.title,
  authors: DATA.authors,
  creator: DATA.authors[0].name,
  icons: "/favicon.svg",
  manifest: "/manifest.json",
  openGraph: {
    title: DATA.title,
    description: DATA.description,
    url: DATA.base_url,
    siteName: DATA.title,
    images: [
      {
        url: OG_IMAGE,
        width: 700,
        height: 400,
        alt: DATA.title,
      },
      {
        url: OG_IMAGE_1,
        width: 700,
        height: 400,
        alt: DATA.title,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DATA.title,
    description: DATA.description,
    creator: "@abutahermuhammad",
    images: [OG_IMAGE, OG_IMAGE_1],
  },
  appleWebApp: {
    capable: true,
    title: DATA.title,
    statusBarStyle: "black-translucent",
  },
  keywords:
    "simbio, dot9.dev, blood donation, blood donation management system, CRM, non-profit, Bangladesh, Abu Taher Muhammad",
  verification: {
    // google: "",
    // yandex: "",
    // yahoo: "",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = (await auth()) as Session;

  return (
    <SessionProvider session={session}>
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
            <meta name="mobile-web-app-capable" content="yes" />
            <meta
              name="msapplication-config"
              content="/icons/browserconfig.xml"
            />
            {/* <meta name="msapplication-TileColor" content="#2B5797" /> */}
            <meta name="msapplication-tap-highlight" content="no" />
            <meta name="theme-color" content="#143B52" />

            <link rel="mask-icon" href="/favicon.svg" color="#5bbad5" />
            <link rel="shortcut icon" href="/favicon.ico" />

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
    </SessionProvider>
  );
}
