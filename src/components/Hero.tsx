import { useEffect, useRef } from 'react';

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticles = () => {
      if (!particlesRef.current) return;
      particlesRef.current.innerHTML = '';
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = (Math.random() * 0.5 + 0.1).toString();
        particlesRef.current.appendChild(particle);
        let x = parseFloat(particle.style.left);
        let y = parseFloat(particle.style.top);
        let xSpeed = (Math.random() - 0.5) * 0.2;
        let ySpeed = (Math.random() - 0.5) * 0.2;
        function move() {
          x += xSpeed; y += ySpeed;
          if (x < 0 || x > 100) xSpeed = -xSpeed;
          if (y < 0 || y > 100) ySpeed = -ySpeed;
          particle.style.left = `${x}%`;
          particle.style.top = `${y}%`;
          requestAnimationFrame(move);
        }
        move();
      }
    };
    createParticles();
    window.addEventListener('resize', createParticles);
    return () => window.removeEventListener('resize', createParticles);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div ref={particlesRef} className="absolute w-full h-full top-0 left-0 z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              🇫🇷 Family Office IA pour PME françaises
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-display">
              Votre PME mérite <span className="gradient-text">l'Intelligence Artificielle</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              EGOIA automatise votre activité commerciale avec un <strong>Voice Agent 24/7</strong> qui décroche, qualifie et convertit vos prospects — sans recruter.
            </p>
            <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">📞 Décroche 24/7</span>
              <span className="px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium">📊 Devis en temps réel</span>
              <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">🤖 0,05€/min</span>
              <span className="px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">🇫🇷 Aides publiques</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="gradient-bg text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition transform hover:-translate-y-1 shadow-lg text-lg">
                Demander une démo →
              </a>
              <a href="#services" className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition transform hover:-translate-y-1 text-lg">
                Découvrir nos services
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
              <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-xs text-gray-400">EGOIA Voice Agent — En ligne</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded-lg p-3 text-sm">
                    <div className="font-medium text-blue-800 mb-1">📞 Appel entrant — PME BTP</div>
                    <div className="text-blue-600">« Bonjour, je suis l'assistant EGOIA. Vous souhaitez un devis pour quel type de projet ? »</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm ml-4">
                    <div className="text-gray-600">« J'ai besoin d'une extension de maison, 40m² »</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-sm">
                    <div className="text-blue-600">« Parfait. Je vous envoie un devis estimatif par SMS immédiatement. Un rendez-vous est disponible jeudi 14h, ça vous convient ? »</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <a href="#services" className="animate-bounce text-gray-400 hover:text-primary transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
