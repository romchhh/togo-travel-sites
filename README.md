# TogoTravel — три сайти

| Папка | Домен (орієнтовно) | Dev-порт | ФОП |
|-------|---------------------|----------|-----|
| `join/` | join-up.com.ua | 3005 | Саламатіна С.Є. |
| `joinUp/` | joinup.market | 3006 | Саламатін К.О. |
| `trip-vibe/` | tripvibe.com.ua | 3007 | Гайдабука Н.В. |

Кожен сайт — окремий Next.js-проєкт зі своїм `package.json`.

## Спільні файли

- `shared/data/tourOffers.ts` — тури на сторінці `/services` (усі три сайти).
- `shared/legal/` — тексти оферти, умов послуг і правил повернення (типовий шаблон для турагентства; реквізити по кожному ФОП у `sites.ts`).
- `assets/tour-photos/` — оригінали фото турів (джерело правди).
- `assets/legal/bank-guarantees/` — PDF банківських гарантій по ФОП.
- `assets/deals/{join,joinUp,trip-vibe}/` — договори з туроператорами (джерело для `/operator-contracts`).
- `deals/` — оригінали від клієнта (архів; для сайту використовуйте `assets/deals` + sync).

Після зміни фото або PDF:

```bash
chmod +x scripts/sync-public-assets.sh
./scripts/sync-public-assets.sh
```

## Запуск

```bash
cd join && npm run dev       # http://localhost:3005
cd joinUp && npm run dev     # http://localhost:3006
cd trip-vibe && npm run dev  # http://localhost:3007
```

`npm run start` у кожному проєкті використовує той самий порт.

## Білд і audit (усі сайти з кореня)

```bash
npm run build    # join → joinUp → trip-vibe
npm run audit    # npm audit у кожному проєкті
```

Перед першим білдом у кожній папці: `npm install` (join, joinUp, trip-vibe).
