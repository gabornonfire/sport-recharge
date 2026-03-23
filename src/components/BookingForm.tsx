import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  bookingFormSchema,
  type BookingFormValues,
  getFieldErrors,
  submitForm,
} from "@/lib/form-submission";
import { cn } from "@/lib/utils";

const initialValues: BookingFormValues = {
  name: "",
  phone: "",
  email: "",
  preferred_time: "",
  sport: "",
  note: "",
  website: "",
};

const BookingForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<BookingFormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormValues, string>>>({});
  const [submitState, setSubmitState] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (field: keyof BookingFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));

    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }

    if (submitState) {
      setSubmitState(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = bookingFormSchema.safeParse(values);

    if (!validationResult.success) {
      const fieldErrors = getFieldErrors(bookingFormSchema, values);
      setErrors(fieldErrors);
      setSubmitState({
        type: "error",
        message: "Kérlek, ellenőrizd a megjelölt mezőket, és javítsd a hibákat.",
      });
      toast({
        title: "Hiányzó vagy hibás adatok",
        description: "Nézd át a mezőket, és javítsd a jelzett hibákat.",
        variant: "destructive",
      });
      return;
    }

    setErrors({});
    setSubmitState(null);
    setLoading(true);

    const result = await submitForm("booking", validationResult.data);

    setLoading(false);

    if (!result.ok) {
      toast({
        title: "A beküldés nem sikerült",
        description: result.message,
        variant: "destructive",
      });
      setSubmitState({ type: "error", message: result.message });
      return;
    }

    toast({
      title: "Időpontkérés elküldve",
      description: result.message,
    });
    setSubmitState({ type: "success", message: result.message });
    setValues(initialValues);
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
        
        <form onSubmit={handleSubmit} noValidate className="space-y-5 p-6 md:p-8 rounded-2xl bg-card border border-border">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="booking-name" className="text-foreground">Név *</Label>
              <Input
                id="booking-name"
                name="name"
                value={values.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Teljes neved"
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "booking-name-error" : undefined}
                className={cn(
                  "bg-muted border-border text-foreground placeholder:text-muted-foreground",
                  errors.name && "border-destructive focus-visible:ring-destructive",
                )}
              />
              {errors.name && (
                <p id="booking-name-error" className="text-sm text-destructive">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="booking-phone" className="text-foreground">Telefonszám *</Label>
              <Input
                id="booking-phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+36 30 123 4567"
                autoComplete="tel"
                inputMode="tel"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "booking-phone-error" : undefined}
                className={cn(
                  "bg-muted border-border text-foreground placeholder:text-muted-foreground",
                  errors.phone && "border-destructive focus-visible:ring-destructive",
                )}
              />
              {errors.phone && (
                <p id="booking-phone-error" className="text-sm text-destructive">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="booking-email" className="text-foreground">Email *</Label>
            <Input
              id="booking-email"
              name="email"
              type="email"
              value={values.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="pelda@email.com"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "booking-email-error" : undefined}
              className={cn(
                "bg-muted border-border text-foreground placeholder:text-muted-foreground",
                errors.email && "border-destructive focus-visible:ring-destructive",
              )}
            />
            {errors.email && (
              <p id="booking-email-error" className="text-sm text-destructive">
                {errors.email}
              </p>
            )}
          </div>
          
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="booking-time" className="text-foreground">Preferált idősáv</Label>
              <Input
                id="booking-time"
                name="preferred_time"
                value={values.preferred_time}
                onChange={(e) => handleChange("preferred_time", e.target.value)}
                placeholder="pl. hétköznap délután"
                aria-invalid={Boolean(errors.preferred_time)}
                aria-describedby={errors.preferred_time ? "booking-time-error" : undefined}
                className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
              />
              {errors.preferred_time && (
                <p id="booking-time-error" className="text-sm text-destructive">
                  {errors.preferred_time}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="booking-sport" className="text-foreground">Sport típusa (opcionális)</Label>
              <Input
                id="booking-sport"
                name="sport"
                value={values.sport}
                onChange={(e) => handleChange("sport", e.target.value)}
                placeholder="pl. futás, crossfit"
                aria-invalid={Boolean(errors.sport)}
                aria-describedby={errors.sport ? "booking-sport-error" : undefined}
                className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
              />
              {errors.sport && (
                <p id="booking-sport-error" className="text-sm text-destructive">
                  {errors.sport}
                </p>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="booking-note" className="text-foreground">Megjegyzés</Label>
            <Textarea
              id="booking-note"
              name="note"
              value={values.note}
              onChange={(e) => handleChange("note", e.target.value)}
              placeholder="Van bármilyen kérdésed vagy megjegyzésed?"
              rows={3}
              aria-invalid={Boolean(errors.note)}
              aria-describedby={errors.note ? "booking-note-error" : undefined}
              className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
            />
            {errors.note && (
              <p id="booking-note-error" className="text-sm text-destructive">
                {errors.note}
              </p>
            )}
          </div>

          <div className="hidden" aria-hidden="true">
            <Label htmlFor="booking-website">Website</Label>
            <Input
              id="booking-website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={(e) => handleChange("website", e.target.value)}
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

          {submitState && (
            <div
              className={cn(
                "rounded-xl border px-4 py-3 text-sm leading-relaxed",
                submitState.type === "success"
                  ? "border-gold/30 bg-gold/10 text-foreground"
                  : "border-destructive/40 bg-destructive/10 text-foreground",
              )}
            >
              {submitState.message}
            </div>
          )}
          
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
