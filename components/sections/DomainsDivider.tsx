"use client";

import { Container } from "@/components/ui/Container";

export function DomainsDivider() {
  return (
    <div className="py-10">
      <Container>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </Container>
    </div>
  );
}

