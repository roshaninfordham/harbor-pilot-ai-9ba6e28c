import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Landmark {
  id: string;
  name: string;
  description: string;
  category: string;
  viewingTime: string;
  funFact: string;
}

const landmarks: Landmark[] = [
  {
    id: "statue-liberty",
    name: "Statue of Liberty",
    description: "America's symbol of freedom and democracy, gifted by France in 1886.",
    category: "Historic Monument",
    viewingTime: "15-20 min",
    funFact: "Lady Liberty's torch rises 305 feet above the harbor"
  },
  {
    id: "brooklyn-bridge", 
    name: "Brooklyn Bridge",
    description: "Iconic suspension bridge connecting Manhattan and Brooklyn since 1883.",
    category: "Architecture",
    viewingTime: "10-15 min",
    funFact: "First steel-wire suspension bridge ever built"
  },
  {
    id: "empire-state",
    name: "Empire State Building", 
    description: "Art Deco skyscraper and former world's tallest building.",
    category: "Skyscraper",
    viewingTime: "5-10 min",
    funFact: "Built in just 410 days during the Great Depression"
  },
  {
    id: "one-world-trade",
    name: "One World Trade Center",
    description: "The tallest building in NYC, built as a memorial and symbol of resilience.",
    category: "Modern Architecture", 
    viewingTime: "10-15 min",
    funFact: "Exactly 1,776 feet tall - a tribute to the year of independence"
  }
];

const LandmarkShowcase = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Iconic <span className="text-nautical-gold">Landmarks</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover NYC's most famous sights from the unique perspective of the water
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {landmarks.map((landmark) => (
            <Card key={landmark.id} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{landmark.name}</h3>
                  <Badge variant="secondary" className="mb-2">{landmark.category}</Badge>
                </div>
                <div className="text-sm text-nautical-gold font-medium text-right">
                  {landmark.viewingTime}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {landmark.description}
              </p>
              
              <div className="bg-nautical-light/10 p-3 rounded-lg border-l-4 border-nautical-gold">
                <div className="text-sm font-medium text-primary mb-1">Did you know?</div>
                <div className="text-sm text-muted-foreground">{landmark.funFact}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandmarkShowcase;