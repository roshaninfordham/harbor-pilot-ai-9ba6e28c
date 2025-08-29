import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection"; 
import VibeSelector from "@/components/VibeSelector";
import LandmarkShowcase from "@/components/LandmarkShowcase";
import ItineraryDisplay from "@/components/ItineraryDisplay";

const Index = () => {
  const [selectedVibe, setSelectedVibe] = useState<any>(null);

  const handleVibeSelect = (vibe: any) => {
    setSelectedVibe(vibe);
    // Smooth scroll to itinerary section
    setTimeout(() => {
      document.getElementById('itinerary')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <div id="vibes">
          <VibeSelector 
            onVibeSelect={handleVibeSelect}
            selectedVibe={selectedVibe?.id}
          />
        </div>
        
        <div id="landmarks">
          <LandmarkShowcase />
        </div>
        
        <div id="itinerary">
          <ItineraryDisplay selectedVibe={selectedVibe} />
        </div>
      </main>
      
      <footer className="bg-nautical-deep text-nautical-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-3xl mb-4">⚓</div>
          <h3 className="text-xl font-semibold mb-2">Harbor Pilot AI</h3>
          <p className="text-nautical-white/80 mb-6">
            Your intelligent nautical concierge for NYC waterway adventures
          </p>
          <div className="text-sm text-nautical-white/60">
            © 2024 Harbor Pilot AI. Navigate with confidence.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
