export interface Product{
    id: string;
    image: string;
    barCode: string;
    name: string;
    description: string;
    height: string;
    width: string;
    product_length: string;
    weight: string;
    producer: string;
    price: number;
    discount: number;
    priceWithDiscount: number;
    category: string;
}

export interface ProductProps{
    id: string;
    image: string;
    name: string;
    description: string;
    price: number;
    priceWithDiscount: number;
    userId: string;
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