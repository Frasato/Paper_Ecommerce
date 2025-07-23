"use client";
import Header from "@/components/header";
import { useProducts } from "@/hooks/useProducts";
import { getLocalStorageToken } from "@/utils/getLocalStorage";
import { use, useEffect } from "react";
import { FaCartPlus, FaArrowRight } from "react-icons/fa";
import "@/styles/productPage.scss";
import Link from "next/link";
import ProductCard from "@/components/productCard";

export default function ProductPage({ params }: { params: Promise<{ productId: string }> }) { 
    const { productId } = use(params)
    const { productById, product, isLoading, categoryProducts, productsByCategory } = useProducts();
    
    useEffect(() => {
        const token = getLocalStorageToken();
        if(productId){
            void productById(productId, token);
        }
        
        if(product){
            void productsByCategory(product?.category, token);
        }
    }, [productId, product?.category]);

    return(
        <div>
            <Header />
            <main className="product-page">
                {isLoading ? (
                    <span className="loading-message">Carregando produto...</span>
                ) : product ? (
                    <>
                        <div className="product-container">
                            <div className="product-image-wrapper">
                                <img src={product.image} alt={product.name} />
                            </div>
                            
                            <div className="product-info">
                                <h1 className="product-title">{product.name}</h1>
                                <p className="product-description">{product.description}</p>
                                
                                <div className="price-section">
                                    {product.priceWithDiscount > 0 ? (
                                        <>
                                            <span className="current-price">
                                                R$ {(product.priceWithDiscount / 100).toFixed(2)}
                                            </span>
                                            <span className="original-price">
                                                R$ {(product.price / 100).toFixed(2)}
                                            </span>
                                        </>
                                    ) : (
                                        <span className="current-price">
                                            R$ {(product.price / 100).toFixed(2)}
                                        </span>
                                    )}
                                </div>
                                
                                <div className="action-buttons">
                                    <button className="btn btn-cart">
                                        <FaCartPlus />
                                        Adicionar ao Carrinho
                                    </button>
                                    <button className="btn btn-buy">
                                        Comprar Agora <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <section className="related-products">
                            <h2 className="section-title">Você também pode gostar</h2>
                            {isLoading ? (
                                <span className="loading-text">Carregando produtos relacionados...</span>
                            ) : categoryProducts && categoryProducts.length > 0 ? (
                                <div className="products-grid">
                                    {categoryProducts
                                        .filter(item => item.id !== product.id) // Remove o produto atual da lista
                                        .slice(0, 4) // Limita a 4 produtos
                                        .map((item) => (
                                            <Link href={`/home/${item.id}`} key={item.id}>
                                                <ProductCard {...item} />
                                            </Link>
                                    ))}
                                </div>
                            ) : (
                                <p className="no-products">Nenhum produto relacionado encontrado.</p>
                            )}
                        </section>
                    </>
                ) : (
                    <div className="not-found-message">
                        <h1>Produto não encontrado</h1>
                        <p>O produto que você está procurando não está disponível.</p>
                    </div>
                )}
            </main>
        </div>
    );
}