/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BOOKING_FORM_ENDPOINT?: string;
  readonly VITE_CONTACT_FORM_ENDPOINT?: string;
  readonly VITE_FORM_API_KEY?: string;
  readonly VITE_FORM_AUTH_HEADER?: string;
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_GTM_ID?: string;
  readonly VITE_META_PIXEL_ID?: string;
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
