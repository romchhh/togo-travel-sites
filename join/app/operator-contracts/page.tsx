import InfoLayout from "@/components/InfoLayout";
import OperatorContractsList from "@/components/OperatorContractsList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Договори з туроператорами — JoinUP",
  description:
    "Договори та угоди з туроператорами туристичного агентства JoinUP.",
};

export default function OperatorContractsPage() {
  return (
    <InfoLayout title="Договори з туроператорами">
      <p>
        Договори та документи щодо співпраці з туроператорами та партнерами.
        Натисніть на назву, щоб відкрити або завантажити файл.
      </p>
      <OperatorContractsList />
    </InfoLayout>
  );
}
