// Core data model for JUSTICE QUEST.
// Everything playable is data-driven so future seasons can be added
// by dropping new Season objects into src/game/content/ without touching logic.

export type MaterialKey = "salvage" | "seeds" | "curios";

export const MATERIALS: Record<MaterialKey, { label: string; icon: string }> = {
  salvage: { label: "Salvage", icon: "🪵" },
  seeds: { label: "Seeds", icon: "🌱" },
  curios: { label: "Curios", icon: "🔮" },
};

export type MaterialBundle = Partial<Record<MaterialKey, number>>;

export type ChallengeKind =
  | "photo"
  | "video"
  | "observe"
  | "puzzle"
  | "physical"
  | "build"
  | "explore"
  | "absurd"
  | "deduce"
  | "timed"
  | "recreate"
  | "memory";

export const KIND_META: Record<ChallengeKind, { icon: string; label: string }> = {
  photo: { icon: "📸", label: "Evidence Photo" },
  video: { icon: "🎥", label: "Field Report" },
  observe: { icon: "🔎", label: "Observation" },
  puzzle: { icon: "🧩", label: "Clue Puzzle" },
  physical: { icon: "🏃", label: "Tiny Challenge" },
  build: { icon: "🛠️", label: "Build Something" },
  explore: { icon: "🗺️", label: "Explore" },
  absurd: { icon: "😂", label: "Gloriously Absurd" },
  deduce: { icon: "📝", label: "Deduction" },
  timed: { icon: "⏱️", label: "Timed Task" },
  recreate: { icon: "🎭", label: "Recreate the Scene" },
  memory: { icon: "🧠", label: "Memory / Logic" },
};

/** How the player responds to a challenge. */
export type ChallengeInput =
  | { type: "text"; placeholder?: string; minLength?: number }
  | { type: "choice"; options: string[]; answerIndex?: number }
  | { type: "evidence"; fallbackPrompt: string }
  | { type: "confirm"; confirmLabel?: string };

export interface Challenge {
  kind: ChallengeKind;
  prompt: string;
  /** Optional detail / rules / safety framing. */
  detail?: string;
  input: ChallengeInput;
  /** Only set when the challenge is explicitly timed. */
  seconds?: number;
  points: number;
}

export interface Clue {
  id: string;
  label: string;
  flavor: string;
  challenge: Challenge;
}

export interface Deduction {
  prompt: string;
  options: string[];
  answerIndex: number;
  reveal: string;
}

export interface SoloCase {
  id: string;
  caseNumber: string;
  title: string;
  category: string;
  district: string;
  hook: string;
  scenario: string;
  objective: string;
  clues: Clue[];
  deduction: Deduction;
  resolution: string;
  rewards: {
    points: number;
    xp: number;
    materials: MaterialBundle;
    badgeId?: string;
    titleId?: string;
  };
}

export type RoundMode = "all" | "turn" | "secret";

export interface BrunchRound {
  id: string;
  kind: ChallengeKind;
  title: string;
  prompt: string;
  detail?: string;
  mode: RoundMode;
  seconds?: number;
  /** who collects the bonus after the round */
  scoring: "group" | "one" | "each";
  fallback?: string;
  points: number;
}

export interface BrunchCase {
  id: string;
  caseNumber: string;
  title: string;
  category: string;
  format: "Co-op" | "Friendly Rivalry";
  minPlayers: number;
  hook: string;
  scenario: string;
  objective: string;
  rounds: BrunchRound[];
  resolution: string;
  rewards: { points: number; materials: MaterialBundle };
}

export interface Season {
  id: string;
  number: number;
  name: string;
  blurb: string;
  soloCases: SoloCase[];
  brunchCases: BrunchCase[];
  /** Season is playable now, or teased as coming soon. */
  status: "live" | "soon";
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface TitleDef {
  id: string;
  name: string;
  description: string;
}

export interface HubUpgrade {
  id: string;
  area: string;
  icon: string;
  name: string;
  description: string;
  /** Flavor shown in the hub once built. */
  built: string;
  cost: { points: number; materials: MaterialBundle };
  requires?: string;
  unlocks?: string;
}
