import { Phone } from "lucide-react";

const FloatingCTA = () => {
  return (
    <a
      href="tel:+4915XX1234567"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition hover:scale-110 md:hidden"
      aria-label="Jetzt anrufen"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
};

export default FloatingCTA;
