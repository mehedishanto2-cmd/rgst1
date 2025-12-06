
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const handleLogin = (userType: 'admin' | 'customer') => {
    if (authContext) {
      authContext.login(userType);
      if (userType === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-dark">
      <div className="max-w-md w-full bg-brand-light-dark p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-black text-center text-white uppercase tracking-wider">
          REAL GAME <span className="text-brand-red">BD</span>
        </h2>
        <p className="text-center text-gray-400 mt-2">Sign in to your account</p>
        
        <div className="mt-8 space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input id="email" name="email" type="email" required className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-600 bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-brand-red focus:border-brand-red focus:z-10 sm:text-sm" placeholder="Email address (demo)" defaultValue="user@example.com" />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input id="password" name="password" type="password" required className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-600 bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-brand-red focus:border-brand-red focus:z-10 sm:text-sm" placeholder="Password (demo)" defaultValue="password" />
          </div>
        </div>

        <div className="mt-6">
            <p className="text-center text-sm text-gray-400 mb-4">This is a demo. Select a role to log in.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                    onClick={() => handleLogin('customer')}
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-light-dark focus:ring-red-500 transition-colors"
                >
                    Login as Customer
                </button>
                <button
                    onClick={() => handleLogin('admin')}
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-brand-red bg-transparent border-2 border-brand-red hover:bg-brand-red hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-light-dark focus:ring-red-500 transition-colors"
                >
                    Login as Admin
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
