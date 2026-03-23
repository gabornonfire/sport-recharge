import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const FooterCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-dark-deepest">
      <div className="container max-w-2xl text-center space-y-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Készen állsz kipróbálni?
        </h2>
        <p className="text-muted-foreground text-lg">
          Tapasztald meg a Wentong regenerációs élményt – most az első kezelés fél áron a tiéd.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#idopontfoglalas">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg px-8 py-6">
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
        
        <p className="text-muted-foreground text-sm pt-4">
          © {new Date().getFullYear()} WHIEDA. Minden jog fenntartva.
        </p>
      </div>
    </section>
  );
};

export default FooterCTA;
