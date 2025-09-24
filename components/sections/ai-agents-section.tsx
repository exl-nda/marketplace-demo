import { Button } from "@/components/ui/button";
import { AgentCard } from "@/components/cards/agent-card";
import { ArrowRight } from "lucide-react";

const agents = [
  { name: "SAP SuccessFactors", count: "7 Agents", color: "bg-blue-600", logo: "SAP" },
  { name: "Salesforce", count: "14 Agents", color: "bg-blue-500", logo: "SF" },
  { name: "Coupa", count: "3 Agents", color: "bg-blue-400", logo: "C" },
  { name: "ServiceNow", count: "3 Agents", color: "bg-green-500", logo: "SN" },
  { name: "DataBricks", count: "6 Agents", color: "bg-orange-500", logo: "DB" },
];

export function AIAgentsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">AI agents for your systems</h2>
          <Button variant="ghost" className="text-blue-600 hover:text-blue-800">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {agents.map((agent, index) => (
            <AgentCard key={index} {...agent} />
          ))}
        </div>
      </div>
    </section>
  );
}