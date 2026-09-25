import InfoLayout from "@/components/InfoLayout";
import TourOffers from "@/components/TourOffers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Послуги та тури — JoinUP",
  description:
    "Тури в Єгипет, Туреччину, Таїланд і на Мальдіви. Туристичне агентство JoinUP.",
};

export default function ServicesPage() {
  return (
    <InfoLayout title="Послуги та тури">
      <p>
        Актуальні пропозиції на популярні напрямки. Вартість залежить від дат,
        готелю й наявності місць.
      </p>

      <TourOffers />
    </InfoLayout>
  );
}
