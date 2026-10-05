<div align="center">

<img src="public/assets/hero/hero-waffle-stack-01.png" width="300" alt="A stack of Belgian waffles with berries and syrup" />

# The Waffle House

**A single-page site for a Belgian waffle and dessert café in Shivmandir, Siliguri.**

Animated hero · menu carousel · gallery with lightbox · reviews · map and Instagram

<br />

**[Overview](#overview)** &nbsp;·&nbsp; **[Features](#features)** &nbsp;·&nbsp; **[Getting started](#getting-started)** &nbsp;·&nbsp; **[Architecture](#architecture)** &nbsp;·&nbsp; **[Structure](#project-structure)**

<br />

![React](https://img.shields.io/badge/React-18-20232a?style=flat-square&logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-6-646cff?style=flat-square&logo=vite&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind-3-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white) ![Framer_Motion](https://img.shields.io/badge/Framer_Motion-animation-0055ff?style=flat-square&logo=framer&logoColor=white)

</div>

---

## Overview

The Waffle House is a marketing site for a local dessert café. It presents the signature menu, the café's story, a photo gallery, customer reviews and visit details (map and Instagram) in one scrolling page. The first version was vanilla HTML/CSS/JS and was later migrated to **React + Framer Motion**. The original interaction layer is kept for reference in `scripts/legacy-main.js` and is not loaded by the app.

## Preview

<p align="center">
  <img src="docs/screenshots/desktop-hero.webp" width="880" alt="The Waffle House home page: hero with the waffle stack" />
</p>

<p align="center">
  <img src="docs/screenshots/menu-carousel.gif" width="640" alt="The menu carousel stepping through the signature waffles" />
  <br />
  <sub>The menu carousel, recorded from the running app.</sub>
</p>

| Gallery | Mobile |
| :-- | :-- |
| <img src="docs/screenshots/desktop-gallery.webp" width="520" alt="Gallery section" /> | <img src="docs/screenshots/mobile-hero.webp" width="200" alt="Mobile hero" /> |

## Features

- Hero section with an animated waffle stack and chocolate-fill effect
- Menu carousel for the signature waffles and cheesecakes, with prices
- Story, experience, gallery (with lightbox) and reviews sections
- Visit section with an embedded map and the café's Instagram link
- Loading screen, scroll-progress bar and cursor glow
- Decorative animations: chocolate drip, coffee steam, floating ingredients
- SEO metadata (title, description, keywords, canonical link) in `index.html`
- A shared CSS design system (tokens, layout, components, motion) imported into the React app

## Tech Stack

| Area | Technology |
| --- | --- |
| UI | React 18, TypeScript |
| Animation | Framer Motion / Motion |
| Styling | Tailwind CSS 3, PostCSS, custom CSS design system |
| Build tool | Vite 6 |

## Project Structure

```
the-waffle-house/
├── index.html            # Entry HTML with SEO metadata
├── design-system/        # CSS tokens, layout, components, motion, homepage styles
├── public/
│   └── assets/           # Optimised hero, menu, gallery, story and avatar images
├── scripts/
│   └── legacy-main.js    # Archived vanilla-JS interactions (not loaded)
├── src/
│   ├── main.tsx          # React entry point
│   ├── App.tsx           # Page composition
│   ├── components/       # Navbar, Footer, Lightbox, Reveal, animations/
│   ├── sections/         # Hero, MenuCarousel, Story, Experience, Gallery, Reviews, Visit
│   ├── data/             # Menu, gallery and review content
│   └── styles/global.css # Imports the design-system CSS
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Getting Started

Requires Node.js and npm.

```bash
git clone https://github.com/Samudra-GITHub/the-waffle-house.git
cd the-waffle-house
npm install
```

## Usage

```bash
npm run dev       # start the Vite dev server
npm run build     # type-check (tsc -b) and build to dist/
npm run preview   # preview the production build locally
```

## Configuration

No environment variables or secrets are required. Menu items, gallery images and reviews are edited in `src/data/`, and design tokens in `design-system/tokens.css`.

## Architecture

`src/App.tsx` composes the page from section components. `src/styles/global.css` imports the files in `design-system/`, which remain the single source of truth for tokens and layout. Animation components in `src/components/animations/` implement the decorative effects.

## Future Improvements

- Add screenshots to this README
- Add a license file
- Add automated tests and a CI workflow

## License

No license file is currently included in this repository.
