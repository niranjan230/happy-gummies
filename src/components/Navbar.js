import React from "react";
import { Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full h-20 flex items-center justify-between px-8 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <div className="flex flex-col leading-none">
          <span className="text-4xl font-bold tracking-tight">
            <span className="text-red-500">H</span>
            <span className="text-orange-500">a</span>
            <span className="text-yellow-500">p</span>
            <span className="text-green-500">p</span>
            <span className="text-blue-500">y</span>
          </span>
          <span className="text-4xl font-bold tracking-tight">
            <span className="text-pink-500">G</span>
            <span className="text-purple-500">u</span>
            <span className="text-indigo-500">m</span>
            <span className="text-green-700">m</span>
            <span className="text-yellow-700">i</span>
            <span className="text-orange-700">e</span>
            <span className="text-red-700">s</span>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell size={22} className="text-gray-500" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button>
          <User size={24} className="text-gray-500" />
        </button>
      </div>
    </nav>
  );
} 