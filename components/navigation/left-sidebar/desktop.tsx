import React from 'react'
import { navLinks } from '@/constants'
import NavLink from '../nav-link'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'

const LeftSidebarDesktop = () => {
    return (
        <aside className='px-8 relative h-full'>
            <div>
                <ul className="flex flex-col gap-4 mt-20">
                    {navLinks.map(item => <li key={item.href}><NavLink key={item.href} item={item} /></li>)}
                </ul>
                <div className="absolute bottom-10 left-4 right-4">
                    <Button
                        variant="outline"
                        className="w-full justify-start gap-2"
                    >
                        <LogOut className="h-5 w-5" />
                        <span className='max-md:hidden'>Log out</span>
                    </Button>
                </div>
            </div>
        </aside>
    )
}

export default LeftSidebarDesktop
