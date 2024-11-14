"use client"

import React from 'react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

type PopularTagProps = {
    label: string,
    href: string
}

const PopularTag = ({ label, href }: PopularTagProps) => {
    return (
        <Link href={href} className='flex justify-between rounded-lg'>
            <p className='bg-light-800 dark:bg-dark-300 text-light-400 rounded-md py-3 px-4 text-xs'>
                {label}
            </p>
            <ChevronRight />
        </Link>
    )
}

export default PopularTag
