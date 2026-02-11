import { Delivery } from "@/types/deliveryTypes";
import { LocalStorageUser } from "@/types/userType";
import { getLocalStorageUser } from "@/utils/getLocalStorage";

export async function calculateDelivery(): Promise<Delivery[]>{
    const localUser: LocalStorageUser = getLocalStorageUser();

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/delivery`, {
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Bearer ${localUser.token}`
        },
        body: JSON.stringify({
            userId: localUser.userId
        })
    });

    if(!response.ok) throw new Error("Can't calculate deliveries!");
    return await response.json();
}