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
        "inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-red)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-cream)]",
        variant === "primary" &&
          "bg-[color:var(--color-red)] !text-[#ffffff] shadow-[0_16px_40px_rgba(88,28,32,0.24)] hover:-translate-y-0.5 hover:bg-[color:var(--color-red-hover)]",
        variant === "secondary" &&
          "border border-[color:var(--color-border)] bg-white/88 text-[color:var(--color-espresso)] backdrop-blur hover:-translate-y-0.5 hover:border-[color:var(--color-espresso)] hover:text-[color:var(--color-espresso)]",
        variant === "ghost" &&
          "text-[color:var(--color-espresso)] underline decoration-[color:var(--color-espresso)] decoration-1 underline-offset-4 hover:text-[color:var(--color-red)]",
        className
      )}
    >
      {children}
    </Link>
  );
}
