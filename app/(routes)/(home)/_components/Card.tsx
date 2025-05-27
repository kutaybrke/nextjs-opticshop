import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { products } from '@/data/products'
import Image from 'next/image'


const CardComponents = () => {
    return (

        <div className='grid grid-cols-2 gap-4'>
            {
                products.map((product) => (
                    <Card key={product.id}>
                        <CardHeader>
                            <CardTitle>{product.name}</CardTitle>
                            <CardDescription>{product.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Image src={product.image} alt={product.name} width={500} height={500} className='object-cover' />
                        </CardContent>
                        <CardFooter>
                            <div className='flex-1 items-center'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex space-x-1'>
                                        <label className='text-2xl'>{product.discountPrice} </label>
                                        <label className='line-through'>{product.price}</label>
                                    </div>
                                    <div className=' text-white'>
                                        {product.inStock ? (<div className='bg-blue-500 p-1 rounded-lg'>Stokta Mevcut</div>) : (<div className='bg-red-500 p-1 rounded-lg'>Stok Tükenmiştir</div>)}
                                    </div>
                                </div>
                            </div>

                        </CardFooter>
                    </Card>

                ))
            }
        </div>





    )
}

export default CardComponents