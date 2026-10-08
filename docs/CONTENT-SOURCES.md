# Content evidence

Reviewed 2026-10-08 against analytics main commit [7b98651587f8a166511c4418ad8642d37952db63](https://github.com/shachargivon-ops/Data-Analytics-Portfolio/tree/7b98651587f8a166511c4418ad8642d37952db63). Paths below are in that repository.

| Project | Evidence | Claim limits |
| --- | --- | --- |
| Superstore | `power-bi/superstore-analysis/README.md`, final PDF and `assets/executive-summary.png` | Eight pages. $2.30M sales, $286.4K profit, 12.5% margin, 5,009 orders are displayed 2011–2014 results, not independently recalculated. DAX references are verified; complete formulas remain unexported. No drill-through claim. |
| NFL Python | `python/nfl-quarterback-analysis/README.md`, corrected notebook and `assets/efficiency-comparison.png` | 75 eligible passing players; games >5, attempts >30 per qualifying observed season, at least five qualifying seasons. 2001–2023 excluding 2007. Rodgers pooled rating 103.81, Mahomes pooled ANY/A 7.77, Brady 599 qualifying-sample TD: incomplete career windows, not universal records. ANY/A includes sacks in its denominator. Corrected notebook uses pandas, NumPy and Matplotlib; Seaborn is not claimed. |
| WideWorldImporters | `sql/wideworldimporters-analysis/README.md`, original `SQLQuery1  Project 2  SQL Data Analysis (Shachar Givon).sql` | Ten exercises. Potential inactivity compares time since last customer order with 2× average gap, relative to latest dataset order date. It is a rule for investigation, not an executed result or validated churn model. |
| NFL SQL | `sql/nfl-database/README.md`, original `Project 1 – Table Design & Cretaion (Shachar Givon).sql` | Five tables, declared primary/foreign keys. Foreign keys nullable; SackStats.PassingStatID is not unique, so no enforced one-to-one relationship. Execution/data loading unvalidated. |

## Image integrity

PNG images are byte-for-byte copies from the cited source commit. SHA-256:

- `images/projects/superstore-executive-summary.png`: `5db50b86e95296c8ffed1128b656af651784a5cc1cc2d3bda9aae98bdd748623` (2952×1692).
- `images/projects/nfl-efficiency-comparison.png`: `ace009a9da6a268be9ca20479b121ad3180f60c87931de61f45656c96b3972cb` (1579×858).

`sql-business-analysis.svg` illustrates the SQL workflow. `nfl-database-schema.svg` illustrates table definitions and reference directions. Both are visibly labeled illustrations, not dashboard screenshots or query outputs. Old project assets are retained unused where unsuitable.

Personal background, Munich, roles and email come from the owner's request. No invented analytics employment, certification, expert rating, phone or LinkedIn URL is added.

Excel capabilities (Microsoft Excel, Pivot Tables, INDEX/MATCH, VLOOKUP, filtering and analysis) were supplied explicitly in the owner’s final refinement request. They are presented as practical skills, without expert-level, VBA, Power Pivot or automation claims.
