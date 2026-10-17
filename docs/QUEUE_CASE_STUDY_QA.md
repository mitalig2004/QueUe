# QUEUE — case-study QA and hiring review

Date:18 October2026. Implementation route:/work/queue. Supporting index:/work. Existing next identity study:/brand. Source screenshots are under public/case-studies/queue. Report scope is explicit; no formal usability research or business outcomes claimed.

## Executed checks

- npm test: all7 deterministic model tests pass.
- npm run build: production Vite build passes.
- Product capture:25 authentic viewport images, consistent default state and labelled exceptions, approximately1.43MB combined JPEG payload before publication framing.
- Product layout:28 combinations across Today/Schedule/Map/Signup and7 widths; zero horizontal overflow.
- Product automated accessibility:6 mobile scans; zero axe violations in the tested tags.
- Case-study layout:320,375,390,430,768,1024,1440px; one h1 and no horizontal overflow.
- Case-study automated accessibility:375/1440px scans; zero axe violations in the tested tags.
- Runtime: no page errors recorded in capture or case-study QA.
- Keyboard: skip link, Enter-to-open native disclosure, in-page chapter link.
- Navigation: all-work index opens product study; next case study opens real /brand; prototype links use /today.
- Images: all referenced source captures load; progressive image loading is tested without changing screenshot pixels.
- Evidence download and actual SVG/source links must return the intended content, not only the SPA fallback200.
- Reduced motion: no hero animation when reduce is requested.

Machine-readable outputs: QUEUE_PRODUCT_CHECKS.json; QUEUE_CASE_STUDY_CHECKS.json. Scripts: scripts/capture-case-study.mjs; tests/case-study.mjs.

## Visual review

Desktop/mobile hero and task-specific solution sections inspected as screenshots. Device framing is CSS; source pixels remain unretouched. Lazy images must decode before QA screenshots; initial section screenshot exposed unloaded images in the automated capture, so QA was updated to force loading for inspection. Production keeps native lazy loading for nonhero assets. Labels and commentary are separate HTML. Wireframes are explicitly newly generated alternatives, not historical artifacts.

## Hiring-manager quality gate

| Question | Evidence / assessment |
|---|---|
| Understand in10seconds? | Hero names festival companion, food/friends/facilities and next set; actual three-screen composition. This is editorial judgment, not a timed user result. |
| Specific problem? | Complete detour time vs next performance, not generic app friction. |
| Intended users? | Attendee between sets; group coordinator; comfortable-route context, all labelled intended. |
| Contribution explicit? | Mitali: product/visual direction; Codex-assisted implementation; no invented individual hours. |
| Credible research? | Verified/assumed/proposed ledger; research absence stated; primary-source category references narrowly described. |
| Flows understandable? | Food, meetup and delay include decision, response, recovery and exits. |
| Logical IA? | Four implemented branches plus actual support routes. |
| Decisions explained? | Six challenge/approach/rationale/evidence/limitation disclosures. |
| Genuine iterations? | Two map commits and original brand explorations; new wireframes labelled accordingly. |
| Problem-solving visible? | 45-minute calculation, target propagation, privacy and uncertainty connect to the design goals. |
| Distinctive presentation? | Modular identity, plum/mint stage context, restrained editorial composition; subjective review. |
| Typography/spacing? | Locally bundled type, scoped styles, responsive spacing; desktop/mobile screenshots inspected. |
| Responsive evidence? | Independent captures at seven widths; desktop grid vs phone list. |
| Accessibility addressed? | Actual scan scope, keyboard checks, implemented support and remaining manual gaps. |
| Authentic screens? | Reproducible script, manifest, unchanged screenshot pixels, fixture state reset. |
| Edge cases? | Delay, cache age, unknown values, empty saves, paused friends, invalid links and routes. |
| Honest outcomes? | Designed/Built/Evaluated/Unvalidated; no fabricated KPIs. |
| Easy to scan? | Chapter anchors, concise leads, images and native progressive disclosure; reading time unmeasured. |
| Suitable discussion material? | Specific trade-offs and evidence boundaries support an interview; no hiring outcome implied. |

## Remaining limitations

No participant testing, screen-reader sessions, Safari/iOS or on-site validation. Brand and product are fictional, no live data integrations. Existing product small metadata, dense map layers, fixed navigation overlap, and accumulated CSS overrides deserve further manual evaluation and refactoring. Screenshots are authentic snapshots of a deterministic prototype, not evidence of a real event or production usage. No second unrelated portfolio project was invented; /brand is the real next study.
