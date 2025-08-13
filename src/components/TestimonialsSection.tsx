import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sebastián Ramos González",
    role: "Estudiante de Francés",
    text: "Dianne es una profesora excelente y con ella estoy aprendiendo mucho y bien el idioma Francés. Tiene un buen método y mucha paciencia conmigo. Las clases se hacen cortas y amenas.",
    rating: 5,
    course: "Francés"
  },
  {
    name: "Daniel Muñoz Benitez",
    role: "Padre de estudiante",
    text: "Tenemos a nuestro hijo. Ha mejorado muchísimo ya que antes siempre suspendía la asignatura y ahora es una de las mejores notas que saca. A él le encanta la forma de enseñar y está muy contento al igual que nosotros.",
    rating: 5,
    course: "Inglés"
  },
  {
    name: "Diana GG",
    role: "Profesional",
    text: "Mi experiencia es positiva. No teniendo ya edad de ser estudiante, he comenzado un idioma que me servirá en el trabajo. Valoro aprender con profesorado nativo y que esté pendiente de la pronunciación. Las opciones horarias y la ubicación han sido un plus.",
    rating: 5,
    course: "Idiomas profesionales"
  },
  {
    name: "Verónica Díez",
    role: "Estudiante",
    text: "Los profesores se adaptan completamente al nivel de cada estudiante y personalizan las clases. El trato es muy amable y cercano, cualquier problema saben cómo ayudarte.",
    rating: 5,
    course: "Clases personalizadas"
  },
  {
    name: "Yolanda Martínez Morales",
    role: "Madre de estudiantes",
    text: "Estoy encantada con la academia, mis dos hijos dan tanto clases de Inglés y Francés y van genial. Las clases se hacen muy amenas. Lo recomiendo 100%.",
    rating: 5,
    course: "Inglés y Francés"
  },
  {
    name: "Rocío García Ramírez",
    role: "Estudiante",
    text: "Gran Academia, clases muy personalizadas de pequeños grupos de alumnos que es la forma de aprender y practicar idiomas. El profe de inglés es de 10!!!! Y la seño de francés otro 10. La educación y la amabilidad que transmiten de 10. Los alumnos que quieran avanzar en un idioma este es el sitio ideal.",
    rating: 5,
    course: "Inglés y Francés"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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