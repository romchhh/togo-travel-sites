import InfoLayout from "@/components/InfoLayout";
import OperatorContractsList from "@/components/OperatorContractsList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Договори з туроператорами — TripVibe",
  description:
    "Договори та угоди з туроператорами та партнерами TripVibe.",
};

export default function OperatorContractsPage() {
  return (
    <InfoLayout title="Договори з туроператорами">
      <p>
        Договори та документи щодо співпраці з туроператорами та партнерами.
        Файли відкриваються у новій вкладці.
      </p>
      <OperatorContractsList site="tripVibe" accentClass="group-hover:text-terracotta" />
    </InfoLayout>
  );
}
