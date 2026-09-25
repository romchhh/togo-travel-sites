"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logoImg from "@/public/logo.jpg";

const nav = [
  { href: "/#pronas", label: "Про нас" },
  { href: "/#services", label: "Послуги" },
  { href: "/#vidguky", label: "Відгуки" },
  { href: "/#contact", label: "Контакти" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const solid = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-line/70 bg-white/95 shadow-[0_8px_30px_-16px_rgba(0,0,0,0.2)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-20">
        <Link href="/" className="shrink-0" aria-label="JoinUP — головна">
          <Image
            src={logoImg}
            alt="Join UP"
            width={160}
            height={48}
            className={`h-10 w-auto rounded-lg transition md:h-12 ${
              solid ? "" : "ring-2 ring-white/70"
            }`}
            priority
          />
        </Link>

        <nav
          className={`hidden items-center gap-1 rounded-full p-1 text-sm font-medium md:flex ${
            solid
              ? "bg-surface text-ink"
              : "bg-white/10 text-white backdrop-blur-sm"
          }`}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 transition ${
                solid
                  ? "hover:bg-white hover:text-brand"
                  : "hover:bg-white/15 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="tel:+380443933323"
            className={`hidden rounded-full px-3 py-2 text-sm font-medium transition sm:block md:text-base ${
              solid
                ? "text-ink hover:bg-surface hover:text-brand"
                : "text-white/90 hover:bg-white/10"
            }`}
          >
            +38 (044) 393 33 23
          </a>
          <Link
            href="/#form"
            className="ui-btn hidden items-center gap-2 bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark sm:inline-flex md:px-5"
          >
            Консультація
            <span aria-hidden>→</span>
          </Link>
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden ${
              solid ? "bg-surface text-ink" : "bg-white/15 text-white"
            }`}
            aria-expanded={menuOpen}
            aria-label="Меню"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="text-xl leading-none">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className={`border-t md:hidden ${
            solid ? "border-line bg-white" : "border-white/10 bg-black/90 backdrop-blur-xl"
          }`}
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-4 py-3 text-base font-medium ${
                  solid ? "text-ink hover:bg-surface" : "text-white hover:bg-white/10"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+380443933323"
              className={`rounded-xl px-4 py-3 text-base font-medium ${
                solid ? "text-brand" : "text-white"
              }`}
            >
              +38 (044) 393 33 23
            </a>
            <Link
              href="/#form"
              className="ui-btn mt-2 bg-brand px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Консультація
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
