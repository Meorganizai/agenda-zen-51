import { trackPixel } from "./meta-pixel";

const CHECKOUT_BASE = "https://pay.hotmart.com/S105002015T";
const CHECKOUT_OFFER = "erw00gyh";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

/**
 * Builds the Hotmart checkout URL for a given page position.
 * Incoming UTMs (e.g. from an ad) override the defaults so the real
 * campaign origin reaches Hotmart.
 */
export function buildCheckoutUrl(position: string): string {
  const defaults: Record<string, string> = {
    utm_source: "site-novo",
    utm_medium: position,
    utm_campaign: "organico",
  };

  const params = new URLSearchParams(defaults);
  let sck = `site-novo-${position}`;

  if (typeof window !== "undefined") {
    const incoming = new URLSearchParams(window.location.search);
    for (const key of UTM_KEYS) {
      const value = incoming.get(key);
      if (value) params.set(key, value);
    }
    const incomingSck = incoming.get("sck");
    if (incomingSck) sck = incomingSck;
  }

  params.set("sck", sck);
  // `off` define o preço no checkout: sempre logo após o "?" e nunca sobrescrito.
  return `${CHECKOUT_BASE}?off=${CHECKOUT_OFFER}&${params.toString()}`;
}

export function goToCheckout(position: string) {
  trackPixel("ViewContent", {
    content_name: "OrganizAI - Acesso 1 ano",
    content_category: position,
  });
  if (typeof window !== "undefined") {
    window.location.href = buildCheckoutUrl(position);
  }
}
