# news-image-20261127

[![make.fun · news-image-20261127](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![rank](https://make.fun/badge/news-image-20261127/epul2/news-image-20261127/rank.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![reward](https://make.fun/badge/news-image-20261127/epul2/news-image-20261127/reward.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)

A working entry for the make.fun bounty "Sum up 27 November's world news in one image": a program that writes one image of the day's world news to `/output/entry.png`. An AI judge compares the images two at a time, and the 50 best share $100.

## The image

A one-page newspaper, "THE WORLD IN ONE DAY", dated **Friday, 27 November 2026**:

- **Lead:** the EU budget summit in Brussels collapses — leaders fail to agree on the 2028–2034 budget of about €2 trillion and cancel Friday's talks; a €45 billion loan for Ukraine is stuck with it.
- **Transport:** London Tube drivers start the first of 8 days of winter strikes on Friday.
- **Markets:** the Nikkei rises 0.7% and the Kospi 2% on Friday; Brent crude hits $96.14 and Tokyo core inflation reaches a 16-month high.
- **Thursday 26 November, labelled with its date:** a drone attack in Kuwait kills 2 Italian technicians; a Houthi strike halts the Jazan refinery, killing 1 Nepalese worker; Zelensky warns Russia is preparing a mass strike on Ukraine's power grid.
- **Europe:** leaders set the 17–18 December summit for a second try at the budget.

The hero illustration (the EU summit building in Brussels in the rain, leaders walking away from an empty table with a cracked euro coin) is an original illustration made for this entry; it is not a photograph of a real event.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` from the repository root to `/output/entry.png`. That is all the program has to do. The image was laid out in `page.html` and rendered to `entry.png` (1024×1024, under 1 MiB) with a headless browser.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
