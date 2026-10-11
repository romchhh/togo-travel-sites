/** Єдиний опис складу вартості туру для всіх сайтів */
export const PRICE_INCLUDES_ITEMS = [
  "авіапереліт",
  "проживання",
  "харчування",
  "медичне страхування",
  "трансфер аеропорт–готель–аеропорт (або наземне обслуговування)",
] as const;

export const PRICE_INCLUDES_SHORT = PRICE_INCLUDES_ITEMS.join(", ");

export const PRICE_INCLUDES_NOTE = `Вартість туру орієнтовно включає: ${PRICE_INCLUDES_SHORT}. Ціни орієнтовні на момент публікації — актуальну вартість, наявність місць і точний склад послуг уточнюйте у менеджера перед бронюванням.`;

export const PRICE_INCLUDES_INLINE = `Вартість орієнтовно включає ${PRICE_INCLUDES_SHORT}.`;

/** Короткий рядок під ціною в картці туру */
export const PRICE_INCLUDES_CARD = `Включає: ${PRICE_INCLUDES_SHORT}`;
