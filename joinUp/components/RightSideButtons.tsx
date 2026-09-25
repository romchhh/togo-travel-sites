"use client";

import { useEffect, useState } from "react";
import { CircleChevronUp, Smartphone } from "lucide-react";
import Modal from "./Modal";

export default function RightSideButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 320);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed right-4 bottom-6 z-[80] flex flex-col gap-2 transition-all duration-300 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Зателефонувати / заявка"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:border-brand hover:text-brand"
          onClick={() => setIsModalOpen(true)}
        >
          <Smartphone className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Нагору"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:border-brand hover:text-brand"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <CircleChevronUp className="h-5 w-5" />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
