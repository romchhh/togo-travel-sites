"use client";

import PublicImage from "@/components/PublicImage";

const offices = [
  {
    metro: "Осокорки",
    address:
      "ТЦ Рівер Молл, Дніпровська набережна 12, центральний вхід, -1 поверх, навпроти Сільпо, Join Up",
    phone: "+38 (044) 393 33 23",
    phoneHref: "tel:+380443933323",
    mobile: "+380 99 697 48 91",
    mobileHref: "tel:+380996974891",
  },
  {
    metro: "Площа Українських Героїв",
    address:
      "ТЦ Метроград, з метро ліворуч, вхід через магазин Єва, Join Up",
    phone: "+38 (044) 393 33 23",
    phoneHref: "tel:+380443933323",
    mobile: "+380 93 265 33 26",
    mobileHref: "tel:+380932653326",
  },
  {
    metro: "Почайна",
    address:
      "ТЦ Городок, пр-т Степана Бандери 23, 1 поверх, біля кульок, Join Up",
    phone: "+38 (044) 393 33 23",
    phoneHref: "tel:+380443933323",
    mobile: "+380 50 861 47 32",
    mobileHref: "tel:+380508614732",
  },
  {
    metro: "Почайна",
    address:
      "ТЦ Ашан Почайна, пр-т Степана Бандери 15 А, Оболонські ворота, прикасова зона, Join Up",
    phone: "+38 (044) 393 33 23",
    phoneHref: "tel:+380443933323",
    mobile: "+380 63 336 54 45",
    mobileHref: "tel:+380633365445",
  },
] as const;

export default function WhereToFind() {
  return (
    <section className="flex flex-col overflow-hidden md:rounded-[2rem] md:mx-5 md:mb-10">
      <div
        className="flex flex-col overflow-hidden bg-white md:h-[650px] md:flex-row md:rounded-[2rem]"
        id="destinations"
      >
        <div className="relative h-[350px] md:h-auto md:flex-1">
          <PublicImage
            src="/where_left.jpg"
            alt="JoinUp Tour Office Left"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex items-center justify-center bg-brand px-6 py-10 text-white md:flex-1 md:py-8">
          <div className="max-w-lg space-y-3 text-center text-xs md:text-sm">
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              Де нас можна знайти
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {offices.map((office) => (
                <div key={office.address}>
                  <p className="font-semibold">м. Київ</p>
                  <p className="flex items-center justify-center gap-2 text-xs md:text-sm">
                    <PublicImage
                      src="/metro.svg"
                      alt="Metro"
                      width={16}
                      height={16}
                    />
                    {office.metro}
                  </p>
                  <p className="text-xs md:text-sm">{office.address}</p>
                  <a href={office.phoneHref}>{office.phone}</a>
                  <br />
                  <a href={office.mobileHref}>{office.mobile}</a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:flex-1 relative h-[350px] md:h-auto">
          <PublicImage
            src="/where_right.jpg"
            alt="JoinUp Tour Office Right"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
