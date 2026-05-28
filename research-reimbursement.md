# Natera (NTRA) — Reimbursement Deep Dive (Q1–Q5, Q19)

*Prepared 2026-05-28. Specialist supplement to the 5-year underwriting file. Each question answered with primary-sourced facts, an explicit confidence level, and citations. Estimates are labeled. Primary sources prioritized: SEC filings, CMS rulemaking/guidance, ACLA/CAP, earnings transcripts. Note: SEC.gov and CMS.gov coverage-database pages intermittently blocked direct fetch (HTTP 403/503); where the raw page could not be rendered, content is sourced from accessible mirrors (StockTitan SEC mirror, law-firm/360Dx/CMS-PDF summaries) and flagged accordingly.*

---

## Q19 — LOCK THE CURRENT ASP NUMBER (answered first; load-bearing for everything else)

**Verdict — the three figures, pinned:**

| Metric | Figure | Source (verbatim) |
|---|---|---|
| **Q4 2025 realized Signatera ASP** | **~$1,225** | Q4 2025 call: ASPs "rose by $20 sequentially," referenced at "$1,225 in Q4" (Chapman). [Motley Fool Q4 2025 transcript, 2026-02-26](https://www.fool.com/earnings/call-transcripts/2026/02/26/natera-ntra-q4-2025-earnings-call-transcript/) |
| **Q1 2026 realized Signatera ASP** | **~$1,250** | Q1 2026 call: "Signatera ASPs reached another high, now at roughly $1,250" (Chapman). [Motley Fool Q1 2026 transcript, 2026-05-07](https://www.fool.com/earnings/call-transcripts/2026/05/07/natera-ntra-q1-2026-earnings-call-transcript/) |
| **End-2026 ASP guide** | **~$1,275** | Q1 2026 call: management expects to "exit 2026 by roughly $1,275" (Brophy). The 2026 guide implies "an additional $30 ASP growth in 2026" off the ~$1,245–1,250 base. Same transcript. |

So the prior files were not contradictory — they were three different points in time. The correct mapping is: **$1,225 = Q4 2025 actual; $1,250 = Q1 2026 actual; $1,275 = end-2026 exit guide.** The long-term $2,000 target remains management's stated aspiration ("we think we are still on track," Chapman, Q1 2026) but is explicitly *long-term*, not in any near-term guide.

**Confidence: HIGH** (direct management quotes from both quarterly calls). One caveat: these are rounded figures management uses verbally; Natera does not publish Signatera ASP to the dollar in the press release tables, so treat ±$10–15.

---

## Q1 — SIGNATERA PAYER MIX

**Headline: Natera does NOT disclose a Signatera payer-mix breakdown (Medicare FFS / MA / in-network commercial / OON / self-pay) in the 10-K, 10-Q, or any investor slide.** The "35–45% Medicare exposure" figure in the prior file is an *unanchored estimate*. The best primary-source anchors available are indirect, and they point lower than the bull/bear midpoints assumed.

**What IS disclosed (primary sources):**

1. **Coverage status, not mix.** The FY2025 10-K states Signatera holds ADLT status and is Medicare-covered for CRC, MIBC, advanced breast (certain settings), advanced ovarian, NSCLC surveillance, and pan-tumor IO monitoring. It contains **no Medicare-as-%-of-revenue concentration figure** and no payer-mix table. ([StockTitan 10-K mirror](https://www.stocktitan.net/sec-filings/NTRA/10-k-natera-inc-files-annual-report-9c689b4cdac7.html); 10-K filing index [SEC](https://www.sec.gov/Archives/edgar/data/0001604821/000110465926020881/ntra-20251231x10k.htm))

2. **Best available volume anchor — the "non-covered bucket."** On the Q4 2025 call, Solomon Moshkevich stated **"30% to 35% [of Signatera tests] … fall into kind of the non-covered bucket."** ([Motley Fool Q4 2025 transcript](https://www.fool.com/earnings/call-transcripts/2026/02/26/natera-ntra-q4-2025-earnings-call-transcript/)). This is the single best management-sourced anchor. It implies **~65–70% of Signatera volume is in a covered indication** (Medicare-covered or commercial-following-Medicare). It does NOT directly give the Medicare *share* — "covered" includes commercial payers that follow the LCD via state biomarker laws.

3. **Medicare Advantage is a growth lever, not yet fully captured.** Both the Q4 2025 and Q1 2026 calls cite "expansion in Medicare Advantage volumes" and "more progress in the biomarker states" as the drivers of the ~$30 ASP guide — implying MA is currently *under*-reimbursed relative to FFS and is being actively converted. ([Q4 2025](https://www.fool.com/earnings/call-transcripts/2026/02/26/natera-ntra-q4-2025-earnings-call-transcript/))

**Best-sourced ESTIMATE of Signatera payer mix (LABELED ESTIMATE — confidence LOW–MODERATE):**
Triangulating from (a) Signatera's heavy skew to age-65+ oncology surveillance, (b) the ~30–35% non-covered bucket, (c) MA being a separate growth call-out, and (d) industry-typical oncology-MRD Medicare share:
- **Medicare FFS: ~30–40% of volume** (the core covered, best-paid segment; this is the population most exposed to PAMA/ADLT repricing).
- **Medicare Advantage / MAC-tied: ~10–15%** (growing; often pays at or below FFS, frequently the source of denials being worked down).
- **In-network commercial: ~20–30%** (covered indications under state biomarker laws / contracts).
- **Out-of-network commercial + uncovered indications: ~25–35%** (the bulk of the "non-covered bucket," paid at low realized rates or written down).
- **Self-pay/patient: low single digits** — the 10-K shows patient-direct revenue of only **$31.8M vs. $2,171.2M from insurance carriers** company-wide (~1.4%), so self-pay is immaterial to ASP. ([WebSearch of 10-K revenue disaggregation](https://www.sec.gov/Archives/edgar/data/0001604821/000110465926020881/ntra-20251231x10k.htm))

**Bottom line for the PAMA-downside thesis:** The "35–45% Medicare exposure" is *plausible but unproven*. The defensible statement is: **Medicare FFS (the only segment directly repriced by PAMA on the ADLT line) is most likely in the ~30–40% range, with MA adding another ~10–15% of indirectly-linked exposure.** The thesis should NOT lean on a precise figure; it should be framed as a range with the "non-covered bucket = 30–35%" as the one hard anchor.

**Confidence: LOW on the precise split; MODERATE on the bounding (Medicare FFS is a minority, not a majority, of volume).**

---

## Q2 — ADLT → PAMA REPRICING MECHANISM (step by step), then assess the report's claim

### (a) What is an ADLT and what protection does it confer?
An **Advanced Diagnostic Laboratory Test** is a CMS designation under PAMA (Social Security Act §1834A) for a single-laboratory test that is either (Route 1) a unique algorithm analyzing multiple biomarkers of DNA/RNA/proteins, or (Route 2) FDA-cleared/approved. The lab applies to CMS for the designation. Signatera was granted ADLT status in **June 2021**, with an initial CMS rate of **~$3,500** per recurrence-monitoring assay. ([Natera/PRNewswire 2021](https://www.prnewswire.com/news-releases/natera-awarded-advanced-diagnostic-laboratory-test-adlt-status-for-its-signatera-mrd-test-from-cms-301315276.html))

**Pricing protection:** A *new* ADLT is paid at its **actual list charge** for a **new ADLT initial period of three calendar quarters**. ([CMS CDLT final-rule fact sheet](https://www.cms.gov/newsroom/fact-sheets/medicare-clinical-diagnostic-laboratory-tests-payment-system-final-rule); [Foley Hoag PAMA final-rule summary](https://foleyhoag.com/news-and-insights/publications/alerts-and-updates/2016/june/pama-final-rule/))

### (b) How/when protection lapses and the test is repriced
After the three-quarter initial period, **payment is reset to the weighted-median private-payor rate** reported to CMS for that test. A **recoupment** applies if the actual list charge during the initial period exceeded **130% of the weighted-median private-payor rate** — CMS recoups the difference above the 130% threshold (recoupment does not apply if no private-payor data was reported during the initial period). ([Foley Hoag](https://foleyhoag.com/news-and-insights/publications/alerts-and-updates/2016/june/pama-final-rule/); [360Dx ADLT explainer](https://www.360dx.com/reimbursement-news/adlts-become-small-persistent-part-cms-reimbursement-landscape))

### (c) Data window and methodology
CMS sets the CLFS rate as the **volume-weighted median of all private-payor rates** (median of rates reported per test, weighted by volume per payer per lab). Data collection window is **Jan 1 – Jun 30** of the collection year; reporting follows; rates take effect the following Jan 1 — roughly a **9-month lag** from end of collection to rate implementation. ([Foley Hoag](https://foleyhoag.com/news-and-insights/publications/alerts-and-updates/2016/june/pama-final-rule/))

### (d) 15%/yr cap and the statutory-pause history
The phase-in cap on year-over-year CLFS reductions was **10%/yr for 2018–2020** and **15%/yr for 2021–2023** (and subsequent reductions). Congress has repeatedly **frozen** the cuts. The current law — **Consolidated Appropriations Act of 2026, §6226** — freezes CLFS rates and delays PAMA cuts **through December 31, 2026**. ([Telcor](https://telcor.com/en/news/consolidated-appropriations-act-signed-into-law-enacts-one-year-delay-of-clfs-cuts); [APS Medical Billing](https://apsmedbill.com/whitepapers/spending-package-officially-delays-pama-cuts))
- **New reporting/data window (post-pause):** labs collect **private-payor data Jan 1 – Jun 30, 2025**, report **May 1 – Jul 31, 2026**, and CMS uses that data to set **CLFS rates for 2027–2029, with reductions capped at 15%/yr per test.** ([WebSearch, multiple law-firm summaries citing CAA 2026](https://www.healthlawdiagnosis.com/2026/02/new-year-brings-old-obligations-with-a-recent-twist-pama-reporting-is-back/); [myadlm.org](https://myadlm.org/cln/the-lab-advocate/2026/march1/cms-opens-new-resources-ahead-of-2026-pama-reporting-window))

### (e) SALSA status — SUPERSEDED
**SALSA did not pass** (stalled on CBO cost, ~$6B/10yr). It has been **replaced** by the **RESULTS Act** (Reforming and Enhancing Sustainable Updates to Laboratory Testing Services), introduced **Sept 10, 2025** (S.2761 / H.R.5269; sponsors Tillis/Warnock, Hudson/Bilirakis/Fitzpatrick/Peters/Krishnamoorthi). RESULTS would **freeze CLFS rates 2026–2028**, set 2029–2032 rates off H1-2027 private-payor data drawn from **independent nonprofit claims databases** (not lab self-reporting), move to a **4-year cycle**, and **cap annual reductions at 5%** (no cap on increases). As of the source date it was **in early committee stage, not enacted** — the strategy is to fold it into a year-end healthcare package. ([Laboratory Economics](https://www.laboratoryeconomics.com/new-pama-reform-bill-would-freeze-clfs-rates-through-2028/); [Rep. Peters release](https://scottpeters.house.gov/2025/9/rep-peters-leads-colleagues-in-introducing-bill-to-protect-seniors-access-to-laboratory-testing))

### (f) Signatera Genome vs. legacy Signatera ADLT status
Legacy (exome-based) Signatera holds the original 2021 ADLT designation. **Signatera Genome** received Medicare coverage in **2025** (under the MolDx MRD LCD framework), but the public record does **not clearly confirm a separate, new ADLT designation/initial-period list-charge for Genome** distinct from the legacy assay. Because a new ADLT designation would reset a fresh 3-quarter list-charge window, this is materially important and is **currently unconfirmed** — flag as an open item. ([Natera Genome coverage release](https://www.natera.com/company/news/natera-announces-medicare-coverage-for-signatera-genome/))

### ASSESSMENT — Is the report's claim mechanically correct?
**The report's claim is directionally right but mechanically imprecise, and partly already obsolete.**

- **Correct:** PAMA *does* reprice an ADLT from its list charge toward the volume-weighted-median *private-payor* rate after the initial period, and that median includes Signatera's low-paying/OON tail, which sits well below $3,000. So the long-run CLFS rate gravitates toward realized commercial economics — the report's core intuition is sound.
- **Imprecise #1 — it's already happened, not a future cliff.** The >$3,000 ADLT rate is *not* still in force. Management explicitly states the **"ADLT surveillance [rate is] coming down"** while the **"adjuvant bundle rates [are] going up,"** and the two **"roughly net each other out."** ([Q4 2025 transcript](https://www.fool.com/earnings/call-transcripts/2026/02/26/natera-ntra-q4-2025-earnings-call-transcript/)). The repricing is being absorbed *now* and is already inside the ~$1,225→$1,275 ASP path. There is no separate undiscounted $3,000→$1,400 step-down event hiding in the future.
- **Imprecise #2 — the cap and freeze blunt the downside.** CLFS cuts are frozen through 12/31/2026; the next reductions (2027–2029) are capped at **15%/yr per test** and may be further softened or frozen by the RESULTS Act (5%/yr cap, claims-database methodology). The "compounded ~38% cut" downside scenario in the prior file assumes the full 15%/yr lands three years running with no reform — a tail, not a base case.
- **Imprecise #3 — bundling changes the unit being priced.** CMS moved part of MRD to a **bundled** pricing construct in early 2026; the ADLT line is no longer the whole story. The repricing risk is now spread across ADLT + bundle + commercial, and management's own framing is that it nets to roughly neutral.

**Net:** The report's *conclusion* — that realized Signatera ASP is structurally capped well below the headline ADLT rate, plausibly in the **$1,400–1,600** zone over five years rather than $2,000 — is **defensible and probably correct**, but the *mechanism* it attributes (a looming PAMA repricing of a still-live $3,000 rate) is largely **already in the numbers** and overstated as a discrete future shock. The realistic ASP ceiling is driven more by *mix and the non-covered bucket* (Q1, Q5) than by a future PAMA cliff.

**Confidence: HIGH on mechanism; MODERATE on the $1,400–1,600 ceiling (depends on mix conversion + RESULTS Act).**

---

## Q3 — LCD L38779 SURVEILLANCE FREQUENCY

**What L38779 says today (MolDx: Minimal Residual Disease Testing for Cancer, Palmetto GBA):**
- Covers MRD testing across the solid-tumor indications listed in Q1 (CRC, MIBC, breast, ovarian, NSCLC surveillance, pan-tumor IO monitoring).
- **Frequency is NOT a fixed hard numeric annual cap.** The policy ties covered testing frequency to **clinical guidelines** — MRD "may be ordered with a timing (up to 1 month difference) and frequency that matches NCCN guidelines for surveillance" (e.g., aligned to CEA surveillance in CRC). In practice that is roughly **every 3 months in years 1–2 and every 6 months in years 3–5** for CRC — i.e., ~4/yr early, tapering to ~2/yr. ([CMS L38779 / associated billing article A58434; Natera CRC clinician page](https://www.natera.com/oncology/signatera-advanced-cancer-detection/clinicians/crc-early-stage-cancer/)) *(Note: the CMS coverage-database pages returned HTTP 503 on direct fetch on 2026-05-28; frequency language is sourced from CMS-database search excerpts + Natera's clinician summary of the LCD. Confidence on the exact verbatim cap is therefore MODERATE — recommend a direct re-pull of L38779 v4 and article A58434 when CMS.gov is reachable.)*
- The MRD billing article generally sets **units of service = 1** per billed episode and limits repeat baseline/tumor-informed setup to once per cancer diagnosis absent new clinical change.

**Pending revision:** No publicly disclosed pending revision that *tightens* surveillance frequency as of May 2026. Recent MolDx motion has been **expansionary** — June 2025 Signatera Genome coverage, the May 2026 IMvigor011 MRD CDx approval, and the early-2026 bundled-pricing framework all *added* footprint. ([Q4 2025 / Q1 2026 commentary](https://www.fool.com/earnings/call-transcripts/2026/05/07/natera-ntra-q1-2026-earnings-call-transcript/))

**Volume/revenue sensitivity (LABELED ESTIMATE):**
The TAM in the reinvestment file assumes ~5–7 monitoring tests/patient-year in early years. The *actual* LCD-aligned (NCCN) covered frequency is already closer to **~4/yr in years 1–2, ~2/yr thereafter** — so the TAM's high end (6–7/yr) is *already partly aspirational vs. what Medicare covers.* If a future revision hard-capped surveillance at **4/yr** versus a modeled **5–7/yr blended**:
- Per-patient covered test-years compress roughly **~20–35%** in the high-frequency early window.
- Applied across the prevalent CRC surveillance pool alone, that is on the order of **~$0.5–1.0B of 2030 revenue at risk** vs. the aggressive TAM (consistent with the prior file's ~$1B figure, but note the *baseline* should already reflect ~4/yr, so the *incremental* hit from a formal cap is smaller — closer to **$300–600M** of genuinely new downside).

**Net:** The "5–7/yr" TAM assumption is the more questionable input — Medicare's covered frequency is effectively NCCN-tapered (~4 then ~2), so part of the "frequency-cap risk" is **already realized in current ASP/volume**, not a future shock.

**Confidence: MODERATE** (LCD ties to NCCN rather than a single number; exact verbatim L38779 cap not re-confirmed live due to CMS 503).

---

## Q4 — REIMBURSEMENT GLOSSARY (for non-specialists)

- **PAMA** — *Protecting Access to Medicare Act of 2014.* Requires Medicare's lab fee schedule to be reset to **private-payor market rates** (volume-weighted median of what commercial insurers actually pay), via periodic data reporting. The source of Signatera's structural rate-toward-commercial gravity. *Bears on: all Natera CLFS-priced tests (Signatera, Panorama, Horizon).*
- **CLFS** — *Clinical Laboratory Fee Schedule.* The Medicare price list for lab tests; PAMA sets its rates. *Bears on: every Natera test Medicare pays for.*
- **ADLT** — *Advanced Diagnostic Laboratory Test.* A premium PAMA designation for unique single-lab tests; pays at the lab's **actual list charge for the first 3 calendar quarters**, then drops to the weighted-median private-payor rate (with a 130%-recoupment guardrail). *Bears on: Signatera (granted 2021, initial ~$3,500); the lever behind the ">$3,000" headline rate.*
- **MolDx** — *Molecular Diagnostics Program*, administered by MAC Palmetto GBA. Reviews molecular-test technical dossiers and issues coverage. Assigns **Z-codes**. *Bears on: Signatera, Prospera, Panorama-adjacent molecular tests — the gatekeeper for oncology MRD coverage.*
- **LCD** — *Local Coverage Determination.* A MAC's binding coverage policy for its region (e.g., **L38779** for MRD). Defines covered indications and frequency. Commercial payers in **state biomarker-law states** often follow the LCD. *Bears on: Signatera coverage breadth and surveillance frequency.*
- **Crosswalk vs. Gapfill pricing** — Two CMS methods to price a *new* CLFS code before private-payor data exists. **Crosswalk** = price it to an existing comparable test. **Gapfill** = each MAC sets a local price in year 1, then CMS sets a national median in year 2. *Bears on: new Natera CPT/PLA codes (e.g., new Signatera variants) before they have an established rate.*
- **Z-codes** — MolDx-assigned unique identifiers (DEX registry) appended to claims so a MAC can tell exactly which proprietary assay was run. *Bears on: every MolDx-covered Natera molecular test.*
- **PLA / CPT codes** — *Proprietary Laboratory Analyses* (PLA, a CPT subset) are test-specific billing codes (e.g., a Signatera-specific PLA code); generic **CPT** codes are shared. PLA codes let CMS price a single proprietary assay. *Bears on: Signatera, Panorama (each has assigned codes used for billing).*
- **ICD-driven medical-necessity denials** — Claims are denied when the diagnosis code (**ICD-10**) on the order doesn't match a covered indication in the LCD (e.g., ordering Signatera for a tumor type/stage outside L38779). This is a primary driver of the **"30–35% non-covered bucket."** *Bears on: Signatera realized ASP most acutely (off-label/uncovered ordering), and Panorama (out-of-guideline NIPT).*

---

## Q5 — CONTRACTED vs. REALIZED ASP DECOMPOSITION

**The question: why is realized Signatera ASP (~$1,250) so far below the >$3,000 ADLT rate and below contracted commercial rates?** The 10-K does **not** publish a variable-consideration bridge by product, so an exact decomposition is not disclosed. The 10-K does confirm revenue is recognized **net of estimated implicit price concessions / contractual allowances** (insurance-carrier product revenue $2,171.2M; patient-direct only $31.8M company-wide). ([10-K via SEC index](https://www.sec.gov/Archives/edgar/data/0001604821/000110465926020881/ntra-20251231x10k.htm)) The decomposition below is therefore a **LABELED ESTIMATE** built from the disclosed anchors.

**Signatera gap, $3,000+ headline → ~$1,250 realized (estimated attribution):**
1. **The headline rate is no longer ~$3,000 across the book.** The ADLT *surveillance* rate has been coming down and much volume now flows through *bundled* adjuvant pricing — so the "$3,000" comparator overstates the live contractual ceiling. (Largest single reason the gap looks so wide.) ([Q4 2025 transcript](https://www.fool.com/earnings/call-transcripts/2026/02/26/natera-ntra-q4-2025-earnings-call-transcript/))
2. **Uncovered indications / ICD medical-necessity denials — the "30–35% non-covered bucket"** (Moshkevich, Q4 2025): roughly a third of tests are run in settings Medicare/commercial don't cover, collecting little to nothing. This is the **biggest realized drag** and the biggest *upside* lever — Moshkevich sized broader coverage at "a couple hundred million dollars in gross profit."
3. **Out-of-network commercial** — no contract, low/zero allowed amount, high write-down.
4. **Medicare Advantage under-collection** — MA plans pay below or deny relative to FFS; being actively worked down (the explicit driver of the +$30 2026 guide).
5. **Bad debt / patient responsibility** — smaller, given patient-direct revenue is ~1.4% of total.

So the gap is **mostly "uncovered/OON + a lower true contractual ceiling," NOT primarily classic bad debt.**

**Panorama gap, ~$850–900 contracted → ~$400 realized:** Same structure, more severe on the *coverage/medical-necessity* axis — average-risk NIPT and microdeletions remain inconsistently covered, so a large share of claims are allowed at well below contracted rates or denied (CMS aneuploidy/microdeletion benchmark is only **~$802**, below the "contracted" $850–900, and expanded carrier screening ~$2,450 is often non-covered). ([10-K pricing benchmarks via StockTitan mirror](https://www.stocktitan.net/sec-filings/NTRA/10-k-natera-inc-files-annual-report-9c689b4cdac7.html))

**Implication for the ASP path (the load-bearing conclusion):**
ASP climbs to $1,500+ **primarily by converting the non-covered bucket and MA into paid claims (mix), NOT by re-rating already-contracted business upward.** Management's own +$30/yr guide is built from "MA volumes" + "biomarker states" (i.e., *coverage conversion*), and it explicitly notes ADLT-rate increases are roughly offset by bundling. PAMA can only *pressure* the contracted ceiling, not lift it. **Therefore: the realistic route to $1,500+ is coverage breadth × mix, and it is gradual (~$25–50/yr). A jump to $2,000 via contracting alone is not supported by the disclosures.** This reinforces the Q2 conclusion that $1,400–1,600 is the credible 5-year band.

**Confidence: MODERATE** (direction and dominant drivers are well-supported by management quotes; the precise dollar attribution is estimated because Natera does not disclose a per-product allowance bridge).

---

## Cross-cutting takeaways for the verdict
1. **Best Medicare-exposure anchor:** there is no disclosed figure; the one hard data point is **"30–35% of Signatera tests are non-covered"** (Moshkevich, Q4 2025), implying Medicare FFS is a **minority (~30–40%)** of volume, not a majority. The "35–45% Medicare exposure" is an unproven estimate — usable only as a range.
2. **PAMA/ASP-ceiling claim:** **holds up as a conclusion, fails as a mechanism.** The repricing is largely *already absorbed* (ADLT-down/bundle-up netting to ~neutral), is *frozen through 2026*, is *capped at 15%/yr* for 2027–2029, and may be *further softened by the RESULTS Act* (5%/yr cap). The $1,400–1,600 realistic ceiling is driven by **mix and the non-covered bucket**, not a future $3,000 cliff.
3. **Locked ASP:** **Q4 2025 = ~$1,225; Q1 2026 = ~$1,250; end-2026 guide = ~$1,275; long-term target $2,000 (aspirational, not guided).**
4. **Open items to re-pull when CMS.gov is reachable:** (a) verbatim L38779 v4 frequency language + article A58434 units/year; (b) confirmation of whether Signatera Genome received a *separate* ADLT designation (would reset a new list-charge window — materially bullish if so).
