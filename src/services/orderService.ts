import { OrderType } from "@/types/orderType";
import { LocalStorageUser } from "@/types/userType";
import { getLocalStorageUser } from "@/utils/getLocalStorage";

export async function createOrder(deliveryOption: number): Promise<OrderType>{
    const localUser: LocalStorageUser = getLocalStorageUser();

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/order`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Authentication':`Bearer ${localUser.token}`
        },
        body: JSON.stringify({
            'userId': localUser.userId,
            'deliveryOption': deliveryOption
        })
    });

    if(response.status != 200) throw new Error("Can't create order");
    return await response.json();
}

export async function getOrdersByUser(){
    const localUser: LocalStorageUser = getLocalStorageUser();

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/order/user/${localUser.userId}`, {
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
            'Authentication':`Bearer ${localUser.token}`
        }
    });

    if(response.status != 200) throw new Error("Can't create order");
    return await response.json();
}