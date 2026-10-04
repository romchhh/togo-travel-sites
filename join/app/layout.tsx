import type { Metadata } from "next";
import Script from "next/script";
import { JsonLd } from "@togotravel/shared/seo/JsonLd";
import {
  buildSiteMetadata,
  buildTravelAgencyJsonLd,
  buildWebSiteJsonLd,
  seoSites,
} from "@togotravel/shared/seo/sites";
import "./styles.css";

const site = seoSites.join;

export const metadata: Metadata = buildSiteMetadata(site);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
        <Script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          strategy="beforeInteractive"
        />
        <Script id="webfont-load" strategy="beforeInteractive">
          {`WebFont.load({google:{families:["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic","DM Sans:regular,500,700"]}});`}
        </Script>
        <Script id="webflow-touch" strategy="beforeInteractive">
          {`!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`}
        </Script>
        <JsonLd data={buildTravelAgencyJsonLd(site)} />
        <JsonLd data={buildWebSiteJsonLd(site)} />
      </head>
      <body className="body">{children}</body>
    </html>
  );
}
