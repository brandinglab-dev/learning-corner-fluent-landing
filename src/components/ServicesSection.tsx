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
    title: "Niños (4-12 años)",
    description: "Aprendizaje divertido e interactivo adaptado a cada edad. Desarrollamos habilidades lingüísticas através del juego y actividades creativas.",
    features: ["Clases lúdicas", "Grupos reducidos", "Metodología Cambridge", "Preparación exámenes YLE"]
  },
  {
    icon: GraduationCap,
    title: "Adolescentes (13-17 años)",
    description: "Preparación académica y desarrollo de competencias comunicativas. Enfoque en exámenes oficiales y habilidades para la vida.",
    features: ["Preparación B1/B2", "Speaking intensivo", "Apoyo escolar", "Exámenes Cambridge"]
  },
  {
    icon: Briefcase,
    title: "Adultos",
    description: "Formación profesional y personal adaptada a tus objetivos. Horarios flexibles para conciliar trabajo y estudio.",
    features: ["Business English", "Conversación", "Horarios flexibles", "Todos los niveles"]
  },
  {
    icon: Heart,
    title: "Residentes Extranjeros",
    description: "Programas especiales de integración social y cultural. Te ayudamos a sentirte como en casa en España.",
    features: ["Español básico", "Integración cultural", "Gestiones administrativas", "Apoyo personalizado"]
  },
  {
    icon: Monitor,
    title: "Formación Online",
    description: "Aprende desde casa con la misma calidad de nuestras clases presenciales. Tecnología avanzada y tutorías personalizadas.",
    features: ["Clases en vivo", "Plataforma interactiva", "Horarios mundiales", "Soporte 24/7"]
  },
  {
    icon: TreePine,
    title: "English Camps",
    description: "Campamentos de inmersión total en inglés. Diversión, aventura y aprendizaje en un entorno natural y estimulante.",
    features: ["Inmersión 100%", "Actividades outdoor", "Monitores nativos", "Certificado participación"]
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
    <section id="servicios" className="py-24 bg-accent/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-texture-grid bg-grid opacity-20" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-primary rounded-full opacity-10 animate-float" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-secondary rounded-full opacity-10 animate-float animation-delay-400" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 text-foreground">
            Nuestros <span className="text-shimmer">Servicios</span>
          </h2>
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Programas especializados para cada etapa de la vida. Encuentra el curso perfecto para alcanzar tus objetivos lingüísticos y transformar tu futuro.
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
                    <div className="flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-colored">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    
                    <h3 className="font-display text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground font-body">
                          <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 group-hover:animate-pulse" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  
                    <Button 
                      onClick={scrollToContact}
                      variant="outline" 
                      className="w-full group/btn border-primary/30 text-primary hover:bg-gradient-primary hover:text-white hover:border-primary hover:shadow-glow transition-all duration-300 font-medium"
                    >
                      Más información
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