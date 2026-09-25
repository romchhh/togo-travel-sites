"use client";

import { submitLead } from "@/lib/submitLead";
import { useState } from "react";

type ContactDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function ContactDrawer({ open, onClose }: ContactDrawerProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+44");
  const [agreement, setAgreement] = useState(false);
  // const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const phonePrefix = "+44";

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    // If user tries to delete the prefix, revert
    if (!input.startsWith(phonePrefix)) return;

    // Remove any non-digit characters from the rest
    const digitsOnly = input.slice(phonePrefix.length).replace(/\D/g, "");

    // Limit to 9 digits
    const limitedDigits = digitsOnly.slice(0, 10);

    setPhone(phonePrefix + limitedDigits);
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const cursorPos = input.selectionStart || 0;

    // Prevent deleting the prefix
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
    setStatus("sending");
    try {
      await submitLead({
        name,
        phone,
        title: "Лід з сайта TripVibe (швидка заявка)",
      });
      setStatus("sent");
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Не вдалося підключитися до сервера.");
      setStatus("idle"); // allow retry
    }
  };

  return (
    <>
      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <section className="b24-form-wrapper max-w-lg mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="b24-form-header p-6 border-b text-center">
            <h2 className="b24-form-header-title text-2xl font-bold text-gray-800">
              Заповніть форму
            </h2>
            <p className="b24-form-header-description text-gray-600 mt-2">
              і ми зв’яжемося з вами за 2 хвилини!
            </p>
          </div>

          <div className="b24-form-content p-6">
            {status === "sending" && (
              <div className="flex justify-center items-center p-10">
                <p className="p-3">Надсилаємо...</p>
                <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="opacity-25"
                    fill="none"
                  />
                  <path
                    fill="currentColor"
                    className="opacity-75"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
            )}
            {status === "sent" && (
              <div className="text-center py-10">
                <div className="text-green-600 text-xl font-semibold">
                  ✅ Надіслано!
                </div>
                <p className="text-gray-600 mt-2">
                  Ми зв’яжемося з вами найближчим часом.
                </p>
              </div>
            )}
            {status === "idle" && (
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">
                    Ім’я <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    autoComplete="given-name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">
                    Телефон <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    onChange={handlePhoneChange}
                    onKeyDown={handlePhoneKeyDown}
                    value={phone}
                    inputMode="numeric"
                    pattern="\+447\d{9}" // Optional HTML pattern for 9 digits after +447
                    required
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="mb-4 flex items-start">
                  <input
                    type="checkbox"
                    checked={agreement}
                    onChange={() => setAgreement(!agreement)}
                    className="mt-1 mr-2"
                    required
                  />
                  <span className="text-sm text-gray-600">
                    Натискаючи кнопку &#34;Надіслати&#34;, я приймаю умови
                    користувацької угоди та даю згоду на обробку моїх даних.
                  </span>
                </div>

                <div className="bg-terracotta rounded-lg">
                  <button
                    type="submit"
                    className="w-full text-white py-2 rounded-lg font-semibold hover:bg-mudblue transition"
                  >
                    Надіслати
                  </button>
                </div>
              </form>
            )}
            {/* {!submitted ? (
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">
                    Ім’я <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    autoComplete="given-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">
                    Телефон <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="mb-4 flex items-start">
                  <input
                    type="checkbox"
                    checked={agreement}
                    onChange={() => setAgreement(!agreement)}
                    className="mt-1 mr-2"
                  />
                  <span className="text-sm text-gray-600">
                    Натискаючи кнопку &#34;Надіслати&#34;, я приймаю умови
                    користувацької угоди та даю згоду на обробку моїх даних.
                  </span>
                </div>

                <div className="bg-terracotta rounded-lg">
                  <button
                    type="submit"
                    className="w-full text-white py-2 rounded-lg font-semibold hover:bg-mudblue transition"
                  >
                    Надіслати
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="text-green-600 text-xl font-semibold">
                  ✅ Надіслано!
                </div>
                <p className="text-gray-600 mt-2">
                  Ми зв’яжемося з вами найближчим часом.
                </p>
              </div>
            )} */}
          </div>
        </section>
      </div>
    </>
  );
}
