import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users } from "lucide-react";

interface AutomationCardProps {
  title: string;
  publisher: string;
  description: string;
  platform: string;
  platformColor: string;
  type: string;
  users?: string;
  rating: number;
  badge: string;
}

export function AutomationCard({
  title,
  publisher,
  description,
  platform,
  platformColor,
  type,
  users,
  rating,
  badge
}: AutomationCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
            {badge}
          </Badge>
        </div>
        <h3 className="font-semibold text-lg text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">Published By - {publisher}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Platform -</span>
            <div className={`px-2 py-1 ${platformColor} rounded text-white text-xs`}>
              {platform}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Badge variant={type === "Free" ? "secondary" : "default"} 
                   className={type === "Free" ? "bg-gray-100 text-gray-700" : "bg-orange-100 text-orange-800"}>
              {type}
            </Badge>
            {users && (
              <div className="flex items-center space-x-1 text-sm text-gray-500">
                <Users className="h-4 w-4" />
                <span>{users}</span>
              </div>
            )}
          </div>
          {rating > 0 && (
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">{rating}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}