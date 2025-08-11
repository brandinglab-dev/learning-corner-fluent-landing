import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Aprender idiomas es abrirte al mundo",
    subtitle: "Niños",
    description: "Aprender jugando es aprender para siempre. Descubre el placer de aprender jugando. Nuestras clases para niños combinan diversión y aprendizaje para que el idioma se convierta en algo natural desde pequeños.",
    cta: "Reserva tu plaza ahora",
    bgColor: "bg-gradient-to-br from-primary to-primary-dark",
    accent: "bg-secondary"
  },
  {
    title: "El idioma es un puente hacia tu futuro",
    subtitle: "Adolescentes", 
    description: "Diseñadas para motivar y reforzar la confianza, nuestras clases para jóvenes combinan práctica real con preparación para exámenes oficiales.",
    cta: "Reserva tu plaza ahora",
    bgColor: "bg-gradient-to-br from-primary-light to-primary",
    accent: "bg-secondary"
  },
  {
    title: "Empieza hoy, habla mañana",
    subtitle: "Adultos",
    description: "Un enfoque práctico para hablar desde el primer día. Avanza a tu ritmo con clases adaptadas a tus necesidades y objetivos.",
    cta: "Reserva tu plaza ahora",
    bgColor: "bg-gradient-to-br from-secondary to-secondary-dark", 
    accent: "bg-primary"
  },
  {
    title: "Vive en español, piensa en español",
    subtitle: "Español para extranjeros",
    description: "Clases para desenvolverte en la vida diaria y superar con éxito los exámenes oficiales DELE y CSE, además del examen de nacionalidad.",
    cta: "Reserva tu plaza ahora",
    bgColor: "bg-gradient-to-br from-primary-dark to-primary",
    accent: "bg-secondary"
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
    <section id="inicio" className="relative min-h-[80vh] md:h-[85vh] flex items-center justify-center overflow-hidden px-4">
      {/* Background with brand colors */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          } ${slide.bgColor}`}
        >
          {/* Geometric patterns */}
          <div className="absolute inset-0">
            <div className="absolute top-10 md:top-20 right-10 md:right-20 w-32 md:w-64 h-32 md:h-64 bg-white/5 rounded-full animate-pulse"></div>
            <div className="absolute bottom-16 md:bottom-32 left-8 md:left-16 w-24 md:w-48 h-24 md:h-48 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-1/3 w-16 md:w-32 h-16 md:h-32 bg-white/5 rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className={`absolute bottom-10 md:bottom-20 right-10 md:right-20 w-12 md:w-20 h-12 md:h-20 ${slide.accent} opacity-20 rounded-lg rotate-12`}></div>
          </div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle at 25% 25%, white 2px, transparent 2px)',
              backgroundSize: '60px 60px'
            }}></div>
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 text-center text-white">
        <div className="max-w-6xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-6 md:mb-8">
            <img 
              src="/lovable-uploads/0ea3069a-d61b-4160-b672-046d5881f8f6.png" 
              alt="Learning Corner School" 
              className="h-12 md:h-16 w-auto mx-auto mb-4 md:mb-6 brightness-0 invert"
            />
          </div>
          
          <h1 className="font-montserrat text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight px-2">
            {slides[currentSlide].title}
          </h1>
          
          <div className="mb-4 md:mb-6">
            <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-base md:text-lg lg:text-xl font-montserrat font-medium border border-white/30">
              {slides[currentSlide].subtitle}
            </span>
          </div>
          
          <p className="font-opensans text-sm md:text-base lg:text-lg xl:text-xl mb-6 md:mb-8 opacity-95 max-w-4xl mx-auto leading-relaxed px-2">
            {slides[currentSlide].description}
          </p>
          
          <p className="font-opensans text-xs md:text-sm lg:text-base mb-8 md:mb-10 opacity-90 max-w-3xl mx-auto font-medium px-2">
            Te acompañamos con un método cercano, práctico y adaptado a ti.<br />
            <span className="font-montserrat font-semibold">Clases para todas las edades • Grupos reducidos • Preparación para exámenes oficiales</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 transition-all duration-300 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 font-montserrat font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              {slides[currentSlide].cta}
              <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
            </Button>
            <Button
              onClick={() => window.open('https://wa.me/34634489386', '_blank')}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-transparent text-white border-white/40 hover:bg-white/10 transition-all duration-300 text-base md:text-lg px-4 md:px-6 py-3 md:py-4 font-montserrat font-medium backdrop-blur-sm border-2"
            >
              ¿Tienes dudas? Escríbenos
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:bg-white/30 hover:scale-110"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:bg-white/30 hover:scale-110"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white scale-110 md:scale-125" 
                : "bg-white/50 hover:bg-white/70 hover:scale-105 md:hover:scale-110"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;