import React, { useEffect, useMemo, useState } from 'react';
import {
    checkpoints,
    getPlacement,
    GOAL,
    phases,
    program,
    repsFor,
    TOTAL_WORKOUTS,
    type Checkpoint,
    type Placement,
    type ProgramWeek,
    type WorkoutDay,
} from '../../data/eastwest100';

/**
 * Interactive tool for the EastWest 100 push-up challenge.
 * Embedded in training/pushup-challenge.md with the line {{eastwest-100}}.
 * Progress is saved in this browser only (no database).
 */

const STORAGE_KEY = 'ewmma.eastwest100.v1';

interface TestLog {
    checkpoint: Checkpoint;
    reps: number;
    date: string;
}

interface SavedState {
    week: number;
    trainingMax: number | null;
    done: Record<string, boolean>;
    tests: TestLog[];
}

const DEFAULT_STATE: SavedState = { week: 1, trainingMax: null, done: {}, tests: [] };

function loadState(): SavedState {
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return DEFAULT_STATE;
        const parsed = JSON.parse(raw) as Partial<SavedState>;
        return { ...DEFAULT_STATE, ...parsed, done: parsed.done ?? {}, tests: parsed.tests ?? [] };
    } catch {
        return DEFAULT_STATE;
    }
}

function saveState(state: SavedState): void {
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
        /* storage blocked — the tool still works for this visit */
    }
}

const dayKey = (week: number, day: number) => `w${week}d${day}`;
const phaseOf = (week: number) => phases.find(p => week >= p.weeks[0] && week <= p.weeks[1]) ?? phases[0];
const pctLabel = (p: number) => `${Math.round(p * 100)}%`;

const EastWest100: React.FC = () => {
    const [state, setState] = useState<SavedState>(loadState);
    const [showMath, setShowMath] = useState(false);

    useEffect(() => saveState(state), [state]);

    const update = (patch: Partial<SavedState>) => setState(s => ({ ...s, ...patch }));
    const toggleDone = (week: number, day: number) =>
        setState(s => {
            const key = dayKey(week, day);
            return { ...s, done: { ...s.done, [key]: !s.done[key] } };
        });

    const completed = Object.values(state.done).filter(Boolean).length;
    const pct = Math.min(100, Math.round((completed / TOTAL_WORKOUTS) * 100));
    const currentWeek = program.find(w => w.week === state.week) ?? program[0];
    const best = state.tests.reduce((m, t) => Math.max(m, t.reps), 0);

    const applyPlacement = (checkpoint: Checkpoint, reps: number, p: Placement) => {
        const log: TestLog = { checkpoint, reps, date: new Date().toISOString().slice(0, 10) };
        setState(s => {
            const next: SavedState = { ...s, tests: [...s.tests, log], trainingMax: p.trainingMax };
            if (p.week > 0) {
                next.week = p.week;
                const ph = phaseOf(p.week);
                const done = { ...s.done };
                for (let w = ph.weeks[0]; w <= ph.weeks[1]; w++) for (let d = 1; d <= 3; d++) delete done[dayKey(w, d)];
                next.done = done;
            }
            return next;
        });
        if (p.week > 0) document.getElementById('ew100-program')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const resetProgress = () => {
        if (window.confirm('Clear all your saved push-up progress on this device?')) setState(DEFAULT_STATE);
    };

    return (
        <div className="my-8 space-y-8">
            {/* At a glance */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Stat value="6" label="weeks" />
                <Stat value="3×" label="per week" />
                <Stat value={best > 0 ? String(best) : '—'} label="your best" />
                <Stat value={String(GOAL)} label="the goal" />
            </div>

            <PlanFinder onApply={applyPlacement} />

            {/* Phases */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {phases.map(p => {
                    const current = phaseOf(state.week).id === p.id;
                    return (
                        <div
                            key={p.id}
                            className={`bg-white rounded-lg shadow-md p-5 border-t-8 ${current ? 'border-ew-gold' : 'border-ew-border'}`}
                        >
                            <div className="text-xs font-bold uppercase tracking-widest text-ew-text-secondary">
                                Weeks {p.weeks[0]}–{p.weeks[1]}
                                {current && <span className="ml-2 text-ew-black bg-ew-gold px-2 py-0.5 rounded-full">You are here</span>}
                            </div>
                            <h3 className="mt-1 text-2xl font-heading font-black">{p.name}</h3>
                            <p className="mt-2 text-sm text-ew-text-secondary">{p.summary}</p>
                            {p.entryReps > 0 && (
                                <span className="mt-3 inline-block text-xs font-bold uppercase tracking-wide bg-ew-black text-ew-gold px-3 py-1 rounded-full">
                                    Start with a test of {p.entryReps}+
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Program */}
            <section id="ew100-program" className="scroll-mt-24">
                <h2 className="mb-4 text-2xl md:text-3xl font-heading font-black border-b-4 border-ew-gold pb-2">Your workouts</h2>

                <div className="flex items-center gap-3 mb-4" aria-label={`${completed} of ${TOTAL_WORKOUTS} workouts complete`}>
                    <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-ew-gold transition-all duration-300" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-sm text-ew-text-secondary whitespace-nowrap">
                        {completed} / {TOTAL_WORKOUTS} workouts
                    </span>
                </div>

                <div className="flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Program weeks">
                    {program.map(w => {
                        const active = state.week === w.week;
                        const weekDone = w.days.every(d => state.done[dayKey(w.week, d.day)]);
                        return (
                            <button
                                key={w.week}
                                role="tab"
                                aria-selected={active}
                                onClick={() => update({ week: w.week })}
                                className={`shrink-0 flex flex-col items-center px-4 py-2 rounded border-2 font-bold transition-colors ${
                                    active
                                        ? 'bg-ew-black text-ew-gold border-ew-black'
                                        : 'bg-white text-ew-text-primary border-ew-border hover:border-ew-gold'
                                }`}
                            >
                                <span className="text-[0.65rem] uppercase tracking-widest opacity-75">{phaseOf(w.week).name}</span>
                                <span>
                                    Week {w.week}
                                    {weekDone && <span className="ml-1 text-ew-success" aria-label="complete">✓</span>}
                                </span>
                            </button>
                        );
                    })}
                </div>

                <WeekPanel
                    week={currentWeek}
                    trainingMax={state.trainingMax}
                    onTrainingMax={n => update({ trainingMax: n })}
                    showMath={showMath}
                    onShowMath={setShowMath}
                    done={state.done}
                    onToggleDone={toggleDone}
                />
            </section>

            {state.tests.length > 0 && (
                <section>
                    <h2 className="mb-4 text-2xl md:text-3xl font-heading font-black border-b-4 border-ew-gold pb-2">Your test history</h2>
                    <div className="overflow-x-auto rounded-lg shadow-md border border-ew-border">
                        <table className="min-w-full text-left">
                            <thead className="bg-ew-black text-ew-gold font-heading">
                                <tr>
                                    <th className="px-4 py-3">Date</th>
                                    <th className="px-4 py-3">Test</th>
                                    <th className="px-4 py-3 text-right">Push-ups</th>
                                </tr>
                            </thead>
                            <tbody>
                                {state.tests.map((t, i) => (
                                    <tr key={i} className={i % 2 ? 'bg-gray-50' : 'bg-white'}>
                                        <td className="px-4 py-3 border-t border-ew-border whitespace-nowrap">{t.date}</td>
                                        <td className="px-4 py-3 border-t border-ew-border">{checkpoints.find(c => c.id === t.checkpoint)?.label}</td>
                                        <td className="px-4 py-3 border-t border-ew-border text-right font-bold">{t.reps}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            )}

            <p className="text-sm text-ew-text-secondary">
                Your progress is saved only on this device.{' '}
                <button onClick={resetProgress} className="underline font-semibold hover:text-ew-text-primary">
                    Reset my progress
                </button>
            </p>
        </div>
    );
};

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="bg-ew-black rounded-lg p-4 text-center border-2 border-ew-gold">
        <div className="text-3xl font-heading font-black text-ew-gold leading-none">{value}</div>
        <div className="mt-1 text-xs uppercase tracking-widest text-ew-gold-light">{label}</div>
    </div>
);

const PlanFinder: React.FC<{ onApply: (c: Checkpoint, reps: number, p: Placement) => void }> = ({ onApply }) => {
    const [checkpoint, setCheckpoint] = useState<Checkpoint>('initial');
    const [reps, setReps] = useState('');
    const [result, setResult] = useState<Placement | null>(null);
    const n = Number(reps);
    const valid = reps.trim() !== '' && Number.isFinite(n) && n >= 0;

    return (
        <section className="bg-ew-black rounded-lg border-2 border-ew-gold shadow-2xl p-5 md:p-8">
            <h2 className="text-ew-gold font-heading font-black text-2xl md:text-3xl">Find my plan</h2>
            <p className="mt-2 text-ew-gold-light">
                Enter your latest test result. We’ll tell you where to start and build every set from your number.
            </p>

            <form
                className="mt-5 flex flex-wrap items-end gap-3"
                onSubmit={e => {
                    e.preventDefault();
                    if (valid) setResult(getPlacement(checkpoint, n));
                }}
            >
                <label className="flex flex-col gap-1 text-sm text-ew-gold-light">
                    Which test?
                    <select
                        value={checkpoint}
                        onChange={e => {
                            setCheckpoint(e.target.value as Checkpoint);
                            setResult(null);
                        }}
                        className="bg-white text-ew-text-primary rounded px-3 py-2 border-2 border-ew-gold font-semibold"
                    >
                        {checkpoints.map(c => (
                            <option key={c.id} value={c.id}>
                                {c.label}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="flex flex-col gap-1 text-sm text-ew-gold-light">
                    Push-ups in a row
                    <input
                        type="number"
                        inputMode="numeric"
                        min={0}
                        max={500}
                        value={reps}
                        placeholder="e.g. 8"
                        onChange={e => {
                            setReps(e.target.value);
                            setResult(null);
                        }}
                        className="w-32 bg-white text-ew-text-primary rounded px-3 py-2 border-2 border-ew-gold font-semibold"
                    />
                </label>
                <button
                    type="submit"
                    disabled={!valid}
                    className="bg-ew-gold text-ew-black font-bold py-2 px-6 rounded hover:bg-ew-gold-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    Show my plan
                </button>
            </form>

            {result && (
                <div role="status" className={`mt-6 bg-white rounded-lg p-5 border-l-8 ${result.week === 0 ? 'border-ew-success' : 'border-ew-gold'}`}>
                    <div className="text-xl md:text-2xl font-heading font-black">{result.headline}</div>
                    <p className="mt-1 text-ew-text-secondary">{result.detail}</p>
                    {result.week > 0 && (
                        <p className="mt-2">
                            Your training max: <span className="font-heading font-black text-2xl">{result.trainingMax}</span>
                        </p>
                    )}
                    {result.scaleTip && (
                        <p className="mt-2 text-sm text-ew-text-secondary">
                            Tip: with fewer than 3 full push-ups, use a scaled version (see “Can’t do many yet?”) for your test and your workouts.
                        </p>
                    )}
                    <button
                        onClick={() => onApply(checkpoint, n, result)}
                        className="mt-4 bg-ew-black text-ew-gold font-bold py-2 px-6 rounded border-2 border-ew-black hover:bg-ew-gold hover:text-ew-black transition-colors"
                    >
                        {result.week === 0 ? 'Save my result' : 'Save & build my plan'}
                    </button>
                </div>
            )}
        </section>
    );
};

interface WeekPanelProps {
    week: ProgramWeek;
    trainingMax: number | null;
    onTrainingMax: (n: number) => void;
    showMath: boolean;
    onShowMath: (v: boolean) => void;
    done: Record<string, boolean>;
    onToggleDone: (week: number, day: number) => void;
}

const WeekPanel: React.FC<WeekPanelProps> = ({ week, trainingMax, onTrainingMax, showMath, onShowMath, done, onToggleDone }) => (
    <div role="tabpanel" className="mt-4">
        <p className="text-ew-text-secondary">{week.intro}</p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <label className="flex items-center gap-3">
                <span className="font-heading font-black uppercase">Training max</span>
                <input
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={500}
                    value={trainingMax ?? ''}
                    placeholder="—"
                    onChange={e => {
                        const v = Math.floor(Number(e.target.value));
                        if (Number.isFinite(v) && v > 0) onTrainingMax(v);
                    }}
                    className="w-24 text-center text-xl font-heading font-black bg-white border-2 border-ew-gold rounded px-2 py-1"
                />
            </label>
            <label className="flex items-center gap-2 text-sm text-ew-text-secondary cursor-pointer">
                <input type="checkbox" checked={showMath} onChange={e => onShowMath(e.target.checked)} className="accent-black" />
                Show the math
            </label>
        </div>
        <p className="mt-2 text-sm text-ew-text-secondary">
            {trainingMax
                ? 'Every set is calculated from this number. Update it after each phase test.'
                : 'Enter your test result here (or use “Find my plan”) to see your reps. Until then, sets show as a % of your max.'}
        </p>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {week.days.map(d => (
                <DayCard
                    key={d.day}
                    day={d}
                    trainingMax={trainingMax}
                    showMath={showMath}
                    isDone={!!done[dayKey(week.week, d.day)]}
                    onToggle={() => onToggleDone(week.week, d.day)}
                />
            ))}
        </div>

        {week.endOfWeekNote && (
            <div className="mt-6 bg-ew-black text-ew-gold-light border-l-8 border-ew-gold rounded-lg p-5 shadow-md font-semibold">
                ⚡ {week.endOfWeekNote}
            </div>
        )}
    </div>
);

const DayCard: React.FC<{ day: WorkoutDay; trainingMax: number | null; showMath: boolean; isDone: boolean; onToggle: () => void }> = ({
    day,
    trainingMax,
    showMath,
    isDone,
    onToggle,
}) => {
    const last = day.pcts.length - 1;
    const reps = trainingMax ? day.pcts.map(p => repsFor(p, trainingMax)) : null;
    const total = reps?.reduce((a, b) => a + b, 0);
    const label = day.style === 'straight' ? 'Set' : day.style === 'rounds' ? 'Round' : 'Step';

    return (
        <div className={`bg-white rounded-lg shadow-md border-l-8 ${isDone ? 'border-ew-success' : 'border-ew-gold'} p-4 flex flex-col`}>
            <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-heading font-black">Day {day.day}</h3>
                <span className="text-xs font-bold bg-ew-black text-ew-gold px-2 py-1 rounded-full">Rest {day.restSeconds}s+</span>
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-ew-text-secondary mt-1 mb-3">{day.name}</div>

            <ol className="space-y-1 mb-3">
                {day.pcts.map((p, i) => {
                    const isMax = i === last;
                    return (
                        <li
                            key={i}
                            className={`flex justify-between items-center px-3 py-1.5 rounded ${
                                isMax ? 'bg-ew-black text-ew-gold font-bold' : i % 2 ? 'bg-white' : 'bg-gray-100'
                            }`}
                        >
                            <span className={isMax ? '' : 'text-ew-text-secondary'}>{isMax ? 'Max' : `${label} ${i + 1}`}</span>
                            <span className="tabular-nums">
                                {showMath && reps && <span className="mr-2 text-xs font-normal opacity-60">{pctLabel(p)}</span>}
                                <span className="font-heading font-black text-lg">
                                    {reps ? reps[i] : pctLabel(p)}
                                    {isMax ? '+' : ''}
                                </span>
                            </span>
                        </li>
                    );
                })}
            </ol>

            {total !== undefined && <p className="text-xs text-ew-text-secondary mb-3">At least {total} push-ups today</p>}

            <div className="mt-auto space-y-2">
                <RestTimer seconds={day.restSeconds} />
                <button
                    onClick={onToggle}
                    aria-pressed={isDone}
                    className={`w-full font-bold py-2 rounded border-2 transition-colors ${
                        isDone ? 'bg-ew-success border-ew-success text-white' : 'bg-white border-ew-black text-ew-black hover:bg-ew-black hover:text-ew-gold'
                    }`}
                >
                    {isDone ? '✓ Workout complete' : 'Mark complete'}
                </button>
            </div>
        </div>
    );
};

const RestTimer: React.FC<{ seconds: number }> = ({ seconds }) => {
    const [left, setLeft] = useState<number | null>(null);

    useEffect(() => {
        if (left === null) return;
        if (left <= 0) {
            try {
                navigator.vibrate?.([200, 100, 200]);
            } catch {
                /* not supported */
            }
            const t = window.setTimeout(() => setLeft(null), 1500);
            return () => window.clearTimeout(t);
        }
        const t = window.setTimeout(() => setLeft(l => (l === null ? null : l - 1)), 1000);
        return () => window.clearTimeout(t);
    }, [left]);

    const text = useMemo(() => {
        if (left === null) return `⏱ Start ${seconds}s rest timer`;
        if (left <= 0) return 'Next set — go!';
        return `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')} · tap to stop`;
    }, [left, seconds]);

    return (
        <button
            onClick={() => setLeft(l => (l === null ? seconds : null))}
            aria-live="polite"
            className={`w-full font-bold py-2 rounded border-2 tabular-nums transition-colors ${
                left === 0
                    ? 'bg-ew-gold border-ew-gold text-ew-black'
                    : left !== null
                      ? 'bg-ew-black border-ew-black text-ew-gold'
                      : 'bg-white border-dashed border-ew-border text-ew-text-primary hover:border-ew-gold'
            }`}
        >
            {text}
        </button>
    );
};

export default EastWest100;
