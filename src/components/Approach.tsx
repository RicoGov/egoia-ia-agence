
import { Check } from 'lucide-react';

const Approach = () => {
  return (
    <section id="approach" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase text-primary">Notre Processus</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 font-display">Le Cadre d'Implémentation <span className="gradient-text">EGOIA</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une méthodologie éprouvée pour une intégration réussie de l'IA dans votre entreprise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "1", title: "Découverte", description: "Exploration approfondie de vos processus pour identifier les opportunités d'IA." },
            { step: "2", title: "Stratégie", description: "Feuille de route personnalisée alignant solutions d'IA avec vos objectifs." },
            { step: "3", title: "Implémentation", description: "Intégration transparente avec vos systèmes et workflows existants." },
            { step: "4", title: "Optimisation", description: "Amélioration continue basée sur les données de performance et retours." }
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">{step.step}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-display">Pourquoi Notre Méthode <span className="gradient-text">Donne des Résultats</span></h3>
            <p className="text-gray-600 mb-6">
              Contrairement aux solutions d'IA génériques, nous nous concentrons sur la compréhension de votre contexte métier avant de recommander toute technologie. Notre cadre d'implémentation garantit un impact mesurable à chaque étape.
            </p>
            <ul className="space-y-4">
              {[
                { title: "Business First", description: "Nous commençons par vos objectifs, pas par la technologie" },
                { title: "Valeur Incrémentale", description: "Des résultats rapides créent une dynamique de transformation" },
                { title: "Gestion du Changement", description: "Nous préparons votre équipe à l'adoption de l'IA" }
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700 font-medium">
                    <span className="font-bold">{item.title}</span> - {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob-delay-4000"></div>
              <div className="relative">
                <img src="https://illustrations.popsy.co/amber/data-report.svg" alt="Illustration Rapport Data" className="w-full h-auto animate-floating-delay-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
