import InfoLayout from "@/components/InfoLayout";
import { LegalRefundContent } from "@togotravel/shared/legal/LegalRefundContent";
import { legalSites } from "@togotravel/shared/legal/sites";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Правила повернення — TripVibe",
};

export default function RefundPage() {
  return (
    <InfoLayout title="Правила та умови повернення">
      <LegalRefundContent site={legalSites.tripVibe} />
    </InfoLayout>
  );
}
