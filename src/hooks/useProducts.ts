import { getAllProducts, getProductByCategory, getProductById, getPurchaseProducts } from "@/services/productService";
import { Product, useProductProps } from "@/types/productType";
import { useState } from "react";

export function useProducts(): useProductProps{
    const [product, setProduct] = useState<Product | null>(null);
    const [productsList, setProductList] = useState<Product[] | null>(null);
    const [categoryProducts, setCategoryProducts] = useState<Product[] | null>(null);
    const [purchaseProducts, setPurchaseProducts] = useState<Product[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const allProducts = async (token: string) =>{
        setIsLoading(true);
        setError(null);

        try{
            const products = await getAllProducts(token);
            setProductList(products);
        }catch(err){
            setError(`Error on get products: ${err}`);
        }finally{
            setIsLoading(false);
        }
    }

    const productById = async (id: string, token: string) =>{
        setIsLoading(true);
        setError(null);

        try{
            const productFound = await getProductById(id, token);
            setProduct(productFound);
        }catch(err){
            setError(`Error on get product on id: ${id} | ${err}`);
        }finally{
            setIsLoading(true);
        }
    }

    const productsByCategory = async (category: string, token: string) =>{
        setIsLoading(true);
        setError(null);

        try{
            const productsFound = await getProductByCategory(category, token);
            setCategoryProducts(productsFound);
        }catch(err){
            setError(`Error on get product on category: ${category} | ${err}`);
        }finally{
            setIsLoading(false);
        }
    }

    const productsByPurchase = async (token: string) =>{
        setIsLoading(true);
        setError(null);

        try{
            const productsFound = await getPurchaseProducts(token);
            setPurchaseProducts(productsFound);
        }catch(err){
            setError(`Error on get products purchase | ${err}`);
        }finally{
            setIsLoading(false);
        }
    }

    const clearError = () =>{
        setError(null);
    }

    return{
        isLoading,
        product,
        productsList,
        categoryProducts,
        purchaseProducts,
        error,
        productsByCategory,
        productsByPurchase,
        allProducts,
        productById,
        clearError
    }
}