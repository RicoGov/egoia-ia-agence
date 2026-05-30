import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

const contactInfo = [
  {
    icon: <Phone className="h-5 w-5" />,
    label: 'Téléphone',
    value: '+33 6 31 48 64 45',
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: 'Email',
    value: 'ericgoevelinger@gmail.com',
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: 'Bureau',
    value: 'Marolles-en-Brie 94440',
  },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-spotlight" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold tracking-wider uppercase text-primary">
              Contact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-6">
            Prêt à{' '}
            <span className="gradient-text">automatiser</span>{' '}
            votre entreprise ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Demandez une démo gratuite de 30 minutes. On vous montre le Voice Agent en action.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                whileHover={{ x: 4 }}
                className="card-premium p-5 flex items-start gap-4 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">{info.icon}</div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-1">{info.label}</h3>
                  <p className="text-foreground font-medium">{info.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Decorative element */}
            <div className="relative mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
              <div className="absolute top-3 right-3">
                <Sparkles className="h-5 w-5 text-primary animate-glow-pulse" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Réponse sous 24h.</strong> Notre équipe analyse votre besoin et vous propose un créneau pour une démo personnalisée.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-2"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="card-premium p-10 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold font-display mb-3">Message envoyé !</h3>
                <p className="text-muted-foreground">
                  On vous répond dans les 24h pour organiser votre démo.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="card-premium p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Nom</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                      placeholder="vous@entreprise.fr"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">Entreprise</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground/50 h-32 resize-none"
                    placeholder="Décrivez votre besoin..."
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full inline-flex items-center justify-center gap-2 text-lg"
                >
                  <Send className="h-5 w-5" />
                  Envoyer la demande
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
