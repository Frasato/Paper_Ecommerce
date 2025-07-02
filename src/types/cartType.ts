export interface Cart{
    id: string;
    totalPrice: number;
    user: string;
    cartItem: CartItem[];
}

export interface CartItem{
    id: string;
    quantity: number;
    product: string;
    cart: string
}