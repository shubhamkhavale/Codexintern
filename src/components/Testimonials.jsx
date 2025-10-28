import React from "react";
import codingNinjasLogo from "../assets/hero.png";

const testimonials = [
  {
    name: "Twisam",
    title: "Full Stack Developer",
    message:
      "From optometrist to IT pro, thanks to Coding Ninjas. Their lessons help me excel in projects. CN transformed my journey, giving me clarity and optimization skills! hello world",
    company: "Cogent e Private ltd",
    image: "/assets/ntwisampat.png",
    logo: "/assets/smile.webp",
  },
  {
    name: "Onkar Lapate",
    title: "SDE-1",
    message:
      "Chose Coding Ninjas for structured, high-quality learning due to lack of support & structure. Top-notch mentors, quick TAs, and a supportive community. Best decision ever.",
    company: "Bombay Softwares",
    image: "/assets/omkar.png",
    logo: "/assets/post.webp",
  },
  {
    name: "Anu",
    title: "SDE - 1",
    message:
      "Coding Ninjas exceeded my college experience. After the course, I transitioned from a consultant to an SDE-1. Exceptional faculty, including alumni from top institutions like Stanford and IIT.",
    company: "Mastercard",
    image: "/assets/anu.png",
    logo: "/assets/app-apple.webp",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#121212] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Tags above cards */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["Non tech to tech", "Service to product", "Tier 2/3 colleges", "Job Bootcamp", "Upskilling Courses"].map((tag, index) => (
            <span
              key={index}
              className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#1d1d1d] rounded-2xl p-6 relative shadow-lg"
            >
              {/* Background corner design */}
              <div className="absolute top-4 left-4 opacity-10 text-white">
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 14L21 3M21 3h-6.4M21 3v6.4" />
                </svg>
              </div>

              {/* Avatar */}
              <div className="flex justify-center -mt-12 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full border-4 border-[#121212] object-cover"
                />
                   
              </div>

              {/* Name + title */}
              <div className="text-center mb-3">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-gray-400 text-sm">{item.title}</p>
              </div>

              {/* Message */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {item.message}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between text-sm text-gray-400 mt-auto pt-2 border-t border-gray-700">
                <div>
                  <p className="text-xs">Post</p>
                  <p className="font-medium text-white">Coding Ninjas</p>
                </div>
                <span className="text-white">&raquo;</span>
                <img
                  src={item.logo}
                  alt={item.company}
                  className="h-6 w-auto object-contain"
                />
                 
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          {/* <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
            Explore offerings &uarr;
          </button> */}
          <a href="#offerings">
  <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
    Explore offerings &uarr;
  </button>
</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
