import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";
import { useTranslation } from 'react-i18next';

const LocationSection = () => {
  const { t } = useTranslation();
  
  const locations = [
    {
      name: t('locations.estepona.title'),
      address: t('locations.estepona.address'),
      phone: t('header.phone'),
      hours: t('locations.estepona.hours'),
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51388.41379793586!2d-5.231835180468727!3d36.39041965402949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f18d765ea7b5483%3A0x72999e1e7146e26c!2sLearning%20Corner%20School%20Estepona!5e0!3m2!1ses!2ses!4v1754898569381!5m2!1ses!2ses"
    },
    {
      name: t('locations.fuengirola.title'), 
      address: t('locations.fuengirola.address'),
      phone: t('header.phone'),
      hours: t('locations.fuengirola.hours'),
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6410.066271037066!2d-4.622158123712086!3d36.5533139815769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72e3b50a4e5809%3A0xb96d4348f2596200!2sKampus%20Formaci%C3%B3n!5e0!3m2!1ses!2ses!4v1754898597843!5m2!1ses!2ses"
    }
  ];
  return (
    <section id="ubicacion" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-6 text-foreground">
            {t('locations.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-opensans leading-relaxed">
            <span className="font-montserrat font-medium italic text-primary-light text-base md:text-lg block mb-2">
              {t('locations.subtitle')}
            </span>
            {t('locations.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {locations.map((location, index) => (
            <Card key={index} className="overflow-hidden shadow-strong border-border/50">
              <div className="h-80 relative">
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                  <MapPin className="h-6 w-6 text-primary mr-3" />
                  {location.name}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-muted-foreground mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{location.address}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0" />
                    <a 
                      href={`tel:${location.phone}`}
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-muted-foreground mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{location.hours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;