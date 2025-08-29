import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface VibeOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  highlights: string[];
}

const vibeOptions: VibeOption[] = [
  {
    id: "sightseeing",
    title: "Sightseeing Tour",
    description: "Classic NYC landmarks from the water",
    icon: "🏙️",
    duration: "2-3 hours",
    highlights: ["Statue of Liberty", "Brooklyn Bridge", "Manhattan Skyline"]
  },
  {
    id: "sunset",
    title: "Sunset Cruise", 
    description: "Golden hour magic on the Hudson",
    icon: "🌅",
    duration: "2 hours",
    highlights: ["Empire State Building", "One World Trade", "Hudson River Park"]
  },
  {
    id: "party",
    title: "Party Cove",
    description: "Vibrant nightlife and harbor lights",
    icon: "🎉",
    duration: "3-4 hours", 
    highlights: ["South Street Seaport", "Governor's Island", "Brooklyn Heights"]
  }
];

interface VibeSelectorProps {
  onVibeSelect: (vibe: VibeOption) => void;
  selectedVibe?: string;
}

const VibeSelector = ({ onVibeSelect, selectedVibe }: VibeSelectorProps) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Choose Your <span className="text-nautical-gold">Vibe</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let our AI craft the perfect itinerary based on your desired experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {vibeOptions.map((vibe) => (
            <Card 
              key={vibe.id}
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
                selectedVibe === vibe.id 
                  ? 'border-nautical-light bg-nautical-light/5' 
                  : 'border-border hover:border-nautical-light/50'
              }`}
              onClick={() => onVibeSelect(vibe)}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{vibe.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">{vibe.title}</h3>
                <p className="text-muted-foreground mb-3">{vibe.description}</p>
                <div className="text-sm text-nautical-gold font-medium">{vibe.duration}</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-primary mb-2">Highlights:</div>
                {vibe.highlights.map((highlight, index) => (
                  <div key={index} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-nautical-gold rounded-full mr-2" />
                    {highlight}
                  </div>
                ))}
              </div>
              
              <Button 
                variant={selectedVibe === vibe.id ? "default" : "outline"}
                className="w-full mt-4"
              >
                {selectedVibe === vibe.id ? "Selected" : "Select This Vibe"}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VibeSelector;