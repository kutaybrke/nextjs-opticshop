"use client"
import React from 'react'
import NavMenu from './_components/navmenu/NavMenu'
import Image from 'next/image'
import { User2Icon, UserIcon } from 'lucide-react'
import { useSession } from "next-auth/react"
import Link from 'next/link'
import { Button } from '../../button'
const Header = () => {

    const { data: session, status } = useSession();

    return (
        <div className='flex items-center bg-white h-24'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div>
                            <Image src='/logo.png' alt='logo' width={100} height={100} />
                        </div>
                        <div className='text-2xl font-extrabold'>KUTAY OPTİK</div>
                    </div>
                    <NavMenu />
                    <div className='flex flex-col items-center'>
                        {status === "authenticated" ? (<UserIcon size={32} />) : (<Link href='/login'><Button>Giriş Yap</Button></Link>)}

                        <div>{session?.user?.name}</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header