/**
 * The EastWest 100 — program data for the push-up challenge.
 * ------------------------------------------------------------------
 * The page text lives in training/pushup-challenge.md. This file holds the
 * numbers behind the interactive tool: phases, percentages, rest times and
 * the "Find my plan" rules. Every set is a percentage of the student's latest
 * test result (their "training max"), so each student gets their own reps.
 *
 * To change a workout, edit a percentage below (0.5 = 50% of training max).
 */

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type DayStyle = 'straight' | 'rounds' | 'ladder';

export interface WorkoutDay {
  day: 1 | 2 | 3;
  name: string;
  style: DayStyle;
  /** Minimum rest between sets, in seconds. Students may rest longer. */
  restSeconds: number;
  /**
   * Each set as a fraction of the training max. The LAST entry is the
   * max-effort set: do at least this many, then keep going with good form.
   */
  pcts: number[];
}

export interface ProgramWeek {
  week: number;
  phase: PhaseId;
  intro: string;
  days: WorkoutDay[];
  /** Shown under the week's day cards. */
  endOfWeekNote?: string;
}

export type PhaseId = 'foundation' | 'build' | 'peak';

export interface Phase {
  id: PhaseId;
  name: string;
  weeks: [number, number];
  /** Minimum test result to start this phase. */
  entryReps: number;
  summary: string;
}

export const phases: Phase[] = [
  {
    id: 'foundation',
    name: 'Foundation',
    weeks: [1, 2],
    entryReps: 0,
    summary: 'Build the habit and the base. Five straight sets per workout, with rest getting longer as the sets get bigger.',
  },
  {
    id: 'build',
    name: 'Build',
    weeks: [3, 4],
    entryReps: 16,
    summary: 'Bigger sets that push past your old max. You’ll finish Week 4 doing more in your last set than you did on your test.',
  },
  {
    id: 'peak',
    name: 'Peak',
    weeks: [5, 6],
    entryReps: 40,
    summary: 'Fight-style conditioning: lots of rounds with short rest, plus ladder days. This is where 100 gets built.',
  },
];

/* ------------------------------------------------------------------ */
/* The six-week program (percent of training max)                      */
/* ------------------------------------------------------------------ */

export const program: ProgramWeek[] = [
  {
    week: 1,
    phase: 'foundation',
    intro: 'Training max = your initial test. Short, steady sets to groove good form.',
    days: [
      { day: 1, name: 'Straight sets', style: 'straight', restSeconds: 60, pcts: [0.5, 0.5, 0.4, 0.4, 0.6] },
      { day: 2, name: 'Straight sets', style: 'straight', restSeconds: 60, pcts: [0.55, 0.6, 0.45, 0.45, 0.65] },
      { day: 3, name: 'Straight sets', style: 'straight', restSeconds: 75, pcts: [0.6, 0.7, 0.5, 0.5, 0.75] },
    ],
  },
  {
    week: 2,
    phase: 'foundation',
    intro: 'Same training max. Sets get bigger, and so does the rest.',
    days: [
      { day: 1, name: 'Straight sets', style: 'straight', restSeconds: 60, pcts: [0.65, 0.75, 0.55, 0.55, 0.8] },
      { day: 2, name: 'Straight sets', style: 'straight', restSeconds: 90, pcts: [0.7, 0.8, 0.6, 0.6, 0.9] },
      { day: 3, name: 'Straight sets', style: 'straight', restSeconds: 120, pcts: [0.75, 0.85, 0.65, 0.65, 1.0] },
    ],
    endOfWeekNote:
      'Phase test! Rest a day, then test. 16 or more → on to Build. Under 16 → repeat Foundation with your new number (your sets will still be bigger than before).',
  },
  {
    week: 3,
    phase: 'build',
    intro: 'Training max = your Foundation test. The first set is lighter so you can push the later ones.',
    days: [
      { day: 1, name: 'Straight sets', style: 'straight', restSeconds: 60, pcts: [0.55, 0.65, 0.45, 0.45, 0.65] },
      { day: 2, name: 'Straight sets', style: 'straight', restSeconds: 90, pcts: [0.6, 0.7, 0.5, 0.5, 0.75] },
      { day: 3, name: 'Straight sets', style: 'straight', restSeconds: 120, pcts: [0.65, 0.8, 0.55, 0.55, 0.85] },
    ],
  },
  {
    week: 4,
    phase: 'build',
    intro: 'Same training max. By Day 3 your last set goes past your old test result.',
    days: [
      { day: 1, name: 'Straight sets', style: 'straight', restSeconds: 60, pcts: [0.7, 0.8, 0.6, 0.55, 0.9] },
      { day: 2, name: 'Straight sets', style: 'straight', restSeconds: 90, pcts: [0.75, 0.9, 0.65, 0.6, 1.0] },
      { day: 3, name: 'Straight sets', style: 'straight', restSeconds: 120, pcts: [0.8, 0.95, 0.7, 0.65, 1.05] },
    ],
    endOfWeekNote:
      'Phase test! 40 or more → on to Peak. Under 40 → repeat Build with your new number.',
  },
  {
    week: 5,
    phase: 'peak',
    intro: 'Training max = your Build test. Rounds and ladder days train you to keep going while tired — just like test day.',
    days: [
      { day: 1, name: 'Straight sets', style: 'straight', restSeconds: 60, pcts: [0.5, 0.6, 0.45, 0.4, 0.65] },
      {
        day: 2,
        name: 'Rounds',
        style: 'rounds',
        restSeconds: 45,
        pcts: [0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.65],
      },
      {
        day: 3,
        name: 'Ladder',
        style: 'ladder',
        restSeconds: 45,
        pcts: [0.25, 0.3, 0.35, 0.4, 0.35, 0.3, 0.25, 0.75],
      },
    ],
  },
  {
    week: 6,
    phase: 'peak',
    intro: 'Same training max. Last week before the Final Test — finish strong.',
    days: [
      { day: 1, name: 'Straight sets', style: 'straight', restSeconds: 60, pcts: [0.6, 0.75, 0.5, 0.45, 0.85] },
      {
        day: 2,
        name: 'Rounds',
        style: 'rounds',
        restSeconds: 45,
        pcts: [0.35, 0.35, 0.4, 0.4, 0.35, 0.35, 0.3, 0.3, 0.95],
      },
      {
        day: 3,
        name: 'Ladder',
        style: 'ladder',
        restSeconds: 45,
        pcts: [0.3, 0.35, 0.4, 0.45, 0.4, 0.35, 0.3, 0.3, 1.0],
      },
    ],
    endOfWeekNote: 'Rest one or two days, then take the Final Test.',
  },
];

export const TOTAL_WORKOUTS = program.reduce((n, w) => n + w.days.length, 0);

/** Turn a percentage into reps for this student. Always at least 1. */
export const repsFor = (pct: number, trainingMax: number): number =>
  Math.max(1, Math.round(pct * trainingMax));

/* ------------------------------------------------------------------ */
/* Plan finder                                                         */
/* ------------------------------------------------------------------ */

export type Checkpoint = 'initial' | 'foundation' | 'build' | 'final';

export const checkpoints: { id: Checkpoint; label: string }[] = [
  { id: 'initial', label: 'Starting test' },
  { id: 'foundation', label: 'End of Foundation (Week 2)' },
  { id: 'build', label: 'End of Build (Week 4)' },
  { id: 'final', label: 'Final Test (after Week 6)' },
];

export const GOAL = 100;
const BUILD_ENTRY = phases[1].entryReps; // 16
const PEAK_ENTRY = phases[2].entryReps; // 40

export interface Placement {
  /** Week to start next. 0 = goal reached. */
  week: number;
  trainingMax: number;
  headline: string;
  detail: string;
  repeat?: boolean;
  scaleTip?: boolean;
}

const startOf = (phase: PhaseId) => (phase === 'foundation' ? 1 : phase === 'build' ? 3 : 5);
const phaseName = (phase: PhaseId) => phases.find((p) => p.id === phase)!.name;

function place(reps: number, detail: string, repeatPhase?: PhaseId): Placement {
  const phase: PhaseId = reps >= PEAK_ENTRY ? 'peak' : reps >= BUILD_ENTRY ? 'build' : 'foundation';
  const repeat = repeatPhase === phase;
  return {
    week: startOf(phase),
    trainingMax: reps,
    repeat,
    scaleTip: reps < 3,
    headline: `${repeat ? 'Repeat' : 'Start'} ${phaseName(phase)} — Week ${startOf(phase)}`,
    detail,
  };
}

export function getPlacement(checkpoint: Checkpoint, rawReps: number): Placement {
  const reps = Math.max(0, Math.floor(rawReps));

  if (checkpoint === 'final' && reps >= GOAL) {
    return {
      week: 0,
      trainingMax: reps,
      headline: 'You did it — 100 push-ups! OSS!',
      detail: 'Tell your instructor and your training partners. Check out “Now what?” to keep it going.',
    };
  }

  switch (checkpoint) {
    case 'initial':
      return place(
        reps,
        reps >= BUILD_ENTRY
          ? 'Strong start — you can skip ahead. Rest a day or two after your test, then begin.'
          : 'Welcome to the challenge! Rest a day or two after your test, then start Day 1.',
      );
    case 'foundation':
      return place(
        reps,
        reps >= BUILD_ENTRY
          ? 'Foundation complete. Your sets just got a lot bigger.'
          : 'Not quite 16 yet — that’s normal. Your new numbers are built from today’s result, so the next round is still a step up.',
        'foundation',
      );
    case 'build':
      return place(
        reps,
        reps >= PEAK_ENTRY
          ? 'Build complete. On to the Peak phase — the toughest two weeks.'
          : 'Under 40 for now. Run Build again with your new number and you’ll get there.',
        'build',
      );
    case 'final':
      return place(
        reps,
        reps >= PEAK_ENTRY
          ? `You’re ${GOAL - reps} away. Run Peak again with your new number — most students need more than one round.`
          : 'Go back a phase to rebuild, then come back stronger. Don’t give up.',
        'peak',
      );
  }
}
