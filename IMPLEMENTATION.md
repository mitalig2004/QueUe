# QUEUE — implementation and review guide

A complete local prototype of the fictional PULSE 2026 festival companion, implemented from the eight canonical files in `docs/`. No backend, real ticket, payment, messaging or GPS service is connected.

## Run

- `npm install`
- `npm run dev -- --port 5199 --strictPort`
- Open `http://127.0.0.1:5199/` or `/demo`.
- Production: `npm run build`, then `npm run preview -- --port 5200 --strictPort`.
- Model checks: `npm test`.
- Browser checks: `npm run test:ui`. Tests use installed Microsoft Edge through Playwright. Set `QUEUE_URL` to a different local server if needed.
- Offline and reduced motion: `node tests/offline.mjs` with the production preview running on port 5200.
- Additional state/route checks: `node tests/edge-flows.mjs` with development preview on port 5199.

## Inspect first

1. `/` — complete marketing story and graphical festival composition.
2. `/demo` → `/today` — immediate Maya demo entry.
3. `/live` → What can I do before? — focused mode and signature planner dialog.
4. `/food/slice-club?target=coldplay` — 45-minute breakdown, 8:03 PM arrival, 27-minute buffer.
5. `/merch?target=coldplay` — tight 8-minute buffer, kiosk/after-set alternatives.
6. `/route?from=slice-club&to=main-stage` — 8/10/11-minute route profiles. Expand the mobile panel to see instructions and route actions.
7. `/schedule` — desktop time-axis layout, mobile chronological layout, saved/conflict behavior.
8. `/friends` and `/friends/group` — private-by-default sharing and Water 2 meeting apron.
9. `/pass` — locally cached illustrative pass.
10. Account circle → Demo state → Coldplay Delayed / Patchy Connection / Before Event / Post Event.

## Complete route list

`/`, `/login`, `/signup`, `/preview`, `/demo` (resumes `/today`), `/setup`, `/today`, `/live`, `/schedule`, `/schedule/:performanceId`, `/decision?target=`, `/map?poi=&layer=`, `/venues/:poiId`, `/route?from=&to=&preference=`, `/food`, `/food/:venueId`, `/restrooms`, `/water`, `/merch`, `/merch/kiosk`, `/medical`, `/friends`, `/friends/group`, `/friends/:friendId`, `/pass`, `/search?q=`.

Invalid IDs and unsupported routes render explicit explanatory states. Group and kiosk routes are matched before generic detail routes. Search and planner also open as dialogs with URL/history behavior.

## Architecture and deterministic state

Vite serves a modular JavaScript application. `src/model.js` owns fixtures, target selection, schedule advisories, arithmetic, freshness and persisted state. `src/map-data.js` contains all 22 POIs, 38 coordinate nodes and 34 weighted route templates from the canonical map specification. `src/views.js`, `src/public-views.js`, `src/map.js` and `src/ui.js` generate semantic screen/component markup. `src/main.js` owns routing, events, history, focus and local persistence. `src/style.css` implements shared tokens, layouts and breakpoints.

Versioned local storage retains Saved/Must See performances, sharing duration, approximate heading intent, route preferences, saved/active routes, refill activity, after-set merch intent, selected POI, feedback and demo state. URLs retain selected target, schedule filters/day, search query and route endpoints. Fixture time is deliberately frozen, so countdowns do not pretend to be real clocks. Corrupt or incompatible storage falls back to defaults.

## Design and typography

Plum, warm cream, mint, apricot, periwinkle and lavender follow the revised canonical palette. Impact supplies condensed festival headlines; Georgia italic supplies editorial accents. Space Grotesk supplies structural typography and Inter supplies UI text; these two families and their SIL licenses are bundled locally. Impact/Georgia use system fonts with documented fallbacks. Main Stage uses mint; River uses periwinkle accents; Echo uses lavender accents, all with readable plum text. Large emphasis numbers, editorial artwork, divider-based lists and restrained rounded functional surfaces replace a generic analytics dashboard.

Responsive layouts cover 375, 390, 430, 768, 1024, 1280, 1440 and 1600 pixels. Mobile uses persistent Today/Schedule/Map/Friends navigation and header access to Search/Pass/account. Today uses two-by-two essentials. Desktop Today uses a 55/45 context/map composition; desktop Schedule uses an actual stage/time grid. Map geometry preserves the 1000 × 700 coordinate space. Mobile has a collapsed details sheet and explicit expansion; desktop has a side panel. Food/results/forms stack on small screens. Landing has a compact navigation menu and layered festival artwork; authentication reduces to a focused form on mobile.

## Product flows

Landing explains the full 6 + 4 + 7 + 20 + 8 food decision. Auth uses native validation and a password reveal; submission creates a local demo session and never stores credentials. Demo entry bypasses onboarding; Setup can change Must See selections.

Today shows current Arctic Monkeys context, next priority, countdown, route/leave timing, essentials, saved sets and a map. Must See selects the earliest remaining priority; Saved is the fallback. Empty priorities have clear schedule exits. Before Event shows preparation and the first-start context. Post Event shows an explicitly illustrative recap and local feedback.

Live Mode uses dark surfaces, large static countdown/leave information and large essentials. It shares the same target and timing model as Today. Phase states exit live recommendations cleanly.

The planner calculates food, meetup, merch, restroom and water detours including onward stage walking. Results show current time, every component/checkpoint, arrival, scheduled target and buffer. Slice totals 45; Taco 55; Bombay 47; Green Room 49; Merch Main 64; Kiosk 24; Rohan 20; Restroom B 11; Water 2 tap 8 minutes. Tight/conflicting estimates remain advisory. Null queue/route data produces an unavailable result rather than zero.

Schedule supports both days, stage/Saved filters, Save and Must See, overlapping-set warnings and consecutive-stage transfer checks. Coldplay/Fred normal transfer is a tight three-minute buffer; delayed sets overlap by five minutes.

Map supplies filtered layers, readable selected places, route geometry, alternatives, ordered landmark instructions, search, zoom, drag pan, wheel zoom, pan buttons and recenter. The text map exposes every POI without depending on graphical selection. Route preferences select canonical paths and durations, with no blanket adjustment to unrelated walks. Unsupported endpoints explain the limitation. Start/Save are local actions. Slice and Rohan routes offer explicit continuation to Main Stage.

Food exposes complete timing, queue/preparation/walk facts, dietary filters and honest starting-price filtering. Restrooms compare B and A; Water distinguishes the refill tap from the group meeting apron. No-route Water addition opens a confirmed target route via the tap; a supported existing tap route adds only the two-minute refill. Unsupported detours retain the previous route. Medical prioritizes staffed help and emergency information.

Friends use approximate consented demo zones. Sharing starts OFF, can last one hour or until event end, persists and expires. Kabir stays visibly paused. The Water 2 group apron uses distinct 4/6/5-minute arrivals, with a latest 7:24 PM arrival. Heading actions change local demo status and send no messages.

## Accessibility, motion and connection states

Semantic landmarks, headings, labelled inputs/buttons, visible keyboard focus, skip link, 44-pixel controls, native validation, selected/pressed states and a text map support nonvisual interaction. Dialogs make background content inert, trap Tab, close with Escape, and restore triggering focus. Search aliases include pizza/WC/first aid; no-results preserves the query. Schedule day tabs support arrow keys. The account popover focuses its first control and closes with Escape.

Page/panel emphasis uses 280 ms; sheet changes use 320 ms. Timeline values are complete in the DOM immediately; a short sequence emphasizes each step without counting through false values. Eating is visibly the longest food step. Reduced motion disables transitions/animation while retaining every value, route and action. Map movement is user-controlled and does not simulate tracking.

The production build generates a service worker that precaches the app shell, JavaScript, CSS and local fonts. After the first successful load, direct route reloads work offline. Device state remains local. Offline and Patchy labels distinguish available static information from stale queues, crowds and friends, with the 7:16 PM timestamp. Before estimates are previews; post-event data is historical. Queue/crowd unavailable controls are available in the demo account panel.

Coldplay Delayed updates start/end, countdown, leave timing, target comparisons and schedule conflicts together. Food arrival remains 8:03 PM; breathing room becomes 47 minutes. Dismissing the delay notice does not revert the state. Runtime offline status preserves an already selected delay.

## QA and limits

Model tests cover nine canonical detours, delayed timing, route profile arithmetic, every route node/weight invariant, null data, priority selection, conflict detection, sharing expiry and freshness phases. Browser checks cover 27 screen/route combinations at every required width, plus nine core accessibility scans and interaction flows. Recorded results are in `tests/qa-results.json`; screenshots are in `tests/`. No horizontal overflow or page errors were reported. Automated accessibility scans reported no violations on the nine scanned screens after transitions settled.

Additional browser flows verify Water route creation/start/refill, updated food timing, Saved fallback, paused friends, stale/missing queues and Before Event. Production checks verify offline direct reloads of Today, Schedule, Map, Pass and Route, plus a complete reduced-motion timeline.

Known limits: this is a fictional deterministic prototype with illustrative auth, ticket, conditions and attendance. It has no live event feed, precise positioning, notifications outside the page or real friend messaging. Route instructions use the canonical weighted templates rather than a routing service. Only canonical supported origin/destination combinations have estimates. Map sheets use explicit controls rather than sheet-drag gestures; pan and zoom support pointer/wheel/buttons, without multi-touch pinch. Automated accessibility checks supplement, rather than replace, manual screen-reader and real outdoor/device testing. Browser QA was performed in Microsoft Edge; Safari/iOS hardware was not available.


## Visual refresh

User-approved palette: plum #20152E, warm cream #FFF5E8, mint #A9EAD2, apricot #FF8B60, periwinkle #A9B8F4 and lavender #CCB0EC. Condensed Impact headlines and Georgia italic editorial accents complement Space Grotesk/Inter. Native SVG flower/starburst/orbit/wave/arrow/smile doodles and additional music/headphone/compass icons add festival character. Paper entrances, finite line drawing, scroll settling and hover icon gestures respect reduced motion. Updated canonical visual/motion docs reflect this revision.


## Calendar and invitations extension

Header Calendar opens a compact October picker with the two canonical festival dates and clickable performance details. Friends now creates and copies invitation links with an optional saved-plan snapshot; recipients can preview and add those performances via `/friends/join?plan=`. This is snapshot sharing, without email delivery, tracked acceptance or cross-device synchronization. Localhost URLs require a published/reachable site before other-device sharing works. Sharing a plan does not enable location sharing. Calendar/invitation browser checks cover date selection, four widths, keyboard dismissal, clipboard copy, persistence, acceptance and privacy; accessibility scans cover the Friends form and expanded calendar.

## Identity and alignment polish

Original SVG Q monogram and vector QUEUE lettering replace the text wordmark; a matching favicon is included. The PULSE event header block is removed. Saved-set rows use explicit grid alignment: time/artist/stage on desktop, stage below artist on mobile. Logo trace, active-tab settle, card/route-arrow hover and popover entrance add restrained motion; reduced motion disables every addition.

## Compact landing revision

The user requested a substantially shorter marketing page and a more refined identity. Landing now has one hero/CTA, one bounded graphic, three brief route links and a small footer. Long marketing sections are removed. Logo assets now use a solid Q loop with mint cut-through and filled vector lettering. Five-width landing checks and mobile/desktop accessibility scans pass; artwork is constrained to avoid covering subsequent content.

## Mobile comfort revision

User-requested padding/accessibility pass adds 24px side gutters, more space between sections and controls, larger primary touch targets, 16px input text, stronger focus visibility, forced-colors support and bottom-navigation clearance. Compact landing and app route checks are rerun for overflow and automated accessibility.

## Original QUEUE identity system
Six materially different Q concepts are documented and evaluated at /brand. Modular Shift was selected for its sequence-based tail and small-size clarity. Clean reusable Logo/LogoMark functions provide standalone mark, custom vector wordmark and primary lockup. Public vector downloads include app icon, favicon, monochrome and light/dark variants. Presentation uses Ink/Paper/Turn brand colors; product fixture values and stage colors retain their existing roles. No logo animation added.
