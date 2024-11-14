import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
    return (
        <Link href={'/'} className='text-2xl flex align-middle'>
            <Image src="/logo.svg" alt="Logo" width={32} height={32} className="w-[1em] h-[1em] self-center" />
            <p className='max-sm:hidden ml-2 inline-block text-dark-100 dark:text-light-900'>Dev<span className='text-orange-900'>Overflow</span></p>
        </Link>
    )
}

export default Logo
