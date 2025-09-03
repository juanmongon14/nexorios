import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Bot, Globe } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const features = [
    {
      icon: <Globe className="w-5 h-5" />,
      text: "Diseño UI/UX centrado en conversión"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Responsive y accesibles (WCAG AA)"
    },
    {
      icon: <Bot className="w-5 h-5" />,
      text: "Performance 90+ en Lighthouse"
    }
  ];

  return (
    <section className="relative min-h-screen lg:h-screen bg-gradient-hero flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KICAgICAgPGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjEiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=')] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-navy-foreground">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Diseñamos y desarrollamos sitios web{" "}
            <span className="text-primary">rápidos y modernos</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-navy-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Landing pages y sitios corporativos con enfoque UI/UX, performance y SEO.
          </p>

          {/* Feature List */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8 mb-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-navy-foreground/80">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20">
                  {feature.icon}
                </div>
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection('contacto')}
              size="lg"
              className="bg-primary hover:bg-primary-hover text-navy font-bold px-8 py-4 h-auto text-lg group transition-all duration-300 hover:shadow-hover rounded-2xl hover:scale-105"
            >
              Agenda una demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => window.open('https://wa.me/573144909964', '_blank')}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-4 h-auto text-lg transition-all duration-300 rounded-2xl"
            >
              WhatsApp
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-navy-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-navy-foreground/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;