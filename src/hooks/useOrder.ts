import { createOrder, getOrdersByUser } from "@/services/orderService";
import { useState } from "react";

export function useOrder(){
    const [orderList, setOrderList] = useState(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const order = async (deliveryOption: number) =>{
        setIsLoading(true);
        setError(null);

        try{
            const localData = localStorage.getItem("user");
            if(!localData) throw new Error("User not found!");
            const userData = JSON.parse(localData);
            await createOrder(userData.userId, userData.token, deliveryOption);
        }catch(error){
            setError("Error: " + error);
        }finally{
            setIsLoading(false);
        }
    }

    const allOrders = async () =>{
        setIsLoading(true);
        setError(null);

        try{
            const localData = localStorage.getItem("user");
            if(!localData) throw new Error("User not found!");
            const userData = JSON.parse(localData);
            const orderData = await getOrdersByUser(userData.userId, userData.token);
            setOrderList(orderData);
        }catch(error){
            setError("Error: " + error);
        }finally{
            setIsLoading(false);
        }
    }

    const clearError = () => setError(null);

    return{
        orderList,
        error,
        isLoading,
        order,
        allOrders,
        clearError
    }
}