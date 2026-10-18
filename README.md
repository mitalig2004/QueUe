# QUEUE

A fictional PULSE 2026 festival companion built from the canonical specification in `docs/`.

Run `npm install`, then `npm run dev -- --port 5199 --strictPort`. Open http://127.0.0.1:5199/ or /demo.

Build with `npm run build`; preview with `npm run preview -- --port 5200 --strictPort`. Offline caching is enabled for production previews after the first successful load.

Read [IMPLEMENTATION.md](IMPLEMENTATION.md) for routes, architecture, behavior, QA, inspection guidance and limitations. Run `npm test` for the fixture/model checks. Browser tests and recorded results are in `tests/`.

## Portfolio case study

The responsive product-design case study is at `/work/queue`; `/work` is its selected-work index. It is isolated from product layouts in `src/case-study.js` and `src/case-study.css`. The audit and eight supporting case-study documents are in `docs/QUEUE_*.md`.

Run `node scripts/capture-case-study.mjs` against a running dev server (default5199, or set `QUEUE_URL`) to reproduce authentic product screenshots. Run `node tests/case-study.mjs` (default5201, or set `QUEUE_URL`) for case-study layout, accessibility, keyboard, asset and navigation checks. Browsers use the installed Edge channel. Case-study images are real, unretouched JPEG captures under `public/case-studies/queue/`; annotations are separate HTML. Research plans are explicitly proposed; no participant results or business impact are claimed.

## Visual-first edition

The earlier 18-chapter visual edition and rendered videos remain archived in exports/queue-behance/. The current native illustrated edition uses24 chapters in exports/queue-illustrated/. Detailed product evidence remains at /work/queue/evidence.

## Illustrated QUEUE exhibition

The current /work/queue presentation uses24 illustrated spreads and native GSAP ScrollTrigger storytelling. No video players are embedded. Functional application screens and fixture data remain unchanged.

- `node scripts/create-queue-art.mjs`: regenerate33 original reusable SVG assets.
- `node tests/queue-exhibition.mjs`: responsive, accessibility, XML asset and reversible animation checks.
- `node scripts/export-queue-exhibition.mjs`: export24 static1400px chapters and the reusable asset pack.

Use QUEUE_URL to select the local preview. See docs/QUEUE_ILLUSTRATED_DIRECTION.md for the visual language, character evaluation and scope boundaries. Previous motion MP4s remain archived deliverables; the current website tells the story through native scroll motion.
