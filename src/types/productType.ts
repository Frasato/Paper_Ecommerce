export interface Product{
    id: string;
    image: string;
    barCode: string;
    description: string;
    producer: string;
    price: number;
    discount: number;
    priceWithDiscount: number;
    category: string;
}

export interface useProductProps{
    product: Product | null;
    isLoading: boolean;
    error: string | null;
    allProducts: () => Promise<void>;
    productsById: (id: string) => Promise<void>;
    clearError: () => void;
}