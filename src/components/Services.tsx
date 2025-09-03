import { Globe, Bot, Zap, Link, Shield, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Diseño UI/UX",
      description: "Wireframes, estilos y componentes consistentes orientados a conversión",
      features: ["User Research", "Wireframes", "Prototipos", "Design Systems"]
    },
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "Desarrollo Web",
      description: "Sitios con Next.js/React y Tailwind; semántica accesible y carga veloz",
      features: ["Next.js/React", "Tailwind CSS", "Accesibilidad", "Performance"]
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Landing Pages de Alto Impacto",
      description: "Campañas, lanzamientos y validación de ofertas",
      features: ["A/B Testing", "Conversión", "Analytics", "Optimización"]
    },
    {
      icon: <Link className="w-8 h-8 text-primary" />,
      title: "Sitios Corporativos",
      description: "Páginas institucionales claras, escalables y fáciles de editar",
      features: ["CMS Friendly", "Escalabilidad", "Mantenimiento", "Documentación"]
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Optimización de Performance & SEO",
      description: "Imágenes next-gen, meta-tags, schema básico, Core Web Vitals",
      features: ["Core Web Vitals", "SEO On-page", "Schema Markup", "Lighthouse 90+"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Mantenimiento & Evolutivos",
      description: "Fixes, mejoras continuas y soporte de contenido",
      features: ["Soporte técnico", "Updates", "Mejoras", "Monitoreo"]
    }
  ];

  return (
    <section id="servicios" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Servicios que impulsan tu negocio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Servicios especializados en desarrollo web moderno con enfoque en conversión y performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-hover transition-all duration-300 border-border hover:border-primary/20 h-full"
            >
              <CardHeader className="pb-4">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            ¿Necesitas algo específico que no ves aquí?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-primary hover:text-primary-hover font-semibold underline underline-offset-4 transition-colors"
          >
            Hablemos de tu proyecto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;