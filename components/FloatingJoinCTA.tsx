"use client";

import { useEffect, useState } from "react";
import { JOIN_FORM_URL } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";

export function FloatingJoinCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 transition duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      <ButtonLink
        href={JOIN_FORM_URL}
        external
        variant="primary"
        className="shadow-[0_18px_60px_-26px_rgba(34,211,238,0.7)]"
      >
        Join Community
      </ButtonLink>
    </div>
  );
}

