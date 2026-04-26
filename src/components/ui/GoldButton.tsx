"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface GoldButtonProps {
  variant?: "filled" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function GoldButton({
  variant = "filled",
  size = "md",
  children,
  href,
  onClick,
  className,
  type = "button",
}: GoldButtonProps) {
  const baseStyles = cn(
    "font-ui font-semibold uppercase tracking-widest transition-all duration-300 relative overflow-hidden",
    size === "sm" && "px-6 py-3 text-sm",
    size === "md" && "px-8 py-4 text-base",
    size === "lg" && "px-10 py-5 text-lg",
    variant === "filled" && "bg-gold-gradient text-black shadow-gold-glow hover:shadow-gold-glow hover:-translate-y-1",
    variant === "outline" && "border border-gold text-gold hover:bg-gold/10 hover:shadow-gold-glow"
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === "filled" && (
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-light/30 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, className)}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cn(baseStyles, className)}>
      {content}
    </button>
  );
}
