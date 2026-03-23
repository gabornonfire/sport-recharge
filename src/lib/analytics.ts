type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;

type AnalyticsConfig = {
  gaMeasurementId?: string;
  gtmId?: string;
  metaPixelId?: string;
  siteUrl?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const config: AnalyticsConfig = {
  gaMeasurementId: import.meta.env.VITE_GA_MEASUREMENT_ID,
  gtmId: import.meta.env.VITE_GTM_ID,
  metaPixelId: import.meta.env.VITE_META_PIXEL_ID,
  siteUrl: import.meta.env.VITE_SITE_URL,
};

let initialized = false;

function injectScript(src: string, id: string) {
  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function pushDataLayer(payload: Record<string, unknown>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

function setupGoogleAnalytics(measurementId: string) {
  injectScript(`https://www.googletagmanager.com/gtag/js?id=${measurementId}`, "ga-script");

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });
}

function setupGoogleTagManager(gtmId: string) {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  pushDataLayer({
    "gtm.start": Date.now(),
    event: "gtm.js",
  });

  injectScript(`https://www.googletagmanager.com/gtm.js?id=${gtmId}`, "gtm-script");
}

function setupMetaPixel(pixelId: string) {
  if (window.fbq) {
    return;
  }

  const script = document.createElement("script");
  script.id = "meta-pixel-script";
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
  `;
  document.head.appendChild(script);

  window.fbq = window.fbq || function fbq(...args: unknown[]) {
    (window.fbq as unknown as { queue?: unknown[] }).queue =
      (window.fbq as unknown as { queue?: unknown[] }).queue || [];
    (window.fbq as unknown as { queue: unknown[] }).queue.push(args);
  };

  window.fbq("init", pixelId);
}

function upsertMetaAttribute(selector: string, attribute: "content", value: string) {
  const element = document.head.querySelector(selector);

  if (element) {
    element.setAttribute(attribute, value);
  }
}

export function initializeAnalytics() {
  if (initialized || typeof window === "undefined") {
    return;
  }

  if (config.gtmId) {
    setupGoogleTagManager(config.gtmId);
  }

  if (config.gaMeasurementId) {
    setupGoogleAnalytics(config.gaMeasurementId);
  }

  if (config.metaPixelId) {
    setupMetaPixel(config.metaPixelId);
  }

  if (config.siteUrl) {
    const canonicalUrl = config.siteUrl.replace(/\/$/, "") || config.siteUrl;
    let canonical = document.head.querySelector("link[rel='canonical']");

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);
    upsertMetaAttribute('meta[property="og:url"]', "content", canonicalUrl);
  }

  initialized = true;
}

export function trackEvent(event: string, params: AnalyticsEventParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  pushDataLayer({
    event,
    ...params,
  });

  if (window.gtag) {
    window.gtag("event", event, params);
  }

  if (window.fbq) {
    window.fbq("trackCustom", event, params);
  }
}

export function trackPageView(path: string) {
  if (typeof window === "undefined") {
    return;
  }

  if (config.siteUrl) {
    const normalizedBase = config.siteUrl.replace(/\/$/, "");
    const canonicalUrl = `${normalizedBase}${path.startsWith("/") ? path : `/${path}`}`;
    const canonical = document.head.querySelector("link[rel='canonical']");

    if (canonical) {
      canonical.setAttribute("href", canonicalUrl);
    }

    upsertMetaAttribute('meta[property="og:url"]', "content", canonicalUrl);
  }

  const params = {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  };

  pushDataLayer({
    event: "page_view",
    ...params,
  });

  if (window.gtag) {
    window.gtag("event", "page_view", params);
  }

  if (window.fbq) {
    window.fbq("track", "PageView");
  }
}

export function trackCtaClick(params: {
  cta_name: string;
  cta_location: string;
  target: string;
  cta_type: "primary" | "secondary";
}) {
  trackEvent("cta_click", params);
}
