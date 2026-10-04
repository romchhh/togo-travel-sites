"use client";

import PublicImage from "@/components/PublicImage";

const offices = [
  {
    metro: "Осокорки",
    address:
      "ТЦ Рівер Молл, Дніпровська набережна 12, центральний вхід, -1 поверх, навпроти Сільпо, Join Up",
  },
  {
    metro: "Площа Українських Героїв",
    address:
      "ТЦ Метроград, з метро ліворуч, вхід через магазин Єва, Join Up",
  },
  {
    metro: "Почайна",
    address:
      "ТЦ Городок, пр-т Степана Бандери 23, 1 поверх, біля кульок, Join Up",
  },
  {
    metro: "Почайна",
    address:
      "ТЦ Ашан Почайна, пр-т Степана Бандери 15 А, Оболонські ворота, прикасова зона, Join Up",
  },
] as const;

const CORP_PHONE = "+38 (044) 393 33 23";
const CORP_PHONE_HREF = "tel:+380443933323";

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
                  <a href={CORP_PHONE_HREF}>{CORP_PHONE}</a>
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
