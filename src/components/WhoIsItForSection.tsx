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
        className="absolute inset-y-0 left-0 w-[64%] hidden md:block opacity-[0.15] pointer-events-none"
      >
        <svg
          viewBox="0 0 760 760"
          className="absolute left-[-10%] top-1/2 w-[38rem] -translate-y-1/2 text-gold"
          fill="none"
        >
          <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path
              d="M140 592C272 592 380 484 380 352C380 220 488 112 620 112"
              strokeOpacity="0.34"
            />
            <path
              d="M196 592C297 592 380 509 380 408C380 307 463 224 564 224"
              strokeOpacity="0.28"
            />
            <path
              d="M252 592C322 592 380 534 380 464C380 394 438 336 508 336"
              strokeOpacity="0.24"
            />
            <rect x="140" y="112" width="480" height="480" rx="42" strokeOpacity="0.12" />
            <rect x="140" y="112" width="296" height="296" rx="34" strokeOpacity="0.18" />
            <rect x="140" y="112" width="184" height="184" rx="26" strokeOpacity="0.22" />
            <rect x="436" y="112" width="184" height="184" rx="26" strokeOpacity="0.1" />
            <rect x="140" y="408" width="184" height="184" rx="26" strokeOpacity="0.1" />
            <path d="M324 112V592" strokeOpacity="0.12" />
            <path d="M436 112V592" strokeOpacity="0.08" />
            <path d="M140 296H620" strokeOpacity="0.08" />
            <path d="M140 408H620" strokeOpacity="0.12" />
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
