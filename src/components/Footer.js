import React from 'react';
import { Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <p className="text-center text-lg mb-6 italic">
          "Daily 1% growth and the serendipity of crossing paths with you are the nourishment that fuels my success."
        </p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:kitaguchi@yk-gankeisei.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors duration-300">
            <Mail size={24} />
          </a>
          <a href="https://x.com/2Norteboca" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors duration-300">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
