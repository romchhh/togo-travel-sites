import InfoLayout from "@/components/InfoLayout";
import { LegalOfferContent } from "@togotravel/shared/legal/LegalOfferContent";
import { legalSites } from "@togotravel/shared/legal/sites";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Публічна оферта — JoinUP",
  description:
    "Публічна оферта туристичного агентства JoinUP на надання туристичних та посередницьких послуг.",
};

export default function OfertaPage() {
  return (
    <InfoLayout title="Публічна оферта">
      <LegalOfferContent site={legalSites.joinUp} />
    </InfoLayout>
  );
}
