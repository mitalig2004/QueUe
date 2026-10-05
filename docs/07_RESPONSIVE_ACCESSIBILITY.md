# QUEUE — Responsive and accessibility specification

Authority: **03 → 02 → 08 → 04 → 05 → 06 → 07 → 01**. This document supplies mandatory adaptation and accessibility acceptance criteria. Fixture times and route geometry cannot be replaced to make a layout fit. AA is a target for future implementation, not a claim of certification or completed usability testing.

## Breakpoint and container contract

| Width band | Layout | Gutter / navigation |
|---|---|---|
| <375px, defensive support to 320px | Single column; permit title wrapping, no horizontal page scroll | 20px; mobile nav |
| 375–767px | Mobile companion, chronological schedule, full map + sheet | 20px; 4-column composition grid; bottom nav |
| 768–1023px | Tablet planning; 8-column grid; stack critical content before map | 32px; bottom nav retained; header simplified |
| 1024–1279px | Desktop planning, stage/time schedule, map + panel | 32px; 12-column grid; top navigation |
| ≥1280px | Desktop with max content widths | 48px; centered 1280px app / 1360px marketing |

Mandatory QA viewports: **375, 390, 430, 768, 1024, 1280, 1440, 1600px**. Test mobile at approximately 812–932px height and desktop at 900px; also short-height landscape. At 1440/1600 containers stop growing; do not create vast empty dashboard columns. Width transitions preserve state and do not remount a new unrelated map model.

Bottom navigation height 64px + `env(safe-area-inset-bottom)`; page padding-bottom at least nav height + 24px. Header mobile 64px + top safe area where applicable, desktop 80px. Sticky CTAs sit above nav, never under it. Avoid simultaneous header/nav/CTA consuming most of a short viewport; use in-flow CTA in landscape/large text. Use dvh with a vh fallback for map height. Keyboard opening scrolls active form/search input into view, without compressing the map sheet into an unusable sliver.

## Screen-by-screen adaptation

| Screen | 375/390/430 mobile: order, layout, CTA and scrolling | 768 tablet | 1024+ desktop / large desktop |
|---|---|---|---|
| Landing | Logo/demo + menu; headline 48–64; copy/actions; graphic hero below. Sections stack story/live/decision/map. Normal document scroll; no bottom app nav. Primary CTA 54px, full width where needed | Hero two columns only if text/poster fit; otherwise stack. Section grids 2 columns | Hero copy + large graphic composition; section headings 56–72, hero 88–112. Max 1360; alternating intentional sections; nav anchors visible |
| Login | Logo/demo → heading 36 → labelled fields → submit → alternate auth. One column; page scroll; keyboard-safe controls | Form max 480px, artwork optional alongside | Form 440–480px + abstract poster, max 1120; content remains aligned, no tiny form in excessive whitespace |
| Signup | Same, name added first; 48–54px inputs; submit below fields; error text pushes layout naturally | Same as login | Same as login; local-only disclosure remains visible |
| Setup/Preview | Event/date/pass → choices → primary action. Each choice ≥64px row; poster secondary; no forced demo blocker | Content + small graphic if room | Two-column event graphic/setup; Must See choices remain readable and keyboard operable |
| Today | Header → next priority → time/countdown/leave → Navigate + signature action → Now → 2×2 quick actions → secondary merch/medical → saved preview → map link/preview. No poster obscures critical text. Signature action high in hierarchy, ideally visible near first screen at standard text size; allow scroll rather than clipping | Priority + now/actions main column; map below or narrower side only if ≥340px available | Approximately 55/45 left context/schedule/decisions + substantial right map. Countdown 96; no four-column analytics dashboard. Map preview ≥440px tall |
| Live Mode | Now concise, Next name 36–44, time/countdown 72–88, leave large, planner CTA then four 54px+ essentials (2×2 if four columns too narrow). Ink/bone/lime. Header exit and bottom nav usable. Normal vertical scroll for short heights | Content max 720; emphasize glanceability, not extra features | Max 960, side-by-side Now/Next or large aligned block; same sparse actions. No schedule/map dashboard inserted. Before/post show phase-aware context |
| Schedule | Day tabs → wrapping filters → conflict/transfer notices → chronological rows. Time, artist/stage and save have independent room; no stage grid squeezed into phone. Body scroll, tabs may stick below header without hiding focus | Chronological list or three stage columns only if all target/text widths fit; default list | True stage-column + time-axis view from 17:00 to next-day 01:00. Positions use effective start/end epoch values; duration affects block height. Overlap visible across columns. Min block height for labels; mobile list remains full equivalent |
| Performance | Artist/stage/time → priority/save → countdown/leave → Navigate → conditions. Abstract poster below or omitted from critical area; 36–44 name, 16 body | Detail + modest poster; conditions in aligned list | Two-column detail + poster; 48–64 artist title. No biography/streaming content; long names wrap |
| Map | Available viewport between header/nav; floating Back/Search/Layers. Collapsed 160–200px nonmodal sheet, at least 55% map visible where feasible; expand max 85% and internally scroll. Focusable Expand, not drag-only. Text list via clearly labelled control | Map ≥480px with bottom sheet or 60/40 panel if 280px panel fits | 65–75% map + 320–380px side panel. Preserve 1000×700 geometry ratio, pan/zoom viewport. Max 1280; full contextual map, not stretched SVG |
| Food | Target/context → wrap filters → one-column venue cards/rows → distance/queue/complete total/price/diet. Card art secondary, max ~180px; no horizontal carousel required | Two-column results if each ≥300px | Two-column strong venue graphic + useful comparison detail, max 1280; keep complete timing visible |
| Decision planner | URL-backed full-height modal sheet from Today, or direct page. Target/budget → activity totals → actions; top Close/back visible. 16px body; list scrolling | Modal up to 640px or page | Centred 640px modal; direct page max 960. No fake generic recommendation labels |
| Decision result | Outcome → target and venue → current/timeline → arrival/start/buffer → route CTA/alternatives. Breathing-room summary immediately after outcome or beside short metadata; full timeline below. CTA in flow or sticky above nav with enough content clearance. 80–96 number; no horizontal timeline required | 60/40 timeline/consequence if widths fit, otherwise mobile ordering | Timeline left/consequence right, 120–144 buffer number. Aside may stick 24px below header while remaining within content; both time comparison and breakdown visible |
| Route | Full map + instruction sheet. Endpoint/profile/time visible in collapsed/medium state; expanded instructions scroll. Preference radios 48px rows; primary action clear | Map/panel only when space supports both | Map + side route panel; profile change replaces geometry/time together. Route fits endpoints within uncovered map bounds |
| Restrooms/Water/Medical/Merch | Utility name/walk/wait/context → Navigate/Add → alternatives → optional map. Medical keeps action first, no decorative poster. Merch timing follows result ordering | Utility + small map or stack | Utility left/map right, high clarity; no unrelated service content. Medical never becomes a busy promotional surface |
| Friends | Sharing/privacy/duration → friend rows → group meetup. Avatar/name/zone/status/age then action; ≥64px rows, group point not chat | Friends main + map when useful | Approximately 55/45 list/group + friend-layer map. Controls never hidden in a decorative friend card |
| Friend detail | Zone/status → intent → meetup consequence → route CTA. Rohan timeline 6+5+9; paused friend's alternative prominent | Result-style layout | Timing left/buffer right; cached/paused disclosure above CTA |
| Pass | Event/name/type → decorative QR → Gate 2 → emergency/rules/accessibility/exit. Pass scales within gutter, not viewport overflow. Label invalid-for-entry adjacent to placeholder | Pass max 420 + info stacked or paired | Pass 360–420px + essentials accordion; no ticket-commerce links |
| Search | Full-height dialog with input and Close at top; internally scrolling categorized results; keyboard-safe. Direct URL full page, with back | Modal 640px | Modal 640px with input/results; direct page max 800. Results retain current effective times/freshness |

Schedule desktop block top/height uses time intervals on the axis, not a separate sequential row for every artist. If short performances cannot fit text, present minimum-size accessible labels connected to their true interval. Do not alter start/end data for visual alignment. Always offer the same chronological information to screen readers.

## Semantic structure and screen-reader behavior

Use header/nav/main/footer landmarks; one h1 per screen; logical heading order. Skip link targets main. Primary and utility navigation are distinctly labelled. Buttons act, links navigate, checkboxes/radios/selects represent selection. Use native controls before custom widgets. Meaningful text is in DOM, not CSS pseudo-content or poster-only imagery.

Icon-only Search/Pass/Close/Zoom/Layer controls have names. Decorative SVG/art is aria-hidden or has a concise descriptive alternative; avoid repeating all visible labels. Schedule save controls include artist name and aria-pressed. Filters expose selection; tabs expose aria-selected and arrow-key behavior. Map selection announces name, distance, crowd freshness and availability via one concise polite region, with a text-list alternative.

Do not announce every countdown digit or timeline animation frame. Commit final data before an announcement. Delay banner announces once per update version. Offline banner announces once per transition. Toasts use role=status; routine content does not steal focus. Actual user-action errors may use alert selectively; medical screen loading is not itself an emergency alert.

## Focus, keyboard, dialogs and bottom sheets

All flows complete using Tab/Shift+Tab, Enter/Space and labelled controls. Focus ring is ≥2px with offset/separation; it cannot be hidden by sticky headers, sheets or nav (scroll-margin reserves their height). Page navigation focuses h1 or main with tabindex -1; Back restores origin where feasible. Opening account popover moves focus to its first control; Escape/outside click closes, returns trigger focus. Tab can leave a nonmodal popover normally.

Modal dialog/sheet: role=dialog, aria-modal=true, named heading, visible Close; record trigger; inert background; focus first purposeful control/heading; trap Tab; Escape closes; return focus. Closing during animation must work. No stacked modals. Direct-load overlay has a sensible parent exit.

Collapsed map POI sheet is nonmodal: background map stays operable, no focus trap/inert, selected button remains reachable. Expansion above 55% map height can become an explicit named modal details sheet with the same trap/close rules. Expand/Collapse buttons supplement optional drag. Sheet handle is not its only control. On collapse, return focus to selected marker or expand trigger. Mobile orientation/resize must not drop focus or remove its control.

## Touch, text scaling, contrast and color independence

All targets at least **44×44 CSS px**, important mobile controls 48–54px high. Icon markers may look smaller but have independent target hit areas; resolve overlaps by clustering/list selection rather than shrinking targets. Minimum 8px separation between dense distinct controls where possible.

Normal text contrast ≥4.5:1; large text ≥3:1; essential non-text controls/state boundaries ≥3:1. Large means ≥24 CSS px regular or ≥18.66px bold. Verify actual stage/background combinations from 05. Primitive muted #8B8B86 is unsuitable for small text on bone; use #5F5F59. State names/icons and patterns supplement color; positive TIGHT is neutral, actual conflict has text and accent.

Support 200% text scaling and 400% browser zoom/reflow to 320 CSS px without two-dimensional page scroll, except the inherently spatial map with a complete linear alternative. Do not lock orientation, disable zoom, set maximum-scale=1 or use fixed heights for text-heavy cards. Break long names; keep durations/time units together; allow action groups to wrap. Metadata/map labels remain ≥12px CSS, body 16px; using smaller labels to force fit is prohibited.

## Map and festival-context accessibility

Text alternative lists stages, food, essentials, approximate friends, wait/freshness, route profile and ordered instructions. It permits POI selection/navigation with no visual map use. SVG viewBox is preserved; labels/controls are unscaled readable screen-space elements. Reduced motion leaves paths and selection completely visible.

Step-free profile, accessible Restroom B, Main viewing area, Quiet Zone, water and Medical are discoverable without knowing their color. Low-sensory layer names what it includes; it does not promise sensory safety. Real conditions must be checked with staff/signage. Privacy controls never infer disability or health needs.

One hand: primary actions towards the lower content area, no required top-corner-only path to Navigate; Live essentials large and reachable. Outdoor readability: ink/bone contrast, no transparent overlay over noisy artwork; low light: Live dark surfaces, no bright full-screen flashing. High distraction: short useful copy and explicit timing, no engagement notifications. Medical gives nearest help and staffed directions first, no motion or competition for attention.

## Network, forms, errors and reduced motion

Errors identify field/problem and recovery, not only red outlines. Associate text via aria-describedby and aria-invalid; don't announce validation on each keystroke. Submit moves focus to the first failing field or a linked summary. Password show/hide preserves input/cursor and names its state. No real credential transport/storage is implied.

Network banners distinguish static availability from stale/unavailable queues/crowds/friends. Last update 19:16, current 19:18, age two minutes in patchy scenario. Persistent schedule update explains old/new time and consequence; dismiss does not revert state. Route unavailable still offers text landmarks, destination and staff guidance. Search no-results retains editable query and Clear. Never render null as zero or a blank unlabelled control.

Apply `prefers-reduced-motion` at load and on changes. Remove drawing/pulses/number rolling/translates/smooth scrolling/ambient movement. Preserve final values, selected state, route visibility and feedback via text, borders or ≤100ms fade. Motion specification 06 gives the same behavior; reduced motion is not reduced information.

## Required QA matrix for future implementation

At every required width inspect landing, Today, Live, schedule, map, food result, friends, pass, forms and Search. At each desktop width check intentional map presence and stage/time layout. At each mobile width check signature action hierarchy, safe nav clearance, sheets and touch sizing. Record actual results later; this package does not claim checks have passed in application code.

Verify no horizontal page overflow, clipped time/unit/label, intersecting controls, hidden map tools, button clipping, excessive blank desktop space, modal overflow or nav-over-content. Test Normal/Delayed/Patchy/Before/Post, unknown route/POI, null estimates, paused friend and empty saved state. Repeat selected core flows with keyboard only, reduced motion, font-loading failure, 200% text, 400% zoom, screen-reader landmarks/live regions, short landscape and virtual keyboard. Automated scans supplement manual task checks; they do not establish usability research outcomes.

Latest mobile accessibility revision: use consistent 24px page gutters, 32–40px section separation, 16px quick-action gaps and comfortable 1.65–1.75 reading line-height. Primary mobile actions are at least 52–54px high; filters are 48px. Inputs use 16px text to avoid automatic iOS zoom. Mobile navigation has additional clearance, visible labels and safe-area padding. Calendar/overlay surfaces retain their own 16px screen clearance. Keyboard focus is explicit on light/dark surfaces; forced-colors mode adds system-color borders and focus rings. Artwork stays inset and bounded so it cannot cover text or actions.
