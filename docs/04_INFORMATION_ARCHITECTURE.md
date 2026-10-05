# QUEUE — Information architecture and route contract

Authority: **03 fixtures → 02 flows → 08 map → 04 IA → 05 design → 06 motion → 07 responsive/accessibility → 01 brief**. This file defines final URL names. Every route below must support direct load, refresh and browser Back without requiring an account. Navigation does not reset demo state.

## Site map and final route tree

```text
Public
  /                         Landing
  /login                    Local login
  /signup                   Local signup
  /preview                  PULSE event preview
  /demo                     Immediate demo entry redirect
  /setup                    Event setup / What's unmissable?
Event companion
  /today                    Context / next priority
  /live                     Live Mode
  /schedule                 Schedule
  /schedule/:performanceId  Performance detail
  /decision                 Activity decision planner
  /map                      Interactive festival map
  /venues/:poiId            Venue / POI detail within map
  /route                    Route experience, query endpoints
  /food                     Food comparison
  /food/:venueId            Food venue / timing result
  /restrooms                Restroom comparison
  /water                    Water / route stop
  /merch                    Main merch timing
  /merch/kiosk               Nearby kiosk timing
  /medical                  Medical wayfinding
  /friends                  Friend zones and sharing
  /friends/group            Water 2 group meetup
  /friends/:friendId        Friend detail / meetup timing
  /pass                     Demo pass and event essentials
  /search                   Global festival search
```

`/friends/group` is matched before the dynamic friend route; `/merch/kiosk` before generic merch matching. Final IDs are document 03/08 IDs. No `/performance/:id`, `/entry`, singular `/restroom` or `/venue/:id` routes are canonical. A future implementation may redirect existing partial-code URLs to these final routes, but links must use the contract above.

Queries: `/schedule?day=2026-10-17&filter=saved`; `/decision?target=coldplay`; `/food/slice-club?target=coldplay`; `/map?poi=water-2&layer=utilities`; `/route?from=maya-zone&to=slice-club&preference=FASTEST`; `/route?from=slice-club&to=main-stage&preference=LESS_CROWDED`; `/search?q=pizza`. Supported schedule filters: all, saved, main-stage, river-stage, echo-tent. Supported layers: stages, food, utilities, friends, crowd, accessibility, low-sensory; the default visible composition is stages + utilities + food + current zone. Query values are validated; unknown IDs give a useful unavailable state, never an invented venue.

`/demo` applies defaults only if no valid demo session exists, then replaces history with `/today`. A deliberate reset in the account menu restores defaults. Reviewer entry does not require setup, authentication or a blocking onboarding sheet. `/setup` remains available from preview, signup and account menu. `/preview` contains event identity, date, Pune, Weekend Pass and fictional-lineup disclosure; CTA “Enter demo” goes to `/demo`, “Build my day” to `/setup`.

Route endpoints accept graph node IDs from 08, including approximate zones and Water 2 subpoints. Navigating the general `water-2` POI resolves to `water-2-tap` with displayed destination “Water 2 · refill access”; the group flow explicitly uses `water-2-meet` and displays “Water 2 · meeting apron.” Friend Rohan resolves to rohan-zone; Aanya can navigate the supported Main Stage approach without asserting a more precise eight-minute friend location. Kabir's paused zone opens the paused state, not a live route. Endpoint resolution is explicit and never changes a POI silently.

## Navigation

Mobile bottom navigation: Today, Schedule, Map, Friends, always in this order, with icon + text. Pass/account and Search are header controls. Live Mode is entered from Today and exited explicitly; it is not a fifth primary tab. Utility and detail pages highlight the relevant parent: food/restrooms/water/merch/medical/decision → Today; performance → Schedule; venue/route → Map; friend/group → Friends. Pass/Search have no false active tab.

Desktop header: QUEUE home link, event identity, Today, Schedule, Map, Friends; Search, Pass and account at right. Marketing navigation: QUEUE, How it works (`/#how-it-works`), Live mode (`/#live-mode`), Festival map (`/#festival-map`), Log in, Enter demo. Mobile marketing header retains logo + Enter demo and a labelled menu containing the other links.

Account popover includes Maya, Weekend Pass, Pass, Build my day, five canonical demo states and Reset demo. UI labels are friendly; stored enum names remain exactly those in 03. It contains no oversized debug toolbar. State changes are reversible and retain relevant user selections per 03.

## Screen hierarchy and inventory

| Screen | Ordered information and purpose | Entry and cross-links |
|---|---|---|
| Landing | Hero/promise → between-set story → Live Mode → food decision → map → final CTA → honest footer | Demo, preview, login/signup, section anchors |
| Login/Signup | Heading → labelled fields → submit → demo bypass → local-only disclosure | Setup on submit, counterpart auth screen |
| Setup | Event/date/pass → Must See choices (Coldplay preselected, Fred optional) → Build my day | Today, schedule |
| Today | Date/status → next priority/countdown/leave → Navigate + decision → now → quick actions → saved preview → map on desktop | Live, planner, essentials, schedule, pass |
| Live | Now → next priority → countdown → leave → decision CTA → four large actions | Today exit, food/water/WC/friends |
| Schedule | Day tabs → filters → transfer/conflict banners → stage grid or chronological list | Performance detail, save controls |
| Performance | Artist/stage/time → saved/Must See → countdown/leave → Navigate → stage conditions | Today, venue, route, schedule |
| Decision | Target/current time/budget → activities with complete estimates → explanation/freshness | Food, friend, merch, water, restrooms |
| Food | Target → useful filters → venue comparisons, distance/wait/total/price/diet | Food detail, planner |
| Food detail | Outcome → venue and target → complete timeline → arrival → breathing room → Route → alternatives | Origin-to-food route, comparison |
| Map | Search/layers → geometry/markers → selected POI → distance/crowd/action → text alternative | Venue, route, utility, friends |
| Venue | POI identity → walk/crowd/wait/accessibility → Navigate → relevant service detail | Map, food, route |
| Route | Endpoint identities → profile/time/crowd → path → ordered instructions → water stop → start/save | Map, destination, onward stage leg |
| Restrooms/Water | Best practical utility → walk/wait → alternative/on-route context → Navigate/Add | Map/route, Today |
| Merch | Complete timing consequence → tight alternatives → continue | Kiosk, after-set intent, route |
| Medical | Nearest staffed point → walk → Navigate → emergency information | Map, pass; no decorative hierarchy |
| Friends | Sharing control/privacy → friend zones/freshness → meetup → group point | Friend, group, map |
| Friend | Zone/status → meeting intent → timing consequence → Meet | Route, Friends; paused location exit |
| Group | Water 2 point → why → Maya/Rohan/Aanya travel → heading status | Water/map/route, Friends |
| Pass | PULSE/Maya/Weekend Pass → decorative placeholder → Gate 2 → emergency/rules/accessibility/exit | Medical, map, Today |
| Search | Input → categorized results with useful context → empty/retry guidance | All result destinations, originating screen |

## Presentation and history rules

| Experience | Mobile | Desktop | History behavior |
|---|---|---|---|
| Main tabs, food listing, result, auth/setup/pass | Full page | Full page | Push URL; Back restores previous screen |
| Selected map POI | Nonmodal bottom sheet over visible map | Nonmodal map side panel | Push `/venues/:poiId`; Back clears selection |
| Route | Full map with expandable instruction sheet | Large map + route side panel | Push `/route` with validated endpoints |
| Decision planner | Full-height modal bottom sheet if opened from Today | Centred modal dialog | Push `/decision`; direct load full page |
| Search | Full-height dialog | Centred modal | Push `/search`; query replaced as typed; direct load page |
| Food result or friend timing | Full page, never a tiny nested sheet | Result + consequence aside | Shareable route; clear back action |
| Account/demo controls | Popover | Popover | No new route; close returns focus |
| Emergency info, pass rules, timeline explanation | Inline details | Inline details | No history mutation |
| Notification/toast | Inline banner or compact status | Same | Dismissal cannot mutate schedule |

Opening URL-backed overlays records the originating URL and focused trigger. Closing uses Back when the predecessor is known; direct-load close uses an explicit parent route. No chain of nested dialogs; navigating from a dialog closes it. Modal focus traps, nonmodal map-sheet behavior and keyboard alternatives are defined in 07. Expanded map sheet may be modal only when it takes most of the viewport; its state and close button must be explicit.

## URL/state and error handling

Global persisted event state is not encoded redundantly in every URL. Route query changes update shared active-route state; explicit URL values override an earlier route selection. Layers and filters may use replaceState for rapid toggles without dozens of Back steps. Page-level route changes move focus to the screen heading; history Back restores the previous scroll/focus where feasible.

Invalid performance/venue/friend: “That stop isn't in this demo” with Schedule/Map/Friends links. Unsupported route: “Route unavailable” plus destination and text landmarks. Unknown path: branded not-found page with Today and home. Empty saved schedule links to All; no-target decisions offer target selection; no search results retain the input. None of these cases redirect silently to a misleading Main Stage result.

## Implementation inspection set

Future QA must inspect `/`, `/preview`, `/login`, `/signup`, `/demo`, `/setup`, `/today`, `/live`, `/schedule` (both days and all filters), `/schedule/coldplay`, `/decision?target=coldplay`, all four `/food/:venueId` paths, both merch screens, `/map`, `/venues/main-stage`, both legs of the Slice route, each route preference, all essential services, `/friends`, `/friends/rohan`, `/friends/group`, `/pass`, `/search?q=pizza`, paused/unavailable/unknown states and all five demo presets. This list is a test plan, not claimed execution.

Extension route: `/friends/join?plan=` is matched before `/friends/:friendId`. The header event-calendar dropdown previews the canonical festival dates and links to existing performance routes. Invitation links contain a validated shared-plan snapshot, without recipient email or location data.

Brand presentation extension: /brand is a public standalone identity case study with six concept explorations, a comparative evaluation, construction, final logo variants, small-size checks, typography/colors and downloadable vector assets. It links back to /today and home; it does not change app state.
