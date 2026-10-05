# The Waffle House

> A single-page, animation-rich website for a Belgian waffle and dessert café in Shivmandir, Siliguri.

## Overview

The Waffle House is a marketing site for a local dessert café. It presents the signature menu, the café's story, a photo gallery, customer reviews and visit details (map and Instagram) in one scrolling page. The first version was vanilla HTML/CSS/JS and was later migrated to **React + Framer Motion**. The original interaction layer is kept for reference in `scripts/legacy-main.js` and is not loaded by the app.

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

## Installation

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

## How It Works

`src/App.tsx` composes the page from section components. `src/styles/global.css` imports the files in `design-system/`, which remain the single source of truth for tokens and layout. Animation components in `src/components/animations/` implement the decorative effects.

## Future Improvements

- Add screenshots to this README
- Add a license file
- Add automated tests and a CI workflow

## License

No license file is currently included in this repository.
