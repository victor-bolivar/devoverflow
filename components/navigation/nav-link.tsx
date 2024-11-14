"use client"

import { TNavLink } from '@/lib/types'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
    item: TNavLink,
    handleOnClick?: () => void
}

const NavLink = ({ item, handleOnClick }: NavLinkProps) => {

    const currentPath = usePathname()
    const selected = item.href === currentPath
    const styleIfSelected = "bg-gradient-to-r from-orange-900 to-orange-100 text-light-900 hover:text-light-900 font-medium	"

    return (
        <a
            key={item.href}
            href={item.href}
            className={`${selected && styleIfSelected} flex items-center gap-2 px-5 py-5 text-lg rounded-lg hover:bg-accent hover:text-accent-foreground`}
            onClick={handleOnClick}
        >
            <Image {...item.icon} alt={`Icon for ${item.label}`} className={`h-5 w-5 invert dark:invert-0 ${selected && 'invert-0'}`} />
            <span className='pl-2 max-md:hidden'>{item.label}</span>
        </a>
    )
}

export default NavLink
