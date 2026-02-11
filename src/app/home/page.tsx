"use client";
import Header from "@/components/header";
import ProductCard from "@/components/productCard";
import { useProducts } from "@/hooks/useProducts";
import { useEffect, useState } from "react";
import banner from "@/assets/banner.jpg";
import Image from "next/image";
import "@/styles/home.scss";
import Link from "next/link";

export default function Home() {
    const { purchaseProducts, productsList, allProducts, productsByPurchase, isLoading } = useProducts();

    useEffect(() => {
        void allProducts();
        void productsByPurchase();
    }, []);

    if(isLoading) {
        return (
            <div className="loading-container">
                <div className="loader"></div>
            </div>
        )
    }

    return(
        <div>
            <Header />
            <main className="home-page">
                <Image 
                    className="banner" 
                    src={banner} 
                    alt="Promotion banner"
                    priority
                />
                
                <section className="section">
                    <h2 className="section-title">Produtos mais vendidos!</h2>
                    <div className="products-grid">
                        {purchaseProducts && purchaseProducts?.length > 0 && purchaseProducts?.map((product, index) => (
                            <Link href={`/home/${product.id}`} key={index}>
                                <ProductCard
                                    {...product}
                                />
                            </Link>
                        ))}
                    </div>
                </section>
                
                <section className="section">
                    <h2 className="section-title">Todos os produtos</h2>
                    <div className="products-grid">
                        {productsList && productsList?.length > 0 && productsList?.map((product, index) => (
                            <Link href={`/home/${product.id}`} key={index}>
                                <ProductCard
                                    {...product}
                                />
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}