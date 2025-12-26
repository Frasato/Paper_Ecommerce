export async function generateToken(
    cardNumber: string,
    expirationMonth: string,
    expirationYear: string,
    securityCode: string,
    cardHolderName: string,
    documentType: string,
    documentNumber: string
){
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_ML_CARD_TOKEN_API}`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Bearer ${process.env.NEXT_PUBLIC_ML_KEY}`
        },
        body: JSON.stringify({
            "card_number": cardNumber,
            "expiration_month": Number(expirationMonth),
            "expiration_year": Number(expirationYear),
            "security_code": securityCode,
            "cardholder": {
            "name": cardHolderName,
                "identification": {
                    "type": documentType,
                    "number": documentNumber,
                }
            }
        })
    });

    if(response.status == 200){
        const data = await response.json();
        return data.id;
    }

    throw new Error('Error on generate token card: ' + response.body);
}