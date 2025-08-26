import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Trophy, 
  Clock, 
  Globe, 
  CheckCircle, 
  BookOpen,
  Target,
  Award,
  MessageSquare
} from "lucide-react";
import { useTranslation } from 'react-i18next';

const BenefitsSection = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Users,
      title: t('benefits.small_groups.title'),
      description: t('benefits.small_groups.description'),
      highlight: t('benefits.highlights.individual_attention')
    },
    {
      icon: Globe,
      title: t('benefits.native_teachers.title'),
      description: t('benefits.native_teachers.description'),
      highlight: t('benefits.highlights.native_accent')
    },
    {
      icon: Trophy,
      title: t('benefits.exam_prep.title'),
      description: t('benefits.exam_prep.description'),
      highlight: t('benefits.highlights.high_success')
    },
    {
      icon: Clock,
      title: t('benefits.flexible.title'),
      description: t('benefits.flexible.description'),
      highlight: t('benefits.flexible.title')
    },
    {
      icon: Target,
      title: t('benefits.communicative.title'),
      description: t('benefits.communicative.description'),
      highlight: t('benefits.active.title')
    },
    {
      icon: Award,
      title: t('benefits.experience.title'),
      description: t('benefits.experience.description'),
      highlight: t('benefits.highlights.satisfied_students')
    }
  ];
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 text-foreground">
            {t('benefits.title')}
          </h2>
          <p className="font-opensans text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            <span className="font-montserrat font-medium italic text-primary-light text-sm md:text-base block mb-2">
              {t('benefits.tagline')}
            </span>
            {t('benefits.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/30"
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="font-montserrat text-lg md:text-xl font-bold mb-2 md:mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="font-opensans text-muted-foreground mb-2 md:mb-3 leading-relaxed text-sm md:text-base">
                    {benefit.description}
                  </p>
                  
                  <div className="inline-block px-2 md:px-3 py-1 bg-secondary/10 text-secondary text-xs md:text-sm rounded-full font-medium">
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
            <div className="font-montserrat text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
              25+
            </div>
            <p className="font-opensans text-muted-foreground text-xs md:text-sm lg:text-base">
              {t('benefits.stats.years_experience')}
            </p>
          </div>
          
          <div className="group">
            <div className="font-montserrat text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
              2000+
            </div>
            <p className="font-opensans text-muted-foreground text-xs md:text-sm lg:text-base">
              {t('benefits.stats.students_trained')}
            </p>
          </div>
          
          <div className="group">
            <div className="font-montserrat text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
              95%
            </div>
            <p className="font-opensans text-muted-foreground text-xs md:text-sm lg:text-base">
              {t('benefits.stats.exam_success')}
            </p>
          </div>
          
          <div className="group">
            <div className="font-montserrat text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
              5
            </div>
            <p className="font-opensans text-muted-foreground text-xs md:text-sm lg:text-base">
              {t('benefits.stats.languages_available')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;