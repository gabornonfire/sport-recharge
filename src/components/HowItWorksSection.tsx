const steps = [
  {
    emoji: "🔥",
    title: "Hő- és fényalapú technológia",
    desc: "A kezelés hő- és fényalapú elemeket kombinál, amik támogatják az ellazulást és a melegítő hatást.",
  },
  {
    emoji: "🦶",
    title: "Talpi stimuláció",
    desc: "A talpadon keresztül kellemes stimulációs élményt ad, ami segíti a relaxációt.",
  },
  {
    emoji: "⏱️",
    title: "30 perc passzív recovery",
    desc: "Csak ülsz, relaxálsz – a kezelés dolgozik helyetted. Kényelmes és egyszerű.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Hogyan <span className="text-gold-light">működik?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Egyszerű, kényelmes és hatékony – ez a Wentong lényege.
          </p>
        </div>
        
        <div className="space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-5 p-6 rounded-xl bg-card border border-border"
            >
              <span className="text-3xl flex-shrink-0 mt-1">{step.emoji}</span>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
