"use client";

import { submitLead } from "@/lib/submitLead";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+44");
  const [agreement, setAgreement] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
          {/* Left section - Offline Store Info */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Офлайн-точка
            </h2>
            <div className="text-gray-600 space-y-3 text-lg leading-relaxed">
              <div>
                <p className="font-medium">12 SAXBY COURT</p>
                <p className="font-medium">SAXBY CLOSE</p>
                <p className="font-medium">BARNHAM</p>
              </div>
              <p className="text-gray-500">PO22 0GW</p>

              <div className="mt-8 space-y-2">
                <div>
                  <span className="font-semibold text-gray-700">Телефон:</span>{" "}
                  <a
                    href="tel:+447520665098"
                    className="text-red-500 hover:text-red-600 font-medium transition-colors"
                  >
                    +44 7520 665098
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">
                    Графік роботи:
                  </span>{" "}
                  <span className="text-gray-600">
                    Пн–Нд з 10:00 до 21:00
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right section - Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-gray-50 to-white px-8 py-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Форма зворотного зв’язку
                </h2>
                <p className="text-gray-600 text-sm">
                  і ми зв’яжемося з вами за 2 хвилини!
                </p>
              </div>

              {/* Form Content */}
              <div className="px-8 py-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-green-600 font-medium text-lg">
                      Успішно надіслано!
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Ми зв’яжемося з вами найближчим часом.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Ім’я"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-gray-50 border-0 rounded-lg px-4 py-4 text-gray-800 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
                      />
                      {/* {errors.name && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.name}
                        </p>
                      )} */}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Телефон"
                        onChange={handlePhoneChange}
                        onKeyDown={handlePhoneKeyDown}
                        value={phone}
                        inputMode="numeric"
                        pattern="\+447\d{9}"
                        required
                        className="w-full bg-gray-50 border-0 rounded-lg px-4 py-4 text-gray-800 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
                      />
                      {/* {errors.phone && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.phone}
                        </p>
                      )} */}
                    </div>

                    {/* Agreement Checkbox */}
                    <div className="flex items-start space-x-3 py-2">
                      <input
                        type="checkbox"
                        name="agreement"
                        required
                        checked={agreement}
                        onChange={() => setAgreement(!agreement)}
                        className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <label className="text-gray-600 text-sm leading-relaxed">
                        Натискаючи кнопку &#34;Надіслати&#34;, я приймаю
                        умови користувацької угоди та даю згоду на
                        обробку моїх даних.
                      </label>
                    </div>
                    {/* {errors.agreement && (
                      <p className="text-red-500 text-sm">{errors.agreement}</p>
                    )} */}

                    {/* Submit Button */}
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={submitted}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                    >
                      {submitted ? (
                        <div className="flex items-center justify-center space-x-2">
                          {/* <svg
                            className="animate-spin w-5 h-5"
                            viewBox="0 0 24 24"
                          >
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
                          </svg> */}
                          <span>Надіслано</span>
                        </div>
                      ) : (
                        "Надіслати"
                      )}
                    </button>

                    {/* Terms Link */}
                    <div className="text-center pt-4">
                      <button
                        type="button"
                        className="text-gray-400 text-sm hover:text-gray-600 transition-colors border-b border-dotted border-gray-300 hover:border-gray-600"
                      >
                        Повідомити про порушення
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
