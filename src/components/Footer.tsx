import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { label: "Servicios", id: "servicios" },
    { label: "Proceso", id: "proceso" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Preguntas", id: "faqs" },
    { label: "Contacto", id: "contacto" }
  ];

  return (
    <footer className="bg-navy text-navy-foreground py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-2 -mt-4">
              <img 
                src="/lovable-uploads/0fd0b46d-dba8-4cc5-a9fb-ffec1c3034d1.png"
                alt="Nexorios"
                className="h-[50px] lg:h-[180px] w-auto"
                loading="lazy"
              />
              <p className="text-navy-foreground/80 leading-relaxed max-w-md">
                Nexorios diseña y automatiza experiencias digitales: web, n8n y agentes de IA listos para producción.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-navy-foreground/80">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:juan.mondragon@nexorios.com"
                  className="hover:text-primary transition-colors"
                >
                  juan.mondragon@nexorios.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-navy-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>Bogotá, Colombia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-navy-foreground mb-4">Enlaces rápidos</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-navy-foreground/80 hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services Summary */}
          <div>
            <h4 className="font-semibold text-navy-foreground mb-4">Servicios</h4>
            <ul className="space-y-2 text-navy-foreground/80 text-sm">
              <li>Desarrollo Web</li>
              <li>Automatizaciones IA</li>
              <li>Chatbots WhatsApp</li>
              <li>Integraciones API</li>
              <li>Mantenimiento</li>
              <li>SEO & Analytics</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-navy-foreground/60 text-sm">
              © {new Date().getFullYear()} Nexorios. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center gap-6 text-sm">
              <button
                onClick={() => window.open('https://wa.me/573144909964', '_blank')}
                className="text-navy-foreground/80 hover:text-primary transition-colors"
              >
                WhatsApp
              </button>
              <a
                href="mailto:juan.mondragon@nexorios.com"
                className="text-navy-foreground/80 hover:text-primary transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;