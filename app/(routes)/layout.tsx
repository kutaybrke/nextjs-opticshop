import Header from '@/components/ui/sections/header/Header'
import React from 'react'
import Footer from '@/components/ui/sections/footer/Footer'
interface RoutesLayoutProps {
    children: React.ReactNode
}

const RoutesLayout = ({ children }: RoutesLayoutProps) => {
    return (
        <div>
            <Header />
            <main className='min-h-screen container mx-auto'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default RoutesLayout