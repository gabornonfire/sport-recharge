import { Sun, Footprints, Clock } from "lucide-react";

const steps = [
  {
    icon: Sun,
    title: "Hő- és fényalapú technológia",
    desc: "A kezelés hő- és fényalapú elemeket kombinál, amik támogatják az ellazulást és a melegítő hatást.",
    variant: "dark" as const,
  },
  {
    icon: Footprints,
    title: "Talpi stimuláció",
    desc: "A talpadon keresztül kellemes stimulációs élményt ad, ami segíti a relaxációt.",
    variant: "light" as const,
  },
  {
    icon: Clock,
    title: "30 perc passzív recovery",
    desc: "Csak ülsz, relaxálsz – a kezelés dolgozik helyetted. Kényelmes és egyszerű.",
    variant: "dark" as const,
  },
];

const variantStyles = {
  dark: "bg-[#b31a20] border-[#b31a20]/60 text-primary-foreground",
  light: "bg-red-light border-red-light/60 text-primary-foreground",
};

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Hogyan működik?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Egyszerű, kényelmes és hatékony – ez a Wentong lényege.
          </p>
        </div>
        
        <div className="space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex items-start gap-6 p-7 md:p-8 rounded-xl border ${variantStyles[step.variant]}`}
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center">
                <step.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-xl md:text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
