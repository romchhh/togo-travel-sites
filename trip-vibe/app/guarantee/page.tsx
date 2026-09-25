import InfoLayout from "@/components/InfoLayout";
import { siteFop } from "@/data/siteFop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Банківська гарантія — TripVibe",
  description:
    "Банківська гарантія АТ «КБ «ГЛОБУС» для фінансового забезпечення туристичної діяльності.",
};

export default function GuaranteePage() {
  const g = siteFop.guarantee;

  return (
    <InfoLayout title="Банківська гарантія">
      <p>
        Для спрощення перевірки фінансового забезпечення туристичної діяльності
        нижче розміщено банківську гарантію Виконавця.
      </p>

      <div className="rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-soft)]">
        <p className="font-medium text-ink">{siteFop.name}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Номер гарантії: № {g.number}</li>
          <li>Банк-гарант: {g.issuer}</li>
          <li>
            Сума: {g.amountUah} ({g.amountEur})
          </li>
          <li>Дата видачі: {g.issuedAt}</li>
          <li>Дійсна до: {g.validUntil}</li>
          <li>Юридична адреса: {siteFop.address}</li>
        </ul>
        <a
          href={g.file}
          target="_blank"
          rel="noopener noreferrer"
          className="ui-btn mt-5 inline-flex bg-terracotta px-5 py-3 text-sm font-semibold text-white hover:bg-terracotta-dark"
        >
          Відкрити PDF гарантії
        </a>
      </div>

      <p className="text-sm">
        Пряме посилання для банку:{" "}
        <a className="break-all text-terracotta" href={g.file}>
          {g.file}
        </a>
      </p>
    </InfoLayout>
  );
}
