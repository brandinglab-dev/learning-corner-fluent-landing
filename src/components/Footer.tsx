import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/0ea3069a-d61b-4160-b672-046d5881f8f6.png" 
                alt="Learning Corner School" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-background/80 leading-relaxed font-opensans">
                Academia de idiomas con sede en Estepona y Fuengirola. 
                Enseñamos inglés, francés, alemán, árabe y español para extranjeros.
              </p>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/learningcornerschoolestepona" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/lc_school_estepona" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-background">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-background/80 hover:text-background transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-background/80 hover:text-background transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="text-background/80 hover:text-background transition-colors">
                  Ubicación
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-background/80 hover:text-background transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-background">Nuestros Servicios</h3>
            <ul className="space-y-2 text-sm font-opensans">
              <li className="text-background/80">Inglés · Francés · Alemán</li>
              <li className="text-background/80">Árabe · Español extranjeros</li>
              <li className="text-background/80">Preparación exámenes</li>
              <li className="text-background/80">Online y presencial</li>
              <li className="text-background/80">English Camps</li>
              <li className="text-background/80">Grupos reducidos</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-background">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-background/80" />
                  <span className="text-background/80 text-sm font-opensans">+34 634 48 93 86</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-background/80" />
                  <span className="text-background/80 text-sm font-opensans">info@learningcornerschool.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5 text-background/80 flex-shrink-0" />
                  <div className="text-background/80 text-sm font-opensans">
                    <p>Estepona & Fuengirola</p>
                    <p>Costa del Sol, Málaga</p>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm font-opensans">
              © {currentYear} Learning Corner School. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="/politica-privacidad" className="text-background/80 hover:text-background transition-colors font-opensans">
                Política de privacidad
              </a>
              <a href="/politica-cookies" className="text-background/80 hover:text-background transition-colors font-opensans">
                Política de cookies
              </a>
              <a href="/aviso-legal" className="text-background/80 hover:text-background transition-colors font-opensans">
                Aviso legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;