import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import Results from '@/components/Results';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

const Index = () => {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.remove('light');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Approach />
      <Results />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
