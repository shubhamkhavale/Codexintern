import React from "react";

const DestinationSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto relative flex flex-col md:flex-row items-start">
        {/* Timeline & text */}
        <div className="md:w-1/2 relative pr-6">
          {/* Vertical line */}
          <div className="aabsolute left-[-2px] top-0 bottom-0 w-1 border-l-4 border-orange-400 z-0" />

          {/* Timeline marker icon */}
          <div className="absolute left-[-22px] top-2">
            <div className="bg-orange-100 p-2 rounded-full shadow-md">
              <span role="img" aria-label="block">🟥</span>
            </div>
          </div>

          {/* Text content */}
          <div className="pl-8 mt-2">
            <h2 className="text-lg font-bold text-gray-900">
              Your one stop destination to code, create & connect
            </h2>
          </div>
        </div>

        {/* Right content box */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-start">
          <div className="bg-[#FDF9F7] border border-[#F3EDEB] shadow-md rounded-2xl p-6 max-w-md w-full">
            {/* Logo or badge */}
            <div className="mb-2">
              <img src="https://ninjasfilestest.s3.amazonaws.com/frame-1437253615-1746447579.svg" alt="10X Club" className="h-6" />
            </div>

            {/* Main Text */}
            <p className="text-gray-800 font-semibold text-base mb-4">
              Unlock learning, career opportunities & success from X to 10X
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#F2EFED] text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                Industry Expert Session
              </span>
              <span className="bg-[#F2EFED] text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                Fireside Chat
              </span>
              <span className="bg-[#F2EFED] text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                Tech Talk
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
