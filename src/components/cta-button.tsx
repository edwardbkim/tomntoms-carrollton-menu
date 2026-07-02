import Link from "next/link";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-burgundy)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-cream)]",
        variant === "primary" &&
          "bg-[color:var(--color-burgundy)] text-white shadow-[0_16px_40px_rgba(107,23,23,0.24)] hover:-translate-y-0.5 hover:bg-[color:var(--color-burgundy-strong)]",
        variant === "secondary" &&
          "border border-[color:var(--color-border)] bg-white/88 text-[color:var(--color-text)] backdrop-blur hover:-translate-y-0.5 hover:border-[color:var(--color-green)] hover:text-[color:var(--color-green)]",
        variant === "ghost" &&
          "text-[color:var(--color-text)] underline decoration-[color:var(--color-burgundy)] decoration-1 underline-offset-4 hover:text-[color:var(--color-burgundy)]",
        className
      )}
    >
      {children}
    </Link>
  );
}
