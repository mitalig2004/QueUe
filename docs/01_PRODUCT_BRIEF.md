# QUEUE — Product brief

Status: canonical specification for future implementation. Event content is a fictional portfolio concept. This package specifies desired behavior; it does not certify the existing partial application.

## Authority and reading order

Read all eight documents before implementation. Resolve conflicts in this order: **03_FIXTURE_DATA.md → 02_UX_FLOWS.md → 08_FESTIVAL_MAP_SPEC.md → 04_INFORMATION_ARCHITECTURE.md → 05_DESIGN_SYSTEM.md → 06_MOTION_INTERACTION.md → 07_RESPONSIVE_ACCESSIBILITY.md → 01_PRODUCT_BRIEF.md**. Respect each document's domain: fixture numbers, flow behavior, map geometry, routes/navigation, presentation, motion, responsive/accessibility, strategy. Accessibility requirements are acceptance constraints, not optional presentation advice. Reconcile a conflict explicitly rather than silently copying a lower-priority example.

## Product overview and executive summary

QUEUE is a mobile-first companion for people already attending a concert or festival. It combines time, distance, simulated live conditions and a personal schedule to answer: **“Can I do this and still make what I came here for?”** Desktop provides planning and spatial exploration; mobile provides a useful answer while walking. Its primary unit is a decision, not a ticket, artist profile or social post.

Product promise: **“Know what you have time for.”** Supporting positioning: “Food, friends, stages and everything in between — without missing what you came for.” “Make the moment. Not the queue.” is an occasional campaign line, not repeated utility microcopy.

The deterministic demonstration follows Maya at PULSE 2026, a fictional two-day festival in Pune. Saturday, 17 October 2026 at 7:18 PM is the primary scenario. Maya holds a Weekend Pass, uses Gate 2 and has Coldplay marked Must See. Recognizable artist names are scenario content, not claims of a real lineup or affiliation.

## Problem, opportunity and user needs

The interval between performances contains practical decisions with hidden consequences. A nearby food stall may have a long queue; a short queue may require a long return walk. Meeting a friend can change the next stage's arrival time. Delays change what fits. Patchy connectivity reduces confidence in estimates precisely when people need help.

The opportunity is to connect these consequences in one explainable interface. Show an estimated arrival and breathing room alongside the underlying walk, wait and activity durations. Never imply certainty that the demo cannot support.

| Need | Pain point | Product response |
|---|---|---|
| Preserve important moments | Mentally juggling start times and walking time | Next Must See, countdown and suggested leave |
| Handle basic needs | Choosing by distance alone ignores queues | Utility-first distance/wait comparisons |
| Understand a detour | Food decisions omit preparation or eating time | Explicit complete timing chain |
| Coordinate privately | Repeated “where are you?” exchanges | Approximate zones and a practical meeting point |
| Adapt to change | New start time does not explain the consequence | Delay banner and recomputed leave/buffer |
| Keep essentials usable | Low signal makes live data unreliable | Cached schedule/map/pass plus visible staleness |

## Audience and primary persona

Primary audience: festival attendees with at least one important set and practical needs between performances. Secondary use contexts include a friend coordinating a group, an attendee seeking a quieter route, someone needing step-free wayfinding, and a portfolio reviewer exploring the concept on desktop.

**Maya, 26 — design hypothesis / prototype persona.** She attends concerts and festivals with friends, wants to see several artists, moves frequently through large venues, needs quick answers while distracted and does not want to spend the event staring at her phone. This is a non-sensitive fictional persona, not interview research. No motivations, disability status or personal history should be invented as research evidence.

## Jobs To Be Done

- When I have time between performances, help me understand what I can realistically do so I do not accidentally miss something important.
- When the event changes, help me understand what that means for my plan.
- When I need something basic like water or a restroom, help me find the best practical option quickly.
- When coordinating with friends, help us meet without exposing unnecessary location information.
- When the connection is patchy, help me use reliable saved essentials and recognize information that may have changed.
- When a route is crowded or difficult, help me compare practical alternatives without hiding the timing cost.

## Value proposition and product principles

1. **Explain the consequence.** Arrival and breathing room matter more than a vague recommendation.
2. **Keep the next moment visible.** Activity screens retain the target performance and effective start time.
3. **Answer before elaborating.** Result, time and next action precede supporting detail.
4. **Let the user choose.** Tight timing is contextual information; continue anyway remains available.
5. **Minimize attention cost.** Live Mode has large text, few actions and no dense secondary information.
6. **Keep places and time connected.** Map selection and decision results identify the same POIs and route profiles.
7. **Share only what is useful.** A festival zone is enough; no precise GPS trail.
8. **Be honest about freshness.** An old estimate is labelled old; unavailable estimates do not become zero.
9. **Accessibility is part of the route.** Step-free, quiet and accessible facilities are first-class choices.

## Core product loop and signature interaction

Orient to the next saved priority → choose a practical activity → compare timing → inspect the consequence → choose a route → return to the next moment. Updates recalculate the loop from shared state, never from independent screen literals.

The signature question is “Can I get food before Coldplay?” Slice Club requires **6 walk + 4 queue + 7 preparation + 20 eating + 8 stage walk = 45 minutes**. Starting 7:18 PM gives arrival 8:03 PM and 27 minutes before 8:30 PM. The result is **“Yes — with room.”** Delaying Coldplay to 8:50 PM leaves the same arrival and 47 minutes of breathing room. These are the package's showcase calculations.

## Boundaries: what QUEUE is and is not

QUEUE is live event decision support with a personal schedule, wayfinding, essential services and lightweight friend coordination. Public landing and local demo authentication support portfolio exploration. The pass is a labelled decorative demo pass, not admission infrastructure.

Explicit non-goals: ticket booking/resale, venue discovery marketplaces, artist streaming or biographies, public social discovery, feeds/stories/reels, full chat, food ordering/payment, wallets, AI assistants, NFTs/crypto, loyalty points, badges, leaderboards, dating, production geolocation, real queue prediction, real crowd sensors and backend authentication infrastructure. Do not add unrelated features merely to fill screens.

## Context-of-use constraints

Noise, low light, outdoor glare, crowds, distraction, one-handed use, uncertain queues, limited connectivity and frequent short visits define the primary experience. Critical answers should be understood in roughly two seconds. Large touch targets, brief copy and clear hierarchy outweigh decorative density. Medical screens emphasize immediate wayfinding, without ambient animation or speculative health guidance.

## Trust, privacy, accessibility and data honesty

Show “Demo estimate,” “Simulated live conditions” and last-update times where they clarify trust. Never fabricate sponsors, integrations, interviews, usability-test outcomes, testimonials, usage counts, analytics or AI accuracy. Time urgency derives only from deterministic schedule state. No fake scarcity, popularity or engagement spam.

Sharing is explicit and off by default. Event-level zones may be shared until event end, for one hour or stopped immediately. Demo friends' consented fixtures can be displayed independently of Maya's own choice. Explain that the prototype uses local state and simulated friends; do not imply production security guarantees.

Target WCAG 2.2 AA where applicable. Offer text equivalents for map information, keyboard-complete alternatives, visible focus, reduced motion and color-independent stage identification. Step-free routes and accessible facilities are simulated design affordances; the app must not guarantee physical venue accessibility.

## Prototype success criteria and portfolio objectives

These are acceptance targets, not measured research results:

- A reviewer can enter without authentication and understand the concept in 20–30 seconds.
- The signature sequence accounts for all 45 minutes and exposes the 27-minute result.
- Delay state updates Today, Live Mode, Schedule, performance details and all decisions consistently.
- Offline state preserves essentials and marks queue/crowd/friend data stale or unavailable.
- Map alternatives explain distance in minutes, crowd context and accessibility without contradicting fixtures.
- Save/Must See changes propagate to Today and Live Mode; an empty priority state has a useful exit.
- All 20 flows, eight required viewport sizes and accessibility cases can be verified against this package.
- Desktop is intentionally composed; mobile is usable with limited attention and one hand.

The portfolio should demonstrate contextual UX, time-sensitive hierarchy, service design, spatial reasoning, inclusive wayfinding, explainable calculations, state propagation, restrained motion and responsive engineering. Do not claim these targets were tested until implementation QA is actually performed.

## Public experience content contract

Landing navigation and routes are defined in 04. Use hero headline **“DON'T MISS WHAT YOU CAME FOR.”** with supporting “QUEUE helps you navigate food, crowds, friends and stages without losing track of the next moment that matters.” Primary “Enter PULSE 2026 →” uses `/demo`; secondary “See how it works” uses `/#how-it-works`. Hero artwork combines an abstract festival poster with Coldplay 8:30 PM, 72 MIN, Slice Club queue 4 min, Main Stage 8 min away, friends in approximate zones. It is not solely a phone mockup. Do not use the original illustrative 42-minute hero value at the 7:18 scenario.

Story headline: “Between performances, the clock keeps moving.” Show the complete sequence from 7:18 departure/hunger through 6-minute walk, 4-minute queue, 7-minute preparation, 20-minute eating and 8-minute stage walk; resolve arrival 8:03 and 27-minute breathing room. Supporting line: “QUEUE connects the little decisions between the big moments.” Live section headline: “One screen when everything is happening.” Use the same Arctic/Coldplay/leave values as the app. Decision section: “Have time for food?” with the complete signature calculation and “See the decision →”. Map section: “The festival changes. Your map should too.” Final headline: “Spend less time figuring it out.” Supporting: “Spend more time being there.” CTA enters `/demo`. Footer: QUEUE, Portfolio concept, fictional festival/simulated-data disclosure; no sponsors/testimonials/user counts.

Login heading: “Back for the next set?” Signup: “Your next event starts here.” Setup: “What's unmissable today?” Medical, pass and friends copy remains brief and contextual as specified in 02. Marketing illustrations always use the frozen NORMAL_LIVE example even if the current app session is delayed or post-event; label them illustrative examples and never present them as current session state.

## Resolved interpretations and implementation boundary

The provided 8:18 PM suggested leave remains canonical. An eight-minute direct walk reaches Main Stage at 8:26 PM: **12 minutes total allowance = 8 minutes walking + 4 minutes arrival buffer**. Do not call all 12 minutes an arrival buffer.

Water 2 has a near refill access point (2-minute walk) and a group meeting apron (4-minute walk). Both are in the Water 2 zone; routes use explicit endpoint IDs from document 08. Sunday content, state times and unspecified utility activity durations are deterministic specification decisions documented in 03. Existing source may differ; reconcile it only after explicit authorization to implement. This task ends with these eight documents.

## Package consistency review — 5 October 2026

All eight documents were reopened and reviewed. The documentation-only validation checked:

- Exactly the eight requested Markdown files, with balanced code fences and a shared authority hierarchy.
- All six canonical activity sums, arrival times, normal/delayed buffers, Arctic remaining time, Coldplay countdown/leave/duration, transfer/overlap arithmetic and Saturday calendar date.
- All 22 supplied POI anchor coordinates unchanged; 16 auxiliary/zone nodes in bounds; 30 supported journey contracts covered by 34 route templates with valid endpoints and correct edge sums.
- All 20 UX flows, final route names, single-owner route preference, phase-aware freshness, save/Must See rules and reversible delay propagation.
- Primitive/semantic color consistency and sRGB contrast calculations; Echo small-text contrast corrected through neutral labels; muted light-text use corrected with an accessible derived token.
- Matching mobile/tablet/desktop rules, eight specified QA widths, safe-area behavior, true time-axis schedule, map/sheet adaptation, focus, text alternatives and reduced-motion equivalents.
- SHA-256 hashes of existing application source, stylesheet, HTML and package manifest unchanged from the start of the specification task.

Result: specification package ready for a future implementation request. No unresolved product-specification assumptions remain; explicit completion decisions are recorded in 03/08. No application implementation, rendered responsive QA, usability study or WCAG certification was performed in this task. Stop here until the user explicitly authorizes implementation.
