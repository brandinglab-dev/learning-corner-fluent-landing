import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Settings } from "lucide-react";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay to ensure the page is fully loaded
      setTimeout(() => {
        setShowConsent(true);
      }, 500);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
  };

  const rejectAll = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShowConsent(false);
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  if (!showConsent) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-border shadow-strong z-[100] p-4 animate-in slide-in-from-bottom duration-500">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-foreground font-opensans leading-relaxed">
                Utilizamos cookies propias y de terceros para mejorar nuestros servicios, elaborar información estadística y analizar sus hábitos de navegación. 
                Puede aceptar todas las cookies pulsando "Aceptar" o configurarlas en "Configurar cookies". 
                <a href="/politica-cookies" target="_blank" className="text-primary hover:text-primary-dark underline ml-1">
                  Más información en nuestra Política de cookies
                </a>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                onClick={openSettings}
                variant="outline"
                size="sm"
                className="text-sm"
              >
                <Settings className="h-4 w-4 mr-2" />
                Configurar cookies
              </Button>
              <Button
                onClick={rejectAll}
                variant="outline"
                size="sm"
                className="text-sm"
              >
                Rechazar
              </Button>
              <Button
                onClick={acceptAll}
                size="sm"
                className="bg-primary hover:bg-primary-dark text-white text-sm"
              >
                Aceptar todas
              </Button>
            </div>
          </div>
        </div>
      </div>

      {showSettings && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6 border-b border-border flex justify-between items-center">
              <h3 className="text-xl font-montserrat font-bold">Configuración de Cookies</h3>
              <Button
                onClick={() => setShowSettings(false)}
                variant="ghost"
                size="sm"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h4 className="font-montserrat font-medium mb-2">Cookies técnicas (obligatorias)</h4>
                <p className="text-sm text-muted-foreground font-opensans">
                  Estas cookies son necesarias para el funcionamiento básico del sitio web.
                </p>
              </div>
              <div>
                <h4 className="font-montserrat font-medium mb-2">Cookies de análisis</h4>
                <p className="text-sm text-muted-foreground font-opensans">
                  Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
                </p>
              </div>
              <div className="flex gap-2 pt-4">
                <Button onClick={rejectAll} variant="outline">
                  Rechazar todas
                </Button>
                <Button onClick={acceptAll} className="bg-primary hover:bg-primary-dark text-white">
                  Aceptar todas
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;