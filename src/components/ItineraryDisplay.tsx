import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

interface ItineraryStop {
  time: string;
  location: string;
  activity: string;
  duration: string;
  description: string;
}

interface ItineraryDisplayProps {
  selectedVibe?: {
    id: string;
    title: string;
    description: string;
    icon: string;
    duration: string;
    highlights: string[];
  };
}

const itineraryData: Record<string, ItineraryStop[]> = {
  sightseeing: [
    {
      time: "10:00 AM",
      location: "Battery Park Marina", 
      activity: "Departure & Safety Briefing",
      duration: "15 min",
      description: "Meet your AI guide and review navigation basics"
    },
    {
      time: "10:30 AM",
      location: "Statue of Liberty",
      activity: "Harbor Icon Tour", 
      duration: "30 min",
      description: "Circle Lady Liberty with AR landmark identification"
    },
    {
      time: "11:15 AM", 
      location: "Brooklyn Bridge",
      activity: "Architecture Spotlight",
      duration: "20 min", 
      description: "Capture the perfect Instagram shot from water level"
    },
    {
      time: "12:00 PM",
      location: "South Street Seaport",
      activity: "Historic Harbor Views",
      duration: "25 min",
      description: "Learn about NYC's maritime heritage"
    }
  ],
  sunset: [
    {
      time: "6:00 PM",
      location: "West Side Marina",
      activity: "Golden Hour Departure", 
      duration: "15 min",
      description: "Begin your magical sunset journey"
    },
    {
      time: "6:30 PM",
      location: "Hudson River Park", 
      activity: "Sunset Photography",
      duration: "30 min",
      description: "Perfect lighting for Manhattan skyline shots"
    },
    {
      time: "7:15 PM",
      location: "Empire State Building View",
      activity: "Twilight Showcase",
      duration: "25 min", 
      description: "Watch the city lights begin to twinkle"
    },
    {
      time: "8:00 PM",
      location: "One World Trade Center",
      activity: "Night Lights Finale",
      duration: "20 min",
      description: "End with the illuminated Freedom Tower"
    }
  ],
  party: [
    {
      time: "7:00 PM",
      location: "Chelsea Piers",
      activity: "Party Boat Launch",
      duration: "15 min", 
      description: "Set the mood with curated party playlist"
    },
    {
      time: "7:30 PM",
      location: "Governor's Island",
      activity: "Harbor Dance Floor",
      duration: "45 min",
      description: "Open water dancing with city backdrop" 
    },
    {
      time: "8:30 PM",
      location: "Brooklyn Heights Promenade",
      activity: "Cocktail & Chill Zone",
      duration: "30 min",
      description: "Relax with drinks and stunning views"
    },
    {
      time: "9:30 PM", 
      location: "Manhattan Bridge",
      activity: "Night Photography",
      duration: "30 min",
      description: "Capture the night skyline in all its glory"
    }
  ]
};

const ItineraryDisplay = ({ selectedVibe }: ItineraryDisplayProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showItinerary, setShowItinerary] = useState(false);
  
  const generateItinerary = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      setShowItinerary(true);
    }, 2000);
  };

  useEffect(() => {
    if (selectedVibe) {
      setShowItinerary(false);
    }
  }, [selectedVibe]);

  if (!selectedVibe) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">⚓</div>
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Ready to Set Sail?
          </h3>
          <p className="text-muted-foreground">
            Select your vibe above to generate your personalized itinerary
          </p>
        </div>
      </section>
    );
  }

  const currentItinerary = itineraryData[selectedVibe.id] || [];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-nautical-deep/5 to-nautical-light/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">{selectedVibe.icon}</div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Your <span className="text-nautical-gold">{selectedVibe.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            AI-crafted itinerary for the perfect {selectedVibe.description.toLowerCase()}
          </p>
          
          {!showItinerary && !isGenerating && (
            <Button onClick={generateItinerary} variant="default" size="lg">
              🤖 Generate AI Itinerary
            </Button>
          )}
          
          {isGenerating && (
            <div className="flex items-center justify-center gap-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-nautical-light"></div>
              <span className="text-nautical-light font-medium">AI crafting your perfect route...</span>
            </div>
          )}
        </div>

        {showItinerary && (
          <div className="space-y-4 animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-6">
              <Badge variant="secondary" className="text-base px-4 py-2">
                Total Duration: {selectedVibe.duration}
              </Badge>
              <Button variant="outline" size="sm" onClick={() => setShowItinerary(false)}>
                Generate New Route
              </Button>
            </div>
            
            {currentItinerary.map((stop, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-20 text-center">
                    <div className="text-lg font-bold text-nautical-gold">{stop.time}</div>
                    <div className="text-sm text-muted-foreground">{stop.duration}</div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-1">{stop.location}</h3>
                    <div className="text-nautical-light font-medium mb-2">{stop.activity}</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{stop.description}</p>
                  </div>
                  
                  <div className="md:w-8 text-center">
                    {index < currentItinerary.length - 1 && (
                      <div className="hidden md:block text-nautical-gold">↓</div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
            
            <div className="text-center pt-6">
              <Button variant="hero" size="lg">
                Book This Adventure
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ItineraryDisplay;