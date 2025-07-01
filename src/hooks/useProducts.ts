import { getAllProducts, getProductById } from "@/services/productService";
import { Product } from "@/types/productType";
import { useState } from "react";

export function useProducts(){
    const [product, setProduct] = useState<Product | null>(null);
    const [productsList, setProductList] = useState<Product[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const allProducts = async () =>{
        setIsLoading(true);
        setError(null);

        try{
            const products = await getAllProducts();
            setProductList(products);
        }catch(err){
            setError(`Error on get products: ${err}`);
        }finally{
            setIsLoading(false);
        }
    }

    const productById = async (id: string) =>{
        setIsLoading(true);
        setError(null);

        try{
            const productFound = await getProductById(id);
            setProduct(productFound);
        }catch(err){
            setError(`Error on get product on id: ${id} | ${err}`);
        }finally{
            setIsLoading(true);
        }
    }

    const clearError = () =>{
        setError(null);
    }

    return{
        isLoading,
        product,
        productsList,
        error,
        allProducts,
        productById,
        clearError
    }
}