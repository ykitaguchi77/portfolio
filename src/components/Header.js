import React from 'react';
import { Link } from 'react-router-dom';
import { Telescope } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex items-center">
        <Link to="/" aria-label="Home">
          <Telescope className="h-8 w-8 text-purple-600" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
