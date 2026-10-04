import type { Metadata } from "next";

export type SeoSiteKey = "join" | "joinUp" | "tripVibe";

type SeoSite = {
  key: SeoSiteKey;
  brand: string;
  siteUrl: string;
  phone: string;
  email: string;
  locale: string;
  title: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
  ogImage: string;
  routes: { path: string; changeFrequency: "weekly" | "monthly"; priority: number }[];
};

const commonKeywords = [
  "тури з Києва",
  "тури Єгипет",
  "тури Туреччина",
  "тури Греція",
  "гарячі тури",
  "раннє бронювання",
  "туроператор",
  "турагенція Київ",
  "підбір туру",
  "авіаквитки",
  "круїзи",
  "медичне страхування",
];

export const seoSites: Record<SeoSiteKey, SeoSite> = {
  join: {
    key: "join",
    brand: "JoinUP",
    siteUrl: "https://join-up.com.ua",
    phone: "+380443933323",
    email: "togotravel.inform@gmail.com",
    locale: "uk_UA",
    title: "JoinUP Київ — тури, гарячі пропозиції та підбір відпочинку",
    titleTemplate: "%s | JoinUP Київ",
    description:
      "Туристичне агентство JoinUP у Києві: тури в Єгипет, Туреччину, Грецію, Болгарію та 40+ країн. Персональний підбір туру, трансфери, авіаквитки, страхування. Офіси по Києву, підтримка 24/7.",
    keywords: [
      ...commonKeywords,
      "JoinUP",
      "Джоін Ап",
      "join-up.com.ua",
      "Join UP Київ",
      "трансфер до аеропорту",
      "автобусні тури",
    ],
    ogImage:
      "https://cdn.prod.website-files.com/66d1b82ef3e440d19ca7acf5/66dabcc9ccb1d79bcd9ef3f5_shary2-main-700x424.jpg",
    routes: [
      { path: "/", changeFrequency: "weekly", priority: 1 },
      { path: "/services", changeFrequency: "weekly", priority: 0.9 },
      { path: "/oferta", changeFrequency: "monthly", priority: 0.4 },
      { path: "/terms", changeFrequency: "monthly", priority: 0.4 },
      { path: "/refund", changeFrequency: "monthly", priority: 0.4 },
      { path: "/operator-contracts", changeFrequency: "monthly", priority: 0.5 },
      { path: "/guarantee", changeFrequency: "monthly", priority: 0.5 },
    ],
  },
  joinUp: {
    key: "joinUp",
    brand: "JoinUP",
    siteUrl: "https://joinup.market",
    phone: "+380443933323",
    email: "togotravel.inform@gmail.com",
    locale: "uk_UA",
    title: "JoinUP Market — тури з Києва, гарячі тури та раннє бронювання",
    titleTemplate: "%s | JoinUP Market",
    description:
      "JoinUP Market: персональний підбір туру приблизно за 1 годину. Єгипет, Туреччина, Греція, ОАЕ, Таїланд та інші напрямки. Гарячі тури, раннє бронювання, офіси у Києві.",
    keywords: [
      ...commonKeywords,
      "JoinUP Market",
      "joinup.market",
      "гарячий тур Київ",
      "раннє бронювання турів",
    ],
    ogImage: "/main_banner_bg.jpg",
    routes: [
      { path: "/", changeFrequency: "weekly", priority: 1 },
      { path: "/services", changeFrequency: "weekly", priority: 0.9 },
      { path: "/oferta", changeFrequency: "monthly", priority: 0.4 },
      { path: "/terms", changeFrequency: "monthly", priority: 0.4 },
      { path: "/refund", changeFrequency: "monthly", priority: 0.4 },
      { path: "/operator-contracts", changeFrequency: "monthly", priority: 0.5 },
      { path: "/guarantee", changeFrequency: "monthly", priority: 0.5 },
    ],
  },
  tripVibe: {
    key: "tripVibe",
    brand: "TripVibe",
    siteUrl: "https://tripvibe.com.ua",
    phone: "+380444999722",
    email: "togotravel.inform@gmail.com",
    locale: "uk_UA",
    title: "TripVibe — українське туристичне агентство | Тури з Києва",
    titleTemplate: "%s | TripVibe",
    description:
      "TripVibe — українське турагентство: підбір турів у Єгипет, Туреччину, Таїланд, на Мальдіви. Повний супровід, офіси в Києві, ціни в гривні, підтримка 24/7.",
    keywords: [
      ...commonKeywords,
      "TripVibe",
      "tripvibe.com.ua",
      "українське туристичне агентство",
      "тури в гривні",
    ],
    ogImage: "/default0.jpg",
    routes: [
      { path: "/", changeFrequency: "weekly", priority: 1 },
      { path: "/services", changeFrequency: "weekly", priority: 0.9 },
      { path: "/offer", changeFrequency: "monthly", priority: 0.4 },
      { path: "/terms", changeFrequency: "monthly", priority: 0.4 },
      { path: "/refund", changeFrequency: "monthly", priority: 0.4 },
      { path: "/operator-contracts", changeFrequency: "monthly", priority: 0.5 },
      { path: "/guarantee", changeFrequency: "monthly", priority: 0.5 },
    ],
  },
};

function absoluteUrl(siteUrl: string, path: string) {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildSiteMetadata(site: SeoSite): Metadata {
  const ogImage = absoluteUrl(site.siteUrl, site.ogImage);

  return {
    metadataBase: new URL(site.siteUrl),
    title: {
      default: site.title,
      template: site.titleTemplate,
    },
    description: site.description,
    keywords: site.keywords,
    applicationName: site.brand,
    authors: [{ name: site.brand, url: site.siteUrl }],
    creator: site.brand,
    publisher: site.brand,
    category: "travel",
    alternates: {
      canonical: "/",
      languages: {
        "uk-UA": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: site.locale,
      url: site.siteUrl,
      siteName: site.brand,
      title: site.title,
      description: site.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: site.brand,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: site.title,
      description: site.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
  };
}

export function buildTravelAgencyJsonLd(site: SeoSite) {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: site.brand,
    url: site.siteUrl,
    description: site.description,
    image: absoluteUrl(site.siteUrl, site.ogImage),
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Київ",
      addressCountry: "UA",
    },
    areaServed: {
      "@type": "Country",
      name: "Ukraine",
    },
    availableLanguage: ["uk", "ru"],
    priceRange: "$$",
    sameAs: [] as string[],
  };
}

export function buildWebSiteJsonLd(site: SeoSite) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.brand,
    url: site.siteUrl,
    inLanguage: "uk-UA",
    publisher: {
      "@type": "Organization",
      name: site.brand,
      url: site.siteUrl,
    },
  };
}
