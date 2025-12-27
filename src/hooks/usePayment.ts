import { cardCreate, pixCreate } from "@/services/paymentService";
import { PixType } from "@/types/paymentType";
import { useState } from "react";

export function usePayment(){
    const [pix, setPix] = useState<PixType>();
    const [card, setCard] = useState(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const pixPayment = async (orderId: string) =>{
        setIsLoading(true);
        setError(null);

        try{
            const localData = localStorage.getItem("user");
            if(!localData) throw new Error("User not found!");
            const userData = JSON.parse(localData);
            const response = await pixCreate(userData.token, userData.userId, orderId);
            setPix(response);
        }catch(error){
            setError("Error: " + error);
        }finally{
            setIsLoading(false);
        }
    }

    const cardPayment = async (
        orderId: string,
        installments: number,
        cardNumber: string,
        expirationMonth: string,
        expirationYear: string,
        securityCode: string,
        cardHolderName: string,
    ) =>{
        setIsLoading(true);
        setError(null);

        try{
            const localData = localStorage.getItem("user");
            if(!localData) throw new Error("User not found!");
            const userData = JSON.parse(localData);
            const response = await cardCreate(userData.token, userData.userId, orderId, installments, cardNumber, expirationMonth, expirationYear, securityCode, cardHolderName);
            setCard(response);
        }catch(error){
            setError("Error: " + error);
        }finally{
            setIsLoading(false);
        }
    }

    const clearError = () => setError(null);

    return{
        pix,
        card,
        isLoading,
        error,
        pixPayment,
        cardPayment,
        clearError
    }
}