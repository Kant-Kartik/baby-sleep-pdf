import { Star } from "lucide-react";
// import parentBabyImage from "@/assets/parent-baby-night.jpg";

const testimonials = [
  {
    name: "Sarah Johnson",
    age: "Mom of 6-month-old Emma",
    content: "By day 4 of the program, Emma was sleeping through the night! The 7-day plan is so clear and easy to follow. Best investment we ever made!",
    rating: 5
  },
  {
    name: "Michael Chen",
    age: "Dad of twin boys (4 months)",
    content: "The day-by-day approach worked perfectly for our twins. By the end of week 1, both boys were sleeping 8+ hours. The program is incredible!",
    rating: 5
  },
  {
    name: "Lisa Rodriguez",
    age: "Mom of 8-month-old Alex",
    content: "I followed the 7-day program exactly as written. Alex went from waking up 5 times a night to sleeping 10 hours straight by day 6!",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-dawn relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground hover:scale-105 transition-transform duration-300">
            Happy, Well-Rested Families
          </h2>
          <p className="text-xl text-muted-foreground">
            See what parents are saying about their transformed sleep routines
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-background rounded-xl p-6 shadow-gentle relative overflow-hidden group hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-gradient-to-r hover:from-purple-400 hover:to-pink-400"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                {/* Glowing Corner Effect */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full filter blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -translate-y-10 translate-x-10"></div>
                
                <div className="relative z-10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                        style={{
                          animation: `sparkle 2s ease-in-out infinite ${i * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic group-hover:text-purple-700 transition-colors duration-300">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-purple-800 transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.age}</p>
                  </div>
                </div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="relative group">
              <img 
                src="/images/momandbaby.png" 
                alt="Serene baby sleeping peacefully among golden stars and clouds" 
                className="rounded-2xl shadow-soft w-full h-auto hover:scale-105 transition-transform duration-500 border-2 border-gradient-to-r from-purple-200 to-pink-200"
              />
              {/* Glowing Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500"></div>
              
              {/* Floating Particles */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute top-1/3 left-4 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
            </div>
            <div className="absolute inset-0 bg-gradient-peaceful opacity-10 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};