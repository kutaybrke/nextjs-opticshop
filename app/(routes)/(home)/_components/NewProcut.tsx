"use client"
import React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { products } from "@/data/products"
import Image from "next/image"
import { useRouter } from "next/navigation"

const NewProduct = () => {

    const router = useRouter();

    return (
        <div className="">
            <div className="flex items-center justify-between ">
                <div className="bg-gray-200 h-1 w-full "> </div>
                <div className="text-center p-8 text-nowrap text-2xl">YENİ GELENLER</div>
                <div className="bg-gray-200 h-1 w-full"> </div>
            </div>
            <Carousel className="w-full"
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent>
                    {products.map((product) => (
                        <CarouselItem key={product.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                            <Card className="h-full border-none" onClick={() => router.push(`/productdetail/${product.id}`)}>
                                <CardHeader>
                                    <CardTitle>{product.name}</CardTitle>
                                    <CardDescription>{product.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Image
                                        src={product.images[0]}
                                        alt={product.name}
                                        width={300}
                                        height={300}
                                        className="object-contain w-full h-48"
                                    />
                                    <p className="mt-2 font-semibold">
                                        {product.discountPrice} TL{" "}
                                        <span className="line-through text-sm text-gray-500 ">
                                            {product.price} TL
                                        </span>
                                    </p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>

    )
}

export default NewProduct
