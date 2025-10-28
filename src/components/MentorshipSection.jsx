import React from "react";

const mentorshipData = [
  {
    title: "Mock interview",
    description: [
      "Nail coding assessments and technical challenges",
      "Gain insights into problem-solving and algorithmic thinking",
    ],
    image: "/assets/mock-interview.webp",
    bgColor: "bg-[#FFF7E5]",
  },
  {
    title: "Profile review",
    description: [
      "Get your profile & resume reviewed by industry leaders",
      "Focus on different aspects of your job search",
    ],
    image: "/public/assets/profile-review.webp", 
    bgColor: "bg-[#E9F7F9]",
  },
  {
    title: "Project guidance",
    description: [
      "Career counselling with industry experts",
      "Get assistance on how to build real time projects",
    ],
    image: "/assets/project-guidance.webp", 
    bgColor: "bg-[#FFE9F1]",
  },
];

const MentorshipSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto relative border-l-4 border-orange-400 pl-8">
        {/* Marker */}
        <div className="absolute left-[-18px] top-[-5px]">
          <div className="bg-orange-100 p-2 rounded-full shadow">
            <span role="img" aria-label="person">👤</span>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">1:1 Mentorship sessions</h2>
          <p className="text-gray-500 mt-1">Personalised guidance to prepare you for your interview needs</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mentorshipData.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden">
              <div className={`h-36 flex items-center justify-center ${item.bgColor}`}>
                <img src={item.image} alt={item.title} className="h-24 object-contain" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;
