import React from "react";
import { FaCommentDots, FaUserGraduate, FaBriefcase } from "react-icons/fa";
import ankushvideo from "../assets/ankushvideo.mp4";

const WhyUs = () => {
  return (
    <section className="bg-[#0b0b0b] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-[80px] md:text-[120px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-600 to-gray-800 leading-none tracking-tight outline-text">
          WHY US
        </h2>

        {/* Main content */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Video Card */}
          <div className="rounded-2xl border border-gray-600 p-1 max-w-md mx-auto bg-[#1a1a1a]">
            <div className="rounded-lg overflow-hidden relative">
             <video
  src={ankushvideo}
 controls
  
  className="w-full object-cover rounded-lg"
>
  
</video>
              {/* Mute icon placeholder */}
              <div className="absolute top-2 right-2 bg-black bg-opacity-60 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.707 3.293a1 1 0 00-1.414 0L5 6.586H2a1 1 0 000 2h3l3.293 3.293a1 1 0 001.414-1.414L7.414 8l2.293-2.293a1 1 0 000-1.414z" />
                </svg>
              </div>
            </div>
            {/* Caption */}
            <div className="px-3 py-2">
              <h3 className="text-orange-400 font-semibold text-sm">
                Ankush Singla
              </h3>
              <p className="text-gray-400 text-xs">
                Co-Founder of Coding Ninjas | Mentor
              </p>
            </div>
          </div>

          {/* Right: Features */}
          <div className="space-y-6">
            {/* 1 */}
            <div className="flex items-center gap-4 bg-[#1d1d1d] rounded-xl p-4">
              <div className="bg-green-600 p-2 rounded-full">
                <FaCommentDots className="text-white text-xl" />
              </div>
              <span className="font-medium text-white">
                Fastest 1:1 doubt support
              </span>
            </div>
            {/* 2 */}
            <div className="flex items-center gap-4 bg-[#1d1d1d] rounded-xl p-4">
              <div className="bg-purple-600 p-2 rounded-full">
                <FaUserGraduate className="text-white text-xl" />
              </div>
              <span className="font-medium text-white">
                Stanford/IIT/MAANG faculty
              </span>
            </div>
            {/* 3 */}
            <div className="flex items-center gap-4 bg-[#1d1d1d] rounded-xl p-4">
              <div className="bg-orange-400 p-2 rounded-full">
                <FaBriefcase className="text-white text-xl" />
              </div>
              <span className="font-medium text-white">
                Placement assistance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

