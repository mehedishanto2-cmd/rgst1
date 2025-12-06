
import React, { createContext, useState, ReactNode, useContext } from 'react';
import { CartItem, Game } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (game: Game) => void;
  removeFromCart: (gameId: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (game: Game) => {
    setCartItems(prevItems => {
      const isItemInCart = prevItems.find(item => item.game.id === game.id);
      if (isItemInCart) {
        return prevItems; // Digital games, quantity is 1
      }
      return [...prevItems, { game, quantity: 1 }];
    });
  };

  const removeFromCart = (gameId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.game.id !== gameId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.length;
  const cartTotal = cartItems.reduce((total, item) => total + item.game.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
