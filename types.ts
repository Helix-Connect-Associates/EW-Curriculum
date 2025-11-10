
export interface Form {
    belt: string;
    name: string;
    video_url?: string;
    card_url?: string;
    steps: string[];
}

export interface Rotation {
    id: number;
    name: string;
    slug: string;
    months: string;
    forms: Form[];
}

export interface Takedown {
    id: number;
    child_belt: string;
    adult_belt: string;
    technique_right: string;
    technique_left: string;
    video_time: string;
    video_url: string;
}

export interface OneStep {
    id: number;
    belt: string;
    number: number;
    technique_right: string;
    technique_left: string;
    video_time: string;
    video_url: string;
}

export interface BoardBreak {
    child_belt: string;
    adult_belt: string;
    testing_for: string;
    break_technique: string;
}

export interface AdultProgram {
    rank: string;
    number: number;
    test_for: string;
    year: number;
    testing_hours: number;
    challenge: number;
    forms: string;
    belt_color: string;
}

export interface HighSchoolProgram {
    belt: string;
    number: number;
    form: string;
    belt_color: string;
}

export interface TestingData {
    board_breaks: BoardBreak[];
    adult_program: AdultProgram[];
    high_school_program: HighSchoolProgram[];
}
