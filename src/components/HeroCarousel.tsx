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
    title: "Aprender idiomas es abrirte al mundo",
    subtitle: "Niños",
    description: "Aprender jugando es aprender para siempre. Descubre el placer de aprender jugando. Nuestras clases para niños combinan diversión y aprendizaje para que el idioma se convierta en algo natural desde pequeños.",
    cta: "Reserva tu plaza ahora"
  },
  {
    image: childrenClassroom,
    title: "El idioma es un puente hacia tu futuro",
    subtitle: "Adolescentes", 
    description: "Diseñadas para motivar y reforzar la confianza, nuestras clases para jóvenes combinan práctica real con preparación para exámenes oficiales.",
    cta: "Reserva tu plaza ahora"
  },
  {
    image: languageStudy,
    title: "Empieza hoy, habla mañana",
    subtitle: "Adultos",
    description: "Un enfoque práctico para hablar desde el primer día. Avanza a tu ritmo con clases adaptadas a tus necesidades y objetivos.",
    cta: "Reserva tu plaza ahora"
  },
  {
    image: culturalCommunity,
    title: "Vive en español, piensa en español",
    subtitle: "Español para extranjeros",
    description: "Clases para desenvolverte en la vida diaria y superar con éxito los exámenes oficiales DELE y CSE, además del examen de nacionalidad.",
    cta: "Reserva tu plaza ahora"
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
    <section id="inicio" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
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
        <div className="max-w-5xl mx-auto">
          <h1 className="font-montserrat text-4xl md:text-6xl font-extrabold mb-6 animate-fade-up leading-tight">
            <span className="font-pacifico italic text-3xl md:text-5xl block mb-2">
              {slides[currentSlide].title}
            </span>
          </h1>
          
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4 opacity-95 animate-fade-up animation-delay-200">
            {slides[currentSlide].subtitle}
          </h2>
          
          <p className="font-opensans text-base md:text-lg mb-8 opacity-90 animate-fade-up animation-delay-400 max-w-3xl mx-auto leading-relaxed">
            {slides[currentSlide].description}
          </p>
          
          <p className="font-montserrat text-sm md:text-base mb-8 opacity-80 animate-fade-up animation-delay-500 italic">
            Te acompañamos con un método cercano, práctico y adaptado a ti. Clases para todas las edades, grupos reducidos y preparación para exámenes oficiales.
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
              onClick={() => window.open('https://wa.me/34634489386', '_blank')}
              variant="outline"
              size="lg"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 transition-all duration-300 text-lg px-6 py-3 font-medium backdrop-blur-sm"
            >
              ¿Tienes dudas? Escríbenos
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