
import { useEffect, useRef } from 'react';

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      // Clear existing particles
      particlesRef.current.innerHTML = '';
      
      const particleCount = 30;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 5 and 15px
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random opacity
        particle.style.opacity = (Math.random() * 0.5 + 0.1).toString();
        
        particlesRef.current.appendChild(particle);
        
        // Animate particle
        animateParticle(particle);
      }
    };
    
    const animateParticle = (particle: HTMLDivElement) => {
      let x = parseFloat(particle.style.left);
      let y = parseFloat(particle.style.top);
      let xSpeed = (Math.random() - 0.5) * 0.2;
      let ySpeed = (Math.random() - 0.5) * 0.2;
      
      function move() {
        x += xSpeed;
        y += ySpeed;
        
        // Bounce off edges
        if (x < 0 || x > 100) {
          xSpeed = -xSpeed;
        }
        if (y < 0 || y > 100) {
          ySpeed = -ySpeed;
        }
        
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        
        requestAnimationFrame(move);
      }
      
      move();
    };

    createParticles();
    
    // Recreate particles on window resize for better responsiveness
    window.addEventListener('resize', createParticles);
    
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div ref={particlesRef} className="absolute w-full h-full top-0 left-0 z-0"></div>
      <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-display">
              Transformez Votre Entreprise <span className="gradient-text">Avec l'IA</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              EGOIA l'Agence propose des solutions d'IA sur mesure qui automatisent, optimisent et révolutionnent vos opérations commerciales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="gradient-bg text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition transform hover:-translate-y-1 shadow-lg text-lg">
                Démarrer l'Implémentation
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-full font-medium hover:bg-primary hover:text-white transition transform hover:-translate-y-1 text-lg">
                Découvrir nos Services
              </button>
            </div>
            <div className="mt-12 flex items-center justify-center md:justify-start space-x-4">
              <div className="flex -space-x-2">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/12.jpg" alt="Client" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/45.jpg" alt="Client" />
              </div>
              <div>
                <p className="text-sm font-medium">Confiance de 250+ entreprises</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm">4.9/5 (128 avis)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <img src="https://illustrations.popsy.co/amber/artificial-intelligence.svg" alt="Illustration IA" className="w-full h-auto animate-floating" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <a href="#services" className="animate-bounce text-gray-500 hover:text-primary transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
