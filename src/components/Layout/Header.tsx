import React from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

const Header: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useNavigation();
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Heart className="h-8 w-8 text-red-500 mr-2" />
          <h1 className="text-xl font-semibold text-gray-800">
            <span className="hidden sm:inline">Heart Attack </span>
            <span>Prediction Analysis</span>
          </h1>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <NavLink href="#dashboard" label="Dashboard" />
          <NavLink href="#predict" label="Predict Risk" />
          <NavLink href="#insights" label="Insights" />
          <NavLink href="#about" label="About" />
        </div>
        
        <button 
          className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-800" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-2 shadow-md animate-fadeIn">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <MobileNavLink href="#dashboard" label="Dashboard" onClick={toggleMenu} />
            <MobileNavLink href="#predict" label="Predict Risk" onClick={toggleMenu} />
            <MobileNavLink href="#insights" label="Insights" onClick={toggleMenu} />
            <MobileNavLink href="#about" label="About" onClick={toggleMenu} />
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <a 
      href={href} 
      className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
    >
      {label}
    </a>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, label, onClick }) => {
  return (
    <a 
      href={href} 
      className="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
      onClick={onClick}
    >
      {label}
    </a>
  );
};

export default Header;