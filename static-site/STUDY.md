# Reference Study — `referrence/Gemini_Generated_Image_kkjfexkkjfexkkjf.png`

Source image: 2752 × 1536px (poster/comp, not a literal browser capture). All
positions below are expressed as a percentage of that canvas so they can be
re-derived at any real viewport size — this page is built with %/vw units
throughout, not fixed pixels, and 1920×1080 is used only as the screenshot
size for comparison, never as the layout's target width.

## 1. Layout structure

Single hero/landing view (no scroll content shown in the reference). Two
regions:

- **Nav band** — a floating pill, horizontally inset, sitting near the top.
- **Hero** — a two-column split below the nav: text column on the left
  (~0–47% width), photo column on the right (~49–95% width), both roughly
  vertically centered in the remaining viewport height.

No grid/columns beyond this 2-column hero split. No footer, no scroll
indicator visible in the source.

## 2. Positioning of major elements (% of 2752×1536 canvas)

| Element | x | y | w | h |
|---|---|---|---|---|
| Nav pill | 7.3% | 4.6% | 85.4% | 13.9% |
| Brand "The Waffle House" | 8.5% | 6.5% | ~10% | ~3% |
| Nav links group | center-left of pill, ~37–58% x | ~8.5% y | — | — |
| "Book a Table" button | ~74–79% x | ~7–11% y | ~5% | ~4% |
| Headline block | 8.3% x | 27–42% y | ~35% | ~15% |
| Subtitle paragraph | 8.3% x | ~53–62% y | ~27% | ~9% |
| "Order Now" button | 8.3% x | ~67–74% y | ~12.6% | ~6.8% |
| Plate photo | ~42–91% x | ~38–87% y | ~49% | ~49% |
| Syrup drip + steam column | ~57–67% x | 0–42% y | ~10% | ~42% |
| Cocoa dust cloud | ~64–76% x | 10–42% y | ~12% | ~32% |
| "4.5 / Rating" badge (circle) | ~77–89% x | 21–40% y | ~12% | ~19% |
| "Crafted Fresh Daily" caption | ~76–89% x | 34–42% y | rotated ~-25° |
| "Belgian • Handmade • Since 2026" | ~63–95% x | 68–86% y | arcs along plate rim |
| Sparkle icon | ~93% x | 75–82% y | small, ~2.5% |

## 3. Typography hierarchy

1. **Headline** ("The Art of / Belgian Waffles") — largest element on the
   page. Elegant high-contrast serif (thin/medium weight, generous
   x-height, ligature-free), two lines, tight leading (~0.95–1). Color:
   near-white cream. Estimated size: ~80–90px at full canvas scale →
   scales to a `clamp()` in vw so it stays proportional at any width.
2. **Nav brand** — same serif family, small, medium weight, sentence case
   (not the all-caps treatment used elsewhere on the site).
3. **Section/body text** (subtitle, nav links, button labels, badge,
   captions) — humanist sans-serif, regular/medium weight.
4. **Subtitle** — sans, ~20px equivalent, 3 lines, relaxed line-height,
   muted gray (not the headline's cream, and not a warm tone — a cool
   neutral gray).
5. **Badge number "4.5"** — sans, bold, larger than "Rating" label below it
   (which is small/regular, letter-spaced).
6. **Rotated captions** — sans, regular weight, smaller than subtitle,
   muted tan color, always presented in italics-like slant via rotation
   rather than an italic font.

No display/decorative font beyond the one serif family — everything else
is the same sans family at different weights/sizes.

## 4. Color palette (sampled directly from the source PNG)

| Swatch | Hex | Usage |
|---|---|---|
| Background (near-black) | `#111111`–`#121212` | Page background, flat with only a very subtle vignette |
| Nav pill glass | `#1E1E1C` @ ~55% opacity over blur | Floating nav background |
| Headline text | `#FFFEF9` | Near-white cream, headline + brand |
| Subtitle / muted text | `#B8B7B3` | Subtitle, nav link secondary state |
| Nav link / body text (full opacity) | `#FFFFFF`–`#F4F4F2` | Nav links, badge "Rating" label |
| Gold gradient (button) | `#FBE6AF` → `#E8C67C` → `#D0A875` | "Order Now" button fill, top-to-bottom |
| Button text | `#0F0100` | Near-black text on the gold button |
| Badge / caption tan | `#D6C7B2` / `#C9A876` | "4.5 Rating" text, rotated captions |
| Waffle gold | `#C98A2E`–`#F2C94C` | Photographic, not a UI color — for reference only |

No saturated brand color beyond the gold gradient. Berries (red/blue) and
chocolate are photographic content, not part of the UI palette.

## 5. Spacing system

Derived as a consistent ~8px-family rhythm, expressed here as % of canvas
width (so it maps to `vw` in the build):

- Page inset (nav pill margin from edges, hero left margin): **~7.3vw**
- Nav pill internal vertical padding: **~2.7% of pill height** → ~14–16px equivalent
- Headline → subtitle gap: **~2.5vh**
- Subtitle → button gap: **~3.4vh**
- Nav link gap: **~2.2vw** between items
- Hero column gap (text col → photo col): **~2vw**

## 6. Image composition

- **Framing**: photo is shot top-down/three-quarter, plate right-aligned,
  bleeding off the right and bottom edges of its column.
- **Foreground**: white ceramic plate, single Belgian waffle (quartered by
  its own deep grid pattern), topped with a butter pat + chocolate
  shavings at center, raspberries and blueberries scattered around the
  rim, syrup pooling in the waffle's grid and dripping down the front
  edge and off the plate onto the surface below.
- **Midground**: a thin syrup drip falls from off-frame top, ending in a
  suspended droplet before it would land on the waffle; a wisp of steam
  rises from the waffle's center, curling left-of-center.
  Cocoa powder / chestnut/oat crumbs are scattered mid-air to the upper
  right of the steam, thinning out as they fall.
- **Background**: flat near-black, no visible floor/table texture — the
  plate appears to float against pure dark.

## 7. Lighting direction

Key light from **upper-left**, fairly soft/diffuse (soft-edged highlights
on the waffle ridges, no hard specular hot-spots). This produces:

- Bright, warm highlights on the top-left ridges of the waffle squares.
- Longer, softer shadow falloff toward the lower-right of each waffle
  peak.
- The syrup droplet and pooled syrup catch a small warm highlight
  consistent with the same upper-left source.
- Rim light along the plate's upper edge (cooler, subtle) suggesting a
  secondary fill light from the top, separating the plate from the black
  background.

## 8. Materials and textures

- **Waffle**: matte-crisp exterior with a fine visible crumb structure at
  the ridges, glossy syrup coating in the pockets (specular, wet-looking).
- **Butter pat**: semi-translucent, melting at the edges, glossy highlight
  on top.
- **Chocolate shavings**: matte-to-slightly-glossy, irregular curled
  shards, dark umber.
- **Berries**: raspberry — matte, deep red, visible drupelet texture;
  blueberry — glossy, near-black-blue with a light bloom highlight.
- **Ceramic plate**: matte stoneware-like glaze, warm gray, soft rim
  highlight.
- **Steam**: soft, translucent, feathered edges, no hard lines.
- **Nav pill**: frosted glass — translucent dark fill + blur + a hairline
  ~10–15%-opacity white border.
- **Gold button**: smooth gradient with a soft outer glow (bloom), no
  visible texture — reads as polished metal/lacquer, not matte.

## 9. Navigation elements

- Wordmark **"The Waffle House"** (left).
- Four links, in order: **Our Waffles**, **Café Experience**, **Menu**,
  **Locations**.
- One CTA button, right-aligned: **"Book a Table"** — pill, transparent
  fill, thin light-colored border, no fill/glow (contrast to the primary
  gold CTA in the hero body).
- No visible hamburger/menu icon in the reference (desktop-only comp) —
  the build adds one for narrow viewports since the page must be
  responsive, styled to match the glass-pill language.

## 10. Buttons and interactive elements

| Button | Style | Location |
|---|---|---|
| "Book a Table" | Outline pill, transparent bg, ~1px light border, white text | Nav, right |
| "Order Now" | Filled pill, gold vertical gradient, dark text, soft gold glow/bloom around it | Hero body, below subtitle |

Both are pill-shaped (`border-radius: 999px` equivalent). No visible
hover/active states in a static image — the build adds conventional
subtle hover feedback since these are real interactive elements, without
introducing animation beyond a simple transition (per the "no animations
this phase" rule, hover transitions are kept to instant/near-instant
state changes rather than motion effects).

## 11. All visible text (verbatim)

- Nav: `The Waffle House`
- Nav links: `Our Waffles`, `Café Experience`, `Menu`, `Locations`
- Nav button: `Book a Table`
- Headline: `The Art of` / `Belgian Waffles`
- Subtitle: `Handcrafted waffles with grast-with premium ingredients, our
  ineumatios, fresh coffee, and unforgettable experiences.`
  — **Note**: this sentence is grammatically broken / contains
  non-words ("grast-with", "ineumatios"), a known AI-image-generation
  text artifact. The build uses a corrected sentence of equivalent
  length/rhythm instead of reproducing nonsense words as real site copy:
  *"Handcrafted waffles with premium ingredients, artisan syrups, fresh
  coffee, and unforgettable experiences."* Documented here as a
  deliberate, disclosed deviation, not an oversight.
- Hero button: `Order Now`
- Badge: `4.5` / `Rating`
- Rotated caption 1: `Crafted Fresh Daily`
- Rotated caption 2 (arced): `Belgian • Handmade • Since 2026`

## 12. Build constraints and how they map to the above

- No external dependencies → no Google Fonts CDN link. Typography uses
  system font stacks chosen to approximate the reference as closely as
  possible offline: `Georgia, "Times New Roman", serif` for the display
  serif, `"Segoe UI", Helvetica, Arial, sans-serif` for body/UI text.
- All positions/sizes above are implemented with `%`, `vw`, `vh`, and
  `clamp()` — no fixed-pixel page width/height, no horizontal scroll at
  any viewport size.
- The badge text, both rotated captions, and all nav/hero copy are real
  HTML elements (not baked into any image) — only the photographic
  content (plate, waffle, syrup, steam, dust, berries) comes from cropped
  reference imagery, stored in `assets/`.
- The curved caption ("Belgian • Handmade • Since 2026") is built with an
  inline SVG `<textPath>` along an arc, matching the reference's visible
  curvature rather than approximating it as a straight rotated line.
