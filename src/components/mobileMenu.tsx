"use client";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import "@/styles/header.scss";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const router = useRouter();

    const navigate = (path: string) => {
        router.push(path);
        onClose();
    };

    return (
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <button 
                className="close-button"
                onClick={onClose}
                aria-label="Fechar menu"
            >
                <IoClose />
            </button>
            
            <button 
                className="mobile-nav-button"
                onClick={() => navigate('/home')}
            >
                Inicio
            </button>
            <button 
                className="mobile-nav-button"
                onClick={() => navigate('/promotions')}
            >
                Promoções
            </button>
            <button 
                className="mobile-nav-button"
                onClick={() => navigate('/catalogue')}
            >
                Catálogo
            </button>
            <button 
                className="mobile-nav-button"
                onClick={() => navigate('/orders')}
            >
                Pedidos
            </button>
            <button 
                className="mobile-nav-button"
                onClick={() => navigate('/')}
            >
                Sair
            </button>
        </div>
    );
}