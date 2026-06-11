# Tom N Tom's Carrollton QR Menu

First working version of a mobile-first QR menu website for Tom N Tom's Coffee & Eatery in Carrollton, TX.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit Menu Items And Prices

All menu content lives in:

```text
src/data/menu.ts
```

Edit category names, item names, descriptions, Korean text, tags, prices, location placeholders, and the Instagram URL there. Layout components read from that file, so menu updates should not require touching `src/app/page.tsx`.

Useful tags:

- `Customer Favorite`
- `New`
- `Hot/Iced`
- `Iced Only`
- `Caution Hot`

## Deploy To Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Deploy.

The app uses a standard Next.js structure and does not require custom build settings.

## Current Scope

This is a browsing-only menu. It intentionally does not include ordering, checkout, payment, login, rewards, loyalty, or POS integration.

## TODOs

- Replace placeholder location address, phone, and hours in `src/data/menu.ts`.
- Replace the Instagram placeholder URL in `src/data/menu.ts`.
- Confirm final pricing and Korean text against the source MP4 or store POS menu before production use.
