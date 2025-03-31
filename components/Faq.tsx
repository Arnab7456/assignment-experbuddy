'use client";'
import { faqs } from "@/lib/constant/faq.constant";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import CrownIcon from "./Crown";
export default function FAQPage() {
  return (
    <div className="text-center pb-10 bg-inherit mt-4 md:mt-10">
      
      <h2 className="text-3xl font-bold text-gray-900 p-6">
          <span className="relative inline-block top-[-10px] ">
            <CrownIcon className="absolute h-8 w-8 text-purple-600 -top-8 left-1/2 -translate-x-1/2" />
          </span>
          <span> Frequently </span> asked Question’s
        </h2>
      <div className="w-full h-fit py-10 pb-11 flex justify-center items-center">
        <div className="md:w-3/6 w-full flex flex-col items-center rounded-lg">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="flex w-full justify-between items-center cursor-pointer focus:outline-none p-4 text-left font-medium text-gray-900 dark:text-white  dark:hover:bg-gray-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="flex w-full justify-center items-center cursor-pointer focus:outline-none p-4 text-left">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}