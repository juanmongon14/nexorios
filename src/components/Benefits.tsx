import { Zap, Shield, Gauge, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: <Gauge className="w-8 h-8 text-primary" />,
      title: "Velocidad real",
      description: "Imágenes optimizadas, lazy-load y bundling eficiente para sitios ultrarrápidos que mejoran tu SEO y conversiones."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Accesibilidad",
      description: "Semántica, contraste, focus y ARIA correctos para cumplir estándares de accesibilidad web WCAG AA."
    },
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "SEO listo para producción",
      description: "Meta-tags, OG, schema básico y rutas claras que posicionan tu sitio desde el primer día."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Escalabilidad",
      description: "Componentes reutilizables y estructura mantenible que crece con tu negocio sin problemas técnicos."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desarrollamos sitios web modernos con las mejores prácticas de la industria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-hover transition-all duration-300 border-border hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-semibold text-foreground mb-3">
                      {benefit.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-card border border-border rounded-2xl p-6 shadow-card max-w-md mx-auto">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-foreground mb-1">Garantía de calidad</h4>
              <p className="text-muted-foreground text-sm">Código limpio, documentado y mantenible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;