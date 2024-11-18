"use client"

import React from 'react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { RxCross2 } from "react-icons/rx";

type TagLinkToPageProps = {
    type: 'link'
    label: string,
    href: string,
    includeRightArrow?: boolean
}
type TagDeleteProps = {
    type: 'delete'
    label: string
    onClick: () => void
}

type TagProps = TagLinkToPageProps | TagDeleteProps

const Tag = (props: TagProps) => {

    switch (props.type) {
        case 'link':
            return <Link href={props.href} className='flex justify-between rounded-lg'>
                <p className='tag'>
                    {props.label}
                </p>
                {props.includeRightArrow && <ChevronRight />}
            </Link>
        case 'delete':
            return <div className='flex justify-between items-center rounded-lg tag'>
                <p>
                    {props.label}
                </p>
                <RxCross2 className='ml-2 hover:cursor-pointer' onClick={props.onClick} />

                <div>

                </div>
            </div>

        default:
            return null
    }
}

export default Tag
