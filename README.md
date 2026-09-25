# TogoTravel — три сайти

| Папка | Домен (орієнтовно) | Dev-порт | ФОП |
|-------|---------------------|----------|-----|
| `join/` | join-up.com.ua | 3005 | Саламатіна С.Є. |
| `joinUp/` | joinup.market | 3006 | Саламатін К.О. |
| `trip-vibe/` | tripvibe.com.ua | 3007 | Гайдабука Н.В. |

Monorepo на **npm workspaces**: один `node_modules` у корені, кожен сайт — workspace зі своїм `package.json`.

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

## Встановлення (один раз)

```bash
cd togotravel   # корінь репозиторію
npm install     # спільний node_modules у корені (+ postinstall для sharp / Tailwind oxide)
```

**Linux-сервер (VPS):** якщо білд падає на `native binding` або `sharp`, перевстановіть залежності на самому сервері (не копіюйте `node_modules` з Mac):

```bash
git pull
rm -rf node_modules
npm install          # postinstall + ensure-native-deps
npm run build        # ще раз перевіряє oxide перед білдом
```

Якщо joinUp/trip-vibe все одно падають на `Cannot find native binding`:

```bash
npm install @tailwindcss/oxide-linux-x64-gnu@4.3.3 --force --include=optional
node scripts/ensure-native-deps.js
npm run build:joinUp
```

Не використовуйте `npm install --omit=optional` і не копіюйте `node_modules` з macOS.

## Запуск

```bash
npm run dev:join        # http://localhost:3005
npm run dev:joinUp      # http://localhost:3006
npm run dev:trip-vibe   # http://localhost:3007
```

Або з папки сайту: `npm run dev` (після `npm install` у корені).

## Білд і audit

```bash
npm run build
npm run audit    # очікується 0 vulnerabilities (postcss підтягується через overrides у кореневому package.json)
```

**Не запускайте** `npm audit fix --force` на сервері — він може відкотити Next.js до старої версії. Достатньо `npm install` з репозиторію.
