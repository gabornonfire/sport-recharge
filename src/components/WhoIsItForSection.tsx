import { Check } from "lucide-react";

const audiences = [
  "Rendszeresen sportolóknak",
  "Aktív életmódot élőknek",
  "Akik tudatosabban építenék fel a regenerációjukat",
  "Akik nyitottak új wellness-recovery megoldásokra",
];

const WhoIsItForSection = () => {
  return (
    <section className="py-16 md:py-24 bg-dark-deepest">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Kinek <span className="text-primary">ajánlott?</span>
            </h2>
            
            <div className="space-y-4">
              {audiences.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-base md:text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Lifestyle image placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden bg-card border border-border">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-deepest/60 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <p className="text-sm opacity-60">Wentong-használat-női.png</p>
              </div>
            </div>
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
