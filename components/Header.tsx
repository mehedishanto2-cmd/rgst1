
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

const Header: React.FC = () => {
  const authContext = useContext(AuthContext);
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (authContext) {
      authContext.logout();
      navigate('/');
    }
  };
  
  return (
    <header className="bg-brand-light-dark/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-brand-red tracking-wider">
              REAL GAME BD
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/shop" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Shop</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>
              )}
            </Link>
            {authContext?.user ? (
              <div className="flex items-center space-x-2">
                <span className="text-white text-sm hidden sm:block">{authContext.user.name}</span>
                <button onClick={handleLogout} className="bg-brand-red text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition duration-300">Logout</button>
                 {authContext.user.isAdmin && (
                  <Link to="/admin" className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-600 transition duration-300">Admin</Link>
                )}
              </div>
            ) : (
              <Link to="/login" className="bg-brand-red text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition duration-300">Login</Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
