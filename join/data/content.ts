export const siteFop = {
  name: "ФОП Саламатіна Світлана Євгенівна",
  fullName: "Саламатіна Світлана Євгенівна",
  taxId: "2712012861",
  taxIdLabel: "РНОКПП (ІПН)",
  /** Повна адреса з ЄДР — для оферти / гарантії */
  address: "02140, м. Київ, вул. Мішуги, буд. 12, кв. 141",
  /** Скорочена для футера (без буд./кв.) */
  addressPublic: "02140, м. Київ, вул. Мішуги",
  iban: "UA163052990000026002046802542",
  bank: "АТ «ПриватБанк»",
  phone: "+380443933323",
  email: "togotravel.inform@gmail.com",
  taxSystem: "Спрощена система оподаткування, 3 група",
  guarantee: {
    number: "57733",
    issuer: "АТ «КБ «ГЛОБУС»",
    amountUah: "103 238,20 грн",
    amountEur: "2 000,00 EUR",
    issuedAt: "13.08.2026",
    validUntil: "12.08.2031",
    file: "/bank-guarantee.pdf",
  },
} as const;
