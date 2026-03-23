/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BOOKING_FORM_ENDPOINT?: string;
  readonly VITE_CONTACT_FORM_ENDPOINT?: string;
  readonly VITE_FORM_API_KEY?: string;
  readonly VITE_FORM_AUTH_HEADER?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
