import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImg from "@/assets/wentong-hasznalat-ffi.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-deepest via-background to-background z-0" />
      
      <div className="container relative z-10 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold-light text-sm font-medium tracking-wide">
              🔥 Első kezelés 50% kedvezménnyel
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-foreground">
              Regenerálódj
              <span className="block">gyorsabban.</span>
              <span className="block">Teljesíts jobban.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              A Wentong egy 30 perces regenerációs kezelés, ami segít az edzés utáni feltöltődésben. Kényelmes, relaxáló, és sportolóknak tervezték.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#idopontfoglalas">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg px-8 py-6 animate-pulse-glow">
                  Foglalj időpontot
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#kapcsolat">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-gold/40 text-gold-light hover:bg-gold/10 font-heading font-semibold text-lg px-8 py-6">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Kérek részleteket
                </Button>
              </a>
            </div>
          </div>
          
          <div className="relative order-first lg:order-last flex items-center justify-center">
            <div className="relative aspect-[4/5] w-full max-w-sm lg:max-w-md rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-deepest/80 via-transparent to-transparent z-10" />
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
