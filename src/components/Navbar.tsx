import { useState, useEffect } from "react";
import { TreePine, Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#kontakt", label: "Kontakt" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/95 shadow-lg backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2 text-primary-foreground">
          <TreePine className="h-6 w-6 text-accent" />
          <span className="text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Baumpflege Ruland
          </span>
        </div>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className="text-sm font-medium text-primary-foreground/80 transition hover:text-primary-foreground"
            >
              {l.label}
            </button>
          ))}
          <a
            href="tel:+4915XX1234567"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-accent-foreground transition hover:bg-accent/90"
          >
            <Phone className="h-4 w-4" />
            Anrufen
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-primary-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-primary-foreground/10 bg-primary/95 backdrop-blur-sm md:hidden">
          <div className="container flex flex-col gap-3 px-4 py-4">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleClick(l.href)}
                className="py-2 text-left text-sm font-medium text-primary-foreground/80"
              >
                {l.label}
              </button>
            ))}
            <a
              href="tel:+4915XX1234567"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-accent-foreground"
            >
              <Phone className="h-4 w-4" />
              Jetzt anrufen
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
