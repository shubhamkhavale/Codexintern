import React from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import codingNinjasLogo from "../assets/hero.png";


const CodingNinjasAdvantage = () => {
  const features = [
    {
      label: "Structured + problem solving based",
      cn: true,
      free: false,
      other: true,
    },
    {
      label: "Fastest 1:1 doubt support",
      cn: true,
      free: false,
      other: false,
    },
    {
      label: "Integrated prep platform",
      cn: true,
      free: false,
      other: false,
    },
    {
      label: "Profiles highlighted on Naukri",
      cn: true,
      free: false,
      other: false,
    },
  ];

  const getIcon = (value) =>
    value ? (
      <FaCheckCircle className="text-[#c2f970] text-lg mx-auto" />
    ) : (
      <FaTimes className="text-[#9ca3af] text-lg mx-auto" />
    );

  return (
    <section className="bg-[#0b0b0b] min-h-screen w-full text-white font-sans pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-center text-xl font-semibold text-[#0081ff] mb-8">
          The Coding Ninjas advantage
        </h2>

        <div className="bg-[#111111] border border-gray-700 rounded-2xl overflow-hidden">
          {/* Top Row: Logos and Headers */}
          <div className="grid grid-cols-5 py-4 px-6 items-center bg-black border-b border-gray-700">
            <div></div>
            <div className="col-span-1 text-center text-sm font-medium text-white">
              <img
            src={codingNinjasLogo} 
                alt="Coding Ninjas"
                className="h-6 w-6 rounded-full"
              />
            </div>
            <div className="text-center text-sm font-medium text-white">
              Free resources
            </div>
            <div className="text-center text-sm font-medium text-white">
              Other courses
            </div>
            <div></div>
          </div>

          {/* Features */}
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-5 py-4 px-6 items-center text-sm ${
                idx % 2 === 0 ? "bg-[#161616]" : "bg-[#1d1d1d]"
              }`}
            >
              <div className="text-left col-span-1">{feature.label}</div>
              <div className="text-center">{getIcon(feature.cn)}</div>
              <div className="text-center">{getIcon(feature.free)}</div>
              <div className="text-center">{getIcon(feature.other)}</div>
              <div></div>
            </div>
          ))}

          {/* Gradient Comparison Progress */}
          <div className="px-6 pt-6 pb-4">
            <div className="flex items-center gap-2 mb-1">
              <img
            src={codingNinjasLogo} 
                alt="Coding Ninjas"
                className="h-6 w-6 rounded-full"
              />
              <span className="font-semibold text-white">coding<span className="text-gray-400">ninjas</span></span>
            </div>

            <div className="w-full h-1.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 mb-2" />
            <p className="text-right text-xs text-pink-400 font-medium">
              Your dream role, faster and with confidence! ⚡
            </p>
          </div>

          {/* Others Progress */}
          <div className="px-6 pt-4 pb-6">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Others</span>
              <span>Average role, under-confident</span>
            </div>
            <div className="w-full h-1 rounded-full bg-gray-600" />
          </div>

          {/* CTA Button */}
          <div className="text-center pb-6">
            {/* <button className="bg-[#ff6324] hover:bg-[#e75a1f] transition px-8 py-3 rounded-md text-white font-semibold text-sm shadow-md">
              Explore offerings &uarr;
            </button> */}
            <a href="#offerings">
  <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
    Explore offerings &uarr;
  </button>
</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingNinjasAdvantage;
