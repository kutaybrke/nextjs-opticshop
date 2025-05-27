
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Product } from '@/data/products'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button'

type ProductTabsProps = {
    productTab: Product
}

const ProductTabs = ({ productTab }: ProductTabsProps) => {
    return (
        <div className="mt-24 flex justify-center">
            <Tabs defaultValue="product features" className="w-full ">
                {/* Sekme başlıkları */}
                <TabsList className="bg-black text-white rounded-t-md space-x-4 ">
                    <TabsTrigger
                        value="product features"
                        className="capitalize text-sm md:text-base font-semibold hover:bg-gray-800 data-[state=active]:bg-white data-[state=active]:text-black rounded-md transition"
                    >
                        Ürün Özellikleri
                    </TabsTrigger>
                    <TabsTrigger
                        value="comments"
                        className="capitalize text-sm md:text-base font-semibold hover:bg-gray-800 data-[state=active]:bg-white data-[state=active]:text-black rounded-md transition"
                    >
                        Yorumlar
                    </TabsTrigger>
                    <TabsTrigger
                        value="product recommendations"
                        className="capitalize text-sm md:text-base font-semibold hover:bg-gray-800 data-[state=active]:bg-white data-[state=active]:text-black rounded-md transition"
                    >
                        Ürün Önerileri
                    </TabsTrigger>
                </TabsList>

                {/* Sekme içerikleri */}
                <TabsContent
                    value="product features"
                    className="p-6 border border-t-0 rounded-b-md bg-white text-gray-800 min-h-[200px]"
                >
                    {productTab.features}
                </TabsContent>
                <TabsContent
                    value="comments"
                    className="p-6 border border-t-0 rounded-b-md bg-white text-gray-800 min-h-[200px]"
                >
                    {productTab.reviews}
                </TabsContent>
                <TabsContent
                    value="product recommendations"
                    className="p-6 border border-t-0 rounded-b-md bg-white text-gray-800 min-h-[300px]"
                >
                    <h2 className="mb-4 text-lg font-semibold">
                        Bu ürünün açıklamalarında, fiyat veya diğer özelliklerinde bir hata olduğunu düşünüyorsanız aşağıdaki formu doldurarak bize geri dönebilirsiniz.
                    </h2>
                    <RadioGroup defaultValue="option-one" className="space-y-3 mb-6">
                        {[
                            { value: 'option-one', label: 'Ürün Açıklaması Yetersiz' },
                            { value: 'option-two', label: 'Açıklamada verilen bilgilerde hata var' },
                            { value: 'option-three', label: 'Ürün resmi görünmüyor veya kalitesiz' },
                            { value: 'option-four', label: 'Sayfada teknik bir problem var' },
                            { value: 'option-five', label: 'Fiyat bilgisi hatalı' },
                        ].map(({ value, label }) => (
                            <div key={value} className="flex items-center space-x-2">
                                <RadioGroupItem value={value} id={value} />
                                <Label htmlFor={value} className="cursor-pointer">
                                    {label}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                    <Button className="w-full md:w-auto">Gönder</Button>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default ProductTabs