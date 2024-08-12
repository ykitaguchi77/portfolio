import React from 'react';
import { Link } from 'react-router-dom';
import { Telescope } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" aria-label="Home">
          <Telescope className="h-8 w-8 text-purple-600" />
        </Link>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLScwhdc8wNyHJXG4UzGflXiJoIzmz5jGXGQfZ4HVUyS5T5f-ww/viewform?usp=sf_link" 
          className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-bold py-2 px-4 rounded-full transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Say Hello
        </a>
      </nav>
    </header>
  );
}

export default Header;