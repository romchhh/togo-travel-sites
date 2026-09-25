export type TourOffer = {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  meal?: string;
  image: string;
};

export type TourDestination = {
  country: string;
  offers: TourOffer[];
};

export const tourDestinations: TourDestination[] = [
  {
    country: "Єгипет",
    offers: [
      {
        id: "egypt-v-hotel",
        title: "V Hotel (ex. Pyramisa Sharm el Sheikh)",
        description:
          "Розташований на першій береговій лінії у відомій бухті Sharks Bay. Родзинка готелю — багатий домашній кораловий риф, який чудово підходить для снорклінгу та дайвінгу. Активна команда аніматорів, хороші розваги для дітей. Реновація 2022 року.",
        price: "105 640 грн",
        duration: "7 ночей, 2 дорослих",
        image: "/offers/egypt-v-hotel.jpg",
      },
      {
        id: "egypt-sunrise-montemare",
        title: "Sunrise Montemare Resort Grand Select",
        description:
          "Преміальний 5-зірковий готель у безвітряній бухті району Хадаба, Шарм-ель-Шейх. Високий рівень сервісу, чудовий живий кораловий риф та концепція відпочинку підвищеного комфорту, зокрема VIP-сервіс Posh Club.",
        price: "130 600 грн",
        duration: "7 ночей, 2 дорослих",
        image: "/offers/egypt-sunrise-montemare.jpg",
      },
      {
        id: "egypt-rehana-royal",
        title: "Rehana Royal Beach Resort Aqua Park & Spa",
        description:
          "Готель у районі Набк-Бей, Шарм-ель-Шейх. Приватний пляж, басейни для дорослих і дітей, ресторани з місцевою та міжнародною кухнею, бари. Для дітей — водні гірки, дитячий клуб та ігрові майданчики.",
        price: "66 160 грн",
        duration: "7 ночей, 2 дорослих",
        image: "/offers/egypt-rehana-royal.jpg",
      },
      {
        id: "egypt-stella-beach",
        title: "Stella Beach Resort & Spa Makadi Bay 5*",
        description:
          "Район Макаді Бей. Власний піщаний пляж та вражаючий кораловий риф — ідеально для снорклінгу та дайвінгу. Послуги та сервіс, які зроблять відпочинок незабутнім.",
        price: "90 600 грн",
        duration: "7 ночей, 2 дорослих",
        image: "/offers/egypt-stella-beach.jpg",
      },
    ],
  },
  {
    country: "Туреччина",
    offers: [
      {
        id: "turkey-queens-park",
        title: "Queens Park Resort Goynuk",
        description:
          "Мальовнича прибережна зона. Власний піщано-гальковий пляж із пірсом, аквапарк із 4 гірками та сучасний спа-центр. Після капітального оновлення екстер’єру у 2025 році готель став ще комфортнішим.",
        price: "83 790 грн",
        duration: "7 ночей, 2 дорослих",
        image: "/offers/turkey-queens-park.jpg",
      },
      {
        id: "turkey-rai-foresta",
        title: "Rai Foresta Tekirova 5 (ex Fun & Sun Family Club Saphire)",
        description:
          "Повністю оновлений у 2026 році п’ятизірковий курортний готель. Відпочинок біля моря, комфортні номери, відмінний сервіс і мальовнича природа. Ідеальне поєднання активностей, релаксу та сімейного дозвілля.",
        price: "96 500 грн",
        duration: "7 ночей, 2 дорослих",
        image: "/offers/turkey-rai-foresta.jpg",
      },
      {
        id: "turkey-paloma-grida",
        title: "Paloma Grida Resort & Spa",
        description:
          "На березі моря у Белеку. Приватний піщаний пляж, відкриті басейни для дорослих і дітей, спа-центр та міні-клуб. Кілька ресторанів (в т. ч. à la carte) та барів. Аніматори проводять різноманітні заходи протягом дня.",
        price: "146 700 грн",
        duration: "7 ночей, 2 дорослих",
        image: "/offers/turkey-paloma-grida.jpg",
      },
    ],
  },
  {
    country: "Таїланд",
    offers: [
      {
        id: "thailand-centara-mirage",
        title: "Centara Grand Mirage Beach Resort Pattaya 5*",
        description:
          "Північна частина Паттайї. Величезний тематичний аквапарк у стилі «Загубленого світу» з лінивою річкою, гірками та басейнами в тропічній зелені. Прямий вихід на власний піщаний пляж, спа-центр, сімейні номери з видом на океан.",
        price: "118 400 грн",
        duration: "7 ночей, 2 дорослих",
        meal: "сніданки",
        image: "/offers/thailand-centara-mirage.jpg",
      },
      {
        id: "thailand-phuket-orchid",
        title: "Phuket Orchid Resort & Spa 4* (о. Пхукет)",
        description:
          "Сімейний готель за 100 м від пляжу Карон. Доглянута тропічна територія та власний аквапарк із гігантською водною гіркою. Сімейні номери, тайський масаж у спа, дитячий клуб і якісний сервіс за розумну ціну.",
        price: "від 79 100 грн",
        duration: "7 ночей, 2 дорослих",
        meal: "сніданки",
        image: "/offers/thailand-phuket-orchid.jpg",
      },
      {
        id: "thailand-sands-khao-lak",
        title: "The Sands Khao Lak by Katathani 5*",
        description:
          "Сучасний резорт на золотистому пляжі Нанг Тон, Као Лак. Розкішний спа, кілька басейнів, зелена зона для відпочинку. Реновація інфраструктури у 2023 році.",
        price: "від 96 200 грн",
        duration: "7 ночей, 2 дорослих",
        meal: "сніданки",
        image: "/offers/thailand-sands-khao-lak.jpg",
      },
    ],
  },
  {
    country: "Мальдіви",
    offers: [
      {
        id: "maldives-holiday-inn",
        title: "Holiday Inn Resort Kandooma Maldives 4*",
        description:
          "Сімейний резорт на приватному острові. Водна сплеш-зона Kandoo Kids із гірками. Пляжні вілли, спа, басейн-інфініті, чудові умови для снорклінгу та дайвінгу.",
        price: "від 168 900 грн",
        duration: "7 ночей, 2 дорослих",
        meal: "сніданки + вечері (FB)",
        image: "/offers/maldives-holiday-inn-kandooma.jpg",
      },
      {
        id: "maldives-siyam-world",
        title: "Siyam World Maldives 5*",
        description:
          "Преміум-курорт із найбільшим на Мальдівах відкритим плавучим аквапарком Siyam Water World. Водні вілли з індивідуальними гірками в океан, багато ресторанів, спа та цілодобове all inclusive.",
        price: "від 234 200 грн",
        duration: "7 ночей, 2 дорослих",
        meal: "All Inclusive",
        image: "/offers/maldives-siyam-world.jpg",
      },
      {
        id: "maldives-cinnamon-dhonveli",
        title: "Cinnamon Dhonveli Maldives 4*",
        description:
          "Тропічна територія на першій лінії. Чудова лагуна для плавання та зона для серфінгу. Chavana Spa, фітнес, басейн із водною гіркою. Підходить для сімей та пар.",
        price: "від 145 600 грн",
        duration: "7 ночей, 2 дорослих",
        meal: "Premium All Inclusive",
        image: "/offers/maldives-cinnamon-dhonveli.jpg",
      },
    ],
  },
];
