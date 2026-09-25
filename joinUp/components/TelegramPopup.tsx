"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import trip_vibe from "@/public/trip_vibe.svg";

export default function TelegramPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 12000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-[2px]"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed top-1/2 left-1/2 z-50 w-[min(92vw,22rem)] -translate-x-1/2 -translate-y-1/2 rounded-[1.75rem] border border-line bg-white p-6 shadow-[var(--shadow-lift)]">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-surface text-muted transition hover:text-ink"
          aria-label="Закрити"
        >
          ✕
        </button>
        <div className="text-center">
          <span className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            Telegram
          </span>
          <h3 className="mt-3 font-display text-xl font-bold text-ink">
            Гарячі тури щодня
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Знижки та актуальні пропозиції у нашій спільноті.
          </p>
          <Image
            src={trip_vibe}
            className="mx-auto mt-4 h-auto w-28"
            alt=""
            width={112}
            height={40}
          />
          <a
            href="https://t.me/tripvibeua"
            target="_blank"
            rel="noopener noreferrer"
            className="ui-btn mt-5 flex w-full items-center justify-center bg-brand py-3 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Приєднатися
          </a>
        </div>
      </div>
    </>
  );
}
