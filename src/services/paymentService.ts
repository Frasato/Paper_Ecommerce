import { PixType } from "@/types/paymentType";
import { LocalStorageUser } from "@/types/userType";
import { getLocalStorageUser } from "@/utils/getLocalStorage";

export async function pixCreate(orderId: string): Promise<PixType> {
    const localUser: LocalStorageUser = getLocalStorageUser();

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/pay/pix`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Authentication':`Bearer ${localUser.token}`
        },
        body: JSON.stringify({
            'userId': localUser.userId,
            'orderId': orderId
        })
    });

    if(response.status != 200) throw new Error("Error on pay with pix");
    return await response.json();
}

export async function cardCreate(
    orderId: string,
    installments: number,
    cardNumber: string,
    expirationMonth: string,
    expirationYear: string,
    securityCode: string,
    cardHolderName: string,
) {
    const localUser: LocalStorageUser = getLocalStorageUser();

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/pay/card`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Authentication':`Bearer ${localUser.token}`
        },
        body: JSON.stringify({
            "userId": localUser.userId,
            "orderId": orderId,
            "installments": installments,
            "cardNumber": cardNumber,
            "cardholderName": cardHolderName,
            "expirationMonth": expirationMonth,
            "expirationYear": expirationYear,
            "securityCode": securityCode
        })
    });

    if(response.status != 200) throw new Error("Error on pay with pix");
    return await response.json();
}