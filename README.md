# FirmFinder Landing (Static, Vercel-ready)

A premium one-page waitlist site with Apple-grade glassmorphism and neon-blue accents.

## Quick Deploy (Vercel)
1. **Download the ZIP** and unzip.
2. Create a free account at **vercel.com** → “New Project” → “Import” → drag this folder.
3. In **Project Settings → Domains**, add `firmfinder.co` and follow the GoDaddy DNS steps (Vercel will show the records).
4. In `index.html`, replace **YOUR_EMAIL@FIRMFINDER.CO** with your GoDaddy inbox and **https://YOUR-DOMAIN** with your live domain.
5. Redeploy. Test the form; you should receive an email for each signup (powered by FormSubmit).

> Optional: If you prefer storing leads in a Google Sheet or using a different provider (Formspree/Web3Forms), replace the `<form action>` URL and hidden fields accordingly.

## Brand Notes
- Primary background navy: `#092755`
- Accent neon blue: `#0A5EFF`
- Contrast red micro-rim: `#CF0A1F`

## Files
- `index.html` – main page
- `thank-you.html` – redirect page after successful submission
- `styles.css` – glassmorphism + responsive styles
- `script.js` – interactive glow
- `assets/firmfinder-logo.png` – logo used in hero
- `vercel.json` – static routing + caching

## Accessibility
- Semantic HTML, labels, high-contrast buttons, reduced motion friendly.

## Updating Social Links
Replace placeholders in the **Social Links** section of `index.html` with your official handles.
