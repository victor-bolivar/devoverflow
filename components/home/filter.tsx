"use client"

import Link from 'next/link'
import React from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';

const FILTER_OPTIONS = [
    { label: 'Newest', query: 'newest' },
    { label: 'Recommended Questions', query: 'recommended-questions' },
    { label: 'Frequent', query: 'frequent' },
    { label: 'Unanswered', query: 'unanswered' }
]

const HomeFilter = () => {

    const pathname = usePathname();
    const searchParams = useSearchParams();

    return (
        <div className='flex justify-start flex-wrap gap-4'>
            {FILTER_OPTIONS.map(option => <Link
                key={option.query}
                href={{
                    pathname,
                    query: { ...Object.fromEntries(searchParams.entries()), filter: option.query }, // Add or update 'filter'
                }}
                shallow // Optional for client-side transitions without full reload
                className={clsx(
                    'py-3 px-6 rounded-lg text-dark-500 dark:text-light-500 dark:bg-dark-300 bg-light-800',
                    {
                        'bg-orange-50 text-orange-900 dark:text-orange-100': searchParams.get("filter") === option.query,
                    },
                )}
            >
                {option.label}
            </Link>)}
        </div>
    )
}

export default HomeFilter
