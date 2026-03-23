const processSteps = [
  {
    num: "01",
    title: "Jelentkezz",
    desc: "Foglalj időpontot online, vagy kérj részleteket – felvesszük veled a kapcsolatot.",
  },
  {
    num: "02",
    title: "30 perc Wentong",
    desc: "Kényelmes, relaxáló kezelés – csak ülsz és élvezed a recovery élményt.",
  },
  {
    num: "03",
    title: "Érezd a különbséget",
    desc: "Próbáld ki, tapasztald meg a hatást, és dönts a folytatásról.",
  },
];

const StepsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Hogyan zajlik?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="font-heading text-5xl md:text-6xl font-black text-gold/20 mb-4">
                {step.num}
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
