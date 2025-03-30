'use client';
import React from "react";
import { Input } from "@/components/ui/input";

const WhatsAppInput = () => {
  return (
    <div className="w-full max-w-md">
      <div className="relative flex items-center w-full">
        <div className="absolute left-4 flex items-center gap-2">
          <div className="flex items-center">
            {/* US Flag Circle */}
            <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
              <div className="w-full h-full relative">
                {/* US flag - simplified version */}
                <div className="absolute inset-0 bg-white">
                  <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-800"></div>
                  <div className="absolute top-0 h-1/6 w-full bg-red-600"></div>
                  <div className="absolute top-2/6 h-1/6 w-full bg-red-600"></div>
                  <div className="absolute top-4/6 h-1/6 w-full bg-red-600"></div>
                </div>
              </div>
            </div>
            <span className="ml-1 text-gray-700 font-medium">+1</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <Input 
          className="pl-24 h-14 bg-white rounded-full shadow-sm"
          type="tel" 
          placeholder="Enter your whatsapp number" 
        />
      </div>
    </div>
  );
};

export default WhatsAppInput;