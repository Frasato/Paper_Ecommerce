"use client";
import Header from "@/components/header";
import ProductCard from "@/components/productCard";
import { useProducts } from "@/hooks/useProducts";

export default function Home(){
    const { purchaseProducts, productsList } = useProducts();

    return(
        <main>
            <Header />
            <div className="promotion-banner"/>
            <div>
                <h1>Produtos mais vendidos!</h1>
                {purchaseProducts && purchaseProducts?.length > 0 && purchaseProducts.map((product, index) => {
                    return(
                        <ProductCard 
                            key={index}
                            image={product.image}
                            description={product.description}
                            name={product.name}
                            price={product.price}
                            priceWithDiscount={product.priceWithDiscount}
                        />
                    )
                })}
            </div>
            <div>
                <h1>Todos os produtos</h1>
                {productsList && productsList.length > 0 && productsList.map((products, index) => {
                    return(
                        <ProductCard 
                            key={index}
                            image={products.image}
                            description={products.description}
                            name={products.name}
                            price={products.price}
                            priceWithDiscount={products.priceWithDiscount}
                        />
                    )
                })}
            </div>
        </main>
    )
}