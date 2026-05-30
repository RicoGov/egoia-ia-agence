import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  TrendingUp, Euro, Users, Clock, Building2, GraduationCap,
  Sparkles, ArrowRight, CheckCircle2
} from 'lucide-react';

const metrics = [
  {
    icon: <Users className="h-6 w-6" />,
    value: '95%',
    label: 'Appels décrochés',
    sub: 'vs 60% en interne',
    gradient: 'from-blue-400 to-cyan-300',
  },
  {
    icon: <Euro className="h-6 w-6" />,
    value: '0,05€',
    label: 'Par minute d\'appel',
    sub: 'Soit ~150€/mois',
    gradient: 'from-emerald-400 to-teal-300',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    value: '24/7',
    label: 'Disponibilité continue',
    sub: 'Jours fériés inclus',
    gradient: 'from-violet-400 to-purple-300',
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    value: 'J+5',
    label: 'Délai de déploiement',
    sub: 'Signature → production',
    gradient: 'from-amber-400 to-orange-300',
  },
];

const aides = [
  {
    icon: <Building2 className="h-8 w-8" />,
    title: '« Osons l\'IA » — Gouvernement 2025',
    desc: 'Programme national visant 10 000 PME équipées en IA d\'ici 2027. Accompagnement et financement.',
    gradient: 'from-blue-600 to-blue-800',
    glow: 'rgba(37, 99, 235, 0.3)',
    points: ['10 000 PME cibles', 'Financement public', 'Accompagnement dédié'],
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: 'France 2030 — 2,5 Milliards €',
    desc: 'Enveloppe dédiée à l\'IA dans le plan d\'investissement. Prêts innovation et subventions pour les PME.',
    gradient: 'from-violet-600 to-violet-800',
    glow: 'rgba(124, 58, 237, 0.3)',
    points: ['2,5 Md€ disponibles', 'Prêts innovation', 'Subventions PME'],
  },
  {
    icon: <Euro className="h-8 w-8" />,
    title: 'Chèques IA Régionaux — 3 à 15K€',
    desc: 'Aides régionales pour financer votre transition IA. On vous aide à monter le dossier.',
    gradient: 'from-emerald-600 to-emerald-800',
    glow: 'rgba(5, 150, 105, 0.3)',
    points: ['3 000 à 15 000€', 'Toutes régions', 'Dossier simplifié'],
  },
];

const Results = () => {
  const metricsRef = useRef(null);
  const aidesRef = useRef(null);
  const metricsInView = useInView(metricsRef, { once: true, margin: '-100px' });
  const aidesInView = useInView(aidesRef, { once: true, margin: '-100px' });

  return (
    <section id="results" className="relative py-32 overflow-hidden">
      {/* Premium dark background */}
      <div className="absolute inset-0 bg-[#080B16]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.1),transparent)]" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Metrics Section */}
        <motion.div
          ref={metricsRef}
          initial={{ opacity: 0 }}
          animate={metricsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={metricsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-center group"
              >
                {/* Glowing orb behind icon */}
                <div className="relative mx-auto mb-6 w-20 h-20">
                  <div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                    style={{
                      background: `conic-gradient(from 0deg, ${m.gradient.split(' ')[0].replace('from-', '') === 'blue-400' ? '#60a5fa' : m.gradient.split(' ')[0].replace('from-', '') === 'emerald-400' ? '#34d399' : m.gradient.split(' ')[0].replace('from-', '') === 'violet-400' ? '#a78bfa' : '#fbbf24'}, transparent)`,
                    }}
                  />
                  <div className="relative w-20 h-20 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center backdrop-blur-sm">
                    <div className={`bg-gradient-to-br ${m.gradient} bg-clip-text text-transparent`}>
                      {m.icon}
                    </div>
                  </div>
                </div>

                {/* Value */}
                <div className={`text-4xl md:text-5xl font-bold font-display bg-gradient-to-r ${m.gradient} bg-clip-text text-transparent mb-2`}>
                  {m.value}
                </div>
                <div className="text-white/90 font-semibold">{m.label}</div>
                <div className="text-white/40 text-sm mt-1">{m.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="section-divider mb-24" />

        {/* Public Funding Section */}
        <div ref={aidesRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aidesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm mb-6">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-semibold tracking-wider uppercase text-amber-400">
                Aides publiques
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-6 text-white">
              Votre projet IA est{' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                finançable
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              La France investit massivement dans l'IA. Ne passez pas à côté des aides disponibles pour votre PME.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aides.map((aide, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={aidesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                <div
                  className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                  style={{ background: `linear-gradient(135deg, ${aide.glow}, transparent 60%)` }}
                />
                <div className="relative card-glass p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${aide.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <div className="text-white">{aide.icon}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3">{aide.title}</h3>

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed mb-5 flex-grow">{aide.desc}</p>

                  {/* Bullet points */}
                  <div className="space-y-2 mb-5">
                    {aide.points.map((p, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-white/60">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                        {p}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors group/link"
                  >
                    En savoir plus
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={aidesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Vérifier mes aides disponibles
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Results;
