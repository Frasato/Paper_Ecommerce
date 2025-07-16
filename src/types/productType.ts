export interface Product{
    id: string;
    image: string;
    barCode: string;
    name: string;
    description: string;
    producer: string;
    price: number;
    discount: number;
    priceWithDiscount: number;
    category: string;
}

export interface ProductProps{
    image: string;
    name: string;
    description: string;
    price: number;
    priceWithDiscount: number;
}

export interface useProductProps{
    product: Product | null;
    productsList: Product[] | null;
    categoryProducts: Product[] | null;
    purchaseProducts: Product[] | null;
    isLoading: boolean;
    error: string | null;
    allProducts: () => Promise<void>;
    productById: (id: string) => Promise<void>;
    productsByCategory: (category: string) => Promise<void>;
    productsByPurchase: () => Promise<void>;
    clearError: () => void;
}