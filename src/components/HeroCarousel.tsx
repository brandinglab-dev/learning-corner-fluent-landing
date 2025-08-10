import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import DecorativeShapes from "./DecorativeShapes";
import heroLanguages from "@/assets/hero-languages.jpg";
import kidsLearning from "@/assets/kids-learning.jpg";
import adultsLearning from "@/assets/adults-learning.jpg";
import culturalIntegration from "@/assets/cultural-integration.jpg";

const slides = [
  {
    image: heroLanguages,
    title: "Abre las puertas del mundo",
    subtitle: "Conecta con nuevas culturas através del poder de los idiomas",
    description: "Descubre un universo de oportunidades con nuestros programas innovadores",
    cta: "Descubre nuestros cursos",
    accent: "🌍"
  },
  {
    image: kidsLearning,
    title: "Crecimiento desde pequeños",
    subtitle: "Formación integral que trasciende el aula",
    description: "Metodología lúdica diseñada para mentes jóvenes y curiosas",
    cta: "Cursos para niños",
    accent: "🎨"
  },
  {
    image: adultsLearning,
    title: "Impulsa tu carrera profesional",
    subtitle: "Domina idiomas y destaca en el mundo laboral",
    description: "Programas ejecutivos adaptados a profesionales ambiciosos",
    cta: "Formación profesional",
    accent: "🚀"
  },
  {
    image: culturalIntegration,
    title: "Integración y nuevas oportunidades",
    subtitle: "Tu hogar en España comienza aquí",
    description: "Acompañamiento personalizado para residentes internacionales",
    cta: "Programas de integración",
    accent: "🤝"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative elements */}
      <DecorativeShapes />
      
      {/* Background images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-hero z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Accent icon */}
          <div className="text-6xl mb-6 animate-float">
            {slides[currentSlide].accent}
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 animate-fade-up leading-tight">
            {slides[currentSlide].title}
          </h1>
          
          <p className="font-body text-2xl md:text-3xl mb-4 opacity-95 animate-fade-up animation-delay-200 font-light">
            {slides[currentSlide].subtitle}
          </p>
          
          <p className="font-body text-lg md:text-xl mb-10 opacity-80 animate-fade-up animation-delay-400 max-w-3xl mx-auto">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up animation-delay-600">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="glass text-white border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 text-lg px-10 py-6 font-medium"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              {slides[currentSlide].cta}
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 font-medium border-0 shadow-strong"
            >
              Clase gratuita
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 glass text-white p-4 rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/30"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 glass text-white p-4 rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/30"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white shadow-glow scale-110" 
                : "bg-white/50 hover:bg-white/70 hover:scale-105"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;