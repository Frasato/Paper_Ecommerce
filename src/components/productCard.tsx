import { ProductProps } from "@/types/productType";
import { FaCartPlus } from "react-icons/fa";
import "@/styles/productCard.scss";
import { useCart } from "@/hooks/useCart";

export default function ProductCard(props: ProductProps) {
    const hasDiscount = props.priceWithDiscount > 0;
    const { addItem, isLoading } = useCart();
    
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img 
                    className="product-image" 
                    src={props.image} 
                    alt={props.name}
                />
            </div>
            <div className="product-content">
                <h3 className="product-name">{props.name}</h3>
                <p className="product-description">
                    {props.description.length > 100 
                        ? `${props.description.slice(0, 100)}...` 
                        : props.description}
                </p>
                <div className="product-footer">
                    <div>
                        {hasDiscount && (
                            <span className="product-price original-price">
                                R$ {(props.price / 100).toFixed(2)}
                            </span>
                        )}
                        <span className={`product-price ${hasDiscount ? 'discounted' : ''}`}>
                            R$ {hasDiscount ? (props.priceWithDiscount / 100).toFixed(2) : (props.price / 100).toFixed(2)}
                        </span>
                    </div>
                    <button className="add-to-cart" onClick={() => addItem(props.id, props.userId)}>
                        {
                            isLoading? <span>Carregando...</span> : <FaCartPlus />
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}