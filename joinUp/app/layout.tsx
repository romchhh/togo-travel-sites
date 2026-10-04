import type { Metadata } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
});

const site = seoSites.joinUp;

export const metadata: Metadata = buildSiteMetadata(site);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${dmSans.variable} ${montserrat.variable}`}>
      <head>
        <JsonLd data={buildTravelAgencyJsonLd(site)} />
        <JsonLd data={buildWebSiteJsonLd(site)} />
      </head>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
