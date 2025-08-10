import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroLanguages from "@/assets/hero-languages.jpg";
import kidsLearning from "@/assets/kids-learning.jpg";
import adultsLearning from "@/assets/adults-learning.jpg";
import culturalIntegration from "@/assets/cultural-integration.jpg";

const slides = [
  {
    image: heroLanguages,
    title: "Abre las puertas del mundo",
    subtitle: "Aprende idiomas y conecta con nuevas culturas",
    cta: "Descubre nuestros cursos"
  },
  {
    image: kidsLearning,
    title: "Crecimiento desde pequeños",
    subtitle: "Formación integral para niños y adolescentes",
    cta: "Cursos para niños"
  },
  {
    image: adultsLearning,
    title: "Impulsa tu carrera profesional",
    subtitle: "Domina idiomas y destaca en el mundo laboral",
    cta: "Formación profesional"
  },
  {
    image: culturalIntegration,
    title: "Integración y nuevas oportunidades",
    subtitle: "Programas especiales para residentes extranjeros",
    cta: "Programas de integración"
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
      {/* Background images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
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
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up animation-delay-200">
            {slides[currentSlide].subtitle}
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-strong text-lg px-8 py-6 animate-fade-up animation-delay-400"
          >
            {slides[currentSlide].cta}
          </Button>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;