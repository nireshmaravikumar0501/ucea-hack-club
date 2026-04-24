"use client";

import * as React from "react";

export function Card({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-white/[0.03] ring-1 ring-white/10 backdrop-blur ${className}`}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_10%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_70%_90%,rgba(139,92,246,0.16),transparent_55%)]" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

