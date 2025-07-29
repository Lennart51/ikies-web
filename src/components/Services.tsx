import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Building, 
  FileText, 
  Headphones, 
  Users, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Gestión Integral de Proyectos",
      description: "Coordinación completa desde la planificación hasta la entrega final del proyecto inmobiliario.",
      features: [
        "Planificación estratégica del proyecto",
        "Coordinación de equipos multidisciplinarios",
        "Control de calidad y tiempos",
        "Supervisión de construcción",
        "Gestión de proveedores y contratistas"
      ]
    },
    {
      icon: FileText,
      title: "Asesorías Técnicas y Contractuales",
      description: "Asesoramiento especializado en aspectos técnicos, legales y contractuales del desarrollo inmobiliario.",
      features: [
        "Revisión de contratos de construcción",
        "Asesoría en normativas y permisos",
        "Evaluación técnica de proyectos",
        "Due diligence inmobiliario",
        "Consultoría en sustentabilidad"
      ]
    },
    {
      icon: Headphones,
      title: "Gestión de Postventa",
      description: "Acompañamiento integral en la etapa post-entrega para garantizar la satisfacción del cliente.",
      features: [
        "Protocolo de entrega de viviendas",
        "Gestión de observaciones",
        "Atención al cliente post-venta",
        "Coordinación de garantías",
        "Seguimiento de satisfacción"
      ]
    },
    {
      icon: Users,
      title: "Asistencia a Constructoras y Arquitectos",
      description: "Soporte especializado para constructoras y oficinas de arquitectura en sus proyectos.",
      features: [
        "Consultoría en procesos constructivos",
        "Optimización de recursos",
        "Implementación de mejores prácticas",
        "Capacitación de equipos",
        "Análisis de eficiencia operacional"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos soluciones completas para cada etapa de su proyecto inmobiliario, 
            con un enfoque integral y sustentable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-nature-green-light rounded-lg">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-nature-green-light rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            ¿Necesitas asesoría especializada para tu proyecto?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para analizar tu proyecto y 
            proponer las mejores soluciones para su desarrollo exitoso.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-primary hover:bg-nature-green-dark"
          >
            Solicitar Consultoría Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;