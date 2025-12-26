import { calculateDelivery } from "@/services/deliveryService";
import { useState } from "react";

export async function useDelivery(){
    const [delivery, setDelivery] = useState(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const deliveryOptions = async () =>{
        setIsLoading(true);
        setError(null);

        try{
            const localData = localStorage.getItem("user");
            if(!localData) throw new Error("User not found!");
            const userData = JSON.parse(localData);
            const response = await calculateDelivery(userData.userId, userData.token);
            setDelivery(response);
        }catch(error){
            setError("Error: " + error);
        }finally{
            setIsLoading(false);
        }
    }
    
    const clearError = () => setError(null);
    
    return{
        isLoading,
        error,
        delivery,
        deliveryOptions,
        clearError
    }
}