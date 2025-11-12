export interface Form {
    belt: string;
    name: string;
    card_url?: string;
    video_url?: string;
    steps: string[];
}

export interface Rotation {
    id: number;
    slug: string;
    name: string;
    months: string;
    forms: Form[];
}

export interface Takedown {
    id: number;
    adult_belt: string;
    child_belt: string;
    technique_right: string;
    technique_left: string;
    video_url: string;
    video_time: string;
}

export interface OneStep {
    id: number;
    number: number;
    belt: string;
    technique_right: string;
    technique_left: string;
    video_url: string;
    video_time: string;
}

export interface Breakaway {
    id: number;
    grab: string;
    category: string;
    technique: string;
    video_url: string;
    video_time: string;
}

export interface WeaponDefense {
    id: number;
    weapon: string;
    strike: string;
    defense: string;
    finishing_move: string;
    video_url: string;
    video_time: string;
}

export interface LevelRequirement {
    level: string;
    first: string;
    last: string;
    form: string;
    take_down: string;
    one_step: string;
    challenge: string;
    hours: string;
}

export interface BoardBreak {
    child_belt: string;
    adult_belt: string;
    testing_for: string;
    break_technique: string;
}

export interface TestingData {
    level_requirements: LevelRequirement[];
    board_breaks: BoardBreak[];
}

export interface Curriculum {
    rotations: Rotation[];
    takedowns: Takedown[];
    onesteps: OneStep[];
    breakaways: Breakaway[];
    weaponDefenses: WeaponDefense[];
    testingData: TestingData;
}
