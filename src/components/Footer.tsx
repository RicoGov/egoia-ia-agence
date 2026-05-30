import { Sparkles, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold font-display">EGO<span className="gradient-text">IA</span></span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Family Office IA pour PME françaises. Voice Agent 24/7, automatisation commerciale, propositions IA sur mesure.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Nos solutions</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Voice Agent 24/7</a></li>
            <li><a href="#" className="hover:text-white transition">Propositions Commerciales IA</a></li>
            <li><a href="#" className="hover:text-white transition">Pipeline Automatisé</a></li>
            <li><a href="#" className="hover:text-white transition">Aides Publiques IA</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li>ricogov@gmail.com</li>
            <li>+33 6 31 48 64 45</li>
            <li>Villeurbanne, France</li>
            <li>
              <a href="#" className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition mt-2">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2026 EGOIA. Tous droits réservés.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-white transition">Confidentialité</a>
          <a href="#" className="hover:text-white transition">CGU</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
