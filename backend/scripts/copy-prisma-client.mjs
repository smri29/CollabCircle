import { cp, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(root, 'src/generated/prisma');
const destination = resolve(root, 'dist/generated/prisma');

await mkdir(dirname(destination), { recursive: true });
await cp(source, destination, { recursive: true, force: true });
console.log('Copied generated Prisma Client to dist/generated/prisma.');
