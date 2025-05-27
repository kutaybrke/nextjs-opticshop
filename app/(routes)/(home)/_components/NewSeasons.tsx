import Image from 'next/image'
import React from 'react'

const NewSeasons = () => {
    return (
        <div className='flex gap-4 '>

            <div className='bg-gray-200 w-full p-2 '>
                <div className='flex items-center justify-between'>
                    <div className='flex-1'>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-2xl font-semibold'>YENİ SEZON</h1>
                            <h1 className='font-mono'>Marka</h1>
                            <label htmlFor="">Gözlüklerimizi Keşfedin</label>
                            <div className='border-2 border-gray-900 px-6 mt-5'>İNCELE</div>
                        </div>
                    </div>
                    <div className='p-2 shadow-md bg-white'>
                        <Image src='/bannerseason.webp' alt='bannerseason' width={200} height={200} className='object-cover' />
                    </div>
                </div>
            </div>
            <div className='bg-gray-200 w-full p-2 '>
                <div className='flex items-center justify-between'>
                    <div className='flex-1'>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-2xl font-semibold'>YENİ SEZON</h1>
                            <h1 className='font-mono'>Marka</h1>
                            <label htmlFor="">Gözlüklerimizi Keşfedin</label>
                            <div className='border-2 border-gray-900 px-6 mt-5'>İNCELE</div>
                        </div>
                    </div>
                    <div className='p-2 shadow-md bg-white'>
                        <Image src='/seaseon.png' alt='seaseon.png' width={200} height={200} className='object-cover' />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default NewSeasons