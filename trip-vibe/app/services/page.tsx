import InfoLayout from "@/components/InfoLayout";
import TourOffers from "@/components/TourOffers";
import {
  PRICE_INCLUDES_ITEMS,
  PRICE_INCLUDES_NOTE,
} from "@togotravel/shared/data/priceIncludes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Послуги та тури",
  description:
    "Тури TripVibe в Єгипет, Туреччину, Таїланд і на Мальдіви. Ціни в гривні. Авіаквитки, круїзи, медичне страхування, екскурсійні автобусні тури.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Послуги та тури | TripVibe",
    description:
      "Українське туристичне агентство TripVibe: підбір турів і повний супровід 24/7.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <InfoLayout title="Послуги та тури">
      <p>
        Актуальні пропозиції на популярні напрямки. Ціни в гривні; точну
        вартість підтверджує менеджер перед бронюванням.
      </p>

      <h2>Наші послуги</h2>
      <ul>
        <li>Підбір і бронювання турпакетів</li>
        <li>Продаж авіаквитків</li>
        <li>Круїзи</li>
        <li>Медичне страхування для подорожей</li>
        <li>Екскурсійні автобусні тури Європою</li>
        <li>Трансфер до аеропортів вильоту</li>
      </ul>

      <h2>Що включає вартість туру</h2>
      <p>{PRICE_INCLUDES_NOTE}</p>
      <ul>
        {PRICE_INCLUDES_ITEMS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <TourOffers showIncludesBanner={false} />
    </InfoLayout>
  );
}
