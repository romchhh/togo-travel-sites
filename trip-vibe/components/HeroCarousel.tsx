"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import PublicImage from "@/components/PublicImage";

const slides = [
  {
    img: "/contries-photo/Egypt.jpg",
    img_sm: "/contries-photo/Egypt.jpg",
    alt: "Єгипет — All Inclusive з вильотом з Києва",
    label: "Єгипет",
  },
  {
    img: "/contries-photo/Turkey.jpg",
    img_sm: "/contries-photo/Turkey.jpg",
    alt: "Туреччина — море, сонце та готелі з харчуванням",
    label: "Туреччина",
  },
  {
    img: "/contries-photo/Thailand.webp",
    img_sm: "/contries-photo/Thailand.webp",
    alt: "В’єтнам і Шрі-Ланка — тропічний відпочинок",
    label: "В’єтнам · Шрі-Ланка",
  },
  {
    img: "/contries-photo/Greece.jpg",
    img_sm: "/contries-photo/Greece.jpg",
    alt: "Греція — острови та курорти Середземномор’я",
    label: "Греція",
  },
];

export default function HeroCarousel({
  onSlideClick,
}: {
  onSlideClick?: () => void;
}) {
  return (
    <section className="bg-mudblue/20">
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 4000,
          pauseOnHover: true,
          arrows: true,
          pagination: true,
          speed: 800,
        }}
        aria-label="Популярні напрямки"
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <a
              href="#form"
              className="relative block"
              onClick={(e) => {
                e.preventDefault();
                onSlideClick?.();
              }}
            >
              <div className="relative mx-auto h-[450px] w-full md:h-[650px] md:w-[1500px]">
                <PublicImage
                  src={slide.img}
                  alt={slide.alt}
                  fill
                  className="hidden object-cover object-center sm:block"
                />
                <PublicImage
                  src={slide.img_sm}
                  alt={slide.alt}
                  fill
                  className="block object-cover object-center sm:hidden"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white md:p-8">
                  <p className="text-2xl font-semibold md:text-4xl">
                    {slide.label}
                  </p>
                  <p className="mt-1 max-w-xl text-sm text-white/90 md:text-lg">
                    {slide.alt}
                  </p>
                </div>
              </div>
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
