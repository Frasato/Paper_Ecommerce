import { ProductProps } from "@/types/productType";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";

export default function ProductCard(props: ProductProps) {
    return (
        <div>
            <Image src={props.image} alt={props.name}/>
            <h1>{props.name}</h1>
            <p>{props.description.length > 13? props.description.slice(0, 13) + "..." : props.description}</p>
            <div>
                <h2>{props.priceWithDiscount > 0? (props.priceWithDiscount / 100).toFixed(2) : (props.price / 100).toFixed(2)}</h2>
                <button><FaCartPlus /></button>
            </div>
        </div>
    );

}