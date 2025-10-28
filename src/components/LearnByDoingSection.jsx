import React from "react";

const LearnByDoingSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start relative">
        {/* Timeline and content */}
        <div className="relative md:w-1/2 pr-6">
          {/* Vertical line */}
          {/* <div className="absolute left-[-2px] top-0 bottom-0 w-1 border-l-4 border-orange-400 z-0" /> */}

          {/* Curved line indicator (mimicked using border and spacing) */}
          {/* <div className="absolute left-[-2px] top-[50px] w-8 h-24 border-l-4 border-orange-200 border-t-4 rounded-tl-3xl"></div> */}

          {/* Icon marker */}
          <div className=" pl-10 absolute left-[-22px] top-4">
            <div className="bg-orange-100 p-2 rounded-full shadow-md">
              <span role="img" aria-label="blocks">🧱</span>
            </div>
          </div>

          {/* Text content */}
          <div className="pl-20 mt-4">
            <h2 className="text-2xl font-bold text-gray-800 ">Learn by doing</h2>
            <p className="text-gray-500 mt-4">
              Interesting projects to help you standout to recruiters
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end pr-40">
          <img
            src="https://files.codingninjas.in/frame-1000004139-32125.webp" 
            alt="Project Examples"
            className="rounded-2xl w-[300px] md:w-[360px] shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default LearnByDoingSection;
