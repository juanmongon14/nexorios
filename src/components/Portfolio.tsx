import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Landing de campaña",
      description: "Landing orientada a leads con A/B testing básico",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
      technologies: ["Next.js", "Tailwind", "Vercel"],
      category: "Landing Page"
    },
    {
      title: "Sitio corporativo 5 secciones",
      description: "Servicios, equipo, casos y contacto",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=800&auto=format&fit=crop",
      technologies: ["React", "SEO", "Accesibilidad"],
      category: "Sitio Corporativo"
    },
    {
      title: "Micrositio producto",
      description: "Página de producto con FAQs y formulario de contacto",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      technologies: ["UI/UX", "Performance", "Responsive"],
      category: "Micrositio"
    }
  ];

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Proyectos que generan resultados
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ejemplos de proyectos web que hemos desarrollado con enfoque en conversión y performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-hover transition-all duration-300 border-border hover:border-primary/20">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs font-medium">
                    {project.category}
                  </Badge>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="font-semibold text-lg mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            ¿Quieres ver más casos de éxito y métricas detalladas?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-primary hover:text-primary-hover font-semibold underline underline-offset-4 transition-colors"
          >
            Solicita nuestro portafolio completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;