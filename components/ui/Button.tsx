"use client";

import * as React from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-cyan-400 to-violet-500 text-black shadow-[0_12px_40px_-18px_rgba(34,211,238,0.55)] hover:brightness-110 active:translate-y-[1px]",
  secondary:
    "bg-white/5 text-white ring-1 ring-white/12 hover:bg-white/8 active:translate-y-[1px]",
  ghost:
    "bg-transparent text-white/80 hover:text-white hover:bg-white/6 ring-1 ring-white/10 active:translate-y-[1px]",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

export function ButtonLink({
  href,
  external,
  variant = "primary",
  className = "",
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  external?: boolean;
  variant?: Variant;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

