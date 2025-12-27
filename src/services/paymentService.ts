import { PixType } from "@/types/paymentType";

export async function pixCreate(token: string, userId: string, orderId: string): Promise<PixType> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/pay/pix`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Authentication':`Bearer ${token}`
        },
        body: JSON.stringify({
            'userId': userId,
            'orderId': orderId
        })
    });

    if(response.status != 200) throw new Error("Error on pay with pix");
    return await response.json();
}

export async function cardCreate(
    token: string,
    userId: string,
    orderId: string,
    installments: number,
    cardNumber: string,
    expirationMonth: string,
    expirationYear: string,
    securityCode: string,
    cardHolderName: string,
) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/pay/card`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Authentication':`Bearer ${token}`
        },
        body: JSON.stringify({
            "userId": userId,
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