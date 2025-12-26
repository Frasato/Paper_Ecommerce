export async function calculateDelivery(userId:string, token: string){
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/delivery`, {
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        },
        body: JSON.stringify({
            userId: userId
        })
    });

    if(!response.ok) throw new Error("Can't calculate deliveries!");

    return await response.json();
}