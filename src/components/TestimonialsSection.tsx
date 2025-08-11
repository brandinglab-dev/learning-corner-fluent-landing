import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Ejecutiva de Marketing",
    text: "Gracias a Learning Corner conseguí el B2 de inglés que necesitaba para mi promoción. Los profesores son excelentes y el ambiente muy profesional.",
    rating: 5,
    course: "Inglés profesional"
  },
  {
    name: "James Mitchell",
    role: "Residente británico",
    text: "Vine a España sin hablar español y ahora me desenvuelvo perfectamente. El curso de integración cultural fue clave para sentirme como en casa.",
    rating: 5,
    course: "Español para extranjeros"
  },
  {
    name: "Sophie Dubois",
    role: "Estudiante universitaria",
    text: "Conseguí mi certificado DELE B2 en tiempo récord. Las clases son dinámicas y los grupos pequeños permiten practicar mucho la conversación.",
    rating: 5,
    course: "Preparación DELE"
  },
  {
    name: "Ahmed Al-Rashid",
    role: "Empresario",
    text: "Excelente academia para aprender idiomas. Combiné inglés y español para mis negocios. Horarios flexibles perfectos para profesionales.",
    rating: 5,
    course: "Cursos ejecutivos"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-accent/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-secondary/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold mb-6 text-foreground">
            Lo que dicen nuestros estudiantes
          </h2>
          <p className="font-opensans text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <span className="font-montserrat font-medium italic text-primary-light text-base block mb-2">
              Historias reales de éxito
            </span>
            Descubre cómo hemos ayudado a miles de personas a alcanzar sus objetivos lingüísticos y profesionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:scale-105 border-border/50 hover:border-primary/30 relative overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Quote icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="h-12 w-12 text-primary" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="font-opensans text-muted-foreground mb-6 leading-relaxed text-lg italic">
                  "{testimonial.text}"
                </p>
                
                {/* Author info */}
                <div className="border-t border-border/30 pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-montserrat text-lg font-bold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="font-opensans text-muted-foreground text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                        {testimonial.course}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-card border border-border/50 rounded-2xl shadow-lg">
            <h3 className="font-montserrat text-2xl font-bold mb-4 text-foreground">
              ¿Quieres ser el próximo en conseguir tus objetivos?
            </h3>
            <p className="font-opensans text-muted-foreground mb-6">
              Únete a miles de estudiantes que ya han transformado su futuro con nosotros
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-montserrat font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Solicita tu clase gratuita
              </button>
              <button 
                onClick={() => window.open('https://wa.me/34634489386', '_blank')}
                className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white font-montserrat font-medium rounded-lg transition-all duration-300"
              >
                Habla con nosotros
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;