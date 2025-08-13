import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "¡Mensaje enviado!",
      description: t('contact.form.required'),
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contacto" className="py-24 bg-muted/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-montserrat text-5xl md:text-6xl font-extrabold mb-8 text-foreground">
            {t('contact.title')}
          </h2>
          <p className="font-opensans text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <span className="font-montserrat font-medium italic text-primary-light text-base md:text-lg block mb-2">
              {t('hero.description')}
            </span>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="glass rounded-2xl p-8 shadow-strong hover-lift">
              <h3 className="font-montserrat text-2xl font-bold text-foreground mb-8">Información de {t('contact.contact')}</h3>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="font-medium text-foreground font-montserrat">{t('contact.phone')}</p>
                    <a href="tel:+34634489386" className="text-muted-foreground font-opensans hover:text-primary transition-colors">{t('header.phone')}</a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="font-medium text-foreground font-montserrat">{t('contact.email')}</p>
                    <a href={`mailto:${t('header.email')}`} className="text-muted-foreground font-opensans hover:text-primary transition-colors">{t('header.email')}</a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="font-medium text-foreground font-montserrat">{t('contact.locations_label')}</p>
                    <p className="text-muted-foreground font-opensans">Estepona & Fuengirola</p>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-sm text-muted-foreground mb-4 font-opensans">
                    ¡Primera clase de prueba gratuita!
                  </p>
                  <div className="bg-primary p-6 rounded-xl text-white text-center hover:shadow-glow transition-all duration-300">
                    <p className="font-bold text-lg font-montserrat">Oferta especial</p>
                    <p className="text-sm font-opensans">{t('hero.cta')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-8 shadow-strong hover-lift">
              <h3 className="font-montserrat text-2xl font-bold text-foreground mb-8">Solicita información</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="font-opensans font-medium">{t('contact.form.name')} *</Label>
                    <Input id="name" name="name" required className="mt-2 border-border/50 focus:border-primary transition-colors duration-300" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-opensans font-medium">{t('contact.form.phone')} *</Label>
                    <Input id="phone" name="phone" type="tel" required className="mt-2 border-border/50 focus:border-primary transition-colors duration-300" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="font-body font-medium">{t('contact.form.email')} *</Label>
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
                        <SelectItem value="french">Francés</SelectItem>
                        <SelectItem value="german">Alemán</SelectItem>
                        <SelectItem value="arabic">Árabe</SelectItem>
                        <SelectItem value="spanish">Español para extranjeros</SelectItem>
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
                  className="w-full bg-primary hover:bg-primary-dark hover:shadow-glow hover:scale-105 text-primary-foreground text-lg py-6 transition-all duration-300 font-medium"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Reserva tu plaza ahora
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center font-opensans">
                  {t('contact.form.required')}
                  <br />
                  {t('contact.form.privacy')} 
                  <a href="/politica-privacidad" className="text-primary hover:underline ml-1">{t('contact.form.privacy_link')}</a>.
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