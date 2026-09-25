import Link from "next/link";
import { siteFop } from "@/data/siteFop";

export default function FooterRequisites() {
  return (
    <div className="mt-8 border-t border-line pt-6">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
        Реквізити
      </p>
      <p className="mb-4 text-sm font-medium text-ink">{siteFop.name}</p>
      <dl className="grid max-w-2xl gap-x-6 gap-y-2.5 text-sm sm:grid-cols-[minmax(9rem,auto)_1fr]">
        <dt className="text-muted">{siteFop.taxIdLabel}</dt>
        <dd className="text-ink">{siteFop.taxId}</dd>

        <dt className="text-muted sm:col-start-1">Юридична адреса</dt>
        <dd className="text-ink">{siteFop.address}</dd>

        <dt className="text-muted">IBAN</dt>
        <dd className="break-all font-medium text-ink">{siteFop.iban}</dd>

        <dt className="text-muted">Банк</dt>
        <dd className="text-ink">{siteFop.bank}</dd>

        <dt className="text-muted">E-mail</dt>
        <dd>
          <a
            href={`mailto:${siteFop.email}`}
            className="text-ink hover:text-brand"
          >
            {siteFop.email}
          </a>
        </dd>

        <dt className="text-muted">Телефон</dt>
        <dd className="text-ink">
          {siteFop.phones.map((phone, i) => (
            <span key={phone}>
              {i > 0 && ", "}
              <a href={`tel:${phone}`} className="hover:text-brand">
                {phone}
              </a>
            </span>
          ))}
        </dd>
      </dl>
      <p className="mt-4 max-w-2xl text-xs leading-relaxed text-muted">
        Банківська гарантія № {siteFop.guarantee.number} ({siteFop.guarantee.issuer}
        ), {siteFop.guarantee.amountEur}, дійсна до {siteFop.guarantee.validUntil}.{" "}
        <Link href="/guarantee" className="text-ink hover:text-brand">
          Деталі
        </Link>
        {" · "}
        <a
          href={siteFop.guarantee.file}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink hover:text-brand"
        >
          PDF
        </a>
      </p>
    </div>
  );
}
