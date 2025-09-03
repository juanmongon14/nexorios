const TrustBand = () => {
  const technologies = [
    { name: "Figma", logo: "https://www.figma.com/favicon.ico" },
    { name: "Next.js", logo: "https://nextjs.org/static/favicon/favicon.ico" },
    { name: "React", logo: "https://react.dev/favicon.ico" },
    { name: "Tailwind CSS", logo: "https://tailwindcss.com/favicon.ico" },
    { name: "Vercel", logo: "https://vercel.com/favicon.ico" },
    { name: "GitHub", logo: "https://github.com/favicon.ico" }
  ];

  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground font-medium mb-8">
            Herramientas que usamos para construir sitios de alto desempeño
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <div className="w-6 h-6 bg-muted rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary/20 rounded-sm"></div>
                </div>
                <span className="text-muted-foreground font-medium text-sm">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBand;