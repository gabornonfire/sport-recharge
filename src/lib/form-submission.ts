import { z } from "zod";

const phoneRegex = /^[+]?[\d\s()./-]{7,20}$/;

const trimmedString = (min: number, message: string) =>
  z.string().trim().min(min, message);

const optionalTrimmedString = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .or(z.literal(""));

export const bookingFormSchema = z.object({
  name: trimmedString(2, "Add meg a neved."),
  phone: z
    .string()
    .trim()
    .min(7, "Add meg a telefonszámod.")
    .max(20, "A telefonszám túl hosszú.")
    .regex(phoneRegex, "Adj meg egy érvényes telefonszámot."),
  email: z
    .string()
    .trim()
    .min(1, "Add meg az email címed.")
    .email("Adj meg egy érvényes email címet."),
  preferred_time: optionalTrimmedString(100),
  sport: optionalTrimmedString(100),
  note: optionalTrimmedString(1000),
  website: z.string().max(0).optional().or(z.literal("")),
});

export const contactFormSchema = z.object({
  name: trimmedString(2, "Add meg a neved."),
  phone: z
    .string()
    .trim()
    .min(7, "Add meg a telefonszámod.")
    .max(20, "A telefonszám túl hosszú.")
    .regex(phoneRegex, "Adj meg egy érvényes telefonszámot."),
  email: z
    .string()
    .trim()
    .min(1, "Add meg az email címed.")
    .email("Adj meg egy érvényes email címet."),
  message: trimmedString(10, "Írj legalább pár mondatot, hogy tudjunk segíteni.").max(
    1000,
    "Az üzenet túl hosszú.",
  ),
  website: z.string().max(0).optional().or(z.literal("")),
});

export type BookingFormValues = z.infer<typeof bookingFormSchema>;
export type ContactFormValues = z.infer<typeof contactFormSchema>;

type FormKind = "booking" | "contact";

type SubmissionResult = {
  ok: boolean;
  message: string;
};

const endpointByKind: Record<FormKind, string | undefined> = {
  booking: import.meta.env.VITE_BOOKING_FORM_ENDPOINT,
  contact: import.meta.env.VITE_CONTACT_FORM_ENDPOINT,
};

const formApiKey = import.meta.env.VITE_FORM_API_KEY;
const authHeaderName = import.meta.env.VITE_FORM_AUTH_HEADER?.trim() || "x-api-key";

const fallbackErrorMessage =
  "A beküldés most nem sikerült. Kérlek, próbáld meg újra később, vagy vedd fel velünk a kapcsolatot másik elérhetőségen.";

export function getFieldErrors<T extends Record<string, unknown>>(
  schema: z.ZodSchema<T>,
  values: T,
): Partial<Record<keyof T, string>> {
  const result = schema.safeParse(values);

  if (result.success) {
    return {};
  }

  const fieldErrors: Partial<Record<keyof T, string>> = {};

  for (const issue of result.error.issues) {
    const field = issue.path[0] as keyof T | undefined;

    if (!field || fieldErrors[field]) {
      continue;
    }

    fieldErrors[field] = issue.message;
  }

  return fieldErrors;
}

export async function submitForm(
  kind: FormKind,
  payload: BookingFormValues | ContactFormValues,
): Promise<SubmissionResult> {
  if (payload.website) {
    return {
      ok: true,
      message: "Köszönjük! A beküldést rögzítettük.",
    };
  }

  const endpoint = endpointByKind[kind];

  if (!endpoint) {
    return {
      ok: false,
      message:
        kind === "booking"
          ? "Az időpontfoglalás még nincs összekötve a beküldési végponttal. Állítsd be a VITE_BOOKING_FORM_ENDPOINT változót."
          : "A kapcsolatfelvétel még nincs összekötve a beküldési végponttal. Állítsd be a VITE_CONTACT_FORM_ENDPOINT változót.",
    };
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (formApiKey) {
    headers[authHeaderName] = formApiKey;
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({
        formType: kind,
        submittedAt: new Date().toISOString(),
        source: "sport-recharge-landing",
        payload,
      }),
    });

    let responseData: unknown = null;

    try {
      responseData = await response.json();
    } catch {
      responseData = null;
    }

    if (!response.ok) {
      const apiMessage =
        typeof responseData === "object" &&
        responseData !== null &&
        "message" in responseData &&
        typeof responseData.message === "string"
          ? responseData.message
          : fallbackErrorMessage;

      return {
        ok: false,
        message: apiMessage,
      };
    }

    const successMessage =
      typeof responseData === "object" &&
      responseData !== null &&
      "message" in responseData &&
      typeof responseData.message === "string"
        ? responseData.message
        : kind === "booking"
          ? "Sikeresen elküldted az időpontkérésed. Hamarosan felvesszük veled a kapcsolatot az egyeztetéshez."
          : "Sikeresen elküldted az üzeneted. Hamarosan válaszolunk a megadott elérhetőségeiden.";

    return {
      ok: true,
      message: successMessage,
    };
  } catch {
    return {
      ok: false,
      message: fallbackErrorMessage,
    };
  }
}
