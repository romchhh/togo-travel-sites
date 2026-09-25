"use client";

import Link from "next/link";
import PublicImage from "@/components/PublicImage";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Головна" },
  { href: "/#services", label: "Послуги" },
  { href: "/#about", label: "Про нас" },
  { href: "/#contacts", label: "Контакти" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const solid = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-white/10 bg-header/95 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.45)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-[4.5rem]">
        <Link href="/" className="shrink-0" aria-label="TripVibe — головна">
          <PublicImage
            src="/logo.png"
            alt="TripVibe"
            width={140}
            height={28}
            className="h-7 w-auto rounded-md brightness-0 invert transition md:h-8"
          />
        </Link>

        <div
          className={`hidden items-center gap-1 rounded-full p-1 lg:flex ${
            scrolled ? "bg-white/10" : "bg-white/10 backdrop-blur-sm"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/15 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:+447520665098"
            className="hidden rounded-full px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 sm:block"
          >
            +44 7520 665098
          </a>
          <Link
            href="/#form"
            className={`ui-btn hidden items-center px-5 py-2.5 text-sm font-semibold transition md:inline-flex ${
              scrolled
                ? "bg-white text-header hover:bg-white/90"
                : "bg-white/95 text-header hover:bg-white"
            }`}
          >
            Отримати пропозицію
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-xl leading-none text-white lg:hidden"
            aria-label="Відкрити меню"
          >
            ☰
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-header transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/15 px-5 py-4">
          <PublicImage
            src="/logo.png"
            alt="TripVibe"
            width={120}
            height={24}
            className="brightness-0 invert"
          />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-xl text-white"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Закрити меню"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col gap-1 px-5 py-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-2xl border-b border-white/10 py-4 text-lg font-medium text-white last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+447520665098"
            className="mt-6 inline-flex w-fit rounded-full bg-white px-5 py-3 text-base font-medium text-header"
          >
            +44 7520 665098
          </a>
        </div>
      </div>
    </header>
  );
}
