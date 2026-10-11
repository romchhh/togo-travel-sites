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
    "Тури в Єгипет, Туреччину, Грецію, Болгарію, Таїланд і на Мальдіви від JoinUP Київ. Авіаквитки, круїзи, медичне страхування, автобусні тури. Актуальні ціни в гривні.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Послуги та тури | JoinUP Київ",
    description:
      "Гарячі тури та раннє бронювання: Єгипет, Туреччина, Греція та інші напрямки. Підбір туру з JoinUP.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <InfoLayout title="Послуги та тури">
      <p>
        Актуальні пропозиції на популярні напрямки. Вартість залежить від дат,
        готелю й наявності місць.
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
