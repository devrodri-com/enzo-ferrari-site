
# Enzo Ferrari - Professional Website

Bilingual (ES/EN) professional website for **Enzo Ferrari** (Goalkeeper Coach).

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- next-intl (i18n)

## Local Development

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:3000`, but it may use another port if 3000 is busy).

## Routing & i18n

- Locale routes: `/es/*` and `/en/*`
- Root `/` redirects to the best locale based on:
  1) `NEXT_LOCALE` cookie (if set)
  2) Browser language (fallback: `es`)

You can manually switch language using the language switcher in the navigation.

## Contact Form

The contact form posts to Formspree.

Create a `.env.local` file (or copy the example):

```bash
cp .env.local.example .env.local
```

Then set:

- `NEXT_PUBLIC_FORMSPREE_ENDPOINT`

If the env var is missing, the submit button is disabled and the UI shows “Formulario no configurado”.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Deployment

Recommended: **Vercel**.

- Ensure environment variables are configured in Vercel Project Settings.
- Build command: `npm run build`
- Output: Next.js default

## Project Structure (key)

- `src/app/[locale]/...` - pages by locale
- `src/proxy.ts` - locale redirect logic (Next 16+)
- `src/i18n/*` - next-intl routing/request config
- `messages/*.json` - translations

---

This README is project-specific and replaces the default `create-next-app` template.
