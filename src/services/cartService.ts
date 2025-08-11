import { Cart } from "@/types/cartType";

export async function getUserCart(userId: string, token: string): Promise<Cart>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/cart/${userId}`, {
        method: "GET",
        headers: {
            'Content-Type':"application/json",
            "Authorization":`Bearer ${token}`
        }
    });

    if(response.ok){
        const data = await response.json();
        return data;
    }

    throw new Error(`Failed to load cart by user with id: ${userId}`)
}

export async function addItemOnCart(productId: string, userId: string, token: string){
    try{
        await fetch(`${process.env.NEXT_PUBLIC_URL_API}/cart`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            },
            body: JSON.stringify({
                userId: userId,
                productId: productId
            })
        });
    }catch(err){
        throw new Error(`Failed to add item: ${productId} to the cart | ${err}`);
    }
}

export async function plusOneOnItem(cartItemId: string, token: string){
    try{
        await fetch(`${process.env.NEXT_PUBLIC_URL_API}/cart/plus/${cartItemId}`, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            },
        });
    }catch(err){
        throw new Error(`Failed to add +1 item: ${cartItemId} to the cart | ${err}`);
    }
}

export async function minusOneOnItem(cartItemId: string, token: string){
    try{
        await fetch(`${process.env.NEXT_PUBLIC_URL_API}/cart/minus/${cartItemId}`, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            },
        });
    }catch(err){
        throw new Error(`Failed to remove -1 item: ${cartItemId} to the cart | ${err}`);
    }
}

export async function removeItemCart(cartItemId: string, token: string){
    try{
        await fetch(`${process.env.NEXT_PUBLIC_URL_API}/cart/${cartItemId}`, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            },
        });
    }catch(err){
        throw new Error(`Failed to remove item: ${cartItemId} | ${err}`);
    }
}

export async function clearCart(cartId: string, token: string){
    try{
        await fetch(`${process.env.NEXT_PUBLIC_URL_API}/cart/clear/${cartId}`, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            },
        });
    }catch(err){
        throw new Error(`Failed to clear: ${cartId} | ${err}`);
    }
}