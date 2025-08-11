import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Baby, 
  GraduationCap, 
  Briefcase, 
  Heart, 
  Monitor, 
  TreePine,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Clases para Niños y Adolescentes",
    description: "Metodología adaptada que hace del aprendizaje una experiencia natural desde pequeños hasta preparación para exámenes oficiales.",
    features: ["Grupos reducidos", "Actividades interactivas", "Preparación Cambridge", "Seguimiento personalizado"],
    languages: ["Inglés", "Francés", "Alemán"]
  },
  {
    icon: GraduationCap,
    title: "Clases para Adultos",
    description: "Conversación y negocios con enfoque práctico para hablar desde el primer día. Avanza a tu ritmo con clases adaptadas.",
    features: ["Business English", "Conversación intensiva", "Horarios flexibles", "Grupos por nivel"],
    languages: ["Inglés", "Francés", "Alemán", "Árabe"]
  },
  {
    icon: Heart,
    title: "Español para Extranjeros",
    description: "Clases para desenvolverte en la vida diaria y superar exámenes oficiales DELE, CSE y examen de nacionalidad.",
    features: ["DELE", "CSE", "Examen nacionalidad", "Integración cultural"],
    languages: ["Español"]
  },
  {
    icon: TreePine,
    title: "English Camps",
    description: "Inmersión total en inglés durante las vacaciones escolares con actividades divertidas y educativas.",
    features: ["Inmersión total", "Actividades temáticas", "Profesores nativos", "Diversión garantizada"],
    languages: ["Inglés"]
  },
  {
    icon: Monitor,
    title: "Modalidad Online y Presencial",
    description: "Flexibilidad total con clases virtuales interactivas o presenciales en nuestras sedes de Estepona y Fuengirola.",
    features: ["Horarios flexibles", "Dos ubicaciones", "Profesores cualificados", "Grupos reducidos"],
    languages: ["Todos los idiomas"]
  },
  {
    icon: Briefcase,
    title: "Preparación Exámenes Oficiales",
    description: "Preparación especializada para Cambridge, TOEFL, DELF, DALF, TCF, DELE, CSE y examen de nacionalidad.",
    features: ["Cambridge · TOEFL", "DELF · DALF · TCF", "DELE · CSE", "Examen nacionalidad"],
    languages: ["Inglés", "Francés", "Español"]
  }
];

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/5 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-montserrat text-5xl md:text-6xl font-extrabold mb-8 text-foreground">
            Nuestros Servicios
          </h2>
          <p className="font-opensans text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <span className="font-pacifico italic text-primary-light text-lg block mb-2">
              Clases para todas las edades · Exámenes oficiales · Grupos reducidos
            </span>
            Enseñamos inglés, francés, alemán, árabe y español para extranjeros, con un enfoque práctico, cercano y adaptado a cada alumno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative bg-card border border-border/50 rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-500 overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary rounded-full opacity-5 -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-20 h-20 bg-primary rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    
                    <h3 className="font-montserrat text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="font-opensans text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <p className="text-sm font-montserrat font-medium text-primary mb-2">Idiomas:</p>
                      <div className="flex flex-wrap gap-2">
                        {service.languages.map((language, langIndex) => (
                          <span key={langIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground font-opensans">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-3 group-hover:animate-pulse" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  
                    <Button 
                      onClick={scrollToContact}
                      variant="outline" 
                      className="w-full group/btn border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary hover:shadow-glow transition-all duration-300 font-medium"
                    >
                      Solicita información
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;