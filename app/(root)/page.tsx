import HomeFilter from '@/components/home/filter';
import QuestionCard from '@/components/home/question-card';
import { TQuestion } from '@/lib/types';
import React from 'react'

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
        <div className='px-9'>
            {/* TODO filter the questions based on filters and query */}
            <h1>{query}</h1>
            <h2>{filter}</h2>
            <HomeFilter />

            <div className='flex flex-col gap-5 mt-4'>
                {questions.map(question => <QuestionCard question={question} />)}
            </div>
        </div>
    )
}