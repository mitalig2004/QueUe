# QUEUE — product audit

Audit: 18 October 2026. Owner: Mitali Giri. Evidence: current source, eight canonical documents, repository commits, fresh Playwright/Edge captures, automated checks. This is a self-initiated responsive web concept for a fictional festival, not a virtual queue-management product.

## Actual product

QUEUE connects a saved performance to practical activity timing and wayfinding. Its signature question is whether an attendee can do an activity and still reach the next set. NORMAL_LIVE freezes Saturday 17 October 2026 at 19:18: Coldplay begins 20:30; suggested leave 20:18. Slice Club totals 6 walking + 4 waiting + 7 preparation + 20 eating + 8 onward = 45 minutes. Arrival 20:03, breathing room 27 minutes. The delayed fixture starts 20:50 and changes buffer to 47 while arrival stays constant.

Primary intended user: an attendee navigating between sets. Secondary contexts: friends arranging a meetup; someone seeking step-free, lower-crowd or low-sensory options. Maya is a provisional fixture persona, not a recruited research participant.

## Repository reviewed

README.md; IMPLEMENTATION.md; docs/01–08; package.json and lockfile; vercel.json; scripts/build.mjs and fonts.mjs; src/model.js, model.test.js, map-data.js, map.js, views.js, public-views.js, ui.js, main.js, motion.js, social-calendar.js, brand-identity.js, brand-page.js and style.css; public brand/font assets and licenses; tests/*.mjs; Git history. Generated node_modules/dist/cache are build artifacts, not design evidence.

Earlier implementation notes include superseded palette/layout descriptions. Current source and fresh captures take priority for visual evidence. In particular: cloud replaces warm cream; the mobile navigation is a floating pill; phone map details now flow below the canvas; touch swipes scroll the page and Ctrl+wheel zooms.

## Screen inventory

| Route | Implemented purpose / evidence status |
|---|---|
| / | Compact landing, demo entry, three feature links, attribution. Source and browser. |
| /login, /signup | Labelled local demonstration forms, native validation, reveal password. No backend/auth credentials stored. |
| /demo | Resumes default/local session at Today; no login required. |
| /setup, /preview | Select Must See performances; local onboarding. |
| /today | Priority/countdown/leave; now; essentials; saved sets; map. Browser capture. |
| /live | Reduced-density dark current/next context. Browser capture. |
| /schedule | Two days, stage/Saved filters; chronological phone list; desktop time grid; conflict/transfer notices. Browser capture. |
| /schedule/:id | Performance details, Save/Must See, walk/leave, conditions. |
| /decision?target= | Complete activity comparisons; page or URL-backed modal. |
| /food | Complete timing comparison with dietary/price filters. Browser capture. |
| /food/:id | Transparent timing, target arrival, buffer and routing. Browser capture. |
| /merch, /merch/kiosk | Tight main-merch timing and alternatives. |
| /restrooms, /water, /medical | Essential services; compare relevant facts; route/refill/staffed help. |
| /map | Layers, POIs, zoom/pan, recenter, selected labels and text list. Browser capture. |
| /venues/:id | POI selection and metadata in map context. |
| /route?from=&to=&preference= | Named route instructions, preferences, local start/save/refill. Browser capture. |
| /friends | Sharing controls, zones, local invitations. Browser capture. |
| /friends/group | Water 2 meeting apron with 4/6/5-minute fixture arrivals. Browser capture. |
| /friends/:id | Individual meetup timing or paused-zone recovery. |
| /friends/join?plan= | Validated snapshot preview/acceptance; sharing remains independent. |
| /pass | Decorative demo pass, Gate 2 and useful information; invalid for admission. Browser capture. |
| /search?q= | Local categorized results, aliases and retained-query no-results; modal or page. |
| /brand | Six Q explorations, comparative design judgments, final SVG logo system. |
| /work, /work/queue | Added portfolio index and isolated product case study. |

Unknown IDs and unsupported routes produce explicit recovery states, not fabricated destination data.

## State and implementation

Vite + modular vanilla JavaScript. Shared deterministic selectors own timing; versioned local storage persists saved sets, priorities, routes, sharing choices, heading intent, invitations and demo settings. 22 POIs, 38 nodes and 34 route templates. Five presets: Normal, Delayed, Patchy, Before, Post. No remote data API, real GPS, real message delivery, server authentication, ordering or payment. Invite URLs share snapshots, not synchronized collaboration. Offline service worker precaches shell/assets/fonts after a successful production load; new case-study screenshots are not guaranteed offline until fetched.

## Extracted system

Product: plum #20152E; cloud #F5F6FA; mint #A9EAD2; apricot #FF8B60; River #A9B8F4; Echo #CCB0EC. Brand communications: #191919/#F6F5F0/#D9F36B. Inter for UI; Space Grotesk structure/numbers; Impact and Georgia for expressive use. Original modular Q and vector wordmark. Native SVG outline icons/doodles. Typical 24px mobile gutters, 44px minimum target specification, 52–54px primary controls, finite transitions and reduced-motion overrides. Accumulated CSS overrides are a maintenance risk.

## UX observations and boundaries

Verified strengths: consequence is inspectable; target persists across decisions; schedule changes propagate; unknown values stay unknown; privacy defaults OFF; text-map access complements geometry. Source-level support is not proof of assistive-device usability. Risks: time/queue values can appear more certain than warranted; fixed 20-minute eating assumption needs validation; default map favors clarity over showing every facility; pill navigation can cover content while scrolling; dense selected layers and small metadata need manual evaluation; desktop and phone place details differently. Authentication errors use native browser validation, not a bespoke tested error-summary system.

No formal interviews, surveys, participant quotes, competitor usability tests, or measured business impact were found. Technical test results must not be presented as participant research.

## Case-study evidence

scripts/capture-case-study.mjs reproducibly resets fixture state and captures real pages into public/case-studies/queue. docs/QUEUE_PRODUCT_CHECKS.json records capture paths, widths and automated results. tests/case-study.mjs records new-page QA. Screenshot annotations are separate HTML, not retouched product pixels. Git commits 2d30ab4 and e7c7461 support map-density and scrolling iteration claims; brand explorations are genuine repository artifacts. Newly drawn comparison wireframes are explicitly labelled Design Alternatives.
