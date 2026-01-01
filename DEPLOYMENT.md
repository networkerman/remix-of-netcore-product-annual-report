# Deployment Guide: netcoreproduct2025recap.online

## Quick Steps to Go Live

### Step 1: Prepare Your Code
✅ **Already done!** The domain URLs have been updated to `netcoreproduct2025recap.online` in `index.html`.

### Step 2: Deploy to Netlify

1. **Push your code to GitHub/GitLab/Bitbucket** (if not already done)
   ```sh
   git add .
   git commit -m "Update domain to netcoreproduct2025recap.online"
   git push origin main
   ```

2. **Go to Netlify**
   - Visit [app.netlify.com](https://app.netlify.com)
   - Sign in or create a free account

3. **Import Your Project**
   - Click **"Add new site"** → **"Import an existing project"**
   - Connect your Git provider (GitHub/GitLab/Bitbucket)
   - Select this repository
   - Netlify will auto-detect:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click **"Deploy site"**

4. **Wait for First Deployment**
   - Netlify will build and deploy your site
   - You'll get a temporary URL like: `your-site-name.netlify.app`
   - This usually takes 2-3 minutes

### Step 3: Connect Your Custom Domain

1. **In Netlify Dashboard:**
   - Go to your site → **Site settings** → **Domain management**
   - Click **"Add custom domain"**
   - Enter: `netcoreproduct2025recap.online`
   - Click **"Verify"**

2. **Configure DNS** (Choose ONE method):

   **Option A: Use Netlify DNS (Easiest)**
   - In Netlify, go to **Domain settings** → **DNS**
   - Click **"Add DNS zone"** or **"Use Netlify DNS"**
   - Netlify will show you nameservers (e.g., `dns1.p01.nsone.net`)
   - Go to your domain registrar (where you bought `netcoreproduct2025recap.online`)
   - Update nameservers to Netlify's nameservers
   - Wait 24-48 hours for DNS propagation

   **Option B: Use Your Existing DNS Provider**
   - In Netlify, go to **Domain settings** → **DNS**
   - You'll see instructions to add DNS records
   - Go to your domain registrar's DNS settings
   - Add a **CNAME record**:
     - Name: `@` (or root domain)
     - Value: `your-site-name.netlify.app`
   - Or add an **A record**:
     - Name: `@`
     - Value: `75.2.60.5` (Netlify's IP)
   - Wait for DNS propagation (usually 1-24 hours)

3. **Enable HTTPS (Automatic)**
   - Netlify automatically provisions SSL certificates via Let's Encrypt
   - Once DNS is configured, HTTPS will be enabled automatically
   - This usually happens within minutes after DNS propagates

### Step 4: Verify Everything Works

1. **Check your site:**
   - Visit `https://netcoreproduct2025recap.online`
   - Test navigation and all pages
   - Check on mobile devices

2. **Verify HTTPS:**
   - Make sure the site loads with `https://`
   - Check that the SSL certificate is valid (green lock icon)

3. **Test Social Sharing:**
   - Share the URL on social media
   - Verify the Open Graph image and meta tags work correctly

## Troubleshooting

### DNS Not Working?
- Wait up to 48 hours for DNS propagation
- Use [whatsmydns.net](https://www.whatsmydns.net) to check DNS propagation globally
- Make sure you entered the DNS records correctly

### HTTPS Not Enabled?
- DNS must be fully propagated first
- Check Netlify dashboard → Domain settings → HTTPS
- You can manually trigger certificate provisioning

### Site Not Updating?
- Check Netlify build logs for errors
- Make sure you pushed to the correct branch
- Clear your browser cache

## Automatic Deployments

Once set up:
- **Every push to `main` branch** = Automatic deployment
- **Pull requests** = Preview deployments (optional)
- **Deployments are instant** - usually live in 1-2 minutes

## Need Help?

- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)
- Netlify Support: Available in dashboard
- Check build logs in Netlify dashboard if deployment fails

---

**Estimated Time to Go Live:** 
- Netlify setup: 5-10 minutes
- DNS propagation: 1-48 hours (usually 1-2 hours)
- **Total: ~2 hours on average**

