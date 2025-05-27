"use client"
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"
const BannerComponent = () => {
    return (
        <div className="w-full  mx-auto relative">
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent>
                    <CarouselItem>
                        <Image
                            src="/banner.jpg"
                            alt="Banner 1"
                            width={1920}
                            height={1080}
                            className="object-cover w-full h-64"
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <Image
                            src="/banner2.jpg"
                            alt="Banner 2"
                            width={1920}
                            height={1080}
                            className="object-cover w-full h-64"
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <Image
                            src="/banner3.jpg"
                            alt="Banner 3"
                            width={1920}
                            height={1080}
                            className="object-cover w-full h-64"
                        />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full cursor-pointer" />
                <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full cursor-pointer" />
            </Carousel>
        </div>
    )
}

export default BannerComponent
