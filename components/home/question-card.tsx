import { TQuestion } from '@/lib/types'
import Tag from '@/components/tag'
import React from 'react'
import { ROUTES } from '@/constants'
import StatItem from '@/components/stat-item'
import { getTimeAgo } from '@/lib/utils'

type QuestionCardProps = {
    question: TQuestion
}

const QuestionCard = ({ question }: QuestionCardProps) => {
    return (
        <div className='flex shadow-md dark:shadow-sm dark:shadow-dark-300 flex-col gap-2 py-4 px-7 rounded-md dark:bg-gradient-to-r from-[#171C2368] to-[#13161CB2]'>
            <h3 className='text-xl font-medium'>{question.title}</h3>
            <div className='flex gap-2 '>
                {question.tags.map(tag => <Tag type='link' label={tag.name} href={ROUTES.TAGS(tag._id)} />)}
            </div>
            <div className='flex justify-between'>
                <div>
                    <p className='dark:text-light-700'>
                        {/* TODO after adding auth */}
                        {/* <span className='font-medium'>{question.author.name} </span> */}
                        • asked {getTimeAgo(question.createdAt)}
                    </p>
                </div>
                <div className='flex justify-end gap-2'>
                    <StatItem type={'Likes'} value={question.upvotes} />
                    <StatItem type={'Answers'} value={question.answers.length} />
                    <StatItem type={'Views'} value={question.views} />
                </div>
            </div>

        </div>
    )
}

export default QuestionCard
