import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

const Index = () => {
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
