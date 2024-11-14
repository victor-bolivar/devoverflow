import React from 'react'
import ThemeSwitch from '../theme-switch'
import Logo from '../ui/logo'
import LeftSidebarMobile from './left-sidebar/mobile'

const NavBar = () => {
    return (
        <header className='sticky top-0 z-10 h-20 bg-light-900 dark:bg-dark-100 border'>
            <nav className='flex flex-row justify-between items-center px-10 py-5'>
                <Logo />
                {/* TODO global search */}
                <div className='flex justify-between gap-4 items-center'>
                    <ThemeSwitch />
                    <LeftSidebarMobile />
                </div>
                {/* TODO user photo */}
            </nav>
        </header>
    )
}

export default NavBar
