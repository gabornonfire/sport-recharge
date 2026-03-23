import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { trackCtaClick } from "@/lib/analytics";

const FooterCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-dark-deepest">
      <div className="container max-w-2xl text-center space-y-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Készen állsz kipróbálni?
        </h2>
        <p className="text-muted-foreground text-lg">
          Próbáld ki a Wentong 30 perces, kényelmes wellness-recovery élményét. Az első kezelés most fél áron foglalható.
        </p>

        <div className="inline-flex flex-col gap-2 rounded-2xl border border-gold/20 bg-card/40 px-5 py-4 text-center">
          <div className="flex items-center justify-center gap-2 text-foreground font-heading font-semibold">
            <MapPin className="h-4 w-4 text-gold-light" />
            Jó megközelíthetőség, a Blahától 1 percre
          </div>
          <p className="text-sm text-muted-foreground">
            1073 Budapest, Osvát utca 7.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#idopontfoglalas">
            <Button
              size="lg"
              data-analytics-event="cta_click"
              data-analytics-location="footer_cta"
              data-analytics-name="foglalj_idopontot"
              onClick={() =>
                trackCtaClick({
                  cta_name: "foglalj_idopontot",
                  cta_location: "footer_cta",
                  target: "#idopontfoglalas",
                  cta_type: "primary",
                })
              }
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg px-8 py-6"
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
              data-analytics-location="footer_cta"
              data-analytics-name="kerek_reszleteket"
              onClick={() =>
                trackCtaClick({
                  cta_name: "kerek_reszleteket",
                  cta_location: "footer_cta",
                  target: "#kapcsolat",
                  cta_type: "secondary",
                })
              }
              className="w-full sm:w-auto border-gold/40 text-gold-light hover:bg-gold/10 font-heading font-semibold text-base px-7 py-6"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Kérek részleteket
            </Button>
          </a>
        </div>
        
        <p className="text-muted-foreground text-sm pt-4">
          © {new Date().getFullYear()} WHIEDA. Minden jog fenntartva.
        </p>
      </div>
    </section>
  );
};

export default FooterCTA;
