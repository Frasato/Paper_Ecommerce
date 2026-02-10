import { Product } from "@/types/productType";
import { LocalStorageUser } from "@/types/userType";
import { getLocalStorageUser } from "@/utils/getLocalStorage";

export async function getAllProducts(): Promise<Product[]>{
    const localUser: LocalStorageUser = getLocalStorageUser();

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/product`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${localUser.token}`
        }
    });

    if(response.ok){
        const data = await response.json();
        return data.products;
    }

    throw new Error("Products not found!");
}

export async function getProductById(id: string): Promise<Product>{
    const localUser: LocalStorageUser = getLocalStorageUser();

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/product/${id}`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${localUser.token}`
        }
    });

    if(response.ok){
        const data = await response.json();
        return data.product;
    }

    throw new Error(`Product not found on id: ${id}`);
}

export async function getProductByCategory(category: string): Promise<Product[]>{
    const localUser: LocalStorageUser = getLocalStorageUser();

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/product/cat/${category}`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${localUser.token}`
        }
    });

    if(response.ok){
        const data = await response.json();
        return data;
    }

    throw new Error(`Products not found on category: ${category}`);
}

export async function getPurchaseProducts(): Promise<Product[]>{
    const localUser: LocalStorageUser = getLocalStorageUser();

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/product/purchase`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${localUser.token}`
        }
    });

    if(response.ok){
        const data = await response.json();
        return data;
    }

    throw new Error(`Products not found!`);
}