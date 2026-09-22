import type { Season, SoloCase, BrunchCase } from "../types";
import { season1Solo } from "./season1-solo";
import { season1Brunch } from "./season1-brunch";

// Add new seasons here. Nothing else needs to change.
export const SEASONS: Season[] = [
  {
    id: "s1",
    number: 1,
    name: "The Neighborhood Files",
    blurb: "Twelve solo case files and eight Brunch Crew investigations from the Ferndale districts.",
    soloCases: season1Solo,
    brunchCases: season1Brunch,
    status: "live",
  },
  {
    id: "s2",
    number: 2,
    name: "The Brunch Investigators",
    blurb: "Field cases built for tables, terraces and long Saturday mornings.",
    soloCases: [],
    brunchCases: [],
    status: "soon",
  },
  {
    id: "s3",
    number: 3,
    name: "The Great Community Mystery",
    blurb: "One mystery. Every district. Considerable string.",
    soloCases: [],
    brunchCases: [],
    status: "soon",
  },
  {
    id: "s4",
    number: 4,
    name: "Vacation Justice",
    blurb: "Away from home, still noticing things.",
    soloCases: [],
    brunchCases: [],
    status: "soon",
  },
  {
    id: "s5",
    number: 5,
    name: "The Extremely Suspicious Cookie Conspiracy 🍪",
    blurb: "It was never just about the cookies.",
    soloCases: [],
    brunchCases: [],
    status: "soon",
  },
];

export const ALL_SOLO: SoloCase[] = SEASONS.flatMap((s) => s.soloCases);
export const ALL_BRUNCH: BrunchCase[] = SEASONS.flatMap((s) => s.brunchCases);

export const getSoloCase = (id: string) => ALL_SOLO.find((c) => c.id === id);
export const getBrunchCase = (id: string) => ALL_BRUNCH.find((c) => c.id === id);
