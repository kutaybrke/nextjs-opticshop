import React from 'react'
import { products } from '@/data/products'
import { notFound } from 'next/navigation'
import ProductGallery from '../_components/ProductGallery'
import ProductInformation from '../_components/ProductInformation'
import ProductTabs from '../_components/ProductTabs'

type Props = {
    params: Promise<{
        id: string
    }>
}

const ProductDetailPage = async ({ params }: Props) => {
    const { id } = await params;

    const product = products.find((p) => p.id.toString() === id)
    if (!product) return notFound()

    return (
        <div className="flex flex-col justify-center space-y-10">
            <div className='flex items-center space-x-3 w-full'>
                <ProductGallery images={product.images} />

                {/* Açıklama */}
                <ProductInformation product={product} />
            </div>

            <ProductTabs productTab={product} />
        </div>
    )
}

export default ProductDetailPage