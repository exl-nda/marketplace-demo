"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MessageCircle, Send } from "lucide-react";

export function ChatBot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {chatOpen ? (
        <Card className="w-80 h-96 shadow-xl">
          <CardHeader className="bg-blue-900 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-blue-900" />
                </div>
                <span className="font-semibold">Chat Bot</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setChatOpen(false)}
                className="text-white hover:bg-white/10"
              >
                ×
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4 h-64 overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                <p className="text-sm">I'm your AI assistant, here to help you explore, compare, and connect with the best AI agents for your needs. Whether you're looking for productivity tools, creative companions, or intelligent solutions.</p>
              </div>
              <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs ml-auto">
                <p className="text-sm">Hi Team, what is the agent for Data bricks</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </CardContent>
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input 
                placeholder="Type your message here..." 
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                className="flex-1"
              />
              <Button size="icon" className="bg-blue-600 hover:bg-blue-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      ) : (
        <Button 
          onClick={() => setChatOpen(true)}
          className="w-12 h-12 rounded-full bg-blue-900 hover:bg-blue-800 shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}