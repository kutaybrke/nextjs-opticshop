import React from 'react'
import { products } from '@/data/products'
import CategoryCard from './_components/CategoryCard'

type CategoryPageProps = {
    searchParams: {
        category?: string
    }
}

const CategoryPage = ({ searchParams }: CategoryPageProps) => {
    const category = searchParams.category

    // Geçerli bir kategori yoksa veya yanlışsa
    if (!category) {
        return <div className="text-center mt-10 text-red-500 text-xl">Kategori bulunamadı.</div>
    }

    // Kategoriye göre filtreleme
    const filteredProducts = products.filter(
        (product) => product.category === category
    )

    if (filteredProducts.length === 0) {
        return <div className="text-center mt-10 text-gray-500 text-xl">Bu kategoriye ait ürün bulunamadı.</div>
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {filteredProducts.map((product) => (
                <CategoryCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default CategoryPage
