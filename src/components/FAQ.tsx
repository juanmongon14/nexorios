import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Qué incluye un sitio típico?",
      answer: "Diseño UI/UX, desarrollo responsive, SEO on-page básico, formulario de contacto y despliegue."
    },
    {
      question: "¿En cuánto tiempo se entrega?",
      answer: "Landings: 1–2 semanas; sitios corporativos: 3–5 semanas (según contenido y revisiones)."
    },
    {
      question: "¿Necesito hosting y dominio?",
      answer: "Sí. Te asesoramos; el dominio queda a tu nombre y el sitio se despliega en tu hosting o Vercel."
    },
    {
      question: "¿Puedo actualizar el contenido?",
      answer: "Dejamos secciones editables y guía rápida; también ofrecemos mantenimiento mensual."
    },
    {
      question: "¿Cómo trabajan el SEO?",
      answer: "On-page: títulos, descripciones, estructura semántica, OG, sitemap y rendimiento."
    },
    {
      question: "¿Cuál es el precio base?",
      answer: "Depende del alcance. Preparamos una propuesta detallada después del diagnóstico inicial."
    }
  ];

  return (
    <section id="faqs" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Preguntas frecuentes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Resolvemos las dudas más comunes sobre nuestros servicios y procesos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-2xl px-6 hover:border-primary/20 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground py-6 hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            ¿Tienes otra pregunta que no aparece aquí?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-primary hover:text-primary-hover font-semibold underline underline-offset-4 transition-colors"
          >
            Escríbenos directamente
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;