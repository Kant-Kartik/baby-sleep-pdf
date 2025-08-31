import { CheckCircle, Clock, Moon, Heart, Star, Shield } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Day-by-Day Program",
    description: "Follow our structured 7-day plan with clear daily actions and milestones"
  },
  {
    icon: Moon,
    title: "Progressive Sleep Training",
    description: "Each day builds on the previous, gradually improving your baby's sleep habits"
  },
  {
    icon: Heart,
    title: "Gentle & Natural",
    description: "No crying methods - only loving, gentle techniques that strengthen your bond"
  },
  {
    icon: Shield,
    title: "Proven 7-Day Method",
    description: "Tested approach that shows results within the first week"
  },
  {
    icon: Star,
    title: "Quick Results",
    description: "Most parents see improvement by day 3, with full results by day 7"
  },
  {
    icon: CheckCircle,
    title: "Complete Success Plan",
    description: "Complete program with lifetime access and regular content updates"
  }
];

export const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-card relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-2000"></div>
        
        {/* Subtle Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground hover:scale-105 transition-transform duration-300">
            Why Parents Choose Our Guide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thousands of exhausted parents have transformed their nights with our proven sleep methods
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl p-6 shadow-gentle hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden group border-2 border-transparent hover:border-gradient-to-r hover:from-blue-400 hover:to-purple-400"
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`
              }}
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              
              {/* Floating Glow Effect */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full filter blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                  <benefit.icon className="w-6 h-6 text-white group-hover:text-yellow-100 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-blue-700 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-purple-600 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
              
              {/* Pulse Ring on Hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-blue-400 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};