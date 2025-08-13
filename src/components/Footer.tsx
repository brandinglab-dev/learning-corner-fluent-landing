import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
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
                {t('footer.description')}
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
            <h3 className="text-lg font-semibold mb-4 text-background">{t('footer.quick_links')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-background/80 hover:text-background transition-colors">
                  {t('navigation.home')}
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-background/80 hover:text-background transition-colors">
                  {t('navigation.services')}
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="text-background/80 hover:text-background transition-colors">
                  {t('navigation.locations')}
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-background/80 hover:text-background transition-colors">
                  {t('navigation.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-background">{t('footer.services')}</h3>
            <ul className="space-y-2 text-sm font-opensans">
              <li className="text-background/80">{t('contact.options.languages.english')} · {t('contact.options.languages.french')} · Alemán</li>
              <li className="text-background/80">Árabe · {t('contact.options.languages.spanish')} extranjeros</li>
              <li className="text-background/80">{t('services.exams.title')}</li>
              <li className="text-background/80">Online y presencial</li>
              <li className="text-background/80">English Camps</li>
              <li className="text-background/80">{t('benefits.small_groups.title')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-background">{t('footer.contact')}</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-background/80" />
                  <span className="text-background/80 text-sm font-opensans">{t('header.phone')}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-background/80" />
                  <span className="text-background/80 text-sm font-opensans">{t('header.email')}</span>
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
              © {currentYear} Learning Corner School. {t('footer.copyright')}
            </p>
            <div className="flex gap-4 text-sm">
              <a href="/politica-privacidad" className="text-background/80 hover:text-background transition-colors font-opensans">
                {t('footer.privacy')}
              </a>
              <a href="/politica-cookies" className="text-background/80 hover:text-background transition-colors font-opensans">
                {t('footer.cookies')}
              </a>
              <a href="/aviso-legal" className="text-background/80 hover:text-background transition-colors font-opensans">
                {t('footer.legal')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;