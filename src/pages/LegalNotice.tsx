import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LegalNotice = () => {
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
            Aviso Legal
          </h1>
          <p className="text-muted-foreground font-opensans">Learning Corner School</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground font-montserrat mb-4">
                1. Información general
              </h2>
              <div className="text-foreground font-opensans">
                <p className="mb-4">En cumplimiento con el deber de información recogido en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI), se facilitan los siguientes datos:</p>
                <div className="space-y-2">
                  <p><strong>Titular:</strong> Hind Makhoukhi Karimi</p>
                  <p><strong>Nombre comercial:</strong> Learning Corner School</p>
                  <p><strong>Dirección:</strong> Plaza Miguel Ángel Loren Méndez 5, local A, Estepona, Málaga, España</p>
                  <p><strong>Teléfono:</strong> 933 296 383</p>
                  <p><strong>Correo electrónico:</strong> info@learningcornerschool.com</p>
                  <p><strong>NIF:</strong> 61012196G</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground font-montserrat mb-4">
                2. Objeto del sitio web
              </h2>
              <p className="text-foreground font-opensans">
                Learning Corner School es un centro de enseñanza de idiomas. A través de esta web se proporciona información sobre nuestros servicios, cursos y actividades.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground font-montserrat mb-4">
                3. Propiedad intelectual e industrial
              </h2>
              <p className="text-foreground font-opensans">
                Todos los contenidos de esta web (textos, imágenes, logotipos, diseño, estructura y software) están protegidos por las leyes de propiedad intelectual e industrial. Está prohibida su reproducción total o parcial sin autorización expresa del titular.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground font-montserrat mb-4">
                4. Responsabilidad del contenido
              </h2>
              <p className="text-foreground font-opensans">
                Learning Corner School no se hace responsable de los daños o perjuicios que puedan derivarse de interferencias, omisiones, interrupciones, virus informáticos o desconexiones motivadas por causas ajenas a la empresa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground font-montserrat mb-4">
                5. Política de enlaces
              </h2>
              <p className="text-foreground font-opensans">
                El sitio web puede contener enlaces a sitios web de terceros. Learning Corner School no se responsabiliza del contenido, informaciones o servicios que pudieran aparecer en dichos sitios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground font-montserrat mb-4">
                6. Legislación aplicable y jurisdicción
              </h2>
              <p className="text-foreground font-opensans">
                Las relaciones entre Learning Corner School y el usuario se regirán por la normativa española vigente. Cualquier controversia se someterá a los Juzgados y Tribunales de Málaga.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;