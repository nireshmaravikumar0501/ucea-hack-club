"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const benefits = [
  {
    title: "Learn",
    desc: "Pick up new skills quickly with mentors, workshops, and teammates.",
  },
  {
    title: "Build Projects",
    desc: "Turn an idea into a working demo—websites, apps, AI tools, anything.",
  },
  {
    title: "Network",
    desc: "Meet students, mentors, and faculty who can guide your journey.",
  },
  {
    title: "Compete",
    desc: "Pitch your work, win prizes, and gain confidence through challenges.",
  },
] as const;

export function WhatIsHackathonSection() {
  return (
    <Section id="hackathon">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              What is a Hackathon?
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              A hackathon is a short, fun building event (usually 6–48 hours)
              where students form teams, learn together, and create a working
              project. You don’t need to be an expert—many participants start as
              beginners.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm font-semibold text-white">
                Beginners are welcome
              </div>
              <p className="mt-2 text-sm leading-7 text-white/70">
                If you’re from non-tech departments or just starting out, you
                can contribute with ideas, design, presentations, documentation,
                and teamwork—skills that matter in every hackathon.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <Card className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {b.title}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-white/70">
                        {b.desc}
                      </div>
                    </div>
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

