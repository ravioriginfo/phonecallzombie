# GitHub Pages Setup for PhoneCallZombie

## ✅ Automatic Deployment Configured

Your site is configured to automatically deploy to GitHub Pages whenever you push to the `main` branch!

### Live Site URL
🌍 **https://ravioriginfo.github.io/phonecallzombie/**

---

## 🚀 How It Works

### Automatic Deployment (GitHub Actions)
1. You push code to `main` branch
2. GitHub Actions automatically:
   - Installs dependencies (`npm ci`)
   - Builds the project (`npm run build`)
   - Deploys to GitHub Pages
3. Site is live in ~1-2 minutes

### Configuration Files
- **`.github/workflows/deploy.yml`** - Automatic deployment workflow
- **`vite.config.js`** - Base path set to `/phonecallzombie/`
- **`package.json`** - Build scripts configured

---

## 📋 Repository Configuration

### What You Need to Do (One-Time Setup)

1. **Go to GitHub Repository Settings:**
   - URL: https://github.com/ravioriginfo/phonecallzombie/settings

2. **Navigate to Pages Section:**
   - Scroll to "Pages" in the left sidebar
   - OR go directly to: Settings → Pages

3. **Configure GitHub Pages:**
   - **Source:** Select "GitHub Actions"
   - **Branch:** Should auto-select from workflow
   - Save settings

4. **Verify Deployment:**
   - Check Actions tab: https://github.com/ravioriginfo/phonecallzombie/actions
   - Wait for green checkmark ✅
   - Visit: https://ravioriginfo.github.io/phonecallzombie/

---

## 🔄 Workflow Trigger

The deployment workflow triggers on:
- ✅ Push to `main` branch
- ✅ Pull requests to `main` branch

### View Deployment Status
1. Go to **Actions** tab in your GitHub repo
2. Click "Deploy to GitHub Pages" workflow
3. Check the status of latest run
4. Click on a run to see detailed logs

---

## 🛠️ Manual Deployment (If Needed)

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# The dist/ folder is ready to deploy
# You can commit it directly to gh-pages branch:
git subtree push --prefix dist origin gh-pages
```

But **automatic deployment is configured**, so you don't need to do this!

---

## 📝 Making Updates

### Workflow
1. Make changes to `src/` files
2. Test locally: `npm run dev`
3. Commit and push: `git push origin main`
4. Automatic deployment starts
5. Site updates in 1-2 minutes

### Example:
```bash
# Edit a component
nano src/pages/Home.vue

# Test it
npm run dev

# Commit and push
git add .
git commit -m "Update home page content"
git push origin main

# Site automatically updates! ✅
```

---

## ✅ Verification Checklist

- [x] Base path configured (`/phonecallzombie/`)
- [x] GitHub Actions workflow created
- [x] Push to `main` configured
- [ ] GitHub Pages settings enabled (you need to do this)
- [ ] First deployment successful
- [ ] Site accessible at live URL

---

## 🌐 Live Site URL

Once GitHub Pages is enabled:

### Direct URL
```
https://ravioriginfo.github.io/phonecallzombie/
```

### Shorthand (if custom domain added)
```
https://phonecallzombie.io/  (optional custom domain)
```

---

## 🔍 Troubleshooting

### Site not loading
1. Check Actions tab for deployment errors
2. Verify GitHub Pages settings are enabled
3. Wait 2-3 minutes for first deployment
4. Clear browser cache and reload

### 404 on refresh
- Already fixed with Vue Router configuration
- Site should work on direct navigation to any page

### Old content showing
1. Hard refresh: `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)
2. Check Actions for latest deployment status

### Changes not reflecting
1. Check Actions tab - deployment may still be in progress
2. Wait 1-2 minutes and reload
3. Clear browser cache

---

## 📊 Deployment Logs

### View Deployment Details
1. Go to: https://github.com/ravioriginfo/phonecallzombie/actions
2. Click "Deploy to GitHub Pages" workflow
3. Click latest run
4. Expand logs to see build output

### Common Success Output
```
✓ 41 modules transformed.
✓ built in 973ms
📦 Deploying to gh-pages branch...
✅ Deployment successful!
```

---

## 🎯 Next Steps

1. **Enable GitHub Pages** (Settings → Pages → GitHub Actions)
2. **Wait for first deployment** (1-2 minutes)
3. **Visit live URL** https://ravioriginfo.github.io/phonecallzombie/
4. **Share with your boss!** 🎉

---

## 🔐 Important Notes

- All code is public on GitHub
- Anyone can see your source code
- Commits are permanent (but you can force push if needed)
- GitHub Actions uses public runners (secure)
- No secrets are exposed in workflows

---

## 📚 Resources

- **GitHub Pages Docs:** https://pages.github.com/
- **GitHub Actions Docs:** https://docs.github.com/en/actions
- **Vite Base Path:** https://vitejs.dev/guide/build.html#public-base-path

---

## 🚀 Summary

Your site is configured for:
- ✅ Automatic deployment on push
- ✅ Zero-downtime updates
- ✅ GitHub Actions workflow
- ✅ Professional live URL
- ✅ Scalable and free hosting

**Just enable GitHub Pages and you're done!** The rest is automatic. 🎉

---

**Questions?** Check the Actions tab for detailed logs!
