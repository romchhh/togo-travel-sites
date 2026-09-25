import type { Metadata } from "next";
import Script from "next/script";
import "./styles.css";

export const metadata: Metadata = {
  title: "Турагенція JoinUP! ДжоінАп - це найвигідніший відпочинок для усіх.",
  description:
    "Пропонуємо широкий вибір турів більш, ніж в 40 країн світу, включаючи подорож по Україні за найвигіднішими цінами від туроператора Join UP (Джоін Ап)!",
  openGraph: {
    title: "Турагенція JoinUP! ДжоінАп - це найвигідніший відпочинок для усіх.",
    description:
      "Пропонуємо широкий вибір турів більш, ніж в 40 країн світу, включаючи подорож по Україні за найвигіднішими цінами від туроператора Join UP (Джоін Ап)!",
    images: [
      "https://cdn.prod.website-files.com/66d1b82ef3e440d19ca7acf5/66dabcc9ccb1d79bcd9ef3f5_shary2-main-700x424.jpg",
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Турагенція JoinUP! ДжоінАп - це найвигідніший відпочинок для усіх.",
    description:
      "Пропонуємо широкий вибір турів більш, ніж в 40 країн світу, включаючи подорож по Україні за найвигіднішими цінами від туроператора Join UP (Джоін Ап)!",
    images: [
      "https://cdn.prod.website-files.com/66d1b82ef3e440d19ca7acf5/66dabcc9ccb1d79bcd9ef3f5_shary2-main-700x424.jpg",
    ],
  },
};

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
      </head>
      <body className="body">{children}</body>
    </html>
  );
}
