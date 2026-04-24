"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

type Domain = {
  title: string;
  tagline: string;
  points: string[];
};

const DOMAINS: Domain[] = [
  {
    title: "Web Development",
    tagline: "Build beautiful websites & dashboards.",
    points: ["HTML/CSS/JS", "React + Next.js", "APIs & deployment"],
  },
  {
    title: "AI/ML",
    tagline: "Teach machines to see, learn, and predict.",
    points: ["Python basics", "Model training", "AI apps & tools"],
  },
  {
    title: "Cybersecurity",
    tagline: "Learn how systems break—and how to protect them.",
    points: ["Security basics", "CTFs & labs", "Safe hacking mindset"],
  },
  {
    title: "App Development",
    tagline: "Create mobile apps people can use daily.",
    points: ["UI/UX for apps", "Android / cross-platform", "Publish & iterate"],
  },
  {
    title: "IoT",
    tagline: "Connect hardware to the internet.",
    points: ["Sensors & boards", "Data + cloud", "Smart prototypes"],
  },
  {
    title: "Open Source",
    tagline: "Contribute to real projects with real users.",
    points: ["Git workflows", "Issues & PRs", "Community collaboration"],
  },
];

export function ExploreDomainsSection() {
  const domains = useMemo(() => DOMAINS, []);
  const [active, setActive] = useState(domains[0]?.title ?? "");

  return (
    <Section id="domains">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Explore Tech Domains
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
              Pick what excites you. We’ll help you start from zero and build up
              with mini challenges, workshops, and team projects.
            </p>
          </div>
          <div className="text-xs text-white/55">
            Tip: click a card to highlight it.
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d, i) => {
            const isActive = d.title === active;
            return (
              <motion.button
                key={d.title}
                type="button"
                onClick={() => setActive(d.title)}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="text-left"
              >
                <Card
                  className={`h-full p-6 transition ${
                    isActive
                      ? "ring-cyan-400/35 bg-white/[0.05]"
                      : "hover:bg-white/[0.045]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-base font-semibold text-white">
                        {d.title}
                      </div>
                      <div className="mt-2 text-sm text-white/70">
                        {d.tagline}
                      </div>
                    </div>
                    <span
                      className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                        isActive
                          ? "bg-cyan-300"
                          : "bg-white/25 group-hover:bg-white/40"
                      }`}
                    />
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {d.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 rounded-full bg-white/35" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.button>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

