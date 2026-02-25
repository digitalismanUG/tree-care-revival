import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wie sicher ist eine Baumfällung in der Nähe von Gebäuden?",
    answer: "Wir verwenden spezielle Techniken wie Seilklettertechnik und Hubsteiger, um auch Bäume in schwierigen Lagen sicher zu entfernen. Unsere Priorität ist die Sicherheit für Mensch und Sachwerte.",
  },
  {
    question: "Bieten Sie auch regelmäßige Pflegeverträge an?",
    answer: "Ja, wir bieten individuelle Pflegeverträge sowohl für Privathaushalte als auch für Unternehmen und Kommunen an. Regelmäßige Pflege hält Ihre Bäume gesund und erspart aufwendige Korrekturen.",
  },
  {
    question: "Was passiert mit den Baumresten nach der Fällung?",
    answer: "Wir kümmern uns um die gesamte Entsorgung der abgeholzten Bäume. Auf Wunsch können wir Stammholz auch als Brennholz aufbereiten.",
  },
  {
    question: "Muss ich bei der Baumfällung anwesend sein?",
    answer: "Nein, Ihr Anwesen oder Firmengelände wird nach Abschluss der Arbeiten sauber und sicher hinterlassen. Sie können uns komplett vertrauen.",
  },
  {
    question: "Wie kurzfristig können Sie Sturmschäden beseitigen?",
    answer: "In Notfällen, wie nach Sturmschäden, bieten wir einen schnellen Notfallservice und sind im Ernstfall innerhalb weniger Stunden bei Ihnen vor Ort.",
  },
  {
    question: "Benötige ich eine Genehmigung für Baumfällungen?",
    answer: "In einigen Fällen ja, dies hängt von den örtlichen Bauvorschriften ab. Wir beraten Sie gern zu gesetzlichen Anforderungen und unterstützen bei der Einholung notwendiger Genehmigungen.",
  },
];

const FAQSection = () => (
  <section id="faq" className="bg-background py-20 md:py-28">
    <div className="container px-4">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
          FAQ
        </p>
        <h2 className="mb-4 text-3xl font-bold md:text-5xl">
          Häufige Fragen
        </h2>
        <p className="text-lg text-muted-foreground">
          Hier finden Sie Antworten auf die häufigsten Fragen rund um unsere Leistungen.
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-semibold md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
