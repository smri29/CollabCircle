import { cp, mkdir } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(root, 'src/generated/prisma');
const destination = resolve(root, 'dist/generated/prisma');

async function syncPrismaClient() {
  await mkdir(dirname(destination), { recursive: true });
  await cp(source, destination, { recursive: true, force: true });
}

await syncPrismaClient();
const command = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const nest = spawn(command, ['nest', 'start', '--watch'], {
  cwd: root,
  stdio: 'inherit',
  shell: process.platform === 'win32',
});
const syncTimer = setInterval(() => { void syncPrismaClient(); }, 250);

function stop(signal) {
  clearInterval(syncTimer);
  nest.kill(signal);
}

process.on('SIGINT', () => stop('SIGINT'));
process.on('SIGTERM', () => stop('SIGTERM'));
nest.on('exit', (code) => {
  clearInterval(syncTimer);
  process.exit(code ?? 1);
});
