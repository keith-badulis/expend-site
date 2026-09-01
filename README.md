# eXpend Landing Page (`expend-site`)

Official static landing page and privacy policy website for **eXpend: Make Budgeting a Habit**.

## Tech Stack
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Routing**: React Router 7 (`BrowserRouter` for clean, SEO-friendly URLs)
- **Styling**: Pure CSS Modules & Tokens (Dark Mode `#1F2A47`, Accent `#4C74DB`, Outfit Font)
- **Deployment**: Cloudflare Workers / Pages (`wrangler deploy`)

## Key Sections
1. **Hero**: Tagline "Make Budgeting a Habit", description, Google Play & App Store badges, and app screenshot with geometric accent outlines.
2. **Features**: Highlights of multi-account tracking, goals, debt & liability management, recurring planned payments, templates, 100% offline local storage (Realm), and category budget planning.
3. **Reviews**: 5-star user testimonials from store reviewers.
4. **Download CTA**: Reiteration banner with store badges and app icon.
5. **Privacy Policy**: Full ported policy at `/privacy-policy` with direct email contact (`hello@subdial.dev`).

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Deploy to GitHub Pages
```bash
npm run deploy
```

---
Developed by **Subdial**.
