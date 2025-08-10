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
    <section id="contacto" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            ¡Comienza tu aventura lingüística!
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ponte en contacto con nosotros para una clase de prueba gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <Card className="shadow-strong border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Teléfono</p>
                    <p className="text-muted-foreground">+34 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">info@learningcorner.es</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Ubicaciones</p>
                    <p className="text-muted-foreground">Estepona & Fuengirola</p>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    ¡Primera clase de prueba gratuita!
                  </p>
                  <div className="bg-gradient-primary p-4 rounded-lg text-white text-center">
                    <p className="font-bold">✨ Oferta especial ✨</p>
                    <p className="text-sm">Matrícula gratuita este mes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-strong border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Solicita información</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input id="name" name="name" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Teléfono *</Label>
                      <Input id="phone" name="phone" type="tel" required className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Correo electrónico *</Label>
                    <Input id="email" name="email" type="email" required className="mt-1" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age">Edad/Nivel</Label>
                      <Select name="age">
                        <SelectTrigger className="mt-1">
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
                      <Label htmlFor="language">Idioma de interés</Label>
                      <Select name="language">
                        <SelectTrigger className="mt-1">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="schedule">Horario preferente</Label>
                      <Select name="schedule">
                        <SelectTrigger className="mt-1">
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
                      <Label htmlFor="location">Centro preferido</Label>
                      <Select name="location">
                        <SelectTrigger className="mt-1">
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
                    <Label htmlFor="message">Mensaje adicional</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Cuéntanos sobre tus objetivos y necesidades específicas..."
                      className="mt-1"
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-soft text-lg py-6"
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

                  <p className="text-sm text-muted-foreground text-center">
                    * Campos obligatorios. Te contactaremos en las próximas 24 horas.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;