# QUEUE — the space between sets

This presentation extends the existing modular-shift identity into an original illustrated festival universe. The app remains a decision companion for attendees already at a fictional festival. It is not queue-management software. Existing product routes, fixture calculations, local state and functional UI are unchanged.

## Visual system

Twelve original SVG environments cover the space between sets, hidden minutes, walking, queuing, preparation, eating, returning, breathing room, shared places, navigation, access and celebration. Plum contours, modular silhouettes, cream faces, headphones, passes and controlled flat color unite them. Scenes are editorial metaphors; the illustrated paths are not the operational map or surveyed route geometry.

The ten identity spreads present logo lockups, symbols, palette, typography, illustration rules, character exploration/development, existing iconography, patterns, motion and proposed digital applications. Original logo geometry is preserved. The case study uses 24 distinct spreads; it contains no MP4 players, play buttons or download links.

## Character exploration

Author's design evaluation, scored 1–5. These are creative judgments, not user-research results.

| Concept | Brand fit | Memorability | Simplicity | Scale | Expression | Animation | Story usefulness |
|---|---:|---:|---:|---:|---:|---:|---:|
| Interval / festival-goer | 5 | 4 | 4 | 4 | 5 | 5 | 5 |
| Loop / path companion | 4 | 4 | 5 | 5 | 2 | 5 | 3 |
| Encore / moment spark | 3 | 4 | 5 | 5 | 4 | 4 | 3 |

Interval is selected for expressive action and human scale. It wears headphones and a pass; it explains festival decisions rather than acting as an in-app assistant. Eight source poses include neutral, happy, thinking, waiting, walking, returning, success and dancing. Loop supplies path rhythm; Encore supplies the moment spark.

## Scroll choreography

GSAP ScrollTrigger drives native transform, path, attribute and opacity-compatible presentation effects. The main journey pins only above900px, with five illustrated environments and a proportional6/4/7/20/8 timeline. Holds preserve reading time; scrolling backward reverses the sequence. Eating receives the longest segment. The final total is45 minutes, arrival8:03PM and breathing room27 minutes before8:30PM Coldplay. Figures are always available in the DOM.

Mobile uses five vertically stacked scenes with small scroll-linked character movement. Reduced motion uses complete static compositions, all five journey scenes, no pinning and no essential hidden content. Breakpoint and preference changes revert their animation context. Navigation cleans up triggers before leaving the exhibition. Native page scrolling is retained; no scroll hijacking or forced snapping.

Other compositions use alternating product-screen reveals, layered illustration parallax, path drawing, kinetic editorial type, morphing moment geometry, stepped modules, icon rotation, shifting patterns and a final character gesture. No external animated backgrounds, tracking or remote assets are required.

## Source and review

- `src/queue-art.js`: reusable SVG artwork primitives and12 compositions.
- `scripts/create-queue-art.mjs`: writes33 valid standalone SVG assets.
- `src/visual-case-study.js`:24 editorial spreads, authentic screenshots and a bounded delay-state comparison.
- `src/queue-exhibition.css`: scoped responsive layout and reduced-motion adaptation.
- `src/queue-scroll.js`: GSAP lifecycle and reversible choreography.
- `tests/queue-exhibition.mjs`: nine widths, selected axe rules, XML parsing, keyboard entry, reverse scrubbing, resize and product-route continuity.
- `scripts/export-queue-exhibition.mjs`: still presentation, gallery, contact sheet and reusable SVG pack.

The supplied Behance reference returned403; no claim is made to have reviewed its artwork. No reference assets are copied. Automated accessibility checks do not establish WCAG certification or usability success. No interviews, participant results, analytics or real-world launch evidence is invented. Brand applications are labelled proposed.
