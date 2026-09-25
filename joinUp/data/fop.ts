export const fopSalamatinaSvitlana = {
  name: "ФОП Саламатіна Світлана Євгенівна",
  fullName: "Саламатіна Світлана Євгенівна",
  taxId: "2712012861",
  taxIdLabel: "РНОКПП (ІПН)",
  address: "02140, м. Київ, вул. Мішуги, буд. 12, кв. 141",
  iban: "UA163052990000026002046802542",
  bank: "АТ «ПриватБанк»",
  phone: "+380508138800",
  phoneHref: "tel:+380508138800",
  email: "togotravel.inform@gmail.com",
  taxSystem: "Спрощена система оподаткування, 3 група",
} as const;

export const fopSalamatinKyrylo = {
  name: "ФОП Саламатін Кирило Олександрович",
  fullName: "Саламатін Кирило Олександрович",
  taxId: "3625007019",
  taxIdLabel: "РНОКПП (ІПН)",
  address: "02140, м. Київ, вул. Мішуги, буд. 12, кв. 98",
  iban: "UA953052990000026005046211646",
  bank: "АТ «ПриватБанк»",
  phones: ["+380508138800", "+380662340015"],
  email: "togotravel.inform@gmail.com",
  guarantee: {
    number: "57741",
    issuer: "АТ «КБ «ГЛОБУС»",
    amountUah: "103 108,60 грн",
    amountEur: "2 000,00 EUR",
    issuedAt: "14.08.2026",
    validUntil: "13.08.2031",
    file: "/bank-guarantee.pdf",
  },
} as const;

export const fopHaidabukaNina = {
  name: "ФОП Гайдабука Ніна Володимирівна",
  fullName: "Гайдабука Ніна Володимирівна",
  taxId: "1921108605",
  taxIdLabel: "РНОКПП",
  iban: "UA083052990000026005036810808",
  accountType: "Поточний рахунок, UAH",
  accountOpened: "13.08.2026",
  bank: "АТ КБ «ПРИВАТБАНК»",
  bankCode: "МФО 305299",
  bankEdrpou: "14360570",
  bankBranchAddress: "01042, м. Київ, бульв. Миколи Міхновського, 25",
} as const;
