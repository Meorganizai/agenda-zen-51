import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";
import { initMetaPixel, trackPixel } from "@/lib/meta-pixel";

export function MetaPixel() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      initMetaPixel();
      return;
    }
    trackPixel("PageView");
  }, [pathname]);

  return null;
}
