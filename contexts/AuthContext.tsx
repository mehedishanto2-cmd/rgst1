
import React, { createContext, useState, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (userType: 'admin' | 'customer') => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userType: 'admin' | 'customer') => {
    if (userType === 'admin') {
      setUser({ id: 1, name: 'Admin User', email: 'admin@realgame.bd', isAdmin: true });
    } else {
      setUser({ id: 2, name: 'Customer User', email: 'customer@email.com', isAdmin: false });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
