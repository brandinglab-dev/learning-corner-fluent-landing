import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Te contactaremos pronto para programar tu clase de prueba gratuita.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-accent/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-texture-dots bg-dots opacity-20" />
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-gradient-radial rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gradient-radial rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 text-foreground">
            ¡Comienza tu <span className="text-shimmer">aventura lingüística</span>!
          </h2>
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ponte en contacto con nosotros para una clase de prueba gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos más ambiciosos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="glass rounded-2xl p-8 shadow-strong hover-lift">
              <h3 className="font-display text-2xl text-foreground mb-8">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="font-medium text-foreground font-body">Teléfono</p>
                    <p className="text-muted-foreground font-body">+34 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="font-medium text-foreground font-body">Email</p>
                    <p className="text-muted-foreground font-body">info@learningcorner.es</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="font-medium text-foreground font-body">Ubicaciones</p>
                    <p className="text-muted-foreground font-body">Estepona & Fuengirola</p>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-sm text-muted-foreground mb-4 font-body">
                    ¡Primera clase de prueba gratuita!
                  </p>
                  <div className="bg-gradient-primary p-6 rounded-xl text-white text-center hover:shadow-glow transition-all duration-300">
                    <p className="font-bold text-lg font-display">✨ Oferta especial ✨</p>
                    <p className="text-sm font-body">Matrícula gratuita este mes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-8 shadow-strong hover-lift">
              <h3 className="font-display text-2xl text-foreground mb-8">Solicita información</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="font-body font-medium">Nombre completo *</Label>
                    <Input id="name" name="name" required className="mt-2 border-border/50 focus:border-primary transition-colors duration-300" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-body font-medium">Teléfono *</Label>
                    <Input id="phone" name="phone" type="tel" required className="mt-2 border-border/50 focus:border-primary transition-colors duration-300" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="font-body font-medium">Correo electrónico *</Label>
                  <Input id="email" name="email" type="email" required className="mt-2 border-border/50 focus:border-primary transition-colors duration-300" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="age" className="font-body font-medium">Edad/Nivel</Label>
                    <Select name="age">
                      <SelectTrigger className="mt-2 border-border/50 focus:border-primary transition-colors duration-300">
                        <SelectValue placeholder="Selecciona" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kids">Niños (4-12 años)</SelectItem>
                        <SelectItem value="teens">Adolescentes (13-17 años)</SelectItem>
                        <SelectItem value="adults">Adultos (18+ años)</SelectItem>
                        <SelectItem value="seniors">Seniors (55+ años)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="language" className="font-body font-medium">Idioma de interés</Label>
                    <Select name="language">
                      <SelectTrigger className="mt-2 border-border/50 focus:border-primary transition-colors duration-300">
                        <SelectValue placeholder="Selecciona" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">Inglés</SelectItem>
                        <SelectItem value="spanish">Español</SelectItem>
                        <SelectItem value="french">Francés</SelectItem>
                        <SelectItem value="german">Alemán</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="schedule" className="font-body font-medium">Horario preferente</Label>
                    <Select name="schedule">
                      <SelectTrigger className="mt-2 border-border/50 focus:border-primary transition-colors duration-300">
                        <SelectValue placeholder="Selecciona" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Mañanas</SelectItem>
                        <SelectItem value="afternoon">Tardes</SelectItem>
                        <SelectItem value="evening">Noches</SelectItem>
                        <SelectItem value="weekend">Fines de semana</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="location" className="font-body font-medium">Centro preferido</Label>
                    <Select name="location">
                      <SelectTrigger className="mt-2 border-border/50 focus:border-primary transition-colors duration-300">
                        <SelectValue placeholder="Selecciona" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="estepona">Estepona</SelectItem>
                        <SelectItem value="fuengirola">Fuengirola</SelectItem>
                        <SelectItem value="online">Online</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="font-body font-medium">Mensaje adicional</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Cuéntanos sobre tus objetivos y necesidades específicas..."
                    className="mt-2 border-border/50 focus:border-primary transition-colors duration-300"
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow hover:scale-105 text-primary-foreground shadow-colored text-lg py-6 transition-all duration-300 font-medium"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Solicitar clase de prueba gratuita
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center font-body">
                  * Campos obligatorios. Te contactaremos en las próximas 24 horas.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;