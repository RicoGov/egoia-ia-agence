
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Results from "@/components/Results";
import Contact from "@/components/Contact";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <Hero />
      <Services />
      <Approach />
      <Results />
      <Contact />
      <ChatWidget />
      <Footer />
    </div>
  );
};

export default Index;
