import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Servicios", id: "servicios" },
    { label: "Proceso", id: "proceso" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Preguntas", id: "faqs" },
    { label: "Contacto", id: "contacto" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/90 backdrop-blur-md shadow-hover' : 'bg-transparent'
      }`}
      style={{ height: '72px' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/0fd0b46d-dba8-4cc5-a9fb-ffec1c3034d1.png"
              alt="Nexorios"
              className="h-[50px] lg:h-[180px] w-auto"
              loading="eager"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-navy-foreground/90 hover:text-primary hover:underline underline-offset-4 decoration-1 transition-all duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Button
              variant="outline"
              onClick={() => window.open('https://wa.me/573144909964', '_blank')}
              className="border-primary text-primary hover:bg-primary/10 font-medium rounded-2xl"
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-navy-foreground/90 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-navy/95 backdrop-blur-md border-t border-navy-foreground/20 shadow-hover">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-3 text-navy-foreground/90 hover:text-primary hover:bg-navy-foreground/10 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4">
                <Button
                  variant="outline"
                  onClick={() => window.open('https://wa.me/573144909964', '_blank')}
                  className="w-full border-primary text-primary hover:bg-primary/10 font-medium rounded-2xl"
                >
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;