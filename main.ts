// A working news-image-20261127 entry (Node 22, standard library only): it copies entry.png from the repository
// root to /output/entry.png, where the gate reads it. That is all the program has to do. The entry is the image
// itself: one image that sums up the world's news of Friday 27 November 2026 — the EU budget summit collapsing
// in Brussels and Friday's talks being cancelled, the London Tube strike starting its 8 days, Friday's markets
// (Nikkei +0.7%, Kospi +2%, Brent $96.14), and Thursday's news labelled with its date: the drone attack in
// Kuwait killing 2 Italian technicians, the Houthi strike halting the Jazan refinery, and Zelensky warning of a
// mass Russian strike on Ukraine's power grid.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'entry.png'), join(OUTPUT_DIR, 'entry.png'));
} catch (err) {
  console.error(`entry.png could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
