"use client";

import { motion } from "framer-motion";
import { JOIN_FORM_URL } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function HeroSection() {
  return (
    <Section id="top" className="pt-14 sm:pt-18 lg:pt-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-8 sm:p-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/12 blur-3xl" />
            <div className="absolute -bottom-40 left-12 h-[520px] w-[520px] rounded-full bg-violet-500/12 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px] opacity-[0.25]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-white/75 ring-1 ring-white/10">
              Innovation & Hackathon Community Portal
              <span className="h-1 w-1 rounded-full bg-cyan-400/80" />
              Beginner friendly
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              UCEA Hack Club
            </h1>
            <p className="mt-4 text-lg text-white/75 sm:text-xl">
              Learn. Build. Compete.
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-6 text-white/65">
              A student community to explore tech domains, build real projects,
              and team up for hackathons—no prior experience required.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={JOIN_FORM_URL} external variant="primary">
                Join Community
              </ButtonLink>
              <ButtonLink href="#domains" variant="secondary">
                Explore Tech
              </ButtonLink>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { k: "Workshops", v: "Hands-on learning" },
                { k: "Teams", v: "Find collaborators" },
                { k: "Hackathons", v: "Compete & grow" },
                { k: "Projects", v: "Build a portfolio" },
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/10"
                >
                  <div className="text-sm font-semibold text-white">
                    {item.k}
                  </div>
                  <div className="mt-1 text-xs text-white/65">{item.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

