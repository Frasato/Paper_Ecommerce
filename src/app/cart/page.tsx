"use client";
import CartProductCard from "@/components/cartProductCard";
import Header from "@/components/header";
import { useCart } from "@/hooks/useCart";
import { useEffect, useState } from "react";
import "@/styles/cartPage.scss";
import Link from "next/link";
import { useProducts } from "@/hooks/useProducts";

export default function Cart() {
    const { isLoading, cart, getCart } = useCart();
    const { productById } = useProducts();

    const [productMap, setProductMap] = useState<Record<string, unknown>>({});

    useEffect(() => {
        void getCart();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            if (!cart) return;

            const newProductMap: Record<string, any> = {};

            for (const item of cart.cartItem) {
                const id = item.product.id || item.product;
                if (!productMap[id]) {
                    const fullProduct = await productById(id);
                    newProductMap[id] = fullProduct;
                }
            }

            setProductMap(prev => ({ ...prev, ...newProductMap }));
        };

        void fetchProducts();
    }, [cart]);

    return (
        <div>
            <Header />
            <main className="cart-page">
                {isLoading ? (
                    <span className="loading-message">Carregando...</span>
                ) : cart && cart.cartItem.length > 0 ? (
                    <div className="cart-container">
                        <div className="cart-items">
                            {cart.cartItem.map((item, index) => (
                                <CartProductCard
                                    key={index}
                                    cartItemId={item.id}
                                    productId={item.product.id || item.product}
                                    quantity={item.quantity}
                                />
                            ))}
                        </div>

                        <div className="cart-summary">
                            <h3 className="summary-title">Resumo do Pedido</h3>

                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>R$ {(cart.totalPrice / 100).toFixed(2)}</span>
                            </div>

                            <div className="summary-row">
                                <span>Frete</span>
                                <span>Grátis</span>
                            </div>

                            <div className="summary-row total">
                                <span>Total</span>
                                <span>R$ {(cart.totalPrice / 100).toFixed(2)}</span>
                            </div>

                            <button className="checkout-button">Finalizar Compra</button>
                        </div>
                    </div>
                ) : (
                    <div className="empty-cart">
                        <h1>Nenhum item no seu carrinho!</h1>
                        <Link href="/home">
                            <button className="continue-shopping">Continuar Comprando</button>
                        </Link>
                    </div>
                )}
            </main>
        </div>
    );
}
