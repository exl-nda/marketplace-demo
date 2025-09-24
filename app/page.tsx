"use client";

import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero-section";
import { AIAgentsSection } from "@/components/sections/ai-agents-section";
import { AutomationsSection } from "@/components/sections/automations-section";
import { Footer } from "@/components/layout/footer";
import { ChatBot } from "@/components/chat/chat-bot";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <AIAgentsSection />
      <AutomationsSection />
      <Footer />
      <ChatBot />
    </div>
  );
}