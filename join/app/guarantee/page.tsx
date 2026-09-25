import InfoLayout from "@/components/InfoLayout";
import { siteFop } from "@/data/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Банківська гарантія — JoinUP",
};

export default function GuaranteePage() {
  const g = siteFop.guarantee;

  return (
    <InfoLayout title="Банківська гарантія">
      <p>
        Для спрощення перевірки фінансового забезпечення туристичної діяльності
        нижче розміщено банківську гарантію Виконавця.
      </p>
      <div className="service-card">
        <div className="service-card__title">{siteFop.name}</div>
        <ul>
          <li>Номер гарантії: № {g.number}</li>
          <li>Банк-гарант: {g.issuer}</li>
          <li>
            Сума: {g.amountUah} ({g.amountEur})
          </li>
          <li>Дата видачі: {g.issuedAt}</li>
          <li>Дійсна до: {g.validUntil}</li>
        </ul>
        <p>
          <a href={g.file} target="_blank" rel="noopener noreferrer">
            Відкрити PDF гарантії →
          </a>
        </p>
      </div>
      <p>
        Пряме посилання для банку: <a href={g.file}>{g.file}</a>
      </p>
    </InfoLayout>
  );
}
