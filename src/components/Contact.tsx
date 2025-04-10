
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Discutons de Votre <span className="gradient-text">Projet IA</span></h2>
            <p className="text-gray-600 mb-8">
              Que vous exploriez les possibilités de l'IA ou soyez prêt à implémenter, notre équipe est là pour vous aider. Remplissez le formulaire et nous vous répondrons rapidement. Notre devise "Client content, Client reviens"
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-600">contact@egoia-lagence.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Téléphone</h4>
                  <p className="text-gray-600">+33 6 31 48 64 45</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Adresse</h4>
                  <p className="text-gray-600">10 rue des tisserands 94440 MAROLLES EN BRIE</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Votre nom" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Votre email" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Entreprise</label>
                  <input type="text" id="company" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Votre entreprise" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Votre téléphone" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Quel service vous intéresse ?</label>
                  <select id="interest" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option value="">Sélectionnez une option</option>
                    <option value="ai-assistants">Assistants IA Sur Mesure</option>
                    <option value="automation">Automatisation des Tâches</option>
                    <option value="analytics">Analyse Prédictive</option>
                    <option value="marketing">Marketing Piloté par l'IA</option>
                    <option value="chatbots">Chatbots Intelligents</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Parlez-nous de votre projet"></textarea>
                </div>
              </div>
              <button type="submit" className="gradient-bg text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition transform hover:-translate-y-1 shadow-lg w-full mt-6">
                Envoyer le Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
