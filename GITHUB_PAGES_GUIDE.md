# GitHub Pages Deployment Guide

We have set up an automated **GitHub Actions** workflow for this project. When you sync this project with your GitHub repository, it will build and publish automatically!

---

## How to Deploy Instantly

### Option A: Sync with GitHub via Manus (Recommended)
1. Open the **Management UI** on the right.
2. Go to **Settings -> GitHub**.
3. Link your GitHub account and authorize Manus.
4. Manus will automatically clone this project to a new repository in your GitHub account.
5. Once pushed, the **GitHub Actions** workflow will automatically build the site and deploy it to a `gh-pages` branch.
6. In your GitHub repository settings, go to **Pages**, set the source to the `gh-pages` branch, and click **Save**.

---

### Option B: Deploy Manually from Local Machine
If you downloaded the project as a ZIP:

1. Install the `gh-pages` deployment utility:
   ```bash
   pnpm add -D gh-pages
   ```

2. Add a `homepage` field and deploy scripts to your `package.json`:
   ```json
   "homepage": "https://<your-username>.github.io/<your-repo-name>",
   "scripts": {
     "predeploy": "pnpm build",
     "deploy": "gh-pages -d dist/public"
   }
   ```

3. Deploy with a single command:
   ```bash
   pnpm deploy
   ```
