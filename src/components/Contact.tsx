import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo dentro de las próximas 24 horas.",
      });

      // Reset form
      setFormData({
        nombre: '',
        email: '',
        empresa: '',
        telefono: '',
        mensaje: ''
      });

    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Hubo un problema. Por favor intenta de nuevo o contáctanos por WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email directo",
      value: "juan.mondragon@nexorios.com",
      action: () => window.location.href = 'mailto:juan.mondragon@nexorios.com'
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      label: "WhatsApp",
      value: "+57 314 490 9964",
      action: () => window.open('https://wa.me/573144909964', '_blank')
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Ubicación",
      value: "Bogotá, Colombia",
      action: null
    }
  ];

  return (
    <section id="contacto" className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conversemos sobre tu proyecto web. Te respondemos en menos de 24 horas con una propuesta personalizada
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-hover border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">
                Cuéntanos sobre tu proyecto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                      Nombre completo *
                    </label>
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="border-input focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email corporativo *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@empresa.com"
                      className="border-input focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <Input
                      id="empresa"
                      name="empresa"
                      type="text"
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      className="border-input focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                      Teléfono
                    </label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+57 300 123 4567"
                      className="border-input focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos brevemente tu objetivo y el contenido que ya tienes (secciones, textos, imágenes)."
                    rows={5}
                    className="border-input focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 h-auto text-lg group"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground">
                  Al enviar este formulario, aceptas que utilicemos tus datos para contactarte sobre tu proyecto. 
                  No compartimos tu información con terceros.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Otras formas de contactarnos
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/20 transition-colors ${
                      info.action ? 'cursor-pointer hover:bg-muted/50' : ''
                    }`}
                    onClick={info.action || undefined}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">¿Prefieres WhatsApp?</h4>
                    <p className="text-muted-foreground text-sm">Respuesta inmediata en horario laboral</p>
                  </div>
                </div>
                <Button
                  onClick={() => window.open('https://wa.me/573144909964', '_blank')}
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-medium"
                >
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;