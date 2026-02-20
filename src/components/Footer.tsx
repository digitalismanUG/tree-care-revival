import { TreePine } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2 text-primary-foreground">
              <TreePine className="h-6 w-6 text-accent" />
              <span className="text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Baumpflege Ruland
              </span>
            </div>
            <p className="text-sm text-primary-foreground/60">
              Ihr zuverlässiger Partner für professionelle Baumpflege in der Region.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-bold text-primary-foreground">Kontakt</h4>
            <div className="space-y-1 text-sm text-primary-foreground/60">
              <p>Musterstraße 1, 12345 Musterstadt</p>
              <p>Tel: 0XXX – 123 456 7</p>
              <p>info@baumpflege-ruland.de</p>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-bold text-primary-foreground">Rechtliches</h4>
            <div className="space-y-1 text-sm">
              <a href="#" className="block text-primary-foreground/60 transition hover:text-primary-foreground">
                Impressum
              </a>
              <a href="#" className="block text-primary-foreground/60 transition hover:text-primary-foreground">
                Datenschutz
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Baumpflege Ruland. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
