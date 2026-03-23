import deviceImg from "@/assets/wentong-upscaled.png";

const WhatIsItSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-gold/40 bg-card flex items-center justify-center p-8">
              <img
                src={deviceImg}
                alt="Wentong regenerációs készülék"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="absolute -inset-4 bg-gold/5 rounded-3xl blur-3xl -z-10" />
          </div>
          
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Mi a Wentong kezelés?
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                A Wentong egy <strong className="text-foreground">30 perces, ülve végezhető regenerációs wellness-kezelés</strong>, amely több technológiai elemet kombinál egy kényelmes recovery élményben.
              </p>
              <p>
                A fókusz az <strong className="text-foreground">ellazuláson</strong>, a <strong className="text-foreground">talpi stimuláción</strong>, a <strong className="text-foreground">mikrokeringés támogatásán</strong> és az <strong className="text-foreground">izomrelaxáción</strong>, úgy, hogy közben neked csak kényelmesen helyet kell foglalnod.
              </p>
              <p>
                Nem orvosi kezelés, hanem egy sportos életmódhoz illeszkedő wellness-recovery megoldás, amely támogatja a regenerációt és a feltöltődés érzését.
              </p>
            </div>
            
            <div className="flex items-center gap-3 pt-2">
              <div className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
              <span className="text-gold-light font-heading font-semibold text-sm tracking-widest uppercase">
                Multimodális Wellness
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-gold/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsItSection;
