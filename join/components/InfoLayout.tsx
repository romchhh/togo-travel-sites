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
    <main className="info-page">
      <div className="info-topbar">
        <div className="info-topbar__inner">
          <Link href="/" className="info-back">
            ← На головну
          </Link>
          <nav className="info-nav">
            <Link href="/services">Послуги</Link>
            <Link href="/operator-contracts">Договори</Link>
            <Link href="/guarantee">Гарантія</Link>
            <Link href="/oferta">Оферта</Link>
            <Link href="/terms">Умови</Link>
            <Link href="/refund">Повернення</Link>
          </nav>
        </div>
      </div>
      <article className="info-article">
        <h1>{title}</h1>
        <div className="info-content">{children}</div>
      </article>
    </main>
  );
}
