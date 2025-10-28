import React from "react";
import { FaFacebookF, FaGoogle, FaStar } from "react-icons/fa";
import { SiCodingninjas } from "react-icons/si";

const ratings = [
  {
    platform: "Facebook",
    icon: <FaFacebookF className="text-blue-500 text-xl" />,
    rating: "4.9",
    reviews: "700+ reviews",
  },
  {
    platform: "Google",
    icon: <FaGoogle className="text-red-500 text-xl" />,
    rating: "4.7",
    reviews: "2300+ reviews",
  },
  {
    platform: "Course",
    icon: <SiCodingninjas className="text-orange-500 text-xl" />,
    rating: "4.8",
    reviews: "Course rating",
  },
];

const TrustedByLearners = () => {
  return (
    <section className="bg-[#121212] text-white py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-2">Trusted by learners</h2>
        <p className="text-gray-300 mb-10">
          1,00,000+ Coding Ninjas alumni from 1,100+ companies & 4,400+ colleges
          working in top product companies
        </p>

        {/* Ratings */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {ratings.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div>{item.icon}</div>
              <div className="text-left">
                <p className="font-bold flex items-center gap-1">
                  {item.rating} <FaStar className="text-yellow-400" />
                </p>
                <p className="text-sm text-gray-400">{item.reviews}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedByLearners;
