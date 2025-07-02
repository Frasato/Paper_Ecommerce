import { addItemOnCart, getUserCart, minusOneOnItem, plusOneOnItem, removeItemCart, clearCart } from "@/services/cartService";
import { Cart } from "@/types/cartType";
import { useState } from "react";

export function useCart(){
    const [cart, setCart] = useState<Cart | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const getCart = async () => {
        setIsLoading(true);
        setError(null);

        try{
            const response = await getUserCart();
            setCart(response);
        }catch(err){
            setError(`Failed to load cart for user | ${err}`);
        }finally{
            setIsLoading(false);
        }
    }

    const addItem = async (productId: string) =>{
        setIsLoading(true);
        setError(null);

        try{
            await addItemOnCart(productId);
        }catch(err){
            setError(`Failed to add item to cart, product id: ${productId} | ${err}`);
        }finally{
            setIsLoading(false);
        }
    }

    const plusOne = async (cartItemId: string) =>{
        setIsLoading(true);
        setError(null);

        try{
            await plusOneOnItem(cartItemId);
        }catch(err){
            setError(`Failed to plus one to cart item: ${cartItemId} | ${err}`);
        }finally{
            setIsLoading(false);
        }
    }
    
    const minusOne = async (cartItemId: string) =>{
        setIsLoading(true);
        setError(null);

        try{
            await minusOneOnItem(cartItemId);
        }catch(err){
            setError(`Failed to minus one to cart item: ${cartItemId} | ${err}`);
        }finally{
            setIsLoading(false);
        }
    }
    
    const removeItem = async (cartItemId: string) =>{
        setIsLoading(true);
        setError(null);

        try{
            await removeItemCart(cartItemId);
        }catch(err){
            setError(`Failed to remove cart item: ${cartItemId} | ${err}`);
        }finally{
            setIsLoading(false);
        }
    }
    
    const clearUserCart = async (cartId: string) =>{
        setIsLoading(true);
        setError(null);

        try{
            await clearCart(cartId);
        }catch(err){
            setError(`Failed to clear cart: ${cartId} | ${err}`);
        }finally{
            setIsLoading(false);
        }
    }

    return{
        cart,
        isLoading,
        error,
        getCart,
        addItem,
        plusOne,
        minusOne,
        removeItem,
        clearUserCart
    }
}