import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Üzenet elküldve!",
        description: "Kollégánk hamarosan felveszi veled a kapcsolatot.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="kapcsolat" className="py-16 md:py-24">
      <div className="container max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Kérj <span className="text-gold-light">részleteket</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ha előbb kérdeznél, itt könnyen felveheted velünk a kapcsolatot. Ha már kipróbálnád, az időpontfoglalás fenti űrlapja a gyorsabb út.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8 rounded-2xl bg-card border border-border">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="contact-name" className="text-foreground">Név *</Label>
              <Input
                id="contact-name"
                name="name"
                required
                maxLength={100}
                placeholder="Teljes neved"
                className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-phone" className="text-foreground">Telefonszám *</Label>
              <Input
                id="contact-phone"
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
            <Label htmlFor="contact-email" className="text-foreground">Email *</Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              required
              maxLength={255}
              placeholder="pelda@email.com"
              className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="contact-message" className="text-foreground">Kérdésed / üzeneted *</Label>
            <Textarea
              id="contact-message"
              name="message"
              required
              maxLength={1000}
              placeholder="Miben segíthetünk?"
              rows={4}
              className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          
          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-bold text-lg py-6"
          >
            {loading ? "Küldés..." : "Üzenet küldése"}
            {!loading && <MessageCircle className="ml-2 h-5 w-5" />}
          </Button>

          <p className="text-muted-foreground text-xs text-center">
            Itt is válaszolunk, de időpont-egyeztetéshez a foglalási űrlap a legközvetlenebb megoldás.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
