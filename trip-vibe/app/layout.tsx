import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JsonLd } from "@togotravel/shared/seo/JsonLd";
import {
  buildSiteMetadata,
  buildTravelAgencyJsonLd,
  buildWebSiteJsonLd,
  seoSites,
} from "@togotravel/shared/seo/sites";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

const evolventa = localFont({
  src: "../public/fonts/evolventa-bold.ttf",
  variable: "--font-evolventa",
  display: "swap",
});

const site = seoSites.tripVibe;

export const metadata: Metadata = buildSiteMetadata(site);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${dmSans.variable} ${evolventa.variable} scroll-pt-20`}
    >
      <head>
        <JsonLd data={buildTravelAgencyJsonLd(site)} />
        <JsonLd data={buildWebSiteJsonLd(site)} />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
