import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import StartSection from "@/components/StartSection";
import FeaturesChess from "@/components/FeaturesChess";
import FeaturesGrid from "@/components/FeaturesGrid";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTAFooter from "@/components/CTAFooter";

const Index = () => {
  return (
    <div className="bg-black overflow-visible">
      <Navbar />
      <Hero />
      <Partners />
      <StartSection />
      <FeaturesChess />
      <FeaturesGrid />
      <Stats />
      <Testimonials />
      <CTAFooter />
    </div>
  );
};

export default Index;
