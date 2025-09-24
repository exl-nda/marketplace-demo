import { Card, CardContent } from "@/components/ui/card";

interface AgentCardProps {
  name: string;
  count: string;
  color: string;
  logo: string;
}

export function AgentCard({ name, count, color, logo }: AgentCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardContent className="p-6 text-center">
        <div className={`w-16 h-16 ${color} rounded-lg mx-auto mb-4 flex items-center justify-center`}>
          <span className="text-white font-bold text-lg">{logo}</span>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-500">{count}</p>
      </CardContent>
    </Card>
  );
}