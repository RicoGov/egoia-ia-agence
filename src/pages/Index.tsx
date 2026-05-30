import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Results from "@/components/Results";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-white">
    <Navbar />
    <Hero />
    <Services />
    <Approach />
    <Results />
    <Contact />
    <Footer />
  </div>
);

export default Index;
