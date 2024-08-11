import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" className="text-gray-800 hover:text-gray-600" exact>
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
