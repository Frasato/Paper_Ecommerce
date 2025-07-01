import { Product } from "@/types/productType";
import { getLocalStorage } from "@/utils/getLocalStorage";

const user = getLocalStorage();

export async function getAllProducts(): Promise<Product[]>{
    const response = await fetch(`${process.env.URL_API}/product`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${user.token}`
        }
    });

    if(response.ok){
        const data = await response.json();
        return data;
    }

    throw new Error("Products not found!");
}

export async function getProductById(id: string): Promise<Product>{
    const response = await fetch(`${process.env.URL_API}/product/${id}`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${user.token}`
        }
    });

    if(response.ok){
        const data = await response.json();
        return data;
    }

    throw new Error(`Product not found on id: ${id}`);
}

export async function getProductByCategory(category: string): Promise<Product[]>{
    const response = await fetch(`${process.env.URL_API}/product/cat/${category}`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${user.token}`
        }
    });

    if(response.ok){
        const data = await response.json();
        return data;
    }

    throw new Error(`Products not found on category: ${category}`);
}

export async function getPurchaseProducts(): Promise<Product[]>{
    const response = await fetch(`${process.env.URL_API}/product/purchase`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${user.token}`
        }
    });

    if(response.ok){
        const data = await response.json();
        return data;
    }

    throw new Error(`Products not found!`);
}