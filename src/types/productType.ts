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