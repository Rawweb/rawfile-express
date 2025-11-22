import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { FiBox, FiPlusCircle, FiHome, FiLogOut, FiFile, FiFileText } from 'react-icons/fi';

const AdminLayout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-primary-dark text-secondary-light flex flex-col">
      {/* Desktop Top Bar */}
      <div className="hidden md:flex items-center justify-between px-8 py-4 border-b border-secondary-light/10">
        <Link
          to="/admin"
          className="text-lg font-semibold hover:text-primary-yellow transition-colors"
        >
          Admin Panel
        </Link>
        <button
          onClick={logout}
          className="flex items-center gap-2 text-red-300 hover:text-red-400"
        >
          <FiLogOut /> Logout
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 px-6 py-8">
        <Outlet />
      </div>

      {/* Mobile Bottom Nav */}
      <nav
        className="
        md:hidden fixed bottom-0 left-0 right-0 
        bg-primary-dark border-t border-secondary-light/10 
        flex justify-around py-2
      "
      >
        <Link
          to="/admin"
          className="flex flex-col items-center text-secondary-light/70 hover:bg-secondary-light/10 rounded-md p-3"
        >
          <FiHome className="text-xl" />
          <span className="text-xs mt-1">Home</span>
        </Link>

        <Link
          to="/admin/create-shipment"
          className="flex flex-col items-center text-secondary-light/70 hover:bg-secondary-light/10 rounded-md p-3"
        >
          <FiPlusCircle className="text-xl" />
          <span className="text-xs mt-1">Create</span>
        </Link>

        <Link
          to="/admin/all-shipments"
          className="flex flex-col items-center text-secondary-light/70 hover:bg-secondary-light/10 rounded-md p-3"
        >
          <FiBox className="text-xl" />
          <span className="text-xs mt-1">Shipments</span>
        </Link>

        <Link
          to="/admin/quotes"
          className="flex flex-col items-center text-secondary-light/70 hover:bg-secondary-light/10 rounded-md p-3"
        >
          <FiFileText className="text-xl" />
          <span className="text-xs mt-1">Quotes</span>
        </Link>

        <button
          onClick={logout}
          className="flex flex-col items-center text-red-300 hover:bg-red-300/10 rounded-md p-3"
        >
          <FiLogOut className="text-xl" />
          <span className="text-xs mt-1">Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default AdminLayout;
