import InfoLayout from "@/components/InfoLayout";
import TourOffers from "@/components/TourOffers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Послуги та тури — TripVibe",
  description:
    "Тури в Єгипет, Туреччину, Таїланд і на Мальдіви. Туристичне агентство TripVibe.",
};

export default function ServicesPage() {
  return (
    <InfoLayout title="Послуги та тури">
      <p>
        Актуальні пропозиції на популярні напрямки. Ціни в гривні; точну
        вартість підтверджує менеджер перед бронюванням.
      </p>

      <TourOffers />
    </InfoLayout>
  );
}
