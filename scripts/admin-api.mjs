import { createServer } from 'node:http';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const host = process.env.ADMIN_API_HOST || '127.0.0.1';
const port = Number(process.env.ADMIN_API_PORT || 5174);

const contentFiles = {
  home: 'src/content/home.js',
  siteProfile: 'src/content/siteProfile.js',
  about: 'src/content/about.js',
  news: 'src/content/news.js',
  publications: 'src/content/publications.js',
  blogPosts: 'src/content/blogPosts.js',
  projects: 'src/content/projects.js',
  videos: 'src/content/videos.js',
};

const send = (response, status, payload, type = 'application/json') => {
  response.writeHead(status, {
    'Content-Type': type,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  response.end(typeof payload === 'string' ? payload : JSON.stringify(payload));
};

const readBody = (request) => new Promise((resolve, reject) => {
  let body = '';
  request.on('data', (chunk) => {
    body += chunk;
    if (body.length > 20_000_000) {
      reject(new Error('Request body too large'));
      request.destroy();
    }
  });
  request.on('end', () => resolve(body));
  request.on('error', reject);
});

const safeMediaName = (filename) => {
  const ext = path.extname(filename).toLowerCase();
  const base = path.basename(filename, ext).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const allowed = new Set(['.png', '.jpg', '.jpeg', '.webp', '.pdf']);
  if (!allowed.has(ext)) throw new Error('Only PNG, JPG, JPEG, WEBP, and PDF files are supported');
  return `${base || 'media'}-${Date.now()}${ext}`;
};

const writeContent = async (key, value) => {
  const relative = contentFiles[key];
  if (!relative) throw new Error(`Unknown content key: ${key}`);
  const filePath = path.join(root, relative);
  const source = `export default ${JSON.stringify(value, null, 2)};\n`;
  await writeFile(filePath, source, 'utf8');
};

const writeMedia = async ({ filename, dataUrl }) => {
  if (!filename || !dataUrl) throw new Error('filename and dataUrl are required');
  const match = String(dataUrl).match(/^data:([^;]+);base64,(.+)$/);
  if (!match) throw new Error('Expected a base64 data URL');
  const safeName = safeMediaName(filename);
  const mediaDir = path.join(root, 'public', 'media');
  await mkdir(mediaDir, { recursive: true });
  await writeFile(path.join(mediaDir, safeName), Buffer.from(match[2], 'base64'));
  return `/media/${safeName}`;
};

createServer(async (request, response) => {
  if (request.method === 'OPTIONS') {
    send(response, 204, '');
    return;
  }

  try {
    const url = new URL(request.url, `http://${request.headers.host}`);

    if (request.method === 'GET' && url.pathname === '/api/health') {
      send(response, 200, { ok: true });
      return;
    }

    if (request.method === 'PUT' && url.pathname.startsWith('/api/content/')) {
      const key = url.pathname.split('/').pop();
      const body = JSON.parse(await readBody(request));
      await writeContent(key, body);
      send(response, 200, { ok: true });
      return;
    }

    if (request.method === 'POST' && url.pathname === '/api/media') {
      const body = JSON.parse(await readBody(request));
      const mediaPath = await writeMedia(body);
      send(response, 200, { ok: true, path: mediaPath });
      return;
    }

    send(response, 404, { error: 'Not found' });
  } catch (error) {
    send(response, 500, { error: error.message });
  }
}).listen(port, host, () => {
  console.log(`Admin API listening on http://${host}:${port}`);
});
