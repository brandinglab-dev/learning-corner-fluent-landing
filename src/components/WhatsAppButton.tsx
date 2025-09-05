import { MessageCircle } from "lucide-react";
import { useTranslation } from 'react-i18next';

const WhatsAppButton = () => {
  const { t } = useTranslation();
  const whatsappNumber = "+34634494195";
  const message = t('whatsapp.message');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 md:p-5 rounded-full shadow-strong transition-all duration-300 hover:scale-110 hover:shadow-glow group animate-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6 md:h-7 md:w-7 group-hover:animate-bounce" />
      <div className="absolute -top-12 md:-top-14 right-0 glass text-white text-xs md:text-sm py-2 md:py-3 px-3 md:px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap font-body font-medium">
        {t('whatsapp.tooltip')}
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/10"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;