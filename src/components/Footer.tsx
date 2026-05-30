import { motion } from 'framer-motion';
import { Sparkles, Linkedin, ArrowUpRight } from 'lucide-react';

const solutions = [
  'Voice Agent 24/7',
  'Propositions Commerciales IA',
  'Pipeline Automatisé',
  'Aides Publiques IA',
];

const company = [
  { label: 'Confidentialité', href: '#' },
  { label: 'CGU', href: '#' },
  { label: 'Mentions légales', href: '#' },
];

const Footer = () => (
  <footer className="relative bg-[#060915] border-t border-white/[0.05] overflow-hidden">
    {/* Top glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        {/* Brand Column */}
        <div className="md:col-span-5">
          <motion.a
            href="#"
            className="inline-flex items-center gap-3 mb-6 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold font-display text-white">
              EGO<span className="gradient-text">IA</span>
            </span>
          </motion.a>
          <p className="text-white/40 leading-relaxed mb-6 max-w-md">
            Family Office IA pour PME françaises. Voice Agent 24/7, automatisation commerciale, propositions IA sur mesure.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-primary transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            Suivez-nous sur LinkedIn
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>

        {/* Solutions Column */}
        <div className="md:col-span-3">
          <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-6">
            Nos solutions
          </h4>
          <ul className="space-y-3">
            {solutions.map((s, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-sm text-white/40 hover:text-white/80 transition-colors duration-200"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-2">
          <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-6">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/40">
            <li>
              <a href="mailto:ericgoevelinger@gmail.com" className="hover:text-white/80 transition-colors">
                ericgoevelinger@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+33631486445" className="hover:text-white/80 transition-colors">
                +33 6 31 48 64 45
              </a>
            </li>
            <li>Marolles-en-Brie 94440</li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="md:col-span-2">
          <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-6">
            Légal
          </h4>
          <ul className="space-y-3">
            {company.map((c, i) => (
              <li key={i}>
                <a
                  href={c.href}
                  className="text-sm text-white/40 hover:text-white/80 transition-colors"
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-white/25">
          © 2026 EGOIA. Tous droits réservés.
        </p>
        <p className="text-sm text-white/25">
          Propulsé par l'IA · Fabriqué en France 🇫🇷
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
