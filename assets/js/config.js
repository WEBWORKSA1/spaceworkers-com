/* SpaceWorkers.com — site configuration. Edit values here; no other file needs changing. */
window.SW_CONFIG = {
  siteName: "SpaceWorkers",
  domain: "SpaceWorkers.com",
  domainInquiryUrl: "https://web.works/contact",
  // Contact routing is encoded (never shown as text anywhere on the site).
  _r: [112,114,102,49,111,108,100,112,106,67,52,100,118,110,117,114,122,101,104,122],
  // Optional: after activating FormSubmit, paste the random alias it emails you here to
  // stop using the encoded address in requests entirely (e.g. "a1b2c3d4e5...").
  formAlias: "",

  // Google AdSense — paste your publisher ID (ca-pub-XXXXXXXXXXXXXXXX) to switch every ad slot live.
  adsenseClient: "",
  adsenseSlots: { top: "", inContent: "", footer: "" },

  // Google Analytics 4 measurement ID (G-XXXXXXX). Optional.
  ga4: "",

  // Donation processors — paste any hosted-checkout links you create; buttons appear automatically.
  donate: {
    paypal: "",        // e.g. https://www.paypal.com/donate/?hosted_button_id=XXXX
    stripe: "",        // Stripe Payment Link, e.g. https://donate.stripe.com/xxxx
    buymeacoffee: "",  // https://buymeacoffee.com/yourname
    kofi: "",          // https://ko-fi.com/yourname
    patreon: ""        // https://patreon.com/yourname
  },
  fundraisingGoal: 25000,
  fundraisingRaised: 0,

  // Social + YouTube channel — paste your own profile URLs; empty ones stay hidden.
  youtubeChannel: "",
  social: { linkedin: "", x: "", youtube: "", instagram: "", discord: "" }
};
