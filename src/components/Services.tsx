import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, FileText, TrendingUp, Shield, Users, Zap, Sparkles, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: 'Voice Agent 24/7',
    description: 'Votre commercial IA qui décroche, qualifie et convertit vos prospects jour et nuit. Devis en temps réel par SMS, prise de rendez-vous automatique sur Calendly, dossier client dans Notion.',
    badge: 'Le + demandé',
    gradient: 'from-blue-600 to-cyan-500',
    glow: 'rgba(37, 99, 235, 0.3)',
    features: ['Décroche 95% des appels', 'Devis SMS instantané', 'RDV Calendly auto'],
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: 'Propositions Commerciales IA',
    description: 'Générez des propositions commerciales complètes, personnalisées et chiffrées en quelques minutes. Format professionnel, conformes aux normes, avec aide au chiffrage.',
    badge: 'Gain de temps',
    gradient: 'from-emerald-600 to-teal-500',
    glow: 'rgba(5, 150, 105, 0.3)',
    features: ['Format pro certifié', 'Chiffrage assisté', 'Conforme normes'],
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Pipeline Commercial Automatisé',
    description: 'De la détection du prospect jusqu\'à la signature, EGOIA orchestre votre pipeline : scoring lead, relances automatiques, analyse prédictive du taux de conversion.',
    badge: 'ROI immédiat',
    gradient: 'from-violet-600 to-purple-500',
    glow: 'rgba(124, 58, 237, 0.3)',
    features: ['Scoring intelligent', 'Relances auto', 'Prédictions IA'],
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Automatisation Sur Mesure',
    description: 'Automatisez vos processus métier spécifiques : relances, facturation, gestion documentaire. Tout ce qui est répétitif devient automatique.',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'rgba(245, 158, 11, 0.3)',
    features: ['Processus sur mesure', 'Facturation auto', 'GED intelligente'],
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Veille Concurrentielle IA',
    description: 'Surveillance automatisée de vos concurrents : prix, offres, actualités. Rapports synthétiques hebdomadaires avec recommandations stratégiques.',
    gradient: 'from-rose-600 to-pink-500',
    glow: 'rgba(225, 29, 72, 0.3)',
    features: ['Monitoring 24/7', 'Rapports hebdo', 'Recommandations'],
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Accompagnement Aides Publiques',
    description: 'Bénéficiez du programme « Osons l\'IA » (2025), de France 2030 (2,5Md€) et des chèques IA régionaux (3-15K€). On vous guide dans les démarches.',
    gradient: 'from-cyan-600 to-sky-500',
    glow: 'rgba(8, 145, 178, 0.3)',
    features: ['France 2030', 'Chèques IA', 'Dossier clé en main'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 bg-grid opacity-30" />

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
              Ce que nous faisons
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-6">
            L'IA au service de{' '}
            <span className="gradient-text">votre croissance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Des solutions concrètes, activables en 48h, avec un ROI mesurable dès le premier mois.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card glow on hover */}
              <div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                style={{
                  background: `linear-gradient(135deg, ${service.glow}, transparent 60%)`,
                }}
              />

              <div className="relative card-premium p-6 h-full flex flex-col">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: `0 0 30px -5px ${service.glow}` }}
                >
                  <div className="text-white">{service.icon}</div>
                </div>

                {/* Title + Badge */}
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <h3 className="text-xl font-bold font-display tracking-tight">{service.title}</h3>
                  {service.badge && (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-5 flex-grow text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      {f}
                    </div>
                  ))}
                </div>

                {/* Learn more link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                >
                  En savoir plus
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-amber-500/20 bg-amber-500/5">
            <Zap className="h-4 w-4 text-amber-400" />
            <span className="text-sm text-amber-400/90 font-medium">
              Voice Agent à partir de <strong>0,05€/min</strong> — soit ~150€/mois pour une PME type
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
