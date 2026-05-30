import { TrendingUp, Euro, Users, Clock, Building2, GraduationCap } from 'lucide-react';

const metrics = [
  { icon: <Users className="h-6 w-6" />, value: "95%", label: "Appels décrochés", sub: "vs 60% en interne" },
  { icon: <Euro className="h-6 w-6" />, value: "0,05€", label: "Par minute d'appel", sub: "Soit ~150€/mois" },
  { icon: <Clock className="h-6 w-6" />, value: "24/7", label: "Disponibilité continue", sub: "Jours fériés inclus" },
  { icon: <TrendingUp className="h-6 w-6" />, value: "J+5", label: "Délai de déploiement", sub: "De la signature à la production" },
];

const aides = [
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "« Osons l'IA » — Gouvernement 2025",
    desc: "Programme national visant 10 000 PME équipées en IA d'ici 2027. Accompagnement et financement.",
    link: "#",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "France 2030 — 2,5 Milliards €",
    desc: "Enveloppe dédiée à l'IA dans le plan d'investissement. Prêts innovation et subventions pour les PME.",
    link: "#",
    color: "from-purple-600 to-purple-800",
  },
  {
    icon: <Euro className="h-8 w-8" />,
    title: "Chèques IA Régionaux — 3 à 15K€",
    desc: "Aides régionales pour financer votre transition IA. On vous aide à monter le dossier.",
    link: "#",
    color: "from-emerald-600 to-emerald-800",
  },
];

const Results = () => (
  <section id="results" className="py-24 bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {metrics.map((m, i) => (
          <div key={i} className="text-center">
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
              {m.icon}
            </div>
            <div className="text-3xl md:text-4xl font-bold font-display gradient-text mb-1">{m.value}</div>
            <div className="text-white font-medium">{m.label}</div>
            <div className="text-gray-400 text-sm mt-1">{m.sub}</div>
          </div>
        ))}
      </div>

      {/* Public Funding */}
      <div className="text-center mb-12">
        <span className="text-sm font-semibold tracking-wider uppercase text-primary/80">Aides publiques</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 font-display">
          Votre projet IA est <span className="gradient-text">finançable</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          La France investit massivement dans l'IA. Ne passez pas à côté des aides disponibles pour votre PME.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {aides.map((aide, i) => (
          <div key={i} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-primary/50 transition-all">
            <div className={`w-16 h-16 bg-gradient-to-br ${aide.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
              {aide.icon}
            </div>
            <h3 className="text-lg font-bold mb-3">{aide.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{aide.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Results;
