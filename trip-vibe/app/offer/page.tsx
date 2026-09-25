import InfoLayout from "@/components/InfoLayout";
import { LegalOfferContent } from "@togotravel/shared/legal/LegalOfferContent";
import { legalSites } from "@togotravel/shared/legal/sites";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Публічна оферта — TripVibe",
  description:
    "Публічна оферта туристичного агентства TripVibe на надання туристичних послуг.",
};

export default function OfferPage() {
  return (
    <InfoLayout title="Публічна оферта">
      <LegalOfferContent site={legalSites.tripVibe} />
    </InfoLayout>
  );
}
