import { useEffect } from 'react';
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { trackViewContent } from "@/components/MetaPixel";

const Index = () => {
  useEffect(() => {
    // Track page view for Meta Pixel
    trackViewContent('7-Day Baby Sleep Program', 9);
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
