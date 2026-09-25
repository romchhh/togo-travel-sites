import InfoLayout from "@/components/InfoLayout";
import { LegalTermsContent } from "@togotravel/shared/legal/LegalTermsContent";
import { legalSites } from "@togotravel/shared/legal/sites";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Умови надання послуг — TripVibe",
};

export default function TermsPage() {
  return (
    <InfoLayout title="Умови надання послуг">
      <LegalTermsContent site={legalSites.tripVibe} />
    </InfoLayout>
  );
}
