import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "+34123456789";
  const message = "¡Hola! Me interesa información sobre los cursos de Learning Corner School.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-strong transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:animate-bounce" />
      <div className="absolute -top-12 right-0 bg-gray-800 text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        ¡Escríbenos!
      </div>
    </a>
  );
};

export default WhatsAppButton;