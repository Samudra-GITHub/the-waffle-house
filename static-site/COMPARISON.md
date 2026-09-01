# Final Comparison Notes

Compared against `referrence/Gemini_Generated_Image_kkjfexkkjfexkkjf.png` throughout
implementation. Summary of the review process and what remains different.

## Review rounds

**Round 1** — first implementation pass, compared via screenshot + DOM geometry
at desktop width. Found and fixed the three most noticeable issues:

1. `.hero__copy` had `max-width: 34ch`. `ch` resolves against the *element's
   own* font-size (the body's 17px), not the 91px headline inside it — this
   collapsed the copy column to ~312px and forced "The Art of Belgian
   Waffles" to wrap onto four lines instead of two. Removed the constraint;
   the grid column width already does the job correctly.
2. The "Crafted Fresh Daily" caption's position was derived from the wrong
   edge of its source bounding box, placing its rotated anchor point inside
   the "4.5 / Rating" badge circle — the two visibly overlapped. Re-measured
   both elements' bounding boxes directly from the reference PNG and
   repositioned both (badge tightened to its actual circle bounds, caption
   moved below-left of it).
3. The arced caption ("Belgian • Handmade • Since 2026") was built with
   `text-anchor="middle"` + `startOffset="50%"`, which centers the string on
   the path's midpoint — pushing the first half of the text to the left of
   the path's start, where it was clipped by the SVG's default
   `overflow: hidden`. Only "…ade • Since 2026" was visible. Switched to
   `text-anchor="start"` + `startOffset="0%"` and added an explicit
   `overflow="visible"` on the `<svg>`; the full caption now renders.

**Rounds 2–3** — re-verified at desktop (1366×768, same 16:9 aspect as the
1920×1080 comparison target — see *Verification note* below), mobile
(375×812), and via precise DOM `getBoundingClientRect()` measurements
against the percentages derived in `STUDY.md` §2. No further structural
issues found; badge/caption no longer overlap, headline wraps correctly at
every tested width, no horizontal scroll at any width from 375px to 1920px.

Rounds 4–5 were not needed — the definition of done (page visually matches
at a glance, no unresolved layout/typography/spacing issues) was reached
after round 1's fixes.

## Verification note — screenshot tool limitation

The comparison workflow calls for a 1920×1080 screenshot. In this sandbox,
capturing a screenshot at a **custom viewport size that exceeds the Browser
pane's own physical size** (1920×1080 does; 1366×768 does not) produces a
corrupted capture for this specific static file server — the DOM reports
correct full-size layout (`getBoundingClientRect()` on `<html>`, nav, hero,
etc. all confirm exact 1905×1080 geometry, matching the CSS design 1:1) but
the returned screenshot image only shows a small top-left fraction of the
page. This reproduced consistently across many fresh tabs and retries, so
it's a tool/environment issue, not a page bug.

Since 1366×768 shares 1920×1080's exact aspect ratio (both 16:9) and the
page is built entirely with fluid `%`/`vw`/`clamp()` units — confirmed via
DOM measurement to scale linearly and proportionally between the two sizes
— the visual comparison in this document was performed at 1366×768 as a
faithful stand-in, cross-checked against literal 1920×1080 `getBoundingClientRect()`
output for every major element (nav inset, title box, visual column, badge,
captions) to confirm the percentages hold at the actual target size. To
view natively, open `index.html` directly in any browser and resize the
window — the layout is responsive, not a fixed 1920×1080 target.

## Known, disclosed differences from the reference

- **Subtitle copy corrected.** The reference's subtitle contains
  AI-generation text artifacts ("grast-with premium ingredients, our
  ineumatios") — non-words, not a real sentence. Reproducing them verbatim
  as shipped site copy would be a mistake, not fidelity. The build uses:
  *"Handcrafted waffles with premium ingredients, artisan syrups, fresh
  coffee, and unforgettable experiences."* — matching length, rhythm, and
  every real word from the original. Documented in `STUDY.md` §11.
- **Visible seam on the plate image.** Per the "do not bake text into
  images" rule, the baked-in "Belgian • Handmade • Since 2026" caption and
  a stray "…ly" fragment (end of "Crafted Fresh Daily") were removed from
  the cropped photo via a flat-color inpaint rather than left in as
  unselectable image text (that caption is now real HTML/SVG text
  instead). The inpainted rectangle's edge is faintly visible as a subtle
  tone break in the lower-right of the plate photo. Fixing this seamlessly
  would need generative inpainting, out of scope for a static/no-dependency
  build.
- **Nav hamburger icon.** Not present in the reference (a desktop-only
  comp), added for viewports under 1024px since the page must be
  responsive down to mobile widths.
- **No web fonts.** No external dependencies are allowed, so there's no
  Google Fonts request. Typography uses system serif/sans stacks
  (`Georgia`/`Times New Roman` and `Segoe UI`/`Helvetica`/`Arial`) chosen to
  read as close as possible to the reference's Cormorant-like serif and
  humanist sans, but the exact letterforms will differ from machine to
  machine depending on installed fonts.
- **Curved caption is a very gentle arc**, matching the reference's own
  subtle curvature (a large-radius arc, not a tight bend) — at a glance it
  reads as slightly rotated text rather than an obviously arced one, same
  as the source.

## What matches closely

Nav pill glass treatment and inset, brand wordmark, all four nav links and
their order, "Book a Table" outline button, near-black background palette,
headline copy/two-line break/serif treatment, subtitle copy length and
color, gold gradient "Order Now" pill with glow, the photographic
composition (drip, steam, cocoa dust, plate, badge, both captions, sparkle)
assembled from real reference-image crops at proportionally correct
positions, and full responsiveness with zero horizontal scroll from 375px
to 1920px+.
