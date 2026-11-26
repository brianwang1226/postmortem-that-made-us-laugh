// The Postmortem That Made Us Laugh — make.fun one-liner entry.
// A postmortem report that is funny because it is honest: the Friday
// 4:59pm deploy, the passing tests, the prayer of a rollback plan,
// and an action item that immediately contradicts itself.
// The joke lands because every engineer has lived this exact postmortem:
// the root cause is a time of day, the contributing factors are all
// human, and the fix is a rule nobody intends to follow.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Root cause: the deploy ran on Friday at 4:59pm. Contributing factors: the tests passed, the rollback plan was a prayer, and nobody wanted to be the one to say 'stop'. Action items: never deploy on Friday. Also: deploy on Friday, but earlier, so the outage happens before lunch.";

const MAX_CHARS = 400;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
