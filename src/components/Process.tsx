import { Search, Palette, Code, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Descubrimiento",
      description: "Analizamos objetivos, audiencia y contenidos clave del sitio"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Diseño",
      description: "UI/UX, wireframes y prototipos que priorizan claridad y conversión"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Desarrollo",
      description: "Implementación en Next.js/React con prácticas de accesibilidad y performance"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Lanzamiento & Optimización",
      description: "Deploy, medición y mejoras continuas según datos reales"
    }
  ];

  return (
    <section id="proceso" className="py-20 lg:py-32 bg-muted/50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Nuestro proceso probado
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Un método estructurado que garantiza resultados en cada proyecto
          </p>
        </div>

        <div className="steps-grid grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="step text-center">
              {/* Icon Circle */}
              <div className="icon relative mb-6">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                  <div className="text-primary">
                    {step.icon}
                  </div>
                </div>
                {/* Badge Number */}
                <div className="badge absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;