
import { 
  Bot, Cog, BarChart3, Megaphone, MessageCircle, Search
} from 'lucide-react';

const servicesData = [
  {
    icon: <Bot className="h-6 w-6 text-white" />,
    title: "Assistants IA Sur Mesure",
    description: "Assistants virtuels intelligents qui gèrent les demandes clients, la gestion des rendez-vous et les tâches routinières."
  },
  {
    icon: <Cog className="h-6 w-6 text-white" />,
    title: "Automatisation des Tâches",
    description: "Rationalisez les opérations en automatisant les tâches répétitives, réduisant les erreurs et libérant votre équipe."
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-white" />,
    title: "Analyse Prédictive",
    description: "Exploitez les données historiques pour prévoir les tendances, comportements clients et évolutions du marché avec précision."
  },
  {
    icon: <Megaphone className="h-6 w-6 text-white" />,
    title: "Marketing Piloté par l'IA",
    description: "Campagnes hyper-personnalisées qui s'adaptent en temps réel pour maximiser l'engagement et les conversions."
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-white" />,
    title: "Chatbots Intelligents",
    description: "IA conversationnelle fournissant un support client 24/7 avec une compréhension quasi-humaine."
  },
  {
    icon: <Search className="h-6 w-6 text-white" />,
    title: "Veille Concurrentielle",
    description: "Insights pilotés par l'IA sur les stratégies concurrentielles, positionnement marché et opportunités émergentes."
  }
];

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="service-card bg-white rounded-xl overflow-hidden shadow-lg card-hover">
      <div className="p-6">
        <div className="w-14 h-14 gradient-bg rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <div className="flex items-center text-sm text-primary font-medium">
          <span>En savoir plus</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase text-primary">Notre Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 font-display">Solutions IA qui <span className="gradient-text">Boostent la Croissance</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous spécialisons dans l'implémentation de solutions d'IA adaptées à vos besoins spécifiques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition transform hover:-translate-y-1">
            Voir nos 10 Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
