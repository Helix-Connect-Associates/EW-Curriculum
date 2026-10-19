# How to edit the Training section

Every `.md` file in this `training/` folder becomes its own page under **Training** on the site.
Files whose names start with `_` (like this one) are ignored.

- **Edit a program:** open its file, change the text, commit and push. Netlify rebuilds and it's live in a minute or two.
- **Add a program:** copy an existing file, rename it (the file name becomes the web address, e.g.
  `pushup-challenge.md` → `#/training/pushup-challenge`), change the top block, commit and push.
- **Remove a program:** delete its file, commit and push.

No code changes are needed for any of these.

---

## The top block (required)

Every file starts with this, between two `---` lines:

```
---
title: Kickboxing Combinations
icon: 🥊
summary: One sentence shown on the Training menu card.
order: 1
---
```

| Field     | What it does                                                         |
|-----------|----------------------------------------------------------------------|
| `title`   | Page heading and menu card title                                     |
| `icon`    | Any emoji, shown on the menu card                                    |
| `summary` | Short description under the title                                    |
| `order`   | Position on the Training menu (1 = first). Optional.                 |
| `video`   | Optional link — adds a "Watch Video" button at the top of the page   |

## What you can write below it

**Paragraphs** — just type. Leave a blank line between paragraphs.

**Section headings** — start a line with `## `

```
## Week 1
```

**Training focus / callout box** — start a line with `> `

```
> Training focus: Return to a strong fighting stance after every kick.
```

**Combinations** — a numbered list where moves are separated by `→` (or type `->` if that's easier).
These show up as strike-by-strike chips, and the page gets a **Drill Mode** that calls them out.

```
1. Jab → Cross → Rear Roundhouse Kick
2. Jab -> Cross -> Lead Front Kick
```

**Plain numbered or bulleted lists**

```
1. Warm up for 5 minutes
2. Stretch

- Water bottle
- Gloves
```

**Tables** — good for push-up challenges and schedules

```
| Day | Push-ups | Sets |
|-----|----------|------|
| Mon | 10       | 3    |
| Wed | 12       | 3    |
```

**Bold text** — wrap in double asterisks: `**Rest 60 seconds**`

**Links** — `[Watch the demo](https://youtu.be/...)`

**Interactive tools** — a line with just a tool name in double curly braces drops that tool into the page
at that spot. Write everything else around it as normal.

```
{{eastwest-100}}
```

| Tool name      | What it adds                                                                 |
|----------------|------------------------------------------------------------------------------|
| `eastwest-100` | The EastWest 100 push-up plan finder, personal workouts, rest timer, progress |

The numbers behind the EastWest 100 (percentages, rest times, phase thresholds) live in
`data/eastwest100.ts` — change a percentage there (0.5 = 50% of the student's test result) and the
whole page updates.

**Heads-up:** in any list, `→` or `->` turns the line into kickboxing strike chips. Avoid arrows in
non-combo lists (use "to" instead).

