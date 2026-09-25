import Link from "next/link";
import type { ReactNode } from "react";

export default function InfoLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface pt-16 md:pt-[4.5rem]">
      <div className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-5">
          <Link
            href="/"
            className="text-sm font-medium text-terracotta hover:underline"
          >
            ← На головну
          </Link>
          <nav className="flex flex-wrap justify-end gap-3 text-xs text-muted sm:text-sm">
            <Link href="/services" className="hover:text-terracotta">
              Послуги
            </Link>
            <Link href="/operator-contracts" className="hover:text-terracotta">
              Договори
            </Link>
            <Link href="/guarantee" className="hover:text-terracotta">
              Гарантія
            </Link>
            <Link href="/offer" className="hover:text-terracotta">
              Оферта
            </Link>
            <Link href="/terms" className="hover:text-terracotta">
              Умови
            </Link>
            <Link href="/refund" className="hover:text-terracotta">
              Повернення
            </Link>
          </nav>
        </div>
      </div>
      <article className="mx-auto max-w-3xl px-5 py-10 md:py-14">
        <h1 className="font-display text-3xl font-bold text-ink md:text-4xl">
          {title}
        </h1>
        <div className="prose-legal mt-8 space-y-4 text-sm leading-relaxed text-muted md:text-base">
          {children}
        </div>
      </article>
    </div>
  );
}
