import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "TripVibe — сучасне туристичне агентство | Підбір турів 24/7",
  description:
    "TripVibe — туристичне агентство з повним супроводом від дверей вашого дому до пляжу готелю. Ваша подорож — наша турбота. Ми на звʼязку 24/7!",
};

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
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
