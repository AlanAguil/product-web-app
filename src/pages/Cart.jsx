import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { CartPage } from '@/modules/cart';

const Cart = () => {
    return (
        <>
            <Navbar />
            <CartPage />
        </>
    );
};

export default Cart;
