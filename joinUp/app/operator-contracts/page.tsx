import InfoLayout from "@/components/InfoLayout";
import OperatorContractsList from "@/components/OperatorContractsList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Договори з туроператорами — JoinUP",
  description:
    "Договори та угоди з туроператорами та партнерами туристичного агентства JoinUP.",
};

export default function OperatorContractsPage() {
  return (
    <InfoLayout title="Договори з туроператорами">
      <p>
        Нижче наведено договори та документи щодо співпраці з туроператорами та
        партнерами. Файли відкриваються у новій вкладці; за потреби їх можна
        завантажити на пристрій.
      </p>
      <OperatorContractsList site="joinUp" />
    </InfoLayout>
  );
}
