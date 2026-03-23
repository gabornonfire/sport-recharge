import { Dumbbell, Battery, Timer, Heart } from "lucide-react";

const problems = [
  { icon: Dumbbell, text: "Kemény edzés után lassan töltődsz fel?" },
  { icon: Battery, text: "Úgy érzed, a tested több regenerációt igényelne?" },
  { icon: Timer, text: "Nincs időd hosszú pihenésre, de érzed, hogy kellene?" },
  { icon: Heart, text: "Keresel egy kényelmes módot a recovery-re?" },
];

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24 bg-dark-deepest">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ismerős ez az érzés?
          </h2>
          <p className="text-muted-foreground text-lg">
            Ha rendszeresen edzel, tudod: a teljesítmény nem csak az edzésen múlik – hanem azon is, hogyan regenerálódsz utána.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {problems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-gold/20 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-gold-light" />
              </div>
              <p className="text-foreground text-base leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
