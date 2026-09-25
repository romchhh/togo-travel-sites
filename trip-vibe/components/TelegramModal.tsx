"use client";

import { useState, useEffect } from "react";

export default function TelegramModal() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Auto open after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
      // Trigger visibility after rendering
      setTimeout(() => {
        setVisible(true);
      }, 200); // short delay to allow initial render
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed bottom-3 left-3 flex m-auto z-50">
      <div
        className={`bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative text-center transform transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Success Icon */}
        <div className="f-modal-icon-success mx-auto mb-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
          >
            <path
              d="M12.0002 19.6386C7.78126 19.6386 4.36133 16.2187 4.36133 11.9997C4.36133 7.78077 7.78126 4.36084 12.0002 4.36084C16.2192 4.36084 19.6391 7.78077 19.6391 11.9997C19.6391 16.2187 16.2192 19.6386 12.0002 19.6386ZM11.2386 15.0553L16.6393 9.65383L15.5592 8.57369L11.2386 12.895L9.07758 10.734L7.99744 11.8141L11.2386 15.0553Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Heading */}
        <h3 className="text-xl font-semibold mb-4">
          Підпишіться на наш Telegram
        </h3>

        {/* Paragraph */}
        <p className="text-gray-600 mb-6">
          Найгарячіші пропозиції, тури зі знижками, підтримка 24/7 і новини зі
          світу туризму — у нашому Telegram-каналі
        </p>

        {/* Button */}
        <a
          href="https://t.me/+SmTyR-SXMzk5NThi"
          target="_blank"
          className="f-button-primary inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Перейти в канал
        </a>

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0002 10.586L16.9502 5.63599L18.3642 7.04999L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.04999L7.05023 5.63599L12.0002 10.586Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
