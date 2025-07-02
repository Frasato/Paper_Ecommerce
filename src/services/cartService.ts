import { Cart } from "@/types/cartType";
import { getLocalStorage } from "@/utils/getLocalStorage";

const localUser = getLocalStorage();

export async function getUserCart(): Promise<Cart>{
    const response = await fetch(`${process.env.API_URL}/cart/${localUser.userId}`, {
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
    try{
        await fetch(`${process.env.API_URL}/cart`, {
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
    try{
        await fetch(`${process.env.API_URL}/cart/plus/${cartItemId}`, {
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
    try{
        await fetch(`${process.env.API_URL}/cart/minus/${cartItemId}`, {
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
    try{
        await fetch(`${process.env.API_URL}/cart/${cartItemId}`, {
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
    try{
        await fetch(`${process.env.API_URL}/cart/clear/${cartId}`, {
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