# QUEUE — Motion and interaction system

Authority: **03 → 02 → 08 → 04 → 05 → 06 → 07 → 01**. Motion may emphasize a state already committed by the shared model; it never delays a calculation, changes a time or becomes the only way information is conveyed.

## Purpose and priority

Every animation must explain, orient, respond or delight. Priority: **1 state comprehension, 2 spatial orientation, 3 interaction response, 4 delight**. Application expression is approximately 80% utility/20% energy; marketing approximately 60/40. These are design-intent ratios, not implementation counters. No strobing, autoplay concert video, blinking urgency or repeated whole-screen movement.

## Duration and easing tokens

| Token | Value | Use |
|---|---|---|
| --motion-instant | 0ms | Deterministic state commit, reduced-motion rendering |
| --motion-press | 120ms | Press/return feedback |
| --motion-fast | 200ms | Hover, focus-adjacent feedback, simple fade |
| --motion-standard | 280ms | Page/POI/panel transition |
| --motion-sheet | 320ms | Sheet expansion/collapse |
| --motion-route | 350ms | Route emphasis/draw |
| --motion-sequence | 700ms | Signature timeline total maximum |
| --motion-ambient | 3000ms | Restrained Live dot only |
| --ease-out | cubic-bezier(.2,.8,.2,1) | Entry/settle |
| --ease-in-out | cubic-bezier(.4,0,.2,1) | Panel/route replacement |
| --ease-linear | linear | Loading indicator, line progression |

Avoid spring overshoot, elastic page transitions and layout-thrashing per-frame DOM writes. CSS transform/opacity and SVG stroke-dashoffset are sufficient; no multiple motion frameworks. CPU-heavy moving grain and animated background gradients are prohibited.

## Screen and overlay transitions

Page transition: new content opacity 0→1 and optional translateY 6→0 over 280ms. Do not animate the persistent primary nav/header; screen heading receives focus after navigation without scrolling twice. Browser Back may use fade only. User can interact from the first frame; route data and final totals are already rendered.

Bottom sheet opens from its own bottom edge over 320ms. Backdrop opacity 0→.28 over 200ms for modal sheets only. Expanded/collapsed height transitions use the same timing; sheet content keeps its reading position, map fits to uncovered bounds once after state change. No dramatic full viewport sweep. Desktop side panel fades/slides 8px over 280ms. Modal enters opacity and translateY 8px, never a large zoom. Closing takes 200ms, returns focus and removes background inertness. Escape and Close remain responsive during animation.

## Pointer, keyboard and touch feedback

Button hover: 2px lift plus arrow shift 3px/200ms. Press: scale .98/120ms. Quick action: background changes and icon translates at most 2px; no bouncing food icon. Focus is immediate and persistent, never animated away. Touch uses pressed state with no sticky hover; keyboard activation produces equivalent result without relying on hover. Filter/radio selection changes border/check and content in one commit, then 200ms emphasis fade.

Optional map drag pans directly with the pointer and stops immediately; no momentum is required. Pinch/wheel zoom centres on interaction point, duration ≤200ms for button-driven steps. Sheet drag may snap to collapsed/expanded; provided Expand/Collapse buttons have identical functionality. Do not bind horizontal swipe to essential navigation or vertical drag to the only way of reading details. No swipe-to-delete on Saved or privacy controls.

## Map selection, markers and routes

Selected marker ring appears immediately; a 200ms opacity emphasis confirms selection. Map re-centres only if the POI is occluded; ease pan ≤280ms, not automatic recentering on every estimate change. Current-zone halo may use one subtle 600ms emphasis on entering Map, then remains still. Friends are static zone markers unless a simulated status change is explicitly selected.

Active route geometry is inserted immediately at low but readable opacity. Optional draw emphasis follows the path over 350ms; duration label/instructions never wait for drawing. Preference switching replaces endpoints/instructions/time atomically, then crossfades old/new route 200ms; do not leave the wrong duration beside the old route. Alternative route lines remain visible and selectable with labels. Route drawing cancels cleanly on rapid selection and settles to the latest path.

## Signature food timeline — concise frame specification

The DOM contains all final values at time zero. Reveal timing affects only visual emphasis/connector progress, not accessibility-tree presence or action availability. Trigger once per newly selected scenario; returning Back renders settled state, avoiding repeated ceremony.

| Time | Visual emphasis | Canonical content |
|---:|---|---|
| 0ms | Outcome and scenario readable; timeline connectors neutral | “Yes — with room.” / Slice Club → Coldplay |
| 60ms | Current-time checkpoint emphasizes | 7:18 PM |
| 130ms | First segment gets ink connector | Walk 6m → 7:24 PM |
| 200ms | Queue segment emphasizes | Queue 4m → 7:28 PM |
| 270ms | Preparation segment emphasizes | Prep 7m → 7:35 PM |
| 340ms | Activity segment emphasizes | Eat 20m → 7:55 PM |
| 410ms | Onward connector completes | Walk to Main 8m → 8:03 PM |
| 480ms | Arrival line gets a check and emphasis | Arrive 8:03 PM / 45 min total |
| 550ms | Target comparison emphasizes | Coldplay 8:30 PM |
| 620ms | Breathing-room surface/number emphasizes | 27 MIN BREATHING ROOM |
| 700ms | Entire sequence settled | Route me there; Compare remain enabled |

Individual emphasis lasts ≤80ms as the next connector progresses, with no flicker. A duration-proportional static timeline can encode 6/4/7/20/8; the Eating segment is visibly longest. Never count up from zero through false arrival or buffer values. Taco, merch, utility and friend scenarios use their own steps and exact data; do not replay Slice's numbers for other cards. In delayed state, arrival stays 8:03 PM and target/buffer become 8:50 PM/47. Profile/refill changes update their affected segments from the selectors.

## Countdown, queue, schedule and notification updates

Demo time is frozen; countdown does not tick artificially. On an explicit time/state change, final countdown replaces old value in one commit, with a short 200ms crossfade. Use tabular numerals and reserve sufficient width for three digits; no slot-machine rolling or fake live ticking.

Queue estimate changes transition text/background emphasis 200ms. Null replaces value with “Unavailable,” not an animated zero. Cached timestamps remain stable until a fixture refresh. Loading placeholders cannot imply a fresh estimate while using a stale one.

Coldplay delay: atomic start/end/leave/result update at 0ms → persistent banner fade 200ms → affected time chips receive one 280ms outline emphasis. The update is announced once via a polite live region: “Coldplay now starts at 8:50 PM. Leave at 8:38 PM. You have 20 extra minutes.” Do not sequentially mutate screens or wait for one animation before updating another. Dismissal fades the banner only; derived times do not revert.

Fresh/stale/offline state label changes happen immediately. Consequential information lives in a persistent banner, not a disappearing toast. Local save/heading/download feedback may use a 4-second toast, 200ms fade, politely announced once. Do not auto-focus routine toasts or repeatedly announce countdowns.

## Live indicator and friend movement

Live dot can animate opacity .65→1→.65 over 3000ms with a halo whose scale stays within 1–1.15. Dot area ≤8px; surrounding labels never flash. Only fresh live-state badges pulse; stale/cached/offline is static and differently labelled. At most one visible ambient pulse per region.

“I'm heading there” changes simulated status instantly. An optional zone-to-zone illustrative marker move uses a 280ms fade out/in at approximate zones, labelled demo movement; never follows a precise continuous trail or simulates arriving without user action. Kabir paused and offline stale markers do not move.

## Loading and landing expression

Local fixture screens appear immediately; no artificial spinners. For actual asset/cache work later, use a static skeleton after 200ms and a clear loading label; after 3 seconds show explanation and retry/cancel. Never hide navigation until font/image loading finishes. Medical has no skeleton animation or decorative reveal.

Landing hero can stage typography/poster labels once with 200–350ms fades and ≤12px movement, total ≤700ms. Story section reveals four narrative groups (current moment, food detour including walk/queue/prep/eat, stage walk/arrival, breathing room) in order over ≤700ms on first intersection. All underlying timing segments in 01/03 remain visible; grouping does not omit preparation/eating. Start fully visible when scripting/reduced motion is unavailable. Illustrative map route may emphasize once; no endlessly moving friends or changing fake queue values. Doodles/poster rotations are static. Marquee-like copy remains still; if movement is later added it needs pause controls and cannot be necessary to reading.

## Reduced motion, cancellation and performance acceptance

Honor `prefers-reduced-motion:reduce` from initial render and when it changes. Disable ambient pulses, drawing, number transitions, large translates, scroll reveals, marker travel and smooth programmatic scrolling. Render all states, route paths, timeline values and selection rings immediately; optional opacity crossfade ≤100ms is allowed only when it does not obscure text. Hover/press use color/border only. CSS animations cannot be the only source of content visibility.

New interaction cancels earlier animation and commits the latest state. Abort detached animation callbacks on navigation; no delayed updates to the wrong screen. Layout updates are bounded; no requestAnimationFrame polling for deterministic values. Validate interruption, rapid profile toggling, keyboard navigation during transitions, reduced motion, low-end throttling, and screen-reader announcement count. This specification records intended motion, not performance measurements from an implementation.


## Approved expressive motion revision

Marketing adds staggered paper-card entrances (700ms), poster settle (900ms), decorative SVG stroke drawing (850ms), flower entrance (900ms) and one-time intersection-triggered section settling (600ms). These are finite, not continuously moving backgrounds. Utility icons receive a 350ms hover nod and food artwork a small 350ms tilt. Information and buttons remain available immediately. Intersection observers are disconnected on navigation. Reduced-motion disables every addition and renders drawings and paper cards in their settled state.
