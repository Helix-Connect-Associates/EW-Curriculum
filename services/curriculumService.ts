import { Rotation, Takedown, OneStep, TestingData, Form } from '../types';
import { rotations, takedowns, onesteps, testingData } from '../data/curriculum';

export interface Curriculum {
    rotations: Rotation[];
    takedowns: Takedown[];
    onesteps: OneStep[];
    testingData: TestingData;
}

interface SavePoint {
    curriculum: Curriculum;
    savedAt: string;
}

const CURRICULUM_STORAGE_KEY = 'ewmma_curriculum';
const SAVEPOINT_STORAGE_KEY = 'ewmma_curriculum_savepoint';

const defaultCurriculum: Curriculum = {
    rotations,
    takedowns,
    onesteps,
    testingData,
};

let loadedCurriculum: Curriculum | null = null;

function getCurriculum(): Curriculum {
    if (loadedCurriculum) {
        return loadedCurriculum;
    }

    try {
        const storedData = localStorage.getItem(CURRICULUM_STORAGE_KEY);
        if (storedData) {
            loadedCurriculum = JSON.parse(storedData);
            return loadedCurriculum!;
        }
    } catch (error) {
        console.error("Failed to parse curriculum from localStorage", error);
    }

    loadedCurriculum = JSON.parse(JSON.stringify(defaultCurriculum)); // deep copy
    localStorage.setItem(CURRICULUM_STORAGE_KEY, JSON.stringify(loadedCurriculum));
    return loadedCurriculum;
}

function saveCurriculum(curriculum: Curriculum): void {
    try {
        localStorage.setItem(CURRICULUM_STORAGE_KEY, JSON.stringify(curriculum));
        loadedCurriculum = curriculum;
    } catch (error) {
        console.error("Failed to save curriculum to localStorage", error);
    }
}

export function getRotations(): Rotation[] {
    return getCurriculum().rotations;
}

export function getTakedowns(): Takedown[] {
    return getCurriculum().takedowns;
}

export function getOneSteps(): OneStep[] {
    return getCurriculum().onesteps;
}

export function getTestingData(): TestingData {
    return getCurriculum().testingData;
}

export function updateForm(rotationSlug: string, formIndex: number, updatedForm: Form): boolean {
    const curriculum = JSON.parse(JSON.stringify(getCurriculum()));
    const rotationIndex = curriculum.rotations.findIndex(r => r.slug === rotationSlug);

    if (rotationIndex === -1 || !curriculum.rotations[rotationIndex].forms[formIndex]) {
        console.error("Rotation or form not found for update");
        return false;
    }
    
    curriculum.rotations[rotationIndex].forms[formIndex] = updatedForm;
    
    saveCurriculum(curriculum);
    return true;
}

export function addForm(rotationSlug: string, newForm: Form): boolean {
    const curriculum = JSON.parse(JSON.stringify(getCurriculum()));
    const rotation = curriculum.rotations.find(r => r.slug === rotationSlug);

    if (!rotation) {
        console.error("Rotation not found for adding form");
        return false;
    }

    rotation.forms.push(newForm);
    
    saveCurriculum(curriculum);
    return true;
}

export function resetCurriculum(): void {
    localStorage.removeItem(CURRICULUM_STORAGE_KEY);
    loadedCurriculum = null;
}

// --- Save Point Functionality ---

export function createSavePoint(): string {
    const curriculum = getCurriculum();
    const savedAt = new Date().toISOString();
    const savePoint: SavePoint = {
        curriculum: JSON.parse(JSON.stringify(curriculum)), // deep copy
        savedAt,
    };
    localStorage.setItem(SAVEPOINT_STORAGE_KEY, JSON.stringify(savePoint));
    return savedAt;
}

export function getSavePointInfo(): string | null {
    try {
        const storedData = localStorage.getItem(SAVEPOINT_STORAGE_KEY);
        if (storedData) {
            const savePoint: SavePoint = JSON.parse(storedData);
            return savePoint.savedAt;
        }
    } catch (error) {
        console.error("Failed to get save point info", error);
    }
    return null;
}

export function restoreFromSavePoint(): boolean {
    const storedData = localStorage.getItem(SAVEPOINT_STORAGE_KEY);
    if (!storedData) {
        console.error("No save point found to restore from.");
        return false;
    }
    try {
        const savePoint: SavePoint = JSON.parse(storedData);
        saveCurriculum(savePoint.curriculum);
        return true;
    } catch (error) {
        console.error("Failed to restore from save point", error);
        return false;
    }
}

export function deleteSavePoint(): void {
    localStorage.removeItem(SAVEPOINT_STORAGE_KEY);
}