# Vachika Lekhini · वाचक लेखिनी

> Chant with Purpose · Write with Devotion · Track with Pride

A premium, cinematic single-page website for **Vachika Lekhini** — a sacred
digital companion for mantra sadhana. The design fuses ancient Indian temple
aesthetics (gold leaf, deep saffron, sacred geometry, temple silhouettes) with
modern, Apple-grade motion and polish.

## Tech stack

- **Vite** + **React 19** (single-page static site)
- **Tailwind CSS v4** (CSS-first `@theme` design tokens in `src/index.css`)
- **Framer Motion** (parallax, scroll reveals, floating particles, counters)
- Google Fonts: Cinzel, Cormorant Garamond, Inter / Plus Jakarta Sans, Noto Sans Devanagari

## Getting started

```bash
npm install
npm run dev        # local dev server with HMR
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Structure

```
src/
  App.jsx                 # page composition (section order)
  index.css               # design system: tokens, utilities, animations
  lib/motion.js           # shared Framer Motion variants
  components/
    SacredBackground.jsx  # fixed atmosphere: rays, embers, geometry, temples
    NavBar.jsx            Hero.jsx           PhoneMockup.jsx   BrandMark.jsx
    NameMeaning.jsx       ThreeWays.jsx      Features.jsx      MantraLibrary.jsx
    Dashboard.jsx         CountUp.jsx        Languages.jsx     Movement.jsx
    Privacy.jsx           About.jsx          FinalCTA.jsx      Footer.jsx
    Reveal.jsx            SectionHeading.jsx
```

## Design tokens

All colors and fonts live as Tailwind v4 theme variables in `src/index.css`
(`@theme { … }`). Adjust the palette there and every component updates.

| Token | Value |
| --- | --- |
| `--color-bg` | `#0D0703` |
| `--color-bg-2` | `#1A0E08` |
| `--color-gold` | `#F4C95D` |
| `--color-gold-rich` | `#D9A441` |
| `--color-amber` | `#FFB347` |
| `--color-saffron` | `#FF8C00` |
| `--color-ink` | `#FFF8E8` |
| `--color-muted` | `#D9CFC0` |

Built by Srinishtha Technologies Pvt. Ltd.

🕉 श्री राम जय राम जय जय राम
