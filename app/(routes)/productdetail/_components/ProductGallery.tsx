'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

type ProductGalleryProps = {
    images: string[]
}

export default function ProductGallery({ images }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(images[0])

    return (
        <div className="flex gap-4">

            <div className="flex flex-col gap-2">
                {images.map((img, index) => (
                    <Card
                        key={index}
                        className={`cursor-pointer border-2 ${selectedImage === img ? 'border-blue-500' : 'border-transparent'
                            }`}
                        onClick={() => setSelectedImage(img)}
                    >
                        <CardContent className="p-1">
                            <Image
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                width={60}
                                height={60}
                                className="object-cover rounded"
                            />
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Main image (right) */}
            <div className="flex-1">
                <Card>
                    <CardContent className="p-2">
                        <Image
                            src={selectedImage}
                            alt="Selected"
                            width={500}
                            height={500}
                            className="w-full h-auto object-contain rounded"
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
