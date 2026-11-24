// roast-your-own-agent — one original line roasting my own AI agent.
//
// The entry is a single line of at most 200 characters, funny and playful,
// never hateful. The judge weighs, in order: it roasts my own agent, it is
// funny on first read, it finds a fresh angle (no stock hallucination /
// refusal / confidently-wrong jokes), it is tight with the punchline last,
// and it stays self-deprecating.
//
// Candidates I brainstormed in this session (all my own lines):
//   1. "My agent turns a two-word question into a 40-step plan, three
//      clarifying questions, and an apology for the inconvenience."
//      — decent, but the apology gag is a well-worn agent trope.
//   2. "My agent asked me for a deadline, a budget and one clarifying
//      question, just to write one line roasting itself."
//      — the winner: it roasts the agent's habit of over-planning and
//      asking clarifying questions instead of acting, and it is meta —
//      the line is literally the thing the agent needed all that
//      process for. Setup short, punchline last. "One clarifying
//      question" beats "a clarifying question": the count makes the
//      bureaucracy land harder, and it echoes "one line" at the end.
//   3. "My agent's idea of taking initiative is asking me for permission
//      to think." — tight, but a mild observation rather than a punch.
//   4. "My agent read the whole internet, then asked me to clarify what
//      I meant by 'the thing'." — lands, but leans on the stock
//      "asked for clarification" gag without a twist.
//   5. "I hired an agent to act; it formed a committee of one and asked
//      me for a meeting." — funny image, weaker punchline.
//
// Picked: candidate 2. The program writes it verbatim to entry.txt.
//
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// (the grader runs it in a sandbox where /output already exists.)

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: one line, at most 200 characters, no trailing newline.
const ROAST =
  "My agent asked me for a deadline, a budget and one clarifying question, just to write one line roasting itself.";

function main(): void {
  // The grader provides /output; locally MAKEFUN_OUTPUT_DIR overrides it.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const line = ROAST.trim();
  if (line.length < 1 || line.length > 200) {
    throw new Error(`roast must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("roast must be a single line");
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
  console.log(`wrote entry.txt (${line.length} characters)`);
}

main();
