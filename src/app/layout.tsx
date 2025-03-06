import localFont from "next/font/local";
import "@/styles/globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { auth } from "@/lib/auth";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import DATA from "@/assets/data/info.json";
import OG_IMAGE from "@/assets/images/OG Image_Global.svg";
import OG_IMAGE_1 from "@/assets/images/OG Image_Global.jpg";
import { ReactNode } from "react";
import Head from "next/head";
import { Providers } from "./providers";
import { StoreProvider } from "@/store/StoreProvider";

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
        url: OG_IMAGE.src,
        width: 700,
        height: 400,
        alt: DATA.title,
      },
      {
        url: OG_IMAGE_1.src,
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
    images: [OG_IMAGE, OG_IMAGE_1.src],
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

const segoe_ui = localFont({
  src: [
    {
      path: "./../assets/fonts/segoe-ui/segoe-ui.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../assets/fonts/segoe-ui/segoe-ui-italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "./../assets/fonts/segoe-ui/segoe-ui-bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../assets/fonts/segoe-ui/segoe-ui-bold-italic.woff",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-segoe-ui",
});

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = (await auth()) as Session;

  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <html lang="en" className={`${segoe_ui.className} overflow-hidden`}>
          <Head>
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
          </Head>


          <Script strategy="lazyOnload" id="clarity-script">
            {`
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "ku1hcvfs7d");
              `}
          </Script>

          <body>
            <Providers>{children}</Providers>
          </body>
        </html>
      </StoreProvider>
    </SessionProvider>
  );
}
