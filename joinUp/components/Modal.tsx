"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { sendToBitrix24 } from "@/utils/sendToBitrix";

export default function Modal({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: { name: string; phone: string }) => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    const newErrors = {
      name: "",
      phone: "",
    };

    if (formData.name.trim() === "") {
      newErrors.name = "Поле Ваше ім'я є обов'язковим для заповнення.";
    }

    const phoneRegex = /^\+380\d{9}$/;
    if (formData.phone.trim() === "") {
      newErrors.phone = "Поле Ваш телефон є обов'язковим для заповнення.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Ви ввели некоректний номер.";
    }

    setErrors(newErrors);

    if (newErrors.name || newErrors.phone) {
      return;
    }

    setIsSubmitting(true);

    try {
      const bitrixResult = await sendToBitrix24({
        name: formData.name,
        phone: formData.phone,
        wishes: "Замовлення дзвінка через модальне вікно",
      });

      if (bitrixResult.success) {
        console.log("Форма успішно відправлена до Bitrix24");
        if (onSubmit) {
          onSubmit(formData);
        }
        setFormData({ name: "", phone: "" });
        setErrors({ name: "", phone: "" });
        onClose();
      } else {
        console.error("Помилка при відправці до Bitrix24:", bitrixResult.error);
        alert("Сталася помилка при відправці форми. Спробуйте ще раз.");
      }
    } catch (error) {
      console.error("Загальна помилка:", error);
      alert("Сталася помилка при відправці форми. Спробуйте ще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: "name" | "phone", value: string) => {
    let newValue = value;

    if (field === "phone" && value.trim() && !value.startsWith("+380")) {
      if (/^\d/.test(value)) {
        newValue = "+380" + value.replace(/^\d+/, "");
      } else {
        newValue = value.replace(/^\+?38?0?/, "+380");
      }
    }

    setFormData((prev) => ({
      ...prev,
      [field]: newValue,
    }));

    if (field === "name" || field === "phone") {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/45 p-4 backdrop-blur-[2px]"
      onClick={handleOverlayClick}
    >
      <div className="relative mx-4 w-full max-w-md rounded-[1.75rem] bg-ink p-8 shadow-[var(--shadow-lift)]">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          disabled={isSubmitting}
        >
          <X size={20} />
        </button>
        <div className="mb-6 text-center">
          <h2 className="font-display text-2xl font-medium leading-tight text-white">
            Заповніть форму, щоб замовити дзвінок
          </h2>
        </div>
        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Ваше ім'я*"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full rounded-xl border-0 bg-white px-4 py-3.5 text-gray-700 placeholder-gray-500 outline-none focus:ring-4 focus:ring-brand/25"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="tel"
              placeholder="Ваш телефон*"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="w-full rounded-xl border-0 bg-white px-4 py-3.5 text-gray-700 placeholder-gray-500 outline-none focus:ring-4 focus:ring-brand/25"
              disabled={isSubmitting}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
            )}
          </div>
          <button
            onClick={handleSubmit}
            className="ui-btn mt-2 w-full bg-brand px-6 py-3.5 font-semibold text-white hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Відправляється..." : "Надіслати"}
          </button>
        </div>
      </div>
    </div>
  );
}
