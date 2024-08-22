import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  // Function to apply classes based on the active state of the link
  const navLinkClasses = ({ isActive }: { isActive: boolean }): string =>
    isActive
      ? 'text-white bg-gray-900 px-3 py-2 rounded-md text-sm font-bold underline'
      : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold text-sm ';

  return (
    <header className="bg-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ">
            <div className="block sm:hidden">
             
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink to="/" className={navLinkClasses}>
                  Home
                </NavLink>
                <NavLink to="/products" className={navLinkClasses}>
                  Products
                </NavLink>
                <NavLink to="/cart" className={navLinkClasses}>
                  Cart
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile menu dropdown */}
      <div className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/products" className={navLinkClasses}>
            Products
          </NavLink>
          <NavLink to="/cart" className={navLinkClasses}>
            Cart
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
