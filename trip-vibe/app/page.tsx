"use client";

import ContactDrawer from "@/components/ContactDrawer";
import HeroCarousel from "@/components/HeroCarousel";
import HomeTourOffersSection from "@/components/HomeTourOffersSection";
import AboutPage from "@/components/pages/AboutPage";
import ContactPage from "@/components/pages/ContactPage";
// import TelegramModal from "@/components/TelegramModal";
import Image from "next/image";
import { submitLead } from "@/lib/submitLead";
import { useState } from "react";

// TODO: replace all img with next's Image
export default function Home() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

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

    // if (phone.startsWith("07")) {
    //   phone = "+44" + phone.slice(1);
    // }

    // const isValidUKNumber = (input: string) => {
    //   const ukPhoneRegex = /^\+447\d{9}$/; // E.g. +447123456789
    //   return ukPhoneRegex.test(input);
    // };

    // if (!isValidUKNumber(phone)) {
    //   alert(
    //     "It seems like the phone number might not be quite right. Please check it and try again.."
    //   );
    //   return;
    // }
    setSubmitted(true);
    try {
      await submitLead({
        name,
        phone,
        title: "Лід з сайта TripVibe",
      });
    } catch {
      alert("Не вдалося надіслати заявку. Спробуйте ще раз.");
      setSubmitted(false);
    }
  };

  const testimonials = [
    {
      text: `3 лютого 2024 року ми відпочивали в Шармі в готелі Grand Oasis Resort. Готель і харчування хороші, локація чудова, кімнати, звісно, потребують ремонту) але, як кажуть, відпочивати треба з гарним настроєм))).`,
      author: "Olivia and Amelia Taylor",
      avatar:
        "https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65d76f8d9d346d4e460e33e7_photo_2024-02-22_17-35-15.jpg",
      rating: 5,
    },
    {
      text: `Вітаємо! Усе було чудово, ми обрали хороший готель — він виправдав очікування, а в дечому навіть перевершив їх. Готель: Domina Coral Wow Aquamrine 5*, летіли з Trip Vibe, окрема подяка менеджеру Оксані Михайловій, яка була на зв’язку!) Вже плануємо наступну подорож!)`,
      author: "Isla Davies",
      avatar:
        "https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65d26b889cb7c96fa58a7bef_Avatar%2005.png",
      rating: 5,
    },
    {
      text: `Дякуємо агентству tripvibe та менеджеру Дарії. Мені дуже сподобалася ваша робота загалом. Хочу подякувати за все, що ви зробили для нас під час відпочинку. Ви повністю виконали всі наші побажання. Готель, мабуть, один із найкращих серед тризіркових — мені все сподобалося, дякую.`,
      author: "Oliver Jones",
      avatar:
        "https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65e09e9e1a1c7036c3b81456_images.jpg",
      rating: 5,
    },
  ];

  const features = [
    {
      img: "https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65afd5f52cb2e02b00c0ba68_verified.svg",
      alt: "Іконка гарантії",
      title: "Професіоналізм і досвід",
      text: "Наша команда має понад 10 років досвіду в туризмі. Ми експерти, які знають, як зробити вашу подорож найкращою.",
    },
    {
      img: "https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65afd5f52cb2e02b00c0ba69_cart.svg",
      alt: "Іконка кошика",
      title: "Цифровізація та зручність",
      text: "Ми використовуємо сучасні технології, щоб забезпечити максимальну зручність бронювання та відстеження подорожей. TripVibe — це не просто поїздка, а ефективний і зручний сервіс на кожному етапі вашого відпочинку.",
    },
    {
      img: "https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65afd5f52cb2e02b00c0ba6a_transport.svg",
      alt: "Іконка доставки",
      title: "Повна підтримка",
      text: "TripVibe завжди на зв’язку 24/7. Наша команда готова надати повну підтримку та вирішити всі ваші питання будь-якої пори доби.",
    },
    {
      img: "https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65afd5f52cb2e02b00c0ba6b_chat-alt.svg",
      alt: "Іконка сервісу",
      title: "Індивідуальний підхід",
      text: "Ми розуміємо, що кожен мандрівник унікальний. TripVibe пропонує гнучкі підходи та персоналізовані маршрути з урахуванням ваших потреб і бажань.",
    },
  ];

  return (
    <div>
      <section
        className="relative min-h-screen overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65e44eae3ac5b714ea49512b_photo_2024-03-03_12-18-49.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/40 to-terracotta/30" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-end gap-10 px-5 pb-14 pt-28 md:flex-row md:items-end md:justify-between md:pb-20 md:pt-32">
          <div className="max-w-xl text-white">
            <span className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
              TripVibe
            </span>
            <h1 className="font-display text-4xl font-bold leading-[1.08] md:text-6xl">
              Сучасне британське туристичне агентство
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/85 md:text-lg">
              Ваша подорож — наша турбота: від порога вашого дому до пляжу готелю.
              Ми на зв&apos;язку 24/7.
            </p>
          </div>

          <div
            id="form"
            className="ui-card w-full max-w-md border border-white/30 bg-white/95 p-6 text-ink backdrop-blur-xl md:p-8"
          >
            {submitted ? (
              <div className="rounded-2xl bg-surface px-4 py-8 text-center">
                <p className="font-display text-2xl font-bold text-terracotta">
                  Заявку отримано
                </p>
                <p className="mt-2 text-sm text-muted">
                  Ми зв’яжемося з вами найближчим часом.
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-display text-xl font-bold md:text-2xl">
                  Отримайте 5 ідей для подорожі
                </h2>
                <p className="mt-1 text-sm text-muted">приблизно за 1 годину</p>

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="mt-6 space-y-3"
                >
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Ваше ім’я"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-line bg-white px-4 py-3.5 outline-none transition placeholder:text-muted/70 focus:border-terracotta focus:ring-4 focus:ring-terracotta/15"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Телефон"
                      value={phone}
                      onChange={handlePhoneChange}
                      onKeyDown={handlePhoneKeyDown}
                      className="w-full rounded-xl border border-line bg-white px-4 py-3.5 outline-none transition placeholder:text-muted/70 focus:border-terracotta focus:ring-4 focus:ring-terracotta/15"
                      inputMode="numeric"
                      required
                    />
                  </div>
                  <label className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                    <input
                      type="checkbox"
                      className="mt-0.5 rounded"
                      checked={agreement}
                      onChange={() => setAgreement(!agreement)}
                      required
                    />
                    <span>Я приймаю умови угоди</span>
                  </label>
                  <button
                    type="submit"
                    className="ui-btn flex w-full items-center justify-center gap-2 bg-terracotta py-3.5 text-base font-semibold text-white hover:bg-terracotta-dark"
                  >
                    Обрати тур
                    <span aria-hidden>→</span>
                  </button>
                </form>

                <a
                  href="tel:+447520665098"
                  className="mt-4 block rounded-full py-2 text-center text-sm font-medium text-muted transition hover:bg-surface hover:text-terracotta"
                >
                  або зателефонуйте +44 7520 665098
                </a>
              </>
            )}
          </div>
        </div>
      </section>

      <div>
        <HeroCarousel onSlideClick={() => setDrawerOpen(true)}></HeroCarousel>
      </div>
      <HomeTourOffersSection />

      <section id="Foto-section" className="flex flex-wrap">
        <Image
          src="/default0.jpg"
          width={400}
          height={400}
          alt="Фото з подорожі"
          className="flex-1 min-w-[200px] object-cover"
        ></Image>
        <Image
          src="/default0.jpg"
          width={400}
          height={400}
          alt="Фото з подорожі"
          className="flex-1 min-w-[200px] object-cover"
        ></Image>
        <Image
          src="/default0.jpg"
          width={400}
          height={400}
          alt="Фото з подорожі"
          className="flex-1 min-w-[200px] object-cover"
        ></Image>
      </section>

      <section id="about">
        <AboutPage />
      </section>

      <section id="contacts">
        <ContactPage />
      </section>

      <ContactDrawer open={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* <TelegramModal /> */}
    </div>
  );
}
