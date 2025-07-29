import { Building2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Ikies Gestión Inmobiliaria S.G.</span>
            </div>
            <p className="text-gray-300 mb-4">
              Expertos en gestión inmobiliaria sustentable, brindando soluciones integrales 
              para el desarrollo exitoso de proyectos en Chile.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+56 2 2345 6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contacto@ikies.cl</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Av. Providencia 1234, Oficina 567<br />Providencia, Santiago</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-gray-300 hover:text-primary transition-colors duration-200"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-primary transition-colors duration-200"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-primary transition-colors duration-200"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block text-gray-300 hover:text-primary transition-colors duration-200"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-primary transition-colors duration-200"
              >
                Contacto
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Gestión Integral de Proyectos</li>
              <li>Asesorías Técnicas y Contractuales</li>
              <li>Gestión de Postventa</li>
              <li>Asistencia a Constructoras</li>
              <li>Consultoría en Sustentabilidad</li>
              <li>Due Diligence Inmobiliario</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Ikies Gestión Inmobiliaria S.G. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-300">
            <a href="#" className="hover:text-primary transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;