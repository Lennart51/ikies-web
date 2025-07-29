import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Building2
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simular envío de email (aquí integrarías con tu servicio de email)
      const emailBody = `
Nuevo mensaje de contacto desde el sitio web:

Nombre: ${formData.name}
Email: ${formData.email}
Empresa: ${formData.company}
Teléfono: ${formData.phone}
Tipo de Proyecto: ${formData.projectType}

Mensaje:
${formData.message}
      `;

      // Crear mailto link como fallback
      const mailtoLink = `mailto:contacto@ikies.cl?subject=Consulta desde sitio web - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      
      // Abrir cliente de correo
      window.location.href = mailtoLink;

      toast({
        title: "Mensaje enviado",
        description: "Tu consulta ha sido enviada correctamente. Te contactaremos pronto.",
      });

      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        message: ''
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Inténtalo nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "+56 2 2345 6789",
      link: "tel:+56223456789"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contacto@ikies.cl",
      link: "mailto:contacto@ikies.cl"
    },
    {
      icon: MapPin,
      title: "Dirección",
      content: "Av. Providencia 1234, Oficina 567, Providencia, Santiago",
      link: null
    },
    {
      icon: Clock,
      title: "Horarios",
      content: "Lunes a Viernes: 9:00 - 18:00 hrs",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Contacta con Nosotros
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes un proyecto inmobiliario en mente? Conversemos sobre cómo podemos 
            ayudarte a desarrollarlo con éxito y sustentabilidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="h-6 w-6 text-primary" />
                  <span>Información de Contacto</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-nature-green-light rounded-lg">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="mt-6 bg-nature-green-light rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Consultoría Gratuita
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Solicita una primera consultoría sin costo para evaluar tu proyecto.
              </p>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                Agendar Reunión
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Envíanos tu Consulta</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nombre Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+56 9 1234 5678"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="projectType">Tipo de Proyecto</Label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-border rounded-md bg-background"
                    >
                      <option value="">Selecciona el tipo de proyecto</option>
                      <option value="residencial">Proyecto Residencial</option>
                      <option value="comercial">Desarrollo Comercial</option>
                      <option value="corporativo">Edificio Corporativo</option>
                      <option value="mixto">Proyecto Mixto</option>
                      <option value="consultoria">Consultoría General</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Cuéntanos sobre tu proyecto, necesidades específicas y cómo podemos ayudarte..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-nature-green-dark"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;