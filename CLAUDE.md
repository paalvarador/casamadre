# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

This is a single-page Next.js 16 (App Router) landing page for **Casa Madre**, an artisan sourdough bakery in Ecuador. The entire page lives in one file:

- `app/page.tsx` — The full landing page as a single React component (`LandingCasaMadre`). Contains all sections inline: nav, hero, benefits, product catalog, CTA, and footer. No routing, no API routes, no state management.
- `app/layout.tsx` — Root layout with Google Fonts (Geist Sans + Geist Mono) and metadata.
- `app/globals.css` — Tailwind v4 import plus CSS variables for background/foreground colors.
- `public/` — Product images (ajo, aceitunas, queso, natural, semillas, nuez, hero, logo).

## Key Design Details

- **Color palette**: dark green `#0a2e1f`, cream/gold `#f3e5ab`, off-white `#FAF9F6`
- **Typography**: serif fonts for headings (via Tailwind's `font-serif`), Geist Sans for body
- **Product catalog**: zig-zag layout alternating image left/right using `md:flex-row-reverse` on odd-indexed items
- **Orders**: All CTAs link to WhatsApp (`wa.me/593996165091`) with pre-filled messages per product. `WHATSAPP_LINK[0]` is the generic order link; `WHATSAPP_LINK[index + 1]` maps to each product in the `panes` array
- **Styling**: Tailwind v4 with inline arbitrary values (no separate `tailwind.config`). Styles are applied directly as className strings — no CSS modules or styled-components
