import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-background/90 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-3 text-sm border-b border-border/30">
          <div className="flex items-center gap-6">
            <a href="tel:+34123456789" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">
              <Phone className="h-3 w-3" />
              <span className="font-medium">+34 123 456 789</span>
            </a>
            <a href="mailto:info@learningcorner.es" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">
              <Mail className="h-3 w-3" />
              <span className="font-medium">info@learningcorner.es</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-6">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-rotate-6">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/0ea3069a-d61b-4160-b672-046d5881f8f6.png" 
              alt="Learning Corner School" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <button 
              onClick={() => scrollToSection('inicio')} 
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
            </button>
            <button 
              onClick={() => scrollToSection('servicios')} 
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group"
            >
              Servicios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
            </button>
            <button 
              onClick={() => scrollToSection('ubicacion')} 
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group"
            >
              Ubicación
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
            </button>
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
            </button>
            <Button 
              onClick={() => scrollToSection('contacto')} 
              className="bg-gradient-primary hover:shadow-glow hover:scale-105 text-primary-foreground shadow-colored transition-all duration-300 font-medium px-6 py-2.5"
            >
              Reservar Clase
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('inicio')} 
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')} 
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('ubicacion')} 
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Ubicación
              </button>
              <button 
                onClick={() => scrollToSection('contacto')} 
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Contacto
              </button>
              <Button 
                onClick={() => scrollToSection('contacto')} 
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-soft mt-2"
              >
                Reservar Clase
              </Button>
              <div className="flex items-center gap-4 pt-2">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;