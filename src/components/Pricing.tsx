import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Clock, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  "Complete 7-Day Sleep Program PDF",
  "Day-by-day action plan with clear steps",
  "Age-specific strategies",
  "Troubleshooting guide for each day",
  "Gentle sleep training methods",
  "Sleep environment optimization checklist",
  "Daily progress tracking sheets",
  "Lifetime access & updates"
];

export const Pricing = () => {
  const navigate = useNavigate();
  
  const handlePurchase = () => {
    navigate('/checkout');
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Start Sleeping Better Tonight
          </h2>
          <p className="text-xl text-muted-foreground">
            One-time purchase. Lifetime of peaceful nights.
          </p>
        </div>

        <div className="bg-gradient-peaceful rounded-2xl p-8 shadow-soft relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              7-Day Baby Sleep Program
            </h3>
            <p className="text-muted-foreground mb-6">
              Transform your baby's sleep in just one week with our proven method
            </p>
            
            <div className="flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-5xl font-bold text-primary">$1</span>
                </div>
                <div className="flex items-center justify-center space-x-4 mt-2">
                  <div className="text-lg text-muted-foreground line-through">$30</div>
                  <div className="text-2xl font-bold text-primary bg-primary/10 px-4 py-1 rounded-full">97% OFF</div>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              onClick={handlePurchase}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg shadow-soft mb-8"
            >
              <Download className="w-5 h-5 mr-2" />
              Get Instant Access
            </Button>
          </div>

          <div className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4 pt-8 border-t border-border">
            <div className="flex items-center space-x-2">
              <Download className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">Instant Download</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">Works in Days</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">Lifetime Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};