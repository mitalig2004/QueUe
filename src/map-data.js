// Canonical geometry and templates transcribed from docs/08_FESTIVAL_MAP_SPEC.md.
export const pois = [
  {
    "id": "gate-2",
    "name": "Gate 2 / Entry",
    "type": "entry",
    "x": 500,
    "y": 650,
    "priority": "P2",
    "icon": "gate",
    "crowd": "MODERATE",
    "accessibility": "Step-free entry/exit in fixture"
  },
  {
    "id": "main-stage",
    "name": "Main Stage",
    "type": "stage",
    "x": 520,
    "y": 100,
    "priority": "P1",
    "icon": "stage",
    "crowd": "BUSY",
    "accessibility": "Viewing area nearby"
  },
  {
    "id": "river-stage",
    "name": "River Stage",
    "type": "stage",
    "x": 270,
    "y": 450,
    "priority": "P1",
    "icon": "stage",
    "crowd": "MODERATE",
    "accessibility": "Shared step-free approach"
  },
  {
    "id": "echo-tent",
    "name": "Echo Tent",
    "type": "stage",
    "x": 760,
    "y": 450,
    "priority": "P1",
    "icon": "stage",
    "crowd": "LOW",
    "accessibility": "Shared step-free approach"
  },
  {
    "id": "central-lawn",
    "name": "Central Lawn",
    "type": "zone",
    "x": 520,
    "y": 300,
    "priority": "P2",
    "icon": "zone",
    "crowd": "MODERATE",
    "accessibility": "Main pedestrian circulation"
  },
  {
    "id": "food-court-a",
    "name": "Food Court A",
    "type": "food-zone",
    "x": 350,
    "y": 355,
    "priority": "P2",
    "icon": "food",
    "crowd": "BUSY",
    "accessibility": "Level approach in fixture"
  },
  {
    "id": "food-court-b",
    "name": "Food Court B",
    "type": "food-zone",
    "x": 690,
    "y": 355,
    "priority": "P2",
    "icon": "food",
    "crowd": "MODERATE",
    "accessibility": "Level approach in fixture"
  },
  {
    "id": "slice-club",
    "name": "Slice Club",
    "type": "food",
    "x": 320,
    "y": 335,
    "priority": "P3",
    "icon": "food",
    "crowd": "BUSY",
    "accessibility": "Vegetarian options; level access"
  },
  {
    "id": "taco-lab",
    "name": "Taco Lab",
    "type": "food",
    "x": 390,
    "y": 375,
    "priority": "P3",
    "icon": "food",
    "crowd": "BUSY",
    "accessibility": "Vegetarian options; level access"
  },
  {
    "id": "bombay-bites",
    "name": "Bombay Bites",
    "type": "food",
    "x": 655,
    "y": 335,
    "priority": "P3",
    "icon": "food",
    "crowd": "MODERATE",
    "accessibility": "Vegetarian options; level access"
  },
  {
    "id": "green-room",
    "name": "Green Room",
    "type": "food",
    "x": 720,
    "y": 385,
    "priority": "P3",
    "icon": "food",
    "crowd": "MODERATE",
    "accessibility": "Vegetarian; vegan options; level access"
  },
  {
    "id": "merch-main",
    "name": "Merch Main",
    "type": "merch",
    "x": 620,
    "y": 220,
    "priority": "P2",
    "icon": "merch",
    "crowd": "MODERATE",
    "accessibility": "Level shared route"
  },
  {
    "id": "merch-kiosk",
    "name": "Merch Kiosk",
    "type": "merch",
    "x": 420,
    "y": 275,
    "priority": "P3",
    "icon": "merch",
    "crowd": "LOW",
    "accessibility": "Level shared route"
  },
  {
    "id": "water-1",
    "name": "Water 1",
    "type": "water",
    "x": 210,
    "y": 320,
    "priority": "P2",
    "icon": "water",
    "crowd": "LOW",
    "accessibility": "Refill point"
  },
  {
    "id": "water-2",
    "name": "Water 2",
    "type": "water-zone",
    "x": 450,
    "y": 220,
    "priority": "P2",
    "icon": "water",
    "crowd": "LOW",
    "accessibility": "Tap + group apron; distinct endpoints"
  },
  {
    "id": "restroom-a",
    "name": "Restroom A",
    "type": "restroom",
    "x": 800,
    "y": 300,
    "priority": "P2",
    "icon": "restroom",
    "crowd": "MODERATE",
    "accessibility": "No accessible-facility claim"
  },
  {
    "id": "restroom-b",
    "name": "Restroom B",
    "type": "restroom",
    "x": 350,
    "y": 540,
    "priority": "P2",
    "icon": "restroom",
    "crowd": "LOW",
    "accessibility": "Accessible facilities marker"
  },
  {
    "id": "medical-point",
    "name": "Medical Point",
    "type": "medical",
    "x": 430,
    "y": 590,
    "priority": "P1",
    "icon": "medical",
    "crowd": "LOW",
    "accessibility": "Staffed help point, not a care guarantee"
  },
  {
    "id": "info",
    "name": "Info",
    "type": "info",
    "x": 520,
    "y": 560,
    "priority": "P3",
    "icon": "info",
    "crowd": "LOW",
    "accessibility": "Ask staff for directions/access support"
  },
  {
    "id": "lockers",
    "name": "Lockers",
    "type": "lockers",
    "x": 570,
    "y": 590,
    "priority": "P3",
    "icon": "lockers",
    "crowd": "LOW",
    "accessibility": "No availability or reservation claim"
  },
  {
    "id": "quiet-zone",
    "name": "Quiet Zone",
    "type": "quiet",
    "x": 850,
    "y": 520,
    "priority": "P2",
    "icon": "quiet",
    "crowd": "LOW",
    "accessibility": "Low-sensory option, not guaranteed silence"
  },
  {
    "id": "accessible-viewing",
    "name": "Accessible Viewing Area",
    "type": "accessibility",
    "x": 590,
    "y": 145,
    "priority": "P2",
    "icon": "accessibility",
    "crowd": "MODERATE",
    "accessibility": "Main Stage east-front area"
  }
];
export const nodes = {
  "gate-2": {
    "x": 500,
    "y": 650,
    "name": "Gate 2 / Entry"
  },
  "main-stage": {
    "x": 520,
    "y": 100,
    "name": "Main Stage"
  },
  "river-stage": {
    "x": 270,
    "y": 450,
    "name": "River Stage"
  },
  "echo-tent": {
    "x": 760,
    "y": 450,
    "name": "Echo Tent"
  },
  "central-lawn": {
    "x": 520,
    "y": 300,
    "name": "Central Lawn"
  },
  "food-court-a": {
    "x": 350,
    "y": 355,
    "name": "Food Court A"
  },
  "food-court-b": {
    "x": 690,
    "y": 355,
    "name": "Food Court B"
  },
  "slice-club": {
    "x": 320,
    "y": 335,
    "name": "Slice Club"
  },
  "taco-lab": {
    "x": 390,
    "y": 375,
    "name": "Taco Lab"
  },
  "bombay-bites": {
    "x": 655,
    "y": 335,
    "name": "Bombay Bites"
  },
  "green-room": {
    "x": 720,
    "y": 385,
    "name": "Green Room"
  },
  "merch-main": {
    "x": 620,
    "y": 220,
    "name": "Merch Main"
  },
  "merch-kiosk": {
    "x": 420,
    "y": 275,
    "name": "Merch Kiosk"
  },
  "water-1": {
    "x": 210,
    "y": 320,
    "name": "Water 1"
  },
  "water-2": {
    "x": 450,
    "y": 220,
    "name": "Water 2"
  },
  "restroom-a": {
    "x": 800,
    "y": 300,
    "name": "Restroom A"
  },
  "restroom-b": {
    "x": 350,
    "y": 540,
    "name": "Restroom B"
  },
  "medical-point": {
    "x": 430,
    "y": 590,
    "name": "Medical Point"
  },
  "info": {
    "x": 520,
    "y": 560,
    "name": "Info"
  },
  "lockers": {
    "x": 570,
    "y": 590,
    "name": "Lockers"
  },
  "quiet-zone": {
    "x": 850,
    "y": 520,
    "name": "Quiet Zone"
  },
  "accessible-viewing": {
    "x": 590,
    "y": 145,
    "name": "Accessible Viewing Area"
  },
  "maya-zone": {
    "x": 500,
    "y": 430,
    "name": "Current approximate Central Lawn south approach"
  },
  "rohan-zone": {
    "x": 360,
    "y": 345,
    "name": "Near Food Court A, distinct from Slice queue exit"
  },
  "aanya-zone": {
    "x": 560,
    "y": 155,
    "name": "Main Stage approximate viewing zone"
  },
  "kabir-zone": {
    "x": 295,
    "y": 465,
    "name": "River Stage last-known zone, paused"
  },
  "south-junction": {
    "x": 500,
    "y": 590,
    "name": "Medical/Lockers/Gate junction"
  },
  "lower-connector": {
    "x": 500,
    "y": 480,
    "name": "River/Echo connecting corridor"
  },
  "lawn-east": {
    "x": 640,
    "y": 300,
    "name": "East side of Central Lawn"
  },
  "lawn-west": {
    "x": 410,
    "y": 300,
    "name": "West side of Central Lawn"
  },
  "water-2-tap": {
    "x": 450,
    "y": 228,
    "name": "Near refill access endpoint; Maya access 2 min"
  },
  "water-2-junction": {
    "x": 475,
    "y": 210,
    "name": "Main Stage approach junction"
  },
  "water-2-meet": {
    "x": 480,
    "y": 235,
    "name": "Group apron endpoint; Maya 4 min"
  },
  "north-west": {
    "x": 350,
    "y": 210,
    "name": "Quieter west perimeter bend"
  },
  "main-west": {
    "x": 420,
    "y": 135,
    "name": "West stage approach"
  },
  "east-ramp": {
    "x": 680,
    "y": 170,
    "name": "No-stairs illustrative ramp approach"
  },
  "river-turn": {
    "x": 300,
    "y": 395,
    "name": "Turn north of River Stage; named landmark"
  },
  "echo-turn": {
    "x": 700,
    "y": 410,
    "name": "West side of Echo connector"
  }
};
export const routes = [
  {
    "id": "maya-main-fast",
    "profile": "FASTEST",
    "points": [
      "maya-zone",
      "central-lawn",
      "water-2-junction",
      "main-stage"
    ],
    "minutes": [
      3,
      2,
      3
    ],
    "from": "maya-zone",
    "to": "main-stage",
    "duration": 8,
    "crowd": "MODERATE"
  },
  {
    "id": "maya-main-quiet",
    "profile": "LESS_CROWDED",
    "points": [
      "maya-zone",
      "lawn-west",
      "north-west",
      "main-west",
      "main-stage"
    ],
    "minutes": [
      3,
      3,
      2,
      2
    ],
    "from": "maya-zone",
    "to": "main-stage",
    "duration": 10,
    "crowd": "LOW"
  },
  {
    "id": "maya-main-step",
    "profile": "STEP_FREE",
    "points": [
      "maya-zone",
      "lawn-east",
      "east-ramp",
      "accessible-viewing",
      "main-stage"
    ],
    "minutes": [
      3,
      3,
      3,
      2
    ],
    "from": "maya-zone",
    "to": "main-stage",
    "duration": 11,
    "crowd": "LOW"
  },
  {
    "id": "maya-slice",
    "profile": "ALL",
    "points": [
      "maya-zone",
      "food-court-a",
      "slice-club"
    ],
    "minutes": [
      5,
      1
    ],
    "from": "maya-zone",
    "to": "slice-club",
    "duration": 6,
    "crowd": "MODERATE"
  },
  {
    "id": "slice-main-fast",
    "profile": "FASTEST",
    "points": [
      "slice-club",
      "water-2-tap",
      "river-turn",
      "main-stage"
    ],
    "minutes": [
      2,
      3,
      3
    ],
    "from": "slice-club",
    "to": "main-stage",
    "duration": 8,
    "crowd": "MODERATE"
  },
  {
    "id": "slice-main-quiet",
    "profile": "LESS_CROWDED",
    "points": [
      "slice-club",
      "lawn-west",
      "north-west",
      "main-west",
      "main-stage"
    ],
    "minutes": [
      2,
      3,
      3,
      2
    ],
    "from": "slice-club",
    "to": "main-stage",
    "duration": 10,
    "crowd": "LOW"
  },
  {
    "id": "slice-main-step",
    "profile": "STEP_FREE",
    "points": [
      "slice-club",
      "central-lawn",
      "lawn-east",
      "east-ramp",
      "accessible-viewing",
      "main-stage"
    ],
    "minutes": [
      2,
      2,
      3,
      2,
      2
    ],
    "from": "slice-club",
    "to": "main-stage",
    "duration": 11,
    "crowd": "LOW"
  },
  {
    "id": "maya-rohan",
    "profile": "ALL",
    "points": [
      "maya-zone",
      "food-court-a",
      "rohan-zone"
    ],
    "minutes": [
      5,
      1
    ],
    "from": "maya-zone",
    "to": "rohan-zone",
    "duration": 6,
    "crowd": "MODERATE"
  },
  {
    "id": "rohan-main",
    "profile": "ALL",
    "points": [
      "rohan-zone",
      "lawn-west",
      "water-2-junction",
      "main-stage"
    ],
    "minutes": [
      3,
      3,
      3
    ],
    "from": "rohan-zone",
    "to": "main-stage",
    "duration": 9,
    "crowd": "MODERATE"
  },
  {
    "id": "maya-water-meet",
    "profile": "ALL",
    "points": [
      "maya-zone",
      "central-lawn",
      "water-2-meet"
    ],
    "minutes": [
      2,
      2
    ],
    "from": "maya-zone",
    "to": "water-2-meet",
    "duration": 4,
    "crowd": "LOW"
  },
  {
    "id": "rohan-water-meet",
    "profile": "ALL",
    "points": [
      "rohan-zone",
      "lawn-west",
      "water-2-meet"
    ],
    "minutes": [
      3,
      3
    ],
    "from": "rohan-zone",
    "to": "water-2-meet",
    "duration": 6,
    "crowd": "LOW"
  },
  {
    "id": "aanya-water-meet",
    "profile": "ALL",
    "points": [
      "aanya-zone",
      "water-2-junction",
      "water-2-meet"
    ],
    "minutes": [
      3,
      2
    ],
    "from": "aanya-zone",
    "to": "water-2-meet",
    "duration": 5,
    "crowd": "LOW"
  },
  {
    "id": "maya-water-tap",
    "profile": "ALL",
    "points": [
      "maya-zone",
      "central-lawn",
      "water-2-tap"
    ],
    "minutes": [
      1,
      1
    ],
    "from": "maya-zone",
    "to": "water-2-tap",
    "duration": 2,
    "crowd": "LOW"
  },
  {
    "id": "water-tap-main",
    "profile": "ALL",
    "points": [
      "water-2-tap",
      "water-2-junction",
      "main-stage"
    ],
    "minutes": [
      1,
      3
    ],
    "from": "water-2-tap",
    "to": "main-stage",
    "duration": 4,
    "crowd": "LOW"
  },
  {
    "id": "echo-main-transfer",
    "profile": "ALL",
    "points": [
      "echo-tent",
      "echo-turn",
      "food-court-b",
      "lawn-east",
      "merch-main",
      "main-stage"
    ],
    "minutes": [
      2,
      3,
      3,
      3,
      3
    ],
    "from": "echo-tent",
    "to": "main-stage",
    "duration": 14,
    "crowd": "MODERATE"
  },
  {
    "id": "main-river-transfer",
    "profile": "ALL",
    "points": [
      "main-stage",
      "water-2-junction",
      "lawn-west",
      "food-court-a",
      "river-stage"
    ],
    "minutes": [
      3,
      3,
      3,
      3
    ],
    "from": "main-stage",
    "to": "river-stage",
    "duration": 12,
    "crowd": "MODERATE"
  },
  {
    "id": "maya-river",
    "profile": "ALL",
    "points": [
      "maya-zone",
      "lower-connector",
      "river-stage"
    ],
    "minutes": [
      2,
      4
    ],
    "from": "maya-zone",
    "to": "river-stage",
    "duration": 6,
    "crowd": "MODERATE"
  },
  {
    "id": "maya-echo",
    "profile": "ALL",
    "points": [
      "maya-zone",
      "lower-connector",
      "echo-turn",
      "echo-tent"
    ],
    "minutes": [
      4,
      6,
      2
    ],
    "from": "maya-zone",
    "to": "echo-tent",
    "duration": 12,
    "crowd": "MODERATE"
  },
  {
    "id": "maya-taco",
    "profile": "ALL",
    "points": [
      "maya-zone",
      "food-court-a",
      "taco-lab"
    ],
    "minutes": [
      3,
      1
    ],
    "from": "maya-zone",
    "to": "taco-lab",
    "duration": 4,
    "crowd": "MODERATE"
  },
  {
    "id": "maya-bombay",
    "profile": "ALL",
    "points": [
      "maya-zone",
      "food-court-b",
      "bombay-bites"
    ],
    "minutes": [
      6,
      1
    ],
    "from": "maya-zone",
    "to": "bombay-bites",
    "duration": 7,
    "crowd": "MODERATE"
  },
  {
    "id": "maya-green",
    "profile": "ALL",
    "points": [
      "maya-zone",
      "food-court-b",
      "green-room"
    ],
    "minutes": [
      4,
      1
    ],
    "from": "maya-zone",
    "to": "green-room",
    "duration": 5,
    "crowd": "MODERATE"
  },
  {
    "id": "taco-main",
    "profile": "ALL",
    "points": [
      "taco-lab",
      "lawn-west",
      "water-2-junction",
      "main-stage"
    ],
    "minutes": [
      4,
      3,
      3
    ],
    "from": "taco-lab",
    "to": "main-stage",
    "duration": 10,
    "crowd": "MODERATE"
  },
  {
    "id": "bombay-main",
    "profile": "ALL",
    "points": [
      "bombay-bites",
      "lawn-east",
      "merch-main",
      "main-stage"
    ],
    "minutes": [
      2,
      2,
      3
    ],
    "from": "bombay-bites",
    "to": "main-stage",
    "duration": 7,
    "crowd": "MODERATE"
  },
  {
    "id": "green-main",
    "profile": "ALL",
    "points": [
      "green-room",
      "food-court-b",
      "lawn-east",
      "merch-main",
      "main-stage"
    ],
    "minutes": [
      1,
      3,
      2,
      3
    ],
    "from": "green-room",
    "to": "main-stage",
    "duration": 9,
    "crowd": "MODERATE"
  },
  {
    "id": "maya-merch",
    "profile": "ALL",
    "points": [
      "maya-zone",
      "central-lawn",
      "lawn-east",
      "merch-main"
    ],
    "minutes": [
      3,
      3,
      2
    ],
    "from": "maya-zone",
    "to": "merch-main",
    "duration": 8,
    "crowd": "MODERATE"
  },
  {
    "id": "merch-main-main",
    "profile": "ALL",
    "points": [
      "merch-main",
      "east-ramp",
      "accessible-viewing",
      "main-stage"
    ],
    "minutes": [
      4,
      3,
      2
    ],
    "from": "merch-main",
    "to": "main-stage",
    "duration": 9,
    "crowd": "MODERATE"
  },
  {
    "id": "maya-kiosk",
    "profile": "ALL",
    "points": [
      "maya-zone",
      "lawn-west",
      "merch-kiosk"
    ],
    "minutes": [
      2,
      1
    ],
    "from": "maya-zone",
    "to": "merch-kiosk",
    "duration": 3,
    "crowd": "MODERATE"
  },
  {
    "id": "kiosk-main",
    "profile": "ALL",
    "points": [
      "merch-kiosk",
      "water-2-junction",
      "main-stage"
    ],
    "minutes": [
      2,
      3
    ],
    "from": "merch-kiosk",
    "to": "main-stage",
    "duration": 5,
    "crowd": "MODERATE"
  },
  {
    "id": "maya-rest-b",
    "profile": "ALL",
    "points": [
      "maya-zone",
      "lower-connector",
      "restroom-b"
    ],
    "minutes": [
      1,
      2
    ],
    "from": "maya-zone",
    "to": "restroom-b",
    "duration": 3,
    "crowd": "MODERATE"
  },
  {
    "id": "rest-b-main",
    "profile": "ALL",
    "points": [
      "restroom-b",
      "lawn-west",
      "water-2-junction",
      "main-stage"
    ],
    "minutes": [
      1,
      1,
      2
    ],
    "from": "restroom-b",
    "to": "main-stage",
    "duration": 4,
    "crowd": "MODERATE"
  },
  {
    "id": "maya-rest-a",
    "profile": "ALL",
    "points": [
      "maya-zone",
      "lawn-east",
      "restroom-a"
    ],
    "minutes": [
      3,
      2
    ],
    "from": "maya-zone",
    "to": "restroom-a",
    "duration": 5,
    "crowd": "MODERATE"
  },
  {
    "id": "maya-water-one",
    "profile": "ALL",
    "points": [
      "maya-zone",
      "food-court-a",
      "water-1"
    ],
    "minutes": [
      3,
      2
    ],
    "from": "maya-zone",
    "to": "water-1",
    "duration": 5,
    "crowd": "LOW"
  },
  {
    "id": "maya-medical",
    "profile": "ALL",
    "points": [
      "maya-zone",
      "south-junction",
      "medical-point"
    ],
    "minutes": [
      3,
      1
    ],
    "from": "maya-zone",
    "to": "medical-point",
    "duration": 4,
    "crowd": "MODERATE"
  },
  {
    "id": "maya-quiet",
    "profile": "ALL",
    "points": [
      "maya-zone",
      "lower-connector",
      "quiet-zone"
    ],
    "minutes": [
      2,
      3
    ],
    "from": "maya-zone",
    "to": "quiet-zone",
    "duration": 5,
    "crowd": "LOW"
  }
];
