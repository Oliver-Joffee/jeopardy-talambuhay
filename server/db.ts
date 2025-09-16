import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What "engine" is this?',
        imgSrc: "https://projects-static.raspberrypi.org/projects/getting-started-scratch/56af64ccb672ce357e3372a69388952c6f8ca88c/en/images/showcase_static.png",
        answer: 'Scratch',
    },
    {
        points: 200,
        question:
            'What book series is this?',
        imgSrc: "/magic_tree_house.jpg",
        answer: 'Magic Tree House',
    },
    {
        points: 300,
        question:  'What is the name of this toy brand?',
        imgSrc: "https://enjouet.com/cdn/shop/files/bakugan-jouet-boules-transformables-184_900x.webp?v=1742989796",
        answer: 'Bakugan',
    },
    {
        points: 400,
        question: 'What school is this?',
        imgSrc: "https://static.wixstatic.com/media/ffeca6_2472076806444a89a5c074916eb62cb0~mv2.jpg/v1/fill/w_640,h_448,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ffeca6_2472076806444a89a5c074916eb62cb0~mv2.jpg",
        answer: 'IN-Tech Academy',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 200,
            question:
                'What game is this?',
            imgSrc: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_d5b6edd94e77ba6db31c44d8a3c09d807ab27751.1920x1080.jpg?t=1695270428',
            answer: 'Hollow Knight',
        },
        {
            points: 100,
            question:
                'What is the name of this school?',
            imgSrc: 'https://zubatkin.com/wp-content/uploads/2021/04/HMS_Color-Rendering-Aerial-Proposed-edited.jpg',
            answer: 'Horace Mann',
        },
        {
            points: 300,
            question: 'What engine is this?',
            imgSrc: 'https://raw.githubusercontent.com/godotengine/godot-design/master/screenshots/editor_tps_demo_1920x1080.jpg',
            answer: 'Godot',
        },
        {
            points: 400,
            question:
                'Who is this?',
            imgSrc:
                "https://cdn.britannica.com/09/36209-050-66343901/Horace-Mann.jpg",
            answer: 'Horace Mann',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What HM club is this?',
        imgSrc:
            "/club.png",
        answer: 'Game Development CLub',
    },
    {
        points: 200,
        question: "When does the Game Development Club Meet?",
        answer: "Every other Thursday",
    },
    {
        points: 300,
        question: "What is the name of the annual game jam ran by a certain game development Youtuber with approximately 1.68 million subscribers that consistently crashes itch.io every year?",
        answer: "GMTK Game Jam"
    },
    {
        points: 400,
        question: "What is the name of this college?",
        imgSrc: "https://www.soka.edu/sites/default/files/styles/700x350/public/images/2022-01/soka-overview.jpg?h=2bacc77b&itok=ShwNsu50",
        answer: "SUA"
    }
]);


const categories = [
    {
        title: "Oliver's Past",
        questions: pastQuestions
    },
    {
        title: "Oliver's Present",
        questions: presentQuestions
    },
    {
        title: "Oliver's Future",
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}