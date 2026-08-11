export const META_PIXEL_ID = "3779075385559993";

type FbqFn = ((...args: unknown[]) => void) & {
  queue?: unknown[];
  callMethod?: (...args: unknown[]) => void;
  push?: unknown;
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq?: FbqFn;
    _fbq?: FbqFn;
  }
}

export function trackPixel(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", event, params);
}

/** Loads fbevents.js and initializes the pixel. Client-only, idempotent. */
export function initMetaPixel() {
  if (typeof window === "undefined") return;
  if (window.fbq) return;

  const n: FbqFn = function (...args: unknown[]) {
    if (n.callMethod) n.callMethod.apply(n, args);
    else (n.queue as unknown[]).push(args);
  } as FbqFn;

  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];
  window.fbq = n;
  if (!window._fbq) window._fbq = n;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  window.fbq("init", META_PIXEL_ID, {}, { autoConfig: true });
  window.fbq("track", "PageView");
}
