import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import { useAuth } from '@/contexts/AuthContext';

export const useNavbar = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCartClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        if (!isAuthenticated) {
            alert("Debes de iniciar sesión para ver tu carrito");
        } else {
            navigate('/cart');
        }
    };

    return {
        isAuthenticated,
        isMenuOpen,
        toggleMenu,
        handleCartClick
    };
};
