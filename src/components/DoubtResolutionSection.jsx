import React from "react";

const DoubtResolutionSection = () => {
  return (
    <section className="bg-[#121212] text-white py-8 px-6">
      <div className="max-w-6xl mx-auto relative border-l-4 border-yellow-400 pl-6 space-y-20">

        {/* Marker icons */}
        <div className="absolute left-[-14px] top-0">
          <div className="bg-white rounded-full p-2 shadow-md">
            <span role="img" aria-label="heart">❤️</span>
          </div>
        </div>

        <div>
          <p className="text-m text-white mb-4 font-semibold">
            Always available when you get stuck
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
            Resolve doubts any time through chat, <br />
            voice notes or calling.
          </h2>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
            500+ dedicated Teaching Assistants to <br />
            resolve your doubts quickly
          </h2>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
            5/5 rating for 90% doubt resolutions
          </h2>
        </div>

        {/* 2nd marker icon */}
        <div className="absolute left-[-14px] top-[40%]">
          <div className="bg-white rounded-full p-2 shadow-md">
            <span role="img" aria-label="person">👤</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoubtResolutionSection;
