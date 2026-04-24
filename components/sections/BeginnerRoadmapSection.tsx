"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const steps = [
  {
    title: "Learn Git & GitHub",
    desc: "Understand version control, cloning repos, commits, and pull requests.",
  },
  {
    title: "Build First Project",
    desc: "Ship a small project: a portfolio page, a mini app, or an AI demo.",
  },
  {
    title: "Join Mini Challenge",
    desc: "Practice teamwork with short prompts and guided builds.",
  },
  {
    title: "Prepare for Hackathon",
    desc: "Form a team, pick a problem, plan features, and present your demo.",
  },
] as const;

export function BeginnerRoadmapSection() {
  return (
    <Section id="roadmap">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Beginner Roadmap
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
              A simple path from “I’m new” to “I can build & compete.”
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
            >
              <Card className="h-full p-6">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-white/60">
                    Step {idx + 1}
                  </div>
                  <div className="h-6 w-6 rounded-xl bg-white/5 ring-1 ring-white/10 text-center text-xs leading-6 text-white/70">
                    {idx + 1}
                  </div>
                </div>
                <div className="mt-4 text-base font-semibold text-white">
                  {s.title}
                </div>
                <div className="mt-2 text-sm leading-6 text-white/70">
                  {s.desc}
                </div>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <div className="mt-4 text-xs text-white/55">
                  You’ll get templates, guidance, and teammates here.
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-400/10 via-white/5 to-violet-500/10 p-6 sm:p-8">
          <div className="text-sm font-semibold text-white">
            Non-tech students can shine too
          </div>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-white/70">
            Hackathons need ideation, research, UI design, storytelling, and
            pitching. If you’re curious and willing to learn, you belong here.
          </p>
        </div>
      </Container>
    </Section>
  );
}

