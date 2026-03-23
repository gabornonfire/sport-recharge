const WhatIsItSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Device image placeholder - waiting for wentong-upscaled.png */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-card border border-border">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <p className="text-sm opacity-60">wentong-upscaled.png</p>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gold/5 rounded-3xl blur-3xl -z-10" />
          </div>
          
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Mi a Wentong kezelés?
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                A Wentong egy <strong className="text-foreground">30 perces regenerációs wellness-kezelés</strong>, amely több technológiai elemet kombinál egy kényelmes recovery élményben.
              </p>
              <p>
                A fókusz az <strong className="text-foreground">ellazuláson</strong>, a <strong className="text-foreground">talpi stimuláción</strong>, a <strong className="text-foreground">mikrokeringés támogatásán</strong> és az <strong className="text-foreground">izomrelaxáción</strong>.
              </p>
              <p>
                Nem orvosi kezelés – egy kiegészítő regenerációs megoldás, amely illeszkedik az aktív életmódhoz és segít a feltöltődésben.
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
