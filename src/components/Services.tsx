import { Phone, FileText, TrendingUp, Shield, Users, Zap } from 'lucide-react';

const servicesData = [
  {
    icon: <Phone className="h-6 w-6 text-white" />,
    title: "Voice Agent 24/7",
    description: "Votre commercial IA qui décroche, qualifie et convertit vos prospects jour et nuit. Devis en temps réel par SMS, prise de rendez-vous automatique sur Calendly, dossier client dans Notion.",
    badge: "Le + demandé",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    icon: <FileText className="h-6 w-6 text-white" />,
    title: "Propositions Commerciales IA",
    description: "Générez des propositions commerciales complètes, personnalisées et chiffrées en quelques minutes. Format professionnel, conformes aux normes, avec aide au chiffrage.",
    badge: "Gain de temps",
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    title: "Pipeline Commercial Automatisé",
    description: "De la détection du prospect jusqu'à la signature, EGOIA orchestre votre pipeline : scoring lead, relances automatiques, analyse prédictive du taux de conversion.",
    badge: "ROI immédiat",
    gradient: "from-violet-600 to-purple-600",
  },
  {
    icon: <Zap className="h-6 w-6 text-white" />,
    title: "Automatisation Sur Mesure",
    description: "Automatisez vos processus métier spécifiques : relances, facturation, gestion documentaire. Tout ce qui est répétitif devient automatique.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: <Shield className="h-6 w-6 text-white" />,
    title: "Veille Concurrentielle IA",
    description: "Surveillance automatisée de vos concurrents : prix, offres, actualités. Rapports synthétiques hebdomadaires avec recommandations stratégiques.",
    gradient: "from-rose-600 to-pink-600",
  },
  {
    icon: <Users className="h-6 w-6 text-white" />,
    title: "Accompagnement Aides Publiques",
    description: "Bénéficiez du programme « Osons l'IA » (2025), de France 2030 (2,5Md€) et des chèques IA régionaux (3-15K€). On vous guide dans les démarches.",
    gradient: "from-cyan-600 to-sky-600",
  },
];

const ServiceCard = ({ icon, title, description, badge, gradient }: any) => (
  <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="p-6">
      <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
        {icon}
      </div>
      <div className="flex items-center gap-2 mb-3">
        <h3 className="text-xl font-bold">{title}</h3>
        {badge && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
            {badge}
          </span>
        )}
      </div>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Services = () => (
  <section id="services" className="py-24 bg-gray-50/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold tracking-wider uppercase text-primary">Ce que nous faisons</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 font-display">
          L'IA au service de <span className="gradient-text">votre croissance</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Des solutions concrètes, activables en 48h, avec un ROI mesurable dès le premier mois.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
