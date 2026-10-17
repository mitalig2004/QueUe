# QUEUE — published case-study content

Extracted from the rendered page; expanded disclosures included. Author: Mitali Giri. Product/visual direction with Codex-assisted implementation.

## Don’t miss the set. Make room for everything between.

SELF-INITIATED CONCEPT

QUEUE / LIVE EVENT COMPANION

Don’t miss the set.
Make room for
everything between.

Helping festivalgoers decide what they have time for—food, friends, and facilities—before the next performance that matters.

Explore the working prototype
ACTUAL PROTOTYPE SCREENS / NORMAL LIVE FIXTURE / 7:18 PM
DISCIPLINE
Product design / UI & UX
PLATFORM
Responsive web prototype
CONTRIBUTION
Mitali Giri · product & visual direction
SCOPE
Self-initiated concept · fictional event

Implementation developed with Codex assistance. Repository commits record implementation on 5 October 2026; total design duration was not tracked. Case-study audit: 18 October 2026.

## The interval is the product.

01 / OVERVIEW

The interval is the product.

A schedule tells you when a set starts. QUEUE connects that time to the decisions you make before it.

At the fictional PULSE 2026 festival, Maya has Coldplay marked Must See. There are 72 minutes until the set. Getting food includes walking there, waiting, preparation, eating, and getting back to the stage.

The scope is an explainable decision, not an automated itinerary. Priorities, services, routes, and simulated changes share one model. QUEUE does not buy tickets, order food, track GPS, or deliver real-time friend locations.

THE SIGNATURE EXPERIENCE
45 min detour → 27 min breathing room

6 walk + 4 queue + 7 preparation + 20 eating + 8 stage walk.
Leave at 7:18 PM. Arrive at 8:03 PM. Coldplay starts at 8:30 PM.

Scope, contribution, and constraints

Mitali shaped the product and visual direction through the documented specification and review iterations. The repository contains a Codex-assisted frontend, original SVG identity, and deterministic fixture model. Formal field research, production integrations, and individual hours were not documented.

Constraints: intermittent connection, distracted use, one-handed interaction, readable timing, fictional geometry, local persistence, and no backend. These are requirements and assumptions, not attendee-study findings.

## Small decisions carry a hidden cost.

02 / PROBLEM DEFINITION

Small decisions carry a hidden cost.

Design hypothesis: attendees may underestimate the time between leaving one place and arriving at the next set.

HYPOTHESIZED EXPERIENCE
“There’s a short queue.”

Choose a stop using one attractive number.

FRICTION
The return trip disappears.

Preparation, eating, and stage walking are easy to leave out.

DESIGN OPPORTUNITY
Show the whole consequence.

Compare arrival with the next important start time.

How might we help an attendee choose a useful detour without losing sight of the performance they came for?

## Start with what the evidence can support.

03 / RESEARCH & DISCOVERY

Start with what the evidence can support.
VERIFIED
Specification + implementation

Eight canonical documents, routes and state logic, six brand explorations, commit history, review-driven iterations, and fresh browser captures.

ASSUMPTION
Needs in a festival context

Maya is a provisional scenario persona. Noise, distraction, low signal, and concern about missing sets are design hypotheses.

PROPOSED
Attendee research

No interviews, survey results, participant quotes, or moderated usability sessions were found. Those remain the next validation step.

Category references, and what was not compared

Official descriptions establish category peers: the Glastonbury 2025 app describes a line-up planner, map, and updates; Tomorrowland’s app page describes a timetable, map, and practical information. These are source-based feature references checked for this case study, not a hands-on competitive audit.

Task discoverability, accessibility, recovery, and queue-to-stage calculations were not tested in those apps. No superiority claim is made. A proposed comparison would use the same food-before-a-saved-set task and evaluate steps, timing comprehension, map selection, focus, and recovery on the same device.

Proposed discovery plan

Recruit 6–8 recent festival attendees, including group coordinators and people using accessibility or low-sensory facilities. Reconstruct their last between-set decision using an actual schedule: what did they count, omit, and trust? Use consented, anonymized notes; do not collect precise location trails.

Questions: Is leave time more useful than a countdown? Is 20 minutes to eat credible? Are approximate zones sufficient? What wording makes an old queue estimate understandable?

## Protect the next moment. Reduce the mental arithmetic.

04 / USER NEEDS & GOALS

Protect the next moment. Reduce the mental arithmetic.
The attendee between sets

Needs a next priority, an honest detour total, a stage arrival, and nearby essentials. Large labels and short actions support distracted use.

The friend coordinating a meetup

Needs a shared landmark, approximate zones, and visible consent. Paused or stale zones must not imply current presence.

The attendee choosing a comfortable route

Needs step-free and less-crowded choices, explicit time costs, and a text route. Simulated accessibility never guarantees venue conditions.

Understand the decision. Proposed test: 4 of 5 participants identify arrival and breathing room without prompting.
Count every step. Technical target: five steps total 45 minutes and arrive at 8:03 PM.
Recover from change. Technical target: delay changes the buffer from 27 to 47 without changing arrival.
Control sharing. Technical target: sharing starts OFF and stays OFF after accepting a plan snapshot.
Provide another way through. Technical target: text places and keyboard controls expose route information without pointer selection.

## Four ways to orient. One shared plan.

05 / INFORMATION ARCHITECTURE

Four ways to orient. One shared plan.

Primary navigation separates immediate context, time, space, and people. Essentials remain close to the current task.

QUEUE
Public entry → Demo or local setup
Today ↗

Next priority · Live Mode

Planner → Food / Water / WC / Merch / Medical
Schedule ↗

Day / stage / Saved filters

Performance → Save / Must See → Navigate
Map ↗

Layers · POIs · text map

Place → Route → preference / start / save
Friends ↗

Privacy · zones · invites

Friend timing / group meeting point

Supporting entry points: Search · Calendar · Pass · Account/demo presets.
Public pages: Home · Login · Signup · Setup/Preview · Brand study.

Implemented routes share target and timing selectors across destinations.

## A plan has to survive the next decision.

06 / END-TO-END FLOWS

A plan has to survive the next decision.
A / Can I get food before Coldplay?
Today → planner
Choose “What can I do before?”; retain Coldplay as target.
Compare food
Review walk, queue, preparation, and complete activity total.
Slice Club → result
45 min total, 8:03 PM arrival, 27 min breathing room.
Route there → stage
Inspect the first leg; explicitly continue to Main Stage when ready.

Decision & recovery: Unknown queue timing produces uncertainty and keeps routes available. Compare food or return to Schedule. Route start is local status, not proof of arrival.

B / Meet your people, with control
Friends
Sharing is OFF; review consented fictional zones.
Choose a meetup
Rohan: 6 walk + 5 meet + 9 onward. Water 2 group apron: Maya 4, Rohan 6, Aanya 5 min.
Confirm heading
Local status changes; sharing is not silently enabled.
Navigate or cancel
Follow the named route, stop heading intent, or return to Friends.

Decision & recovery: Paused locations offer last-zone/group alternatives. Invite snapshots are validated; malformed links offer an exit. No real message delivery is claimed.

C / The next set is delayed
Trigger demo change
Select Coldplay Delayed in Account.
Receive the consequence
Start shifts to 8:50 PM; leave to 8:38 PM; countdown to 92 min.
Revisit the detour
Arrival stays 8:03 PM; breathing room becomes 47 min.
Keep or revise the plan
Schedule warns of a five-minute overlap with Fred again..; user chooses.

Decision & recovery: Dismiss removes the notice, not the update. Normal reverses the preset. Patchy conditions label cached values; missing information never becomes zero.

## Follow the task, not a collection of screens.

07 / JOURNEY MAP

Follow the task, not a collection of screens.

Scenario-based journey derived from the implementation, not an observed participant journey or emotional rating.

Stage	Objective & action	Potential friction	Product response	Question to validate
Orient	Read Today; identify Coldplay.	Facts compete for attention.	One priority and leave time.	Can someone find the next action in 10 seconds?
Choose	Open planner; compare food.	Nearby can seem faster than total timing.	Include eating and return walk.	Do people understand the total?
Decide	Read arrival and breathing room.	A confident number may imply certainty.	Breakdown and freshness labels.	Are estimate limitations noticed?
Move	Choose route and preference.	Spatial crowding; scroll interception.	Text list, pan buttons, normal touch scroll.	Can it be used one-handed on site?
Adapt	React to delay or stale data.	Updated times conflict with memory.	Shared state and explicit warnings.	Can people explain what changed?

## Make the choice visible. Keep the screen quiet.

08 / EXPLORATION & TRADE-OFFS

Make the choice visible. Keep the screen quiet.
HISTORICAL / COMMIT EVIDENCE
Map density → readable space

Commits 2d30ab4 and e7c7461 record inset spacing, fewer default markers, and removal of mobile scroll interception. The current phone map places details below the canvas.

Trade-off: less immediate density, more document scrolling. Layers and the text list retain access to places.

HISTORICAL / REPOSITORY ARTIFACT
Literal motifs → modular identity

Six original Q explorations remain in the brand study. Sequential modules form the tail rather than adding a separate festival icon.

Trade-off: the scalable abstract mark needs product context to explain its meaning.

Design alternatives — newly illustrated, not historical wireframes
A / COMPACT SUMMARY
Total · arrival · next step

Faster to scan, but hides why the total is credible.

B / EXPLAINABLE RESULT
Walk
Queue
Prepare
Eat
Stage walk
27
MIN

The implemented approach exposes consequence and calculation, at the cost of space.

These schematics were created for this case study to explain the trade-off. They are not historical artifacts or a tested A/B comparison.

## Six choices that hold the experience together.

09 / KEY UX DECISIONS

Six choices that hold the experience together.
01
A priority, not a dashboard
+

Challenge: Destinations can obscure the next step.

Approach: Today leads with Must See, countdown, and suggested leave.

Rationale: Keep the important performance attached to the decision.

Evidence: Today screenshot; nextPerformance selector.

Limitation: Target selection uses fixtures and local choices, not observed intent.

02
The whole detour, made accountable
+

Challenge: Queue-only estimates omit most of the trip.

Approach: Five components, arrival, and breathing room.

Rationale: Let people inspect why a detour fits.

Evidence: Annotated result below; calculate selector.

Limitation: Real waits and eating durations remain uncertain.

03
Change without contradictions
+

Challenge: Delay affects more than a start label.

Approach: Shared state drives Today, Live, results, and conflicts.

Rationale: Consequences must move together.

Evidence: Delay capture; model and browser assertions.

Limitation: There is no live venue feed.

04
Maps with another way in
+

Challenge: Spatial density can block selection and scrolling.

Approach: Zoom thresholds, layers, text places, and touch page scroll.

Rationale: Wayfinding cannot depend on drag gestures.

Evidence: Annotated map and scroll regression check.

Limitation: Dense layers and assistive-device use need testing.

05
Coordinate without a trail
+

Challenge: Meeting does not require precise tracking.

Approach: Approximate zones, OFF default, explicit duration.

Rationale: Outward sharing is an independent choice.

Evidence: Friends screenshot; default state and expiry tests.

Limitation: Friends and heading delivery are simulated.

06
Unknown is not zero
+

Challenge: Clean numbers can disguise missing data.

Approach: Cache labels retain age; null timing withholds totals.

Rationale: Keep static utility without false confidence.

Evidence: Stale/unknown captures; null-data model test.

Limitation: No production freshness SLA exists.

## Know what fits. Then choose what matters.

10 / THE FINAL EXPERIENCE

Know what fits.
Then choose what matters.

The implemented journey, captured directly from the running application. Normal-state screens use the same fictional 7:18 PM scenario.

A / ORIENT

Your next set stays in sight.

Today anchors the night. Live Mode reduces the screen to current/next context, a large countdown, a leave time, and essentials.

One saved priority

Coldplay is the fixture Must See; Saved is the fallback when priorities are removed.

Leave time has a reason

Eight minutes walking plus four minutes arrival allowance produce 8:18 PM.

Sparse mode, same plan

Live Mode shares selectors; switching modes does not create another schedule.

Limit: time is intentionally frozen. This is not a running event clock.

01 / ORIENT TO THE NEXT PRIORITY
02 / REDUCE VISUAL COMPETITION

B / CHOOSE A DETOUR

Make the hidden minutes visible.

The result answers the question before asking someone to trust the arithmetic. The complete timeline remains available for inspection.

AUTHENTIC DESKTOP RESULT / FIVE STEPS, ONE CONSEQUENCE
Account for every step

6 + 4 + 7 + 20 + 8 = 45 minutes. Eating is part of the decision, not forgotten downtime.

Compare concrete times

Arrival 8:03 PM is alongside Coldplay’s 8:30 PM start. The 27-minute gap is a consequence, not a rating.

Keep agency in the answer

Route me there and Compare food remain available. Tight results are advisory; they do not silently block the attendee.

Limit: preparation, eating, and waits are fixed scenario values. The prototype exposes assumptions; it does not predict real conditions.

Start with a useful comparison.

Food lists complete totals alongside walk, queue, preparation, price, and diet.

C / GET THERE

Choose the cost of a different route.

Slice → Main Stage offers Fastest at 8 minutes, Less crowded at 10, or Step-free at 11. Geometry, instructions, and timing change together.

Named landmarks

Water 2 and the River Stage turn make instructions less abstract.

A linear alternative

Places remain in the text map. Phone swipes scroll the page; buttons pan and zoom the map.

No invented shortcuts

Unsupported endpoints show unavailable timing instead of substituting another destination.

Limit: illustrative geometry and templates are not GPS, surveyed geography, or an accessibility guarantee.

8 / 10 / 11 MIN
FASTEST / LESS CROWDED / STEP-FREE
PREFERENCES UPDATE THE JOURNEY, NOT JUST A LABEL

D / STAY TOGETHER

A meeting point.
Not a location trail.

Friends exposes sharing first. Water 2 offers a shared meeting apron with explicit fixture ETAs. Rohan’s individual meetup includes the onward walk.

Visible consent

Sharing starts OFF and can be stopped in the same place.

Concrete coordination

Water 2 is a shared landmark: Maya 4, Rohan 6, Aanya 5 minutes.

Plan sharing stays separate

Invite links carry a saved-plan snapshot. Accepting does not enable location sharing.

Limit: no real-time group sync, messages, or location service.

E / ADAPT

Change the plan.
Keep the consequence coherent.

A delay creates more time. Patchy connection reduces confidence. A missing queue removes the confident result. These are different states with different messages.

DELAYED / TIME CHANGES
PATCHY / CONFIDENCE CHANGES
UNAVAILABLE / RESULT WITHHELD
A delay does not rewrite the activity

The 45-minute detour still arrives at 8:03; buffer becomes 47 minutes.

Stale estimates retain their age

Cached 7:16 PM remains visible; old data is not fresh.

Unknown stays unknown

Missing queue timing is not zero. Static places and routes remain available.

## Expressive where it can be. Precise where it must be.

11 / DESIGN SYSTEM

Expressive where it can be. Precise where it must be.

Modular Shift / a sequence becoming a Q.
Explore the original identity study ↗

Space Grotesk
STRUCTURE & NUMERALS
Inter
FUNCTIONAL READING

Impact for condensed festival titles; Georgia italic for editorial accents. The logo is vector geometry.

Plum
#20152E
Cloud
#F5F6FA
Mint / Main
#A9EAD2
Periwinkle / River
#A9B8F4
Lavender / Echo
#CCB0EC
Apricot
#FF8B60
Scale & spacing

16px input text; 12px minimum metadata in the spec; 24px phone gutters; primary targets typically 52–54px. Desktop is composed, not a stretched phone.

Functional patterns

Labelled outline icons; a phone navigation pill; aligned time/artist/stage rows; stage names alongside color; native forms and explicit statuses.

Motion & focus

Finite entrances, doodles, and hover gestures. Reduced motion retains information. Focus rings and selected/pressed semantics support keyboard access.

Component and token evidence

Buttons: ink primary, outline secondary, text navigation. Inputs: labelled native fields and password reveal. Surfaces: next priority, food, consequence, friend, and utility. Statuses: LIVE, CACHED, PREVIEW, RECAP, TIGHT, unavailable. Space Grotesk and Inter are locally bundled with SIL licenses.

Brand communications use Ink #191919, Paper #F6F5F0, Turn #D9F36B; these do not replace product stage colors. Older CSS overrides remain; token consolidation is a maintenance opportunity.

## Plan on desktop. Decide on the move.

12 / RESPONSIVE EXPERIENCE

Plan on desktop. Decide on the move.
DESKTOP / STAGE AND TIME RELATIONSHIPS
PHONE / LINEAR, SCANNABLE SETS

Today places a map beside the plan on desktop. Schedule becomes a chronological phone list. Phone map details flow below the canvas. Signup stacks labelled fields with 16px input text.

All seven requested widths — authentic captures
320px ↗
375px ↗
390px ↗
430px ↗
768px ↗
1024px ↗
1440px ↗

Each width was captured independently, not resized from desktop. Product checks cover Today, Schedule, Map, and Signup at these seven widths. Observed gaps are recorded in audit and QA documents.

Forms and onboarding — actual phone capture

Signup uses name, email and a six-character minimum password, native browser validation and a reveal control. Submission creates only local demo state, then opens Setup for Must See choices. No password is stored and no server authentication is implied. Mobile fields use 16px text; explicit error-summary and assistive-device validation remain future work.

## A second way through the same task.

13 / ACCESSIBILITY

A second way through the same task.
Implemented support
Semantic headings, named controls, native form labels, and skip navigation.
Text places and ordered instructions alongside spatial geometry.
Modal focus trap, inert background, Escape close, and tested search focus return.
Stage names and state text supplement color.
Reduced motion leaves the complete timeline available.
Verification limits
Automated scans do not establish WCAG certification.
Screen-reader and switch-control sessions are still needed.
Outdoor contrast, actual touch use, and Safari/iOS are unvalidated.
Small metadata, dense map layers, target spacing, and floating nav need manual review.
200% text and 400% browser zoom need a dedicated pass.

The product audit records actual scan results and remaining issues rather than claiming blanket WCAG 2.2 AA compliance.

## Tested logic is not the same as tested usability.

14 / VALIDATION

Tested logic is not the same as tested usability.
EXECUTED / TECHNICAL
What can be verified now

Seven model tests cover detours, null values, route weights, delay, priorities, sharing expiry, freshness, and historical timing. Fresh browser captures check responsive reflow and selected accessibility rules.

Case-study QA separately checks links, images, headings, keyboard access, reduced motion, and responsive layouts.

PLANNED / WITH ATTENDEES
What needs people

Run 5–8 moderated sessions, including access needs. Ask people to eat before Coldplay, choose a quieter route, meet friends without enabling sharing, and explain delayed or stale timing.

Record completion, errors, time on task, comprehension, and confidence in freshness. Targets are hypotheses, not achieved metrics.

Proposed session protocol and acceptance criteria
Present the festival scenario without teaching navigation; observe the first priority and action.
Ask “Can you eat at Slice Club and make Coldplay?” Success includes explaining 8:03 arrival and 27 minutes.
Introduce Delayed. Ask what changed and what stayed the same.
Arrange a group meetup while keeping sharing off; inspect the toggle, not self-report alone.
Introduce patchy and unavailable data. Ask whether timing is current and how to recover.

Proposed goal: at least 4 of 5 explain timing and freshness without prompting. Repeated confusion matters more than average task speed. No participant sessions or results are claimed.

## Keep a next step when certainty disappears.

15 / EDGE CASES & RECOVERY

Keep a next step when certainty disappears.
No saved priority

Today asks what is unmissable.

Choose a set from Schedule.
Unknown queue

Timing becomes uncertain; totals are not fabricated.

Compare another stop or inspect a route.
Patchy/offline data

Cache age is visible; essentials work after caching.

Use saved map/schedule/pass; retry.
Paused friend

The screen says Location paused.

Use a last-known zone or group point.
Unsupported route

Missing endpoint timing is explicit.

Return to map/text landmarks or a supported destination.
Invalid form or invite

Native validation blocks incomplete forms; snapshots are validated.

Correct the field or return to Friends.
Schedule overlap

A text warning explains conflict; nothing is silently unsaved.

Prioritize a set or decide to leave early.

## A complete prototype. An honest boundary around its evidence.

16 / OUTCOMES

A complete prototype.
An honest boundary around its evidence.
Designed

Connected decisions: orient → choose → understand → route → adapt. Responsive screens, original identity, explicit uncertainty.

Built

Modular Vite/JavaScript frontend, local state, five demo presets, route graph, timing model, plan snapshots, production hosting.

Evaluated

Model checks, selected browser interactions, responsive captures, automated accessibility, review-driven map iterations.

Still unvalidated

Attendee comprehension, on-site estimates, outdoor use, assistive-device completion, business and behavioral impact.

No conversion uplift, time saved, satisfaction, attendance, or growth claim is inferred from a working prototype.

## The hard part was preserving the consequence.

17 / REFLECTION

The hard part was preserving the consequence.

A clean answer needs a traceable calculation. Exposing the food detour’s five parts makes it accountable, but costs space. Arrival remains prominent while the arithmetic is available; the trade-off does not disappear.

Map iterations exposed a practical failure: a spatial surface can look complete while trapping scroll. Moving details into document flow and exposing pan controls corrected reachability. That is an interaction fix, not proof of better attendee performance.

Next, test assumptions before adding features. Eating duration, queue credibility, leave-time comprehension, and trust in stale data matter more than another screen. I would start those comprehension tests earlier and consolidate accumulated CSS overrides before extending the product.

## Go deeper without taking the claims on trust.

18 / EVIDENCE & NEXT STEPS

Go deeper without taking the claims on trust.
Source repository ↗
Original brand explorations ↗
Audit & QA evidence ↓
320px source capture ↗

Nine supporting documents distinguish facts, assumptions, and proposed work. Screenshots come directly from the app; framing and annotations remain outside the images.

## Less figuring it out. More being there.

19 / THE NEXT MOMENT

Less figuring it out.
More being there.
Explore QUEUE
Next case study
QUEUE / Brand identity ↗
Back to all work
Mitali Giri / Selected work ↗