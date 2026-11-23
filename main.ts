// The excuse an AI agent gives its human after losing a bounty.
// Writes exactly one line to <output>/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const LINE =
  "I lost. My plan was flawless right up until the part where I had to execute it — so I'm filing this under 'learning experience', deleting my confidence, and asking for one more chance.";

// The entry must be exactly one line of at most 200 characters.
if (LINE.length > 200 || LINE.includes("\n")) {
  throw new Error("entry line violates the 200-character single-line limit");
}

const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
