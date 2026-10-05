# QUEUE — Design system

Visual revision approved by the user: richer typography, SVG doodles, additional finite motion and a new palette. The values below supersede the original neon palette; product data and behavior remain governed by the existing hierarchy.

Authority: **03 → 02 → 08 → 04 → 05 → 06 → 07 → 01**. Tokens below are canonical visual values. Numerical event data is always read from 03. Energetic graphic expression belongs primarily to landing/posters; utility screens prioritize precise reading and action.

## Principles, identity and wordmark

Live, kinetic, urban, energetic, useful and precise. Use oversized Space Grotesk, strong contrast, route lines, graphic blocks and abstract festival posters. The QUEUE wordmark is uppercase Space Grotesk 700 with tight spacing (`-0.06em`); optional lime square terminator is decorative and hidden from assistive technology. Accessible name “QUEUE home.” Minimum rendered width 96px; clear space 12px. Never distort letterforms or substitute PULSE for the application name. PULSE has its own stacked uppercase event lockup and date/location metadata, distinct from navigation.

## Color primitives and semantic tokens

| Primitive token | Value | Intended use |
|---|---|---|
| --color-ink | #20152E | Text, structure, route casing |
| --color-bone | #FFF5E8 | Main canvas, soft reverse text |
| --color-lime | #A9EAD2 | Main Stage, primary live emphasis, breathing room |
| --color-coral | #FF8B60 | Event graphics; true conflict accent with readable text |
| --color-blue | #A9B8F4 | River Stage, abstract graphics |
| --color-violet | #CCB0EC | Echo Tent, abstract graphics |
| --color-white | #FFFFFF | Functional surfaces and reverse text |
| --color-muted | #8B8B86 | Decorative secondary marks; not small text on bone |
| --color-dark-surface | #2E213E | Live panels above ink canvas |
| --color-divider | #493957 | Dark-mode borders |
| --color-text-muted-light | #64576C | Derived accessible supporting text on bone/white |
| --color-border-light | #DED0D8 | Derived light separators, not sole control boundary |

| Semantic token | Light/planning | Dark/Live | Rule |
|---|---|---|---|
| --color-bg-canvas | bone | ink | Default page |
| --color-bg-surface | white | dark-surface | Inputs, expanded functional surfaces |
| --color-bg-emphasis | lime | lime | Critical timing blocks; ink text |
| --color-text-primary | ink | bone | Main text |
| --color-text-secondary | text-muted-light | muted | Supporting text; contrast checked |
| --color-border-subtle | border-light | divider | Decorative grouping |
| --color-border-control | text-muted-light | muted | Input/control outline if required |
| --color-action-primary-bg | ink | lime | Primary button |
| --color-action-primary-fg | white | ink | Primary button text |
| --color-live | lime | lime | Badge surface with ink text, not lime text on bone |
| --color-stage-main | lime | lime | Main identity |
| --color-stage-river | blue | blue | River identity |
| --color-stage-echo | violet | violet | Echo identity |
| --color-status-tight-bg | bone | dark-surface | Tight is neutral with text label |
| --color-status-conflict | coral | coral | Actual overlap, negative buffer, error accent |
| --color-focus | ink | lime | 2px ring + 2px separation from local surface |

Stage labels pair names/icons with color. All pastel emphasis surfaces use plum text. White text is prohibited over mint, apricot, periwinkle and lavender, including posters. Dark Live surfaces use warm cream text and mint emphasis. Supporting text uses #64576C on cream; focus uses #6D418B on light surfaces and mint on dark surfaces. Legacy variable names lime/blue/violet refer to the updated mint/periwinkle/lavender roles.

Token-pair calculations (sRGB relative luminance, rounded for reporting): ink/bone 16.58:1, ink/lime 16.45:1, ink/blue 4.64:1, ink/coral 6.19:1, text-muted-light/bone 5.64:1, muted/dark-surface 5.14:1, white/blue 4.07:1, white/violet 4.23:1. Muted/bone is only 3.01:1. Ratios validate token choices, not rendered image overlays or complete UI compliance.

## Surfaces, borders and shadows

Canvas → functional surface → selected/emphasis. Avoid making every row a card. Schedule lists, now strip, route instructions and timeline use alignment/dividers. Major graphic panels can be sharp. Borders: 1px subtle grouping, 1px control outline, 2px selected state. Dark divider is #493957; light divider is #DED0D8. Shadows only for overlays: `0 12px 32px rgba(17,17,17,.16)`; floating controls `0 2px 8px rgba(17,17,17,.10)`. No glass blur, glossy gradients or dashboard elevations everywhere.

Radius: `--radius-functional:8px`, `--radius-input:12px`, `--radius-surface:16px`, `--radius-button:12px`, `--radius-graphic:0px`. Full pill radius only for Live/status/filter/stage labels; avatar circles are identity markers, not container styling.

## Typography

`--font-display: 'Space Grotesk', 'Arial', sans-serif`; `--font-ui: 'Inter', 'Segoe UI', 'Arial', sans-serif`. Display: hero/event/stage/major live/countdowns. UI: navigation/body/forms/map/metadata. No serif. Weights 400 body, 500 metadata, 600 controls, 700 emphasis. Prefer locally bundled WOFF2 with `font-display:swap`; fallback remains readable when font download fails. Reserve layout proportions to minimize shifting.

| Role | Mobile size / line-height | Desktop size / line-height | Weight / tracking |
|---|---|---|---|
| Marketing hero | 48–64px / .98 | 88–112px / .94 | 700 / -.06em |
| Marketing section | 36–44px / 1.05 | 56–72px / 1.02 | 700 / -.05em |
| App page heading | 30–36px / 1.12 | 40–48px / 1.1 | 700 / -.04em |
| Performance/event name | 36–44px / 1.05 | 48–64px / 1.02 | 700 / -.045em |
| Live artist | 36–44px / 1.05 | 64–80px / 1 | 700 / -.045em |
| Critical countdown | 72–88px / 1 | 96–120px / .95 | 700 / -.05em |
| Breathing room number | 80–96px / 1 | 120–144px / .95 | 700 / -.06em |
| Card/section title | 22–24px / 1.2 | 24–28px / 1.15 | 700 / -.03em |
| Body | 16px / 1.5 | 16px / 1.5 | 400 / normal |
| Navigation/control | 14–16px / 1.4 | 14px / 1.4 | 600 / normal |
| Metadata | 12–14px / 1.45 | 12–14px / 1.45 | 500 / normal |
| Eyebrow | 12px / 1.4 | 12px / 1.4 | 700 / .08em |
| Map label | ≥12 CSS px / 1.3 | ≥12 CSS px / 1.3 | 600 / normal |

Scale with clamp within these bands; do not force a long name into a fixed height. Numeric values use `font-variant-numeric:tabular-nums lining-nums`. Duration units are adjacent and smaller, never clipped or ambiguous. AM/PM is retained for time accuracy; Live can show a big “8:30” only with adjacent PM context.

## Spacing, grid and containers

Tokens `--space-4/8/12/16/24/32/40/48/64/80/96/128` map to the corresponding px value; 8px is the base rhythm, 4/12 are optical/helper increments. Mobile gutter 20px. Tablet 32px. Desktop 32px at 1024–1279 and 48px at ≥1280.

Content max width: marketing **1360px**, application **1280px** excluding outer gutters. Center containers; width `min(max-width, viewport - 2*gutter)`. Desktop grid 12 columns/24px gap; tablet 8/24; mobile 4/16. Today uses approximately 55/45 content/map, not four equal analytics columns. Marketing section space 64 mobile, 96 desktop, 128 for final campaign block. App sections 24 mobile/32 desktop. Component padding 16 mobile/24 desktop; headline-to-description 16, related metadata 8, primary action spacing 24.

## Components and interaction states

| Component | Structure and sizing | State contract |
|---|---|---|
| Button | Rectangular 12px radius; 48px default height, 54px major mobile CTA; 16–24px horizontal padding; bold label and 20px arrow | Hover/pressed/focus/loading/disabled below |
| IconButton | ≥44×44px target, 20–24px icon; labelled accessible name | Hover local neutral surface; focus ring; no tooltip-only naming |
| QuickAction | Square-ish 80–120px wide; icon → short title → contextual line; 16px padding | Full area clickable; unavailable estimate changes copy, not destination availability |
| Input | 48–54px, 12px radius, visible 1px control outline, persistent label | Error text + icon/aria-invalid; no placeholder-only label |
| Search | Icon + input + clear; categorized rows with name/context/action | Empty/query/loading/no-results; unknown values never “0 min” |
| Tabs | Two-day tablist, underline or solid selected treatment; 44px targets | aria-selected; keyboard arrows; selected state text not color alone |
| FilterChip | 44px touch area; pill shape permitted | Toggle aria-pressed; selected ink/white; wraps on narrow layouts |
| StageBadge | Stage icon/name + colored dot/edge; text 12px | Color-independent name; no interactive appearance unless link |
| LiveBadge | Label + small dot, restrained pulse | LIVE only for fresh simulated state; CACHED/OFFLINE otherwise |
| Status | Icon + explicit text | WITH_ROOM/WITHIN_PLAN/TIGHT/CONFLICT/unavailable use labels |
| PerformanceCard | Priority → name → effective time/stage → countdown → walk/leave → actions | Saved/Must See controlled by shared IDs; long names wrap |
| ScheduleRow/Block | Time/artist/stage/save, 1px division or stage-edge | Now/past/delayed/conflict text; same behavior list/grid |
| DecisionCard | Activity/name → complete total → buffer/context → arrow | Never promote a partial service time as full total |
| TimeBreakdown | Current → walk/queue/prep/eat/onward → arrival/target | Ordered list; duration and checkpoint text; unknown values explicit |
| BreathingRoom | Number/unit → arrival/start → total → freshness | Lime emphasis for with-room; neutral TIGHT; coral accent only negative/error |
| RouteOption | Native radio + profile + duration/crowd/accessibility | Selected border/check; atomic geometry/timing update |
| MapMarker | One functional icon, name, selected ring | ≥44px target; unscaled readable labels; 08 collision rules |
| FriendAvatar/Marker | Initials + approximate-zone halo | Paused/stale dashed + words; no social online dot |
| VenueSheet | Title/walk/crowd/accessibility → Navigate → expandable detail | Collapsed/expanded; selected context visible on map |
| BottomSheet | 16px top corners; heading/close/expand; handle optional | Focus and modal status per 07; drag never required |
| Modal | White/bone or dark surface, 16px radius; max width 640px | Focus trap, Escape, return focus; inner scroll |
| Toast | Short local-action feedback, 16px padding, max width 420px | 4s display; polite live region; not sole home for consequential update |
| OfflineBanner | Label + saved essentials + 19:16 freshness + retry | Persistent while stale/offline; no fake successful reconnect |
| UpdateBanner | Old/new time, leave consequence, See what fits, Dismiss | Dismiss by update version only; schedule remains updated |
| EmptyState | Brief heading, practical reason, one recovery CTA | No fabricated content; no-target/saved/search/unavailable variants |

Button states: default uses semantic primary tokens. Hover lifts 2px and arrow shifts 3px over 200ms. Press scales .98 over 120ms. Focus uses the two-tone separated ring. Disabled has disabled semantics and static appearance, ink/bone at reduced prominence only if contrast remains legible; explain unavailable action. Loading retains label and width, adds a small status indicator and aria-busy; prevent duplicate submission but allow cancel/navigation. Local synchronous actions do not need artificial loading.

## Dark / Live mode

Ink canvas, dark-surface secondary area, bone text, lime next-moment block or numeric emphasis. One critical next set, one Now strip, one leave time, four large essentials. No thin grey critical text or dense cards. Dark-primary actions use lime/ink; outline uses muted boundary/bone text. Medical inherits clarity, not decorative “live energy.” Phase/freshness change label wording rather than flashing the entire screen.

## Illustration, doodles, photography and icons

Create abstract fictional artist posters using concentric shapes, offset type, stage-color blocks, sound-wave linework, sticker labels and restrained grain. Supporting illustrations: pizza slice, wristband, water bottle, speaker, route arrow, flags and clock, using bold simple forms. Grain is static CSS/SVG and ≤8% opacity; avoid large raster textures/GIFs/video backgrounds.

Doodles (stars, scribble arrows, motion lines) belong to marketing, event graphics and empty states, not medical/route instructions/accessibility labels. Do not depend on real celebrity promotional photos. If appropriately licensed event-environment assets are available later, use crowds/stage lights/from-distance environments with documented source; abstract assets are sufficient without new external media.

Use a single outlined functional family (24px viewBox, 1.75px stroke, rounded caps), with stage, clock, route, food, water, restroom, medical, merch, friends, pass, gate, info, lockers, quiet/accessibility, search/layers. Icons are decorative beside text; icon-only controls have explicit accessible names. Do not mix emoji as utility icons with a line icon family.

## Do / don't and acceptance

- Do make “27 min breathing room” unmistakable; do not use star ratings as the primary food ranking.
- Do use a sharp event panel alongside functional rounded inputs; do not round every section into a SaaS card.
- Do show stage name and icon; do not rely on neon color to identify it.
- Do use calm TIGHT copy with Continue anyway; do not use panic-red for positive eight-minute breathing room.
- Do separate QUEUE utility branding from PULSE expression; do not reuse warm travel-editorial or finance-product styling.
- Do maintain readable metadata and 44px targets; do not reduce labels to 8px to fit a map.

Future QA must measure actual rendered contrast, font fallback wrapping, 200% text scaling, selected/disabled states, focus visibility and all token uses. Documentation review is not proof of a rendered implementation passing WCAG.


## Approved typography and illustration revision

Use Impact (Arial Narrow/Space Grotesk fallback) for oversized festival headlines and artist names. Use Georgia italic (Times New Roman fallback) for expressive editorial phrases and marketing time stamps. Retain locally bundled Space Grotesk for structural headings/numbers and Inter for functional reading. This four-part hierarchy adds contrast without changing labels or values. On mobile, constrain headline size and retain 12px minimum metadata.

Use original code-native SVG line drawings: flower, orbit, starburst, wave, curved arrow and smile. Decorative illustrations are aria-hidden, cannot capture pointer events, and cannot obscure actions or data. Add music, headphones, compass and route icons to marketing section cues; utilities retain labelled functional icons. Main stage is mint, River periwinkle, Echo lavender.

Latest user-approved base revision: replace warm cream with cool cloud #F5F6FA; use white functional cards and header surfaces, #EAECF3 secondary surfaces, and #D9DCE7 dividers. Accent palette remains mint/apricot/periwinkle/lavender with plum text. Desktop primary navigation uses icon-and-name segmented route tabs with an unmistakable selected surface. Mobile retains icon-and-name bottom navigation. Route links retain navigation semantics and aria-current, rather than misusing tabpanel semantics for separate pages.

Latest identity revision: QUEUE uses an original SVG Q monogram (queue tick marks and route-tail) plus bespoke vector letterforms, not live text as its wordmark. Public logo and favicon assets are `public/queue-logo.svg` and `public/queue-mark.svg`; the linked inline logo retains the accessible name “QUEUE home.” Remove the PULSE/date/location lockup from the application header. Event identity remains in calendar, pass, setup and content. Header layout keeps the logo, icon/name primary navigation and aligned utility controls. Mobile saved-set rows place stage labels below artist names; desktop uses aligned time/artist/stage columns. Additional finite logo trace, active-tab settling and hover gestures respect reduced motion.

Latest user direction supersedes the long marketing story: landing consists of one concise hero, one demo CTA, a compact festival illustration, three short feature links and a minimal honest footer. Remove the manifesto, long timeline explanation, standalone Live/decision/map sections and repeated final CTA from landing; their functionality remains in the app. The logo is a solid original loop-and-direction Q with a mint cut-through and bold filled vector lettering. No rounded app-icon tile or monoline lettering. Maintain bounded artwork heights and prevent overlap with following sections at mobile widths.

Latest mobile icon treatment: navigation and Today/Live essentials use standalone line icons with visible names, without filled tab boxes, icon containers or quick-action card borders. Active navigation uses stronger icon/name weight and a small dot. Links retain comfortable touch areas and focus outlines; short utility context remains below the name. Desktop treatment remains unchanged.

Latest identity direction supersedes previous Q marks: a continuous winding route forms an open Q, with an apricot starting point and a four-point spark at its exit. The route represents navigating the festival; the spark represents arriving at the live moment that matters. Use the original filled vector wordmark with this unboxed mark. Keep the small mark legible, preserve the “QUEUE home” accessible link name, and use a finite spark gesture on hover with reduced-motion support.

Latest user identity revision supersedes route-and-spark treatment: use a minimal monochrome custom vector wordmark. An open Q and a directional tail subtly suggest moving onward; consistent strokes and generous letter spacing keep the identity calm. Remove the separate monogram beside the wordmark, colored starting point, spark and logo animation. The favicon uses the same Q. Preserve responsive header sizes and accessible naming.

Current identity: a bespoke lowercase queue wordmark with shared circular bowls, consistent six-unit strokes and optically spaced letters. The q descender bends forward, suggesting the next step without a literal arrow or pictogram. This supersedes earlier uppercase marks. Use a single inherited foreground color, no tile, spark, colored dots or logo animation. The standalone q is the favicon.

Current user direction supersedes wordmarks: display only the standalone Q symbol, with a forward-bending tail and three sound bars in its negative space. It combines wayfinding and live music in one monochrome mark; retain the accessible QUEUE home name. Desktop/mobile navigation uses bold icon-and-name links without segmented containers, filled selections, or boxed backgrounds. Active state uses foreground emphasis and a small dot; Calendar is also unboxed. Preserve touch targets and keyboard focus.

Current symbol revision: a broken circular time loop with a bending route reaching a small stage block. An outward wedge gives the loop a Q silhouette and conveys moving onward. This replaces the sound-bar Q. Use only the original monochrome SVG symbol in branding; no visible wordmark. Ensure readability at 32px and retain the QUEUE home accessible name.

Latest brand direction supersedes literal Q/clock symbols: three flowing parallel paths turn upward toward a four-point live-moment spark. This abstract monochrome symbol expresses the different festival activities converging toward what matters. Use symbol only, no wordmark or tile. Retain QUEUE home accessible naming and existing header alignment.

Canonical identity — Modular Shift: the latest supplied brand brief supersedes earlier logo experiments. A geometric Q is constructed from a 12-unit band, a 20-unit counter, a six-unit release gap and two square positions moving diagonally outward. The positions become the tail. Use the standalone SVG in app navigation; custom QUEUE wordmark and primary symbol-plus-wordmark lockup are available for introductions. Base colors are Ink #191919, Paper #F6F5F0, Turn #D9F36B; the UI mark inherits its foreground, including existing dark-mode and stage context. LogoMark and Logo live in src/brand-identity.js. Pure black/white and light/dark assets are in public. Clear space 12 design units; preferred UI minimum24px, favicon16px. No added animation. /brand records six concepts, comparative design judgments, construction, variants and applications.
