import InfoLayout from "@/components/InfoLayout";
import TourOffers from "@/components/TourOffers";
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
      </ul>

      <p>
        Вартість туру орієнтовно включає авіапереліт, проживання, харчування за
        програмою готелю та трансфери аеропорт–готель–аеропорт. Точний склад
        послуг підтверджує менеджер при бронюванні.
      </p>

      <TourOffers />
    </InfoLayout>
  );
}
