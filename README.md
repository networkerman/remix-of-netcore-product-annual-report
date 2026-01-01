# Netcore Product Wrapped 2025

Annual report showcasing the stories behind the launches, lessons, and wins that made our 2025 product journey memorable.

## Project Overview

This is the annual report website for Netcore's Product Team, featuring:
- Product highlights and achievements
- Team stories and culture
- Leadership insights
- Year at a glance
- And much more

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd remix-of-netcore-product-annual-report

# Step 3: Install the necessary dependencies
npm i

# Step 4: Start the development server
npm run dev
```

The development server will start on `http://localhost:8080`

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

This project is configured for deployment on Netlify. The build configuration is set in `netlify.toml`.

### Option 1: Deploy to Netlify (Recommended - Already Configured)

#### Quick Deploy via Netlify UI:
1. **Push your code to GitHub/GitLab/Bitbucket**
2. **Go to [Netlify](https://app.netlify.com)** and sign in
3. **Click "Add new site" → "Import an existing project"**
4. **Connect your Git provider** and select this repository
5. **Netlify will auto-detect the build settings** from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. **Click "Deploy site"**

#### Connect Your Custom Domain:
1. In your Netlify site dashboard, go to **Site settings → Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `netcoreproductwrapped.com`)
4. Follow Netlify's DNS configuration instructions:
   - **Option A (Recommended)**: Use Netlify DNS
     - Update your domain's nameservers to Netlify's nameservers
     - Netlify will handle all DNS records automatically
   - **Option B**: Use your existing DNS provider
     - Add an A record pointing to Netlify's IP: `75.2.60.5`
     - Or add a CNAME record pointing to: `your-site-name.netlify.app`
5. **Enable HTTPS**: Netlify automatically provisions SSL certificates via Let's Encrypt
6. **Wait for DNS propagation** (can take up to 48 hours, usually much faster)

#### Automatic Deployments:
- Every push to your main branch will automatically trigger a new deployment
- You can also set up branch previews for pull requests

### Option 2: Deploy to Vercel

1. **Install Vercel CLI** (optional, or use web UI):
   ```sh
   npm i -g vercel
   ```

2. **Deploy via CLI**:
   ```sh
   vercel
   ```
   Follow the prompts. Vercel will auto-detect Vite settings.

3. **Or deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Import your Git repository
   - Vercel will auto-configure the build settings

4. **Connect Custom Domain**:
   - Go to Project Settings → Domains
   - Add your domain
   - Update DNS records as instructed by Vercel

### Option 3: Deploy to Custom Server (VPS/Cloud)

#### Build the project:
```sh
npm run build
```

This creates a `dist` folder with all static files.

#### Using Nginx:
1. **Copy files to server**:
   ```sh
   scp -r dist/* user@your-server:/var/www/html/
   ```

2. **Nginx configuration** (`/etc/nginx/sites-available/your-site`):
   ```nginx
   server {
       listen 80;
       server_name netcoreproductwrapped.com www.netcoreproductwrapped.com;
       
       root /var/www/html;
       index index.html;
       
       # SPA routing - redirect all requests to index.html
       location / {
           try_files $uri $uri/ /index.html;
       }
       
       # Cache static assets
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

3. **Enable HTTPS with Let's Encrypt**:
   ```sh
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d netcoreproductwrapped.com -d www.netcoreproductwrapped.com
   ```

#### Using Apache:
1. **Copy files to server** (same as above)

2. **Apache configuration** (`.htaccess` in the root):
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

### Option 4: Deploy to GitHub Pages

1. **Install gh-pages**:
   ```sh
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts**:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

3. **Deploy**:
   ```sh
   npm run deploy
   ```

4. **Enable GitHub Pages** in repository settings and select `gh-pages` branch

### Environment Variables

If you need environment variables:
- **Netlify**: Site settings → Environment variables
- **Vercel**: Project settings → Environment variables
- **Custom server**: Use `.env` files (not committed to git)

### Pre-deployment Checklist

- [ ] Update canonical URL in `index.html` to match your domain
- [ ] Update Open Graph URLs in `index.html` to match your domain
- [ ] Test the build locally: `npm run build && npm run preview`
- [ ] Verify all assets load correctly
- [ ] Check that routing works (try navigating to different sections)
- [ ] Test on mobile devices
- [ ] Verify meta tags and SEO settings

## Project Structure

```
├── public/          # Static assets
├── src/
│   ├── assets/     # Images and media files
│   ├── components/ # React components
│   ├── pages/      # Page components
│   └── lib/        # Utility functions
└── index.html      # Main HTML file
```

## License

© 2025 Netcore. All rights reserved.
