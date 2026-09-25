export type OperatorContract = {
  id: string;
  title: string;
  subtitle?: string;
  file: string;
};

export type OperatorContractsSite = "join" | "joinUp" | "tripVibe";

const joinContracts: OperatorContract[] = [
  {
    id: "join-up-agency-signed",
    title: "Агентський договір з ТОВ «ДЖОЙН АП УКРАЇНА» (підписаний)",
    file: "/documents/operators/join-up-agency-dogovir-pidpysanyy.pdf",
  },
  {
    id: "join-up-agency",
    title: "Агентський договір з ТОВ «ДЖОЙН АП УКРАЇНА»",
    file: "/documents/operators/join-up-agency-dogovir.pdf",
  },
  {
    id: "joining-application",
    title: "Заява про приєднання до агентського договору",
    subtitle: "від 28.08.2026",
    file: "/documents/operators/zayava-pryyednannya-agentskyy-dogovir.pdf",
  },
  {
    id: "df-254",
    title: "Договір франшизи № 254",
    subtitle: "ФОП Саламатіна С.Є.",
    file: "/documents/operators/df-254-dogovir-franshizi.doc",
  },
  {
    id: "sb-mta-217",
    title: "Договір МТА № 217",
    subtitle: "ФОП Саламатіна С.Є.",
    file: "/documents/operators/sb-mta-217-dogovir-mta.docx",
  },
  {
    id: "ft-143",
    title: "Договір франшизи (туризм) № 143",
    subtitle: "ФОП Саламатіна С.Є.",
    file: "/documents/operators/ft-143-dogovir-franshizi-tur.docx",
  },
];

const joinUpContracts: OperatorContract[] = [
  {
    id: "join-up-agency-signed",
    title: "Агентський договір з ТОВ «ДЖОЙН АП УКРАЇНА» (підписаний)",
    file: "/documents/operators/join-up-agency-dogovir-pidpysanyy.pdf",
  },
  {
    id: "join-up-agency",
    title: "Агентський договір з ТОВ «ДЖОЙН АП УКРАЇНА»",
    file: "/documents/operators/join-up-agency-dogovir.pdf",
  },
  {
    id: "joining-application",
    title: "Заява про приєднання до агентського договору",
    subtitle: "від 28.08.2026",
    file: "/documents/operators/zayava-pryyednannya-agentskyy-dogovir.pdf",
  },
  {
    id: "df-255",
    title: "Договір франшизи № 255",
    subtitle: "ФОП Саламатін К.О.",
    file: "/documents/operators/df-255-dogovir-franshizi.doc",
  },
  {
    id: "sb-mta-218",
    title: "Договір МТА № 218",
    subtitle: "ФОП Саламатін К.О.",
    file: "/documents/operators/sb-mta-218-dogovir-mta.docx",
  },
  {
    id: "ft-144",
    title: "Договір франшизи (туризм) № 144",
    subtitle: "ФОП Саламатін К.О.",
    file: "/documents/operators/ft-144-dogovir-franshizi-tur.docx",
  },
];

const tripVibeContracts: OperatorContract[] = [
  {
    id: "concession-pdf",
    title: "Договір комерційної концесії",
    subtitle: "ТОВ «Тріпвайб» та ФОП Гайдабука Н.В.",
    file: "/documents/operators/komerciyna-koncesiya-tripvibe.pdf",
  },
  {
    id: "concession-docx",
    title: "Договір комерційної концесії (DOCX)",
    subtitle: "ТОВ «Тріпвайб» та ФОП Гайдабука Н.В.",
    file: "/documents/operators/komerciyna-koncesiya-tripvibe.docx",
  },
  {
    id: "subfranchise",
    title: "Договір комерційної концесії (субфранчайзинг)",
    subtitle: "ТОВ «Тріпвайб»",
    file: "/documents/operators/subfranchising-tripvibe.docx",
  },
  {
    id: "vn-1",
    title: "Внутрішнє наказання № 1 від 18.08.2026",
    subtitle: "продаж на Тріпвайб, прибуткова накладна",
    file: "/documents/operators/vnutrishnie-nakazannya-vn-1.pdf",
  },
  {
    id: "joining-application",
    title: "Заява про приєднання до агентського договору",
    subtitle: "від 28.08.2026",
    file: "/documents/operators/zayava-pryyednannya-agentskyy-dogovir.pdf",
  },
  {
    id: "df-253",
    title: "Договір франшизи № 253",
    subtitle: "ФОП Гайдабука Н.В.",
    file: "/documents/operators/df-253-dogovir-franshizi.doc",
  },
  {
    id: "sb-mta-216",
    title: "Договір МТА № 216",
    subtitle: "ФОП Гайдабука Н.В.",
    file: "/documents/operators/sb-mta-216-dogovir-mta.docx",
  },
  {
    id: "ft-142",
    title: "Договір франшизи (туризм) № 142",
    subtitle: "ФОП Гайдабука Н.В.",
    file: "/documents/operators/ft-142-dogovir-franshizi-tur.docx",
  },
];

const bySite: Record<OperatorContractsSite, OperatorContract[]> = {
  join: joinContracts,
  joinUp: joinUpContracts,
  tripVibe: tripVibeContracts,
};

export function getOperatorContracts(site: OperatorContractsSite) {
  return bySite[site];
}
