# join

Next.js проєкт зі **старим Webflow-дизайном** JoinUP (розмітка, стилі, медіа з CDN).

## Запуск

```bash
npm install
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000).

## Структура

- `app/` — layout, головна сторінка, API `/api/send` (Bitrix24)
- `app/styles.css` — оригінальні Webflow-стилі
- `content/home.html` — оригінальна HTML-розмітка сторінки
- `components/WebflowHome.tsx` — монтує розмітку + Webflow JS
- `public/js/` — jQuery та Webflow runtime

Медіа (логотип, фото, іконки) підвантажуються з Webflow CDN, як у оригіналі.
