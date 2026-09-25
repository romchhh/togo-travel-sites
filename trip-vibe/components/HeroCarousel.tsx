"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // base styles
import Image from "next/image";

export default function HeroCarousel({
  onSlideClick,
}: {
  onSlideClick?: () => void;
}) {
  // Redundant links
  const slides = [
    {
      img: "/slider-pics/Desktop - 5.jpg",
      img_sm: "/slider-pics/iPhone 16 - 1.jpg",
      alt: "Океанський круїз",
    },
    {
      img: "/slider-pics/Desktop - 6.png",
      img_sm: "/slider-pics/iPhone 16 - 2.jpg",
      alt: "Тенерифе",
    },
    {
      img: "/slider-pics/Desktop - 7.jpg",
      img_sm: "/slider-pics/iPhone 16 - 3.jpg",
      alt: "Ідеальний відпочинок",
    },
  ];

  return (
    <section className=" bg-mudblue/20">
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
        aria-label="Головна карусель"
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <a
              href="#form"
              className="block relative"
              onClick={(e) => {
                e.preventDefault(); // prevent navigation
                onSlideClick?.(); // open the drawer
              }}
            >
              <div className="relative mx-auto w-full md:w-[1500px] h-[450px] md:h-[650px]">
                {/* Desktop Image */}
                <Image
                  src={slide.img}
                  alt={slide.alt}
                  fill
                  className="hidden sm:block object-cover object-center"
                  priority={index === 0}
                />

                {/* Mobile Image */}
                <Image
                  src={slide.img_sm}
                  alt={slide.alt}
                  fill
                  className="block sm:hidden object-contain object-center"
                  priority={index === 0}
                />
              </div>

              {/* Overlay (optional, for captions) */}
              <div className="absolute bottom-0 w-full hidden md:block bg-black/30 p-4 text-white">
                <p className="text-lg font-semibold">{slide.alt}</p>
              </div>
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
