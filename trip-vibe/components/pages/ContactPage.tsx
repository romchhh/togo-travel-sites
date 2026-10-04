"use client";

import { submitLead } from "@/lib/submitLead";
import { useState } from "react";

const offices = [
  {
    title: "ТЦ Аладдін",
    metro: "м. Позняки",
    details:
      "Михайла Гришка 3А, вхід В, -1 поверх навпроти ескалатора, поруч з спорт клубом Apollo, Trip Vibe",
    phone: { label: "+38 (044) 499 97 22", href: "tel:+380444999722" },
  },
  {
    title: "ТЦ Дрім Таун",
    metro: "м. Мінська",
    details:
      "Оболонський проспект 1Б, Dream Yellow атріум Франція, вхід через Сільпо, 3 поверх, Anex Tour",
    phone: { label: "+38 (044) 495 77 79", href: "tel:+380444957779" },
  },
  {
    title: "ТЦ Блокбастер",
    metro: "м. Почайна",
    details:
      "пр-т Степана Бандери 36, 1 поверх, прикасова зона Сільпо, Trip Vibe",
    phone: { label: "+38 (044) 499 97 22", href: "tel:+380444999722" },
  },
  {
    title: "ТЦ New Way",
    metro: "м. Харківська",
    details: "-1 поверх, навпроти кас Сільпо, Trip Vibe",
    phone: { label: "+38 (044) 499 97 22", href: "tel:+380444999722" },
  },
] as const;

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+380");
  const [agreement, setAgreement] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const phonePrefix = "+380";

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    if (!input.startsWith(phonePrefix)) return;

    const digitsOnly = input.slice(phonePrefix.length).replace(/\D/g, "");
    const limitedDigits = digitsOnly.slice(0, 9);

    setPhone(phonePrefix + limitedDigits);
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const cursorPos = input.selectionStart || 0;

    if (
      cursorPos <= phonePrefix.length &&
      (e.key === "Backspace" || e.key === "Delete")
    ) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !agreement) {
      alert("Будь ласка, заповніть усі поля.");
      return;
    }
    setSubmitted(true);
    try {
      await submitLead({
        name,
        phone,
        title: "Лід з сайта TripVibe (контакти)",
      });
    } catch {
      alert("Не вдалося надіслати заявку. Спробуйте ще раз.");
      setSubmitted(false);
    }
  };

  return (
    <div id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Офлайн-точки
            </h2>
            <div className="space-y-6">
              {offices.map((office) => (
                <div
                  key={office.title}
                  className="text-gray-600 space-y-1 text-base leading-relaxed"
                >
                  <p className="font-semibold text-gray-800">{office.title}</p>
                  <p className="text-sm text-gray-500">{office.metro}</p>
                  <p>{office.details}</p>
                  <a
                    href={office.phone.href}
                    className="inline-block pt-1 text-red-500 hover:text-red-600 font-medium transition-colors"
                  >
                    {office.phone.label}
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Графік роботи: Пн–Нд з 10:00 до 21:00
            </p>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Залишити заявку
            </h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-green-800">
                Дякуємо! Ми звʼяжемося з вами найближчим часом.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Імʼя
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                    placeholder="Ваше імʼя"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    onKeyDown={handlePhoneKeyDown}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                    required
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreement"
                    checked={agreement}
                    onChange={(e) => setAgreement(e.target.checked)}
                    className="mt-1 h-4 w-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                    required
                  />
                  <label htmlFor="agreement" className="text-sm text-gray-600">
                    Я даю згоду на обробку персональних даних
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Надіслати
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
