import type { BrunchCase } from "../types";

// SEASON 1 — BRUNCH CREW cases (2–5 players, one shared phone).
// Everything is table-safe. Nothing involves strangers, private property,
// confrontation, surveillance, or leaving the group.

export const season1Brunch: BrunchCase[] = [
  {
    id: "b1-c017",
    caseNumber: "017",
    title: "The Strange Cookie Incident",
    category: "Brunch Break Investigation",
    format: "Friendly Rivalry",
    minPlayers: 2,
    hook: "Something suspicious has happened at the community clubhouse.",
    scenario:
      "Twelve cookies went into the tin. Nine came out. Somebody at this table is, fictionally speaking, extremely responsible for this.",
    objective:
      "Determine which member of your crew is most likely responsible — using only objects, silence, and theatrical confidence.",
    rounds: [
      {
        id: "r1",
        kind: "timed",
        title: "The Silent Search",
        prompt:
          "90 SECONDS. NOBODY MAY SPEAK. Each player finds three nearby objects that prove their theory about who took the cookies.",
        detail: "Stay at your table or within your own space. Speaking = instant loss of dignity.",
        mode: "all",
        seconds: 90,
        scoring: "each",
        points: 40,
      },
      {
        id: "r2",
        kind: "deduce",
        title: "The Accusation",
        prompt:
          "One at a time, each player presents their three objects and accuses someone. 30 seconds each. No interrupting.",
        mode: "turn",
        scoring: "one",
        fallback: "Short on objects? Accuse using gestures alone.",
        points: 50,
      },
      {
        id: "r3",
        kind: "recreate",
        title: "The Reconstruction",
        prompt:
          "As a group, silently reconstruct the moment of the cookie disappearance as a frozen tableau. Hold for five seconds.",
        mode: "all",
        scoring: "group",
        fallback: "Not standing up? Do it with hands only, above the table.",
        points: 45,
      },
      {
        id: "r4",
        kind: "absurd",
        title: "The Confession Round",
        prompt:
          "Everyone points at the guilty party on the count of three. Whoever gets the most points is the Cookie Culprit and must deliver a 10-second dramatic confession.",
        mode: "all",
        scoring: "one",
        points: 55,
      },
    ],
    resolution:
      "The Bureau reviews your evidence and concludes: nobody stole anything, three cookies were set aside for someone working late, and this crew has an alarming talent for accusing each other.",
    rewards: { points: 180, materials: { curios: 2 } },
  },
  {
    id: "b1-c019",
    caseNumber: "019",
    title: "Field Evidence: The Ridiculous Object Hunt",
    category: "Brunch Break Investigation",
    format: "Friendly Rivalry",
    minPlayers: 2,
    hook: "The Community Justice Museum has three empty display cases and no standards.",
    scenario:
      "The museum's acquisitions committee (you) must fill three display cases before brunch ends.",
    objective: "Find and justify three objects worthy of permanent display.",
    rounds: [
      {
        id: "r1",
        kind: "observe",
        title: "Case One: Unnecessarily Complicated",
        prompt:
          "Everyone finds something nearby that is unnecessarily complicated. 60 seconds. Then each player defends their find in 10 seconds.",
        mode: "all",
        seconds: 60,
        scoring: "one",
        fallback: "No object? Describe one from memory in 20 words or fewer.",
        points: 45,
      },
      {
        id: "r2",
        kind: "photo",
        title: "Case Two: Surprisingly Useful",
        prompt:
          "As a team, assemble one group evidence photo of something surprisingly useful. Everyone must be touching it.",
        mode: "all",
        scoring: "group",
        fallback: "No camera? Arrange it on the table and describe it aloud, dramatically.",
        points: 50,
      },
      {
        id: "r3",
        kind: "absurd",
        title: "Case Three: Completely Ridiculous",
        prompt:
          "Each player nominates the most ridiculous object in reach and explains why it belongs in the Community Justice Museum. Best explanation wins.",
        mode: "turn",
        scoring: "one",
        points: 55,
      },
    ],
    resolution:
      "All three cases are filled. The museum's curator describes the collection as 'legally a collection'.",
    rewards: { points: 165, materials: { curios: 3 } },
  },
  {
    id: "b1-c022",
    caseNumber: "022",
    title: "The Case of the Suspiciously Perfect Picnic",
    category: "The Case of the Suspiciously Perfect Picnic",
    format: "Co-op",
    minPlayers: 3,
    hook: "A flawless picnic appears every Saturday. Your crew has ninety seconds of recon.",
    scenario:
      "Perfect blanket. Seven identical sandwiches. One wildflower in a vase. Your crew must reconstruct the scene and theorise wildly.",
    objective: "Recreate the picnic, then out-theorise each other.",
    rounds: [
      {
        id: "r1",
        kind: "build",
        title: "Reconstruct the Scene",
        prompt:
          "Together, build a miniature picnic on the table using whatever is table-safe. It must include a 'vase'.",
        mode: "all",
        seconds: 120,
        scoring: "group",
        points: 55,
      },
      {
        id: "r2",
        kind: "memory",
        title: "Seven Details",
        prompt:
          "One player studies your picnic for 10 seconds, then turns away. The others change one thing. Can they spot it?",
        mode: "turn",
        scoring: "one",
        points: 45,
      },
      {
        id: "r3",
        kind: "deduce",
        title: "Funniest Plausible Explanation",
        prompt:
          "Each player gives a theory for who sets the picnic. It must be plausible AND funny. Group votes, nobody votes for themselves.",
        mode: "turn",
        scoring: "one",
        points: 55,
      },
      {
        id: "r4",
        kind: "physical",
        title: "Synchronised Picnic",
        prompt:
          "The whole crew performs a synchronised three-move 'picnic routine'. Lay blanket, pour tea, admire view. Together. On three.",
        mode: "all",
        scoring: "group",
        points: 50,
      },
    ],
    resolution:
      "The true answer is gentler than any of your theories — but the Bureau notes your crew's commitment to synchronised tea-pouring.",
    rewards: { points: 190, materials: { seeds: 2, curios: 1 } },
  },
  {
    id: "b1-c026",
    caseNumber: "026",
    title: "The Mystery of the Crooked Sign",
    category: "The Mystery of the Crooked Sign",
    format: "Co-op",
    minPlayers: 2,
    hook: "The sign points the wrong way. Only one of you can see the map.",
    scenario:
      "A finger-post keeps rotating northeast. Your crew has to navigate the problem with severely limited communication.",
    objective: "Solve it without the usual amount of talking.",
    rounds: [
      {
        id: "r1",
        kind: "puzzle",
        title: "Limited Instructions",
        prompt:
          "One player picks a nearby object secretly. They may only say three words total to help the others guess it.",
        mode: "turn",
        scoring: "one",
        points: 50,
      },
      {
        id: "r2",
        kind: "physical",
        title: "Point With Conviction",
        prompt:
          "On three, everyone points in the direction they believe is north. Whoever is boldest wrong gets the point. Yes, really.",
        mode: "all",
        scoring: "one",
        points: 40,
      },
      {
        id: "r3",
        kind: "build",
        title: "Build a Better Sign",
        prompt:
          "As a team, build a finger-post from table objects pointing to something genuinely useful nearby.",
        mode: "all",
        seconds: 120,
        scoring: "group",
        fallback: "Nothing to build with? Draw it on a napkin or describe it in full.",
        points: 55,
      },
    ],
    resolution:
      "The Bureau accepts your sign. It is structurally questionable and directionally inspiring.",
    rewards: { points: 160, materials: { salvage: 3 } },
  },
  {
    id: "b1-c029",
    caseNumber: "029",
    title: "The Great Dog-Treat Disappearance",
    category: "The Great Dog-Treat Disappearance",
    format: "Friendly Rivalry",
    minPlayers: 2,
    hook: "The biscuit jar is emptying too fast. The dog population is innocent.",
    scenario:
      "Somebody has been eating the dog biscuits. They were, reportedly, 'not bad'.",
    objective: "Bluff, deduce, and out-act your crew.",
    rounds: [
      {
        id: "r1",
        kind: "recreate",
        title: "Silent Charade",
        prompt:
          "Pass the phone. The current player silently acts out a dog doing something suspicious. Others guess.",
        mode: "secret",
        scoring: "one",
        points: 50,
      },
      {
        id: "r2",
        kind: "absurd",
        title: "Most Convincing Nonsense",
        prompt:
          "Each player gives a 15-second scientific-sounding explanation for the missing biscuits. Most convincing nonsense wins.",
        mode: "turn",
        scoring: "one",
        points: 55,
      },
      {
        id: "r3",
        kind: "timed",
        title: "Rapid-Fire Deduction",
        prompt:
          "60 seconds: as a group, name as many things as you can that a dog could plausibly be blamed for. No repeats.",
        mode: "all",
        seconds: 60,
        scoring: "group",
        points: 45,
      },
      {
        id: "r4",
        kind: "physical",
        title: "The Reveal",
        prompt:
          "Everyone secretly decides 'guilty' or 'innocent', then reveals at the same time on three.",
        mode: "all",
        scoring: "group",
        points: 40,
      },
    ],
    resolution:
      "Verdict: humans. Nobody is in trouble. The Bureau adds a HUMAN BISCUITS jar and considers the matter closed.",
    rewards: { points: 175, materials: { curios: 2, seeds: 1 } },
  },
  {
    id: "b1-c033",
    caseNumber: "033",
    title: "The Case of the Vanishing Snacks",
    category: "The Case of the Vanishing Snacks",
    format: "Co-op",
    minPlayers: 3,
    hook: "The shared drawer empties every Wednesday. Your crew has been called in.",
    scenario:
      "The Wednesday Effect has defeated four separate committees. It will not defeat brunch.",
    objective: "Reconstruct Wednesday. Loudly.",
    rounds: [
      {
        id: "r1",
        kind: "video",
        title: "Team Commercial",
        prompt:
          "Create and perform a 10-second commercial for the world's least appealing snack. Everyone must appear.",
        mode: "all",
        seconds: 60,
        scoring: "group",
        fallback: "Not filming? Perform it live for the table. Same energy required.",
        points: 60,
      },
      {
        id: "r2",
        kind: "memory",
        title: "The Drawer Inventory",
        prompt:
          "Going around the table, each player adds one item to an imaginary snack drawer and must repeat the whole list first.",
        mode: "turn",
        scoring: "one",
        points: 50,
      },
      {
        id: "r3",
        kind: "deduce",
        title: "Best Wild Theory",
        prompt:
          "Each player explains the Wednesday Effect in one sentence. The table votes for the best wild theory.",
        mode: "turn",
        scoring: "one",
        points: 45,
      },
    ],
    resolution:
      "Your crew concludes that tired people need snacks and should be allowed to have them. The Bureau agrees and doubles the Wednesday restock.",
    rewards: { points: 170, materials: { seeds: 2, curios: 1 } },
  },
  {
    id: "b1-c037",
    caseNumber: "037",
    title: "The Mystery of the Unclaimed Bench",
    category: "The Mystery of the Unclaimed Bench",
    format: "Co-op",
    minPlayers: 2,
    hook: "A bench appeared overnight. Somebody built it with real care.",
    scenario:
      "Your crew must work out who builds something beautiful and then says nothing about it.",
    objective: "Build, guess, and be quietly moved by the ending.",
    rounds: [
      {
        id: "r1",
        kind: "build",
        title: "Bench Engineering",
        prompt:
          "Split into pairs (or work as one team). Build a bench from table-safe objects. It must hold one small item for five seconds.",
        mode: "all",
        seconds: 120,
        scoring: "group",
        points: 55,
      },
      {
        id: "r2",
        kind: "observe",
        title: "Best View Audit",
        prompt:
          "Each player names the best view within sight and argues for it in 10 seconds. Best argument wins.",
        mode: "turn",
        scoring: "one",
        points: 45,
      },
      {
        id: "r3",
        kind: "deduce",
        title: "Anonymous Good Deeds",
        prompt:
          "Everyone secretly writes or decides on one nice thing someone could do anonymously. Reveal at the same time. Most delightful wins.",
        mode: "all",
        scoring: "one",
        points: 50,
      },
    ],
    resolution:
      "The bench-builder is never named. Your crew agrees this is correct and slightly annoying.",
    rewards: { points: 165, materials: { salvage: 3 } },
  },
  {
    id: "b1-c040",
    caseNumber: "040",
    title: "Operation: Make Things Better (Crew Edition)",
    category: "Operation: Make Things Better",
    format: "Co-op",
    minPlayers: 2,
    hook: "No mystery. Just an open commission and one table's worth of chaos.",
    scenario:
      "The Bureau's standing instruction: find something slightly worse than it needs to be, and improve it. As a crew. Safely. Without alarming anyone.",
    objective: "Leave your surroundings marginally better than you found them.",
    rounds: [
      {
        id: "r1",
        kind: "explore",
        title: "The Sweep",
        prompt:
          "60 seconds: everyone finds one small, safe thing that could be improved in your own space or table. No touching anyone else's belongings.",
        mode: "all",
        seconds: 60,
        scoring: "each",
        points: 40,
      },
      {
        id: "r2",
        kind: "build",
        title: "The Fix",
        prompt:
          "Pick one idea as a crew and actually do it. Straighten, tidy, stack, label, or prop something up.",
        mode: "all",
        scoring: "group",
        fallback: "Nothing to fix? Invent an improvement and mime it convincingly.",
        points: 60,
      },
      {
        id: "r3",
        kind: "photo",
        title: "The Filing",
        prompt:
          "Submit one group evidence photo of your improvement for the Bureau's records.",
        mode: "all",
        scoring: "group",
        fallback: "No camera? Nominate a spokesperson to describe it in 20 words or fewer.",
        points: 50,
      },
      {
        id: "r4",
        kind: "absurd",
        title: "The Ceremony",
        prompt:
          "Hold a 15-second formal ceremony honouring your improvement. At least one person must give a speech.",
        mode: "all",
        scoring: "group",
        points: 45,
      },
    ],
    resolution:
      "Somewhere, something is now marginally better. The Bureau files your report under GOOD and asks you to do it again next week.",
    rewards: { points: 200, materials: { salvage: 2, seeds: 1, curios: 1 } },
  },
];
