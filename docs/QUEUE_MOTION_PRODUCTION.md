# QUEUE motion production

Six finished silent H.264 MP4 masters at 1920×1080, 30fps. Optimized website copies are 1280×720 with faststart. Each includes a poster, English descriptive captions and an adjacent text summary. Playback is manual, with native controls and preload none; reduced-motion users receive the same still initial state.

- 01-logo-reveal.mp4 — 5 seconds
- 02-problem-story.mp4 — 8 seconds
- 03-product-introduction.mp4 — 8 seconds
- 04-user-journey.mp4 — 13.47 seconds
- 05-microinteractions.mp4 — 8.33 seconds
- 06-final-showcase.mp4 — 10 seconds

Four original canvas compositions use the existing vector identity, local fonts and authentic product screenshots. Two films capture actual browser interactions. No fictional loading, backend, GPS or research results are introduced. The previously removed 24-second walkthrough remains absent from the website.

Production: start Vite; set QUEUE_URL to that server. Run scripts/render-queue-motion.mjs and scripts/record-queue-motion.mjs. Rendering requires a local FFmpeg build with libx264; supply FFMPEG_PATH or install @ffmpeg-installer/win32-x64 without saving it as a deployment dependency. Playwright requires its FFmpeg runtime for recording. QUEUE_FILM=finale optionally renders only the closing graphic.

Review: full-frame decoding is checked by tests/queue-video.mjs; one-second contact sheets and posters support visual review. Automated decoding does not substitute for subjective review of every frame. Reference page access was unavailable; no claim of a complete visual reference review is made.

Upload order: panel04 → film02; panel06 → film01; panel09 → film03; panel10 → film04; panel12 → film05; panel17 → film06. The export index mirrors this sequence.
