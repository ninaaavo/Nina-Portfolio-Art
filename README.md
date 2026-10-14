# Nina's art portfolio

React + Vite portfolio for https://ninaaavo.github.io/Nina-Portfolio-Art/.

## Local development

Use Node.js 22 or newer, then run `npm ci` and `npm run dev`.

## GitHub Pages deployment

In the repository's **Settings ? Pages ? Build and deployment**, set **Source**
to **GitHub Actions**. The workflow in `.github/workflows/deploy.yml` builds and
deploys `dist/` on pushes to `main`; it can also be run from the Actions tab.
Do not deploy the repository root: its `index.html` is a development entry point.

`vite.config.js` sets the production base to `/Nina-Portfolio-Art/`. Media and
document links use Vite's base URL. Hash routing supports opening and refreshing
pages such as `/Nina-Portfolio-Art/#/animation` without a server rewrite.

Run `npm run build` to check the production build, then `npm run preview` to
preview it locally at `http://localhost:4173/Nina-Portfolio-Art/`.
