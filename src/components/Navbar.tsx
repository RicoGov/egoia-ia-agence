import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-lg z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-9 h-9 gradient-bg rounded-lg flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold font-display">
              EGO<span className="gradient-text">IA</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#services" className="text-gray-700 font-medium hover:text-primary transition">Services</a>
              <a href="#approach" className="text-gray-700 font-medium hover:text-primary transition">Méthode</a>
              <a href="#results" className="text-gray-700 font-medium hover:text-primary transition">Aides</a>
              <a href="#contact" className="gradient-bg text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition shadow-md">
                Démo gratuite
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-1">
            <a href="#services" className="block px-3 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#approach" className="block px-3 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Méthode</a>
            <a href="#results" className="block px-3 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Aides</a>
            <a href="#contact" className="block w-full mt-2 gradient-bg text-white px-4 py-2.5 rounded-full text-center font-semibold" onClick={() => setIsMenuOpen(false)}>Démo gratuite</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
