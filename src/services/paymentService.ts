import { generateToken } from "./cardTokenService";

export async function pix(token: string, userId: string, orderId: string) {
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

export async function card(
    token: string,
    userId: string,
    orderId: string,
    installments: number,
    paymentMethod: string,
    cardNumber: string,
    expirationMonth: string,
    expirationYear: string,
    securityCode: string,
    cardHolderName: string,
    documentType: string,
    documentNumber: string
) {

    const cardToken = await generateToken(cardNumber, expirationMonth, expirationYear, securityCode, cardHolderName, documentType, documentNumber);

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/pay/card`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Authentication':`Bearer ${token}`
        },
        body: JSON.stringify({
            "userId": userId,
            "orderId": orderId,
            "cardToken": cardToken,
            "installments": installments,
            "paymentMethodId": paymentMethod
        })
    });

    if(response.status != 200) throw new Error("Error on pay with pix");
    return await response.json();
}