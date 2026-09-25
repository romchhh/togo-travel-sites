export type LegalFop = {
  name: string;
  taxId: string;
  taxIdLabel: string;
  address: string;
  iban: string;
  bank: string;
  email: string;
  phones: string[];
  taxSystem?: string;
  bankDetails?: string;
};

export type LegalSiteKey = "join" | "joinUp" | "tripVibe";

export type LegalSite = {
  key: LegalSiteKey;
  brand: string;
  website: string;
  fop: LegalFop;
};
