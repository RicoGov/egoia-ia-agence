import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Phone, TrendingUp, Shield, Zap, ArrowDown } from 'lucide-react';

const stats = [
  { value: '0,05€', label: 'Par minute', icon: <Zap className="h-4 w-4" /> },
  { value: '24/7', label: 'Disponible', icon: <Phone className="h-4 w-4" /> },
  { value: '95%', label: 'Décroché', icon: <TrendingUp className="h-4 w-4" /> },
  { value: 'J+5', label: 'Déploiement', icon: <Shield className="h-4 w-4" /> },
];

const tags = [
  { text: '📞 Décroche 24/7', color: 'border-blue-500/30 bg-blue-500/10 text-blue-400' },
  { text: '📊 Devis en temps réel', color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' },
  { text: '🤖 0,05€/min', color: 'border-violet-500/30 bg-violet-500/10 text-violet-400' },
  { text: '🇫🇷 Aides publiques', color: 'border-amber-500/30 bg-amber-500/10 text-amber-400' },
];

const floatingElements = [
  { color: 'from-primary to-secondary', size: 'w-24 h-24', x: '10%', y: '15%', delay: 0 },
  { color: 'from-secondary to-accent', size: 'w-16 h-16', x: '80%', y: '20%', delay: 1.5 },
  { color: 'from-accent to-primary', size: 'w-20 h-20', x: '70%', y: '70%', delay: 0.8 },
  { color: 'from-primary/50 to-accent/50', size: 'w-12 h-12', x: '20%', y: '75%', delay: 2.2 },
  { color: 'from-secondary/60 to-primary/60', size: 'w-28 h-28', x: '50%', y: '85%', delay: 3 },
];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-spotlight" />
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Animated floating orbs */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className={`absolute ${el.size} rounded-full bg-gradient-to-br ${el.color} blur-3xl opacity-20`}
          style={{ left: el.x, top: el.y }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 8,
            delay: el.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />

      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary/90">
                  Family Office IA pour PME françaises
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6 font-display tracking-tight"
            >
              Votre PME mérite
              <br />
              <span className="gradient-text">l'Intelligence</span>
              <br />
              <span className="gradient-text">Artificielle</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              EGOIA automatise votre activité commerciale avec un{' '}
              <strong className="text-foreground">Voice Agent 24/7</strong>{' '}
              qui décroche, qualifie et convertit vos prospects — sans recruter.
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-2 mb-10 justify-center lg:justify-start"
            >
              {tags.map((tag, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium border ${tag.color} backdrop-blur-sm`}
                >
                  {tag.text}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary inline-flex items-center justify-center gap-2 text-lg"
              >
                Demander une démo
                <ArrowRight className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline inline-flex items-center justify-center text-lg"
              >
                Découvrir nos services
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Main card */}
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/30 rounded-3xl blur-2xl opacity-50" />

              <div className="relative card-glass p-1 rounded-2xl border-glow">
                <div className="bg-card/80 backdrop-blur-xl rounded-2xl p-6">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border/30">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                      <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    </div>
                    <span className="ml-2 text-xs text-muted-foreground font-medium">
                      EGOIA Voice Agent — En ligne
                    </span>
                    <div className="ml-auto flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[10px] text-green-400 font-medium">ACTIF</span>
                    </div>
                  </div>

                  {/* Chat messages */}
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                        <Sparkles className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-primary/10 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-foreground/90 max-w-[260px] border border-primary/20">
                        <p className="font-medium text-primary mb-0.5 text-xs">📞 Appel entrant — PME BTP</p>
                        <p>« Bonjour, je suis l'assistant EGOIA. Vous souhaitez un devis pour quel type de projet ? »</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 }}
                      className="flex items-start gap-3 justify-end"
                    >
                      <div className="bg-muted/50 rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-foreground/80 max-w-[240px] border border-border/30">
                        <p>« J'ai besoin d'une extension de maison, 40m² »</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                        <Sparkles className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-primary/10 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-foreground/90 max-w-[260px] border border-primary/20">
                        <p>« Parfait. Je vous envoie un devis estimatif par SMS. Un rendez-vous est disponible jeudi 14h, ça vous convient ? »</p>
                      </div>
                    </motion.div>

                    {/* Stats row inside card */}
                    <div className="grid grid-cols-4 gap-2 pt-2">
                      {stats.map((s, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.4 + i * 0.1 }}
                          className="text-center p-2 rounded-xl bg-muted/30"
                        >
                          <div className="text-xs text-muted-foreground mb-0.5 flex items-center justify-center gap-0.5">
                            {s.icon}
                          </div>
                          <div className="text-sm font-bold font-display text-foreground">{s.value}</div>
                          <div className="text-[10px] text-muted-foreground">{s.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#services"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-primary transition-colors"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Défiler</span>
          <ArrowDown className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
