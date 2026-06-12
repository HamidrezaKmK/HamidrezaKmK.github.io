# Hamidreza Kamkari Personal Website

Static React/Vite portfolio site with a local-only admin mode for editing profile content, news, publications, blog cards, videos, and curated GitHub project cards.

## Local Development

```bash
npm install
npm run dev
```

## Local Admin Mode

Run the local editor:

```bash
npm run admin
```

You can also change the port if you want:

```bash
ADMIN_API_PORT=5180 npm run admin
```

Open the Vite URL with admin mode enabled:

```text
http://127.0.0.1:5173/?admin=1
```

The admin mode starts a local write API on `http://127.0.0.1:5174` by default. If that port is busy, the launcher will try the next available port and pass it to the Vite app automatically. Admin mode is intended for local use only. It rewrites files under `src/content/` and saves uploaded images into `public/media/`.

Editable content lives in:

- `src/content/home.js`
- `src/content/siteProfile.js`
- `src/content/about.js`
- `src/content/news.js`
- `src/content/publications.js`
- `src/content/blogPosts.js`
- `src/content/projects.js`
- `src/content/videos.js`

Blog cards and project cards can point to any URL. Blog card thumbnails, project images, profile images, and the browser tab icon should be PNG/JPG/WEBP paths in `public/`, usually `/media/...` after upload. The CV field can also be updated from admin mode by uploading a PDF.

Most longer text fields use Markdown. Common examples:

- `**bold text**`
- `[link text](https://example.com)`
- blank lines between paragraphs
- `- item` for simple lists


## Build

```bash
npm run build
```

## Deploy

```bash
npm run deploy
```
