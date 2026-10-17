# QUEUE — key design decisions

Each decision is visible in the current product and explained alongside authentic screenshots on /work/queue. Claims concern implementation, not measured behavioral effectiveness.

| Challenge | Approach | Rationale | Evidence | Limitation |
|---|---|---|---|---|
| Competing destinations | One next Must See, countdown and leave | Preserve target while choosing detours | today-mobile.jpg; nextPerformance | Fixed fixture time and inferred local priority |
| Queue-only arithmetic | Five steps, arrival/start comparison, breathing room | Make the consequence inspectable | decision-desktop.jpg and decision-mobile.jpg; calculate | Wait/prep/eat are assumed estimates |
| Inconsistent schedule changes | Effective schedule selectors update all consumers | Same change must have consistent consequences | delayed-mobile.jpg; model tests | No external live feed |
| Spatial barriers and trapped scroll | Fewer default markers, layers, text list, native touch scroll | Preserve reachability and alternatives | map-mobile.jpg; route-desktop.jpg; commits2d30ab4/e7c7461 | Some layers remain dense; no hardware test |
| Coordination/privacy tension | Approximate zones; OFF default; duration; independent invite snapshots | Useful coordination need not imply tracking | friends-mobile.jpg, group-mobile.jpg; sharing-expiry test | No actual messaging/location service |
| Stale/missing information | Dated cache warning vs null total | Preserve usefulness without false certainty | stale-mobile.jpg, unknown-mobile.jpg; model null test | Freshness not production-guaranteed |

## Genuine iteration evidence

Source control retains the map-density and scrolling changes. The original /brand page preserves six identity explorations and a comparative design evaluation. These support historical iteration claims; the current source captures are not labelled historical screenshots.

New compact-summary vs explainable-result wireframes on the page are explicitly labelled Design Alternatives, generated for this publication. They explain information-density trade-offs without asserting historical testing or an A/B win.

## Trade-offs to discuss in an interview

- Explanation vs glanceability: show result prominently, keep arithmetic inspectable.
- Spatial context vs reachability: phone details flow under the map; longer page, less trapped interaction.
- Frictionless entry vs personalized onboarding: demo is one action; setup stays optional.
- Helpful coordination vs data minimization: zones/meeting point, no GPS trail.
- Expression vs readability: poster typography and stage colors live alongside functional Inter text.
- Route flexibility vs honest support: explicit templates, unavailable unsupported endpoints.
