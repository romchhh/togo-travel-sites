import Link from "next/link";
import { siteFop } from "@/data/siteFop";

export default function FooterRequisites() {
  return (
    <div className="mt-8 border-t border-white/10 pt-6">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/45">
        Реквізити
      </p>
      <p className="mb-4 text-sm font-medium text-white">{siteFop.name}</p>
      <dl className="grid max-w-2xl gap-x-6 gap-y-2.5 text-sm sm:grid-cols-[minmax(9rem,auto)_1fr]">
        <dt className="text-white/50">{siteFop.taxIdLabel}</dt>
        <dd className="text-white/90">{siteFop.taxId}</dd>

        <dt className="text-white/50">Юридична адреса</dt>
        <dd className="text-white/90">{siteFop.address}</dd>

        <dt className="text-white/50">IBAN</dt>
        <dd className="break-all font-medium text-white">{siteFop.iban}</dd>

        <dt className="text-white/50">Банк</dt>
        <dd className="text-white/90">{siteFop.bank}</dd>

        <dt className="text-white/50">Тип рахунку</dt>
        <dd className="text-white/90">{siteFop.accountType}</dd>

        <dt className="text-white/50">E-mail</dt>
        <dd>
          <a
            href={`mailto:${siteFop.email}`}
            className="text-white/90 hover:text-white"
          >
            {siteFop.email}
          </a>
        </dd>

        <dt className="text-white/50">Телефон</dt>
        <dd className="text-white/90">
          {siteFop.phones.map((phone, i) => (
            <span key={phone}>
              {i > 0 && ", "}
              <a href={`tel:${phone}`} className="hover:text-white">
                {phone}
              </a>
            </span>
          ))}
        </dd>
      </dl>
      <p className="mt-4 max-w-2xl text-xs leading-relaxed text-white/45">
        Банківська гарантія № {siteFop.guarantee.number} ({siteFop.guarantee.issuer}
        ), {siteFop.guarantee.amountEur}, дійсна до {siteFop.guarantee.validUntil}.{" "}
        <Link href="/guarantee" className="text-white/80 hover:text-white">
          Деталі
        </Link>
        {" · "}
        <a
          href={siteFop.guarantee.file}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white"
        >
          PDF
        </a>
      </p>
    </div>
  );
}
