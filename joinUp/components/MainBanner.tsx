"use client";

import { useState } from "react";
import { sendToBitrix24 } from "@/utils/sendToBitrix";

export default function MainBanner() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "phone" && value.trim() && !value.startsWith("+380")) {
      if (/^\d/.test(value)) {
        newValue = "+380" + value.replace(/^\d+/, "");
      } else {
        newValue = value.replace(/^\+?38?0?/, "+380");
      }
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = { name: "", phone: "" };
    if (!formData.name.trim()) newErrors.name = "Введіть ім'я.";
    const phoneRegex = /^\+380\d{9}$/;
    if (!formData.phone.trim()) newErrors.phone = "Введіть телефон.";
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Некоректний номер.";

    setErrors(newErrors);
    if (newErrors.name || newErrors.phone) return;

    setIsSubmitting(true);
    try {
      const result = await sendToBitrix24({
        name: formData.name,
        phone: formData.phone,
      });
      if (result.success) {
        setFormData({ name: "", phone: "" });
        setSent(true);
      } else {
        alert("Помилка при відправці форми. Спробуйте ще раз.");
      }
    } catch {
      alert("Помилка при відправці форми. Спробуйте ще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{ backgroundImage: "url(/main_banner_bg.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/45 to-brand/25" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-end gap-10 px-5 pb-14 pt-28 md:flex-row md:items-end md:justify-between md:pb-20 md:pt-32">
        <div className="max-w-xl text-white">
          <span className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
            JoinUP!
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.08] md:text-6xl">
            Найкращі подорожі разом з JoinUP!
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/85 md:text-lg">
            Персональний підбір туру за 1 годину. Виліт з Молдови, Польщі,
            Румунії, Литви — і особистий менеджер на звʼязку.
          </p>
        </div>

        <div
          id="form"
          className="ui-card w-full max-w-md border border-white/30 bg-white/95 p-6 text-ink backdrop-blur-xl md:rounded-[1.75rem] md:p-8"
        >
          {sent ? (
            <div className="rounded-2xl bg-surface px-4 py-8 text-center">
              <p className="font-display text-2xl font-bold text-brand">
                Заявку отримано
              </p>
              <p className="mt-2 text-muted">
                Менеджер звʼяжеться з вами найближчим часом.
              </p>
            </div>
          ) : (
            <>
              <h2 className="font-display text-xl font-bold md:text-2xl">
                Підбір туру + трансфер
              </h2>
              <p className="mt-1 text-sm text-muted">за 10 хвилин</p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше імʼя"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full rounded-xl border border-line bg-white px-4 py-3.5 text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/15"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full rounded-xl border border-line bg-white px-4 py-3.5 text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/15"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="ui-btn flex w-full items-center justify-center gap-2 bg-brand py-3.5 text-base font-semibold text-white hover:bg-brand-dark disabled:opacity-50"
                >
                  {isSubmitting ? "Відправляємо..." : "Підібрати тур"}
                  {!isSubmitting && <span aria-hidden>→</span>}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
