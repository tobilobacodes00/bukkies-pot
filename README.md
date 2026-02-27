# Bukkie's Pot — Website

The official website for **Bukkie's Pot**, a Nigerian food catering business offering food bowls, party trays, event catering, and rental services. Built with a Bauhaus / neo-brutalist aesthetic and deployed at [bukkiespot.com](https://bukkiespot.com).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (React SSR) |
| Routing | [TanStack Router](https://tanstack.com/router) (file-based) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) + custom Bauhaus utilities |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| UI Primitives | [shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://www.radix-ui.com) |
| Icons | [Lucide React](https://lucide.dev) |
| Build Tool | [Vite v7](https://vite.dev) |
| Language | TypeScript (strict mode) |
| Font | [Comfortaa](https://fonts.google.com/specimen/Comfortaa) via Google Fonts |

---

## Getting Started

**Requirements:** Node.js 18+

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The dev server runs at `http://localhost:3000` by default.

---

## Project Structure

```
bukkiespot/
├── app/
│   ├── routes/
│   │   ├── __root.tsx          # Root layout — all SEO metadata, fonts, structured data
│   │   └── index.tsx           # Homepage — page layout and component order
│   ├── components/
│   │   ├── Navbar.tsx          # Fixed top navbar with scroll-aware active state
│   │   ├── Hero.tsx            # Hero section with auto-sliding image strip
│   │   ├── Menu.tsx            # Full menu — dishes, proteins, soups, other services
│   │   ├── WhyChooseUs.tsx     # Three feature cards with food photography
│   │   ├── Testimonials.tsx    # Customer rating stats + WhatsApp review screenshots
│   │   ├── Gallery.tsx         # Video/photo gallery grid
│   │   ├── CTABanner.tsx       # Call-to-action section with WhatsApp order link
│   │   ├── Footer.tsx          # Navigation, contact details, copyright
│   │   ├── FloatingWhatsApp.tsx # Persistent WhatsApp button (bottom-right)
│   │   ├── ScrollReveal.tsx    # Framer Motion scroll-triggered reveal wrapper
│   │   └── FeaturedDishes.tsx  # (Reserved — not currently rendered)
│   ├── styles/
│   │   └── app.css             # Tailwind imports, Bauhaus design tokens, base styles
│   ├── lib/
│   │   └── utils.ts            # Tailwind merge / clsx helper
│   ├── client.tsx              # Client-side hydration entry
│   └── router.tsx              # TanStack Router instance
├── public/
│   ├── images/                 # Logo, OG image, product photos
│   ├── hero-slider/            # 5 hero slider images (1st.png – 5th.png)
│   ├── random-plates-of-food/  # Decorative food plate cutouts
│   ├── packages/               # Package/offer images
│   ├── events/                 # Event photography
│   ├── testimonials/           # WhatsApp testimonial screenshots
│   ├── video gallery/          # Gallery video files
│   ├── robots.txt              # Search engine crawl directives
│   └── sitemap.xml             # Site URL map for crawlers
├── components.json             # shadcn/ui configuration
├── vite.config.ts              # Vite + TanStack Start + Tailwind config
├── tsconfig.json               # TypeScript configuration
└── package.json
```

---

## Design System

The site uses a **Bauhaus / neo-brutalist** design language with the following primitives defined in [app/styles/app.css](app/styles/app.css):

| Class | Description |
|---|---|
| `.bauhaus-card` | White card with 3px dark border + 6px offset shadow |
| `.bauhaus-card-lg` | Larger card variant with 8px offset shadow |
| `.bauhaus-btn` | Pill-shaped button with offset shadow + hover lift animation |
| `.bauhaus-chip` | Round badge / pill label with 2px border |
| `.bauhaus-halftone` | Dotted halftone background texture overlay |

### Design Tokens

Defined in the `@theme` block in `app.css`:

```css
--color-cream:    #fffbf0  /* Page background */
--color-orange:   #f97316  /* Primary CTA colour */
--color-dark:     #1a0f05  /* Text / borders */
--color-muted:    #6b5a4e  /* Secondary text */
--bauhaus-yellow: #f5c842  /* Accent / active states */
--bauhaus-blue:   #4a67ff  /* Reserved accent */
```

---

## SEO

All metadata is managed in [app/routes/\_\_root.tsx](app/routes/__root.tsx):

- **Title & description** meta tags
- **Open Graph** tags (type, url, title, description, image, locale `en_NG`)
- **Twitter Card** tags (summary_large_image)
- **Schema.org structured data** — `LocalBusiness` + `Organization` with `OfferCatalog`, multiple `ContactPoint` entries, and service area set to Nigeria
- **Canonical URL** — `https://bukkiespot.com`
- **robots.txt** — `public/robots.txt`
- **sitemap.xml** — `public/sitemap.xml`
- **LCP preload** — first hero slider image preloaded for performance

---

## Components Reference

### `Navbar`
Fixed navigation bar that highlights the active section as the user scrolls. Uses a CSS `peer` checkbox pattern (no JS state) for the mobile drawer. Scroll tracking uses `requestAnimationFrame` with a passive scroll listener.

### `Hero`
Full-width hero with headline, subtext, and a CTA button linking to WhatsApp. Includes an auto-playing CSS keyframe image slider (5 slides, 20s loop) and two decorative plate cutouts. The first slider image is preloaded for LCP.

### `Menu`
Lists all dishes in three columns (Dishes / Protein & Sides / Soups) plus an "Other Services" dark card. Menu items are rendered from static arrays — update the `DISHES`, `PROTEINS`, `SOUPS`, and `OTHER_SERVICES` arrays at the top of the file to change the menu.

### `WhyChooseUs`
Three feature cards highlighting: fresh ingredients, authentic recipes, and reliable delivery. Each card uses a different image treatment (`circle`, `tilt`, `stack`).

### `Testimonials`
Horizontally scrollable row of WhatsApp screenshot cards alongside a rating stat block (4.9/5).

### `Gallery`
Grid of food/event photos and videos. Videos use native `<video>` with `poster`, `muted`, `loop`, `playsInline`, and `preload="metadata"`.

### `CTABanner`
Central call-to-action with logo, headline, and two buttons — "Order Now" (WhatsApp) and "View Menu" (scrolls to `#full-menu`).

### `Footer`
Two-column grid with navigation links and contact details (phone, WhatsApp, email). Sits at `id="contact"` so the "Contact" nav item scrolls here.

### `ScrollReveal`
A thin Framer Motion wrapper component. Pass `y` (pixels to rise from) and `delay` props to stagger animations. Respects `prefers-reduced-motion` via Framer Motion's built-in support.

### `FloatingWhatsApp`
Persistent fixed WhatsApp button (bottom-right corner) visible on all scroll positions.

---

## Updating Content

### Change menu items
Edit the arrays in [app/components/Menu.tsx](app/components/Menu.tsx):
```ts
const DISHES = [ ... ]
const PROTEINS = [ ... ]
const SOUPS = [ ... ]
const OTHER_SERVICES = [ ... ]
```

### Change contact details
Phone numbers and WhatsApp links are defined in two places:
- [app/routes/\_\_root.tsx](app/routes/__root.tsx) — structured data and meta tags
- [app/components/Footer.tsx](app/components/Footer.tsx) — displayed contact info
- [app/components/Navbar.tsx](app/components/Navbar.tsx) — navbar CTA link
- [app/components/CTABanner.tsx](app/components/CTABanner.tsx) — banner CTA link

### Change hero slider images
Replace images in `public/hero-slider/` (named `1st.png` through `5th.png`). Update alt text in the `sliderImages` array in [app/components/Hero.tsx](app/components/Hero.tsx).

### Change OG / social share image
Replace `public/images/og-image.jpeg` and update the dimensions in `__root.tsx` (`og:image:width`, `og:image:height`) if the new image has different dimensions.

---

## Accessibility

- Skip-to-content link (`.skip-link`) visible on keyboard focus
- All interactive elements have visible focus rings (3px solid `#f97316`)
- `aria-current="page"` on active nav links
- `aria-label` on icon-only buttons and links
- `aria-hidden="true"` on all decorative images and icon elements
- Semantic HTML landmarks: `<header>`, `<main id="main-content">`, `<footer>`
- `@media (prefers-reduced-motion: reduce)` disables all animations and the hero slider

---

## Performance Notes

- Font loaded with `display=swap` + `preconnect` to eliminate render-blocking
- First hero slider image has a `<link rel="preload">` hint
- Off-screen images use `loading="lazy"`
- Hero slider animation is pure CSS — zero JavaScript
- Scroll listener uses `requestAnimationFrame` + `passive: true`
- Videos use `preload="metadata"` to avoid loading full files on page load

---

## Deployment

The project uses TanStack Start which supports SSR. Deploy to any Node.js-compatible host (Vercel, Railway, Render, etc.).

```bash
npm run build   # Outputs to .output/ (TanStack Start default)
```

Point the live domain to `https://bukkiespot.com` and ensure `public/robots.txt` is served at the root.
