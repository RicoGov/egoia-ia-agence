
import { Star } from 'lucide-react';

const Results = () => {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase text-primary">Cas Clients</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 font-display">Impact Business <span className="gradient-text">Éprouvé</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez comment nous avons transformé des entreprises dans divers secteurs grâce à l'IA.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { value: "87%", description: "Réduction des tâches de saisie manuelle" },
            { value: "3.5x", description: "Accélération du traitement des requêtes clients" },
            { value: "2.4M€", description: "Économies annuelles grâce à l'automatisation" }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold gradient-text mb-2">{stat.value}</div>
              <p className="text-gray-600 font-medium">{stat.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "CEO, TechSolutions Inc.",
              image: "https://randomuser.me/api/portraits/women/43.jpg",
              quote: "EGOIA a transformé notre service client avec leur chatbot IA. Les temps de réponse se sont considérablement améliorés tout en conservant la touche personnelle que nos clients attendent."
            },
            {
              name: "Michael Chen",
              role: "COO, RetailChain Corp.",
              image: "https://randomuser.me/api/portraits/men/65.jpg",
              quote: "La solution d'analyse prédictive d'EGOIA nous a aidé à optimiser nos stocks sur 200+ magasins, réduisant le gaspillage de 32% tout en améliorant la disponibilité des produits. Leur approche business-first a fait toute la différence."
            }
          ].map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-white p-8 rounded-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                <div className="ml-4">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display">Prêt à Transformer Votre Entreprise avec l'IA ?</h3>
              <p className="mb-6 opacity-90">
                Obtenez une évaluation gratuite de votre maturité IA et découvrez comment votre entreprise peut bénéficier de l'intelligence artificielle.
              </p>
              <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition transform hover:-translate-y-1 shadow-lg">
                Évaluation Gratuite
              </button>
            </div>
            <div className="hidden lg:block">
              <img src="https://illustrations.popsy.co/amber/artificial-intelligence-2.svg" alt="Illustration Évaluation IA" className="w-full h-auto animate-floating-delay-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
