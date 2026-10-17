# QUEUE — implemented information architecture

Source: src/main.js router and navigation; src/views.js, public-views.js, social-calendar.js. Public portfolio routes added separately from the application. This is a navigation hierarchy, not a backend architecture.

```mermaid
flowchart TD
  Home["/ — Landing"] --> Demo["/demo → /today"]
  Home --> Auth["/login or /signup"]
  Auth --> Setup["/setup — Must See choices"]
  Setup --> Today["/today"]
  Demo --> Today
  Today --> Live["/live"]
  Today --> Planner["/decision?target= — modal or page"]
  Planner --> Food["/food → /food/:id"]
  Planner --> Services["/water · /restrooms · /merch · /medical"]
  Today --- Schedule["/schedule — day/stage/Saved"]
  Schedule --> Set["/schedule/:id — Save / Must See"]
  Today --- Map["/map — layers and text places"]
  Map --> POI["/venues/:id"]
  POI --> Route["/route?from=&to=&preference="]
  Food --> Route
  Services --> Route
  Today --- Friends["/friends — privacy and zones"]
  Friends --> Person["/friends/:id"]
  Friends --> Group["/friends/group — Water 2"]
  Friends --> Invite["/friends/join?plan= — snapshot"]
  Person --> Route
  Group --> Route
  Today --> Utilities["Header: /search · /pass · calendar · account"]
  Work["/work — portfolio index"] --> Case["/work/queue — product study"]
  Work --> Brand["/brand — identity study"]
  Case --> Today
```

Today = immediate decision context. Schedule = temporal plan. Map = spatial plan. Friends = social context and privacy. Essentials are reachable from the current task rather than an unrelated marketplace. Search, Pass, Calendar and Account remain supporting entry points. Live is a reduced-density view of the same plan.

State is shared through model selectors/local persistence, not duplicated per navigation section. Deep links retain target, filters, route endpoints and preferences. Invalid IDs, unsupported routes and no-target states expose recovery.
