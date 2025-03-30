'use client'
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Crown from "./Crown"; // Assuming you have a Crown icon component
const SpecialOfferUI = () => {
  return (
    <Card className="max-w-5xl mx-auto bg-[#EABAFF] p-6">
      <CardContent className="p-0 grid md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <div className="flex items-center mb-3">
            <Crown className="h-6 w-6 text-purple-800" />
            <h1 className="text-3xl font-bold text-purple-900 ml-1">Claim Your Offer</h1>
          </div>
          
          <p className="text-sm text-purple-800 mb-6">
            Hello, we have a special ongoing offer for our new 
            customers to avail 30% OFF & 150% Cashback on 
            their first assignment with us. We are committed to 
            delivering the premium service despite an affordable 
            price. Enter your phone number below to get the 
            coupon code. (we do not spam)
          </p>
          
          <div className="mb-6">
            <h2 className="text-lg font-bold text-purple-900">Susan White</h2>
            <p className="text-sm text-purple-800">Head Of sales Departments</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">
            30% OFF & 150% Cashback<br />
            On Your First Order!
          </h2>
          
          <p className="text-sm text-purple-800 mb-4">
            Type your WhatsApp Number to get an exclusive Code.
          </p>
          
          <div className="mb-4">
            <div className="relative w-full">
              <div className="absolute left-4 flex items-center gap-2 h-full">
                <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
                  <div className="w-full h-full relative">
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
              <Input 
                className="pl-24 py-6 h-14 bg-white rounded-full" 
                type="tel" 
                placeholder="Enter your whatsapp number" 
              />
            </div>
          </div>
          
          <Button 
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-max px-6 py-2 h-auto text-sm font-medium"
          >
            Get Offer on WhatsApp
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpecialOfferUI;