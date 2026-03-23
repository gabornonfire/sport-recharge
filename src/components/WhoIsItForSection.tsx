import { Check } from "lucide-react";
import noiImg from "@/assets/wentong-hasznalat-noi.png";

const audiences = [
  "Rendszeresen sportolóknak",
  "Aktív életmódot élőknek",
  "Akik tudatosabban építenék fel a regenerációjukat",
  "Akik nyitottak új wellness-recovery megoldásokra",
];

const WhoIsItForSection = () => {
  return (
    <section className="py-16 md:py-24 bg-foreground">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-background">
              Kinek ajánlott?
            </h2>
            
            <div className="space-y-4">
              {audiences.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-background/80 text-base md:text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="aspect-[4/5] w-full max-w-xs md:max-w-sm rounded-2xl overflow-hidden border-2 border-gold/30">
              <img
                src={noiImg}
                alt="Wentong regenerációs kezelés használat közben"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
