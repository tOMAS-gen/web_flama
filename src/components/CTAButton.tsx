import Link from "next/link";
import type { ReactNode } from "react";
import { whatsappUrl } from "@/lib/config";

const WHATSAPP_URL = whatsappUrl();

type Variant = "primary" | "outline" | "whatsapp";

interface CTAButtonProps {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  icon?: ReactNode;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover",
  outline:
    "bg-transparent border-2 border-border text-foreground hover:bg-muted",
  whatsapp:
    "bg-whatsapp text-white hover:bg-whatsapp-hover",
};

export function CTAButton({
  children,
  variant = "primary",
  href,
  icon,
  className = "",
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const resolvedHref = variant === "whatsapp" && !href ? WHATSAPP_URL : href || WHATSAPP_URL;
  const isExternal = resolvedHref.startsWith("http");

  const content = (
    <>
      {icon}
      {children}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={resolvedHref}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={resolvedHref} className={styles}>
      {content}
    </Link>
  );
}
