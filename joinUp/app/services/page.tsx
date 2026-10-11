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
    "Актуальні тури JoinUP Market: Єгипет, Туреччина, Греція, Таїланд, Мальдіви. Авіаквитки, круїзи, страхування, автобусні тури Європою.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Послуги та тури | JoinUP Market",
    description:
      "Гарячі тури та раннє бронювання з JoinUP Market. Підбір туру приблизно за 1 годину.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <InfoLayout title="Послуги та тури">
      <p>
        Актуальні пропозиції на популярні напрямки. Вартість залежить від дат
        вильоту, наявності місць і умов туроператора.
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
