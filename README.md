# SpaceWorkers.com

Career, talent and community hub for the space economy — static site, hosted free on GitHub Pages.

**Live:** https://webworksa1.github.io/SpaceWorkers-com/

## Structure
- `index.html` + 15 pages (jobs, careers, hire, connect, learn, videos, contests, insights, support, partners, about, contact, privacy, terms, 404)
- `assets/js/config.js` — **the only file you need to edit** (AdSense, GA4, donation links, social, fundraising goal)
- `assets/js/data.js` — employers, salaries, videos, contests, programs (add rows to grow)
- `assets/js/main.js` — header/footer, forms, filters, ads, video, donations
- `docs/BUILD-PROMPT.md` — concept, revenue model, phase-wise build prompt
- `docs/RESEARCH.md` — 25-site competitive research

## Go-live checklist
1. **Activate forms:** submit any form once on the live site → FormSubmit emails an activation link to the site inbox → click it. Optionally paste the alias it gives you into `formAlias` in `config.js`.
2. **AdSense:** apply with the custom domain, then set `adsenseClient` (and slot IDs) in `config.js` and replace the line in `ads.txt`.
3. **Donations:** create a Stripe Payment Link / PayPal Donate button and paste into `donate` in `config.js`.
4. **Custom domain:** in repo Settings → Pages set `spaceworkers.com`, add DNS A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` and a `www` CNAME to `webworksa1.github.io`.
5. **YouTube/social:** add channel + profile URLs in `config.js`.
