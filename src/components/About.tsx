import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Leaf } from 'lucide-react';
import teamImage from '@/assets/team-meeting.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precisión",
      description: "Análisis detallado y soluciones exactas para cada proyecto inmobiliario."
    },
    {
      icon: Leaf,
      title: "Sustentabilidad",
      description: "Compromiso con el desarrollo inmobiliario responsable y eco-eficiente."
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajo conjunto con constructoras, arquitectos y desarrolladores."
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Estándares de calidad superiores en cada etapa del proyecto."
    }
  ];

  return (
    <section id="about" className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Sobre Ikies Gestión Inmobiliaria
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos un equipo de profesionales especializados en la gestión integral de proyectos inmobiliarios, 
            con más de 15 años de experiencia en el mercado chileno.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img
              src={teamImage}
              alt="Equipo profesional Ikies"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Nuestra Experiencia y Compromiso
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                En Ikies Gestión Inmobiliaria S.G., nos especializamos en brindar soluciones integrales 
                para empresas constructoras, desarrolladores inmobiliarios y oficinas de arquitectura 
                que buscan optimizar sus procesos y maximizar el éxito de sus proyectos.
              </p>
              <p>
                Nuestro enfoque se centra en la sustentabilidad, la innovación y la eficiencia, 
                garantizando que cada proyecto no solo cumpla con los más altos estándares de calidad, 
                sino que también contribuya al desarrollo responsable del sector inmobiliario en Chile.
              </p>
              <p>
                Con un equipo multidisciplinario de ingenieros, arquitectos y especialistas en gestión 
                de proyectos, ofrecemos un acompañamiento estratégico desde la concepción hasta la 
                entrega final de cada desarrollo inmobiliario.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Nuestros Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;