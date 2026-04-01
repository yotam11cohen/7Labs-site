# Prompt: Build a Static Website for 7Labs Health

## Context
The user needs a ready-to-use English prompt that instructs an AI assistant (or developer) to build a clinical/patient-facing static website for "7Labs Health", styled after https://www.trudiagnostic.com/, using content extracted from the `google-docs/` directory.

Refinements added:
- Font pairing: DM Sans (headings) + Inter (body)
- Brand voice guide
- Custom tagline
- FAQ section
- SEO & Open Graph meta tags
- Deploy instructions (README.md)
- /ui-ux-pro-max skill usage

---

## The Prompt

```
Before writing any code, invoke the `/ui-ux-pro-max` skill to guide all design decisions — color palette, typography, layout, spacing, animation style, and component style. Follow its output exactly when making visual and UX choices for this site.

---

You are a senior frontend developer. Build a complete, production-ready **static website** for a health diagnostics company called **7Labs Health**, using only **plain HTML, CSS, and vanilla JavaScript** (no frameworks, no build tools).

---

## Brand Voice

Write all copy in a tone that is:
- **Professional but approachable** — speak to a patient or curious individual, not a scientist
- **Jargon-free** — translate technical terms into plain language
- **Trustworthy and empowering** — the reader should feel informed, not overwhelmed
- **Forward-looking** — emphasize longevity, health optimization, and prevention

Hero tagline: **"Revolutionizing Longevity Through Hair Metabolomics"**

---

## Design Reference

Model the visual design and layout closely after https://www.trudiagnostic.com/:
- Clean, modern, premium health/science aesthetic
- Dark navy or deep blue primary color scheme with white/light accents
- Large hero section with bold headline, subheadline, and a clear CTA button
- Smooth scroll, sticky navigation bar, section-based layout
- **Typography**: Use Google Fonts — "DM Sans" for all headings, "Inter" for all body text
- Consistent card-based layouts for science and results sections
- Mobile-responsive (use CSS Grid and Flexbox)
- Subtle animations: fade-in on scroll using Intersection Observer API

---

## Content Source

Extract and use content from the following files in the `google-docs/` directory:

| File | Use For |
|------|---------|
| `1.Grant Application.docx` | Mission statement, scientific background, company purpose |
| `2.IRB application.docx` | Study design, ethical framework, clinical credibility |
| `3 subject clinical data.xlsx` | Key statistics for the "By the Numbers" section |
| `4a.Sample Prep plan.csv` / `4b.Sample Prep Report.pdf` | Methodology section — how samples are processed |
| `5a–5e` (Sample Analysis CSVs + Gmail PDF) | Science section — analytical methods, PCA, HILIC/HSST3 |
| `6 CR1 MLAIA Report.pdf` | Results/findings highlight section |
| `6a. Normalized_Data_combined.xlsx` / `6b. diff_analysis_normalized_combined.xlsx` | Data visualization section — summary stats and charts |

Read each file, extract the most patient-friendly, compelling facts, and weave them into the site copy. Simplify scientific language for a general clinical audience.

---

## Required Pages / Sections (single-page layout, scroll-based)

### 1. Navigation Bar (sticky)
- Logo: "7Labs Health" (text-based or simple SVG)
- Nav links: Home, About, Science, Results, FAQ, Contact
- CTA button: "Get Tested" (styled prominently)

### 2. Hero Section
- Headline: **"Revolutionizing Longevity Through Hair Metabolomics"**
- Subheadline drawn from grant application mission (patient-friendly)
- Two CTA buttons: "Learn More" (scroll) and "Get Started"
- Background: dark gradient or abstract science-themed SVG

### 3. About / Mission Section
- Company mission and vision (from Grant Application)
- 3-column feature cards: Why 7Labs, What We Test, Who We Serve
- Team credibility signal (IRB approval mention)

### 4. Science / Methodology Section
- Step-by-step process: Sample Collection → Preparation → Analysis → Report
- Draw content from Sample Prep files and Sample Analysis files
- Use icons + short descriptions per step
- Small PCA scatter chart rendered with Chart.js from the PCA CSV data (files 5b or 5d)

### 5. Results / Data Section
- Key findings from `6 CR1 MLAIA Report.pdf`
- Summary statistics from `Normalized_Data_combined.xlsx`
- Display as: stat counters, a simple bar chart (Chart.js), or highlight cards
- Note on differential analysis from `diff_analysis_normalized_combined.xlsx`

### 6. "By the Numbers" Bar
- Pull 3–5 compelling numbers from the clinical data (e.g., N subjects, markers analyzed, accuracy %)
- Full-width dark banner with large animated counter numbers

### 7. FAQ Section
- 5–7 common questions a patient might ask (e.g., "How do I submit my sample?", "What can hair metabolomics reveal?", "Is this test covered by insurance?")
- Accordion-style expand/collapse using vanilla JS
- Content drawn from IRB and grant application where possible

### 8. Contact / CTA Section
- Headline: "Ready to Get Tested?"
- Simple contact form (name, email, message — use mailto or Formspree, no backend)
- Footer with copyright "© 2025 7Labs Health"

---

## Technical Requirements

- Single `index.html` with linked `styles.css` and `main.js`
- No external dependencies except: Google Fonts CDN, Chart.js CDN
- Smooth scroll behavior between sections
- Intersection Observer API for scroll-triggered fade-in animations
- Accordion FAQ with vanilla JS
- Responsive breakpoints: mobile (< 768px), tablet (768–1024px), desktop (> 1024px)
- Semantic HTML5 (`<header>`, `<section>`, `<article>`, `<footer>`, `<nav>`)
- Color palette:
  - Primary: `#0A1628` (deep navy)
  - Accent: `#2563EB` (electric blue)
  - Highlight: `#10B981` (teal/green for CTAs)
  - Text: `#F8FAFC` on dark, `#1E293B` on light

### SEO & Open Graph
Add the following in `<head>`:
- `<title>7Labs Health — Revolutionizing Longevity Through Hair Metabolomics</title>`
- `<meta name="description">` — 150-char summary of the site purpose
- Open Graph tags: `og:title`, `og:description`, `og:type`, `og:url`, `og:image`
- `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Canonical URL tag

---

## Deliverables

1. `index.html` — full site structure and content
2. `styles.css` — all styling, responsive breakpoints
3. `main.js` — scroll animations, counter animations, FAQ accordion, chart initialization
4. `README.md` — deployment instructions for GitHub Pages and Netlify (step-by-step)

Start by reading the google-docs files to extract content, then build the site section by section.
```
