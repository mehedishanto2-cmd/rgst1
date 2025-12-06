
import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const AdminSidebar: React.FC = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (authContext) {
      authContext.logout();
      navigate('/login');
    }
  };

  const linkClasses = "flex items-center px-4 py-3 text-gray-300 hover:bg-brand-red hover:text-white rounded-lg transition-colors";
  const activeLinkClasses = "bg-brand-red text-white";

  return (
    <div className="w-64 bg-brand-light-dark text-white flex flex-col p-4">
      <div className="text-2xl font-bold text-center py-4 border-b border-gray-700">
        <span className="text-brand-red">ADMIN</span> PANEL
      </div>
      <nav className="flex-grow mt-6 space-y-2">
        <NavLink 
          to="/admin/dashboard" 
          className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
        >
          <svg className="h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
          Dashboard
        </NavLink>
        <NavLink 
          to="/admin/games" 
          className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
        >
          <svg className="h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
          Games
        </NavLink>
        {/* Add links to Orders and Users pages here */}
      </nav>
      <div className="mt-auto">
        <NavLink to="/" className={linkClasses}>
            <svg className="h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Back to Site
        </NavLink>
        <button onClick={handleLogout} className={`${linkClasses} w-full`}>
           <svg className="h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" /></svg>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
