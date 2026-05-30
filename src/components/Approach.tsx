import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ClipboardCheck, Settings, Rocket, BarChart3, Sparkles, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <ClipboardCheck className="h-6 w-6" />,
    title: 'Audit Express',
    description: 'On analyse votre activité en 48h : points de friction, opportunités d\'automatisation, potentiel de ROI. Livrable : feuille de route personnalisée.',
    gradient: 'from-blue-600 to-cyan-500',
    glow: 'rgba(37, 99, 235, 0.3)',
    stat: '48h',
    statLabel: 'Délai audit',
  },
  {
    number: '02',
    icon: <Settings className="h-6 w-6" />,
    title: 'Configuration Sur Mesure',
    description: 'On paramètre votre Voice Agent, vos templates de propositions commerciales, et on intègre vos outils existants (CRM, agenda, facturation).',
    gradient: 'from-violet-600 to-purple-500',
    glow: 'rgba(124, 58, 237, 0.3)',
    stat: '100%',
    statLabel: 'Personnalisé',
  },
  {
    number: '03',
    icon: <Rocket className="h-6 w-6" />,
    title: 'Déploiement',
    description: 'Mise en production en 5 jours. Formation de votre équipe incluse. Vous recevez vos premiers appels qualifiés dans la semaine.',
    gradient: 'from-emerald-600 to-teal-500',
    glow: 'rgba(5, 150, 105, 0.3)',
    stat: 'J+5',
    statLabel: 'En production',
  },
  {
    number: '04',
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Suivi & Optimisation Continue',
    description: 'Dashboard en temps réel : appels traités, devis générés, taux de conversion. Ajustements mensuels pour améliorer les performances.',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'rgba(245, 158, 11, 0.3)',
    stat: '∞',
    statLabel: 'Amélioration continue',
  },
];

const Approach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="approach" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold tracking-wider uppercase text-primary">
              Notre méthode
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-6">
            De l'idée à l'IA{' '}
            <span className="gradient-text">en 5 jours</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Pas de projet qui traîne. Une méthodologie éprouvée, des résultats concrets.
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div ref={ref} className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative group"
              >
                {/* Step card */}
                <div className="relative card-premium p-8 h-full flex flex-col items-center text-center">
                  {/* Step number - top */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="text-6xl font-bold font-display text-muted/20 select-none">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10 mt-6`}
                    style={{ boxShadow: `0 0 40px -10px ${step.glow}` }}
                  >
                    <div className="text-white">{step.icon}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-display mb-3">{step.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
                    {step.description}
                  </p>

                  {/* Stat highlight */}
                  <div className="w-full pt-4 border-t border-border/30">
                    <div className={`text-2xl font-bold font-display bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                      {step.stat}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{step.statLabel}</div>
                  </div>
                </div>

                {/* Arrow connector (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 rounded-full bg-card border border-border/30 flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-primary/50" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Lancer mon audit offert
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;
