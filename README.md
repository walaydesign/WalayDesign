# Walay Design — Portfolio (Bootstrap 5 · SCSS · Swiper · JS)

A framework-free build of the Walay portfolio kit, built on **Bootstrap 5** for
layout, **Swiper** for the testimonials carousel, **SCSS** for the brand styling
and **vanilla JavaScript** for behaviour. No React, no Babel.

## Files
| File | Role |
|------|------|
| `index.html` | Full static markup. Layout uses Bootstrap's grid (`container` / `row` / `col-*`); brand components keep their custom classes. CDN links for Bootstrap 5 + Swiper are in the `<head>`/footer. |
| `styles.scss` | **Authored source.** SCSS with variables, nesting, a `trans()` transition mixin and a `cut()` cut-corner radius mixin. |
| `styles.css` | **Compiled output** that `index.html` links. Regenerate after editing the SCSS. |
| `script.js` | Vanilla JS: header docking, smooth-scroll nav + scroll-spy, language menu, **Swiper** init for testimonials (autoplay + click-to-go on the people list), contact-form toast. |

## Libraries (CDN)
- **Bootstrap 5.3** — grid + reboot. Brand `styles.css` loads *after* Bootstrap so brand rules win.
- **Swiper 11** — the “WHAT CLIENTS SAID” carousel (loop + 6s autoplay, pauses on hover). The left people list acts as custom navigation (click → `slideToLoop`).

## Build the CSS
```bash
sass styles.scss styles.css        # one-off
sass --watch styles.scss styles.css # watch while editing
```
The SCSS keeps the design-system tokens as CSS custom properties via
`@import url("../../colors_and_type.css")`; fonts and images resolve from
`../../fonts/` and `../../assets/` (same paths as the React kit).

## Notes
- **Works** gallery: tab filters removed; every card is a 4:3 image with the
  real project photo and an amber caption hanging below it.
- Interactions degrade gracefully — with JS disabled you still get the full
  static page (first testimonial shown, all works visible, links inert).
