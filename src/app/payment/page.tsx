import Header from "@/components/header";
import { useDelivery } from "@/hooks/useDelivery";
import { useOrder } from "@/hooks/useOrder"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function page(){

    const {order, orderItem} = useOrder();
    const { isLoading,  error, delivery, deliveryOptions } = useDelivery();
    const router = useRouter();
    const [option, setOption] = useState<string>();

    useEffect(()=>{
        deliveryOptions()
    }, []);

    const createOrder = async () =>{
        await order(Number(option));
        if(!orderItem) throw new Error("")
        router.push(`/payment/${orderItem.id}`)
    }

    return(
        <main>
            <Header />
            {isLoading?
                <span>Loading...</span>
                :
                error == null? 
                    <h1>{error}</h1> 
                    :
                    delivery?.map((item, index)=>{
                        return(
                            <>
                                <h1>{item.name}</h1>
                                <div>
                                    <h3>R${item.price}</h3>
                                    <h3>Prazo: {item.delivery_time}</h3>
                                </div>
                                <button onClick={()=> setOption(item.id)}>Enviar</button>
                            </>
                        );
                    })
            }
            <button onClick={()=>createOrder}></button>
        </main>
    )
}