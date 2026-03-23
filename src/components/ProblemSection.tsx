import { Dumbbell, Battery, Timer, Heart } from "lucide-react";

const problems = [
  { icon: Dumbbell, text: "Kemény edzés után lassan töltődsz fel?" },
  { icon: Battery, text: "Úgy érzed, a tested több regenerációt igényelne?" },
  { icon: Timer, text: "Nincs időd hosszú pihenésre, de érzed, hogy kellene?" },
  { icon: Heart, text: "Keresel egy kényelmes módot a recovery-re?" },
];

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24 bg-foreground">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">
            Ismerős ez az érzés?
          </h2>
          <p className="text-background/60 text-lg md:text-xl">
            Ha rendszeresen edzel, tudod: a teljesítmény nem csak az edzésen múlik – hanem azon is, hogyan regenerálódsz utána.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-5 p-7 rounded-xl bg-[hsl(0_0%_25%)] border border-background/10 hover:border-gold/30 transition-colors"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gold/15 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              <p className="text-gold-light text-lg leading-relaxed pt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
