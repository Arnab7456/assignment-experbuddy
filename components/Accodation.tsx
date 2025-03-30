'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CrownIcon from "./Crown";

export default function HowItWorksFlow() {
  return (
    <section className="my-10 mx-auto max-w-4xl rounded-sm p-6 relative">
      <div className="mb-10 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-900">
          <span className="relative inline-block top-[-10px] ">
            <CrownIcon className="absolute h-8 w-8 text-purple-600 -top-8 left-1/2 -translate-x-1/2" />
          </span>
          <span>How </span>It Works
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 relative">
        <div className="relative rounded-xl bg-white p-6 shadow-sm">
          <div className="absolute -left-4 -top-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-white bg-purple-100 text-center">
            <div className="text-xs font-medium text-purple-600">Step</div>
            <div className="text-xl font-bold text-purple-600">01</div>
          </div>

          <div className="mb-4 mt-8">
            <h3 className="text-xl font-bold text-gray-900">Fill in a brief</h3>
            <p className="mt-2 text-sm text-gray-600">
              Tell us what you need help with, describe your project
              requirements, and set the deadline.
            </p>
          </div>

          <Button className="bg-gray-900 text-white hover:bg-gray-800">
            Get Started
          </Button>

          <div className="mt-6 ">
            <Image
              src="/product1.png"
              alt="Fill in brief form"
              width={500}
              height={200}
              className="rounded-lg border border-gray-200"
            />
          </div>
        </div>
        <div className="relative rounded-xl bg-white p-6 shadow-sm">
          <div className="absolute -left-4 -top-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-white bg-purple-100 text-center">
            <div className="text-xs font-medium text-purple-600">Step</div>
            <div className="text-xl font-bold text-purple-600">02</div>
          </div>

          <div className="mb-4 mt-8">
            <h3 className="text-xl font-bold text-gray-900">
              Choose an expert
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Browse offers from those who can help with assignments. Compare
              their ratings and pick the best one for your task.
            </p>
          </div>

          <Button className="bg-gray-900 text-white hover:bg-gray-800">
            Get Started
          </Button>

          <div className="mt-6">
            <Image
              src="/product1.png"
              alt="Choose expert interface"
              width={300}
              height={200}
              className="rounded-lg border border-gray-200"
            />
          </div>
        </div>
        <div className="relative rounded-xl bg-white p-6 shadow-sm md:col-span-2 flex">
          <div className="flex-1 pr-6">
            <div className="absolute -left-4 -top-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-white bg-purple-100 text-center">
              <div className="text-xs font-medium text-purple-600">Step</div>
              <div className="text-xl font-bold text-purple-600">03</div>
            </div>

            <div className="mb-4 mt-8">
              <h3 className="text-xl font-bold text-gray-900">
                Get It Done On Time
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Chat with the expert directly, discuss your project in detail,
                and get professional academic assistance by the deadline.
              </p>
            </div>

            <Button className="bg-gray-900 rounded-full px-4 py-2 text-white hover:bg-gray-800">
              Get Started
            </Button>
          </div>

          <div className="flex-1 mt-6 md:mt-0">
            <Image
              src="/product2.png"
              alt="Chat interface"
              width={300}
              height={200}
              className="rounded-lg border border-gray-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
