# QUEUE

A fictional PULSE 2026 festival companion built from the canonical specification in `docs/`.

Run `npm install`, then `npm run dev -- --port 5199 --strictPort`. Open http://127.0.0.1:5199/ or /demo.

Build with `npm run build`; preview with `npm run preview -- --port 5200 --strictPort`. Offline caching is enabled for production previews after the first successful load.

Read [IMPLEMENTATION.md](IMPLEMENTATION.md) for routes, architecture, behavior, QA, inspection guidance and limitations. Run `npm test` for the fixture/model checks. Browser tests and recorded results are in `tests/`.
