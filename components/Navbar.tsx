"use client";

import { useEffect, useMemo, useState } from "react";
import { NAV_ITEMS, JOIN_FORM_URL } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const items = useMemo(() => NAV_ITEMS, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition backdrop-blur supports-[backdrop-filter]:bg-black/40 ${
        scrolled ? "border-white/10 bg-black/55" : "border-transparent bg-black/25"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/80 to-violet-500/80 ring-1 ring-white/20" />
          <span className="font-semibold tracking-tight text-white">
            UCEA Hack Club
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={JOIN_FORM_URL}
            external
            variant="primary"
            className="px-4 py-2.5 text-sm"
            aria-label="Join UCEA Hack Club"
          >
            Join Now
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}

