
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, cartTotal, clearCart } = useCart();

  return (
    <div className="bg-brand-light-dark p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-black text-white mb-6 border-b-2 border-gray-700 pb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">Your cart is empty.</p>
          <Link to="/shop" className="mt-4 inline-block bg-brand-red text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition-colors">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div>
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.game.id} className="flex items-center justify-between bg-brand-dark p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  <img src={item.game.coverImage} alt={item.game.title} className="w-16 h-20 object-cover rounded" />
                  <div>
                    <h2 className="text-lg font-bold text-white">{item.game.title}</h2>
                    <p className="text-sm text-gray-400">{item.game.platform}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <p className="text-lg font-semibold text-white">${item.game.price.toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.game.id)} className="text-gray-400 hover:text-brand-red transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t-2 border-gray-700 flex flex-col md:flex-row items-center justify-between">
            <div className="text-right mb-4 md:mb-0">
              <p className="text-gray-400 text-lg">Total:</p>
              <p className="text-4xl font-black text-brand-red">${cartTotal.toFixed(2)}</p>
            </div>
            <div className="flex space-x-4">
                <button onClick={clearCart} className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors">
                Clear Cart
                </button>
                <button className="bg-brand-red text-white font-bold py-3 px-10 rounded-lg hover:bg-red-700 transition-colors">
                Checkout
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
