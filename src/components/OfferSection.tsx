import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const OfferSection = () => {
  return (
    <section className="py-16 md:py-24 bg-dark-deepest">
      <div className="container max-w-3xl text-center">
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-card via-card to-gold/5 border border-gold/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gold/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold-light font-medium text-sm">
              Limitált ajánlat
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Első kezelés 50% kedvezménnyel
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              Próbáld ki fél áron a 30 perces, kényelmes wellness-recovery élményt, amelyet sportolók regenerációjának támogatására terveztek.
            </p>

            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              A foglalás az elsődleges út, mert így tudunk a leggyorsabban időpontot egyeztetni. Ha előbb kérdeznél, a részletkérés opció is ott van.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a href="#idopontfoglalas">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg px-8 py-6">
                  Foglalj időpontot
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#kapcsolat">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-gold/40 text-gold-light hover:bg-gold/10 font-heading font-semibold text-base px-7 py-6">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Kérek részleteket
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
