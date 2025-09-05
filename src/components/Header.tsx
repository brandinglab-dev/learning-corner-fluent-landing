import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 120; // Adjust for fixed header
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-background/90 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-3 text-sm border-b border-border/30">
          <div className="flex items-center gap-6">
            <a href="tel:+34634494195" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">
              <Phone className="h-3 w-3" />
              <span className="font-medium">{t('header.phone')}</span>
            </a>
            <a href={`mailto:${t('header.email')}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">
              <Mail className="h-3 w-3" />
              <span className="font-medium">{t('header.email')}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <a href="https://facebook.com/learningcornerschoolestepona" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-6">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://instagram.com/lc_school_estepona" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-rotate-6">
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
              {t('navigation.home')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
            <button 
              onClick={() => scrollToSection('servicios')} 
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group"
            >
              {t('navigation.services')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
            <button 
              onClick={() => scrollToSection('ubicacion')} 
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group"
            >
              {t('navigation.locations')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group"
            >
              {t('navigation.contact')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
            <Button 
              onClick={() => scrollToSection('contacto')} 
              className="bg-primary hover:bg-primary-dark hover:shadow-lg hover:scale-105 text-primary-foreground transition-all duration-300 font-montserrat font-semibold px-6 py-2.5"
            >
              {t('hero.cta')}
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
                {t('navigation.home')}
              </button>
              <button 
                onClick={() => scrollToSection('servicios')} 
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                {t('navigation.services')}
              </button>
              <button 
                onClick={() => scrollToSection('ubicacion')} 
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                {t('navigation.locations')}
              </button>
              <button 
                onClick={() => scrollToSection('contacto')} 
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                {t('navigation.contact')}
              </button>
              <Button 
                onClick={() => scrollToSection('contacto')} 
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-montserrat font-medium mt-2"
              >
                {t('hero.cta')}
              </Button>
              <div className="flex items-center gap-4 pt-2">
                <LanguageSwitcher />
                <a href="https://facebook.com/learningcornerschoolestepona" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://instagram.com/lc_school_estepona" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
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