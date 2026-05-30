import { ClipboardCheck, Settings, Rocket, BarChart3 } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: <ClipboardCheck className="h-8 w-8" />,
    title: "Audit Express",
    description: "On analyse votre activité en 48h : points de friction, opportunités d'automatisation, potentiel de ROI. Livrable : feuille de route personnalisée.",
    color: "border-blue-500 bg-blue-50",
    iconBg: "bg-blue-600",
  },
  {
    number: "02",
    icon: <Settings className="h-8 w-8" />,
    title: "Configuration Sur Mesure",
    description: "On paramètre votre Voice Agent, vos templates de propositions commerciales, et on intègre vos outils existants (CRM, agenda, facturation).",
    color: "border-purple-500 bg-purple-50",
    iconBg: "bg-purple-600",
  },
  {
    number: "03",
    icon: <Rocket className="h-8 w-8" />,
    title: "Déploiement",
    description: "Mise en production en 5 jours. Formation de votre équipe incluse. Vous recevez vos premiers appels qualifiés dans la semaine.",
    color: "border-emerald-500 bg-emerald-50",
    iconBg: "bg-emerald-600",
  },
  {
    number: "04",
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Suivi & Optimisation Continue",
    description: "Dashboard en temps réel : appels traités, devis générés, taux de conversion. Ajustements mensuels pour améliorer les performances.",
    color: "border-amber-500 bg-amber-50",
    iconBg: "bg-amber-600",
  },
];

const Approach = () => (
  <section id="approach" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold tracking-wider uppercase text-primary">Notre méthode</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 font-display">
          De l'idée à l'IA <span className="gradient-text">en 5 jours</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Pas de projet qui traîne. Une méthodologie éprouvée, des résultats concrets.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="relative">
            <div className={`rounded-2xl border-2 ${step.color} p-6 h-full`}>
              <span className="text-4xl font-bold text-gray-200 font-display">{step.number}</span>
              <div className={`w-14 h-14 ${step.iconBg} rounded-xl flex items-center justify-center my-4 text-white`}>
                {step.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Approach;
