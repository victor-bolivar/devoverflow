import Logo from '@/components/ui/logo';
import React from 'react'
import { AiOutlineExclamation } from "react-icons/ai";


const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='h-screen flex justify-center items-center '>
            {children}
        </div>
    )
}

export default layout
