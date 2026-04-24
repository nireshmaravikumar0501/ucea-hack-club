import * as React from "react";

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

