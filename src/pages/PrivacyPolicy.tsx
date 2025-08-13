import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
            Política de Privacidad
          </h1>
          <p className="text-muted-foreground font-opensans">Learning Corner School</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground font-montserrat mb-4">
                1. Identidad del Responsable
              </h2>
              <div className="text-foreground font-opensans space-y-2">
                <p><strong>Responsable:</strong> Hind Makhoukhi Karimi</p>
                <p><strong>Nombre comercial:</strong> Learning Corner School</p>
                <p><strong>Dirección:</strong> Plaza Miguel Ángel Loren Méndez 5, local A, Estepona, Málaga, España</p>
                <p><strong>Teléfono:</strong> 933 296 383</p>
                <p><strong>NIF:</strong> 61012196G</p>
                <p><strong>Correo electrónico:</strong> info@learningcornerschool.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground font-montserrat mb-4">
                2. Finalidad del tratamiento de datos
              </h2>
              <div className="text-foreground font-opensans">
                <p className="mb-4">En Learning Corner School tratamos la información que nos facilitan las personas interesadas con el fin de:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Gestionar solicitudes de información y matriculación.</li>
                  <li>Facilitar información sobre cursos, promociones y eventos.</li>
                  <li>Cumplir con las obligaciones legales derivadas de nuestra actividad.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground font-montserrat mb-4">
                3. Conservación de los datos
              </h2>
              <p className="text-foreground font-opensans">
                Los datos personales se conservarán mientras se mantenga la relación con el interesado o durante los años necesarios para cumplir con las obligaciones legales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground font-montserrat mb-4">
                4. Legitimación
              </h2>
              <div className="text-foreground font-opensans">
                <p className="mb-4">La base legal para el tratamiento de sus datos es:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Consentimiento del interesado (formulario de contacto y suscripción a boletines).</li>
                  <li>Ejecución de un contrato (matriculación en cursos).</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground font-montserrat mb-4">
                5. Destinatarios
              </h2>
              <p className="text-foreground font-opensans">
                No se cederán datos a terceros, salvo obligación legal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground font-montserrat mb-4">
                6. Derechos
              </h2>
              <div className="text-foreground font-opensans">
                <p className="mb-4">Cualquier persona tiene derecho a obtener confirmación sobre si Learning Corner School está tratando datos personales que le conciernan.</p>
                <p className="mb-4">Las personas interesadas tienen derecho a:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Acceder a sus datos personales.</li>
                  <li>Rectificar los datos inexactos.</li>
                  <li>Solicitar su supresión.</li>
                  <li>Limitar u oponerse al tratamiento.</li>
                </ul>
                <p>Para ejercer estos derechos, puede escribir a info@learningcornerschool.com adjuntando copia de su DNI o documento equivalente.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground font-montserrat mb-4">
                7. Procedencia de los datos
              </h2>
              <div className="text-foreground font-opensans">
                <p className="mb-4">Los datos personales que tratamos proceden de:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Formularios web.</li>
                  <li>Comunicaciones por correo electrónico.</li>
                  <li>Llamadas telefónicas y mensajería instantánea.</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;