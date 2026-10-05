<div align="center">

<img src="docs/screenshots/desktop-hero.webp" alt="The Waffle House: Fresh Waffles. Rich Coffee. Sweet Moments. A stack of Belgian waffles with berries and syrup." width="100%" />

<br />

![React](https://img.shields.io/badge/React-18-20232a?style=flat-square&logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-6-646cff?style=flat-square&logo=vite&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind-3-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-0055ff?style=flat-square&logo=framer&logoColor=white)

<br />

**[Run it](#run-it)** &nbsp;·&nbsp; **[Features](#features)** &nbsp;·&nbsp; **[Architecture](#architecture)** &nbsp;·&nbsp; **[Installation](#installation)** &nbsp;·&nbsp; **[Gallery](#gallery)**

</div>

---

<p align="center">
  <img src="docs/screenshots/menu-carousel.gif" alt="The signature menu carousel stepping through the waffles" width="70%" />
</p>

The Waffle House is a one-page site for a Belgian waffle and dessert café in Shivmandir, Siliguri. It shows the signature menu with prices, the café's story, a photo gallery with a lightbox, customer reviews, and a visit section with an embedded map and the café's Instagram.

It began as plain HTML, CSS and JavaScript and was moved to React and Framer Motion. The original interaction layer is still in the repo as [`scripts/legacy-main.js`](scripts/legacy-main.js) for reference, but nothing loads it.

## Run it

No accounts, keys or environment variables.

```bash
git clone https://github.com/Samudra-GITHub/the-waffle-house.git
cd the-waffle-house && npm install && npm run dev
```

Then open the address Vite prints (by default <http://localhost:5173>).

## Features

<table>
  <tr>
    <td width="50%" valign="top">
      <img src="docs/screenshots/desktop-hero.webp" alt="Hero with the waffle stack" width="100%" />
      <h3>A hero that moves</h3>
      <p>A loading screen, a scroll-progress bar, a cursor glow, and a hero built around the waffle stack with a chocolate-fill effect.</p>
    </td>
    <td width="50%" valign="top">
      <img src="docs/screenshots/menu-carousel.gif" alt="Menu carousel" width="100%" />
      <h3>A menu you can browse</h3>
      <p>A carousel of the signature waffles and cheesecakes. Each card carries a tag and a price in rupees.</p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="docs/screenshots/desktop-gallery.webp" alt="Gallery section" width="100%" />
      <h3>Photos from the café</h3>
      <p>A gallery that opens in a lightbox, next to a story section, an experience section and customer reviews.</p>
    </td>
    <td width="50%" valign="top">
      <img src="docs/screenshots/mobile-hero.webp" alt="Mobile layout" width="48%" />
      <h3>Responsive from the start</h3>
      <p>The same page reflows for phones, with a compact navigation and the hero stacked above the headline.</p>
    </td>
  </tr>
</table>

**Also:** a visit section with an embedded map and directions link; decorative chocolate-drip, coffee-steam and floating-ingredient animations; SEO metadata (title, description, keywords, canonical link) in `index.html`.

## Tech stack

| Layer | Technology |
| :-- | :-- |
| UI | React 18, TypeScript 5 |
| Animation | Framer Motion 13 |
| Styling | Tailwind CSS 3, PostCSS, a custom CSS design system |
| Build | Vite 6 |

## Architecture

```mermaid
flowchart LR
    M[main.tsx] --> A[App.tsx]
    A --> S[Sections<br/>Hero · Menu · Story · Experience · Gallery · Reviews · Visit]
    S --> D[(src/data<br/>menu · gallery · reviews)]
    G[global.css] --> DS[design-system/<br/>tokens · layout · components · motion · homepage]
```

`App.tsx` stacks the sections in order. Content (menu items, gallery images, reviews) lives in `src/data/`. `src/styles/global.css` imports the five files in `design-system/`, which stay the single source of truth for tokens, layout and motion.

```text
the-waffle-house/
├── index.html            Entry HTML and SEO metadata
├── design-system/        CSS tokens, layout, components, motion, homepage styles
├── public/assets/        Optimised hero, menu, gallery, story and avatar images
├── scripts/              legacy-main.js, the archived vanilla-JS layer (not loaded)
├── src/
│   ├── components/       Navbar, Footer, Lightbox, Reveal, animations/
│   ├── sections/         Hero, MenuCarousel, Story, Experience, Gallery, Reviews, Visit
│   ├── data/             Menu, gallery and review content
│   └── styles/           global.css
└── docs/screenshots/     README captures
```

## Installation

Requires Node.js and npm.

```bash
npm install
```

| Command | What it does |
| :-- | :-- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check with `tsc -b`, then build to `dist/` |
| `npm run preview` | Preview the production build locally |

Menu, gallery and review content is in `src/data/`. Design tokens are in `design-system/tokens.css`.

## Gallery

<table>
  <tr>
    <td align="center"><img src="public/assets/menu/classic-belgian.webp" width="190" alt="Belgian Classic" /><br /><sub>Belgian Classic</sub></td>
    <td align="center"><img src="public/assets/menu/royal-biscoff.webp" width="190" alt="Royal Biscoff" /><br /><sub>Royal Biscoff</sub></td>
    <td align="center"><img src="public/assets/menu/blueberry-classic.webp" width="190" alt="Blueberry Classic" /><br /><sub>Blueberry Classic</sub></td>
    <td align="center"><img src="public/assets/menu/naked-nutella.webp" width="190" alt="Naked Nutella" /><br /><sub>Naked Nutella</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="public/assets/menu/red-velvet-heart.webp" width="190" alt="Red Velvet Heart" /><br /><sub>Red Velvet Heart</sub></td>
    <td align="center"><img src="public/assets/menu/milk-chocolate-overload.webp" width="190" alt="Milk Chocolate Overload" /><br /><sub>Milk Chocolate Overload</sub></td>
    <td align="center"><img src="public/assets/menu/chocolate-chip.webp" width="190" alt="Chocolate Chip Waffle" /><br /><sub>Chocolate Chip Waffle</sub></td>
    <td align="center"><img src="public/assets/story/interior-counter-02.webp" width="190" alt="The counter" /><br /><sub>The counter</sub></td>
  </tr>
</table>

## Limitations

- No automated tests or CI workflow yet.
- No public deployment is listed.

## License

No license file is currently included in this repository.
