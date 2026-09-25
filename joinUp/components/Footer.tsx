import Link from "next/link";
import PublicImage from "@/components/PublicImage";
import FooterRequisites from "@/components/FooterRequisites";
import { siteFop } from "@/data/siteFop";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-white py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <PublicImage
              src="/logo.jpg"
              alt="JoinUp"
              className="h-12 w-auto rounded-lg md:h-14"
            />
            <p className="mt-3 max-w-sm text-sm text-muted">
              Подорожуй разом з JoinUP!
            </p>
            <a
              href="tel:+380443933323"
              className="mt-3 inline-block text-sm font-medium text-ink hover:text-brand"
            >
              +38 (044) 393 33 23
            </a>
            <p className="mt-2 text-sm text-muted">
              <a
                href={`mailto:${siteFop.email}`}
                className="hover:text-brand"
              >
                {siteFop.email}
              </a>
            </p>
            <p className="mt-1 text-sm text-muted">
              {siteFop.phones.map((phone, i) => (
                <span key={phone}>
                  {i > 0 && " · "}
                  <a href={`tel:${phone}`} className="hover:text-brand">
                    {phone}
                  </a>
                </span>
              ))}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            <Link href="/services" className="hover:text-brand">
              Послуги
            </Link>
            <Link href="/oferta" className="hover:text-brand">
              Оферта
            </Link>
            <Link href="/terms" className="hover:text-brand">
              Умови послуг
            </Link>
            <Link href="/refund" className="hover:text-brand">
              Повернення
            </Link>
            <Link href="/operator-contracts" className="hover:text-brand">
              Договори з туроператорами
            </Link>
            <Link href="/guarantee" className="hover:text-brand">
              Банківська гарантія
            </Link>
            <a
              href={siteFop.guarantee.file}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand"
            >
              Гарантія (PDF)
            </a>
          </nav>
        </div>

        <FooterRequisites />

        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-4 text-xs text-muted">
          <p className="flex flex-wrap items-center justify-between gap-2 w-full">
            <span>© {new Date().getFullYear()} JoinUP</span>
            <span>Всі права захищені</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
