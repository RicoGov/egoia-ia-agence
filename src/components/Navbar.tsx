
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white bg-opacity-90 backdrop-blur-lg z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold gradient-text">EGOIA l'Agence</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="nav-link text-dark font-medium hover:text-primary transition">Accueil</a>
              <a href="#services" className="nav-link text-dark font-medium hover:text-primary transition">Services</a>
              <a href="#approach" className="nav-link text-dark font-medium hover:text-primary transition">Méthode</a>
              <a href="#results" className="nav-link text-dark font-medium hover:text-primary transition">Résultats</a>
              <a href="#contact" className="nav-link text-dark font-medium hover:text-primary transition">Contact</a>
              <button className="gradient-bg text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition transform hover:-translate-y-1 shadow-lg">
                Audit Gratuit
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              className="text-dark focus:outline-none" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary" onClick={toggleMenu}>Accueil</a>
            <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary" onClick={toggleMenu}>Services</a>
            <a href="#approach" className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary" onClick={toggleMenu}>Méthode</a>
            <a href="#results" className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary" onClick={toggleMenu}>Résultats</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary" onClick={toggleMenu}>Contact</a>
            <button className="mt-2 w-full gradient-bg text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition">
              Audit Gratuit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
