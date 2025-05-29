import { create } from "zustand";

export interface Product {
  id: number;
  name: string;
  description: string;
  images: string[];
  price: number;
  discountPrice: number;
  discountRate: number;
  brand: string;
}

interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
