/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Container from "../UI/Container";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header
      className={`py-4 bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700 ${className}`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <div className="text-xl font-bold text-white flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-md flex items-center justify-center shadow-lg mr-2 transform -rotate-6">
                <span className="text-white">🚚</span>
              </div>
              <span className="relative">
                SkipHire
                <span className="absolute -top-1 -right-2 w-2 h-2 rounded-full bg-blue-500"></span>
              </span>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-6">
            {["Services", "Pricing", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              {["Services", "Pricing", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors px-2 py-1 hover:bg-gray-800 rounded"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
