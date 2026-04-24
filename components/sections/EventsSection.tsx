"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const events = [
  {
    title: "Upcoming Workshops",
    desc: "Hands-on sessions on Git, web dev, AI tools, and hackathon prep.",
    meta: "Weekly / Bi-weekly",
  },
  {
    title: "Internal Hackathons",
    desc: "Friendly themed build days to practice teamwork and presenting.",
    meta: "Monthly",
  },
  {
    title: "Community Meetups",
    desc: "Talks, demos, alumni sessions, and faculty-led innovation chats.",
    meta: "Ongoing",
  },
] as const;

export function EventsSection() {
  return (
    <Section id="events">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Events
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
          Learn together, build together, and showcase your work.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
            >
              <Card className="h-full p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-base font-semibold text-white">
                      {e.title}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-white/70">
                      {e.desc}
                    </div>
                  </div>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
                    {e.meta}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

