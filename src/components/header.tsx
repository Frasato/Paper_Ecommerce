"use client";
import { useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import logo from "@/assets/icon.png";
import Image from "next/image";
import "@/styles/header.scss";

export default function Header() {
    const router = useRouter();

    return(
        <header className="header">
            <nav className="header-nav">
                <button 
                    className="nav-button" 
                    onClick={() => router.push('/home')}
                >
                    Inicio
                </button>
                <button 
                    className="nav-button"
                    onClick={() => router.push('/promotions')}
                >
                    Promoções
                </button>
                <button 
                    className="nav-button"
                    onClick={() => router.push('/catalogue')}
                >
                    Catálogo
                </button>
                <button 
                    className="nav-button"
                    onClick={() => router.push('/orders')}
                >
                    Pedidos
                </button>
                <button 
                    className="nav-button"
                    onClick={() => router.push('/')}
                >
                    Sair
                </button>
            </nav>
            
            <Image 
                className="header-logo" 
                src={logo} 
                alt="Logo Icon"
                onClick={() => router.push('/home')}
            />
            
            <div className="header-actions">
                <button className="action-button" onClick={() => router.push('/cart')}>
                    <FaShoppingCart />
                    <span className="cart-count">0</span>
                </button>
                <button className="action-button" onClick={() => router.push('/profile')}>
                    <IoPersonCircle />
                </button>
            </div>
        </header>
    )
}