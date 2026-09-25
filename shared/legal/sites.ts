import type { LegalSite } from "./types";

export const legalSites: Record<
  import("./types").LegalSiteKey,
  LegalSite
> = {
  join: {
    key: "join",
    brand: "JoinUP",
    website: "join-up.com.ua",
    fop: {
      name: "ФОП Саламатіна Світлана Євгенівна",
      taxId: "2712012861",
      taxIdLabel: "РНОКПП (ІПН)",
      address: "02140, м. Київ, вул. Мішуги, буд. 12, кв. 141",
      iban: "UA163052990000026002046802542",
      bank: "АТ «ПриватБанк»",
      email: "togotravel.inform@gmail.com",
      phones: ["+380508138800"],
      taxSystem: "Спрощена система оподаткування, 3 група",
    },
  },
  joinUp: {
    key: "joinUp",
    brand: "JoinUP",
    website: "joinup.market",
    fop: {
      name: "ФОП Саламатін Кирило Олександрович",
      taxId: "3625007019",
      taxIdLabel: "РНОКПП (ІПН)",
      address: "02140, м. Київ, вул. Мішуги, буд. 12, кв. 98",
      iban: "UA953052990000026005046211646",
      bank: "АТ «ПриватБанк»",
      email: "togotravel.inform@gmail.com",
      phones: ["+380508138800", "+380662340015"],
    },
  },
  tripVibe: {
    key: "tripVibe",
    brand: "TripVibe",
    website: "tripvibe.com.ua",
    fop: {
      name: "ФОП Гайдабука Ніна Володимирівна",
      taxId: "1921108605",
      taxIdLabel: "РНОКПП",
      address:
        "21030, Вінницька обл., м. Вінниця, просп. Юності, буд. 1, кв. 21",
      iban: "UA083052990000026005036810808",
      bank: "АТ КБ «ПРИВАТБАНК»",
      email: "togotravel.inform@gmail.com",
      phones: ["+447520665098"],
      bankDetails:
        "МФО 305299, ЄДРПОУ 14360570, відділення: 01042, м. Київ, бульв. Миколи Міхновського, 25",
    },
  },
};
