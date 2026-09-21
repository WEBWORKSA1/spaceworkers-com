# SpaceWorkers.com — Concept, Revenue Model & Phase-wise Build Prompt

## 1. The winning idea

**SpaceWorkers.com = the career, talent and community hub for the space economy.**
Jobs directory + salary/career content (SEO + AdSense) + talent network (lead gen) + employer plans (cash) + contests & video (audience + sponsors) + donations.

Why this idea beats the alternatives for this domain:

| Candidate idea | Search demand | Monetization ceiling | Build cost | Verdict |
|---|---|---|---|---|
| Space news blog | High, but owned by Space.com/SpaceNews | AdSense only, low RPM | Low | Commodity — no moat |
| Astronaut / space fan community | Medium | Merch + ads | Medium | Weak buyer intent |
| **Space careers + talent network** | High ("space jobs", "aerospace salary", "how to work at NASA/SpaceX") | Job posts, placement fees (15–25% of salary), sponsorships, ads | Low (static) | **Winner — the domain name literally says it** |
| Space staffing agency only | Low organic | High per deal | High (people-heavy) | Folded in as "Talent Search" |

Market facts that support it:
- Global space economy: **$686B in 2025, +12% YoY; commercial $544.3B (79%)** — Space Foundation, July 2026.
- **26,000+ space jobs added** in one year across US, Europe, Japan, India; UK space workforce +19% YoY — Space Foundation via Payload (Oct 2024).
- Average space-industry salary **$110,317** (Space Crew, 807 submissions) → a single placement fee at 15% ≈ **$16.5K**.
- Documented "experience cliff": shortage of mid-career systems/flight-software/GNC engineers — employers pay to fill these.

## 2. Revenue model (Year-1 targets — assumptions, not guarantees)

| Stream | Assumption | Monthly at month 12 |
|---|---|---|
| Google AdSense | 50K pageviews × $10–20 RPM (careers/education niche) | $500–$1,000 |
| Job posts / featured | 20 posts × $250 avg | $5,000 |
| Talent Search placements | 1 hire / quarter × 15% × $130K | ~$6,500 (averaged) |
| Newsletter + display sponsors | 4 issues × $250 + 1 display $300 | $1,300 |
| Contest sponsorship | $5K–$15K per season, 2 seasons/yr | ~$1,250 |
| YouTube | 100K views × $4–8 RPM | $400–$800 |
| Donations | Small, but funds prizes & credibility | $200–$1,000 |
| **Total** | | **≈ $15K–$17K/mo** |

**Key insight:** AdSense is the smallest line. The money is in employers (placements + featured posts). Every page is therefore built to funnel traffic into the talent network and the hiring brief. Ad slots that are not yet running AdSense automatically become "Advertise here" house ads that sell direct sponsorships.

## 3. Phase-wise build prompt (copy-paste each phase into an AI builder)

### Phase 0 — Foundation
> Build a static, dependency-free website for **SpaceWorkers.com** deployable on the free tier of GitHub Pages. Use semantic HTML5, one shared stylesheet (`assets/css/style.css`), and three scripts: `config.js` (all editable settings — AdSense ID, GA4, donation links, social links, form alias), `data.js` (employers, salaries, videos, contests, programs) and `main.js` (shared header/footer injection and all interactivity). Dark space theme with an animated starfield canvas, gradient accents (#38bdf8 → #8b5cf6 → #f472b6), Space Grotesk + Inter fonts, light-mode toggle, fully responsive from 360px, reduced-motion support, and zero horizontal scroll. On the very top of every page render a full-width bar reading "Contact, if you are interested in this website/domain name" linked to https://web.works/contact.

### Phase 1 — Private contact routing
> All forms submit via AJAX to FormSubmit. The destination email must never appear as text in the HTML, JS strings, or the rendered DOM: store it as an offset, reversed char-code array in config and decode only at submit/click time. "Email us" links use `data-mail` and build the mailto at click time. Every form has a honeypot, HTML5 validation, a success/error message, a subject line naming the form, and a mailto fallback if the network call fails. Support an optional FormSubmit alias so the address can be removed entirely after activation.

### Phase 2 — Core pages
> Create: Home, Jobs (filterable employer directory with sector/region/search + job-alert form + featured-listing slot), Careers (5-step roadmap, 9 role families, sortable/filterable salary table), Learn (filterable fellowships/internships/programs + self-study tracks), Videos (lite YouTube embeds via youtube-nocookie, category chips, channel subscribe CTA, video pitch/sponsor form), Contests (cards with prize pool and live days-left, countdown, entry form, sponsor tiers), Insights (6 long-form SEO guides with anchors), About (team hiring + application form), Contact, Privacy (AdSense-compliant cookie disclosure), Terms (including contest rules and donation terms), 404.

### Phase 3 — Lead generation engine
> Build `connect.html`: a 3-step, progress-barred form (1. "I am a…" choice tiles: Job seeker, Student, Employer, Sponsor, Partner, Creator → 2. conditional fields per persona → 3. contact details + consent + newsletter opt-in). Support `?as=Employer` deep links to preselect. Add secondary lead forms: home talent-network form, employer hiring brief with plan selector (pre-filled from pricing buttons), job alerts, media-kit request, newsletter in the footer. Add a sticky mobile CTA bar (Hire / Join free). Fire a GA4 `generate_lead` event on success.

### Phase 4 — Monetization
> AdSense: `[data-ad]` slots on every content page; when `adsenseClient` is set in config, load AdSense after cookie consent (non-personalized when user picks "Essential only"); otherwise render house ads linking to the Advertise page. Include `ads.txt`. Employer pricing: Standard $149, Featured $349, Hiring Pack $999/quarter, Talent Search 15% on hire. Advertise page with display, newsletter, YouTube, sponsored guide, contest naming and education listing packages.

### Phase 5 — Donations & community
> Support page with fundraising progress bar (goal/raised from config), allocation table (scholarships, prizes, free resources, outreach, operations & hiring), monthly/one-time toggle, preset + custom amounts, auto-rendered buttons for any configured Stripe/PayPal/Buy Me a Coffee/Ko-fi/Patreon links, and a pledge form that emails a payment link. Add volunteer, partner and "work with us" routes.

### Phase 6 — SEO & performance
> Unique title/description/canonical/OG per page, Organization + WebSite SearchAction JSON-LD, sitemap.xml, robots.txt, manifest, SVG favicon/OG image, lazy images, no framework, `.nojekyll`.

### Phase 7 — QA & launch
> Headless-browser test every page at 1366px and 390px: no JS errors, no horizontal overflow, domain bar present, the email string absent from the DOM, forms post correctly. Push to GitHub, publish with GitHub Pages, then point SpaceWorkers.com DNS to Pages and add a CNAME file.

### Phase 8 — Growth (post-launch)
> Weekly brief newsletter; 2 guides/week targeting "how to get a job at [company]", "[role] salary"; YouTube "My Space Job in 90 Seconds" series fed by the video contest; LinkedIn outreach to hiring managers; upgrade the directory to a live job feed (Greenhouse/Lever public APIs) once traffic justifies it.
