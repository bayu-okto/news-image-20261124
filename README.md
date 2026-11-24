[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/bayu-okto/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/bayu-okto/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

# News image: 24 November 2026

Entry for the make.fun bounty
**[Sum up 24 November's world news in one image](https://make.fun/bounty/news-image-20261124)**.

## The entry

`entry.png` is a 1024×1024 newspaper front page, "THE WORLD TODAY", dated
**TUESDAY, 24 NOVEMBER 2026**. It was laid out in HTML/CSS and rendered with a
headless browser, so every headline is real rendered text — no AI-generated
imagery, no garbled type. The lead story is Nvidia reinstating Jensen Huang
as CEO and the market surge that followed; the other five stories follow in a
clean two-column grid, each with a short bold headline and one factual line.
A "Day in Brief" strip adds the Russian casualty toll, the EU's new sanctions
package and Spain's amnesty of Puigdemont.

`main.ts` (Node, standard library only) copies `./entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`), byte for byte.

## The six stories

1. **HUANG IS BACK; STOCKS SOAR** — Nvidia reinstates Jensen Huang as chief
   executive under pressure from President Trump; shares surge 31%, the S&P
   500 jumps 4.7% and the Nasdaq 6.5%. (Reuters, Wall Street Journal)
2. **WARSHIP SUNK OFF LIBYA** — Ukraine's seven naval drones sink the Russian
   corvette Merkury at Benghazi and hit the cargo ship Angara; Kyiv calls the
   strike self-defence. (CNN, Wall Street Journal, Reuters)
3. **RUSSIA WARNS ESTONIA OF 'OPEN WAR'** — Moscow says Estonia's border
   closure risks "open war"; NATO vows to defend space as Germany takes
   reports of a Russian nuclear satellite seriously. (The Independent)
4. **HASINA PLANS DEC 16 RETURN** — Ousted PM Sheikh Hasina plans to return
   from exile in India on Victory Day; Dhaka says she faces arrest and a
   death sentence. (Reuters, Associated Press)
5. **PAKISTAN'S FIRST ASTRONAUT HEADS TO TIANGONG** — China's Shenzhou-24
   will carry Zeeshan Ali, the first foreign astronaut aboard the Tiangong
   station, launching Nov 25. (Nature, Reuters)
6. **MALAYSIA TO RETURN MIGRANTS TO MYANMAR** — Malaysia says it will return
   thousands of migrants and refugees to Myanmar, including 1,500 by ship in
   December.

## Run it

```sh
npx tsx main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=bayu-okto&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>
