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
    allProducts: (token: string) => Promise<void>;
    productById: (id: string, token: string) => Promise<void>;
    productsByCategory: (category: string, token: string) => Promise<void>;
    productsByPurchase: (token: string) => Promise<void>;
    clearError: () => void;
}