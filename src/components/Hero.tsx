import { Button } from "@/components/ui/button";
// import heroImage from "@/assets/hero-baby-sleep.jpg";

export const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-peaceful px-4 py-20 relative overflow-hidden">
      {/* Flashy Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sparkling Stars */}
        {[...Array(25)].map((_, i) => (
          <div
            key={`star-${i}`}
            className={`absolute animate-pulse text-xs opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            ⭐
          </div>
        ))}
        
        {/* Gentle Shooting Stars */}
        {[...Array(2)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className={`absolute text-yellow-300 text-xl animate-shooting-star opacity-50`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `4s`
            }}
          >
            ✨
          </div>
        ))}
        
        {/* Floating Emojis */}
        {[...Array(8)].map((_, i) => {
          const emojis = ['🌙', '💤', '✨', '❤️'];
          return (
            <div
              key={`emoji-${i}`}
              className={`absolute text-3xl animate-float opacity-50`}
              style={{
                left: `${Math.random() * 90}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            >
              {emojis[Math.floor(Math.random() * emojis.length)]}
            </div>
          );
        })}
        
        {/* Gentle Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        
        {/* Floating Sparkles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className={`absolute w-1 h-1 bg-gradient-to-r from-yellow-200 to-pink-200 rounded-full animate-float opacity-40`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}

      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground hover:scale-105 transition-transform duration-500">
                Transform Your Baby's Sleep
                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                  ✨ In Just 7 Days ✨
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Follow our proven 7-day step-by-step program that helps babies fall asleep faster 
                and sleep through the night. Gentle methods, proven by thousands of families.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white px-8 py-4 text-lg shadow-soft border-0 hover:scale-105 transition-all duration-300"
                onClick={scrollToPricing}
              >
                ✨ Get Your Guide Now ✨
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {[
                    { id: 1, avatar: "👩🏻", bg: "bg-pink-100" },
                    { id: 2, avatar: "👨🏽", bg: "bg-blue-100" },
                    { id: 3, avatar: "👩🏾", bg: "bg-purple-100" },
                    { id: 4, avatar: "👨🏻", bg: "bg-green-100" },
                    { id: 5, avatar: "👩🏼", bg: "bg-yellow-100" }
                  ].map((parent) => (
                    <div 
                      key={parent.id} 
                      className={`w-8 h-8 rounded-full ${parent.bg} border-2 border-background flex items-center justify-center text-sm`}
                    >
                      {parent.avatar}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">2,000+ happy parents</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="relative z-10 hover:scale-105 transition-transform duration-500 hover:rotate-1">
              <img 
                src="/images/baby-sleep-hero.jpg" 
                alt="Peaceful curly-haired baby sleeping among fluffy clouds with golden stars" 
                className="rounded-2xl shadow-soft w-full h-auto border-4 border-gradient-to-r from-purple-400 via-pink-400 to-blue-400 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-dawn opacity-20 rounded-2xl transform rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};