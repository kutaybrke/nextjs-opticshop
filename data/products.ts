export type Product = {
    id: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    discountPrice: number;
    discountRate: number;
    inStock: boolean;
    category: "Çok Satanlar" | "Numara" | "Çocuk" | "Kadın" | "Erkek";
    images: string[];
    gender: "Unisex" | "Erkek" | "Kadın";
    frameType: string;
    features: string;
    reviews: string[];

};

export const products: Product[] = [
    {
        id: 1,
        name: "Ray-Ban Aviator Classic",
        brand: "Ray-Ban",
        description: "İkonik metal çerçeveli klasik güneş gözlüğü.",
        price: 2999,
        discountPrice: 2499,
        discountRate: 17,
        inStock: true,
        category: "Çok Satanlar",
        images: [
            "https://images.ray-ban.com/is/image/RayBan/805289602057__002.png",
            "https://images.ray-ban.com/is/image/RayBan/805289602057__002.png",
        ],
        gender: "Unisex",
        frameType: "Metal",
        features: "UV400 koruma, hafif metal çerçeve, pilot tarzı tasarım.",
        reviews: [
            "Çok kaliteli ve şık bir ürün. Tavsiye ederim!",
            "Ray-Ban kalitesi tartışılmaz.",
        ],

    },
    {
        id: 2,
        name: "Ray-Ban Clubmaster",
        brand: "Ray-Ban",
        description: "Retro tarzıyla dikkat çeken Clubmaster modeli.",
        price: 3199,
        discountPrice: 2799,
        discountRate: 13,
        inStock: true,
        category: "Kadın",
        images: [
            "https://images.ray-ban.com/is/image/RayBan/805289126577__002.png",
            "https://images.ray-ban.com/is/image/RayBan/805289126577__002.png",
        ],
        gender: "Unisex",
        frameType: "Metal",
        features: "Yarım çerçeve tasarımı, UV400 lens, retro stil.",
        reviews: [
            "Çok beğendim, yüzüme tam oturdu.",
            "Retro stil sevenler için ideal."
        ],

    },
    {
        id: 3,
        name: "Ray-Ban Round Metal",
        brand: "Ray-Ban",
        description: "Yuvarlak camlı bohem tarz güneş gözlüğü.",
        price: 2899,
        discountPrice: 2399,
        discountRate: 17,
        inStock: false,
        category: "Çok Satanlar",
        images: [
            "https://images.ray-ban.com/is/image/RayBan/805289602057__002.png",
        ],
        gender: "Kadın",
        frameType: "Metal",
        features: "UV400 koruma, hafif metal çerçeve, pilot tarzı tasarım.",
        reviews: [
            "Çok kaliteli ve şık bir ürün. Tavsiye ederim!",
            "Ray-Ban kalitesi tartışılmaz.",
        ],
    },
    {
        id: 4,
        name: "Oakley Holbrook",
        brand: "Oakley",
        description: "Sporcu stilini tamamlayan dayanıklı çerçeve.",
        price: 2799,
        discountPrice: 2299,
        discountRate: 18,
        inStock: true,
        category: "Erkek",
        images: [
            "https://images.ray-ban.com/is/image/RayBan/805289602057__002.png",
            "https://images.ray-ban.com/is/image/RayBan/805289602057__002.png",
        ],
        gender: "Erkek",
        frameType: "Plastik",
        features: "UV400 koruma, hafif metal çerçeve, pilot tarzı tasarım.",
        reviews: [
            "Çok kaliteli ve şık bir ürün. Tavsiye ederim!",
            "Ray-Ban kalitesi tartışılmaz.",
        ],
    },
    {
        id: 5,
        name: "Oakley Frogskins",
        brand: "Oakley",
        description: "Renkli lensli klasik spor çerçeve.",
        price: 2499,
        discountPrice: 1999,
        discountRate: 20,
        inStock: false,
        category: "Kadın",
        images: [
            "https://images.ray-ban.com/is/image/RayBan/805289602057__002.png",
            "https://images.ray-ban.com/is/image/RayBan/805289602057__002.png",
        ],
        gender: "Unisex",
        frameType: "Plastik",
        features: "UV400 koruma, hafif metal çerçeve, pilot tarzı tasarım.",
        reviews: [
            "Çok kaliteli ve şık bir ürün. Tavsiye ederim!",
            "Ray-Ban kalitesi tartışılmaz.",
        ],
    },
    {
        id: 6,
        name: "Vogue VO5239S",
        brand: "Vogue",
        description: "Şık ve kadınsı tasarıma sahip güneş gözlüğü.",
        price: 1999,
        discountPrice: 1599,
        discountRate: 20,
        inStock: true,
        category: "Çocuk",
        images: [
            "https://images.ray-ban.com/is/image/RayBan/805289602057__002.png",
            "https://images.ray-ban.com/is/image/RayBan/805289602057__002.png",
        ],
        gender: "Kadın",
        frameType: "Plastik",
        features: "UV400 koruma, hafif metal çerçeve, pilot tarzı tasarım.",
        reviews: [
            "Çok kaliteli ve şık bir ürün. Tavsiye ederim!",
            "Ray-Ban kalitesi tartışılmaz.",
        ],
    },
    {
        id: 7,
        name: "Persol PO0649",
        brand: "Persol",
        description: "İtalya yapımı el işçiliği klasik gözlük.",
        price: 3499,
        discountPrice: 3199,
        discountRate: 9,
        inStock: true,
        category: "Çocuk",
        images: [
            "https://images.ray-ban.com/is/image/RayBan/805289602057__002.png",
            "https://images.ray-ban.com/is/image/RayBan/805289602057__002.png",
        ],
        gender: "Erkek",
        frameType: "Acetat",
        features: "UV400 koruma, hafif metal çerçeve, pilot tarzı tasarım.",
        reviews: [
            "Çok kaliteli ve şık bir ürün. Tavsiye ederim!",
            "Ray-Ban kalitesi tartışılmaz.",
        ],
    },
    {
        id: 8,
        name: "Vogue VO2606S",
        brand: "Vogue",
        description: "Modern çizgilere sahip unisex güneş gözlüğü.",
        price: 1899,
        discountPrice: 1499,
        discountRate: 21,
        inStock: true,
        category: "Çocuk",
        images: [
            "https://images.ray-ban.com/is/image/RayBan/805289602057__002.png",
            "https://images.ray-ban.com/is/image/RayBan/805289602057__002.png",
        ],
        gender: "Unisex",
        frameType: "Plastik",
        features: "UV400 koruma, hafif metal çerçeve, pilot tarzı tasarım.",
        reviews: [
            "Çok kaliteli ve şık bir ürün. Tavsiye ederim!",
            "Ray-Ban kalitesi tartışılmaz.",
        ],
    },
    {
        id: 9,
        name: "Ray-Ban Justin",
        brand: "Ray-Ban",
        description: "Modern ve genç tasarımlı güneş gözlüğü.",
        price: 2699,
        discountPrice: 2199,
        discountRate: 18,
        inStock: false,
        category: "Erkek",
        images: [
            "https://images.ray-ban.com/is/image/RayBan/805289126577__002.png",
            "https://images.ray-ban.com/is/image/RayBan/805289126577__002.png",
        ],
        gender: "Erkek",
        frameType: "Plastik",
        features: "UV400 koruma, hafif metal çerçeve, pilot tarzı tasarım.",
        reviews: [
            "Çok kaliteli ve şık bir ürün. Tavsiye ederim!",
            "Ray-Ban kalitesi tartışılmaz.",
        ],
    },
    {
        id: 10,
        name: "Oakley Sutro",
        brand: "Oakley",
        description: "Fütüristik lens tasarımıyla öne çıkan sporcu gözlüğü.",
        price: 2999,
        discountPrice: 2499,
        discountRate: 17,
        inStock: true,
        category: "Çok Satanlar",
        images: [
            "https://images.ray-ban.com/is/image/RayBan/805289126577__002.png",
            "https://images.ray-ban.com/is/image/RayBan/805289126577__002.png",
        ],
        gender: "Unisex",
        frameType: "Plastik",
        features: "UV400 koruma, hafif metal çerçeve, pilot tarzı tasarım.",
        reviews: [
            "Çok kaliteli ve şık bir ürün. Tavsiye ederim!",
            "Ray-Ban kalitesi tartışılmaz.",
        ],
    }
];
