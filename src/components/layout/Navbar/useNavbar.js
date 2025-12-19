import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export const useNavbar = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCartClick = (e) => {
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
