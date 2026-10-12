/// <reference types="vite/client" />
/**
 * Training section content loader.
 *
 * Every Markdown file in /training (except files starting with "_") becomes a
 * training program page. Files are bundled at build time, so editing a file and
 * pushing to GitHub is all it takes to publish. See training/_HOW-TO-EDIT.md.
 */

export interface ListItem {
    num?: number;
    text: string;
    /** Present when the item is a combination ("Jab → Cross → ..."). */
    steps?: string[];
}

export type TrainingBlock =
    | { type: 'heading'; text: string }
    | { type: 'paragraph'; text: string }
    | { type: 'callout'; text: string }
    | { type: 'list'; ordered: boolean; items: ListItem[] }
    | { type: 'table'; headers: string[]; rows: string[][] };

export interface TrainingProgram {
    slug: string;
    title: string;
    icon: string;
    summary: string;
    order: number;
    video?: string;
    blocks: TrainingBlock[];
    /** All combination items in the file, in order (used by Drill Mode). */
    combos: ListItem[];
}

const files = import.meta.glob('../training/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

const COMBO_SPLIT = /\s*(?:→|->|=>|⇒)\s*/;
const ORDERED = /^(\d+)[.)]\s+(.*)$/;
const BULLET = /^[-*•]\s+(.*)$/;

function parseFrontMatter(raw: string): { meta: Record<string, string>; body: string } {
    const meta: Record<string, string> = {};
    const match = raw.match(/^﻿?---\s*\n([\s\S]*?)\n---\s*(?:\n|$)/);
    if (!match) return { meta, body: raw };
    for (const line of match[1].split('\n')) {
        const idx = line.indexOf(':');
        if (idx > 0) meta[line.slice(0, idx).trim().toLowerCase()] = line.slice(idx + 1).trim();
    }
    return { meta, body: raw.slice(match[0].length) };
}

function splitRow(line: string): string[] {
    return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());
}

function toListItem(text: string, num?: number): ListItem {
    const parts = text.split(COMBO_SPLIT).map(s => s.trim()).filter(Boolean);
    return parts.length >= 2 ? { num, text, steps: parts } : { num, text };
}

export function parseTrainingMarkdown(body: string): TrainingBlock[] {
    const lines = body.split('\n');
    const blocks: TrainingBlock[] = [];
    let i = 0;

    while (i < lines.length) {
        const line = lines[i].trim();
        if (!line) { i++; continue; }

        if (/^#{1,6}\s+/.test(line)) {
            blocks.push({ type: 'heading', text: line.replace(/^#{1,6}\s+/, '') });
            i++;
            continue;
        }

        if (line.startsWith('>')) {
            const parts: string[] = [];
            while (i < lines.length && lines[i].trim().startsWith('>')) {
                parts.push(lines[i].trim().replace(/^>\s?/, ''));
                i++;
            }
            blocks.push({ type: 'callout', text: parts.join(' ') });
            continue;
        }

        if (line.startsWith('|')) {
            const rows: string[][] = [];
            while (i < lines.length && lines[i].trim().startsWith('|')) {
                const row = lines[i].trim();
                if (!/^\|[\s:|-]+\|?$/.test(row)) rows.push(splitRow(row)); // skip |---| separator
                i++;
            }
            if (rows.length) blocks.push({ type: 'table', headers: rows[0], rows: rows.slice(1) });
            continue;
        }

        if (ORDERED.test(line) || BULLET.test(line)) {
            const ordered = ORDERED.test(line);
            const items: ListItem[] = [];
            while (i < lines.length) {
                const l = lines[i].trim();
                const o = l.match(ORDERED);
                const b = l.match(BULLET);
                if (ordered && o) items.push(toListItem(o[2], parseInt(o[1], 10)));
                else if (!ordered && b) items.push(toListItem(b[1]));
                else break;
                i++;
            }
            blocks.push({ type: 'list', ordered, items });
            continue;
        }

        const para: string[] = [];
        while (i < lines.length) {
            const l = lines[i].trim();
            if (!l || /^(#{1,6}\s|>|\|)/.test(l) || ORDERED.test(l) || BULLET.test(l)) break;
            para.push(l);
            i++;
        }
        blocks.push({ type: 'paragraph', text: para.join(' ') });
    }
    return blocks;
}

function buildPrograms(): TrainingProgram[] {
    return Object.entries(files)
        .filter(([path]) => !path.split('/').pop()!.startsWith('_'))
        .map(([path, raw]) => {
            const slug = path.split('/').pop()!.replace(/\.md$/i, '').toLowerCase();
            const { meta, body } = parseFrontMatter(raw.replace(/\r\n?/g, '\n'));
            const blocks = parseTrainingMarkdown(body);
            const combos = blocks.flatMap(b => (b.type === 'list' ? b.items.filter(it => it.steps) : []));
            const order = parseFloat(meta.order);
            return {
                slug,
                title: meta.title || slug.replace(/[-_]+/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
                icon: meta.icon || '💪',
                summary: meta.summary || '',
                order: Number.isFinite(order) ? order : 999,
                video: meta.video || undefined,
                blocks,
                combos,
            };
        })
        .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

const programs = buildPrograms();

export function getTrainingPrograms(): TrainingProgram[] {
    return programs;
}

export function getTrainingProgram(slug: string): TrainingProgram | undefined {
    return programs.find(p => p.slug === slug.toLowerCase());
}

/** Classifies a single strike for chip styling. */
export function strikeKind(step: string): 'kick' | 'punch' | 'other' {
    const s = step.toLowerCase();
    if (/\b(kick|knee)\b/.test(s)) return 'kick';
    if (/\b(jab|cross|hook|uppercut|punch|elbow|overhand|backfist)\b/.test(s)) return 'punch';
    return 'other';
}
