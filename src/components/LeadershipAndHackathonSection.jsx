import React from "react";
import logo from "../assets/pg.webp";

const LeadershipAndHackathonSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-[-2px] top-0 bottom-0 w-1 border-l-4 border-orange-400 z-0" />

        {/* Timeline Marker */}
        <div className="absolute left-[-22px] top-2">
          <div className="bg-orange-100 p-2 rounded-full shadow-md">
            <span role="img" aria-label="star">💡</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="pl-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CXOs Card */}
          <div className="bg-[#F7F9FC] border border-gray-100 rounded-2xl p-5 shadow-md">
            <h3 className="font-bold text-gray-900 text-lg mb-1">
              Learn from CXOs, founders & more
            </h3>
            <p className="text-gray-500 text-sm mb-3">
              Exclusive insights from industry leaders
            </p>

            {/* Mock people cards */}
            <div className="flex gap-3 mt-4">
              <div className="h-14 w-16 bg-white border rounded-lg shadow-sm flex items-center justify-center text-xs font-semibold">
                PhonePe
              </div>
              <div className="h-14 w-20  bg-white border rounded-lg shadow-sm flex items-center justify-center text-xs font-semibold">
                Warwickshire
              </div>
            </div>
          </div>

          {/* Hackathons Image Card */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
              {/* <img
                src="/hackathon.jpg" // Replace with actual image path
                alt="Hackathon"
                className="w-full h-56 object-cover"
              /> */}
              <img src={logo} alt="logo" className=" w-full h-56 object-cover" />
            </div>
            <div className="absolute top-3 left-3 bg-white text-orange-500 text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-orange-200">
              🔥 Hackathons
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipAndHackathonSection;
