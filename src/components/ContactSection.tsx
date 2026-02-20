import { useState } from "react";
import { Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const services = ["Baumpflege", "Baumfällung", "Heckenschnitt", "Sturmschaden-Beseitigung", "Sonstiges"];

const ContactSection = () => {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Anfrage gesendet!",
      description: "Vielen Dank! Wir melden uns schnellstmöglich bei Ihnen.",
    });
    (e.target as HTMLFormElement).reset();
    setSelectedService("");
  };

  return (
    <section id="kontakt" className="bg-card py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
            Kontakt
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Jetzt kostenlos anfragen
          </h2>
          <p className="text-lg text-muted-foreground">
            Rufen Sie uns an, schreiben Sie uns per WhatsApp oder nutzen Sie unser Kontaktformular.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-5">
          {/* Contact buttons */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <a
              href="tel:+4915XX1234567"
              className="flex items-center gap-4 rounded-xl bg-primary p-5 text-primary-foreground transition hover:bg-primary/90"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-foreground/15">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium opacity-80">Rufen Sie uns an</p>
                <p className="text-lg font-bold">0XXX – 123 456 7</p>
              </div>
            </a>

            <a
              href="https://wa.me/4915XX1234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl bg-[hsl(145_60%_40%)] p-5 text-primary-foreground transition hover:opacity-90"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-foreground/15">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium opacity-80">WhatsApp</p>
                <p className="text-lg font-bold">Direkt schreiben</p>
              </div>
            </a>

            <div className="mt-4 rounded-xl border border-border p-5">
              <h3 className="mb-3 text-lg font-bold">Baumpflege Ruland</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Musterstraße 1</p>
                <p>12345 Musterstadt</p>
                <p className="pt-2">Mo – Fr: 7:00 – 18:00 Uhr</p>
                <p>Sa: nach Vereinbarung</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-5 lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" name="name" required placeholder="Ihr Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail *</Label>
                <Input id="email" name="email" type="email" required placeholder="ihre@email.de" />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" name="phone" type="tel" placeholder="Ihre Telefonnummer" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Leistung</Label>
                <select
                  id="service"
                  name="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Bitte wählen...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Nachricht *</Label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                rows={5}
              />
            </div>
            <Button type="submit" size="lg" className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-lg font-bold">
              <Send className="h-5 w-5" />
              Anfrage senden
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
