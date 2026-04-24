"use client";

import { motion } from "framer-motion";
import { JOIN_FORM_URL } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const joinBenefits = [
  { title: "Access Workshops", desc: "Learn modern tools with guided sessions." },
  { title: "Find Teammates", desc: "Meet builders across departments." },
  { title: "Learn New Tech", desc: "Explore domains with mini projects." },
  { title: "Join Hackathons", desc: "Compete with confidence and support." },
] as const;

export function JoinCommunitySection() {
  return (
    <Section id="join" className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.16),transparent_55%)]" />
      </div>

      <Container>
        <div className="rounded-3xl border border-white/12 bg-white/[0.03] p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Join the UCEA Hack Club Community
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
                Join to get updates, resources, workshop schedules, and team
                matching for hackathons.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink
                href={JOIN_FORM_URL}
                external
                variant="primary"
                className="px-6 py-3.5 text-base"
              >
                Join Community Now
              </ButtonLink>
              <ButtonLink href="#events" variant="secondary">
                See Events
              </ButtonLink>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {joinBenefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
              >
                <Card className="h-full p-5">
                  <div className="text-sm font-semibold text-white">
                    {b.title}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-white/70">
                    {b.desc}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="text-sm font-semibold text-white">
                Quick join form (embedded)
              </div>
              <p className="mt-2 text-sm leading-7 text-white/70">
                If the embed doesn’t load on your device/network, use the “Join
                Community Now” button above.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-xs text-white/55">Form link</div>
                <a
                  href={JOIN_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block break-all text-sm font-medium text-cyan-300 hover:text-cyan-200"
                >
                  {JOIN_FORM_URL}
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <div className="relative w-full">
                <iframe
                  title="Join UCEA Hack Club - Google Form"
                  src={`${JOIN_FORM_URL}?embedded=true`}
                  className="h-[720px] w-full sm:h-[760px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

