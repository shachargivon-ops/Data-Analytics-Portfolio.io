# Shachar Givon — Data Analyst Portfolio Website

A static portfolio for Junior Data Analyst and Data/BI Analyst opportunities in Munich and across Germany. Four evidence-based projects link to the authoritative [analytics repository](https://github.com/shachargivon-ops/Data-Analytics-Portfolio).

**Existing live site:** https://shachargivon-ops.github.io/Data-Analytics-Portfolio.io/

The redesign is proposed on `feature/professional-portfolio-website`; Pages serves the existing main deployment until the owner reviews and merges the PR.

## Preview and structure

No production build, packages or external dependencies are needed. Serve the repository root with `python -m http.server 8000`, then visit `http://localhost:8000/`.

- `index.html`: hero, projects, skills, background and contact.
- `assets/css/portfolio.css`: responsive design, focus and reduced-motion rules.
- `assets/js/portfolio.js`: progressive mobile menu and active section navigation.
- `images/projects/`: two genuine images and two labeled source-derived SQL illustrations.
- `generic.html`, `elements.html`: redirects preserving former template URLs.
- `docs/CONTENT-SOURCES.md`: evidence and claim limits.
- `docs/QA.md`, `docs/link-checks.json`: checks and open browser validation.
- `docs/DEPLOYMENT.md`: verified Pages deployment.

Cards open project READMEs; separate source links open the PDF, corrected notebook or SQL. Contact uses `mailto:shachar.givon@gmail.com`. LinkedIn is omitted until its exact URL is supplied and verified.

## Maintaining evidence

Review analytical sources before changing claims. Preserve NFL population context; do not add DAX formulas, drill-through claims, executed SQL results or screenshots without evidence. Genuine PNGs are copied unchanged; SQL visuals are illustrations. The analytical repository is unchanged.

## Attribution

Adapted from **Massively by HTML5 UP**, created by AJ / @ajlkn, under [CC BY 3.0](LICENSE.txt). Original `LICENSE.txt`, `README.txt`, template assets and third-party notices remain. The page uses system fonts and its small new CSS/JavaScript; legacy dependencies are not loaded.
