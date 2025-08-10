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
    <section id="servicios" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Programas especializados para cada etapa de la vida. Encuentra el curso perfecto para alcanzar tus objetivos lingüísticos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-card border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={scrollToContact}
                    variant="outline" 
                    className="w-full group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Más información
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;