import { Button } from "@/components/ui/button";
import heroImage from "@/assets/nyc-waterways-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="New York City waterways with Manhattan skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nautical-deep/40 via-nautical-medium/30 to-nautical-deep/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-nautical-white mb-6 leading-tight">
          Harbor Pilot <span className="text-nautical-gold">AI</span>
        </h1>
        <p className="text-xl md:text-2xl text-nautical-white/90 mb-8 leading-relaxed">
          Your intelligent nautical concierge for the perfect NYC waterway adventure
        </p>
        <p className="text-lg md:text-xl text-nautical-white/80 mb-12 max-w-2xl mx-auto">
          From iconic landmarks to hidden gems, let AI craft your personalized journey through Manhattan's waterways
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Start Your Journey
          </Button>
          <Button variant="heroSecondary" size="lg" className="text-lg px-8 py-6">
            Explore Itineraries
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-nautical-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-nautical-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;