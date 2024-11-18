import HomeFilter from '@/components/home/filter';
import QuestionCard from '@/components/home/question-card';
import { TQuestion } from '@/lib/types';
import React from 'react'
import Link from 'next/link';
import { ROUTES } from '@/constants';
import Searchbar from '@/components/searchbar';

//  TODO get from db
const questions: TQuestion[] = [
    {
        _id: "1",
        title: "How to learn React?",
        description: "I want to learn React, can anyone help me?",
        tags: [
            { _id: "1", name: "React" },
            { _id: "2", name: "JavaScript" },
        ],
        author: { _id: "1", name: "John Doe" },
        upvotes: 10,
        answers: 5,
        views: 100,
        createdAt: new Date(),
    },
    {
        _id: "2",
        title: "How to learn JavaScript?",
        description: "I want to learn JavaScript, can anyone help me?",
        tags: [
            { _id: "1", name: "JavaScript" },
            { _id: "2", name: "JavaScript" },
        ],
        author: { _id: "1", name: "John Doe" },
        upvotes: 10,
        answers: 5,
        views: 12100,
        createdAt: new Date(),
    },
    {
        _id: "1",
        title: "How to learn React?",
        description: "I want to learn React, can anyone help me?",
        tags: [
            { _id: "1", name: "React" },
            { _id: "2", name: "JavaScript" },
        ],
        author: { _id: "1", name: "John Doe" },
        upvotes: 10,
        answers: 5,
        views: 100,
        createdAt: new Date(),
    },
    {
        _id: "2",
        title: "How to learn JavaScript?",
        description: "I want to learn JavaScript, can anyone help me?",
        tags: [
            { _id: "1", name: "JavaScript" },
            { _id: "2", name: "JavaScript" },
        ],
        author: { _id: "1", name: "John Doe" },
        upvotes: 10,
        answers: 5,
        views: 12100,
        createdAt: new Date(),
    },
    {
        _id: "1",
        title: "How to learn React?",
        description: "I want to learn React, can anyone help me?",
        tags: [
            { _id: "1", name: "React" },
            { _id: "2", name: "JavaScript" },
        ],
        author: { _id: "1", name: "John Doe" },
        upvotes: 10,
        answers: 5,
        views: 100,
        createdAt: new Date(),
    },
    {
        _id: "2",
        title: "How to learn JavaScript?",
        description: "I want to learn JavaScript, can anyone help me?",
        tags: [
            { _id: "1", name: "JavaScript" },
            { _id: "2", name: "JavaScript" },
        ],
        author: { _id: "1", name: "John Doe" },
        upvotes: 10,
        answers: 5,
        views: 12100,
        createdAt: new Date(),
    },
    {
        _id: "1",
        title: "How to learn React?",
        description: "I want to learn React, can anyone help me?",
        tags: [
            { _id: "1", name: "React" },
            { _id: "2", name: "JavaScript" },
        ],
        author: { _id: "1", name: "John Doe" },
        upvotes: 10,
        answers: 5,
        views: 100,
        createdAt: new Date(),
    },
    {
        _id: "2",
        title: "How to learn JavaScript?",
        description: "I want to learn JavaScript, can anyone help me?",
        tags: [
            { _id: "1", name: "JavaScript" },
            { _id: "2", name: "JavaScript" },
        ],
        author: { _id: "1", name: "John Doe" },
        upvotes: 10,
        answers: 5,
        views: 12100,
        createdAt: new Date(),
    },
    {
        _id: "1",
        title: "How to learn React?",
        description: "I want to learn React, can anyone help me?",
        tags: [
            { _id: "1", name: "React" },
            { _id: "2", name: "JavaScript" },
        ],
        author: { _id: "1", name: "John Doe" },
        upvotes: 10,
        answers: 5,
        views: 100,
        createdAt: new Date(),
    },
    {
        _id: "2",
        title: "How to learn JavaScript?",
        description: "I want to learn JavaScript, can anyone help me?",
        tags: [
            { _id: "1", name: "JavaScript" },
            { _id: "2", name: "JavaScript" },
        ],
        author: { _id: "1", name: "John Doe" },
        upvotes: 10,
        answers: 5,
        views: 12100,
        createdAt: new Date(),
    },
    {
        _id: "1",
        title: "How to learn React?",
        description: "I want to learn React, can anyone help me?",
        tags: [
            { _id: "1", name: "React" },
            { _id: "2", name: "JavaScript" },
        ],
        author: { _id: "1", name: "John Doe" },
        upvotes: 10,
        answers: 5,
        views: 100,
        createdAt: new Date(),
    },
    {
        _id: "2",
        title: "How to learn JavaScript?",
        description: "I want to learn JavaScript, can anyone help me?",
        tags: [
            { _id: "1", name: "JavaScript" },
            { _id: "2", name: "JavaScript" },
        ],
        author: { _id: "1", name: "John Doe" },
        upvotes: 10,
        answers: 5,
        views: 12100,
        createdAt: new Date(),
    },
    {
        _id: "1",
        title: "How to learn React?",
        description: "I want to learn React, can anyone help me?",
        tags: [
            { _id: "1", name: "React" },
            { _id: "2", name: "JavaScript" },
        ],
        author: { _id: "1", name: "John Doe" },
        upvotes: 10,
        answers: 5,
        views: 100,
        createdAt: new Date(),
    },
    {
        _id: "2",
        title: "How to learn JavaScript?",
        description: "I want to learn JavaScript, can anyone help me?",
        tags: [
            { _id: "1", name: "JavaScript" },
            { _id: "2", name: "JavaScript" },
        ],
        author: { _id: "1", name: "John Doe" },
        upvotes: 10,
        answers: 5,
        views: 12100,
        createdAt: new Date(),
    },
];

export default async function Page(props: {
    searchParams?: Promise<{
        q?: string;
        filter?: string
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.q || '';
    const filter = searchParams?.filter || '';

    return (
        <div className='flex flex-col gap-4'>

            <div className='flex items-center justify-between'>
                <h1 className='h1'>All Questions</h1>
                <Link className=' rounded-lg font-semibold text-light-900 py-3 px-6 bg-gradient-to-r from-[#FF7000] via-[#E2985E] to-[#E2995F]' href={ROUTES.ASK_A_QUESTION}>
                    Ask a Question
                </Link>
            </div>

            <Searchbar fullWidth={true} placeholder='Search for questions here...' searchParam='question' />

            <HomeFilter />

            <div className='flex flex-col gap-5 mt-4'>
                {questions.map(question => <QuestionCard key={question._id} question={question} />)}
            </div>
        </div>
    )
}