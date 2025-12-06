
import React, { useContext } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';

import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import GameDetailPage from './pages/GameDetailPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminGamesPage from './pages/admin/AdminGamesPage';

const AdminRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    return <Navigate to="/login" />;
  }
  const { user } = authContext;
  return user && user.isAdmin ? children : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <HashRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />

            {/* Customer Facing Routes */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="shop" element={<ShopPage />} />
              <Route path="game/:gameId" element={<GameDetailPage />} />
              <Route path="cart" element={<CartPage />} />
            </Route>

            {/* Admin Routes */}
            <Route 
              path="/admin" 
              element={
                <AdminRoute>
                  <AdminLayout />
                </AdminRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboardPage />} />
              <Route path="games" element={<AdminGamesPage />} />
            </Route>
            
          </Routes>
        </HashRouter>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
