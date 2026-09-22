import type { SoloCase } from "../types";

// SEASON 1 — THE NEIGHBORHOOD FILES (solo case files)
// All cases are fictional. Nothing here asks a player to investigate
// real people, enter private spaces, or interact with strangers.

export const season1Solo: SoloCase[] = [
  {
    id: "s1-c001",
    caseNumber: "017",
    title: "The Strange Cookie Incident",
    category: "Neighborhood Mystery",
    district: "Clubhouse Row",
    hook: "Twelve cookies went in. Nine came out. The math is deeply suspicious.",
    scenario:
      "The Ferndale Community Clubhouse hosted its monthly Tuesday Snack Summit. A tin of twelve cookies was placed on the noticeboard table at 6:02pm. By 6:41pm there were nine cookies, one crumb trail heading toward the coat rack, and one extremely innocent-looking golden retriever named Biscuit who has an alibi.",
    objective:
      "Reconstruct the missing forty minutes and determine what actually happened to the three cookies.",
    clues: [
      {
        id: "cl1",
        label: "The Crumb Trail",
        flavor:
          "The crumbs stop abruptly at the coat rack, which is where reasonable explanations go to die.",
        challenge: {
          kind: "observe",
          prompt:
            "Look around wherever you are right now and find one object that could plausibly hide three cookies.",
          detail: "Anything counts. Conviction matters more than realism.",
          input: {
            type: "text",
            placeholder: "e.g. the extremely deep pocket of a winter coat",
            minLength: 3,
          },
          points: 40,
        },
      },
      {
        id: "cl2",
        label: "The Tin Itself",
        flavor:
          "Someone re-arranged the remaining cookies into a tidy circle. Tidiness is always a clue.",
        challenge: {
          kind: "deduce",
          prompt:
            "Why would a cookie thief take the time to rearrange the survivors?",
          input: {
            type: "choice",
            options: [
              "To disguise the gap — classic concealment.",
              "Guilt. They wanted the tin to look cared for.",
              "They are simply a person who cannot leave a crooked circle alone.",
            ],
          },
          points: 35,
        },
      },
      {
        id: "cl3",
        label: "The Noticeboard",
        flavor:
          "A handwritten note is pinned above the table: 'PLEASE LEAVE SOME FOR EVERYONE — Marguerite'.",
        challenge: {
          kind: "photo",
          prompt:
            "Collect field evidence: photograph something near you that looks like it has been eaten, borrowed, or tampered with.",
          input: {
            type: "evidence",
            fallbackPrompt:
              "No camera? Describe the object and make your case in 20 words or fewer.",
          },
          points: 50,
        },
      },
    ],
    deduction: {
      prompt: "File your conclusion. What happened to the three cookies?",
      options: [
        "Marguerite took three cookies home 'for later' and forgot she wrote the note.",
        "Biscuit the retriever executed a flawless heist and framed the coat rack.",
        "Three cookies were quietly set aside for the neighbour who works nights.",
      ],
      answerIndex: 2,
      reveal:
        "Case closed. Nobody stole anything. Old Walter works the night shift and always misses snack night, so someone wrapped three cookies in a napkin and tucked them in his coat pocket. The crumb trail was the napkin losing an argument with gravity.",
    },
    resolution:
      "You pin a new note to the board: 'WALTER'S THREE ARE SPOKEN FOR.' The Snack Summit adopts it as policy. Justice, in cookie form.",
    rewards: {
      points: 220,
      xp: 120,
      materials: { curios: 2, salvage: 1 },
      badgeId: "bdg-cookie",
      titleId: "ttl-cookie-auditor",
    },
  },
  {
    id: "s1-c002",
    caseNumber: "021",
    title: "The Mystery of the Unclaimed Bench",
    category: "Missing Community Treasure",
    district: "Willow Green",
    hook: "A brand new bench appeared overnight. Nobody ordered it. Everyone loves it.",
    scenario:
      "On Tuesday there was a patch of grass. On Wednesday there was a beautifully built wooden bench, sanded smooth, facing the exact best view of the duck pond. No council paperwork. No plaque. No suspects who will admit anything.",
    objective: "Identify the anonymous bench-builder without embarrassing them.",
    clues: [
      {
        id: "cl1",
        label: "The Joinery",
        flavor: "The joints are excellent. Whoever built this has done it before.",
        challenge: {
          kind: "build",
          prompt:
            "Build a tiny bench from three objects within arm's reach. It must support at least one small item.",
          input: {
            type: "evidence",
            fallbackPrompt:
              "No photo? List the three objects you used and declare it structurally sound.",
          },
          points: 55,
        },
      },
      {
        id: "cl2",
        label: "The Sightline",
        flavor:
          "The bench faces the pond at a very specific angle. Someone chose this view carefully.",
        challenge: {
          kind: "explore",
          prompt:
            "Find the best view available to you right now — a window, a doorway, a corner of a room. Sit in it for thirty seconds.",
          input: { type: "confirm", confirmLabel: "I sat. It was nice." },
          points: 30,
        },
      },
      {
        id: "cl3",
        label: "The Sawdust",
        flavor:
          "A faint line of sawdust leads from the bench toward the allotment sheds.",
        challenge: {
          kind: "deduce",
          prompt:
            "Write your working theory in one sentence. Confidence is scored. Accuracy is optional.",
          input: {
            type: "text",
            placeholder: "My theory is...",
            minLength: 10,
          },
          points: 45,
        },
      },
    ],
    deduction: {
      prompt: "Who built the bench?",
      options: [
        "The allotment committee, as a passive-aggressive statement.",
        "Rosa from shed 14, who has been quietly grieving and needed something to do with her hands.",
        "A travelling carpenter with a flair for the dramatic.",
      ],
      answerIndex: 1,
      reveal:
        "Rosa built it. Her wife used to feed the ducks from that exact spot. Rosa didn't want a plaque, a thank-you, or a fuss — she wanted somewhere to sit.",
    },
    resolution:
      "You leave no plaque. Instead you leave a small brass hook under the seat, so anyone can hang their bag. Rosa notices. Rosa says nothing. Rosa is pleased.",
    rewards: {
      points: 240,
      xp: 130,
      materials: { salvage: 3 },
      badgeId: "bdg-bench",
      titleId: "ttl-bench-inspector",
    },
  },
  {
    id: "s1-c003",
    caseNumber: "004",
    title: "Operation: Save the Sad Plant",
    category: "Community Garden",
    district: "Willow Green",
    hook: "It is technically alive. That is the most generous thing anyone can say.",
    scenario:
      "The lobby plant of the Ferndale Community Hall has been in visible decline since approximately March. Four people water it. Two people water it twice. One person has been feeding it cold coffee. It is a crisis of excessive care.",
    objective: "Diagnose the plant's actual problem and design a fix that survives committees.",
    clues: [
      {
        id: "cl1",
        label: "The Soil",
        flavor: "Damp. Very damp. Aggressively damp.",
        challenge: {
          kind: "observe",
          prompt:
            "Find the nearest living plant (or the nearest thing that is technically green) and describe its emotional state in one sentence.",
          input: { type: "text", placeholder: "It appears to be...", minLength: 6 },
          points: 35,
        },
      },
      {
        id: "cl2",
        label: "The Watering Rota",
        flavor:
          "There are three rotas taped to the wall. They contradict each other. One is from 2019.",
        challenge: {
          kind: "puzzle",
          prompt:
            "Four people each water on 'their day'. Ann on Monday, Bo on Monday, Cal 'whenever it looks thirsty', Dee every day. How many waterings does Monday get?",
          input: {
            type: "choice",
            options: ["Two", "Three", "Four, minimum, possibly more"],
            answerIndex: 2,
          },
          points: 45,
        },
      },
      {
        id: "cl3",
        label: "The Coffee Cup",
        flavor: "An abandoned mug sits in the pot. It has been there a while.",
        challenge: {
          kind: "absurd",
          prompt:
            "Deliver a short, sincere apology out loud to the nearest plant, object, or appliance you have neglected.",
          input: { type: "confirm", confirmLabel: "Apology delivered. It went well." },
          points: 40,
        },
      },
    ],
    deduction: {
      prompt: "What is actually wrong with the plant?",
      options: [
        "Not enough light — it needs to move to the south window.",
        "Drowning in kindness — too many people watering, no one coordinating.",
        "Wrong soil — needs repotting immediately.",
      ],
      answerIndex: 1,
      reveal:
        "Overwatering, by committee. Four rotas, zero communication, and one mug of cold latte. The plant was not neglected. It was over-loved into a swamp.",
    },
    resolution:
      "You install a single wooden tag that flips between WATERED and THIRSTY. The plant recovers within a month and is later described by the newsletter as 'thriving, smug'.",
    rewards: {
      points: 200,
      xp: 110,
      materials: { seeds: 3, salvage: 1 },
      badgeId: "bdg-plant",
    },
  },
  {
    id: "s1-c004",
    caseNumber: "009",
    title: "The Missing Noticeboard Key",
    category: "Lost & Found",
    district: "Clubhouse Row",
    hook: "The noticeboard has been locked for eleven weeks. The notices inside are now historical documents.",
    scenario:
      "Behind the glass: a flyer for a bake sale held in spring, a lost cat that has since been found and become famous, and a poster reading COMING SOON that has been coming soon for some time. One key exists. It is nowhere.",
    objective: "Locate the key, or make the key irrelevant.",
    clues: [
      {
        id: "cl1",
        label: "The Last Known Holder",
        flavor:
          "Gerald had it. Gerald is certain he gave it back. Gerald is certain about many things.",
        challenge: {
          kind: "memory",
          prompt:
            "Name three places you have personally lost something and later found it. Patterns are evidence.",
          input: { type: "text", placeholder: "1. ... 2. ... 3. ...", minLength: 8 },
          points: 40,
        },
      },
      {
        id: "cl2",
        label: "The Hook",
        flavor: "There is a hook labelled KEY. There is no key on the hook. There is a rubber band.",
        challenge: {
          kind: "timed",
          prompt:
            "Sixty seconds: find the smallest object you can reach. Smaller is better. Go.",
          seconds: 60,
          input: {
            type: "text",
            placeholder: "The smallest object I found was...",
            minLength: 2,
          },
          points: 50,
        },
      },
      {
        id: "cl3",
        label: "The Glass",
        flavor:
          "Someone has written HELP on the inside of the glass. It is unclear who, or when, or how.",
        challenge: {
          kind: "photo",
          prompt: "Photograph a lock, latch, hook, or handle near you.",
          input: {
            type: "evidence",
            fallbackPrompt: "No camera? Describe the lock and rate its trustworthiness out of ten.",
          },
          points: 45,
        },
      },
    ],
    deduction: {
      prompt: "Where is the key?",
      options: [
        "Inside the locked noticeboard, taped to the back of the bake sale flyer.",
        "In Gerald's other coat.",
        "Nobody has it. The board was fitted with the wrong lock in 2017.",
      ],
      answerIndex: 0,
      reveal:
        "The key is inside the noticeboard. Someone tidied it away for safekeeping, then closed the door. It has been visible the entire time, behind glass, like a very small museum exhibit about irony.",
    },
    resolution:
      "The board is opened by a locksmith who refuses payment on the grounds that it was 'the best call-out of my career'. You replace the lock with a latch. Notices are now current.",
    rewards: {
      points: 210,
      xp: 115,
      materials: { curios: 2, salvage: 1 },
      badgeId: "bdg-keeper",
      titleId: "ttl-receipts",
    },
  },
  {
    id: "s1-c005",
    caseNumber: "012",
    title: "The Mystery of the Crooked Sign",
    category: "Environmental Oddity",
    district: "Market Lane",
    hook: "The sign points to the library. The library is not that way. It has never been that way.",
    scenario:
      "At the Market Lane junction, a wooden finger-post points confidently northeast toward LIBRARY. The library is southwest. Three separate people have straightened this sign. It returns, each time, to northeast.",
    objective: "Determine why the sign keeps rotating and where it truly wants to point.",
    clues: [
      {
        id: "cl1",
        label: "The Bolt",
        flavor: "The bolt is loose in a way that feels almost deliberate.",
        challenge: {
          kind: "physical",
          prompt: "Stand up and point northeast. Commit. Hold it for five seconds.",
          input: { type: "confirm", confirmLabel: "Pointed. Confidently. Possibly wrong." },
          points: 30,
        },
      },
      {
        id: "cl2",
        label: "The Wear Pattern",
        flavor:
          "The post is worn smooth at chest height, on one side only. Something rubs against it. Often.",
        challenge: {
          kind: "observe",
          prompt:
            "Find something near you that is worn, faded, or scuffed from repeated use. What does the wear tell you?",
          input: { type: "text", placeholder: "The wear suggests...", minLength: 8 },
          points: 45,
        },
      },
      {
        id: "cl3",
        label: "The Northeast Direction",
        flavor: "Northeast leads to: the bakery, the bus stop, and a bench with good shade.",
        challenge: {
          kind: "deduce",
          prompt: "Which of those three is worth turning a public sign for?",
          input: {
            type: "choice",
            options: ["The bakery, obviously.", "The bus stop, practically.", "The shade. Always the shade."],
          },
          points: 40,
        },
      },
    ],
    deduction: {
      prompt: "Why does the sign keep pointing northeast?",
      options: [
        "Wind. Simple, boring, atmospheric wind.",
        "The postbox van reverses into it every Thursday, nudging it a few degrees each week.",
        "Someone is doing it on purpose to direct people to the bakery.",
      ],
      answerIndex: 1,
      reveal:
        "The Thursday delivery van has been reversing into the post for two years. Nobody noticed because nobody watches signs on Thursdays. The van driver has also never noticed, which is its own small tragedy.",
    },
    resolution:
      "You add a painted kerb line and a second arrow at the base of the post. The van stops nudging. The sign points southwest. One person complains that they liked the mystery.",
    rewards: {
      points: 195,
      xp: 105,
      materials: { salvage: 2, curios: 1 },
      badgeId: "bdg-sign",
    },
  },
  {
    id: "s1-c006",
    caseNumber: "025",
    title: "The Case of the Vanishing Snacks",
    category: "Neighborhood Mystery",
    district: "Clubhouse Row",
    hook: "The snack drawer empties faster on Wednesdays. Nobody will say why.",
    scenario:
      "The shared snack drawer at the Ferndale Hall is restocked every Monday. By Wednesday evening it is a wasteland of one sad breadstick and a sachet of mustard. Monday-to-Tuesday consumption is normal. Wednesday is carnage.",
    objective: "Explain the Wednesday Effect.",
    clues: [
      {
        id: "cl1",
        label: "The Wednesday Schedule",
        flavor:
          "Wednesday hosts: choir practice, the toddler group, and a chess club that takes itself very seriously.",
        challenge: {
          kind: "puzzle",
          prompt:
            "Choir has 14 members, toddler group has 9 adults, chess club has 4. Which group most likely eats standing up, quickly, without commentary?",
          input: {
            type: "choice",
            options: ["Choir — they need energy.", "Toddler group adults — they eat in survival mode.", "Chess club — brains burn calories."],
            answerIndex: 1,
          },
          points: 45,
        },
      },
      {
        id: "cl2",
        label: "The Drawer",
        flavor: "The drawer sticks. You have to lift and pull. Everyone who knows this is a regular.",
        challenge: {
          kind: "recreate",
          prompt:
            "Recreate the pose of a person opening a drawer they know is broken. Hold it. Feel the resentment.",
          input: { type: "confirm", confirmLabel: "Pose achieved. Felt seen." },
          points: 35,
        },
      },
      {
        id: "cl3",
        label: "The Breadstick",
        flavor: "One breadstick remains every single week. Always one. Never zero.",
        challenge: {
          kind: "absurd",
          prompt:
            "Deliver a 10-second field report explaining why the last item is never taken. Record it, or perform it aloud.",
          input: {
            type: "evidence",
            fallbackPrompt: "No camera? Write your field report in one dramatic sentence.",
          },
          points: 50,
        },
      },
    ],
    deduction: {
      prompt: "What is the Wednesday Effect?",
      options: [
        "The toddler group adults are running on zero food and the drawer is the only option.",
        "Chess club is hoarding for tournament season.",
        "Someone is restocking on Monday and removing everything Wednesday night.",
      ],
      answerIndex: 0,
      reveal:
        "Nine adults, one toddler group, no time to eat lunch. The drawer isn't being raided — it's being used exactly as intended by the people who need it most and are too tired to mention it.",
    },
    resolution:
      "You add a second Wednesday restock and a small sign: 'IF YOU NEED IT, IT'S FOR YOU.' Consumption stabilises. The last breadstick remains untouched, as is tradition.",
    rewards: {
      points: 215,
      xp: 115,
      materials: { curios: 1, seeds: 2 },
      titleId: "ttl-snack-defender",
    },
  },
  {
    id: "s1-c007",
    caseNumber: "031",
    title: "The Extremely Important Lost Umbrella",
    category: "Lost & Found",
    district: "Market Lane",
    hook: "It is not a valuable umbrella. It is, apparently, an irreplaceable one.",
    scenario:
      "A lost-and-found notice appears, handwritten, slightly frantic: 'LOST — large green umbrella, one broken spoke, smells faintly of aniseed. Sentimental value. Please. PLEASE.' No contact details. Just 'please'.",
    objective: "Find the umbrella, or find the person who lost it.",
    clues: [
      {
        id: "cl1",
        label: "The Aniseed",
        flavor: "Aniseed is a specific smell. Specific smells are excellent clues.",
        challenge: {
          kind: "observe",
          prompt:
            "Identify the most distinctive smell in your current location. Name it and one memory it triggers.",
          input: { type: "text", placeholder: "It smells like...", minLength: 8 },
          points: 40,
        },
      },
      {
        id: "cl2",
        label: "The Broken Spoke",
        flavor: "Whoever owns this has been repairing it rather than replacing it. Repeatedly.",
        challenge: {
          kind: "explore",
          prompt:
            "Find something you own that is broken but that you refuse to replace. Look at it. Consider your choices.",
          input: { type: "text", placeholder: "I refuse to replace my...", minLength: 4 },
          points: 45,
        },
      },
      {
        id: "cl3",
        label: "The Handwriting",
        flavor:
          "The word 'PLEASE' is written twice, the second time pressed so hard it tore the paper.",
        challenge: {
          kind: "photo",
          prompt: "Photograph something handwritten — a note, a label, a shopping list, anything.",
          input: {
            type: "evidence",
            fallbackPrompt: "No camera? Describe the handwriting and what it says about the writer.",
          },
          points: 50,
        },
      },
    ],
    deduction: {
      prompt: "What makes this umbrella irreplaceable?",
      options: [
        "It's a family heirloom worth a surprising amount of money.",
        "It belonged to someone who died, and the aniseed smell is theirs.",
        "It contains something hidden in the handle.",
      ],
      answerIndex: 1,
      reveal:
        "The umbrella belonged to Nadia's father, a man who carried aniseed sweets in every coat he ever owned. The umbrella works fine. That is not the point. That has never been the point.",
    },
    resolution:
      "The umbrella is found in the café's overstuffed lost property bin, third from the bottom. You establish a proper Lost & Found shelf with labelled hooks. The first hook is green.",
    rewards: {
      points: 230,
      xp: 125,
      materials: { curios: 3 },
      badgeId: "bdg-umbrella",
      titleId: "ttl-accidental",
    },
  },
  {
    id: "s1-c008",
    caseNumber: "038",
    title: "The Case of the Chair That Nobody Claims",
    category: "Local Legend",
    district: "Willow Green",
    hook: "It has been on the pavement for nine days. It is, worryingly, a very good chair.",
    scenario:
      "An excellent armchair — velvet, mustard-coloured, structurally perfect — sits on the pavement outside number 14. No note. No rain damage, which is impossible after nine days. People have started leaving small gifts on it.",
    objective: "Establish the chair's origin and decide its future.",
    clues: [
      {
        id: "cl1",
        label: "The Absence of Rain Damage",
        flavor: "It rained on days 3, 5 and 7. The velvet is dry. Someone is moving this chair.",
        challenge: {
          kind: "deduce",
          prompt: "Who moves a chair indoors at night and back out every morning, and why?",
          input: { type: "text", placeholder: "Because...", minLength: 10 },
          points: 50,
        },
      },
      {
        id: "cl2",
        label: "The Offerings",
        flavor: "So far: a conker, a bus ticket, a small ceramic frog, and a satsuma.",
        challenge: {
          kind: "build",
          prompt:
            "Assemble a tiny offering from four objects near you. Arrange it with genuine ceremony.",
          input: {
            type: "evidence",
            fallbackPrompt: "No camera? List your four offerings and explain the ritual in one line.",
          },
          points: 55,
        },
      },
      {
        id: "cl3",
        label: "The Indentation",
        flavor: "The seat cushion holds the shape of someone who sat here a great deal.",
        challenge: {
          kind: "physical",
          prompt:
            "Sit in the most comfortable seat available to you. Stay exactly one minute. No phone-scrolling.",
          seconds: 60,
          input: { type: "confirm", confirmLabel: "I sat. I was present. It was strange." },
          points: 40,
        },
      },
    ],
    deduction: {
      prompt: "Whose chair is it?",
      options: [
        "Number 14 is moving out slowly and this is the last piece they can't carry.",
        "The chair belongs to the street now. It was placed there on purpose.",
        "It fell off a van and nobody noticed.",
      ],
      answerIndex: 1,
      reveal:
        "It was placed deliberately. Number 14's resident, Kemi, put it out after her neighbour mentioned there was nowhere to rest on the walk up the hill. She brings it in at night. She has told nobody. The frog was the first gift.",
    },
    resolution:
      "The chair becomes an official unofficial landmark, known as The Chair. A small shelter is built over it by volunteers. The frog gets a plinth.",
    rewards: {
      points: 250,
      xp: 140,
      materials: { salvage: 2, curios: 2 },
      badgeId: "bdg-chair",
      titleId: "ttl-plot-twist",
    },
  },
  {
    id: "s1-c009",
    caseNumber: "042",
    title: "The Great Dog-Treat Disappearance",
    category: "Neighborhood Mystery",
    district: "Willow Green",
    hook: "The jar outside the hardware shop is emptying at a rate no dog population can explain.",
    scenario:
      "Hensall's Hardware keeps a jar of dog biscuits by the door. Historically it lasts two weeks. It is now lasting four days. Local dog census: unchanged. Local dog appetites: presumed constant.",
    objective: "Account for the mathematically impossible biscuit consumption.",
    clues: [
      {
        id: "cl1",
        label: "The Jar Position",
        flavor: "The jar was recently moved six inches to the left, to just beside the door handle.",
        challenge: {
          kind: "puzzle",
          prompt:
            "A jar moved closer to a door handle is now within reach of who, exactly?",
          input: {
            type: "choice",
            options: ["Taller dogs.", "Every single human entering the shop.", "The wind."],
            answerIndex: 1,
          },
          points: 40,
        },
      },
      {
        id: "cl2",
        label: "The Biscuit Crumbs",
        flavor: "Crumbs are found at counter height. Dogs are not, generally, counter height.",
        challenge: {
          kind: "observe",
          prompt:
            "Find something in your space that is positioned badly and is therefore causing a small ongoing problem.",
          input: { type: "text", placeholder: "Badly positioned object:", minLength: 4 },
          points: 45,
        },
      },
      {
        id: "cl3",
        label: "The Regulars",
        flavor: "Three customers now visit daily. They do not own dogs. They buy nothing.",
        challenge: {
          kind: "absurd",
          prompt:
            "Eat a snack with the exact enthusiasm of a dog receiving an unearned treat. No hands not required. Dignity optional.",
          input: { type: "confirm", confirmLabel: "Enthusiasm: achieved." },
          points: 40,
        },
      },
    ],
    deduction: {
      prompt: "Who is eating the dog biscuits?",
      options: [
        "Humans. They are eating the dog biscuits. They are fine, actually.",
        "One extremely efficient local dog with no supervision.",
        "The shop owner is under-filling the jar and blaming dogs.",
      ],
      answerIndex: 0,
      reveal:
        "Three regulars have been eating them. They are, by all accounts, 'not bad'. One described them as 'basically an oat biscuit with fewer opinions'. Nobody is in trouble.",
    },
    resolution:
      "Hensall's adds a second jar at human height labelled HUMAN BISCUITS (SAME RECIPE, HONESTLY). Sales of actual products rise 12%. Everyone wins.",
    rewards: {
      points: 205,
      xp: 110,
      materials: { curios: 2, seeds: 1 },
      badgeId: "bdg-dog",
    },
  },
  {
    id: "s1-c010",
    caseNumber: "046",
    title: "The Community Hall Conundrum",
    category: "Accessibility Challenge",
    district: "Clubhouse Row",
    hook: "The side door is 'the accessible entrance'. It is locked. It has always been locked.",
    scenario:
      "Ferndale Hall's step-free entrance is via the side door, which is secured with a bolt, reachable only from inside, and opened only on request, via a doorbell, which is mounted at the top of the step. The logic of this has never been examined by anyone.",
    objective: "Find the smallest change that fixes the biggest problem.",
    clues: [
      {
        id: "cl1",
        label: "The Doorbell Height",
        flavor: "1.6 metres up, at the top of the step it exists to help people avoid.",
        challenge: {
          kind: "observe",
          prompt:
            "Look at a doorway near you. Name one thing about it that would be difficult for someone using a wheelchair, a walking frame, or carrying a toddler and four bags.",
          input: { type: "text", placeholder: "The difficulty is...", minLength: 8 },
          points: 55,
        },
      },
      {
        id: "cl2",
        label: "The Bolt",
        flavor: "Inside-only. Fitted by someone who thought about security and nothing else.",
        challenge: {
          kind: "physical",
          prompt:
            "Try opening a nearby door using only your elbow. Report honestly on the experience.",
          input: { type: "text", placeholder: "Elbow-only door report:", minLength: 5 },
          points: 40,
        },
      },
      {
        id: "cl3",
        label: "The Meeting Minutes",
        flavor:
          "'Accessible entrance — to be reviewed' appears in the minutes eleven times across four years.",
        challenge: {
          kind: "deduce",
          prompt:
            "Why do obvious problems survive eleven meetings? Give your best one-line answer.",
          input: { type: "text", placeholder: "Because...", minLength: 10 },
          points: 50,
        },
      },
    ],
    deduction: {
      prompt: "What is the smallest change with the biggest effect?",
      options: [
        "Build a full new entrance at the front. Ambitious. Expensive. Five years away.",
        "Move the doorbell to the bottom of the ramp and replace the bolt with a push bar.",
        "Publish a phone number to call ahead for access.",
      ],
      answerIndex: 1,
      reveal:
        "Two small fixes: a doorbell people can actually reach, and a bolt that opens from the correct side. Total cost, £41. Total meetings required, one.",
    },
    resolution:
      "The side door now opens like a door. The word 'accessible' finally applies. Attendance at Tuesday events rises by nine people, all of whom were there the whole time, outside.",
    rewards: {
      points: 260,
      xp: 150,
      materials: { salvage: 3, curios: 1 },
      badgeId: "bdg-access",
      titleId: "ttl-master-detective",
    },
  },
  {
    id: "s1-c011",
    caseNumber: "053",
    title: "The Case of the Suspiciously Perfect Picnic",
    category: "Environmental Oddity",
    district: "Willow Green",
    hook: "Every Saturday, a flawless picnic appears on the green. It is perfect. That is the problem.",
    scenario:
      "Chequered blanket, precisely arranged. Seven identical sandwiches. A thermos. A small vase — a VASE — with one wildflower. Nobody is ever seen setting it up. Nobody is ever seen eating it. By 4pm it is gone without a trace.",
    objective: "Determine who stages the picnic and what it's for.",
    clues: [
      {
        id: "cl1",
        label: "The Seven Sandwiches",
        flavor: "Always seven. Never six. Never eight. Seven.",
        challenge: {
          kind: "memory",
          prompt:
            "Look around for ten seconds, then look away and list seven objects you saw. No peeking.",
          input: { type: "text", placeholder: "1,2,3,4,5,6,7...", minLength: 10 },
          points: 55,
        },
      },
      {
        id: "cl2",
        label: "The Vase",
        flavor: "A vase implies intention. A vase implies someone is expected.",
        challenge: {
          kind: "recreate",
          prompt:
            "Stage a miniature perfect picnic on any flat surface using three objects. One must be the 'vase'.",
          input: {
            type: "evidence",
            fallbackPrompt: "No camera? Describe your three-object picnic and name the vase.",
          },
          points: 50,
        },
      },
      {
        id: "cl3",
        label: "The 4pm Exit",
        flavor: "Gone by 4pm, every week, without fail. Someone is working to a schedule.",
        challenge: {
          kind: "timed",
          prompt: "You have 45 seconds to tidy one small area completely. Set the timer. Go.",
          seconds: 45,
          input: { type: "confirm", confirmLabel: "Area tidied. Suspiciously well." },
          points: 45,
        },
      },
    ],
    deduction: {
      prompt: "What is the picnic actually for?",
      options: [
        "A photographer staging weekly shots for a magazine.",
        "A family's standing memorial for someone who used to organise Saturday picnics for seven.",
        "An elaborate long-running prank with no punchline.",
      ],
      answerIndex: 1,
      reveal:
        "The Adeyemi family. Their grandmother organised a picnic for seven every Saturday for thirty-one years. They still set it. They still leave by four, because she always did. The wildflower is whatever is in season.",
    },
    resolution:
      "You do the single most useful thing available: nothing. But you do add a small, discreet hook on the nearest post for the picnic basket. The family notices. The flower the following week is a thank-you.",
    rewards: {
      points: 245,
      xp: 135,
      materials: { seeds: 2, curios: 2 },
      badgeId: "bdg-picnic",
      titleId: "ttl-evidence-royalty",
    },
  },
  {
    id: "s1-c012",
    caseNumber: "060",
    title: "Operation: Make Things Better",
    category: "Operation: Make Things Better",
    district: "Market Lane",
    hook: "No mystery this time. Just an open commission and a strong sense that something could be improved.",
    scenario:
      "The Ferndale Community Justice Bureau issues one open case per season. No missing object. No culprit. Just a standing instruction: find something in the shared world that is slightly worse than it needs to be, and make it slightly better.",
    objective: "Identify a real, small, safe improvement and carry it out.",
    clues: [
      {
        id: "cl1",
        label: "The Survey",
        flavor: "Most problems are invisible because they are boring. Boredom is excellent cover.",
        challenge: {
          kind: "explore",
          prompt:
            "Walk one lap of wherever you are. Find the single most annoying small thing. Name it.",
          input: { type: "text", placeholder: "The most annoying small thing is...", minLength: 6 },
          points: 45,
        },
      },
      {
        id: "cl2",
        label: "The Fix",
        flavor: "The best fixes take under five minutes and cost nothing.",
        challenge: {
          kind: "build",
          prompt:
            "Fix it. Straighten it, clean it, move it, label it, or prop it up. Five minutes maximum.",
          input: {
            type: "evidence",
            fallbackPrompt: "No camera? Describe what you fixed and how smug you now feel.",
          },
          points: 70,
        },
      },
      {
        id: "cl3",
        label: "The Report",
        flavor: "Every improvement must be documented, or the Bureau gets suspicious.",
        challenge: {
          kind: "video",
          prompt:
            "Record a 10-second field report announcing your improvement to the Bureau. Be theatrical.",
          input: {
            type: "evidence",
            fallbackPrompt: "No camera? Write the field report in exactly one heroic sentence.",
          },
          points: 55,
        },
      },
    ],
    deduction: {
      prompt: "File your closing statement. What kind of improvement did you make?",
      options: [
        "Made something work properly again.",
        "Made something easier for someone else.",
        "Made something unnecessarily delightful.",
      ],
      answerIndex: 1,
      reveal:
        "All three answers were correct, because this case has no wrong answer. The Bureau notes your submission and files it under GOOD.",
    },
    resolution:
      "Somewhere, something is now marginally better and nobody will ever know who did it. This is, technically, the highest form of justice available.",
    rewards: {
      points: 300,
      xp: 180,
      materials: { salvage: 2, seeds: 2, curios: 2 },
      badgeId: "bdg-operation",
      titleId: "ttl-chaos-officer",
    },
  },
];
