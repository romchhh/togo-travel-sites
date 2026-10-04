import type { LegalSite } from "./types";

function formatCorpPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("38044") && digits.length === 12) {
    return `+38 (044) ${digits.slice(5, 8)} ${digits.slice(8, 10)} ${digits.slice(10)}`;
  }
  return phone;
}

export function LegalRequisites({ site }: { site: LegalSite }) {
  const { fop } = site;
  return (
    <>
      <h2>Реквізити та контакти Виконавця</h2>
      <ul>
        <li>{fop.name}</li>
        <li>
          {fop.taxIdLabel}: {fop.taxId}
        </li>
        <li>Юридична адреса: {fop.address}</li>
        <li>IBAN: {fop.iban}</li>
        <li>
          Банк: {fop.bank}
          {fop.bankDetails ? ` (${fop.bankDetails})` : ""}
        </li>
        {fop.taxSystem && <li>{fop.taxSystem}</li>}
        <li>
          Телефон:{" "}
          {fop.phones.map((phone, i) => (
            <span key={phone}>
              {i > 0 && ", "}
              <a href={`tel:${phone}`}>{formatCorpPhone(phone)}</a>
            </span>
          ))}
        </li>
        <li>
          E-mail: <a href={`mailto:${fop.email}`}>{fop.email}</a>
        </li>
        <li>
          Сайт: {site.website}
        </li>
      </ul>
    </>
  );
}
