# Deploy — iliotech.com

Static site. No build step. Replaces the current broken (HTTP 500) site.

## Deploy

1. Copy **all files** in this directory to the iliotech.com web root.
2. Point DNS for `iliotech.com` / `www` at your host.
3. Enable HTTPS.

### nginx (sketch)

```nginx
server {
  listen 443 ssl http2;
  server_name iliotech.com www.iliotech.com;
  root /var/www/iliotech.com;
  index index.html;
  error_page 404 /404.html;
  location / { try_files $uri $uri/ $uri.html /404.html; }
}
```

### Apache (sketch)

```apache
DocumentRoot /var/www/iliotech.com
ErrorDocument 404 /404.html
```

## Edit

- New insight: copy `templates/insight.html` → `insights/slug.html`; list on `insights/index.html`; add to `sitemap.xml`.
- Update bio/timeline on `about/` and `experience/` with verified dates only.
- Cross-link services to https://gearcloudlabs.com (already wired).

## TODOs

- Cal.com (or similar) booking URL
- Formspree-style form endpoint (or keep mailto)
- Headshot on About
- Optional analytics snippet
- Confirm `rob@iliotech.com` inbox
