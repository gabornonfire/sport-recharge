import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import heroImg from "@/assets/wentong-hasznalat-ffi.png";
import { trackCtaClick } from "@/lib/analytics";

const HeroSection = () => {
  return (
    <section className="relative flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-deepest via-background to-background z-0" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gold/5 to-transparent z-0" />
      
      <div className="relative z-10 w-full">
        <div className="grid lg:grid-cols-2 items-stretch">
          <div className="space-y-5 md:space-y-7 text-center lg:text-left px-5 sm:px-6 md:px-12 lg:pl-16 xl:pl-24 py-7 sm:py-10 md:py-18 lg:py-20">
            <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold-light text-xs sm:text-sm font-medium tracking-wide">
              🔥 Első kezelés 50% kedvezménnyel
            </div>
            
            <h1 className="font-heading text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.94] tracking-tight text-foreground">
              30 perc ülve.
              <span className="block">Kényelmes recovery.</span>
              <span className="block">Sportolóknak.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              A Wentong egy 30 perces, ülve végezhető wellness-recovery kezelés sportolóknak. Kényelmes, passzív élmény, amely támogatja a regenerációt, az ellazulást és az edzés utáni feltöltődés érzését.
            </p>

            <div className="inline-flex flex-col gap-2 rounded-2xl border border-gold/20 bg-card/60 px-4 sm:px-5 py-3.5 sm:py-4 text-left max-w-xl mx-auto lg:mx-0 shadow-[0_10px_40px_rgba(0,0,0,0.12)]">
              <div className="flex items-start gap-2 text-foreground font-heading font-semibold text-sm sm:text-base">
                <MapPin className="h-4 w-4 text-gold-light mt-0.5 flex-shrink-0" />
                Jó megközelíthetőség, a Blahától 1 percre
              </div>
              <p className="text-sm text-muted-foreground">
                1073 Budapest, Osvát utca 7.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-1">
              <a href="#idopontfoglalas">
                <Button
                  size="lg"
                  data-analytics-event="cta_click"
                  data-analytics-location="hero"
                  data-analytics-name="foglalj_idopontot"
                  onClick={() =>
                    trackCtaClick({
                      cta_name: "foglalj_idopontot",
                      cta_location: "hero",
                      target: "#idopontfoglalas",
                      cta_type: "primary",
                    })
                  }
                  className="w-full sm:w-auto min-h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-base sm:text-lg px-7 sm:px-8 py-5 sm:py-6 shadow-[0_14px_40px_rgba(179,26,32,0.22)]"
                >
                  Foglalj időpontot
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#kapcsolat">
                <Button
                  size="lg"
                  variant="outline"
                  data-analytics-event="cta_click"
                  data-analytics-location="hero"
                  data-analytics-name="kerek_reszleteket"
                  onClick={() =>
                    trackCtaClick({
                      cta_name: "kerek_reszleteket",
                      cta_location: "hero",
                      target: "#kapcsolat",
                      cta_type: "secondary",
                    })
                  }
                  className="w-full sm:w-auto min-h-14 border-gold/40 text-gold-light hover:bg-gold/10 font-heading font-semibold text-sm sm:text-base px-6 sm:px-7 py-5 sm:py-6"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Kérek részleteket
                </Button>
              </a>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Ha készen állsz kipróbálni, az időpontfoglalás a leggyorsabb út. Ha előbb kérdeznél, írj nekünk, és segítünk.
            </p>
          </div>
          
          <div className="relative order-first lg:order-last">
            <div className="relative aspect-[5/4] sm:aspect-[4/3] lg:aspect-auto lg:absolute lg:inset-0 w-full h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 lg:hidden" />
              <img
                src={heroImg}
                alt="Sportoló a Wentong regenerációs kezelés közben"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
