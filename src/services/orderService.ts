export async function createOrder(userId: string, token: string, deliveryOption: number){
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/order`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Authentication':`Bearer ${token}`
        },
        body: JSON.stringify({
            'userId': userId,
            'deliveryOption': deliveryOption
        })
    });

    if(response.status != 200) throw new Error("Can't create order");
    return await response.json();
}

export async function getOrdersByUser(userId: string, token: string){
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/order/user/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
            'Authentication':`Bearer ${token}`
        }
    });

    if(response.status != 200) throw new Error("Can't create order");
    return await response.json();
}