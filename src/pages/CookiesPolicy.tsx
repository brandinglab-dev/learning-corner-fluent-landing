import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground font-montserrat mb-2">
            Política de Cookies
          </h1>
          <p className="text-muted-foreground font-opensans">Learning Corner School</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground font-montserrat mb-4">
                1. Introducción
              </h2>
              <p className="text-foreground font-opensans">
                En Learning Corner School utilizamos cookies para ofrecer un mejor servicio y proporcionar una mejor experiencia de navegación. Queremos informarte de manera clara y precisa sobre las cookies que utilizamos, detallando qué es una cookie, para qué sirve, qué tipos usamos, su finalidad y cómo puedes configurarlas o desactivarlas si lo deseas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground font-montserrat mb-4">
                2. ¿Qué son las cookies?
              </h2>
              <p className="text-foreground font-opensans">
                Las cookies son pequeños archivos que se descargan en tu dispositivo (ordenador, smartphone o tableta) al acceder a determinadas páginas web. Permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground font-montserrat mb-4">
                3. Tipos de cookies que utilizamos
              </h2>
              <div className="text-foreground font-opensans space-y-4">
                <p><strong>Cookies técnicas:</strong> necesarias para el funcionamiento básico de la web y para permitir la navegación.</p>
                <p><strong>Cookies de personalización:</strong> permiten recordar información para que el usuario acceda con características personalizadas (idioma, tipo de navegador, configuración regional).</p>
                <p><strong>Cookies de análisis:</strong> tratadas por nosotros o por terceros, permiten cuantificar el número de usuarios y realizar medición y análisis estadístico del uso que hacen los usuarios del servicio.</p>
                <p><strong>Cookies publicitarias:</strong> gestionan de forma eficaz la oferta de espacios publicitarios.</p>
                <p><strong>Cookies de publicidad comportamental:</strong> almacenan información del comportamiento de los usuarios obtenida a través de la observación de sus hábitos de navegación.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground font-montserrat mb-4">
                4. Cookies de terceros
              </h2>
              <div className="text-foreground font-opensans">
                <p className="mb-4">Esta web utiliza servicios de terceros que instalan cookies:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Google Analytics (cookies de análisis) para medir y analizar la audiencia de la web.</li>
                  <li>Facebook Pixel (cookies de publicidad y medición).</li>
                  <li>Instagram Embed para mostrar contenido incrustado.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground font-montserrat mb-4">
                5. Configuración, desactivación y eliminación de cookies
              </h2>
              <div className="text-foreground font-opensans">
                <p className="mb-4">Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu dispositivo:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Chrome:</strong> <a href="https://support.google.com/chrome/answer/95647" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://support.google.com/chrome/answer/95647</a></li>
                  <li><strong>Firefox:</strong> <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias</a></li>
                  <li><strong>Safari:</strong> <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://support.apple.com/es-es/guide/safari/sfri11471/mac</a></li>
                  <li><strong>Edge:</strong> <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09</a></li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground font-montserrat mb-4">
                6. Consentimiento
              </h2>
              <p className="text-foreground font-opensans">
                Al navegar y continuar en nuestro sitio web, consientes el uso de las cookies mencionadas en las condiciones contenidas en esta Política de Cookies.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;