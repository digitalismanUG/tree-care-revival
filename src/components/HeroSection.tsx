import { Phone, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Baumpfleger bei der Arbeit an einem großen Baum" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/75" />
      </div>

      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/90 drop-shadow-md">
            Ihr Experte für Baum- & Grünpflege
          </p>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
            Professionelle Baumpflege in Ihrer Region
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-primary-foreground/80 md:text-xl">
            Seit Jahren Ihr zuverlässiger Partner für Baumpflege, Baumfällung, Heckenschnitt und Sturmschaden-Beseitigung – sicher, schnell und fair.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg font-bold shadow-lg"
            >
              Jetzt kostenlos anfragen
            </Button>
            <a
              href="tel:+4915XX1234567"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 px-6 py-3 font-semibold text-primary-foreground transition hover:border-primary-foreground/60 hover:bg-primary-foreground/10"
            >
              <Phone className="h-5 w-5" />
              0XXX – 123 456 7
            </a>
          </div>
        </div>

        <button
          onClick={() => document.getElementById("leistungen")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-16 inline-flex animate-bounce items-center gap-1 text-sm text-primary-foreground/60 transition hover:text-primary-foreground"
          aria-label="Zu den Leistungen scrollen"
        >
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
