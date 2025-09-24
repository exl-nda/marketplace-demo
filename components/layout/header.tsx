"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Bell, Moon, ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">DEMO</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-blue-600 border-b-2 border-blue-600 px-1 pb-4 text-sm font-medium">
              Agent Catalog
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 px-1 pb-4 text-sm font-medium">
              Experience Center
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 px-1 pb-4 text-sm font-medium">
              Contact Center
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 px-1 pb-4 text-sm font-medium">
              Citizen Development Program
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 px-1 pb-4 text-sm font-medium inline-flex items-center">
              Report & Analysis
              <ChevronDown className="ml-1 h-4 w-4" />
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search" 
                className="pl-10 w-64" 
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Moon className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarFallback className="bg-blue-600 text-white">JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}