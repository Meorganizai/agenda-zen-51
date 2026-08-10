import type { ReactNode, MouseEvent } from "react";
import { buildCheckoutUrl, goToCheckout } from "@/lib/checkout";

export function CheckoutLink({
  position,
  className,
  children,
}: {
  position: string;
  className?: string;
  children: ReactNode;
}) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    goToCheckout(position);
  };

  return (
    <a href={buildCheckoutUrl(position)} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
