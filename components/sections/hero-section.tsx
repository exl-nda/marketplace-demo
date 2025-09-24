import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Discover Your Workflow with Enterprise Agentic Automation
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Explore a dynamic marketplace where cutting-edge AI agents meet real-world needs. From automation to 
              personalization, find, customize, and integrate AI solutions that elevate your business and simplify your life 
              — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" className="text-blue-900 border-white bg-white hover:bg-gray-100">
                Register Agent
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Submit Your Idea
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white font-bold">C</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}