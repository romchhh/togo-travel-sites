"use client";

import Link from "next/link";
import PublicImage from "@/components/PublicImage";
import FooterRequisites from "@/components/FooterRequisites";
import { siteFop } from "@/data/siteFop";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-10 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="inline-block">
              <PublicImage
                src="/logo.png"
                alt="TripVibe"
                width={140}
                height={36}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-3 max-w-sm text-sm text-white/65">
              Ваша подорож — наша турбота. Ми на звʼязку 24/7.
            </p>
            <a
              href="tel:+447520665098"
              className="mt-3 inline-block text-sm font-medium text-white hover:text-terracotta"
            >
              +44 7520 665098
            </a>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/70">
            <Link href="/services" className="hover:text-white">
              Послуги
            </Link>
            <Link href="/offer" className="hover:text-white">
              Оферта
            </Link>
            <Link href="/terms" className="hover:text-white">
              Умови послуг
            </Link>
            <Link href="/refund" className="hover:text-white">
              Повернення
            </Link>
            <Link href="/operator-contracts" className="hover:text-white">
              Договори з туроператорами
            </Link>
            <Link href="/guarantee" className="hover:text-white">
              Банківська гарантія
            </Link>
            <a
              href={siteFop.guarantee.file}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Гарантія (PDF)
            </a>
          </nav>
        </div>

        <FooterRequisites />

        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-4 text-xs text-white/45">
          <p className="flex w-full flex-wrap items-center justify-between gap-2">
            <span>© {new Date().getFullYear()} TripVibe</span>
            <span className="flex items-center gap-2 opacity-80">
              <PublicImage
                src="/payments/Visa_Inc._logo.svg"
                alt="Visa"
                width={32}
                height={12}
                className="rounded-sm bg-white px-1 py-0.5"
              />
              <PublicImage
                src="/payments/MasterCard_Logo.svg.png"
                alt="Mastercard"
                width={32}
                height={20}
              />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
