"use client";
import { useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";

export default function Header(){
    const router = useRouter();

    return(
        <header>
            <div>
                <button onClick={() => router.push('/home')}>Inicio</button>
                <button onClick={() => router.push('/promotions')}>Promoções</button>
                <button onClick={() => router.push('/catalogue')}>Catálogo</button>
                <button onClick={() => router.push('/orders')}>Pedidos</button>
                <button onClick={() => router.push('/')}>Sair</button>
            </div>
            <div>
                <button onClick={() => router.push('/cart')}>
                    <FaShoppingCart />
                    <span>0</span>
                </button>
                <button onClick={() => router.push('/profile')}>
                    <IoPersonCircle />
                </button>
            </div>
        </header>
    )
}