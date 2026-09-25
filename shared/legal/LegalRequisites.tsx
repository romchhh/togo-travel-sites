import type { LegalSite } from "./types";

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
              <a href={`tel:${phone}`}>{phone}</a>
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
