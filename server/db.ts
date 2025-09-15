import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What "engine" is this?',
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
        question:
            'What Ivy League school has the highest Native American enrollment (a whoppping 1%)?',
        answer: 'Dartmouth',
    },
    {
        points: 400,
        question: 'Who wrote the Critique of Pure Reason?',
        answer: 'Immanuel Kant',
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
            'This country is home to the Dolomites, which are a mountain range that has historical \'via ferratas\', iron cables and rungs, to aid traversing the peaks?',
        imgSrc:
            "https://laguidalpina.it/cdn/shop/products/ferrata-marmolada-cresta-ovest-Cristiano-Gregnanin-Guida-Alpina-Certificata-Dolomiti-5.jpg?v=1738870778",
        answer: 'Italy',
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