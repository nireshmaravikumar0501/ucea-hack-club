"use client";

import { Navbar } from "@/components/Navbar";
import { FloatingJoinCTA } from "@/components/FloatingJoinCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatIsHackathonSection } from "@/components/sections/WhatIsHackathonSection";
import { ExploreDomainsSection } from "@/components/sections/ExploreDomainsSection";
import { BeginnerRoadmapSection } from "@/components/sections/BeginnerRoadmapSection";
import { JoinCommunitySection } from "@/components/sections/JoinCommunitySection";
import { EventsSection } from "@/components/sections/EventsSection";
import { ProjectShowcaseSection } from "@/components/sections/ProjectShowcaseSection";
import { Footer } from "@/components/Footer";

export function LandingPage() {
  return (
    <div className="min-h-dvh bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsHackathonSection />
        <ExploreDomainsSection />
        <BeginnerRoadmapSection />
        <JoinCommunitySection />
        <EventsSection />
        <ProjectShowcaseSection />
      </main>
      <Footer />
      <FloatingJoinCTA />
    </div>
  );
}

