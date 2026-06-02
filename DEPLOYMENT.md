# Deploying to GitHub Pages

This guide outlines how to host this static React workshop website on GitHub Pages.

---

## Prerequisites
1. A GitHub account.
2. [Node.js](https://nodejs.org/) (v18+) and `pnpm` (or `npm`/`yarn`) installed locally.

---

## Step 1: Exporting Code
You can export this project's code directly from the Manus Management UI:
1. Open the **Management UI** panel on the right.
2. Click the **More menu (⋯)** in the header (top-right).
3. Select **Download as ZIP** to download the complete codebase, or connect your **GitHub** account in the settings to export it directly to a new repository.

---

## Step 2: Local Setup (If using ZIP)
Unzip the downloaded project and open a terminal inside the project directory:

```bash
# Install dependencies
pnpm install

# Run development server locally to test
pnpm dev
```

---

## Step 3: Configure for GitHub Pages
We need to add the `gh-pages` package to automate deployment:

```bash
# Install the gh-pages deployment utility
pnpm add -D gh-pages
```

Update your `package.json` with the following configuration:
1. Add a `homepage` field pointing to your GitHub Pages URL:
   ```json
   "homepage": "https://<your-username>.github.io/<your-repo-name>",
   ```
2. Add deployment scripts to the `"scripts"` block:
   ```json
   "predeploy": "pnpm build",
   "deploy": "gh-pages -d dist/public"
   ```

*(Note: In Vite-based projects, ensure that your `vite.config.ts` has the correct `base` path set, e.g., `base: '/<your-repo-name>/'` if hosting as a project page).*

---

## Step 4: Deploy
Initialize a git repository, commit your changes, and push them to GitHub:

```bash
git init
git add .
git commit -m "Initial workshop website commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

Now, run the deployment command:

```bash
pnpm deploy
```

This will build your website and automatically push the production assets to a separate `gh-pages` branch on your GitHub repository.

---

## Step 5: Enable GitHub Pages on GitHub
1. Go to your repository on GitHub.
2. Click on **Settings** -> **Pages** (under Code and automation).
3. Under **Build and deployment**, ensure the source is set to **Deploy from a branch**.
4. Set the branch to `gh-pages` and folder to `/ (root)`.
5. Click **Save**.

Your website will be live at `https://<your-username>.github.io/<your-repo-name>/` within a few minutes!
