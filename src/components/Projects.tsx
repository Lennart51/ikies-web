import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Users } from 'lucide-react';
import projectImage from '@/assets/project-construction.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Complejo Residencial Sustentable Las Condes",
      location: "Las Condes, Santiago",
      year: "2023-2024",
      type: "Residencial",
      units: "120 departamentos",
      description: "Desarrollo residencial con certificación de sustentabilidad, incorporando tecnologías de eficiencia energética y espacios verdes.",
      image: projectImage,
      status: "Completado"
    },
    {
      title: "Centro Comercial Eco-Plaza",
      location: "Providencia, Santiago",
      year: "2022-2023",
      type: "Comercial",
      units: "35 locales comerciales",
      description: "Centro comercial con diseño sustentable y sistemas de gestión ambiental integrados.",
      image: projectImage,
      status: "Completado"
    },
    {
      title: "Torres Corporativas Verde",
      location: "Vitacura, Santiago",
      year: "2024-2025",
      type: "Corporativo",
      units: "2 torres de oficinas",
      description: "Complejo corporativo de alta gama con estándares internacionales de sustentabilidad y eficiencia energética.",
      image: projectImage,
      status: "En desarrollo"
    }
  ];

  const stats = [
    { number: "50+", label: "Proyectos Completados" },
    { number: "1.2M", label: "m² Desarrollados" },
    { number: "15+", label: "Años de Experiencia" },
    { number: "98%", label: "Satisfacción del Cliente" }
  ];

  return (
    <section id="projects" className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conoce algunos de nuestros proyectos más representativos que demuestran 
            nuestro compromiso con la excelencia y la sustentabilidad.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={project.status === "Completado" ? "default" : "secondary"}
                    className={project.status === "Completado" ? "bg-primary" : "bg-orange-500"}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {project.year}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {project.units}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <Badge variant="outline" className="border-primary text-primary">
                  {project.type}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 bg-card rounded-lg p-8">
          <h3 className="text-xl font-bold text-foreground mb-4">
            ¿Quieres conocer más proyectos?
          </h3>
          <p className="text-muted-foreground mb-6">
            Estos son solo algunos ejemplos de nuestro trabajo. Contáctanos para conocer 
            nuestro portafolio completo y casos de éxito específicos para tu sector.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2">Proyectos Residenciales</Badge>
            <Badge variant="secondary" className="px-4 py-2">Desarrollos Comerciales</Badge>
            <Badge variant="secondary" className="px-4 py-2">Edificios Corporativos</Badge>
            <Badge variant="secondary" className="px-4 py-2">Proyectos Mixtos</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;