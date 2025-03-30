import React from "react";

const TimelineConnector = () => {
  return (
    <>
      {/* Horizontal connector between steps 1 and 2 */}
      <div className="hidden md:block absolute left-1/2 top-[20%] w-[10%] h-0.5 bg-purple-600 transform -translate-x-1/2 z-10"></div>
      <div className="hidden md:block absolute left-[45%] top-[20%] h-4 w-4 rounded-full bg-purple-600 z-20"></div>
      <div className="hidden md:block absolute left-[55%] top-[20%] h-4 w-4 rounded-full bg-purple-600 z-20"></div>
      
      {/* Left vertical connector */}
      <div className="hidden md:block absolute left-[10%] top-[20%] bottom-[50%] w-0.5 bg-purple-600 z-10"></div>
      <div className="hidden md:block absolute left-[10%] top-[20%] h-4 w-4 rounded-full bg-purple-600 z-20"></div>
      <div className="hidden md:block absolute left-[10%] bottom-[50%] h-4 w-4 rounded-full bg-purple-600 z-20"></div>
      
      {/* Right vertical connector */}
      <div className="hidden md:block absolute right-[10%] top-[20%] bottom-[50%] w-0.5 bg-purple-600 z-10"></div>
      <div className="hidden md:block absolute right-[10%] top-[20%] h-4 w-4 rounded-full bg-purple-600 z-20"></div>
      <div className="hidden md:block absolute right-[10%] bottom-[50%] h-4 w-4 rounded-full bg-purple-600 z-20"></div>
    </>
  );
};

export default TimelineConnector;