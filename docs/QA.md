# Verification — 2026-10-08

## Passed

- Four project cards and numerical claims checked against analytical sources; analysis files unchanged.
- All four README links, corrected notebook, PDF, two SQL links, GitHub profile/portfolio, attribution and existing Pages URL return HTTP 200; see `link-checks.json`.
- Internal anchors resolve to unique IDs; all local assets and license exist. PNG dimensions/hashes verified.
- One H1, semantic landmarks, English language, viewport, title, description, canonical and Open Graph metadata.
- Images have alt text; noncritical images lazy load. No fake contact form/phone, lorem ipsum, example dates, dead buttons or pagination remain in public HTML.
- JavaScript syntax checked with `node --check`; `git diff --check` passes. Original licenses/assets preserved.

## Accessibility and responsive implementation

Skip link, native links/buttons, visible focus, aria-expanded/controls, Escape with focus restoration and reduced-motion rules implemented. Navigation remains visible without JavaScript. No external fonts or legacy JS libraries load.

CSS defines two-column desktop hero/cards, single-column hero/cards at ≤760px, two-column tablet skills and single-column skills at ≤380px. Shrinkable grid tracks and responsive images support narrow screens. Buttons have 44px minimum height. These are source-reviewed behaviors, not observed browser test results.

Main normal-text color pairs were calculated against their backgrounds and exceed WCAG AA 4.5:1. Focus states are provided; this is not a full accessibility certification.

## Open browser checks

Preview browser timed out connecting to the local HTTP server; its security policy rejected file URLs. No screenshots were produced or fabricated. Rendering, browser image loading, console messages, keyboard interaction, active-section navigation and horizontal overflow remain unverified interactively.

When preview access or deployment is available, test 360, 390, 768, 1024 and 1440px: no horizontal scrolling, readable text, four cards and scaled images. Test Menu/Close, Escape, Tab/Enter, skip link, anchors and independent source links. Check console/network errors and reduced motion. Capture genuine desktop/mobile screenshots.

LinkedIn needs the owner's exact URL only if desired. DAX formula exports and SQL execution remain analytical evidence limitations; the website qualifies these claims.

## Calculated contrast

- #122d40 on #ffffff: 14.24:1
- #536675 on #ffffff: 5.96:1
- #536675 on #f5f7f8: 5.54:1
- #087b79 on #ffffff: 5.10:1
- #087b79 on #f5f7f8: 4.74:1
- #b9cbd3 on #122d40: 8.51:1
- #a6c1cb on #122d40: 7.53:1
