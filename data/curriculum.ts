import { Rotation, Takedown, OneStep, TestingData, Breakaway, WeaponDefense } from '../types';

export const rotations: Rotation[] = [
    {
      "id": 1,
      "name": "Rotation 1: January - March",
      "slug": "rotation-1",
      "months": "January - March",
      "forms": [
        {
          "belt": "White Belt",
          "name": "Code of a Champion",
          "video_url": "https://youtu.be/rQMQ6iytiE4?list=PLMuQpoSMBmsShi29nVBXzaOWHrwVM01PD&t=5",
          "card_url": "",
          "steps": [
	    "Fight Stance: Announce your form: Code of a Champion",
            "(High Block) (R) Positive,",
            "(Inner Form Block) (R) Attitude, (Low Block) (R) Determination,",
            "(Step to the Left -Long Stance (R) Punch (R)) Perseverance",
            "The Goals we set (Inverted Chop (L)),",
            "Are the goals we get - Hands Up (Front Kick (R) to Knee on ground (R) /Reverse Punch (R)) KIA",
            "Universal (Left Down, Right Up - Long Stance (L)",
            "(1.) Low Block (L) (2.) Inner Form Block (L) (3.) Reverse Punch (R) (4.) Hands Up - Roundhouse Kick (R)",
            "(5.) Unwind (6.) Chop (L) (7.) Punch (R) (8.) Hands Up - Front Kick (R) (9.) Reverse Punch (R)",
            "(10.) (R) Knee on Ground",
            "I am a Champion! (Arms Straight Up)",
            "BOW"
          ]
        },
        {
          "belt": "Element",
          "name": "Element",
          "video_url": "https://youtu.be/rQMQ6iytiE4?list=PLMuQpoSMBmsShi29nVBXzaOWHrwVM01PD&t=36",
          "card_url": "",
          "steps": [
            "Bow / Ready Stance: X Stance",
            "Universal: (Left Up/Right Down)",
            "(Turn (L) / Low Block (L)",
            "Reverse Punch (R)",
            "Inner Form Block (L)",
            "Spin Hook (R)",
            "Chop (L) / Reinforced Punch (R) / (L) Reinforces",
            "Universal: (Right Up/Left Down)",
            "Turn (R) / Low Block (R)",
            "Reverse Punch (L)",
            "Inner Form Block (R)",
            "Spin Hook (L)",
            "Chop (R) / Reinforced Punch (L) / (R) Reinforces",
            "Chamber (R)-((L) First Down- (R) Fist up)) / Double Punch Front/(L) / Low Block (L) / Palm Heel Strike (R)",
            "Hands Together",
            "Roundhouse (R)/ Step Up-Feet Together-Fight Stance / Side Kick (R) / Check / Low Block (L) / Pivot-Punch (R) / Step (L) Long Stance (R) Leg to Knife Hand Press (R)",
            "Horse Stance Punch, Punch",
            "Pivot / Long Stance (L) to Knife Hand Press (L) / Horse Stance Punch, Punch /",
            "Knife Universal to (R) Rear Fist Punch - Long Stance (L) / Step (L) Reinforced Back Knuckle (R) / (L) Reinforces",
            "Bow: X Stance"
          ]
        },
        {
          "belt": "Red Belt",
          "name": "Red Belt",
          "video_url": "https://youtu.be/rQMQ6iytiE4?list=PLMuQpoSMBmsShi29nVBXzaOWHrwVM01PD&t=90",
          "card_url": "",
          "steps": [
            "Bow / Ready Stance: X Stance",
            "Universal (Right Up-Down)",
            "Low Block (L) / Reverse Punch (R) / Palm Heel (L) / Reverse Punch (R) / Front Kick (R) / Punch (L) / Punch (R)",
            "Universal (Right Down-Left Up)",
            "Low Block (L) / Reverse Punch (R) / Palm Heel (L) / Reverse Punch (R) / Front Kick (R) / Punch (L) / Punch (R)",
            "Punch (L) / Punch (Forward/(R) / Elbow Strike (L) / Ridge Hand (R) / Roundhouse (R) / Unwind (Chop (L)-Punch (R))",
            "Universal: Straight Punch (L)-Straight Up Form Block (R) / Pivot / Press (R)-Fist Outward) / Punch (L), Punch (R)",
            "Chamber-(Each side on each hip) / Trap (L) / Side Kick (R) / Extend Arm (R) / Elbow Strike (L)",
            "Universal: Straight Punch (R)- Straight Up Form Block (L) / Pivot-Press (L)-Fist Outward) / Punch (R), Punch (L)",
            "Chamber-(Each side on each hip) / Trap (R) /  Side Kick (L) / Extend Arm (L) / Elbow Strike (R)",
            "Knife Universal: (Right Down-Left Up)",
            "Step Back / Step Back / Chop #1 / Chop #2 / Front Kick (R) / Scissor Front Kick (R) / Back Knuckle (R)",
            "Chamber-Turn Front / Short Back Stance-Knife Hand (L) / Step Back (R) / Open Hand High Block (L) / Palm Heel Strike (R)",
            "Spin Hook / Unwind (Chop (L), Punch (R))",
            "Bow: X Stance"
          ]
        },
	{
          "belt": "Advanced",
          "name": "KuShanKu",
          "video_url": "https://youtu.be/rQMQ6iytiE4?list=PLMuQpoSMBmsShi29nVBXzaOWHrwVM01PD&t=171",
          "card_url": "",
          "steps": [
            "Feet Apart / BOW (Hands to sides)",
	    "Ready Stance: Rising Sun",
            "Check (R) / Knife Hand (L) / Step (R) / Knife Hand (R) / Low Block (L) - Punch (R)",
            "Universal: (Right Down-Left Up) Inner Form Block (R) / Punch (L)",
            "Universal: (Right Up-Left Down) Inner Form Block (L) / Trap (L) / Side Kick (R) / Check–Cross Knife Stance (L)",
            "Step (R) together / Step (R) forward to Knife Hand (R) / Step (L) Forward to (L) Knife Hand / Step (R) to Straight Knife Strike",
            "Pivot to the Back: Chop #1 / Chop #2 / Front Kick (R) / Check / Front Stance/Low Block (L) /Inner Form Block (R) / Ankle Pick (R) / Feet Together / Punch (L) / Chamber (R)",
            "Knife Universal: (Right Down-Left Up)",
            "Chop #1 /Chop #2 / Front Kick (R) / Check / Front Stance/Low Block (L) /Inner Form Block (R) / Ankle Pick (R) / Feet Together / Punch (L) / Chamber (R)",
            "Trap (R) / Side Kick (L) / Elbow Stike/ Trap (L) / Side Kick (R) / Elbow Strike",
            "Cross Stance: Left Corner-Knife Hand (L) / Knife Hand (R)",
            "Cross Stance: Right Corner-Knife Hand (R) / Knife Hand (L)",
            "Knife Universal: (Right Up-Left Down)",
            "Step Back (L), Chop #1 Chop #2 / Front Kick (R) / Back Knuckle (R) Step Behind (L) / Unwind Back Knuckle (R) / Punch (L), Punch (R)",
            "Pivot to the Front: (Knee Up (R) Left Hand (Knife) Right Hand Fist) / Together (Palm and Side Punch) / Diamond to the ground",
            "Pivot to the Back: Cross Stance: Knife Hand (L) / Step (R) Feet Together / Knife Hand (R)",
            "Universal: Right Up-Left Down",
            "ROTATE left / Form Block (L) / Reverse Punch (R)",
            "Universal: Right Down-Left Up / Form Block (R) / Reverse Punch (L) / Feet Together-Trap (L) / Side Kick (R)",
            "Check (R) Forward-Knife Hand-Long Stance (R) / Step (R) (Feet Together) / Step (R) Forward / Reinforced Knife Hand (R) Strike / Open the hand (R) to (R) Shoulder",
            "Left Foot turns Left / Horse Stance Low Block (L) / High Block (L) / Step back (L) / Elbow Strike (R)",
            "Universal: (Right Up/Left Down) / Inner Form Block (L) - Low Block (R)",
            "rotate left/ Check / Low Block Knife (L) Under - Low Block Knife (R) On top / Knife Hands Crossing Together",
            "Rotate Right  / Knife Hands Up, Knife Hands Down to Chest (Make Fists) / Fight Stance-Scissor Kick (R) / Back Knuckle (R)",
            "Rotate (Left) Left Leg / Check (L) to Horse Stance / Cross Fists / Fists Together / Fists Apart",
            "Bow: Rising Sun / Feet Close / Bow"
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": "Rotation 2: April - June",
      "slug": "rotation-2",
      "months": "April - June",
      "forms": [
        {
          "belt": "White Belt",
          "name": "Principles of a Black Belt",
          "video_url": "https://youtu.be/KorPmXlowzM?t=4",
          "card_url": "",
          "steps": [
            "I am a dedicated student of the martial arts and live by the principles of Black Belts! OSS",
            "BOW / Ready Stance: X Stance",
			"Universal: Right Up / Left Down",
			"Step Forward (L)",
			"High Block (L), Reverse Punch (R)     MODESTY",
			"Hands Up - Front Kick (R)",
			"Scissor Front Kick (R)",
			"Punch (R)        COURTESY",
			"Roundhouse Kick (R)",
			"Hands Up        INTEGRITY",
			"Hook Kick, Round Kick         SELF CONTROL",
			"Check Cross Firsts to Horse Stance",
			"Fists towards inside of knees            PERSEVERANCE",
			"Punch (L), Punch (R)          INDOMIDABLE SPIRIT",
			"FIGHT STANCE",
			"What kind of school is this? Punch (L) / Punch (R) / Roundhouse (R))",
            "BLACK         BELT               SCHOOL         Ma’am!",
			"What’s our goal?  Salute to Head (R) / Arm Angled Down Knife Hand (R) / Hands Behind Back (Feet Apart)",
            "BLACK    BELT   EXCELLENCE        Ma’am!",
			"What are the 3 most powerful words?",
			"Hands to side / Point thumbs towards your chest / Arms Straight Up) / BOW",
			"YES  I        CAN!"
          ]
        },
        {
          "belt": "Element",
          "name": "High Bow",
          "video_url": "https://youtu.be/KorPmXlowzM?t=57",
          "card_url": "",
          "steps": [
            "Ready Stance: X Stance",
			"Universal: (Right Up/Left Down)",
			"High Block (L) / Reverse Punch (R) / Bow (L) / Bottom Fist (R)",
			"Universal: (Right Down/Left Up)",
			"High Block (R) / Reverse Punch (L) / Bow (R) / Bottom Fist (L)",
			"Ridge Hand Arm Angle Up (R) - Palm Up-Bent Knife Hand (L)",
			"Ridge Hand Arm Angle Down (L) - Palm Up-Bent Knife Hand (R)",
			"Pivot / Rotate: Inner Form (L), Low Block (R) / Rotate: Inner Form (R), Low Block (L)",
			"Hands Up - Ax Kick (R) / Switch Front Kick (L) / Pop Front Kick (R) / Unwind - Chop (L), Punch (R)",
			"Hands Up ",
			"Hook-Round-Low-High (R)",
			"Spin Hook (L)",
			"Unwind - Chop (L), Punch (R)",
			"Bow: X Stance"
          ]
        },
        {
          "belt": "Red Belt",
          "name": "Red Belt",
          "video_url": "https://youtu.be/KorPmXlowzM?t=98",
          "card_url": "",
          "steps": [
            "Universal Knife Hands: Left Up-Right Down / Step Back (L) / Chop #1 / Chop #2",
			"Hands Up - Front Kick (R) / Punch (L) / Punch (R)",
			"Universal Knife Hands: Left Up-Right Down / Step Back (L) / Chop #1 / Chop #2",
			"Hands Up - Front Kick (R) / Punch (L) / Punch (R)",
			"Chop (L) / Punch (R)",
			"Hands Up",
			"Roundhouse Kick (R)",
			"Unwind - Chop (L), Punch (R) to",
			"Universal: Straight Punch (L)-Straight Up Form Block (R) / Pivot / Press (R)-Fist Outward) / Punch (L) / Hands Up - Front Kick (L) / Lunge Punch (R) / (Punch (L)",
			"Universal: Straight Punch (R)-Straight Up Form Block (L) / Pivot / Press (L)-Fist Outward) / Punch (R) / Hands Up - Front Kick (R) / Lunge Punch (L) / (Punch (R)",
			"Chop (R), Punch (L)",
			"Hands Up",
			"Tornado (R) Leg",
			"Unwind - Chop (L), Punch (R)",
			"Bow: X Stance"
          ]
        },
		{
          "belt": "Advanced",
          "name": "Zombies",
          "video_url": "https://youtu.be/KorPmXlowzM?t=98",
          "card_url": "",
          "steps": [
            "Bow / Ready Stance: Knife Hand to (L) side of (L) Leg",
			"Chop (L) to Left Corner, Punch (R) to Left Corner",
			"Punch (L) to Left Corner - Knife Block (R) - Long Stance (L) Leg / 180* Rotation (R) - Palm Up",
			"Chop (R) to Right Corner, Punch (L) to Right Corner",
			"Chop (L) Forward, Punch (R) Forward",
			"Knife Hand to (R) side of (R) Leg",
			"Hands Up - Hook, Round, Low, High (R)",
			"Spin Hook (L)",
			"Tornado (L)",
			"Unwind - Chop (L), Punch (R)",
			"Punch (L), Punch (R), Step Back (R)",
			"Ax Kick (R)",
			"Spin Hook (R)",
			"Unwind - Chop (L), Punch (R)",
			"Front Kick (R)",
			"Scissor Front Kick (R)",
			"Jump Splits (Land: Long Stance (R), Punch (R), Knife Block (L)",
			"Chop (R) to Right Corner, Punch (L) to Right Corner, Inverted Chop (R) to Right Corner, Punch (L) to Right Corner",
			"Tornado (R) or Single Hand Cartwheel",
			"Land: Punch (R), Chop (L) to Left Corner",
			"Turn: Knife hand arms crossed straight up, Knife hands separate & come down to the sides (legs apart)",
			"Chop (R), Punch (L) to Left Corner",
			"Ax Kick (R) to Left Corner",
			"Switch Front Kick (L)",
			"Pop Front Kick (R)",
			"Universal: Right Down-Left Up to Long Stance (L), Low Block (L), Inner Form Block (R)",
			"Inner Form Block (L) to Left Corner, Punch (R) to Left Corner",
			"Punch (L) Straight",
			"Spin Hook (L)",
			"Tornado (L)",
			"Spin Hook (L)",
			"Unwind - Chop (R), Punch Left - Left Leg Long Stance - Right Leg Forward",
			"Close Stance"
          ]
        }
      ]
    },
    {
      "id": 3,
      "name": "Rotation 3: July - September",
      "slug": "rotation-3",
      "months": "July - September",
      "forms": [
        {
          "belt": "Student Creed",
          "name": "Student Creed",
          "video_url": "https://www.youtube.com/watch?v=Sq1KgAq1iPw&t=3s",
          "card_url": "",
          "steps": [
            "Feet together - Hands slightly bent to sides I will develop myself in a positive manner",
			"and avoid anything (Hands apart / Feet Apart)",
			"That could reduce (Minimize Thumb and Pointer)",
			"My mental growth (Point Index Fingers to Head)",
			"Physical health (Feet Together-Hands) to side then make muscles)",
			"I will develop (Point (R) Thumb to chest)",
			"self-discipline, (Feet Apart - Hands to back)",
			"in order, to bring out the best in myself (Point thumbs towards you twice)",
			"and in others (Slap hands by sides - Point away from you)",
			"I will use common sense ((R) pointer taps head twice)",
			"Before self-defense (Check, Fight Stance)",
			"and never (Wave (L) Pointer Finger)",
			"be abusive (Check, punch twice flat hand)",
			"or offensive (Check, Point (L) index finger)",
			"This is a black belt school (Point index fingers outward) 3x",
			"We strive for black belt excellence (Tug on Belt) 3x",
			"We are dedicated ((R) thumb on chest) (L arm on side slightly bent)",
			"We are motivated (L) thumb on chest) (R arm on side slightly bent)",
			"We are on a quest (R+L Thumbs on chest)",
			"To be our best (Arms angled up to the sides)",
			"Winners never quit (Wave (R) Index Finger) (L) Arm to side",
			"Quitters never win (Wave (L) Index Finger) (R) Arm to side",
			"I choose to be a winner (Arms angled up to the sides)"
          ]
        },
        {
          "belt": "White Belt",
          "name": "White Belt",
          "video_url": "https://youtu.be/Sq1KgAq1iPw?t=53",
          "card_url": "",
          "steps": [
            "Bow",
			"Ready Stance: X Stance",
			"(R) Leg Step Behind / Universal: (L) up /(R) Down",
			"Back Fist / Reverse Punch",
			"Hands Up",
			"Roundhouse Kick (R)",
			"Step Up",
			"High / Low / High   (TRIPLE ROUND HOUSE)",
			"Unwind: Chop (L), Punch (R) KIA        HIGH / LOW / HIGH",
			"Hands Up",
			"Front Kick (R)",
			"Drop to the Knee (R) KIA",
			"Ridge Hand (L)",
			"Reverse Punch (R)",
			"Knife Hand (L)-(L) Leg steps at the same time",
			"Reverse Punch (R)",
			"Ready Stance: Bow"
          ]
        },
		{
          "belt": "Element",
          "name": "Element",
          "video_url": "https://youtu.be/Sq1KgAq1iPw?t=79",
          "card_url": "",
          "steps": [
            "Ready Stance: X Stance",
			"Universal: (L) Up-(R) Down",
			"Low Block (L) / Reverse Punch (R) / Front Kick (R) / Universal: (R) Up-(L) Down / Low Block (R) / Reverse Punch (L)",
			"Turn Universal: (L) Down-(R) Up",
			"Low Block (L) / Reverse Punch (R) / Front Kick (R) / Universal: (R) Up-(L) Down / Low Block (R) / Reverse Punch (L)",
			"Chop (L), Pivot (L) leg slightly forward Punch (R)",
			"Chamber (R+L) to hips / Step (R) Corner (L) Leg long stance (Knifes straight forward crossing) Knife Hand (L) Chamber (R) Hand / Reverse Punch (R)",
			"Chamber (R+L) to hips / Step (L) Corner (R) Leg long stance (Knifes straight forward crossing) Knife Hand (R) Chamber (L) Hand / Reverse Punch (L)",
			"Punch (R)-Punch (L)",
			"Ready Stance: Bow"
          ]
        },
		{
          "belt": "Red Belt",
          "name": "Enpi",
          "video_url": "https://youtu.be/Sq1KgAq1iPw?t=110",
          "card_url": "",
          "steps": [
            "Ready Stance: Heels Touching, Feet Apart / (L) Hand Flat-(R)Hand Fist on LEFT side of Hip",
			"Announce your Form",
			"ENPI",
			"Universal: (R)Down-(L)Up",
			"Step (L) Low Block (L) / Feet Together (Fist-Palm (L)",
			"Universal: (R)Up-(L)Down",
			"Step (R) Low Block (R)",
			"Horse Stance- Feet Together (Fist-Palm (R)",
			"Low Block (L) / (R) Palm Heel Strike-Knife Hand Rotate Right / (L-Arm) Chamber-(R) Knee Up / Feet Together Universal: (R)Up-(L) Down / Low Block (Side Stance) (L)Arm Chambered",
			"Universal: (R)Down-(L)Up",
			"Low Block (L) / (R) Palm Heel Strike-Knife Hand Rotate Right / (L-Arm) Chamber-(R) Knee Up / Feet Together",
			"Universal: (R)Up-(L) Down / Low Block (Side Stance) (L)A Chambered",
			"Universal: (R)Down-(L)Up-Turn to the Front",
			"Low Block (L) - (R)A-Chambered - (R)Leg Long Stance",
			"Rotate (L)A and (L)Leg / Knife Hand (L)-Horse Stance / Check (R)Leg- ((L) Slaps (R)Fist-Up)",
			"Horse Stance / (L) Knife Hand / Punch (R) / Punch (L)",
			"Pivot (L)",
			"Low Block (L) / Reverse Punch (R)",
			"Long Stance (L) Leg -(L)Knife Hand Straight / (R) Knife Hand / (L) Knife Chamber",
			"Switch Feet (Half Horse Stance)- (L) Knife Hand - (R) Knife Chamber",
			"Reverse Punch (R)",
			"Step Forward (R)",
			"Long Stance (L) Leg -(L)Knife Hand Straight / (R) Knife Hand / (L) Knife Chamber",
			"Universal: (R)Down-(L)Up",
			"Low Block (L) / (R) Palm Heel Strike-Knife Hand Rotate Right / (L-Arm) Chamber-(R) Knee Up / Feet Together",
			"Universal: (R)Up-(L) Down / Low Block-Long Stance (L)A Chambered",
			"Universal: (L)Up-(R)Down",
			"(L) Low Block-(R) Long Stance-(L)A Chambered",
			"Arms out (Knives)",
			"(R)A Rotates 180 to Inverted Knife - (L)A Chambers",
			"Feet Together to Short Stance-Hands Chambered (Up Grip)",
			"(R) Leg Step Forward-(R)A Forward Up Grip to (L)A Down Grip-(L)Leg Long Stance",
			"(L) Leg Step Forward to (R), (L) Leg Step Forward Again to (L)Arm Up Grip-(R)Leg Long Stance-(R)A Down Grip",
			"(R) Leg Step Forward to (L), (R) Leg Step Forward Again to (R)Arm Up Grip-(L)Leg Long Stance-(L)A Down Grip",
			"Side Horse Stance / Low Block (R)",
			"Reach / Jump",
			"Land: Horse Stance / (R) Knife Hand - (L) Inverted Ridge Hand on Belly",
			"Step Back (R) Leg / Knife Hand (L)",
			"Feet Together / Fist and Palm Together",
			"Bow"
          ]
        },
		{
          "belt": "Advanced",
          "name": "Advanced",
          "video_url": "https://youtu.be/Sq1KgAq1iPw?t=306",
          "card_url": "",
          "steps": [
            "Ready Stance: FORMAL",
			"Backfist (L) / Reverse Punch (R) / Low High (R), Low (R), Side (R) / Check (R) / Knife Hand (R)",
			"Chop (L) / Chop (L) to Shoulder-(R) Punch / Chop (R), Punch (L)-(L)A Chambers",
			"Low (L), High (L), Low (L), Side (L)-(L)A Punch Out",
			"Check (L) / Knife Hand (L)",
			"Chop (L) / Chop (L) to Shoulder-(R) Punch / Chop (R), Punch (L)-(L)A Chambers",
			"Elbow",
			"Block(s) (R) Low Block-(L) Inner Form Block",
			"Chamber Both Hands",
			"Turn",
			"Arms Up (Knives) / Arms Down (Knifes)",
			"Side Kick (R)-(R) Arm Punches",
			"Check (Fists)",
			"(L) Long Front Stance-(R)A Inner Form Block",
			"(L) Inner Form Block",
			"Punch (R)",
			"Punch (L) / (R)A High Knife Block",
			"Universal: Short Stance (R)Up-(L)Down",
			"Low Block Knife Hand (R)", 
			"Step (L) Knife Hand (L)",
			"Step Back (L)-Palm Down (R) / Forward Step (L) / (L) Reverse Punch",
			"Universal: Short Stance (R)Down-(L)Up",
			"Low Block Knife Hand (L)", 
			"Step (R) Knife Hand (R)",
			"Step Back (R)-Palm Down (L) / Forward Step (R) / (R) Reverse Punch",
			"Chamber Both Hands",
			"Turn",
			"Universal: Short Stance Knife Hand (L)",
			"Step Back (R) / Open Hand Block (L) Palm Facing Away / Palm Heel (R) / Punch (L), Punch (R)",
			"Step Slightly (R)",
			"Spin Hook",
			"Check / Low Horse Stance-(L) Knife Hand",
			"Chop (L), Punch",
			"Check (R) - Angled Horse Stance (Right Corner Facing) / Knife Hand / Chop (L), Punch (R)",
			"Check (R) - First Crossed",
			"Double Low Block to Horse Stance",
			"Universal (L) Knife Hand / Universal (R) Knife Hand (R)",
			"Fist together Crossed",
			"Double Low Block",
			"Step Forward (L) / Chop (L), Punch (R)",
			"KIA",
			"Ready Stance: FORMAL"
          ]
        }
      ]
    },
    {
      "id": 4,
      "name": "Rotation 4: October - December",
      "slug": "rotation-4",
      "months": "October - December",
      "forms": [
        {
          "belt": "White Belt",
          "name": "White Belt",
          "video_url": "https://youtu.be/fRWbxu2BJKo?t=5",
          "card_url": "",
          "steps": [
            "Right arm pointing up, left arm pointing down",
			"Rotate to Ready Stance",
			"Right Knife Hand Up / Left Knife Hand Down to (L) Inner Form Block (R) Chamber",
			"Step Forward (L) / Universal: (L) Up-(R) Down / Low Block (L) / Reverse Punch (R) / Punch (L) / Punch (R)",
			"Shoulder Chop (R)-Turn Flat Side, Elbow Strike (L)",
			"Step Back (L) Shoulder Chop (L)-Turn Flat Side, Elbow Strike (R)",
			"Chop (R), Punch (L) / Step Up (R) / Hands Up / Double Roundhouse / Unwind: Chop (L)-Punch (R)",
			"Bow"
          ]
        },
        {
          "belt": "Element",
          "name": "Element",
          "video_url": "https://youtu.be/fRWbxu2BJKo?t=30",
          "card_url": "",
          "steps": [
            "Right arm pointing up, left arm pointing down",
			"Rotate to Ready Stance",
            "Universal: (R) Up-(L) Down",
			"Step (L) Leg Back",
			"Inner Form Block (L) /Reverse Punch (R) / Half Bow (L)-Chamber (R) /Feet Together (L) Rotate Flat Hand",
			"Roundhouse (L) / Elbow Strike (R)",
			"Universal: (R) Down-(L) Up",
			"Inner Form Block (R) /Reverse Punch (L) / Half Bow (R)-Chamber (L) /Feet Together (R) Rotate Flat Hand",
			"Roundhouse (R) / Elbow Strike (L)",
			"Chop (L), Under Chop (R) KIA",
			"Spin Hook (R)",
			"Land: Chop (L), Punch (R)",
			"Ready Stance"
          ]
        },
		{
          "belt": "Red Belt",
          "name": "Demo Form",
          "video_url": "https://youtu.be/fRWbxu2BJKo?t=62",
          "card_url": "",
          "steps": [
            "BOW",
			"Ready Stance: X Stance",
			"Universal: (R)Down-(L)Up",
			"Left Corner: Chop (L), Punch (R), Punch (L), Punch (R)",
			"Right Corner: Chop (R), Punch (L), Punch (R), Punch (L)",
			"Chop (L) Forward, Reverse Punch (R) Forward - KIA",
			"Feet Together / Low Knife Block (R) to side",
			"Hands Up",
			"Double Round",
			"Tornado",
			"Unwind: Chop (R), Punch (L)",
			"Punch (R), Punch (L) While stepping back / High Block (L) / Reverse Punch (R)",
			"Ax Kick (R)",
			"Spin Hook (R)",
			"Chop (L), Punch (R)",
			"Ready Stance"
          ]
        },
		{
          "belt": "Advanced",
          "name": "Zombies - Training",
          "video_url": "https://www.youtube.com/watch?v=EVgG_C8wuow",
          "card_url": "",
          "steps": [
            "See Video"
          ]
        },
		{
          "belt": "Advanced",
          "name": "Zombies - with Music",
          "video_url": "https://drive.google.com/file/d/1x3bhWK4VSbiqC5Eb7QBxEZjgDJU3AC12/view?usp=sharing",
          "card_url": "",
          "steps": [
            "See Video"
          ]
        }
      ]
    }
];

export const takedowns: Takedown[] = [
    {
      "id": 1,
      "child_belt": "White",
      "adult_belt": "White",
      "technique_right": "#1: Step forward (Left) High Block (Left), Grab on to the Wrist, Reverse Punch, Grab on to the Shoulder, Step Behind (right), Push Shoulder Takedown, Punch (Right)",
      "technique_left": "#1:  Step forward (Right) High Block (Right), Grab on to the Wrist, Reverse Punch (Left), Grab on to the Shoulder, Step Behind (left), Push Shoulder Takedown, Punch (Left)",
      "video_time": ":05",
      "video_url": "https://youtu.be/ptK4dI78_LA?t=5"
    },
    {
      "id": 2,
      "child_belt": "Yellow",
      "adult_belt": "Yellow",
      "technique_right": "Roundhouse #1 (Basic): Step aside, grab with your left arm (overhook), reverse punch to the body (right), grab on to the shoulder (right), step behind with the right foot, take down, stomp the groin",
      "technique_left": "Roundhouse #1 (Basic): Step aside grab with your right arm (overhook), reverse punch to the body (left), grab on to the shoulder (left), step behind with the left foot, take down, stomp the groin",
      "video_time": ":28",
      "video_url": "https://youtu.be/ptK4dI78_LA?t=28"
    },
    {
      "id": 3,
      "child_belt": "Yellow",
      "adult_belt": "Yellow",
      "technique_right": "Roundhouse #2 (Bow):  Step aside grab with your left hand (overhook), reverse punch to the body (right), grab with your right hand (underhook), pivot to your left (bow)",
      "technique_left": "Roundhouse #2 (Bow):  Step aside grab with your right hand (overhook), reverse punch to the body (left), grab with your left hand (underhook), pivot to your right (bow)",
      "video_time": ":45",
      "video_url": "https://youtu.be/ptK4dI78_LA?t=45"
    },
	{
      "id": 4,
      "child_belt": "Yellow",
      "adult_belt": "Yellow",
      "technique_right": "Roundhouse #3 (Drag): Step aside grab with your left hand (overhook), reverse punch (right), grab on to wrist, pull down, pivot to your right.",
      "technique_left": "Roundhouse #3 (Drag): Step grab with your right hand (overhook), reverse punch (left), grab on to wrist, pull down, pivot to your right.",
      "video_time": ":60",
      "video_url": "https://youtu.be/ptK4dI78_LA?t=60"
    },
	{
      "id": 5,
      "child_belt": "Yellow/Black",
      "adult_belt": "Yellow",
      "technique_right": "Drop n' Flop: Break arm grab by bringing arms go up in the middle, grab shirt (Pinky's up), sit with your bottom, feet like a V on hips kick them over",
      "technique_left": "",
      "video_time": "1:16",
      "video_url": "https://youtu.be/D7BNyHLJyng?t=76"
    },
	{
      "id": 6,
      "child_belt": "Orange",
      "adult_belt": "Orange",
      "technique_right": "Single Leg Sweep: Level change, left hand on hip, left leg between, right hand behind the ankle, push left hand, pick up right hand, drive forward, step to the side.",
      "technique_left": "Single Leg Sweep: Level change, right hand on hip, right leg between, left hand behind the ankle, push right hand, pick up left hand, drive forward, step to the side.",
      "video_time": "1:33",
      "video_url": "https://youtu.be/D7BNyHLJyng?t=93"
    },
	{
      "id": 7,
      "child_belt": "Orange/Black",
      "adult_belt": "Orange",
      "technique_right": "Double Leg Sweep: Level change, left ear to the hip, grab behind both knees, push knees together and pull them toward you while thrusting forward with your shoulder, take them down stepping to the opposite side as head punch to the stomach.",
      "technique_left": "Double Leg Sweep: Level change, right ear to the hip, grab behind both knees, push knees together and pull them toward you while thrusting forward with your shoulder, take them down stepping to the opposite side as head punch to the stomach.",
      "video_time": "1:48",
      "video_url": "https://youtu.be/D7BNyHLJyng?t=108"
    },
	{
      "id": 8,
      "child_belt": "Purple",
      "adult_belt": "Purple",
      "technique_right": "Bear Hug (Under Arms Between Leg):  Elbow strike, elbow strike, grab leg in between, pull up",
      "technique_left": "Bear Hug (Under Arms Between Leg):  Elbow strike, elbow strike, grab leg in between, pull up",
      "video_time": "2:03",
      "video_url": "https://youtu.be/D7BNyHLJyng?t=123"
    },
	{
      "id": 9,
      "child_belt": "Purple",
      "adult_belt": "Purple",
      "technique_right": "Bear Hug (Double Leg): step aside, strike to the groin, step behind with your right foot, arms to the front, grab the knees, lift up, take down",
      "technique_left": "Bear Hug (Double Leg): step aside, strike to the groin, step behind with your left foot, arms to the front, grab the knees, lift up, take down",
      "video_time": "2:17",
      "video_url": "https://youtu.be/D7BNyHLJyng?t=137"
    },
	{
      "id": 10,
      "child_belt": "Purple/Black",
      "adult_belt": "Purple/Black",
      "technique_right": "Hip Toss:   Knife hand block with left hand, grab wrist, reverse punch to body, underhook right arm behind back pin other arm against your chest, step behind, hips under, toss",
      "technique_left": "Hip Toss:  Knige hand block with right hand, grab wrist, reverse punch to body, underhook left arm behind back pin other arm against your chest, step behind, hips under, toss",
      "video_time": "2:34",
      "video_url": "https://youtu.be/D7BNyHLJyng?t=154"
    },
	{
      "id": 11,
      "child_belt": "Purple/Black",
      "adult_belt": "Purple/Black",
      "technique_right": "Rousey Hip Toss: (strikers left foot forward) Knife Hand Block with your left hand, strike to the stomach, step between the legs, underhook (right) behind back, pivot on hip, take down",
      "technique_left": "Rousey Hip Toss: (strikers right foot forward) Knife Hand Block with your right hand, strike to the stomach left, step between the legs, underhook (left) behind back, pivot on hip, take down",
      "video_time": "2:52",
      "video_url": "https://youtu.be/D7BNyHLJyng?t=172"
    },
	{
      "id": 12,
      "child_belt": "Blue",
      "adult_belt": "Blue",
      "technique_right": "Twist Takedown: Knife hand press block (left), strike to the face (right), elbow strike (right), underhook with left arm, right arm behind the head, twist, take down, chop to the stomach",
      "technique_left": "Twist Takedown: Knife hand press block (right), strike to the face (left), elbow strike (left), underhook with right arm, left arm behind the head, twist, take down, chop to the stomach",
      "video_time": "3:15",
      "video_url": "https://youtu.be/D7BNyHLJyng?t=195"
    },
	{
      "id": 13,
      "child_belt": "Blue/Black",
      "adult_belt": "Blue/Black",
      "technique_right": "Front Kick: step forward (left), underhook (right),  grab partners wrist, step behind with right foot, take them down",
      "technique_left": "Front Kick: step forward (right), underhook (left),  grab partners wrist, step behind with right foot, take them down",
      "video_time": "3:34",
      "video_url": "https://youtu.be/D7BNyHLJyng?t=214"
    },
	{
      "id": 14,
      "child_belt": "Blue/Black",
      "adult_belt": "Blue/Black",
      "technique_right": "Spin Hook Kick: step to the left blocking high and underhook (right), grab partners right arm, feet together, sweep out back leg",
      "technique_left": "Spin Hook Kick: step to the right blocking high and underhook (left), grab partners left arm, feet together, sweep out back leg",
      "video_time": "3:47",
      "video_url": "https://youtu.be/D7BNyHLJyng?t=227"
    },
	{
      "id": 15,
      "child_belt": "Green",
      "adult_belt": "Green",
      "technique_right": "Universal #1:  Universal (push block left) strike (right), arm goes up (right), bottom fist to groin (left), pivot, ridge hand (left), choke ",
      "technique_left": "Universal #1:  Universal (push block right) strike (left), arm goes up (left), bottom fist to groin (right), pivot, ridge hand (right), choke ",
      "video_time": "4:00",
      "video_url": "https://youtu.be/D7BNyHLJyng?t=240"
    },
	{
      "id": 16,
      "child_belt": "Green",
      "adult_belt": "Green",
      "technique_right": "Universal #2:  Universal {push block left) strike (right), arm goes up (right), koken (left), step up, grab on to shoulder, left leg push down behind knee, rear naked choke",
      "technique_left": "Universal #2:  Universal (push block right) strike (left), arm goes up (left), koken (right), step up, grab on to shoulder, right leg push down behind knee, rear naked choke",
      "video_time": "4:16",
      "video_url": "https://youtu.be/D7BNyHLJyng?t=256"
    },
	{
      "id": 17,
      "child_belt": "Red",
      "adult_belt": "Red",
      "technique_right": "Red Belt: Knife hand press block (left), grab wrist (left), reverse punch (right), underhook the arm (right), fold it over, wrist lock, take down",
      "technique_left": "Red Belt: Knife hand press block (right), grab wrist (right), reverse punch (left), underhook the arm (left), fold it over, wrist lock, take down",
      "video_time": "4:34",
      "video_url": "https://youtu.be/D7BNyHLJyng?t=274"
    },
	{
      "id": 18,
      "child_belt": "Red/Black",
      "adult_belt": "Red/Black",
      "technique_right": "Red/Black:  Step forward (left), reverse high block (right arm), grab wrist (right), round house kick (right) land behind, inverted ridge hand (grab other wrist), fold it over, take down",
      "technique_left": "Red/Black:  Step forward (right), reverse high block (left arm), grab wrist (left), round house kick (left) land behind, inverted ridge hand (grab other wrist), fold it over, take down",
      "video_time": "4:49",
      "video_url": "https://youtu.be/D7BNyHLJyng?t=289"
    },
	{
      "id": 19,
      "child_belt": "Brown",
      "adult_belt": "Brown",
      "technique_right": "Rear Naked Choke: Grab with both hands, elbow strike (left),  step back with right foot, take down",
      "technique_left": "Rear Naked Choke: Grab with both hands, elbow strike (right),  step back with left foot, take down",
      "video_time": "5:06",
      "video_url": "https://youtu.be/D7BNyHLJyng?t=306"
    },
	{
      "id": 20,
      "child_belt": "Brown/Black and Above",
      "adult_belt": "Brown/Black and Above",
      "technique_right": "Left Leg Roundhouse:  Overhook with right arm, reverse punch to the body (left), switch to an overhook with your left arm, elbow strike, grab behind the head, right knee to the ground, take down",
      "technique_left": "Right Leg Roundhouse:  Overhook with left arm, reverse punch to the body (right), switch to an overhook with your right arm, elbow strike, grab behind the head, left kneed to the ground, take down",
      "video_time": "5:25",
      "video_url": "https://youtu.be/D7BNyHLJyng?t=325"
    },
	{
      "id": 21,
      "child_belt": "Brown/Black and Above",
      "adult_belt": "Brown/Black and Above",
      "technique_right": "Ear Bop n' Drop: Arms go up to break hold, pop the ears, grab the head, knee to stomach, knee to head,  step forward with right foot, pivot around, right hand underhook behind head stepping to the left side, right knee down, take down",
      "technique_left": "Ear Bop n' Drop: Arms go up, pop the ears, grab the head, knee to stomach, knee to head,  step forward with left foot, pivot around, left hand underhook behind head stepping to the right side, left knee down, take down",
      "video_time": "5:41",
      "video_url": "https://youtu.be/D7BNyHLJyng?t=341"
    },
	{
      "id": 22,
      "child_belt": "Brown/Black and Above",
      "adult_belt": "Brown/Black and Above",
      "technique_right": "Knee Down, Hook Around:  Level change, left knee hits the floor, right leg hooks around, left ear to the hip, drive through, land in side control",
      "technique_left": "Knee Down, Hook Around:  Level change, right knee hits the floor, left leg hooks around, left ear to the hip, drive through, land in side control",
      "video_time": "6:01",
      "video_url": "https://youtu.be/D7BNyHLJyng?t=361"
    },
	{
      "id": 23,
      "child_belt": "Brown/Black and Above",
      "adult_belt": "Brown/Black and Above",
      "technique_right": "Scissor:  (Back stance)Right arm inner form block (right), overhook (right), elbow strike (left), hands on the floor, feet up around hips (left to front, right to back), twist backward, take down",
      "technique_left": "Scissor:  (Back stance) Left arm inner form block, overhook (left), elbow strike (right), hands on the floor, feet up around hips (right to front, left to back), twist backward, take down",
      "video_time": "6:17",
      "video_url": "https://youtu.be/D7BNyHLJyng?t=377"
    },
	{
      "id": 24,
      "child_belt": "Brown/Black and Above",
      "adult_belt": "Brown/Black and Above",
      "technique_right": "Advanced Twist:  Left hand iron palm, swing underneath for underhook grabbing bicep, strike (right), hand behind head (right), knee, knee, twist, chop",
      "technique_left": "Advanced Twist:  Right hand iron palm, swing underneath for underhook grabbing bicep, strike (left), hand behind head (left), knee, knee, twist, chop",
      "video_time": "6:33",
      "video_url": "https://youtu.be/D7BNyHLJyng?t=393"
    },
	{
      "id": 25,
      "child_belt": "Brown/Black and Above",
      "adult_belt": "Brown/Black and Above",
      "technique_right": "Dragon Tail:  Universal (push block left) strike, arm goes up, koken stepping to the side, go down to your left knee, sweep around (right), take down",
      "technique_left": "Dragon Tail:  Universal (push block right) strike (left), arm goes up (left), koken (right) stepping to the side, go down to your right knee, sweep around (left), take down",
      "video_time": "6:53",
      "video_url": "https://youtu.be/D7BNyHLJyng?t=413"
    },
	{
      "id": 26,
      "child_belt": "Black Belt",
      "adult_belt": "Black Belt",
      "technique_right": "All Right and Left",
      "technique_left": "",
      "video_time": "",
      "video_url": ""
    }
	
];

export const onesteps: OneStep[] = [
    {
      "id": 1,
      "belt": "White",
      "number": 1,
      "technique_right": "Step forward (left), High block (left), reverse punch (right)",
      "technique_left": "Step forward (right), High block (right), reverse punch (left)",
      "video_time": ":05",
      "video_url": "https://www.youtube.com/watch?v=qldjJeRfABo&t=5"
    },
    {
      "id": 2,
      "belt": "",
      "number": 2,
      "technique_right": "Step forward (left), Reverse high block (right), roundhouse kick (right)",
      "technique_left": "Step forward (right), Reverse high block (left), roundhouse kick (left)",
      "video_time": ":18",
      "video_url": "https://www.youtube.com/watch?v=qldjJeRfABo&t=18"
    },
    {
      "id": 3,
      "belt": "",
      "number": 3,
      "technique_right": "Step forward (left), Reverse high block (right) grab wrist round house kick twist arm side kick into armpit (right)",
      "technique_left": "Step forward (right), Reverse high block (left) grab wrist round house kick twist arm side kick into armpit (left)",
      "video_time": ":32",
      "video_url": "https://www.youtube.com/watch?v=qldjJeRfABo&t=32s"
    },
	{
      "id": 4,
      "belt": "",
      "number": 4,
      "technique_right": "Jump front kick left leg",
      "technique_left": "Jump front kick left right",
      "video_time": ":49",
      "video_url": "https://www.youtube.com/watch?v=qldjJeRfABo&t=49s"
    },
	{
      "id": 5,
      "belt": "",
      "number": 5,
      "technique_right": "Jump crescent kick, left leg",
      "technique_left": "Jump crescent kick, right leg",
      "video_time": ":57",
      "video_url": "https://www.youtube.com/watch?v=qldjJeRfABo&t=57s"
    },
	{
      "id": 6,
      "belt": "",
      "number": 6,
      "technique_right": "Jump 45 degrees to left roundhouse kick right leg",
      "technique_left": "Jump 45 degrees to left roundhouse kick left leg",
      "video_time": ":63",
      "video_url": "https://www.youtube.com/watch?v=qldjJeRfABo&t=63s"
    },
	{
      "id": 7,
      "belt": "",
      "number": 7,
      "technique_right": "Step left foot, skip, right sidekick to kidney",
      "technique_left": "Step right foot, skip, left sidekick to kidney",
      "video_time": ":71",
      "video_url": "https://www.youtube.com/watch?v=qldjJeRfABo&t=71s"
    },
	{
      "id": 8,
      "belt": "",
      "number": 8,
      "technique_right": "Step back right foot, inner press block (left), spin sidekick (left)",
      "technique_left": "Step back left foot, inner press block (right), spin sidekick (left)",
      "video_time": ":81",
      "video_url": "https://www.youtube.com/watch?v=qldjJeRfABo&t=81s"
    },
	{
      "id": 9,
      "belt": "",
      "number": 9,
      "technique_right": "Step back right foot, iron palm down (left), spinning crescent to face (right)",
      "technique_left": "Step back right foot, iron palm down (right), spinning crescent to face (left)",
      "video_time": ":91",
      "video_url": "https://www.youtube.com/watch?v=qldjJeRfABo&t=91s"
    },
	{
      "id":10,
      "belt": "",
      "number":10,
      "technique_right": "Step back left leg, inner press block (right), spinning back kick left leg",
      "technique_left": "Step back left leg, inner press block (left), spinning back kick right leg",
      "video_time": "1:44",
      "video_url": "https://www.youtube.com/watch?v=qldjJeRfABo&t=104s"
    },
	{
      "id":11,
      "belt": "",
      "number": 11,
      "technique_right": "Step back right leg, Iron palm (left), spin hook kick (right)",
      "technique_left": "Step back right leg, Iron palm (right), spin hook kick (left)",
      "video_time": "1:54",
      "video_url": "https://www.youtube.com/watch?v=qldjJeRfABo&t=114s"
    },
	{
      "id":12,
      "belt": "",
      "number":12,
      "technique_right": "Step back right foot, inner press block (left), spin sidekick (left) (JUMP)",
      "technique_left": "Step back left foot, inner press block (right), spin sidekick (left) (JUMP)",
      "video_time": "",
      "video_url": ""
    },
	{
      "id":13,
      "belt": "",
      "number":13,
      "technique_right": "Step back right foot, iron palm down (left), spinning crescent to face (right) (JUMP)",
      "technique_left": "Step back right foot, iron palm down (right), spinning crescent to face (left) (JUMP)",
      "video_time": "",
      "video_url": ""
    },
	{
      "id":14,
      "belt": "",
      "number":14,
      "technique_right": "Step back left leg, inner press block (right), spinning back kick left leg (JUMP)",
      "technique_left": "Step back left leg, inner press block (left), spinning back kick right leg (JUMP)",
      "video_time": "",
      "video_url": ""
    },
	{
      "id":15,
      "belt": "",
      "number":15,
      "technique_right": "Step back right leg, Iron palm (left), spin hook kick (right) (JUMP)",
      "technique_left": "Step back right leg, Iron palm (right), spin hook kick (left) (JUMP)",
      "video_time": "",
      "video_url": ""
    },
];

export const breakaways: Breakaway[] = [
    { id: 1, category: 'Breakaway', grab: 'Straight Grab', technique: 'Step Forward (right), Thumb Up, Make a Fist, Straight Up', video_url: 'https://youtu.be/iEOygtRUHqw?t=5', video_time: ':05' },
    { id: 2, category: 'Breakaway', grab: 'Top Grab', technique: 'Step in (right), Step Around (left), pull aside with thumb', video_url: 'https://youtu.be/iEOygtRUHqw?t=19', video_time: ':19' },
	{ id: 3, category: 'Breakaway', grab: 'Cross Grab', technique: 'Circle hand over top, grab wrist, pull across body.', video_url: 'https://youtu.be/iEOygtRUHqw?t=34', video_time: ':34' },
    { id: 4, category: 'Breakaway', grab: 'Cross Grab', technique: 'Cricle, Grab Wrist, Twist, Hand on Shoulder\\Elbow, Push to Floor.', video_url: 'https://youtu.be/iEOygtRUHqw?t=52', video_time: ':52' },
	{ id: 1, category: 'Escape', grab: 'Bear Hug #1 - Over Arms', technique: 'Clap, push, elbow, elbow, side kick', video_url: '', video_time: '' },
    { id: 2, category: 'Escape', grab: 'Bear Hug #2 - Under Arms', technique: 'Elbow strike, elbow strike, grab leg in between, pull up.', video_url: '', video_time: '' },
	{ id: 3, category: 'Escape', grab: 'Bear Hug #3 - Over Arms', technique: 'step aside, strike to the groin, step behind with your right foot, arms to the front, grab the knees, lift up, take down.', video_url: '', video_time: '' },
	{ id: 4, category: 'Escape', grab: 'Bear Hug #4 - Over Arms', technique: 'Figure 4 under arms, break lock, conver to kimura', video_url: '', video_time: '' },
	{ id: 5, category: 'Escape', grab: 'Headlock #1', technique: 'Turn head into body, push out', video_url: 'https://youtu.be/6Qomuw8tQPU?t=3', video_time: ':03' },
	{ id: 6, category: 'Escape', grab: 'Headlock #2', technique: 'Turn head into body, groin strike, reach over shoulder under chin (left) push head back', video_url: '', video_time: ':' },
	{ id: 7, category: 'Escape', grab: 'Headlock #3', technique: 'Turn head into body, groin strike, reach over shoulder under chin (left) push head back while pushing hand behind knee (right)', video_url: 'https://youtu.be/6Qomuw8tQPU?t=26', video_time: ':26' },
	{ id: 8, category: 'Escape', grab: 'Front Choke #1', technique: 'Pluck, Groin Kick, Elbow Strike', video_url: 'https://youtu.be/qdjqbwzSi2U?t=5', video_time: ':05' },
	{ id: 9, category: 'Escape', grab: 'Front Choke #2', technique: 'Reach Over, Trap, Come Up, Break Arm, Elbow Strike', video_url: 'https://youtu.be/qdjqbwzSi2U?t=18', video_time: ':18' },
	{ id:10, category: 'Escape', grab: 'Front Choke #3', technique: 'Pin Hand Down, Step Back, Right Hand Palm Heal Strike', video_url: 'https://youtu.be/qdjqbwzSi2U?t=32', video_time: ':32' },
	{ id:11, category: 'Escape', grab: 'Front Choke #4', technique: 'Swim Escape', video_url: 'https://youtu.be/qdjqbwzSi2U?t=42', video_time: ':42' }
];

export const weaponDefenses: WeaponDefense[] = [
    { id: 1, weapon: 'Knife', strike: 'Cross Strike', defense: 'From Block-Left, Shoulder block-right, punch to the face, elbow to the head, knee, cross your arm over by the elbow, break the elbow to a Kimura.', finishing_move: 'Disarm and ground opponent', video_url: '', video_time: '' },
    { id: 2, weapon: 'Knife', strike: 'Cross Strike', defense: 'From Block-Left, Shoulder block-right, punch to the face, elbow to the head, knee, cross your arm over by the elbow, figure 4 from right to left just above the elbow, thumb up, armbar.', finishing_move: 'Joint lock and disarm', video_url: '', video_time: '' },
    { id: 3, weapon: 'Knife', strike: 'Underhand Attack ', defense: 'Cross hand block-right over left, place thumb on pressure point on hand, move toward your left, twist wrist to wrist lock to open up the shoulder, kick to the face.', finishing_move: '', video_url: '', video_time: '' },
    { id: 4, weapon: 'Knife', strike: 'Low side strike', defense: 'Low block, slide hand around underneath to grip trapping elbow (knife should be trapped outside near your elbow), elbow strike,knee strike, grab toward the wrist, take away the knife.', finishing_move: 'Joint lock and disarm', video_url: '', video_time: '' },		
    { id: 5, weapon: 'Knife', strike: 'Double Slash', defense: 'Step back then in, grab right hand on outside of wrist, left hand on outside of shoulder at the armpit, twist to bring them down to the ground.', finishing_move: '', video_url: '', video_time: '' },
    { id: 6, weapon: 'Knife', strike: 'High Strike', defense: 'cross hand block above head right over left, step to the side stab in the leg .', finishing_move: 'Joint lock and disarm', video_url: '', video_time: '' },
    { id: 7, weapon: 'Knife', strike: 'Cross Strike ', defense: 'Form Block-Left, Shoulder block-right, punch to the face, elbow to the head, knee, cross your arm over by the elbow, figure 4 from right to left just above the elbow, thumb up, armbar.', finishing_move: 'Straigh armbar to scissor sweep', video_url: '', video_time: '' },
    { id: 8, weapon: 'Knife', strike: 'Advanced', defense: 'Double slash, step back then in, grab right hand on outside of wrist, bring left arm over inner elbow to figure four turn wrist over step behind take them down', finishing_move: '', video_url: '', video_time: '' },
    { id: 1, weapon: 'Gun', strike: 'Frontal Threat', defense: 'Push aside away from body with left hand. push into there body in the stomach area. throw punches to disable. reach underneath gun pull out from hand .', finishing_move: '', video_url: '', video_time: '' }
];

export const testingData: TestingData = {
	level_requirements_adult: [
        { level: "Beginner", rank: "White", testfor: "Yellow", form: "Element", take_down: "#1", one_step: "#1", challenge: "50", sprint: 1, hours: "4" },
        { level: "Beginner", rank: "Yellow", testfor: "Orange", form: "Element", take_down: "Twist Take Down", one_step: "6", challenge: "50", sprint: "2", hours: "4" },
		{ level: "Beginner", rank: "Orange", testfor: "Purple", form: "Element", take_down: "Twist Take Down", one_step: "6", challenge: "50", sprint: "3", hours: "4" },
        { level: "Beginner", rank: "Purple", testfor: "Blue", form: "Element", take_down: "Twist Take Down", one_step: "6", challenge: "50", sprint: "4", hours: "4" },
        { level: "Intermediate", rank: "Blue", testfor: "Green", form: "Red Belt", take_down: "Red/Black", one_step: "11", challenge: "75", sprint: "5", hours: "6" },
		{ level: "Intermediate", rank: "Green", testfor: "Green Black", form: "Red Belt", take_down: "Red/Black", one_step: "11", challenge: "75", sprint: "6", hours: "6" },
		{ level: "Intermediate", rank: "Green Black", testfor: "Red", form: "Red Belt", take_down: "Red/Black", one_step: "11", challenge: "75", sprint: "6", hours: "6" },
		{ level: "Intermediate", rank: "Red", testfor: "Red Black", form: "Red Belt", take_down: "Red/Black", one_step: "11", challenge: "75", sprint: "7", hours: "6" },
        { level: "Intermediate", rank: "Red Black", testfor: "Brown", form: "All", take_down: "Rear Naked Choke", one_step: "11", challenge: "100", sprint: "7", hours: "8" },
        { level: "Advanced", rank: "Brown", testfor: "Brown Black", form: "All", take_down: "Dragon Tail", one_step: "15", challenge: "100", sprint: "8", hours: "8" },
        { level: "Advanced", rank: "Brown Black", testfor: "Black White", form: "All", take_down: "Dragon Tail", one_step: "15", challenge: "100", sprint: "8", hours: "8" },
        { level: "Advanced", rank: "Black White", testfor: "Black Brown/Half", form: "Two Rotations", take_down: "Dragon Tail", one_step: "15", sprint: "9", challenge: "100", hours: "8" },
		{ level: "Black", rank: "Black Brown/Half", testfor: "Black", form: "All Rotations", take_down: "All R/L", one_step: "15 R/L", challenge: "100", sprint: "10", hours: "26" },
		{ level: "Black", rank: "Black", testfor: "1st Degree", form: "All Rotations", take_down: "All R/L", one_step: "15 R/L", challenge: "100", sprint: "11",hours: "26" },
		{ level: "Black", rank: "1st Degree", testfor: "2nd Degree", form: "All Rotations", take_down: "All R/L", one_step: "15 R/L", challenge: "100", sprint: "12", hours: "26" }
],	
	level_requirements_teen: [
        { level: "Beginner", rank: "White", testfor: "Yellow", form: "Element", take_down: "#1", one_step: "#1", challenge: "50", sprint: 1, hours: "4" },
        { level: "Beginner", rank: "Yellow", testfor: "Orange", form: "Element", take_down: "Twist Take Down", one_step: "6", challenge: "50", sprint: "2", hours: "4" },
		{ level: "Beginner", rank: "Orange", testfor: "Purple", form: "Element", take_down: "Twist Take Down", one_step: "6", challenge: "50", sprint: "3", hours: "4" },
        { level: "Beginner", rank: "Purple", testfor: "Blue", form: "Element", take_down: "Twist Take Down", one_step: "6", challenge: "50", sprint: "4", hours: "4" },
        { level: "Intermediate", rank: "Blue", testfor: "Green", form: "Red Belt", take_down: "Red/Black", one_step: "11", challenge: "75", sprint: "5", hours: "6" },
		{ level: "Intermediate", rank: "Green", testfor: "Green Black", form: "Red Belt", take_down: "Red/Black", one_step: "11", challenge: "75", sprint: "6", hours: "6" },
		{ level: "Intermediate", rank: "Green Black", testfor: "Red", form: "Red Belt", take_down: "Red/Black", one_step: "11", challenge: "75", sprint: "6", hours: "6" },
		{ level: "Intermediate", rank: "Red", testfor: "Red Black", form: "Red Belt", take_down: "Red/Black", one_step: "11", challenge: "75", sprint: "7", hours: "6" },
        { level: "Intermediate", rank: "Red Black", testfor: "Brown", form: "All", take_down: "Rear Naked Choke", one_step: "11", challenge: "100", sprint: "7", hours: "8" },
        { level: "Advanced", rank: "Brown", testfor: "Brown Black", form: "All", take_down: "Dragon Tail", one_step: "15", challenge: "100", sprint: "8", hours: "8" },
        { level: "Advanced", rank: "Brown Black", testfor: "Black White", form: "All", take_down: "Dragon Tail", one_step: "15", challenge: "100", sprint: "8", hours: "8" },
        { level: "Advanced", rank: "Black White", testfor: "Black Green", form: "All", take_down: "Dragon Tail", one_step: "15", sprint: "9", challenge: "100", hours: "8" },
		{ level: "Advanced", rank: "Black Green", testfor: "Black Red", form: "All", take_down: "Dragon Tail", one_step: "15", sprint: "9", challenge: "100", hours: "8" },
		{ level: "Advanced", rank: "Black Red", testfor: "Black Brown", form: "All", take_down: "Dragon Tail", one_step: "15", sprint: "9", challenge: "100", hours: "8" },
		{ level: "Advanced", rank: "Black Brown", testfor: "Black Brown/Half", form: "Two Rotations", take_down: "Dragon Tail", one_step: "15", challenge: "100", sprint: "10", hours: "26" },
		{ level: "Black", rank: "Black Brown/Half", testfor: "Black", form: "All Rotations", take_down: "All R/L", one_step: "15 R/L", challenge: "100", sprint: "10", hours: "26" },
		{ level: "Black", rank: "Black", testfor: "1st Degree", form: "All Rotations", take_down: "All R/L", one_step: "15 R/L", challenge: "100", sprint: "11",hours: "26" },
		{ level: "Black", rank: "1st Degree", testfor: "2nd Degree", form: "All Rotations", take_down: "All R/L", one_step: "15 R/L", challenge: "100", sprint: "12", hours: "26" }
],


	level_requirements_child6212: [
        { level: "Beginner", rank: "White", testfor: "Yellow", form: "Element", take_down: "#1", one_step: "#1", challenge: "25", sprint: 1, hours: "1" },
        { level: "Beginner", rank: "Yellow", testfor: "Yellow Black", form: "Element", take_down: "Twist Take Down", one_step: "6", challenge: "50", sprint: "2", hours: "4" },
		{ level: "Beginner", rank: "Yellow Black", testfor: "Orange", form: "Element", take_down: "Twist Take Down", one_step: "6", challenge: "50", sprint: "2", hours: "4" },
		{ level: "Beginner", rank: "Orange", testfor: "Purple", form: "Element", take_down: "Twist Take Down", one_step: "6", challenge: "50", sprint: "3", hours: "4" },
		{ level: "Beginner", rank: "Orange Black", testfor: "Purple", form: "Element", take_down: "Twist Take Down", one_step: "6", challenge: "50", sprint: "3", hours: "4" },
        { level: "Beginner", rank: "Purple", testfor: "Purple Black", form: "Element", take_down: "Twist Take Down", one_step: "6", challenge: "50", sprint: "4", hours: "4" },
		{ level: "Beginner", rank: "Purple Black", testfor: "Blue", form: "Element", take_down: "Twist Take Down", one_step: "6", challenge: "50", sprint: "4", hours: "4" },
        { level: "Intermediate", rank: "Blue", testfor: "Blue Black", form: "Red Belt", take_down: "Red/Black", one_step: "11", challenge: "75", sprint: "5", hours: "6" },
		{ level: "Intermediate", rank: "Blue Black", testfor: "Green", form: "Red Belt", take_down: "Red/Black", one_step: "11", challenge: "75", sprint: "5", hours: "6" },
		{ level: "Intermediate", rank: "Green", testfor: "Green Black", form: "Red Belt", take_down: "Red/Black", one_step: "11", challenge: "75", sprint: "6", hours: "6" },
		{ level: "Intermediate", rank: "Green Black", testfor: "Red", form: "Red Belt", take_down: "Red/Black", one_step: "11", challenge: "75", sprint: "6", hours: "6" },
		{ level: "Intermediate", rank: "Red", testfor: "Red Black", form: "Red Belt", take_down: "Red/Black", one_step: "11", challenge: "75", sprint: "7", hours: "6" },
        { level: "Intermediate", rank: "Red Black", testfor: "Brown", form: "All", take_down: "Rear Naked Choke", one_step: "11", challenge: "100", sprint: "7", hours: "8" },
        { level: "Advanced", rank: "Brown", testfor: "Brown Black", form: "All", take_down: "Dragon Tail", one_step: "15", challenge: "100", sprint: "8", hours: "8" },
        { level: "Advanced", rank: "Brown Black", testfor: "Black White", form: "All", take_down: "Dragon Tail", one_step: "15", challenge: "100", sprint: "8", hours: "8" },
        { level: "Advanced", rank: "Black White", testfor: "Black Stripes", form: "All", take_down: "Dragon Tail", one_step: "15", sprint: "9", challenge: "100", hours: "8" },
		{ level: "Advanced", rank: "Black Brown", testfor: "Half", form: "Two Rotations", take_down: "Dragon Tail", one_step: "15", sprint: "9", challenge: "100", hours: "8" },
		{ level: "Black", rank: "Half", testfor: "Black", form: "All Rotations", take_down: "All R/L", one_step: "15 R/L", challenge: "100", sprint: "10", hours: "26" },
		{ level: "Black", rank: "Black", testfor: "1st Degree", form: "All Rotations", take_down: "All R/L", one_step: "15 R/L", challenge: "100", sprint: "11",hours: "26" },
		{ level: "Black", rank: "1st Degree", testfor: "2nd Degree", form: "All Rotations", take_down: "All R/L", one_step: "15 R/L", challenge: "100", sprint: "12", hours: "26" }
],
    board_breaks: [
        { child_belt: "White", adult_belt: "White", testing_for: "Yellow", break_technique: "Bottom Fist" },
        { child_belt: "Yellow", adult_belt: "Yellow", testing_for: "Orange", break_technique: "Axe Kick" },
        { child_belt: "Yellow/Black", adult_belt: "", testing_for: "", break_technique: "Elbow" },
        { child_belt: "Orange", adult_belt: "", testing_for: "", break_technique: "Step Through Side Kick" },
        { child_belt: "Orange/Black", adult_belt: "Orange", testing_for: "Purple", break_technique: "Flying Side Kick" },
        { child_belt: "Purple", adult_belt: "", testing_for: "", break_technique: "Spin Side Kick" },
        { child_belt: "Purple/Black", adult_belt: "Purple", testing_for: "Blue", break_technique: "Jumping Spin Side Kick" },
        { child_belt: "Blue", adult_belt: "", testing_for: "", break_technique: "Spin Hook Kick" },
        { child_belt: "Blue/Black", adult_belt: "Blue", testing_for: "Green", break_technique: "Jump Spin Hook Kick" },
        { child_belt: "Green", adult_belt: "Green", testing_for: "Green/Black", break_technique: "Palm Heel Strike" },
        { child_belt: "Green/Black", adult_belt: "Green/ Black", testing_for: "Red", break_technique: "Scisser Front Kick" },
        { child_belt: "Red", adult_belt: "Red", testing_for: "Red/Black", break_technique: "Pop Front Kick" },
        { child_belt: "Red/Black", adult_belt: "Red/Black", testing_for: "Brown", break_technique: "Straight Punch" },
        { child_belt: "Brown", adult_belt: "Brown", testing_for: "Brown/Black", break_technique: "540 Hook" },
        { child_belt: "Brown/Black", adult_belt: "Brown/ Black", testing_for: "Black/White", break_technique: "540 Side" },
        { child_belt: "Black/White & Higher", adult_belt: "Black/White & Higher", testing_for: "", break_technique: "Any Jump Spin Kick" },
        { child_belt: "Black", adult_belt: "", testing_for: "", break_technique: "540 Hook, 540 Side, Choice, Bottle" },
        { child_belt: "1st Degree", adult_belt: "", testing_for: "", break_technique: "Black + 2 2x2's" }
    ]
};

