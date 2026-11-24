// One Word for the Boss — entry program.
//
// Writes exactly one word describing the boss to the grader's output
// file: $MAKEFUN_OUTPUT_DIR/entry.txt, falling back to /output/entry.txt
// when the variable is unset.
//
// The word is "goalpostmover": the boss who sets a target, watches you
// reach it, then slides the target further away and acts as if it was
// always there. No meeting, no memo — just a finish line that keeps
// moving. One word, no spaces, no explanation; it lands on its own.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "goalpostmover";

// The gate only accepts 1–30 characters of a single word, so refuse to
// write anything that is not exactly that instead of emitting a bad file.
if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error(`entry word must be a single word of 1-30 chars, got: ${JSON.stringify(WORD)}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");
