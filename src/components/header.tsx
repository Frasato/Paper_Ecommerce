"use client";
import { useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import logo from "@/assets/icon.png";
import Image from "next/image";
import "../styles/header.scss";
import { useCart } from "@/hooks/useCart";
import { useEffect, useState } from "react";
import { getLocalStorageUser } from "@/utils/getLocalStorage";
import { TiThMenu } from "react-icons/ti";
import { LocalStorageUser } from "@/types/userType";

export default function Header() {
    const router = useRouter();
    const { getCart, cart, isLoading } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const localUser: LocalStorageUser = getLocalStorageUser();

        void getCart(localUser.userId, localUser.token);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <>
            <header className="header">
                <button 
                    className="mobile-menu-toggle"
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <TiThMenu />
                </button>
                
                <nav className={`header-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
                    <button 
                        className="nav-button" 
                        onClick={() => {
                            router.push('/home');
                            setIsMenuOpen(false);
                        }}
                    >
                        Inicio
                    </button>
                    <button 
                        className="nav-button"
                        onClick={() => {
                            router.push('/promotions');
                            setIsMenuOpen(false);
                        }}
                    >
                        Promoções
                    </button>
                    <button 
                        className="nav-button"
                        onClick={() => {
                            router.push('/catalogue');
                            setIsMenuOpen(false);
                        }}
                    >
                        Catálogo
                    </button>
                    <button 
                        className="nav-button"
                        onClick={() => {
                            router.push('/orders');
                            setIsMenuOpen(false);
                        }}
                    >
                        Pedidos
                    </button>
                    <button 
                        className="nav-button"
                        onClick={() => {
                            router.push('/');
                            setIsMenuOpen(false);
                        }}
                    >
                        Sair
                    </button>
                </nav>
                
                <Image 
                    className="header-logo" 
                    src={logo} 
                    alt="Logo Icon"
                    onClick={() => router.push('/home')}
                    priority
                />
                
                <div className="header-actions">
                    <button 
                        className="action-button" 
                        onClick={() => router.push('/cart')}
                        aria-label="Carrinho"
                    >
                        <FaShoppingCart />
                        <span className="cart-count">
                            {cart? isLoading ? 0 : cart?.cartItem.length > 0? cart?.cartItem.length : 0 : 0}
                        </span>
                    </button>
                    <button 
                        className="action-button" 
                        onClick={() => router.push('/profile')}
                        aria-label="Perfil"
                    >
                        <IoPersonCircle />
                    </button>
                </div>
            </header>

            <div 
                className={`mobile-menu-overlay ${isMenuOpen ? 'visible' : ''}`}
                onClick={toggleMenu}
            />
        </>
    );
}