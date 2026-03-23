import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
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
            Töltsd ki az alábbi űrlapot, és felvesszük veled a kapcsolatot az időpont egyeztetéséhez.
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
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
