import React from "react";
import { FaRocket } from "react-icons/fa";

const LearningModel = () => {
  return (
    <section className="bg-[#f1fafa] py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FaRocket className="text-white bg-black p-2 rounded-full text-4xl" />
            <h2 className="text-2xl font-semibold">
              A 3-stage learning model to turn you into a Coding Ninja
            </h2>
          </div>

          <div className="space-y-8 mt-8 border-l-2 border-[#d1f0f2] pl-6">
            <div>
              <h3 className="text-lg font-medium text-black">Learn</h3>
              <p className="text-gray-600">
                Experience seamless learning with problem solving modules, leaderboard and awards.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-black">Excel</h3>
              <p className="text-gray-600">
                Track your skill level and make meaningful progress for you to grow
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-black">Standout</h3>
              <p className="text-gray-600">
                Standout to recruiters, showcase ratings, get feedback and interview insights.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Mockup Image Substitute */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="text-center text-gray-400 text-sm italic">
            
            <img src="/assets/dashboard.jpg" alt="Mockup" className="mx-auto w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="bg-[#fef4f0] p-4 rounded-md shadow">
              Rated contest (Weekend)
              <div className="text-orange-500 font-semibold text-xs mt-2">Starts in 5 days</div>
            </div>
            <div className="bg-[#ecf8f1] p-4 rounded-md shadow">
              Better than
              <div className="text-green-600 font-semibold text-xl mt-1">95.05%</div>
            </div>
            <div className="bg-[#e5f1ff] p-4 rounded-md shadow col-span-2 text-center">
              📊 Personalized company preparation mockup
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningModel;
