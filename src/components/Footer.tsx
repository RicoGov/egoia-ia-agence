
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">EGOIA</h3>
            <p className="text-gray-400">
              Transformer les entreprises grâce à l'implémentation stratégique de l'IA.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {["Implémentation IA", "Automatisation", "Analyse Prédictive", "Marketing IA", "Chatbots"].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition">{service}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Entreprise</h4>
            <ul className="space-y-2">
              {["À propos", "Notre Méthode", "Études de Cas", "Blog", "Carrières"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Ressources</h4>
            <ul className="space-y-2">
              {["Lexique IA", "Guide d'Implémentation", "Webinaires", "Calculateur ROI", "Contact"].map((resource, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition">{resource}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 EGOIA l'Agence. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white transition text-sm">Politique de Confidentialité</a>
            <a href="#" className="text-gray-500 hover:text-white transition text-sm">CGU</a>
            <a href="#" className="text-gray-500 hover:text-white transition text-sm">Politique Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
