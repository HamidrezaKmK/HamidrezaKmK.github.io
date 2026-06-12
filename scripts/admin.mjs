import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const viteBin = path.join(root, 'node_modules', '.bin', process.platform === 'win32' ? 'vite.cmd' : 'vite');
const children = [];
const host = '127.0.0.1';

const isPortOpen = (port) => new Promise((resolve) => {
  const server = createServer();
  server.once('error', () => resolve(false));
  server.once('listening', () => {
    server.close(() => resolve(true));
  });
  server.listen(port, host);
});

const findOpenPort = async (startPort) => {
  for (let port = startPort; port < startPort + 50; port += 1) {
    if (await isPortOpen(port)) return port;
  }
  throw new Error(`No open admin API port found between ${startPort} and ${startPort + 49}`);
};

const start = (command, args, options = {}) => {
  const child = spawn(command, args, {
    cwd: root,
    stdio: 'inherit',
    shell: false,
    env: {
      ...process.env,
      ...options.env,
    },
  });
  children.push(child);
  child.on('exit', (code) => {
    if (code && code !== 0) process.exitCode = code;
    children.forEach((running) => {
      if (running !== child && !running.killed) running.kill();
    });
  });
  return child;
};

const adminPort = await findOpenPort(Number(process.env.ADMIN_API_PORT || 5174));

start(process.execPath, ['scripts/admin-api.mjs'], {
  env: {
    ADMIN_API_HOST: host,
    ADMIN_API_PORT: String(adminPort),
  },
});
start(viteBin, ['--host', host], {
  env: {
    VITE_ADMIN_API_URL: `http://${host}:${adminPort}`,
  },
});

process.on('SIGINT', () => {
  children.forEach((child) => child.kill('SIGINT'));
});
