import { Cart } from "@/types/cartType";
import { LocalStorageUser } from "@/types/userType";
import { getLocalStorageUser } from "@/utils/getLocalStorage";

export async function getUserCart(): Promise<Cart>{
    const localUser: LocalStorageUser = getLocalStorageUser();

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/cart/${localUser.userId}`, {
        method: "GET",
        headers: {
            'Content-Type':"application/json",
            "Authorization":`Bearer ${localUser.token}`
        }
    });

    if(response.ok){
        const data = await response.json();
        return data;
    }

    throw new Error(`Failed to load cart by user with id: ${localUser.userId}`)
}

export async function addItemOnCart(productId: string){
    const localUser: LocalStorageUser = getLocalStorageUser();

    try{
        await fetch(`${process.env.NEXT_PUBLIC_URL_API}/cart`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${localUser.token}`
            },
            body: JSON.stringify({
                userId: localUser.userId,
                productId: productId
            })
        });
    }catch(err){
        throw new Error(`Failed to add item: ${productId} to the cart | ${err}`);
    }
}

export async function plusOneOnItem(cartItemId: string){
    const localUser: LocalStorageUser = getLocalStorageUser();

    try{
        await fetch(`${process.env.NEXT_PUBLIC_URL_API}/cart/plus/${cartItemId}`, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${localUser.token}`
            },
        });
    }catch(err){
        throw new Error(`Failed to add +1 item: ${cartItemId} to the cart | ${err}`);
    }
}

export async function minusOneOnItem(cartItemId: string){
    const localUser: LocalStorageUser = getLocalStorageUser();

    try{
        await fetch(`${process.env.NEXT_PUBLIC_URL_API}/cart/minus/${cartItemId}`, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${localUser.token}`
            },
        });
    }catch(err){
        throw new Error(`Failed to remove -1 item: ${cartItemId} to the cart | ${err}`);
    }
}

export async function removeItemCart(cartItemId: string){
    const localUser: LocalStorageUser = getLocalStorageUser();

    try{
        await fetch(`${process.env.NEXT_PUBLIC_URL_API}/cart/${cartItemId}`, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${localUser.token}`
            },
        });
    }catch(err){
        throw new Error(`Failed to remove item: ${cartItemId} | ${err}`);
    }
}

export async function clearCart(cartId: string){
    const localUser: LocalStorageUser = getLocalStorageUser();
    
    try{
        await fetch(`${process.env.NEXT_PUBLIC_URL_API}/cart/clear/${cartId}`, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${localUser.token}`
            },
        });
    }catch(err){
        throw new Error(`Failed to clear: ${cartId} | ${err}`);
    }
}