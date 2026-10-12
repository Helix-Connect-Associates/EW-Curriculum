import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { getTrainingProgram, ListItem, strikeKind, TrainingBlock } from '../services/trainingService';

/** Renders **bold** and [text](url) inside a line of content. */
const Inline: React.FC<{ text: string }> = ({ text }) => {
    const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
    return (
        <>
            {parts.map((part, i) => {
                const bold = part.match(/^\*\*([^*]+)\*\*$/);
                if (bold) return <strong key={i}>{bold[1]}</strong>;
                const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
                if (link) {
                    return (
                        <a key={i} href={link[2]} target="_blank" rel="noopener noreferrer" className="text-ew-gold-dark font-semibold underline hover:text-ew-text-primary">
                            {link[1]}
                        </a>
                    );
                }
                return <React.Fragment key={i}>{part}</React.Fragment>;
            })}
        </>
    );
};

const chipClasses: Record<ReturnType<typeof strikeKind>, string> = {
    punch: 'bg-ew-gold text-ew-black border-ew-gold',
    kick: 'bg-ew-black text-ew-gold border-ew-black',
    other: 'bg-white text-ew-text-primary border-ew-border',
};

const StrikeChips: React.FC<{ steps: string[]; large?: boolean }> = ({ steps, large = false }) => (
    <div className={`flex flex-wrap items-center ${large ? 'gap-2 md:gap-3 justify-center' : 'gap-1.5'}`}>
        {steps.map((step, i) => (
            <React.Fragment key={i}>
                {i > 0 && <span className={`${large ? 'text-2xl text-ew-gold' : 'text-ew-text-secondary'}`} aria-hidden="true">→</span>}
                <span
                    className={`border-2 rounded-full font-semibold whitespace-nowrap ${chipClasses[strikeKind(step)]} ${
                        large ? 'text-lg md:text-2xl px-4 py-2 border-ew-gold' : 'text-sm px-3 py-1'
                    }`}
                >
                    {step}
                </span>
            </React.Fragment>
        ))}
    </div>
);

const ComboCard: React.FC<{ combo: ListItem; onDrill?: () => void }> = ({ combo, onDrill }) => (
    <div className="bg-white p-4 rounded-lg shadow-md border-l-8 border-ew-gold flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-full bg-ew-black text-ew-gold font-heading font-black text-lg flex items-center justify-center">
            {combo.num ?? '•'}
        </div>
        <div className="flex-1 min-w-0">
            <StrikeChips steps={combo.steps!} />
            <div className="mt-2 text-xs text-ew-text-secondary">{combo.steps!.length} strikes</div>
        </div>
        {onDrill && (
            <button onClick={onDrill} className="shrink-0 text-sm font-bold text-ew-gold-dark hover:text-ew-text-primary" aria-label={`Drill combination ${combo.num ?? ''}`}>
                Drill ▸
            </button>
        )}
    </div>
);

const AUTO_OPTIONS = [0, 10, 15, 20, 30];

const DrillMode: React.FC<{ combos: ListItem[]; index: number; setIndex: (i: number) => void; onClose: () => void }> = ({ combos, index, setIndex, onClose }) => {
    const [autoSeconds, setAutoSeconds] = useState(0);
    const [remaining, setRemaining] = useState(0);
    const count = combos.length;

    const next = useCallback(() => setIndex((index + 1) % count), [index, count, setIndex]);
    const prev = () => setIndex((index - 1 + count) % count);
    const random = useCallback(() => {
        if (count < 2) return;
        let n = index;
        while (n === index) n = Math.floor(Math.random() * count);
        setIndex(n);
    }, [index, count, setIndex]);

    // Auto-call: pick a random combo every N seconds.
    useEffect(() => {
        if (!autoSeconds) return;
        setRemaining(autoSeconds);
        const tick = setInterval(() => {
            setRemaining(r => {
                if (r <= 1) {
                    random();
                    return autoSeconds;
                }
                return r - 1;
            });
        }, 1000);
        return () => clearInterval(tick);
    }, [autoSeconds, random]);

    const combo = combos[index];

    return (
        <section className="my-8 bg-ew-black rounded-lg border-2 border-ew-gold shadow-2xl p-5 md:p-8" aria-live="polite">
            <div className="flex items-center justify-between gap-4">
                <h2 className="text-ew-gold font-heading font-black text-xl md:text-2xl">Drill Mode</h2>
                <button onClick={onClose} className="text-ew-gold-light hover:text-ew-gold text-sm font-semibold">Close ✕</button>
            </div>

            <div className="mt-6 text-center">
                <div className="text-ew-gold-light text-sm uppercase tracking-widest">
                    Combo #{combo.num ?? index + 1} · {index + 1} of {count}
                </div>
                <div className="mt-4 min-h-[6rem] flex items-center justify-center">
                    <StrikeChips steps={combo.steps!} large />
                </div>
                {autoSeconds > 0 && (
                    <div className="mt-4 text-ew-gold font-heading font-black text-3xl tabular-nums">{remaining}s</div>
                )}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button onClick={prev} className="bg-transparent border-2 border-ew-gold text-ew-gold font-bold py-2 px-4 rounded hover:bg-ew-gold hover:text-ew-black transition-colors">◂ Prev</button>
                <button onClick={random} className="bg-ew-gold text-ew-black font-bold py-2 px-5 rounded hover:bg-ew-gold-light transition-colors">🎲 Random</button>
                <button onClick={next} className="bg-transparent border-2 border-ew-gold text-ew-gold font-bold py-2 px-4 rounded hover:bg-ew-gold hover:text-ew-black transition-colors">Next ▸</button>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm">
                <span className="text-ew-gold-light">Auto-call:</span>
                {AUTO_OPTIONS.map(s => (
                    <button
                        key={s}
                        onClick={() => setAutoSeconds(s)}
                        className={`px-3 py-1 rounded-full border font-semibold transition-colors ${
                            autoSeconds === s ? 'bg-ew-gold text-ew-black border-ew-gold' : 'text-ew-gold border-ew-gold hover:bg-ew-gold hover:text-ew-black'
                        }`}
                    >
                        {s === 0 ? 'Off' : `${s}s`}
                    </button>
                ))}
            </div>
        </section>
    );
};

const Block: React.FC<{ block: TrainingBlock; onDrill: (combo: ListItem) => void }> = ({ block, onDrill }) => {
    switch (block.type) {
        case 'heading':
            return <h2 className="mt-10 mb-4 text-2xl md:text-3xl font-heading font-black border-b-4 border-ew-gold pb-2">{block.text}</h2>;
        case 'paragraph':
            return <p className="my-4 text-base md:text-lg text-ew-text-primary max-w-3xl"><Inline text={block.text} /></p>;
        case 'callout':
            return (
                <div className="my-6 bg-ew-black text-ew-gold-light border-l-8 border-ew-gold rounded-lg p-5 shadow-md">
                    <Inline text={block.text} />
                </div>
            );
        case 'list': {
            const combos = block.items.filter(it => it.steps);
            if (combos.length === block.items.length) {
                return (
                    <div className="space-y-3">
                        {combos.map((c, i) => <ComboCard key={i} combo={c} onDrill={() => onDrill(c)} />)}
                    </div>
                );
            }
            const ListTag = block.ordered ? 'ol' : 'ul';
            return (
                <ListTag className={`my-4 pl-6 space-y-2 ${block.ordered ? 'list-decimal' : 'list-disc'}`}>
                    {block.items.map((it, i) => (
                        <li key={i} value={it.num}>
                            {it.steps ? <StrikeChips steps={it.steps} /> : <Inline text={it.text} />}
                        </li>
                    ))}
                </ListTag>
            );
        }
        case 'table':
            return (
                <div className="my-6 overflow-x-auto rounded-lg shadow-md border border-ew-border">
                    <table className="min-w-full text-left">
                        <thead className="bg-ew-black text-ew-gold font-heading">
                            <tr>{block.headers.map((h, i) => <th key={i} className="px-4 py-3 whitespace-nowrap">{h}</th>)}</tr>
                        </thead>
                        <tbody>
                            {block.rows.map((row, r) => (
                                <tr key={r} className={r % 2 ? 'bg-gray-50' : 'bg-white'}>
                                    {block.headers.map((_, c) => (
                                        <td key={c} className="px-4 py-3 border-t border-ew-border"><Inline text={row[c] ?? ''} /></td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
    }
};

const TrainingProgramPage: React.FC = () => {
    const { slug = '' } = useParams();
    const program = getTrainingProgram(slug);
    const [drillIndex, setDrillIndex] = useState<number | null>(null);

    if (!program) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-heading font-black">Program not found</h1>
                <Link to="/training" className="mt-6 inline-block text-ew-gold-dark font-semibold hover:underline">← Back to Training</Link>
            </div>
        );
    }

    const startDrill = (combo?: ListItem) => {
        setDrillIndex(combo ? Math.max(0, program.combos.indexOf(combo)) : 0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <Breadcrumb crumbs={[{ label: 'Home', path: '/' }, { label: 'Training', path: '/training' }, { label: program.title }]} />
            <header className="my-8 text-center">
                <div className="text-5xl">{program.icon}</div>
                <h1 className="mt-2 text-3xl md:text-5xl font-heading font-black">{program.title}</h1>
                {program.summary && <p className="mt-2 text-lg text-ew-text-secondary max-w-3xl mx-auto">{program.summary}</p>}
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                    {program.combos.length > 0 && drillIndex === null && (
                        <button onClick={() => startDrill()} className="bg-ew-black text-ew-gold font-bold py-2 px-6 rounded border-2 border-ew-gold hover:bg-ew-gold hover:text-ew-black transition-colors">
                            ▶ Start Drill Mode
                        </button>
                    )}
                    {program.video && (
                        <a href={program.video} target="_blank" rel="noopener noreferrer" className="bg-ew-gold text-ew-black font-bold py-2 px-6 rounded hover:bg-ew-gold-dark transition-colors">
                            Watch Video
                        </a>
                    )}
                </div>
            </header>

            {drillIndex !== null && program.combos.length > 0 && (
                <DrillMode combos={program.combos} index={drillIndex} setIndex={setDrillIndex} onClose={() => setDrillIndex(null)} />
            )}

            {program.combos.length > 0 && (
                <div className="flex flex-wrap justify-center gap-4 text-sm text-ew-text-secondary mb-2">
                    <span className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full bg-ew-gold" /> Punch</span>
                    <span className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full bg-ew-black" /> Kick</span>
                </div>
            )}

            <div className="max-w-4xl mx-auto">
                {program.blocks.map((block, i) => <Block key={i} block={block} onDrill={startDrill} />)}
            </div>
        </div>
    );
};

export default TrainingProgramPage;
