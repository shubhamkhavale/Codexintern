import React from 'react';

const EventsAndFacultySection = () => {
  return (
    <div className="w-full bg-white py-12 px-4 space-y-16">

      {/* Workshops + Events Section */}
      <div className="flex flex-col items-center space-y-6">
        <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
          <div className="bg-white rounded-xl shadow-md border p-6 w-[280px]">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Hands on workshops</h3>
            <p className="text-sm text-gray-600">
              Learn latest tools, make open source contributions and more!
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md border p-6 w-[280px]">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Partner events with clubs from IITs, IIMs</h3>
          </div>
        </div>
      </div>

      {/* Faculty Section */}
      <div>
        <h2 className="text-2xl font-semibold text-center mb-10">Faculty that brings out the best in you</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {/* Faculty Card */}
          {[
            {
              name: "Ankush Singla",
              role: "Co-Founder & Instructor",
              img: "data:image/jpeg;base64,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", // Replace with correct img URL if needed
              teaches: [
                "Basics of C++ with DSA",
                "Data Science & Machine Learning",
                "Competitive Programming"
              ],
              linkedin: "https://in.linkedin.com/in/ankushsingla"
            },
            {
              name: "Parikh Jain",
              role: "Instructor & Founding Member at Coding Ninjas",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfK6K95LUC-acbEoOcKg69SHJf4VyLDyt22w&s",
              teaches: [
                "Basics of Python with DSA",
                "Competitive Programming",
                "Product Companies Interview Prep"
              ],
              linkedin: "https://in.linkedin.com/in/parikh-jain-79568798"
            },
            {
              name: "Nidhi Agarwal",
              role: "Founding member & Product Manager at Coding Ninjas",
              img: "data:image/jpeg;base64,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",
              teaches: [
                "Basics of C++ with DSA",
                "Data Science & Machine Learning",
                "Data Analytics Course"
              ],
              linkedin: "https://in.linkedin.com/in/nidhiagarwal03"
            }
          ].map((faculty, index) => (
            <div key={index} className="bg-white rounded-2xl border shadow-md p-6 text-center space-y-4">
              <img
                src={faculty.img}
                alt={faculty.name}
                className="w-24 h-24 object-cover rounded-full mx-auto"
              />
              <div>
                <h4 className="text-xl font-semibold">{faculty.name}</h4>
                <p className="text-sm text-gray-600">{faculty.role}</p>
              </div>
              <div>
                <p className="text-sm text-gray-700 font-semibold">Teaches</p>
                <ul className="text-xs text-gray-600 mt-1 space-y-1">
                  {faculty.teaches.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <a href={faculty.linkedin} className="text-blue-600 text-sm underline">LinkedIn profile</a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default EventsAndFacultySection;
