# QUEUE — accessibility review

Review date:18 October2026 (Asia/Calcutta). Target: WCAG2.2AA where applicable. Tools: Playwright with installed Edge; axe-core tags wcag2a/wcag2aa/wcag21aa/wcag22aa. Automated checks are partial evaluations, not a compliance certification or attendee study.

## Current executed evidence

- Product: six automated scans at390px — Today, Live, Slice Club result, Map, Friends, Signup. Zero reported violations in those scans.
- Product reflow: Today/Schedule/Map/Signup at320,375,390,430,768,1024,1440px. No horizontal page overflow in28 combinations.
- Case study: scans at375 and1440px. Zero reported violations.
- Case study reflow: all seven widths. One h1; no horizontal page overflow.
- Keyboard: case-study skip link, native disclosure open, chapter anchors and real portfolio navigation exercised.
- Reduced motion: capture uses reduced motion for stable product assets; case-study hero tested with reduced preference, no animation. Full timeline remains in product DOM.
- Refer to QUEUE_PRODUCT_CHECKS.json and QUEUE_CASE_STUDY_CHECKS.json for machine-readable output and exact scope.

## Implemented strengths and qualification

| Area | Evidence | Qualification |
|---|---|---|
| Semantics | Header/nav/main/footer, headings, named controls | Landmark screen-reader announcements not manually audited here |
| Forms | Native labelled name/email/password, reveal and browser validation | No custom validated error-summary pattern; test actual assistive technology |
| Focus | Visible CSS rings; modal Tab trap; inert background | Focus visibility in every map/overlay configuration needs manual testing |
| Color | Stage/status names accompany color; contrast scan passed sampled views | Outdoor readability and forced-colors hardware remain untested |
| Spatial access | Text map exposes same place inventory, route instructions are ordered text | Dense graphical layers and text-list keyboard order need real-device review |
| Motion | Prefers-reduced-motion rules disable decorative transitions | No vestibular-sensitivity participant evaluation |
| Touch | Button-based zoom/pan and page scrolling on touch | Actual iOS/Android gesture/device testing outstanding |
| Responsive | Seven-width overflow checks pass | 200% text scaling/400% real browser zoom need a dedicated pass |
| Feedback | Toast role=status, cache age, null-data warning | Live-region timing/verbosity needs manual screen-reader assessment |

## Case-study accessibility choices

Native details/summary keeps disclosures keyboard operable. Journey table uses scoped row/column headers and a labelled focusable scrolling region. Screenshot alternatives summarize task-relevant content; annotations are real HTML and the prototype link offers an interactive equivalent. Heading order is semantic. Stage palettes retain labels. No scroll-jacking, autoplay, parallax or required gesture. The work index provides actual destinations rather than disabled or invented links.

## Remaining work

Manual NVDA/VoiceOver task passes; switch/voice control; Safari/iOS and Android hardware; 200% text and400% browser zoom; audit minimum target rectangles and overlap in map layers; test fixed navigation occlusion and short-height landscape; evaluate form validation and escape/focus recovery across every overlay. Do not infer full WCAGAA compliance from the reported zero automated findings.
