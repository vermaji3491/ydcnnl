# Yaduvanshi Degree College Website

React + Vite + Tailwind CSS + React Router + Framer Motion + Lucide React.

## Run locally

1. Install Node.js LTS.
2. From the repository root, enter the frontend folder:
   `cd frontend`
3. Put your real logo at:
   `public/images/yaduvanshilogo.png`
4. In the frontend folder, install dependencies:
   `npm install`
5. Start:
   `npm run dev`
6. Open the local URL shown by Vite, normally:
   `http://localhost:5173`

## Build for production

`npm run build`

The production files are generated in `dist/`.

## Important before publishing

Replace placeholder phone/email, statistics, notices, program details, fees, eligibility, faculty information and stock photos with the college's verified official information.

The contact form is a frontend demo. Connect it to a backend, Formspree, EmailJS, Supabase, or another approved service before production.

The map area is intentionally a placeholder for the official Google Maps embed.

## Publish on GitHub Pages

Push this repository to GitHub on the `main` or `master` branch. In the repository, open **Settings > Pages** and set the build and deployment source to **GitHub Actions**. The workflow at `.github/workflows/deploy-pages.yml` builds and deploys the frontend on each push.

GitHub Pages hosts only the frontend. To enable API-backed pages and forms, host the backend separately and add repository Actions variables named `VITE_API_URL`, `VITE_SUPABASE_URL`, and `VITE_SUPABASE_ANON_KEY` as needed.
