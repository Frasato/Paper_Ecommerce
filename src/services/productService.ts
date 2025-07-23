import { Product } from "@/types/productType";

export async function getAllProducts(token: string): Promise<Product[]>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/product`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    });

    if(response.ok){
        const data = await response.json();
        return data.products;
    }

    throw new Error("Products not found!");
}

export async function getProductById(id: string, token: string): Promise<Product>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/product/${id}`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    });

    if(response.ok){
        const data = await response.json();
        return data.product;
    }

    throw new Error(`Product not found on id: ${id}`);
}

export async function getProductByCategory(category: string, token: string): Promise<Product[]>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/product/cat/${category}`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    });

    if(response.ok){
        const data = await response.json();
        return data;
    }

    throw new Error(`Products not found on category: ${category}`);
}

export async function getPurchaseProducts(token: string): Promise<Product[]>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/product/purchase`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    });

    if(response.ok){
        const data = await response.json();
        return data;
    }

    throw new Error(`Products not found!`);
}