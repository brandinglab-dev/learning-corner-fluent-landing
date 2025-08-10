import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";

const locations = [
  {
    name: "Estepona",
    address: "Calle Real 123, 29680 Estepona, Málaga",
    phone: "+34 952 123 456",
    hours: "Lun-Vie: 9:00-21:00, Sáb: 9:00-14:00",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.8!2d-5.1481!3d36.4273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDI1JzM4LjMiTiA1wrAwOCc1My4yIlc!5e0!3m2!1ses!2ses!4v1234567890"
  },
  {
    name: "Fuengirola", 
    address: "Avenida Jesús Santos Rein 45, 29640 Fuengirola, Málaga",
    phone: "+34 952 654 321",
    hours: "Lun-Vie: 9:00-21:00, Sáb: 9:00-14:00",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.2!2d-4.6262!3d36.5467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDMyJzQ4LjEiTiA0wrAzNyczNC4zIlc!5e0!3m2!1ses!2ses!4v1234567890"
  }
];

const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nuestras Ubicaciones
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dos centros estratégicamente ubicados en la Costa del Sol para ofrecerte la mejor accesibilidad y comodidad.
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