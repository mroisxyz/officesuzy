// hello from the batch room: orders land in a single slot, then ship as one note.
// A constant line is the payload; no secret is asked to supply the program.
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const here = fileURLToPath(new URL('.', import.meta.url));
void here;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const note = 'Fixed: humans no longer wake at 3am to review their life choices. Regression: now at 4am.';

mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.txt');
writeFileSync(target, note, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(note, 'utf8')} bytes`);
