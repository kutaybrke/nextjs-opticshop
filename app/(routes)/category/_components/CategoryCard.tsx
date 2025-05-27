// app/category/_components/ProductCard.tsx
'use client'
import React from 'react'
import Link from 'next/link'
import { Product } from '@/data/products'

type Props = {
    product: Product
}

const CategoryCard = ({ product }: Props) => {
    return (
        <Link href={`/productdetail/${product.id}`}>
            <div className="border rounded-md overflow-hidden shadow hover:shadow-lg transition p-4 bg-white">
                <img src={product.images[0]} alt={product.name} className="w-full h-40 object-contain" />
                <h3 className="text-lg font-bold mt-2">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.brand}</p>
                <p className="text-green-600 font-semibold">{product.discountPrice} TL</p>
                {product.discountRate > 0 && (
                    <p className="text-sm text-red-500 line-through">{product.price} TL</p>
                )}
            </div>
        </Link>
    )
}

export default CategoryCard
