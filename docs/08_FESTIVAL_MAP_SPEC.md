# QUEUE — Festival map, geometry and route graph

Authority: **03 → 02 → 08 → 04 → 05 → 06 → 07 → 01**. Document 03 owns durations, document 08 owns coordinates and paths. This is an illustrative operational map, not surveyed geography, GPS or a navigation guarantee. All supplied POI anchor coordinates are retained exactly.

## Coordinate system and bounds

Logical SVG canvas: **1000 × 700**, `viewBox="0 0 1000 700"`. Origin top left, +x right/east, +y down/south; north is up. Normalized position is `(x/1000,y/700)`; percentage positions are those fractions ×100. Do not interpret 700 as a 1000-high square or use `preserveAspectRatio="none"`. Preserve aspect ratio and use a viewport transform with pan/zoom. Coordinates, route vertices and crowd footprints share one transform.

Venue boundary is rectangle `(40,30)` to `(960,680)` with Gate 2 opening centered at `(500,650)`. North marker occupies `(935,45)` and is screen-space UI. Decorative trees/river outside the west boundary may establish context but do not create walkable routes or measured distance. No meter scale is shown: use “Illustrative map / walking estimates in minutes.” Geometry is not calibrated to physical distance.

## Zones and footprints

| Zone/feature | Logical bounds or shape | Purpose |
|---|---|---|
| Main Stage | rect x445 y55 w150 h80 | Lime stage footprint; audience south |
| River Stage | rect x190 y410 w160 h65 | Blue stage footprint; entry east/north |
| Echo Tent | rect x700 y410 w120 h75 | Violet tent; entry west |
| Central Lawn | ellipse cx520 cy300 rx110 ry65 | Shared orientation zone, not an exact user dot |
| Food Court A | rect x275 y305 w155 h100 | Slice/Taco zone |
| Food Court B | rect x620 y305 w155 h105 | Bombay/Green zone |
| Water 2 zone | rect x420 y200 w90 h45 | Tap, circulation junction and meeting apron |
| Quiet Zone | rect x810 y495 w95 h60 | Lower-density zone near east boundary |
| Main accessible viewing | rect x565 y130 w65 h30 | East-front viewing area |
| Gate/entry apron | rect x455 y615 w90 h55 | Gate 2, exits toward south |

POI coordinates are selectable anchors, not building corners. Label offsets do not change the POI location. Food markers may cluster at low zoom; the court label opens a list of its venues, not a fake combined queue.

## Canonical POI table

Priority: P1 stages/selected/destination/emergency, P2 courts/essential services, P3 individual vendors/secondary facilities. Selected POI always becomes P1. Icon names refer to one outlined functional family in 05. Crowd defaults not supplied by the request are explicit specification decisions below.

| ID | Name | Type | x | y | Priority | Icon | Default crowd | Accessibility metadata |
|---|---|---|---:|---:|---|---|---|---|
| gate-2 | Gate 2 / Entry | entry | 500 | 650 | P2 | gate | MODERATE | Step-free entry/exit in fixture |
| main-stage | Main Stage | stage | 520 | 100 | P1 | stage | BUSY | Viewing area nearby |
| river-stage | River Stage | stage | 270 | 450 | P1 | stage | MODERATE | Shared step-free approach |
| echo-tent | Echo Tent | stage | 760 | 450 | P1 | stage | LOW | Shared step-free approach |
| central-lawn | Central Lawn | zone | 520 | 300 | P2 | zone | MODERATE | Main pedestrian circulation |
| food-court-a | Food Court A | food-zone | 350 | 355 | P2 | food | BUSY | Level approach in fixture |
| food-court-b | Food Court B | food-zone | 690 | 355 | P2 | food | MODERATE | Level approach in fixture |
| slice-club | Slice Club | food | 320 | 335 | P3 | food | BUSY | Vegetarian options; level access |
| taco-lab | Taco Lab | food | 390 | 375 | P3 | food | BUSY | Vegetarian options; level access |
| bombay-bites | Bombay Bites | food | 655 | 335 | P3 | food | MODERATE | Vegetarian options; level access |
| green-room | Green Room | food | 720 | 385 | P3 | food | MODERATE | Vegetarian; vegan options; level access |
| merch-main | Merch Main | merch | 620 | 220 | P2 | merch | MODERATE | Level shared route |
| merch-kiosk | Merch Kiosk | merch | 420 | 275 | P3 | merch | LOW | Level shared route |
| water-1 | Water 1 | water | 210 | 320 | P2 | water | LOW | Refill point |
| water-2 | Water 2 | water-zone | 450 | 220 | P2 | water | LOW | Tap + group apron; distinct endpoints |
| restroom-a | Restroom A | restroom | 800 | 300 | P2 | restroom | MODERATE | No accessible-facility claim |
| restroom-b | Restroom B | restroom | 350 | 540 | P2 | restroom | LOW | Accessible facilities marker |
| medical-point | Medical Point | medical | 430 | 590 | P1 | medical | LOW | Staffed help point, not a care guarantee |
| info | Info | info | 520 | 560 | P3 | info | LOW | Ask staff for directions/access support |
| lockers | Lockers | lockers | 570 | 590 | P3 | lockers | LOW | No availability or reservation claim |
| quiet-zone | Quiet Zone | quiet | 850 | 520 | P2 | quiet | LOW | Low-sensory option, not guaranteed silence |
| accessible-viewing | Accessible Viewing Area | accessibility | 590 | 145 | P2 | accessibility | MODERATE | Main Stage east-front area |

## Approximate people and internal graph nodes

These points anchor simulated zones and path intersections, not real person's exact locations. A friend marker is rendered inside a zone halo (radius 22 logical units), labelled approximate; no accuracy radius or breadcrumb history is claimed.

| Node ID | x | y | Meaning |
|---|---:|---:|---|
| maya-zone | 500 | 430 | Current approximate Central Lawn south approach |
| rohan-zone | 360 | 345 | Near Food Court A, distinct from Slice queue exit |
| aanya-zone | 560 | 155 | Main Stage approximate viewing zone |
| kabir-zone | 295 | 465 | River Stage last-known zone, paused |
| south-junction | 500 | 590 | Medical/Lockers/Gate junction |
| lower-connector | 500 | 480 | River/Echo connecting corridor |
| lawn-east | 640 | 300 | East side of Central Lawn |
| lawn-west | 410 | 300 | West side of Central Lawn |
| water-2-tap | 450 | 228 | Near refill access endpoint; Maya access 2 min |
| water-2-junction | 475 | 210 | Main Stage approach junction |
| water-2-meet | 480 | 235 | Group apron endpoint; Maya 4 min |
| north-west | 350 | 210 | Quieter west perimeter bend |
| main-west | 420 | 135 | West stage approach |
| east-ramp | 680 | 170 | No-stairs illustrative ramp approach |
| river-turn | 300 | 395 | Turn north of River Stage; named landmark |
| echo-turn | 700 | 410 | West side of Echo connector |

Maya's own map marker remains visible when her sharing is OFF: private self-orientation is independent of outward sharing. Rohan appears Available, Aanya At stage, Kabir Location paused. PATCHY marks friend timestamps 19:16 and uses dashed halo + “Last zone”; paused location does not turn into a live dot.

## Pedestrian graph and timing model

The graph consists of route-template directed edges between consecutive nodes in the table below. Node coordinates are universal; **edge minute weights belong to a contextual journey template**, keyed by `(origin,destination,preference,templateId)`. This explicitly avoids treating independently supplied access/service-exit times as universal geographic distances. All route times remain the 03 fixture contract.

For example Maya → Water refill uses a near-access corridor, while Water after a refill → Main includes the service exit. These cannot be spliced into a six-minute replacement for Maya's canonical direct eight-minute walk. Do not run unrestricted Dijkstra over weights from different templates; “FASTEST” means fastest supported template for that journey. Geometry can share intersections while context-specific weighted edges differ. An unspecified reverse journey is not inferred from a forward duration.

Render primary corridors as 14-unit bone/white paths, with a 1-unit neutral edge. Draw every template's consecutive segments as available walking paths (without displaying every route line at once). Shared orientation spine: Gate 2 ↔ south-junction ↔ Info ↔ lower-connector ↔ Maya/lawn approaches ↔ Central Lawn ↔ Water/merch approach ↔ Main. Lateral connectors: River ↔ Food A, Echo ↔ Food B, both courts ↔ Lawn, water/merch ↔ Main. Perimeter west route bypasses BUSY Food A; east ramp approaches Main through accessible viewing.

### Timed important route templates

Vectors below give minutes for each consecutive edge; sum is total. Every vertex is a POI or internal node above.

| Template ID | Origin → destination | Profile | Ordered nodes | Edge minutes | Total / route crowd |
|---|---|---|---|---|---|
| maya-main-fast | maya-zone → main-stage | FASTEST | maya-zone, central-lawn, water-2-junction, main-stage | 3,2,3 | 8 / MODERATE |
| maya-main-quiet | maya-zone → main-stage | LESS_CROWDED | maya-zone, lawn-west, north-west, main-west, main-stage | 3,3,2,2 | 10 / LOW |
| maya-main-step | maya-zone → main-stage | STEP_FREE | maya-zone, lawn-east, east-ramp, accessible-viewing, main-stage | 3,3,3,2 | 11 / LOW |
| maya-slice | maya-zone → slice-club | ALL | maya-zone, food-court-a, slice-club | 5,1 | 6 / MODERATE |
| slice-main-fast | slice-club → main-stage | FASTEST | slice-club, water-2-tap, river-turn, main-stage | 2,3,3 | 8 / MODERATE |
| slice-main-quiet | slice-club → main-stage | LESS_CROWDED | slice-club, lawn-west, north-west, main-west, main-stage | 2,3,3,2 | 10 / LOW |
| slice-main-step | slice-club → main-stage | STEP_FREE | slice-club, central-lawn, lawn-east, east-ramp, accessible-viewing, main-stage | 2,2,3,2,2 | 11 / LOW |
| maya-rohan | maya-zone → rohan-zone | ALL | maya-zone, food-court-a, rohan-zone | 5,1 | 6 / MODERATE |
| rohan-main | rohan-zone → main-stage | ALL | rohan-zone, lawn-west, water-2-junction, main-stage | 3,3,3 | 9 / MODERATE |
| maya-water-meet | maya-zone → water-2-meet | ALL | maya-zone, central-lawn, water-2-meet | 2,2 | 4 / LOW |
| rohan-water-meet | rohan-zone → water-2-meet | ALL | rohan-zone, lawn-west, water-2-meet | 3,3 | 6 / LOW |
| aanya-water-meet | aanya-zone → water-2-meet | ALL | aanya-zone, water-2-junction, water-2-meet | 3,2 | 5 / LOW |
| maya-water-tap | maya-zone → water-2-tap | ALL | maya-zone, central-lawn, water-2-tap | 1,1 | 2 / LOW |
| water-tap-main | water-2-tap → main-stage | ALL | water-2-tap, water-2-junction, main-stage | 1,3 | 4 / LOW |
| echo-main-transfer | echo-tent → main-stage | ALL | echo-tent, echo-turn, food-court-b, lawn-east, merch-main, main-stage | 2,3,3,3,3 | 14 / MODERATE |
| main-river-transfer | main-stage → river-stage | ALL | main-stage, water-2-junction, lawn-west, food-court-a, river-stage | 3,3,3,3 | 12 / MODERATE |

Slice fastest instructions are exactly: Leave Slice Club → 2 min → Pass Water 2 → 3 min → Keep right at River Stage (river-turn, north of its footprint) → 3 min → Main Stage. The path's westward turn reflects a demonstration pedestrian diversion; it does not traverse the River stage footprint. Quiet/step-free variants have different north/west/east geometry and their own labelled waypoints. Do not show the fastest instructions beside the quiet route.

### Other supported timed edges/templates

Each row is a complete template with no hidden timing steps. ALL profiles share the level corridor, display “Same available route”; no false +2/+3 penalty. These connect all remaining fixed-duration decisions.

| Template / origin → destination | Ordered nodes | Edge minutes | Total |
|---|---|---|---:|
| maya-river / maya-zone → river-stage | maya-zone, lower-connector, river-stage | 2,4 | 6 |
| maya-echo / maya-zone → echo-tent | maya-zone, lower-connector, echo-turn, echo-tent | 4,6,2 | 12 |
| maya-taco / maya-zone → taco-lab | maya-zone, food-court-a, taco-lab | 3,1 | 4 |
| maya-bombay / maya-zone → bombay-bites | maya-zone, food-court-b, bombay-bites | 6,1 | 7 |
| maya-green / maya-zone → green-room | maya-zone, food-court-b, green-room | 4,1 | 5 |
| taco-main / taco-lab → main-stage | taco-lab, lawn-west, water-2-junction, main-stage | 4,3,3 | 10 |
| bombay-main / bombay-bites → main-stage | bombay-bites, lawn-east, merch-main, main-stage | 2,2,3 | 7 |
| green-main / green-room → main-stage | green-room, food-court-b, lawn-east, merch-main, main-stage | 1,3,2,3 | 9 |
| maya-merch / maya-zone → merch-main | maya-zone, central-lawn, lawn-east, merch-main | 3,3,2 | 8 |
| merch-main-main / merch-main → main-stage | merch-main, east-ramp, accessible-viewing, main-stage | 4,3,2 | 9 |
| maya-kiosk / maya-zone → merch-kiosk | maya-zone, lawn-west, merch-kiosk | 2,1 | 3 |
| kiosk-main / merch-kiosk → main-stage | merch-kiosk, water-2-junction, main-stage | 2,3 | 5 |
| maya-rest-b / maya-zone → restroom-b | maya-zone, lower-connector, restroom-b | 1,2 | 3 |
| rest-b-main / restroom-b → main-stage | restroom-b, lawn-west, water-2-junction, main-stage | 1,1,2 | 4 |
| maya-rest-a / maya-zone → restroom-a | maya-zone, lawn-east, restroom-a | 3,2 | 5 |
| maya-water-one / maya-zone → water-1 | maya-zone, food-court-a, water-1 | 3,2 | 5 |
| maya-medical / maya-zone → medical-point | maya-zone, south-junction, medical-point | 3,1 | 4 |
| maya-quiet / maya-zone → quiet-zone | maya-zone, lower-connector, quiet-zone | 2,3 | 5 |

Food Court A/B, Central Lawn, Info, Lockers, Gate and accessible viewing remain selectable even without standalone numerical origin routes: show place, metadata, corridor/text map and “Walking estimate unavailable.” A route to a court may offer its named vendor destinations; do not silently substitute the vendor as the court's destination. No invented medical crowd-sensitive detour or unsupported friend ETA.

## Layers, marker and overlay specification

| Layer | Show | Context retained |
|---|---|---|
| Stages | Three footprints, names, effective set time on selection | Current zone, active destination/route |
| Food | Courts, four vendors, queue summaries | Stage destination, current zone |
| Utilities | Water, restrooms, medical, info, lockers, entry | Active route/selection |
| Friends | Consented approximate zones; Kabir dashed paused zone | Stages as muted landmarks |
| Crowd | LOW/MODERATE/BUSY texture footprints | Labels and selected POI |
| Accessibility | Step-free paths, Restroom B, viewing area | Medical and current route |
| Low sensory | Quiet Zone, water, medical, LOW crowd route variants | Active destination/route and current zone |

Layers toggle visibility, not fixture values or selected preference. Selected destination is retained even if its category layer is off. Low-sensory selection suggests LESS_CROWDED but never silently applies it; user confirms. No single layer implies medical/accessibility guarantees.

Crowd overlays use dot density: LOW 14-unit spacing, MODERATE 9, BUSY 5 with ink at 12–18% opacity. Text crowd label appears on selection and text map. No red/yellow/green-only encoding. Stage colors distinguish identities, not crowd status. Offline hides confident fresh texture or hatches it with “Cached 7:16 PM”; the selection repeats freshness.

Route line is 6 logical units ink casing with 3-unit lime core, directional chevrons every 60 units and numbered waypoint dots. Alternative paths are 2-unit neutral dashed lines until selected. Text duration/profile accompanies every line; route cannot depend on animation to be visible. Selected marker has a 2px ink ring, white separation halo and “Selected” accessible state; unsupported destination does not draw a fabricated route.

Marker visual size 24–32px, interactive box at least 44×44 CSS px. Render P1 labels at all zoom levels; P2 at zoom ≥1.2; P3 at ≥1.6 or on selection. Court clusters replace colliding P3 labels at smaller scale. Labels are HTML/SVG text with 12px minimum CSS size; maintain unscaled text/targets. Left/right/up/down candidate offsets 12–24px are tested for overlap; preserve anchor with a leader line. Collision priority: selected/destination → medical → stages → essentials → vendors → decorative labels. Overflowed labels move into sheet/list, not under a control.

## Zoom, pan and input

Default fit zoom 1 on desktop. Mobile initially fits bounds and shows stage/utility priorities; zoom range 1–2.5. +/- steps 0.25; recenter restores fit. Pan clamps map bounds with 24px viewport inset. Wheel/pinch/drag are optional enhancements only: buttons and a text place list provide complete alternatives. Do not trap page scrolling in the embedded Today/landing map; require Open map for navigation gestures. Scale geometry and route together; do not enlarge markers while leaving the path unchanged.

Keyboard: map toolbar → place list/markers ordered by priority/name → sheet actions. Arrow-key panning can be supported while the map has focus; Escape closes expanded modal sheet. Selecting from the text list centres a POI and updates the same panel. Do not make every label a separate unlabelled SVG focus stop.

## Mobile and desktop composition

Desktop Map allocates approximately 70% width to map and 30% to a 320–380px panel, constrained within the 1280px application content container. Tablet uses 60/40 with a 280px minimum panel or switches to stacked map/sheet when insufficient. Today embeds a substantial preview beside planning content, not a tiny decorative thumbnail.

Mobile full-screen map occupies available height between header and safe bottom nav. Floating Back/Search/Layers occupy top controls; selected POI sheet initially 160–200px, leaving at least 55% of available map visible where feasible. Expanded sheet caps at 85% available height and scrolls internally; a visible Expand/Collapse control provides the same functionality as optional drag. Fit-to-route accounts for sheet occlusion and reserves 24px around endpoints. Landscape or large text may use collapsed summary plus full-page details rather than covering the map. See 07 for focus and zoom requirements.

## Offline and validation contract

Offline uses cached static geometry, known schedule and saved route templates. Show cached timestamp on queues/crowds/friends. Null estimates do not suppress POI or static paths. Friend paused/stale styling remains distinct from Maya's location. Do not display “Live” on stale or offline overlays.

Future QA: verify all 22 POIs and 16 auxiliary/zone nodes; coordinates remain in bounds; each route's named endpoints match first/last node; every edge-vector sum equals 03; alternates are visibly different; Slice route touches Water 2 and River-turn; grouping/refill uses distinct endpoints; no marker/label/control overlaps at required widths; step-free templates contain no stair metadata; selection is available without a pointer; downloaded/text maps use these same coordinates and IDs. Static saved maps must preserve fictional-event and accessibility limitation disclosures.

Visual revision approved by the user: stage identity retains the same Main/River/Echo roles with mint #A9EAD2, periwinkle #A9B8F4 and lavender #CCB0EC. Plum #20152E is the route casing/text color; warm cream #FFF5E8 is the neutral label surface. Coordinates, weights, route profiles, POI priorities and interaction requirements are unchanged.
