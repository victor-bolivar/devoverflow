import React from 'react'
import ThemeSwitch from '../theme-switch'
import Logo from '../ui/logo'
import LeftSidebarMobile from './left-sidebar/mobile'

const NavBar = () => {
    return (
        <header>
            <nav className='flex flex-row justify-between items-center px-10 py-5 border'>
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
