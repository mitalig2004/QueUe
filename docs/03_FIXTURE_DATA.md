# QUEUE — Deterministic fixture and state contract

This is the numerical source of truth. Authority order: **03 → 02 → 08 → 04 → 05 → 06 → 07 → 01**, using the corresponding numbered filenames in this directory. Do not source current values from the existing application. All event, artist, friend and service data below are fictional demonstration content.

## Time representation and classification

Use integer minutes from local midnight on **2026-10-17**, timezone `Asia/Kolkata`. There is no running wall clock in the demo. `19:18 = 1158`; `20:30 = 1230`; an after-midnight end of `01:00` is `1500`, not `60`. Format 12-hour display with AM/PM; retain day information for after-midnight performances. Runtime system date must not move the demo.

| Class | Meaning | Examples |
|---|---|---|
| STATIC | Frozen fixture identity or baseline | POI IDs, ticket, baseline schedule, route durations |
| DERIVED | Computed; never separately persisted | total, arrival, breathing room, countdown, leave time |
| STATE-DEPENDENT | Explicit state selection changes source value | effective Coldplay start, current demo time, network status |
| SIMULATED LIVE | Frozen estimate with freshness metadata | queues, crowds, friend zones |

Do not store screen-specific copies of derived times. Any cached calculation records its input version and is invalidated on schedule, route, target or origin changes.

## Event, user and pass

```json
{
  "event": {"id":"pulse-2026","name":"PULSE 2026","type":"2-day music festival","city":"Pune","country":"India","timezone":"Asia/Kolkata","days":["2026-10-17","2026-10-18"],"fictional":true},
  "user": {"id":"maya","displayName":"Maya","personaAge":26,"originNodeId":"maya-zone"},
  "pass": {"id":"demo-weekend-maya","holder":"Maya","type":"Weekend Pass","gateId":"gate-2","functionalQR":false},
  "weather": {"temperatureC":24,"condition":"Clear","source":"demo fixture"},
  "defaults": {"eventState":"NORMAL_LIVE","savedPerformanceIds":["coldplay","fred-again"],"mustSeePerformanceIds":["coldplay"],"routePreference":"FASTEST","sharing":"OFF","selectedPOIId":null,"activeRoute":null,"scheduleDay":"2026-10-17"}
}
```

`mustSeePerformanceIds` is always a subset of saved IDs. Unsaving a performance removes Must See. Removing Must See retains Saved. IDs, not display strings, connect screens. A title with punctuation such as Fred again.. keeps its exact display form.

## Saturday performance fixtures

| ID | Display artist | Stage ID | Start | End | Start/end minutes |
|---|---|---|---|---|---|
| local-train | The Local Train | main-stage | 17:00 | 17:45 | 1020 / 1065 |
| chai-toast | When Chai Met Toast | river-stage | 17:30 | 18:15 | 1050 / 1095 |
| anuv-jain | Anuv Jain | echo-tent | 18:00 | 18:45 | 1080 / 1125 |
| arctic-monkeys | Arctic Monkeys | river-stage | 18:45 | 19:35 | 1125 / 1175 |
| glass-animals | Glass Animals | echo-tent | 19:15 | 20:00 | 1155 / 1200 |
| coldplay | Coldplay | main-stage | 20:30 | 22:00 | 1230 / 1320 |
| fred-again | Fred again.. | river-stage | 22:15 | 23:30 | 1335 / 1410 |
| disclosure | Disclosure | main-stage | 23:45 | Sun 01:00 | 1425 / 1500 |

Artist data consists only of ID, display name and a fictional abstract poster key. No biography, streaming link or promotional celebrity photography is required. Stage color and geometry are in 05 and 08.

At `1158`, Arctic Monkeys and Glass Animals are both playing. Today and Live Mode foreground Arctic Monkeys as Maya's current contextual set; schedule labels both as happening now. Arctic Monkeys remaining: `1175 − 1158 = 17`. Do not label Glass Animals upcoming.

### Minimal Sunday fixture (specification decision)

Use day-local minutes with `dayOffset:1`; comparisons convert to the common Saturday epoch by adding 1440. Sunday is a browseable example, not a source for Saturday's decision target.

| ID | Display name | Stage | Sunday start/end | Epoch start/end |
|---|---|---|---|---|
| sunday-opening | PULSE Sunday Opening | echo-tent | 17:00–17:45 | 2460 / 2505 |
| sunday-closing | PULSE Closing Session | main-stage | 20:00–21:00 | 2640 / 2700 |

Label these as fictional demo sessions. Save/Must See/detail behavior works for them, but Today selects only remaining performances on the current demo day.

## Direct-stage orientation and priority selection

Normal Coldplay starts `1230`; countdown `1230 − 1158 = 72`. Default origin → Main Stage walk is 8 minutes. Arrival buffer is 4 minutes. Suggested leave is `1230 − 8 − 4 = 1218 = 20:18`. Walking then gives `1218 + 8 = 1226 = 20:26`, four minutes before the start. The request's “12-minute basic arrival buffer” is reconciled as **12-minute leave allowance**, not 12 minutes remaining at the stage.

Next target: earliest remaining Must See on the selected current demo day; if none, earliest remaining Saved; if neither, no target. Deterministic ties use schedule order. `remaining` means effective start is after current demo time. Do not silently retain Coldplay as “Must See” after removal. A user can explicitly pick a target in the planner; food results always name it.

Other default origin walks: River Stage 6 minutes, Echo Tent 12 minutes. Suggested leave uses the active route's duration plus the same 4-minute buffer. Fred's default suggested leave is `22:15 − 6 − 4 = 22:05`; no route estimate is inferred from pixel distance.

## Food fixtures — FASTEST, Main Stage target

| ID | Venue/category | Origin walk | Queue | Preparation | Eat | Venue → Main | Price | Dietary tags |
|---|---|---:|---:|---:|---:|---:|---|---|
| slice-club | Slice Club / Pizza | 6 | 4 | 7 | 20 | 8 | ₹350–₹550 | Vegetarian options |
| taco-lab | Taco Lab / Mexican | 4 | 13 | 8 | 20 | 10 | ₹400–₹650 | Vegetarian options (spec decision) |
| bombay-bites | Bombay Bites / Indian | 7 | 7 | 6 | 20 | 7 | ₹250–₹450 | Vegetarian options |
| green-room | Green Room / Vegetarian | 5 | 9 | 6 | 20 | 9 | ₹300–₹500 | Vegetarian; vegan options |

All durations are integer minutes; queues are simulated live, other durations are static estimates. A vegetarian option is not a claim the whole venue is vegetarian. “Vegan” filter includes Green Room; “Vegetarian” includes all four. “Under ₹400” means a menu option starts below ₹400, so include Slice Club, Bombay Bites and Green Room with a “From” clarification; do not imply all menu items cost below ₹400. Quickest sorts complete activity total then ID; Nearby sorts origin walk then ID. Initial order: Slice Club, Bombay Bites, Green Room, Taco Lab.

### Arithmetic and complete timeline

| Scenario | Arithmetic | Total | Arrival from 19:18 | Buffer before 20:30 | Delayed buffer before 20:50 |
|---|---|---:|---|---:|---:|
| Slice Club | 6 + 4 + 7 + 20 + 8 | 45 | 20:03 | 27 | 47 |
| Taco Lab | 4 + 13 + 8 + 20 + 10 | 55 | 20:13 | 17 | 37 |
| Bombay Bites | 7 + 7 + 6 + 20 + 7 | 47 | 20:05 | 25 | 45 |
| Green Room | 5 + 9 + 6 + 20 + 9 | 49 | 20:07 | 23 | 43 |
| Merch Main | 8 + 32 + 15 + 9 | 64 | 20:22 | 8 | 28 |
| Rohan meetup | 6 + 5 + 9 | 20 | 19:38 | 52 | 72 |

Slice checkpoints: start `19:18` → food `19:24` → queue complete `19:28` → preparation complete `19:35` → eating complete `19:55` → Main Stage `20:03` → Coldplay `20:30` → 27 minutes breathing room. **Never use the obsolete 20:17 arrival.** No extra invisible buffer is subtracted from breathing room.

Formula: `total = originWalk + queue + preparationOrActivity + eating + onwardWalk`; `arrival = currentDemoTime + total`; `breathingRoom = effectiveTargetStart − arrival`. For meetup there is no queue, prep or eating: use walk + meet buffer + onward walk. For unknown duration, total/arrival/buffer are unknown, never computed by substituting zero.

Status thresholds (specification decision): `buffer >= 20`: WITH_ROOM; `10 <= buffer < 20`: WITHIN_PLAN; `0 <= buffer < 10`: TIGHT; `buffer < 0`: CONFLICT; incomplete inputs: ESTIMATE_UNAVAILABLE. Slice: “Yes — with room.” Taco: “Tighter, but still within your current plan.” Merch: “You'd arrive about 8 minutes before the scheduled start.” Red is reserved for actual conflict/error, not an eight-minute positive buffer. Continue anyway is always available.

## Merch and utility activity completion

| Scenario | Walk | Wait | Activity | Onward to Main | Total | Arrival | Normal buffer |
|---|---:|---:|---:|---:|---:|---|---:|
| merch-main | 8 | 32 | 15 browse | 9 | 64 | 20:22 | 8 |
| merch-kiosk | 3 | 8 | 8 browse | 5 | 24 | 19:42 | 48 |
| restroom-b | 3 | 2 | 2 use | 4 | 11 | 19:29 | 61 |
| water-2 (refill access) | 2 | 0 meaningful wait | 2 refill | 4 | 8 | 19:26 | 64 |

Kiosk durations and utility activity/onward durations are explicit completion decisions for previously unspecified values. No food payment/order flow follows. Scheduling merch after Coldplay stores an intent for after effective end (22:00 normal), without fabricating a future queue estimate.

Restroom A: 5-minute origin walk, 7-minute wait, MODERATE crowd. Restroom B: 3-minute walk, 2-minute wait, LOW crowd; accessible facilities. Water 2: 2-minute access walk, LOW crowd, no meaningful wait, on the Main Stage approach. Water 1: 5-minute origin walk, LOW crowd (spec decision). Medical Point: 4-minute origin walk; immediate utility, no decision-engine queue or time guarantee. Quiet Zone: 5-minute origin walk, LOW crowd (spec decision). Show practical staffed-help information, not medical advice.

Emergency reference: `indiaEmergencyNumber:112`, confirmed against the [Government of India Emergency Response Support System](https://112.gov.in/) on 5 October 2026. Emergency information is static reference text; the prototype does not place calls or contact responders. No local festival helpline or operational medical guarantee is invented.

## Route duration contract

The fastest templates are supplied fixture times, not geographic estimates. Alternatives are spatially defined in 08. Do not globally add a fixed penalty to every route.

| Journey | FASTEST | LESS_CROWDED | STEP_FREE |
|---|---:|---:|---:|
| maya-zone → main-stage | 8 | 10 | 11 |
| slice-club → main-stage | 8 | 10 | 11 |
| maya-zone → slice-club | 6 | 6 | 6 |
| maya-zone → river-stage | 6 | 6 | 6 |
| maya-zone → echo-tent | 12 | 12 | 12 |
| maya-zone → taco-lab | 4 | 4 | 4 |
| maya-zone → bombay-bites | 7 | 7 | 7 |
| maya-zone → green-room | 5 | 5 | 5 |
| taco-lab → main-stage | 10 | 10 | 10 |
| bombay-bites → main-stage | 7 | 7 | 7 |
| green-room → main-stage | 9 | 9 | 9 |
| maya-zone → merch-main | 8 | 8 | 8 |
| merch-main → main-stage | 9 | 9 | 9 |
| maya-zone → merch-kiosk | 3 | 3 | 3 |
| merch-kiosk → main-stage | 5 | 5 | 5 |
| maya-zone → restroom-b | 3 | 3 | 3 |
| restroom-b → main-stage | 4 | 4 | 4 |
| maya-zone → restroom-a | 5 | 5 | 5 |
| maya-zone → water-2-tap | 2 | 2 | 2 |
| water-2-tap → main-stage | 4 | 4 | 4 |
| maya-zone → water-1 | 5 | 5 | 5 |
| maya-zone → medical-point | 4 | 4 | 4 |
| maya-zone → quiet-zone | 5 | 5 | 5 |
| maya-zone → rohan-zone | 6 | 6 | 6 |
| rohan-zone → main-stage | 9 | 9 | 9 |
| maya-zone → water-2-meet | 4 | 4 | 4 |
| rohan-zone → water-2-meet | 6 | 6 | 6 |
| aanya-zone → water-2-meet | 5 | 5 | 5 |
| echo-tent → main-stage | 14 | 14 | 14 |
| main-stage → river-stage | 12 | 12 | 12 |

Where values repeat, one compliant shared corridor is used for all preferences, with copy “Same available route.” Its crowd is MODERATE unless marked LOW in the template metadata in 08. STEP_FREE is an illustrative no-stairs path, never a guarantee. Important alternate routes have distinct geometry. Unsupported pairs return route unavailable with text landmarks and a map, not invented minutes. Selecting a preference recomputes only legs for which the route table changes. Slice results become 47-minute total/20:05 arrival/25-minute buffer for LESS_CROWDED, and 48/20:06/24 for STEP_FREE. Normal direct suggested leave becomes 20:16 or 20:15; delayed becomes 20:36 or 20:35. The canonical 20:18/20:38 values assume FASTEST.

The required route times are contextual journey templates. Do not run a global shortest-path calculation over every independently supplied fixture: utility access/egress and zone approaches are contextual (08 defines edge timing by template). Water's 2-minute access plus 4-minute onward is not a new six-minute replacement for the canonical direct eight-minute journey.

## Crowd and friend fixtures

| Zone | Crowd |
|---|---|
| Main Stage | BUSY |
| River Stage | MODERATE |
| Echo Tent | LOW |
| Food Court A | BUSY |
| Food Court B | MODERATE |
| Water 2; Quiet Zone; Restroom B | LOW |
| Restroom A | MODERATE |

Other POI default crowds are specified in 08 as completion decisions. Never show percentages or sensor accuracy.

“Nearby friends” is a demonstration proximity summary: consented, non-paused fixture zones with a supported origin walk of at most eight minutes. Rohan is six minutes away; Aanya's Main Stage zone uses the eight-minute stage approach. Thus the default summary is two nearby. Kabir is excluded because his location is paused. In PATCHY, label “2 last-known nearby zones” or omit the count; do not imply fresh proximity.

| Friend ID | Display | Approximate zone | Default state | Sharing evidence |
|---|---|---|---|---|
| maya | Maya | maya-zone / Central Lawn south approach | Location paused | OFF until explicit choice |
| rohan | Rohan | rohan-zone / Near Food Court A | Available | Consented demo zone fixture |
| aanya | Aanya | aanya-zone / Main Stage | At stage | Consented demo zone fixture |
| kabir | Kabir | kabir-zone / River Stage | Location paused | Last-known zone only |

Rohan meetup uses 6 walk + 5 meet/buffer + 9 onward = 20, arrival 19:38, buffer 52. Water 2 group endpoint is `water-2-meet`, not `water-2-tap`: Maya 4, Rohan 6, Aanya 5. All can meet at 19:24; no automatic fixed departure to Main Stage is promised. “I'm heading there” changes Maya's simulated status to Heading somewhere; it does not send a real message. Kabir's marker is explicitly paused; his last zone cannot be treated as a fresh route destination.

Sharing enums: `OFF`, `UNTIL_EVENT_END`, `ONE_HOUR`. At 19:18 a one-hour choice expires at 20:18; it is checked whenever a deterministic clock state changes. End-of-event expiry is Sunday 21:00 (epoch 2700). An explicit stop clears outward zone state immediately. No continuous GPS trail or permission prompt is required for local simulated data.

## Shared state and selectors

```text
eventState, currentDemoTime (selected by event state), savedPerformanceIds,
mustSeePerformanceIds, scheduleChanges, selectedPOIId, routePreference,
activeRoute {originId,destinationId,templateId,waypoints,saved},
networkState, lastLiveUpdate, queueEstimates, crowdEstimates,
friendSharing {mode,expiresAt}, friendLocations, friendStatuses,
decisionScenario {activityId,targetPerformanceId},
notificationDismissals, afterSetIntents, feedback, onboardingComplete
```

Persist selections locally; never persist credentials or derived numerical output. A scenario reset restores all defaults. A demo-state switch retains saved selections, preference and sharing unless expiry applies; it clears dismissed update IDs and invalidates derived selectors. An explicit browser reload retains local preferences and selected scenario. Schema version the local record; invalid data falls back to defaults. Auth is local form validation only; no backend or password storage.

## Canonical demo states

| Demo state | Event phase | Current time | Network | Coldplay start/end | Primary effect |
|---|---|---|---|---|---|
| NORMAL_LIVE | LIVE | Sat 19:18 / 1158 | ONLINE | 20:30 / 22:00 | Base fixtures |
| COLDPLAY_DELAYED | LIVE | Sat 19:18 / 1158 | ONLINE | 20:50 / 22:20 | Start and end +20; leave 20:38; countdown 92 |
| PATCHY_CONNECTION | LIVE | Sat 19:18 / 1158 | PATCHY | 20:30 / 22:00 | Last live update 19:16; estimates visibly stale |
| BEFORE_EVENT | BEFORE | Sat 14:00 / 840 | ONLINE | 20:30 / 22:00 | Saturday opens 17:00, starts in 3h; Gate 2 opens 16:00 |
| POST_EVENT | POST | Sun 21:30 / 2730 | ONLINE | Historical baseline | Ended event, sharing expired, illustrative recap |

Before/post times and preservation of Coldplay's 90-minute duration on delay are explicit specification decisions. Fred remains 22:15 even when delayed Coldplay ends 22:20: a genuine overlap is shown if both are saved. From normal Coldplay end, Main → River 12 + 4 arrival buffer requires leave 21:59 for Fred, one minute before Coldplay ends. Explain the transfer honestly; do not promise seeing both entire sets.

PATCHY_CONNECTION preset restores the normal schedule baseline. Orthogonal QA can simulate OFFLINE while delayed; retain last-known delayed schedule, not the baseline. General `networkState` values: ONLINE, PATCHY, OFFLINE, RECONNECTING. Reconnection rehydrates one fixture version atomically. Patchy retry remains patchy until a scenario change; no fake successful request.

Queue/crowd/friend metadata in LIVE + ONLINE: `updatedAt:1158`, freshness FRESH. Patchy cached `updatedAt:1156`, age 2 minutes, STALE. BEFORE shows static preview estimates with `updatedAt:null`, status PREVIEW, and no Live label; this prevents a future update timestamp at the 14:00 demo time. POST shows historical fixture values last recorded at 1158 with status HISTORICAL, or hides them. Unavailable uses `value:null`, status UNAVAILABLE. OFFLINE keeps known estimates labelled cached or unavailable; it never labels them LIVE. Display saved schedule, static map, saved routes and pass. Deterministic error QA can inject null queue, null crowd or unsupported route independently without adding another canonical demo preset. The global routePreference is the sole preference owner; decisionScenario does not store a competing copy.

Delay mutation: `scheduleChanges.coldplay={startDelta:20,endDelta:20,version:"coldplay-delay-1"}`. Normal leave 1218 → delayed 1238; Slice arrival 1203 unchanged; `1250 − 1203 = 47`; difference `47 − 27 = 20`. Changing state updates every affected screen in one transaction. Dismissing the banner only stores its version ID; it cannot revert the schedule.

Post-event recap is a fixed illustrative fixture: 5 performances seen, 2 stages visited, 1 shared meetup. It is not derived tracking or analytics. Feedback values: YES, SOMEWHAT, NO. No points, streaks, badges or rewards.

## Schedule conflict arithmetic and invariants

```text
currentTime = 1158 = 19:18
normalColdplayStart = 1230 = 20:30
delayedColdplayStart = 1250 = 20:50
coldplayDelay = 20m
normalSuggestedLeave = 1218 = 20:18
delayedSuggestedLeave = 1238 = 20:38
sliceClubArrival = 1203 = 20:03
normalSliceBuffer = 27m
delayedSliceBuffer = 47m
```

For targets at other stages, reuse the target start and look up a complete supported onward template. If none exists (for example Slice Club → River Stage for Fred), show “Onward walking estimate unavailable” and do not reuse the Main Stage total/buffer. Offer the map and explicit supported target selection. The user may still navigate the available origin-to-food leg. Before/post phase selectors suppress live activity suggestions; deep links present preview/historical timing clearly rather than implying a current live guarantee.

Cached essentials contract: a future implementation should cache its app shell, static geometry, local saved schedule/pass and saved route templates after the first successful load. Do not claim fresh first-load offline access. Offline reload requires that prior cache; if missing, show a recovery message and downloadable/text map where available. Downloads use the canonical coordinate/POI dataset and fictional-map label. Credentials are never cached.

Intervals are half-open `[start,end)`; overlap exists when `max(starts) < min(ends)`. Glass Animals until 20:00 and Coldplay at 20:30 **do not overlap**: 30-minute gap − 14 travel = 16-minute buffer (36 delayed). Label “Transfer check,” not “Schedule conflict.” Arctic Monkeys/Glass Animals overlap 19:15–19:35 (20 minutes). Delayed Coldplay/Fred overlap 22:15–22:20 (5 minutes), before considering transfer.

Required automated invariants for future implementation: all arithmetic rows above; delayed delta exactly 20; duration for Coldplay remains 90; no duplicated persisted derived values; no negative waiting duration; null is not zero; Must See subset of Saved; selected IDs exist; route template edge sums equal table; chronological sorting uses epoch minutes; current phase controls Today/Live content; last update never later than current time. Document QA must not be represented as application testing.
