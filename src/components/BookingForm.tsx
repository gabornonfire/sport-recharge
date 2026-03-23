import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Köszönjük!",
        description: "Hamarosan felvesszük veled a kapcsolatot az időpont egyeztetéséhez.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="idopontfoglalas" className="py-16 md:py-24 bg-dark-deepest">
      <div className="container max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Foglalj <span className="text-primary">időpontot</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ez a leggyorsabb út, ha ki szeretnéd próbálni a 30 perces, ülve végezhető wellness-recovery kezelést. Töltsd ki az űrlapot, és felvesszük veled a kapcsolatot az időpont egyeztetéséhez.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-gold/20 bg-card/60 px-5 py-4">
          <div className="flex items-center justify-center gap-2 text-foreground font-heading font-semibold text-center">
            <MapPin className="h-4 w-4 text-gold-light flex-shrink-0" />
            Jó megközelíthetőség, a Blahától 1 percre
          </div>
          <p className="text-sm text-muted-foreground text-center mt-1">
            1073 Budapest, Osvát utca 7.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8 rounded-2xl bg-card border border-border">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="booking-name" className="text-foreground">Név *</Label>
              <Input
                id="booking-name"
                name="name"
                required
                maxLength={100}
                placeholder="Teljes neved"
                className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="booking-phone" className="text-foreground">Telefonszám *</Label>
              <Input
                id="booking-phone"
                name="phone"
                type="tel"
                required
                maxLength={20}
                placeholder="+36 30 123 4567"
                className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="booking-email" className="text-foreground">Email *</Label>
            <Input
              id="booking-email"
              name="email"
              type="email"
              required
              maxLength={255}
              placeholder="pelda@email.com"
              className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="booking-time" className="text-foreground">Preferált idősáv</Label>
              <Input
                id="booking-time"
                name="preferred_time"
                maxLength={100}
                placeholder="pl. hétköznap délután"
                className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="booking-sport" className="text-foreground">Sport típusa (opcionális)</Label>
              <Input
                id="booking-sport"
                name="sport"
                maxLength={100}
                placeholder="pl. futás, crossfit"
                className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="booking-note" className="text-foreground">Megjegyzés</Label>
            <Textarea
              id="booking-note"
              name="note"
              maxLength={1000}
              placeholder="Van bármilyen kérdésed vagy megjegyzésed?"
              rows={3}
              className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          
          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg py-6"
          >
            {loading ? "Küldés..." : "Időpontot foglalok"}
            {!loading && <ArrowRight className="ml-2 h-5 w-5" />}
          </Button>
          
          <p className="text-muted-foreground text-xs text-center">
            Az adataidat bizalmasan kezeljük, kizárólag az időpont egyeztetéséhez használjuk.
          </p>
          <p className="text-muted-foreground text-xs text-center">
            Ha inkább előbb kérdeznél, lent a részletkérő űrlapon is írhatsz nekünk.
          </p>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
