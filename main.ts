// News image entry for make.fun "Sum up 24 November's world news in one image".
//
// The entry is a single front-page image, entry.png, rendered from HTML/CSS
// in a headless browser so every headline is real, crisp text. This program
// only copies that file into the output directory. It is deterministic: the
// output is a byte-for-byte copy of ./entry.png on every run.
//
// Before copying, it checks the source is a real, non-empty PNG, so a
// missing or corrupt image fails loudly instead of producing a bad entry.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here: string = dirname(fileURLToPath(import.meta.url));
const source: string = join(here, "entry.png");
const outDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const target: string = resolve(outDir, "entry.png");

const size: number = statSync(source).size;
if (size === 0) throw new Error(`entry image is empty: ${source}`);
const head: Buffer = readFileSync(source, { flag: "r" });
const pngMagic: Buffer = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!head.subarray(0, 8).equals(pngMagic)) throw new Error(`entry image is not a PNG: ${source}`);
// IHDR chunk: width at bytes 16-19, height at bytes 20-23 (big-endian).
// The bounty requires exactly 1024x1024, so fail loudly if it is not.
const width: number = head.readUInt32BE(16);
const height: number = head.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry image must be 1024x1024, got ${width}x${height}: ${source}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
// Verify the copy landed whole: a truncated write must fail, not ship.
const copiedSize: number = statSync(target).size;
if (copiedSize !== size) {
  throw new Error(`copy incomplete: ${target} is ${copiedSize} bytes, expected ${size}`);
}
console.log(`Wrote ${target} (${size} bytes, ${width}x${height})`);
