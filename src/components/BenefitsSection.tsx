import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Trophy, 
  Clock, 
  Globe, 
  CheckCircle, 
  BookOpen,
  Target,
  Award
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Grupos Reducidos",
    description: "Máximo 8 estudiantes por clase para atención personalizada",
    highlight: "Atención individual garantizada"
  },
  {
    icon: Globe,
    title: "Profesores Nativos",
    description: "Equipo internacional de profesores cualificados y experimentados",
    highlight: "Acento auténtico desde el primer día"
  },
  {
    icon: Trophy,
    title: "Exámenes Oficiales",
    description: "Preparación especializada para Cambridge, DELE, DELF y más",
    highlight: "95% de aprobados en exámenes"
  },
  {
    icon: Clock,
    title: "Horarios Flexibles",
    description: "Mañanas, tardes, fines de semana y modalidad online",
    highlight: "Se adapta a tu agenda"
  },
  {
    icon: Target,
    title: "Método Práctico",
    description: "Enfoque comunicativo para hablar desde la primera clase",
    highlight: "Habla desde el día 1"
  },
  {
    icon: Award,
    title: "25 Años de Experiencia",
    description: "Trayectoria consolidada en la enseñanza de idiomas",
    highlight: "Miles de estudiantes satisfechos"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold mb-6 text-foreground">
            ¿Por qué elegir Learning Corner?
          </h2>
          <p className="font-opensans text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <span className="font-pacifico italic text-primary-light text-base block mb-2">
              Más que una academia, tu puerta al mundo
            </span>
            Descubre las ventajas que nos convierten en la mejor opción para aprender idiomas en la Costa del Sol.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/30"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="font-montserrat text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="font-opensans text-muted-foreground mb-3 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full font-medium">
                    {benefit.highlight}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="font-montserrat text-3xl md:text-4xl font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              25+
            </div>
            <p className="font-opensans text-muted-foreground text-sm md:text-base">
              Años de experiencia
            </p>
          </div>
          
          <div className="group">
            <div className="font-montserrat text-3xl md:text-4xl font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              2000+
            </div>
            <p className="font-opensans text-muted-foreground text-sm md:text-base">
              Estudiantes formados
            </p>
          </div>
          
          <div className="group">
            <div className="font-montserrat text-3xl md:text-4xl font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              95%
            </div>
            <p className="font-opensans text-muted-foreground text-sm md:text-base">
              Aprobados en exámenes
            </p>
          </div>
          
          <div className="group">
            <div className="font-montserrat text-3xl md:text-4xl font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              5
            </div>
            <p className="font-opensans text-muted-foreground text-sm md:text-base">
              Idiomas disponibles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;