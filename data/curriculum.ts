import { Rotation, Takedown, OneStep, TestingData } from '../types';

const highlight = (text: string, type: 'yellow' | 'cyan' | 'green' | 'magenta'): string => {
    const colors = {
        yellow: 'bg-yellow-200 text-black px-1 rounded',
        cyan: 'bg-cyan-200 text-black px-1 rounded',
        green: 'bg-green-200 text-black px-1 rounded',
        magenta: 'bg-pink-200 text-black px-1 rounded',
    };
    return `<span class="${colors[type]}">${text}</span>`;
};

export const rotations: Rotation[] = [
    {
        id: 1,
        name: "Rotation 1: January - March",
        slug: "rotation-1",
        months: "January - March",
        forms: [
            {
                belt: "White Belt",
                name: "Code of a Champion",
                video_url: "https://www.youtube.com/watch?v=U3mrS3_k3-E",
                card_url: "https://i.imgur.com/8f2p3aI.png",
                steps: [
                    `Fight Stance: Announce your form: ${highlight('Code of a Champion', 'yellow')}`,
                    `(${highlight('High Block', 'yellow')}) (R) Positive,`,
                    `(Inner Form Block) (R) Attitude, (Low Block) (R) Determination,`,
                    `(Step to the Left -Long Stance (R) Punch (R)) Perseverance`,
                    `The Goals we set (Inverted Chop (L)),`,
                    `Are the goals we get - ${highlight('Hands Up', 'yellow')} (${highlight('Front Kick (R)', 'cyan')} to Knee on ground (R) /Reverse Punch (R))`,
                    highlight('KIA', 'yellow'),
                ],
            },
            {
                belt: "Element",
                name: "Element",
                video_url: "https://www.youtube.com/watch?v=zJbYp_2dtT0",
                card_url: "https://i.imgur.com/gO0xO2c.png",
                steps: [
                    `${highlight('Bow / Ready Stance:', 'yellow')} X Stance`,
                    `${highlight('Universal:', 'yellow')} (Left Up/Right Down)`,
                    `(Turn (L) / Low Block (L)`,
                    `Reverse Punch (R)`,
                    `Inner Form Block (L)`,
                    `${highlight('Spin Hook (R)', 'cyan')}`,
                    `Step forward (L) ${highlight('Short Back Stance', 'green')}`,
                    `Step forward (R) ${highlight('TRIPLE ROUND HOUSE', 'magenta')}`
                ],
            },
        ],
    },
    {
        id: 2,
        name: "Rotation 2: April - June",
        slug: "rotation-2",
        months: "April - June",
        forms: [
            {
                belt: "White Belt",
                name: "Tidal Wave",
                video_url: "https://www.youtube.com/watch?v=U3mrS3_k3-E",
                card_url: "https://i.imgur.com/sWgrE2V.png",
                steps: [
                    `Fight Stance: Announce your form: ${highlight('Tidal Wave', 'yellow')}`,
                    `Step forward (L), ${highlight('Low Block', 'yellow')} (L), creating a wave-like motion.`,
                    `(${highlight('Rising Block', 'yellow')}) (R) as you shift weight back.`,
                    `Slide forward (L), ${highlight('Spear Hand', 'green')} (R) thrust to the solar plexus.`,
                    `Spin 180 degrees (L), ${highlight('Knife Hand Block', 'cyan')} (L).`,
                    `Step forward (R), ${highlight('Side Kick', 'magenta')} (R), then land in a ${highlight('Back Stance', 'green')}.`,
                    `Double Punch (L, R) to the body, ${highlight('KIA', 'yellow')}.`
                ],
            },
            {
                belt: "Element",
                name: "Phoenix Fire",
                video_url: "https://www.youtube.com/watch?v=zJbYp_2dtT0",
                card_url: "https://i.imgur.com/9bA6p6N.png",
                steps: [
                    `${highlight('Ready Stance:', 'yellow')} Crane Stance (L).`,
                    `Step out (L) to ${highlight('Horse Stance', 'green')}, Double ${highlight('Inner Forearm Block', 'yellow')}.`,
                    `Look (R), slide feet together, then step out (R) to ${highlight('Long Stance', 'green')}.`,
                    `(${highlight('High Block', 'yellow')}) (R), Reverse Punch (L).`,
                    `Pivot on front foot (R) into ${highlight('Short Back Stance', 'green')}, ${highlight('Elbow Strike', 'cyan')} (R) to the rear.`,
                    `${highlight('Jumping Front Kick', 'magenta')} (R), landing with a downward ${highlight('X-Block', 'yellow')}.`,
                    `Rise up, pulling hands to chamber, ${highlight('KIA', 'yellow')}.`
                ],
            },
        ]
    },
    {
        id: 3,
        name: "Rotation 3: July - September",
        slug: "rotation-3",
        months: "July - September",
        forms: [
            {
                belt: "White Belt",
                name: "Mountain's Strength",
                video_url: "https://www.youtube.com/watch?v=U3mrS3_k3-E",
                card_url: "https://i.imgur.com/1nL8gB6.png",
                steps: [
                    `Ready Stance: Announce form: ${highlight("Mountain's Strength", 'yellow')}`,
                    `Settle into a deep ${highlight('Horse Stance', 'green')}, hands in fists at hips.`,
                    `Slowly press out with a ${highlight('Double Palm Heel Strike', 'yellow')}.`,
                    `Step forward (R) into ${highlight('Long Stance', 'green')}, ${highlight('Downward Block', 'yellow')} (L).`,
                    `Shift weight back, ${highlight('Augmented Block', 'cyan')} (R).`,
                    `Stomp forward (L), ${highlight('Front Kick', 'magenta')} (R) followed by a ${highlight('Ridge Hand Strike', 'yellow')} (R).`,
                    `Return to ready stance, ${highlight('KIA', 'yellow')}.`
                ],
            },
            {
                belt: "Element",
                name: "Whispering Wind",
                video_url: "https://www.youtube.com/watch?v=zJbYp_2dtT0",
                card_url: "https://i.imgur.com/dK5zR6d.png",
                steps: [
                    `${highlight('Ready Stance:', 'yellow')} Feet together, hands open at sides.`,
                    `Circle hands up and down in a fluid motion.`,
                    `Step out (L) into ${highlight('Cat Stance', 'green')}, ${highlight('Circular Block', 'yellow')} (L).`,
                    `Quickly step forward (R), ${highlight('Spinning Crescent Kick', 'magenta')} (R).`,
                    `Land in ${highlight('Short Back Stance', 'green')}, ${highlight('Back Fist', 'cyan')} (L).`,
                    `Leap forward, landing softly, and execute a ${highlight('Sweeping Low Block', 'yellow')} (R).`,
                    `Finish with a final open-hand pose, ${highlight('KIA', 'yellow')}.`
                ],
            },
        ]
    },
    {
        id: 4,
        name: "Rotation 4: October - December",
        slug: "rotation-4",
        months: "October - December",
        forms: [
            {
                belt: "White Belt",
                name: "Silent Shadow",
                video_url: "https://www.youtube.com/watch?v=U3mrS3_k3-E",
                card_url: "https://i.imgur.com/k7jN2xC.png",
                steps: [
                    `Start in a low crouch. Announce form: ${highlight('Silent Shadow', 'yellow')}`,
                    `Step silently forward (L), ${highlight('Knife Hand Strike', 'yellow')} to the neck (R).`,
                    `Drop down, ${highlight('Leg Sweep', 'magenta')} (R).`,
                    `Roll forward and rise into a ${highlight('Fighting Stance', 'green')}.`,
                    `Execute a ${highlight('Double Punch', 'cyan')} combo (L-R).`,
                    `Disappear with a spin and ${highlight('Low Block', 'yellow')} (L).`,
                    `Final strike with a ${highlight('Palm Heel', 'yellow')} to the chin (R), ${highlight('KIA', 'yellow')}.`
                ],
            },
            {
                belt: "Element",
                name: "Lightning Fury",
                video_url: "https://www.youtube.com/watch?v=zJbYp_2dtT0",
                card_url: "https://i.imgur.com/rT3bS4o.png",
                steps: [
                    `${highlight('Ready Stance:', 'yellow')} Explosive tension, fists clenched.`,
                    `Burst forward (R), ${highlight('Triple Punch', 'cyan')} (R-L-R) at high speed.`,
                    `${highlight('Jumping Side Kick', 'magenta')} (L).`,
                    `Land in ${highlight('Long Stance', 'green')}, ${highlight('X-Block High', 'yellow')}.`,
                    `Spin into a ${highlight('Hammer Fist', 'yellow')} strike downwards (R).`,
                    `Unleash a rapid sequence of ${highlight('Roundhouse Kicks', 'magenta')} (L-R).`,
                    `End with a powerful shout and a final punch, ${highlight('KIA', 'yellow')}.`
                ],
            },
        ]
    },
];

export const takedowns: Takedown[] = [
    {
        id: 1,
        child_belt: "White",
        adult_belt: "White",
        technique_right: "#1 - Step forward (Left) High Block (Left), Grab on to the Wrist, Reverse Punch, Grab on to the Shoulder, Step Behind (right), Push Shoulder Takedown, Punch (Right)",
        technique_left: "#1 - Step forward (Right) High Block (Right), Grab on to the Wrist, Reverse Punch (Left), Grab on to the Shoulder, Step Behind (left), Push Shoulder Takedown, Punch (Left)",
        video_time: ":05",
        video_url: "https://youtu.be/ptK4dI78_LA?t=5"
    },
    {
        id: 2,
        child_belt: "Yellow",
        adult_belt: "Yellow",
        technique_right: "Roundhouse #1 (Basic) Grab with your left arm (overhook), reverse punch to the body (right), grab on to the shoulder (right), step behind with the right foot, take down, stomp the groin",
        technique_left: "Roundhouse #1 (Basic) Grab with your right arm (overhook), reverse punch to the body (left), grab on to the shoulder (left), step behind with the left foot, take down, stomp the groin",
        video_time: ":28",
        video_url: "https://youtu.be/ptK4dI78_LA?t=28"
    },
    {
        id: 3,
        child_belt: "Orange",
        adult_belt: "Orange",
        technique_right: "#2 - Step forward (Left) Inner form block (Left), Grab on to the wrist, reverse punch (right), grab on to the shoulder, foot sweep, take down, punch to the face.",
        technique_left: "#2 - Step forward (Right) Inner form block (Right), Grab on to the wrist, reverse punch (left), grab on to the shoulder, foot sweep, take down, punch to the face.",
        video_time: ":45",
        video_url: "https://youtu.be/ptK4dI78_LA?t=45"
    },
];

export const onesteps: OneStep[] = [
    {
        id: 1,
        belt: "White",
        number: 1,
        technique_right: "Step forward (left), High block (left), reverse punch (right)",
        technique_left: "Step forward (right), High block (right), reverse punch (left)",
        video_time: ":05",
        video_url: "https://www.youtube.com/watch?v=qldjJeRfABo&t=5"
    },
    {
        id: 2,
        belt: "Yellow",
        number: 2,
        technique_right: "Step forward (left), Inner Form block (left), reverse punch (right)",
        technique_left: "Step forward (right), Inner Form block (right), reverse punch (left)",
        video_time: ":15",
        video_url: "https://www.youtube.com/watch?v=qldjJeRfABo&t=15"
    },
    {
        id: 3,
        belt: "Orange",
        number: 3,
        technique_right: "Step forward (left), Outer Form block (left), reverse punch (right)",
        technique_left: "Step forward (right), Outer Form block (right), reverse punch (left)",
        video_time: ":25",
        video_url: "https://www.youtube.com/watch?v=qldjJeRfABo&t=25"
    }
];

export const testingData: TestingData = {
    board_breaks: [
        { child_belt: "White", adult_belt: "White", testing_for: "Yellow", break_technique: "Bottom Fist" },
        { child_belt: "Yellow", adult_belt: "Yellow", testing_for: "Orange", break_technique: "Hammer Fist" },
        { child_belt: "Orange", adult_belt: "Orange", testing_for: "Purple", break_technique: "Palm Heal" }
    ],
    adult_program: [
        { rank: "White Belt", number: 1, test_for: "Yellow", year: 1, testing_hours: 4, challenge: 50, forms: "Element", belt_color: "#F5F5F5" },
        { rank: "Yellow Belt", number: 2, test_for: "Orange", year: 1, testing_hours: 4, challenge: 100, forms: "Element", belt_color: "#FFD700" },
        { rank: "Orange Belt", number: 3, test_for: "Purple", year: 1, testing_hours: 4, challenge: 150, forms: "Element", belt_color: "#FF8C00" },
        { rank: "Purple Belt", number: 4, test_for: "Blue", year: 1, testing_hours: 4, challenge: 200, forms: "Element", belt_color: "#8B008B" },
    ],
    high_school_program: [
        { belt: "White", number: 1, form: "Element", belt_color: "#F5F5F5" },
        { belt: "Yellow", number: 2, form: "Element", belt_color: "#FFD700" },
        { belt: "Orange", number: 3, form: "Element", belt_color: "#FF8C00" },
    ]
};