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
    <section className="bg-foreground overflow-hidden relative">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-[58%] hidden md:block opacity-[0.08] pointer-events-none"
      >
        <svg
          viewBox="0 0 520 520"
          className="absolute left-[-8%] top-1/2 w-[32rem] -translate-y-1/2 text-gold"
          fill="none"
        >
          <g stroke="currentColor" strokeWidth="1.2">
            <path d="M260 74C230 129 206 163 158 203C208 215 240 244 260 286C280 244 312 215 362 203C314 163 290 129 260 74Z" />
            <path d="M260 118C242 155 227 176 197 202C228 210 248 228 260 255C272 228 292 210 323 202C293 176 278 155 260 118Z" />
            <path d="M146 262C197 252 229 236 260 205C291 236 323 252 374 262C323 272 291 288 260 319C229 288 197 272 146 262Z" />
            <path d="M260 447C290 392 314 358 362 318C312 306 280 277 260 235C240 277 208 306 158 318C206 358 230 392 260 447Z" />
            <circle cx="260" cy="262" r="89" />
            <circle cx="260" cy="262" r="126" strokeOpacity="0.65" />
          </g>
        </svg>
      </div>
      <div className="grid lg:grid-cols-2 items-center">
        <div className="relative z-10 space-y-6 md:space-y-7 px-5 sm:px-6 md:px-12 lg:pl-16 xl:pl-24 py-10 md:py-14 lg:py-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-dark">
            Kinek ajánlott?
          </h2>
          
          <div className="space-y-4 md:space-y-5 max-w-xl">
            {audiences.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <span className="text-background/80 text-base md:text-lg leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-[5/4] sm:aspect-[4/5] w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-foreground/40 z-10 hidden lg:block" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-foreground via-foreground/30 to-transparent z-10 lg:hidden" />
            <img
              src={noiImg}
              alt="Wentong regenerációs kezelés használat közben"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
