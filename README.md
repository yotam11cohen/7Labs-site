# 7Labs Health Website

Static website for 7Labs Health — a hair metabolomics longevity company.

## Local Preview

Open `index.html` directly in any modern browser. No build step required.

## Deploy to GitHub Pages

1. Create a GitHub repository and push all files to `main`:
   ```bash
   git init
   git add index.html styles.css main.js README.md
   git commit -m "initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
2. Go to **Settings → Pages → Source → Deploy from branch**
3. Select **main** branch, **/ (root)** folder → **Save**
4. Site goes live at `https://YOUR_USERNAME.github.io/YOUR_REPO/` within 2–3 minutes

## Deploy to Netlify

### Option A — Drag & Drop (fastest)
1. Log in at [netlify.com](https://app.netlify.com)
2. **Add new site → Deploy manually**
3. Drag the entire project folder into the upload area
4. Live instantly at a `*.netlify.app` URL

### Option B — Git Integration
1. Push files to a GitHub/GitLab/Bitbucket repo
2. Netlify → **Add new site → Import an existing project**
3. Connect your repo; set:
   - **Build command:** *(leave blank)*
   - **Publish directory:** `.`
4. Click **Deploy site**

### Custom Domain (Netlify)
1. **Domain settings → Add a domain**
2. Follow DNS configuration instructions
3. SSL certificate is automatically provisioned (free, via Let's Encrypt)

## Files

| File | Purpose |
|------|---------|
| `index.html` | Full single-page site — all 8 sections, all content |
| `styles.css` | All styles, CSS variables, responsive breakpoints |
| `main.js` | Scroll animations, FAQ accordion, counter animation, Chart.js |
| `README.md` | This file |

## Content Sources

All copy is derived from clinical research documents in `google-docs/`:
- **Grant Application** — mission, background, stress monitoring framework
- **IRB Application** — study design, ethics (Protocol HAIROMIC-7, Soroka University Medical Center)
- **CR1 MLAIA Report** — results, statistics (3,806+ features, 25 reversible signatures)
- **Sample Prep files** — methodology (1 cm = ~1 month of history)
- **Sample Analysis CSVs** — Chart.js data (real patient metabolite values)