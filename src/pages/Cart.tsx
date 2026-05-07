import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { CartPage } from '@/modules/cart';

const Cart: React.FC = () => {
    return (
        <>
            <Navbar />
            <CartPage />
        </>
    );
};

export default Cart;
