import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Mi történik a kezelés alatt?",
    a: "Kényelmesen ülsz, miközben a Wentong készülék hő- és fényalapú technológiával, valamint talpi stimulációval támogatja a relaxációt és a regenerációt. Nem kell semmit csinálnod – csak élvezd a 30 percet.",
  },
  {
    q: "Mennyi ideig tart egy kezelés?",
    a: "Egy Wentong kezelés 30 percig tart. Kényelmes, passzív recovery élmény.",
  },
  {
    q: "Fájdalmas a kezelés?",
    a: "Egyáltalán nem. A Wentong kellemes, melegítő és relaxáló érzést ad. Sokan már az első alkalommal kifejezetten élvezik.",
  },
  {
    q: "Sportolás előtt vagy után érdemes kipróbálni?",
    a: "Elsősorban edzés után ajánljuk, regenerációs célú wellness-megoldásként. Segít a feltöltődésben és az izmok ellazulásában.",
  },
  {
    q: "Kinek ajánlott a kezelés?",
    a: "Aktív sportolóknak, rendszeresen edző embereknek, és mindenkinek, aki tudatosan szeretné támogatni a regenerációját egy kényelmes wellness-élménnyel.",
  },
  {
    q: "Mit fogok érezni a kezelés után?",
    a: "Sokan kellemesen ellazultnak, feltöltődöttnek érzik magukat. A lábak könnyebbé válhatnak, és egy általános jobb közérzet érzése jellemző.",
  },
  {
    q: "Miért lehet hasznos sportolóknak?",
    a: "Mert a Wentong támogatja a regenerációt: izomlazítás, mikrokeringés-támogatás és kellemes relaxáció – mindezt egyetlen 30 perces kezelés alatt.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Gyakori <span className="text-gold-light">kérdések</span>
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-gold/30"
            >
              <AccordionTrigger className="text-foreground font-heading font-semibold text-left hover:no-underline text-base md:text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
