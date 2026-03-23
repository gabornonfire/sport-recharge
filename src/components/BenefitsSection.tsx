import { Zap, RefreshCw, HeartPulse, Flower2 } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Izomlazítás",
    desc: "Segíti az izmok ellazulását és csökkenti az edzés utáni feszültségérzetet.",
  },
  {
    icon: RefreshCw,
    title: "Regeneráció támogatása",
    desc: "Támogatja a természetes feltöltődési folyamatot egy kellemes recovery élménnyel.",
  },
  {
    icon: HeartPulse,
    title: "Mikrokeringés támogatása",
    desc: "A kezelés melegítő hatása támogatja a mikrokeringést a lábakban.",
  },
  {
    icon: Flower2,
    title: "Ellazulás és feltöltődés",
    desc: "30 perc tiszta relaxáció – tested és fejed is hálás lesz érte.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-foreground">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Miért érdemes kipróbálni?
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl bg-[hsl(0_0%_25%)] border border-border hover:border-gold/30 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors">
                <b.icon className="w-7 h-7 text-gold-light" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
