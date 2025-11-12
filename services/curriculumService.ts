
import { Rotation, Takedown, OneStep, TestingData, Form, Breakaway, WeaponDefense, Curriculum } from '../types';
import { rotations, takedowns, onesteps, testingData, breakaways, weaponDefenses } from '../data/curriculum';

const CURRICULUM_STORAGE_KEY = 'ewmma_curriculum';
const WELCOME_MESSAGE_STORAGE_KEY = 'ewmma_welcome_message';

const defaultWelcomeMessage = `Welcome to the EastWest MMA curriculum site. The purpose of this site is to provide students additional resources to help them with the curriculum of the school. The information on this site is maintained by students of the school and is NOT considered the official school curriculum.

Instead, it is intended to assist you in your preparation for testing and provide you supplemental information based on the experience of many of the Black Belts that have successfully made it through the program. If you find anything on this site that is inaccurate, please let the site administrators know and they will research it and make the appropriate changes. Additionally, if you have ideas on how to make it better, please let them know as well.

Testing happens four times per year in March, June, September and December with September being and possibly March being Black Belt testing rotations.

All Black Belts under 1st degree or those testing for 2nd Degree and higher that are testing for a new grade, are expected to participate in the September testing.`;

const defaultCurriculum: Curriculum = {
    rotations,
    takedowns,
    onesteps,
    breakaways,
    weaponDefenses,
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

// Welcome Message
export function getWelcomeMessage(): string {
    try {
        const storedMessage = localStorage.getItem(WELCOME_MESSAGE_STORAGE_KEY);
        return storedMessage || defaultWelcomeMessage;
    } catch (error) {
        console.error("Failed to get welcome message from localStorage", error);
        return defaultWelcomeMessage;
    }
}

export function saveWelcomeMessage(message: string): void {
    try {
        localStorage.setItem(WELCOME_MESSAGE_STORAGE_KEY, message);
    } catch (error) {
        console.error("Failed to save welcome message to localStorage", error);
    }
}

// Getters
export function getRotations(): Rotation[] { return getCurriculum().rotations; }
export function getTakedowns(): Takedown[] { return getCurriculum().takedowns; }
export function getOneSteps(): OneStep[] { return getCurriculum().onesteps; }
export function getBreakaways(): Breakaway[] { return getCurriculum().breakaways; }
export function getWeaponDefenses(): WeaponDefense[] { return getCurriculum().weaponDefenses; }
export function getTestingData(): TestingData { return getCurriculum().testingData; }

// Generic CUD Functions
function updateItem<T extends {id: number}>(collection: T[], updatedItem: T): boolean {
    const index = collection.findIndex(item => item.id === updatedItem.id);
    if (index === -1) return false;
    collection[index] = updatedItem;
    return true;
}

function addItem<T>(collection: T[], newItem: T): T {
    const maxId = collection.reduce((max: number, item: any) => Math.max(item.id || 0, max), 0);
    (newItem as any).id = maxId + 1;
    collection.push(newItem);
    return newItem;
}

function deleteItem<T extends {id: number}>(collection: T[], idToDelete: number): T[] {
    return collection.filter(item => item.id !== idToDelete);
}


// Forms
export function updateForm(rotationSlug: string, formIndex: number, updatedForm: Form): boolean {
    const curriculum = JSON.parse(JSON.stringify(getCurriculum()));
    const rotation = curriculum.rotations.find(r => r.slug === rotationSlug);
    if (!rotation || !rotation.forms[formIndex]) return false;
    rotation.forms[formIndex] = updatedForm;
    saveCurriculum(curriculum);
    return true;
}

export function addForm(rotationSlug: string, newForm: Form): boolean {
    const curriculum = JSON.parse(JSON.stringify(getCurriculum()));
    const rotation = curriculum.rotations.find(r => r.slug === rotationSlug);
    if (!rotation) return false;
    rotation.forms.push(newForm);
    saveCurriculum(curriculum);
    return true;
}

// Takedowns
export function updateTakedown(id: number, updated: Takedown): boolean {
    const curriculum = getCurriculum();
    if (!updateItem(curriculum.takedowns, { ...updated, id })) return false;
    saveCurriculum(curriculum);
    return true;
}
export function addTakedown(newItem: Takedown): Takedown {
    const curriculum = getCurriculum();
    const added = addItem(curriculum.takedowns, newItem);
    saveCurriculum(curriculum);
    return added;
}
export function deleteTakedown(id: number): boolean {
    const curriculum = getCurriculum();
    curriculum.takedowns = deleteItem(curriculum.takedowns, id);
    saveCurriculum(curriculum);
    return true;
}

// One Steps
export function updateOneStep(id: number, updated: OneStep): boolean {
    const curriculum = getCurriculum();
    if (!updateItem(curriculum.onesteps, { ...updated, id })) return false;
    saveCurriculum(curriculum);
    return true;
}
export function addOneStep(newItem: OneStep): OneStep {
    const curriculum = getCurriculum();
    const added = addItem(curriculum.onesteps, newItem);
    saveCurriculum(curriculum);
    return added;
}
export function deleteOneStep(id: number): boolean {
    const curriculum = getCurriculum();
    curriculum.onesteps = deleteItem(curriculum.onesteps, id);
    saveCurriculum(curriculum);
    return true;
}

// Breakaways
export function updateBreakaway(id: number, updated: Breakaway): boolean {
    const curriculum = getCurriculum();
    if (!updateItem(curriculum.breakaways, { ...updated, id })) return false;
    saveCurriculum(curriculum);
    return true;
}
export function addBreakaway(newItem: Breakaway): Breakaway {
    const curriculum = getCurriculum();
    const added = addItem(curriculum.breakaways, newItem);
    saveCurriculum(curriculum);
    return added;
}
export function deleteBreakaway(id: number): boolean {
    const curriculum = getCurriculum();
    curriculum.breakaways = deleteItem(curriculum.breakaways, id);
    saveCurriculum(curriculum);
    return true;
}

// Weapon Defense
export function updateWeaponDefense(index: number, updatedDefense: WeaponDefense): boolean {
    const curriculum = getCurriculum();
    if (!updateItem(curriculum.weaponDefenses, updatedDefense)) return false;
    saveCurriculum(curriculum);
    return true;
}
export function addWeaponDefense(newDefense: WeaponDefense): boolean {
    const curriculum = getCurriculum();
    addItem(curriculum.weaponDefenses, newDefense);
    saveCurriculum(curriculum);
    return true;
}
export function deleteWeaponDefense(idToDelete: number): boolean {
    const curriculum = getCurriculum();
    const initialLength = curriculum.weaponDefenses.length;
    curriculum.weaponDefenses = deleteItem(curriculum.weaponDefenses, idToDelete);
    if (curriculum.weaponDefenses.length < initialLength) {
        saveCurriculum(curriculum);
        return true;
    }
    return false;
}
