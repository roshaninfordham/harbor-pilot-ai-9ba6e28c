import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nautical-white/95 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl">⚓</div>
            <span className="text-xl font-bold text-primary">
              Harbor Pilot <span className="text-nautical-gold">AI</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#vibes" className="text-primary hover:text-nautical-light transition-colors">
              Choose Vibe
            </a>
            <a href="#landmarks" className="text-primary hover:text-nautical-light transition-colors">
              Landmarks  
            </a>
            <a href="#itinerary" className="text-primary hover:text-nautical-light transition-colors">
              Itinerary
            </a>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center">
              <div className={`h-0.5 w-6 bg-primary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <div className={`h-0.5 w-6 bg-primary transition-all duration-300 mt-1 ${isOpen ? 'opacity-0' : ''}`} />
              <div className={`h-0.5 w-6 bg-primary transition-all duration-300 mt-1 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border bg-nautical-white/95">
            <div className="flex flex-col gap-4">
              <a href="#vibes" className="text-primary hover:text-nautical-light transition-colors px-2">
                Choose Vibe
              </a>
              <a href="#landmarks" className="text-primary hover:text-nautical-light transition-colors px-2">
                Landmarks
              </a>
              <a href="#itinerary" className="text-primary hover:text-nautical-light transition-colors px-2">
                Itinerary
              </a>
              <div className="flex gap-2 px-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Sign In
                </Button>
                <Button variant="default" size="sm" className="flex-1">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;