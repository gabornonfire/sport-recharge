import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Mi történik a kezelés alatt?",
    a: "Kényelmesen helyet foglalsz, és a 30 perc alatt a készülék hő- és fényalapú elemekkel, valamint talpi stimulációval ad egy nyugodt wellness-recovery élményt. Nem kell átöltözni speciális eszközökhöz vagy aktívan részt venni benne: a kezelés passzív, te közben egyszerűen pihensz.",
  },
  {
    q: "Mennyi ideig tart egy kezelés?",
    a: "Egy alkalom 30 percig tart, ezért könnyen beilleszthető a napodba akár munka, akár edzés mellé. A cél egy rövid, kényelmes, ülve végezhető recovery blokk, nem egy hosszú program.",
  },
  {
    q: "Fájdalmas a kezelés?",
    a: "Nem, a Wentong élménye kifejezetten kényelmes. Inkább melegítő, ellazító és finom stimulációs érzetre számíthatsz, amit a legtöbben már első alkalommal is nyugodtnak és kellemesnek írnak le.",
  },
  {
    q: "Mit fogok érezni a kezelés alatt?",
    a: "A legtöbben kellemes meleget, enyhe talpi stimulációt és fokozatos ellazulást éreznek. Nem intenzív vagy megterhelő élményről van szó, inkább egy olyan 30 percről, amikor végre tényleg le tudsz lassulni.",
  },
  {
    q: "Mit érdemes felvennem?",
    a: "Kényelmes, laza ruházat a legjobb választás, amiben jól tudsz ülni és relaxálni. Nem kell sportfelszerelés vagy speciális váltóruha, de ha edzésről érkezel, egy száraz, komfortos szett még kellemesebbé teheti az élményt.",
  },
  {
    q: "Edzés előtt vagy után érdemes jönni?",
    a: "A legtöbben edzés után választják, mert ilyenkor különösen jól illeszkedik a regenerációs rutinba. Ha edzés előtt jönnél, az is megoldható, de a Wentong alapvetően wellness-recovery megoldásként a levezetéshez és feltöltődéshez passzol a legjobban.",
  },
  {
    q: "Kell-e bármit előre tudnom?",
    a: "Nincs szükség bonyolult előkészületre. Elég, ha a jelentkezésnél megírod a preferált idősávodat, és ha van, pár szót arról, milyen sportot végzel vagy miért jönnél. Mi ez alapján segítünk a gördülékeny egyeztetésben.",
  },
  {
    q: "Kinek ajánlott a kezelés?",
    a: "Aktív sportolóknak, rendszeresen edző embereknek és mindenkinek, aki kényelmes wellness-környezetben támogatná a regenerációját. Akkor is jó választás lehet, ha egyszerűen szeretnél 30 percet adni a testednek két terheltebb nap között.",
  },
  {
    q: "Mit fogok érezni a kezelés után?",
    a: "Sokan ellazultabbnak, könnyebbnek és frissebbnek érzik magukat utána. Gyakori visszajelzés a feltöltődés érzete és az, hogy a 30 perc után mentálisan is jobban ki tudnak kapcsolni.",
  },
  {
    q: "Mennyi idő alatt keresnek vissza jelentkezés után?",
    a: "A beérkezett foglalási és kapcsolatfelvételi kérésekre igyekszünk minél gyorsabban reagálni, jellemzően rövid időn belül visszajelzünk az időpont-egyeztetés vagy a kérdésed tisztázása miatt. Ha foglalni szeretnél, érdemes az időpontkérő űrlapot választani, mert ez a leggyorsabb út.",
  },
  {
    q: "Miért lehet hasznos sportolóknak?",
    a: "Mert egyetlen 30 perces alkalomban egyesíti a kényelmes pihenést, az izomrelaxáció támogatását, a mikrokeringés támogatását és az ellazulást. Jól beilleszthető azoknak, akik tudatosan figyelnek a recovery rutinjukra, de egyszerű, időhatékony megoldást keresnek.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl px-5 sm:px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Gyakori <span className="text-gold-light">kérdések</span>
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="space-y-3.5 md:space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-2xl px-4 sm:px-5 md:px-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] data-[state=open]:border-gold/30"
            >
              <AccordionTrigger className="py-5 sm:py-6 text-foreground font-heading font-semibold text-left hover:no-underline text-[1rem] sm:text-[1.05rem] md:text-lg leading-snug">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 sm:pb-6 pr-6 sm:pr-8 text-muted-foreground text-[0.95rem] sm:text-base leading-7 sm:leading-8">
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
