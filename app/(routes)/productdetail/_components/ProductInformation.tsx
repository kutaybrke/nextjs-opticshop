"use client"
import React, { useState } from 'react'
import { Product } from '@/data/products'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'

type ProductInformationProps = {
    product: Product
}

const ProductInformation = ({ product }: ProductInformationProps) => {
    const [count, setCount] = useState(1)

    const inc = () => {
        setCount(prev => prev + 1)
    }

    const dec = () => {
        setCount(prev => (prev === 1 ? 1 : prev - 1))
    }

    return (
        <div className="space-y-6 flex-1 ">
            {/* Ürün Başlığı */}
            <div className="text-2xl font-bold">{product.name}</div>

            {/* Fiyat Bilgisi */}
            <div className="relative border border-black rounded-md p-4 inline-block">
                <div className="flex items-center space-x-3">
                    <span className="line-through text-gray-500 text-lg">₺{product.price}</span>
                    <span className="text-2xl font-bold text-red-600">₺{product.discountPrice}</span>
                </div>
                <div className="absolute -top-3 -right-3 bg-red-600 text-white rounded-full px-2 py-1 text-sm font-semibold shadow-md">
                    %{product.discountRate}
                </div>
            </div>

            {/* Ayraç */}
            <div className="h-[1px] w-full bg-gray-300" />

            {/* Adet Seçici */}
            <div className="flex items-center space-x-4 border border-gray-300 rounded-md w-fit px-4 py-2 text-xl">
                <button onClick={dec} className="hover:text-red-600 transition">−</button>
                <span>{count}</span>
                <button onClick={inc} className="hover:text-green-600 transition">+</button>
            </div>

            {/* Sepete Ekle Butonu */}
            <div className="flex items-center space-x-4">
                <Button className="text-base px-6 py-2 w-max">Sepete Ekle</Button>
                <Heart className="cursor-pointer hover:text-red-500 transition" />
            </div>
        </div>
    )
}

export default ProductInformation
