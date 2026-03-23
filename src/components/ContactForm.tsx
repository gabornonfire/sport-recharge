import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  contactFormSchema,
  type ContactFormValues,
  getFieldErrors,
  submitForm,
} from "@/lib/form-submission";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

const initialValues: ContactFormValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
  website: "",
};

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [submitState, setSubmitState] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (field: keyof ContactFormValues, value: string) => {
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
    const validationResult = contactFormSchema.safeParse(values);

    if (!validationResult.success) {
      const fieldErrors = getFieldErrors(contactFormSchema, values);
      const invalidFields = Object.keys(fieldErrors).filter((field) => field !== "website");
      setErrors(fieldErrors);
      setSubmitState({
        type: "error",
        message: "Kérlek, ellenőrizd a megjelölt mezőket, és egészítsd ki a hiányzó adatokat.",
      });
      trackEvent("form_validation_error", {
        form_name: "contact",
        invalid_fields: invalidFields.join(","),
        invalid_field_count: invalidFields.length,
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

    const result = await submitForm("contact", validationResult.data);

    setLoading(false);

    if (!result.ok) {
      trackEvent("form_submit_error", {
        form_name: "contact",
      });
      toast({
        title: "A beküldés nem sikerült",
        description: result.message,
        variant: "destructive",
      });
      setSubmitState({ type: "error", message: result.message });
      return;
    }

    trackEvent("form_submit_success", {
      form_name: "contact",
    });
    toast({
      title: "Üzenet elküldve",
      description: result.message,
    });
    setSubmitState({ type: "success", message: result.message });
    setValues(initialValues);
  };

  return (
    <section id="kapcsolat" className="py-16 md:py-24">
      <div className="container max-w-2xl px-5 sm:px-6">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Kérj <span className="text-gold-light">részleteket</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Ha előbb kérdeznél, itt könnyen felveheted velünk a kapcsolatot. Ha már kipróbálnád, az időpontfoglalás fenti űrlapja a gyorsabb út.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5 p-4 sm:p-5 md:p-8 rounded-2xl bg-card border border-border shadow-[0_16px_48px_rgba(0,0,0,0.08)]">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="space-y-2">
              <Label htmlFor="contact-name" className="text-foreground">Név *</Label>
              <Input
                id="contact-name"
                name="name"
                value={values.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Teljes neved"
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className={cn(
                  "bg-muted border-border text-foreground placeholder:text-muted-foreground",
                  errors.name && "border-destructive focus-visible:ring-destructive",
                )}
              />
              {errors.name && (
                <p id="contact-name-error" className="text-sm text-destructive">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-phone" className="text-foreground">Telefonszám *</Label>
              <Input
                id="contact-phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+36 30 123 4567"
                autoComplete="tel"
                inputMode="tel"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                className={cn(
                  "bg-muted border-border text-foreground placeholder:text-muted-foreground",
                  errors.phone && "border-destructive focus-visible:ring-destructive",
                )}
              />
              {errors.phone && (
                <p id="contact-phone-error" className="text-sm text-destructive">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="contact-email" className="text-foreground">Email *</Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              value={values.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="pelda@email.com"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              className={cn(
                "bg-muted border-border text-foreground placeholder:text-muted-foreground",
                errors.email && "border-destructive focus-visible:ring-destructive",
              )}
            />
            {errors.email && (
              <p id="contact-email-error" className="text-sm text-destructive">
                {errors.email}
              </p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="contact-message" className="text-foreground">Kérdésed / üzeneted *</Label>
            <Textarea
              id="contact-message"
              name="message"
              value={values.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Miben segíthetünk?"
              rows={4}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              className={cn(
                "bg-muted border-border text-foreground placeholder:text-muted-foreground",
                errors.message && "border-destructive focus-visible:ring-destructive",
              )}
            />
            {errors.message && (
              <p id="contact-message-error" className="text-sm text-destructive">
                {errors.message}
              </p>
            )}
          </div>

          <div className="hidden" aria-hidden="true">
            <Label htmlFor="contact-website">Website</Label>
            <Input
              id="contact-website"
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
            data-analytics-event="form_submit_click"
            data-analytics-form="contact"
            className="w-full min-h-14 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-bold text-base sm:text-lg py-5 sm:py-6"
          >
            {loading ? "Küldés..." : "Üzenet küldése"}
            {!loading && <MessageCircle className="ml-2 h-5 w-5" />}
          </Button>

          {submitState && (
            <div
              className={cn(
                "rounded-xl border px-4 py-3 text-sm leading-7",
                submitState.type === "success"
                  ? "border-gold/30 bg-gold/10 text-foreground"
                  : "border-destructive/40 bg-destructive/10 text-foreground",
              )}
            >
              {submitState.message}
            </div>
          )}

          <p className="text-muted-foreground text-xs text-center leading-relaxed">
            Itt is válaszolunk, de időpont-egyeztetéshez a foglalási űrlap a legközvetlenebb megoldás.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
