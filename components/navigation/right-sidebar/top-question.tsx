'use client'

import React from 'react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

type TopQuestionProp = {
    text: string,
    href: string
}

const TopQuestion = ({ text, href }: TopQuestionProp) => {
    return (
        <Link href={href} className='flex'>
            <p className='dark:text-light-700 text-dark-500 text-sm grow inline-block'>
                {text}
            </p>
            <ChevronRight />
        </Link>
    )
}

export default TopQuestion
