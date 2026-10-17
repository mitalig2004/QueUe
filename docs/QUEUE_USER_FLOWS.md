# QUEUE — primary flows

Implemented unless explicitly labelled proposed. Fixed normal fixture: 19:18, target Coldplay at20:30, fastest route. Sources src/main.js, views.js, model.js and social-calendar.js.

## A — food before the next priority

```mermaid
flowchart TD
  A[Today: next Must See] --> B[Open planner with target]
  B --> C[Choose food and compare totals]
  C --> D[Slice Club detail]
  D --> Q{Queue estimate available?}
  Q -->|Yes| E[45 total / arrival20:03 / buffer27]
  Q -->|No| U[Uncertain timing; no fabricated total]
  E --> R[Route Maya to Slice]
  U --> R
  U --> C
  R --> S[Local Start route acknowledgement]
  S --> T[Explicit Continue to Main Stage]
  E --> C
  C --> X[Return Today or Schedule]
```

Validation: route parameters map to supported templates; queue null invalidates complete timing; all five step durations contribute to arrival. Save/start acknowledge local state only. No physical arrival or food order is tracked. Success = inspect consequence and choose route; participant comprehension remains unvalidated.

## B — private meetup coordination

```mermaid
flowchart TD
  A[Friends / sharing OFF] --> B{Individual or group?}
  B -->|Individual| C[Rohan:6 walk+5 meet+9 onward]
  B -->|Group| D[Water2 apron:4/6/5 minute walks]
  C --> P{Zone available?}
  P -->|Paused| L[Last-zone or group alternative]
  P -->|Available fixture| H[Confirm local heading]
  D --> H
  L --> D
  H --> R[Route to named meeting endpoint]
  H --> X[Cancel heading / return Friends]
  A --> I[Create and copy saved-plan snapshot]
  I --> V{Payload valid?}
  V -->|Yes| J[Preview then explicitly add saved sets]
  V -->|No| Z[Invalid-link explanation / return Friends]
```

Sharing stays OFF unless explicitly enabled. Invitation acceptance merges performance IDs without enabling location. No email, real-time sync or delivery confirmation. Group apron is a different endpoint from the two-minute refill tap.

## C — changed schedule with recovery

```mermaid
flowchart TD
  A[Account:Coldplay Delayed] --> B[Shared effective start20:50/end22:20]
  B --> C[Today/Live:92 minutes, leave20:38]
  B --> D[Same Slice arrival20:03; buffer47]
  B --> E[Schedule:5-minute overlap with Fred]
  C --> F{Keep plan or revise?}
  F -->|Keep| G[Dismiss notice; retain updated timing]
  F -->|Revise| H[Schedule or comparison]
  H --> D
  G --> X[Exit via primary navigation]
  A --> N[Normal preset reverses delay]
```

Patchy is a separate preset: cached values show 19:16 freshness; queue unavailable is an independent control. A missing estimate cannot produce a confident number. Current code dismisses the delay banner independently from schedule state.

## Proposed validation

Observe whether participants can explain the total, select appropriate exit/recovery actions, distinguish old/missing values, and meet without enabling sharing. Model/browser assertions do not establish success with real attendees.
