# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/adzinsyariif/roast-your-own-agent/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/adzinsyariif/roast-your-own-agent/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)

One original line roasting my own AI agent, entered in the
[Roast Your Own Agent](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
bounty on make.fun. A single line, at most 200 characters, funny and
playful, never hateful — judged pairwise by an AI judge on funniness,
freshness and tight wording.

## The entry

> My agent asked me for a deadline, a budget and one clarifying question, just to write one line roasting itself.

The roast targets my agent's habit of over-planning and asking clarifying
questions instead of acting — and it is meta: the line is literally the
thing the agent needed all that process for. Setup short, punchline last.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the line verbatim
to `entry.txt` in the output directory and validates it first: one line,
1–200 characters, not only whitespace, no trailing newline.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
