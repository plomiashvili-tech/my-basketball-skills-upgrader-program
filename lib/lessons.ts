export type SkillLevel = "beginner" | "intermediate" | "advanced";

export type Lesson = {
  slug: string;
  title: string;
  level: SkillLevel;
  order: number;
  durationMin: number;
  ageMin: number;
  summary: string;
  description: string;
  youtubeId: string;
  drills: string[];
  parentNotes: string;
};

export const LESSONS: Lesson[] = [
  {
    slug: "intro-to-the-ball",
    title: "Lesson 0 — Meet the Ball",
    level: "beginner",
    order: 0,
    durationMin: 10,
    ageMin: 7,
    summary: "Get comfortable holding and feeling a basketball.",
    description:
      "The very first step. Learn how to hold the ball with finger pads (not palms), get a feel for its weight, and do gentle hand-slap warm-ups. No dribbling yet — this lesson is just about confidence with the ball in your hands.",
    youtubeId: "6_YOFhrPdPI",
    drills: [
      "Slap the ball 20 times between both hands",
      "Around-the-waist circles, 30 seconds each direction",
      "Figure-8 between the legs (slow), 10 reps",
    ],
    parentNotes:
      "Watch that your child uses fingertips, not palms. Encourage relaxed shoulders — tightness is the #1 beginner mistake.",
  },
  {
    slug: "stationary-dribble",
    title: "Lesson 1 — Stationary Dribble",
    level: "beginner",
    order: 1,
    durationMin: 15,
    ageMin: 7,
    summary: "Your first real dribble. Eyes up, fingers down.",
    description:
      "Learn to push the ball into the floor (don't slap it), keep the knees bent, and look forward instead of staring at the ball. We use the wall-target trick to train eyes-up habits from day one.",
    youtubeId: "CMQp0bwjokw",
    drills: [
      "Right-hand dribble for 30 seconds, eyes on a wall target",
      "Left-hand dribble for 30 seconds, eyes on a wall target",
      "Low pound dribble (under knees), 20 reps each hand",
    ],
    parentNotes:
      "If the ball rises above the waist, the child is slapping rather than pushing. Cue them: 'fingers down, ball stays low.'",
  },
  {
    slug: "triple-threat-stance",
    title: "Lesson 2 — Triple Threat Stance",
    level: "beginner",
    order: 2,
    durationMin: 12,
    ageMin: 7,
    summary: "The athletic position every move starts from.",
    description:
      "Feet shoulder-width, knees bent, ball at the hip, eyes up. From this stance, a player can shoot, pass, or drive — that's why it's called triple threat. Master this and every future skill becomes easier.",
    youtubeId: "SqmRrYChlZs",
    drills: [
      "Hold triple threat for 30 seconds, 3 sets",
      "Pivot drill: front foot stays, swing back foot 90°, 10 reps each side",
      "Catch-and-stance: partner passes, you catch into triple threat, 15 reps",
    ],
    parentNotes:
      "Most kids stand up too tall when they catch the ball. Look for bent knees on the catch.",
  },
  {
    slug: "form-shooting-close",
    title: "Lesson 3 — Form Shooting from 3 feet",
    level: "beginner",
    order: 3,
    durationMin: 20,
    ageMin: 7,
    summary: "Build a clean shot motion before adding distance.",
    description:
      "We start one big step from the rim. One-hand shooting drill (BEEF method: Balance, Eyes, Elbow, Follow-through). The goal isn't to score from far — it's to groove the right motion that scales up later.",
    youtubeId: "2f9YBKAxmqQ",
    drills: [
      "One-hand form shots from 3 feet, 25 makes",
      "Two-hand form shots, 25 makes",
      "Follow-through hold: freeze the wrist until ball hits rim, every rep",
    ],
    parentNotes:
      "The shooting elbow should be UNDER the ball, not flared out. If the elbow flares, drop the ball lower at the start.",
  },
  {
    slug: "two-ball-dribble",
    title: "Lesson 4 — Two-Ball Dribble Series",
    level: "intermediate",
    order: 10,
    durationMin: 18,
    ageMin: 8,
    summary: "Train both hands at once to fix the weak hand.",
    description:
      "For players with ~1 year of experience. Two balls force the weak hand to keep up with the strong hand. Start with same-time dribbles, then alternating, then high-low.",
    youtubeId: "znK1nTqRcHk",
    drills: [
      "Same-time pounds: both balls hit the floor together, 30 reps",
      "Alternating: ball A up while ball B is down, 30 reps",
      "High-low: one ball waist-high, other ball ankle-high, 20 seconds",
    ],
    parentNotes:
      "Losing a ball is fine — it means the drill is hard enough. If they never lose one, raise the speed.",
  },
  {
    slug: "crossover-basics",
    title: "Lesson 5 — Crossover Basics",
    level: "intermediate",
    order: 11,
    durationMin: 20,
    ageMin: 8,
    summary: "The bread-and-butter move to change direction.",
    description:
      "Push the ball low and across the body, hip-to-hip, while shifting weight onto the new foot. Slow reps first, then add a small explosion step on the cross.",
    youtubeId: "fzySl4Vqfwk",
    drills: [
      "Stationary crossover, hip to hip, 30 reps each direction",
      "Walking crossover up and down the floor, 3 lengths",
      "Cone crossover: cross at the cone, attack past it, 10 reps each side",
    ],
    parentNotes:
      "The ball should stay below the knee on the crossover. A high crossover gets stolen easily.",
  },
  {
    slug: "jump-stop-pivot",
    title: "Lesson 6 — Jump Stop & Pivot",
    level: "intermediate",
    order: 12,
    durationMin: 15,
    ageMin: 8,
    summary: "Stop on balance, pivot without traveling.",
    description:
      "Two-foot jump stop on the catch means either foot can pivot. Practice catching with momentum and freezing the body. This single skill prevents most youth turnovers.",
    youtubeId: "S7X5E-rtjjA",
    drills: [
      "Jog and jump stop on a line, 15 reps",
      "Catch on the move, jump stop, pivot 180°, 10 reps each direction",
      "Jump stop into shot, 15 reps",
    ],
    parentNotes:
      "A jump stop is two feet landing AT THE SAME TIME. If one foot lands first, it's a travel.",
  },
  {
    slug: "pull-up-jumper",
    title: "Lesson 7 — Pull-Up Jumper",
    level: "advanced",
    order: 20,
    durationMin: 25,
    ageMin: 10,
    summary: "Shoot off the dribble in rhythm.",
    description:
      "Dribble, plant, rise, release — all in one motion. We chain stationary form shooting (Lesson 3) with the jump stop (Lesson 6) to build a smooth pull-up.",
    youtubeId: "InmnmKYCI2s",
    drills: [
      "One-dribble pull-up from elbow, 20 makes",
      "Two-dribble pull-up from wing, 20 makes",
      "Crossover into pull-up, 15 each direction",
    ],
    parentNotes:
      "Watch for the player drifting forward on the shot. Land where you took off.",
  },
  {
    slug: "euro-step-finish",
    title: "Lesson 8 — Euro Step Finish",
    level: "advanced",
    order: 21,
    durationMin: 22,
    ageMin: 10,
    summary: "Two-step deception at the rim.",
    description:
      "Step one direction to commit the defender, step the other way to finish. Legal as long as you don't pick up the dribble too early. Great counter when defenders cut off the straight drive.",
    youtubeId: "9VBlvKUjYUM",
    drills: [
      "Slow walk-through: step right, step left, finish, 10 reps",
      "Cone euro: drive at cone, euro past it, layup, 10 each side",
      "Live finish vs. coach hand-defender, 10 reps",
    ],
    parentNotes:
      "The first step is the FAKE — make it big and convincing. Second step is the real one.",
  },
  {
    slug: "step-back-three",
    title: "Lesson 9 — Step-Back Three",
    level: "advanced",
    order: 22,
    durationMin: 25,
    ageMin: 11,
    summary: "Create space, rise, shoot over the contest.",
    description:
      "Dribble at the defender, plant the front foot, push back hard, land on balance, rise into the shot. Hardest move on the list — requires strong legs and the form shot from Lesson 3.",
    youtubeId: "-CTGDhPV4S0",
    drills: [
      "Stationary step-back, 20 reps each side",
      "One-dribble step-back from wing, 15 makes",
      "Crossover into step-back three, 15 attempts each side",
    ],
    parentNotes:
      "Check that the landing is on balance. If the player falls backward on every rep, the legs aren't strong enough yet — go back to mid-range pull-ups.",
  },
];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return LESSONS.find((l) => l.slug === slug);
}

export function getLessonsByLevel(level: SkillLevel): Lesson[] {
  return LESSONS.filter((l) => l.level === level).sort((a, b) => a.order - b.order);
}

export const LEVEL_LABEL: Record<SkillLevel, string> = {
  beginner: "Beginner (start from 0)",
  intermediate: "Intermediate (1–2 yrs experience)",
  advanced: "Advanced",
};

export const LEVEL_DESCRIPTION: Record<SkillLevel, string> = {
  beginner:
    "Brand new to basketball. Lessons start at Lesson 0 — how to hold the ball — and build one step at a time.",
  intermediate:
    "Already played for 1–2 years. Lessons focus on cleaning up the weak hand, change-of-direction moves, and shooting under control.",
  advanced:
    "Confident with the basics. Lessons add finishing creativity, off-the-dribble shooting, and game-speed reads.",
};
