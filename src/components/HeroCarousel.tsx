import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import businessEnglish from "@/assets/business-english.jpg";
import childrenClassroom from "@/assets/children-classroom.jpg";
import languageStudy from "@/assets/language-study.jpg";
import culturalCommunity from "@/assets/cultural-community.jpg";

const slides = [
  {
    image: businessEnglish,
    title: "Domina idiomas para el éxito profesional",
    subtitle: "Conecta con oportunidades globales",
    description: "Desarrolla las habilidades lingüísticas que transformarán tu carrera",
    cta: "Explorar programas"
  },
  {
    image: childrenClassroom,
    title: "Educación integral desde temprana edad",
    subtitle: "Base sólida para el futuro",
    description: "Metodología adaptada que hace del aprendizaje una experiencia natural",
    cta: "Cursos infantiles"
  },
  {
    image: languageStudy,
    title: "Formación personalizada para adultos",
    subtitle: "Flexibilidad que se adapta a tu vida",
    description: "Programas diseñados para profesionales con horarios exigentes",
    cta: "Conocer opciones"
  },
  {
    image: culturalCommunity,
    title: "Integración cultural completa",
    subtitle: "Tu nueva vida en España comienza aquí",
    description: "Acompañamiento integral para residentes internacionales",
    cta: "Programas especiales"
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
    <section id="inicio" className="relative h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Background images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-up leading-tight">
            {slides[currentSlide].title}
          </h1>
          
          <p className="font-body text-lg md:text-xl mb-4 opacity-90 animate-fade-up animation-delay-200">
            {slides[currentSlide].subtitle}
          </p>
          
          <p className="font-body text-base md:text-lg mb-8 opacity-80 animate-fade-up animation-delay-400 max-w-2xl mx-auto">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up animation-delay-600">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white transition-all duration-300 text-lg px-8 py-3 font-medium"
            >
              <Play className="mr-2 h-4 w-4" />
              {slides[currentSlide].cta}
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 transition-all duration-300 text-lg px-6 py-3 font-medium backdrop-blur-sm"
            >
              Clase de prueba
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:bg-white/30"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:bg-white/30"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white" 
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;