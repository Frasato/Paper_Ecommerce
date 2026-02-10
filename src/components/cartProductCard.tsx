"use client";
import { useCart } from "@/hooks/useCart";
import { useProducts } from "@/hooks/useProducts"
import { getLocalStorageUser } from "@/utils/getLocalStorage";
import { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import "@/styles/cartProductCard.scss";

export default function CartProductCard(props: { productId: string, quantity: number, cartItemId: string}){
    const { removeItem, minusOne, plusOne } = useCart();
    const { productById, product, isLoading } = useProducts();

    useEffect(()=>{
        const productId = props.productId;
        void productById(productId);
    },[]);

    return(
        <div className="cart-product-card">
            {isLoading ? (
                <span>Carregando...</span>
            ) : product ? (
                <>
                    <img 
                        className="product-image" 
                        src={product.image} 
                        alt={product.name}
                    />
                    
                    <div className="product-info">
                        <h3 className="product-name">{product.name}</h3>
                        <h4 className="product-price">
                            R$ {product.priceWithDiscount > 0 ?
                                (product.priceWithDiscount / 100).toFixed(2) :
                                (product.price / 100).toFixed(2)}
                        </h4>
                    </div>
                    
                    <div className="quantity-controls">
                        <button 
                            className="quantity-button"
                            onClick={() => minusOne(props.cartItemId)}
                        >
                            -
                        </button>
                        <span className="quantity-display">{props.quantity}</span>
                        <button 
                            className="quantity-button"
                            onClick={() => plusOne(props.cartItemId)}
                        >
                            +
                        </button>
                    </div>
                    
                    <button 
                        className="remove-button"
                        onClick={() => removeItem(props.cartItemId)}
                        aria-label="Remover item"
                    >
                        <FaTrash />
                    </button>
                </>
            ) : null}
        </div>
    )
}