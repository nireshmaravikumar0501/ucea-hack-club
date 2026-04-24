"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const projects = [
  {
    title: "Campus Helper Bot",
    desc: "A chatbot that answers common student questions using curated FAQs.",
    tags: ["AI", "Web"],
  },
  {
    title: "Smart Attendance Tracker",
    desc: "A simple dashboard to track attendance, analytics, and reminders.",
    tags: ["Web", "Data"],
  },
  {
    title: "Women Safety Alert App",
    desc: "Quick SOS alerts with location sharing and trusted contacts.",
    tags: ["App", "IoT"],
  },
  {
    title: "Phishing Detector",
    desc: "A tool that flags suspicious URLs and teaches safe browsing.",
    tags: ["Cybersecurity"],
  },
  {
    title: "Open Source Starter Kit",
    desc: "Beginner-friendly repo with issues to practice PRs and reviews.",
    tags: ["Open Source"],
  },
  {
    title: "Energy Saver IoT Prototype",
    desc: "Sensors + dashboard to monitor energy usage and optimize devices.",
    tags: ["IoT", "Web"],
  },
] as const;

export function ProjectShowcaseSection() {
  return (
    <Section id="projects">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Project Showcase
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
              Examples of what students can build. Yours can be next.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.03 }}
            >
              <Card className="h-full p-6">
                <div className="text-base font-semibold text-white">
                  {p.title}
                </div>
                <div className="mt-2 text-sm leading-6 text-white/70">
                  {p.desc}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

