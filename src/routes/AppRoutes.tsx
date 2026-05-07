import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

// Pages
import { ProductsPage } from '@/modules/product';
import Login from '@/pages/Login';
import Cart from '@/pages/Cart';
import Profile from '@/pages/Profile';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/login" element={<Login />} />
      
      {/* Rutas protegidas */}
      <Route 
        path="/cart" 
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/profile" 
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
};

export default AppRoutes;
