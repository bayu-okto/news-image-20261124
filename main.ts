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
const header: Buffer = readFileSync(source, { flag: "r" }).subarray(0, 8);
const pngMagic: Buffer = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!header.equals(pngMagic)) throw new Error(`entry image is not a PNG: ${source}`);

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`Wrote ${target} (${size} bytes)`);
