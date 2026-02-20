import { Award, Clock, ShieldCheck, Banknote } from "lucide-react";

const usps = [
  {
    icon: Award,
    title: "Langjährige Erfahrung",
    description: "Über Jahre gewachsene Kompetenz in allen Bereichen der Baumpflege.",
  },
  {
    icon: ShieldCheck,
    title: "Zertifiziert & Versichert",
    description: "Qualifiziertes Fachpersonal, vollständig haftpflichtversichert.",
  },
  {
    icon: Clock,
    title: "Schnell vor Ort",
    description: "Kurze Reaktionszeiten – auch im Notfall schnell zur Stelle.",
  },
  {
    icon: Banknote,
    title: "Faire Preise",
    description: "Transparente Kalkulation ohne versteckte Kosten.",
  },
];

const TrustSection = () => {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
            Warum Ruland?
          </p>
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-5xl">
            Darauf können Sie sich verlassen
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp) => (
            <div key={usp.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/10">
                <usp.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-primary-foreground">
                {usp.title}
              </h3>
              <p className="text-sm text-primary-foreground/70">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
