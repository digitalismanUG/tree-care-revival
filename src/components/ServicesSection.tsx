import { TreePine, Axe, Scissors, CloudLightning } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: TreePine,
    title: "Baumpflege",
    description: "Fachgerechte Kronenpflege, Totholzentfernung und professioneller Baumschnitt für gesunde, sichere Bäume.",
    features: ["Kronenpflege", "Totholzentfernung", "Baumschnitt", "Baumkontrolle"],
  },
  {
    icon: Axe,
    title: "Baumfällung",
    description: "Sichere Fällung auch in schwierigen Lagen – mit modernster Technik und Erfahrung.",
    features: ["Stückweise Fällung", "Schwierige Lagen", "Wurzelentfernung", "Entsorgung"],
  },
  {
    icon: Scissors,
    title: "Heckenschnitt",
    description: "Formschnitt und Rückschnitt für gepflegte Hecken – termingerecht und sauber.",
    features: ["Formschnitt", "Rückschnitt", "Pflege", "Entsorgung"],
  },
  {
    icon: CloudLightning,
    title: "Sturmschaden-Beseitigung",
    description: "Schnelle und zuverlässige Hilfe nach Unwettern – 24/7 Notdienst verfügbar.",
    features: ["Notdienst", "Aufräumarbeiten", "Gefahrenbeseitigung", "Versicherungsdoku"],
  },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="leistungen" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
            Unsere Leistungen
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Kompetenz rund um Baum & Hecke
          </h2>
          <p className="text-lg text-muted-foreground">
            Von der Pflege bis zur Fällung – wir bieten Ihnen das volle Spektrum professioneller Baumpflege.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group cursor-pointer border-transparent bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
              onClick={scrollToContact}
            >
              <CardContent className="flex flex-col p-6">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
