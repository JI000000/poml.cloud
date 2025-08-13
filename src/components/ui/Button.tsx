import Link from "next/link";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-3.5 py-2 text-sm font-medium transition-colors";
  const styles: Record<string, string> = {
    primary: "bg-foreground text-background hover:opacity-90",
    secondary:
      "border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5",
    ghost: "hover:bg-black/5 dark:hover:bg-white/5",
  };
  return <button className={`${base} ${styles[variant]} ${className}`} {...props} />;
}

type LinkButtonProps = ComponentProps<typeof Link> & { variant?: ButtonProps["variant"]; };

export function LinkButton({ variant = "primary", className = "", ...props }: LinkButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-3.5 py-2 text-sm font-medium transition-colors";
  const styles: Record<string, string> = {
    primary: "bg-foreground text-background hover:opacity-90",
    secondary:
      "border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5",
    ghost: "hover:bg-black/5 dark:hover:bg-white/5",
  };
  return <Link className={`${base} ${styles[variant]} ${className}`} {...props} />;
}


