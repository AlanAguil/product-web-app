import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { fetchCategories } from '@/modules/shop/services/shop.service';
// @ts-ignore
import { useAuth } from '@/contexts/AuthContext';

export const useNavbar = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { isAuthenticated } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMouseEnterMenu = () => {
        queryClient.prefetchQuery({
            queryKey: ['categories'],
            queryFn: fetchCategories,
            staleTime: 60000 // Cache it for 1 minute so it doesn't refetch too aggressively
        });
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
        handleMouseEnterMenu,
        handleCartClick
    };
};
