"use client"

import { useState } from "react"
import { Menu, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import NavLink from "../nav-link"
import Logo from "../../ui/logo"

export default function LeftSidebarMobile() {
    const [open, setOpen] = useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle mobile sidebar</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="border-b pb-6">
                    <SheetTitle>
                        <Logo />
                    </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-4">
                    {navLinks.map(item => <NavLink hideTextOnShrink={false} key={item.href} item={item} handleOnClick={() => setOpen(false)} />)}
                </nav>
                <div className="absolute bottom-4 left-4 right-4">
                    <Button
                        variant="outline"
                        className="w-full justify-start gap-2"
                        onClick={() => setOpen(false)}
                    >
                        <LogOut className="h-5 w-5" />
                        Log out
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}