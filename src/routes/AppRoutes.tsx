import React from 'react';
// @ts-ignore
import Cart from '@/pages/Cart';
// @ts-ignore
import Login from '@/pages/Login';
// @ts-ignore
import Shop from '@/pages/Shop';
import { Route, Routes } from 'react-router-dom';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Shop />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;
