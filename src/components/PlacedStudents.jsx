const students = [
  {
    name: "Microsoft",
    domain: "CS/IT",
    image: "/assets/shourya.png",
    logo: "/assets/microsoft1.png",
    bg: "bg-pink-100",
  },
  {
    name: "Persistent",
    domain: "Tier 2/3 college",
    image: "/assets/pradeep.png",
    logo: "/assets/persistent.png",
    bg: "bg-purple-100",
  },
  {
    name: "media.net",
    domain: "Tier 2/3 college",
    image: "/assets/tanmay.png",
    logo: "/assets/media.jpg",
    bg: "bg-green-100",
  },
  {
    name: "calsoft",
    domain: "Service to product",
    image: "/assets/amitesh.png",
    logo: "/assets/calsoft.png",
    bg: "bg-red-100",
  },
  {
    name: "PayPal",
    domain: "CS/IT",
    image: "/assets/aikansh.png",
    logo: "/assets/paypal.png",
    bg: "bg-blue-100",
  },
  {
    name: "Google",
    domain: "CS/IT",
    image: "/assets/kashish.png",
    logo: "/assets/google.png",
    bg: "bg-yellow-100",
  },
];

const PlacedStudents = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading and download */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-2">
          <h2 className="text-xl md:text-2xl font-semibold text-center md:text-left">
            Our Ninjas at top tech companies
          </h2>
          <button className="text-orange-500 text-sm font-medium flex items-center gap-1 hover:underline transition">
            <svg
              className="h-4 w-4 text-orange-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M13 7H7v6h6V7z" />
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v10H4V5z"
                clipRule="evenodd"
              />
            </svg>
            Download placement report
          </button>
        </div>

        {/* Students grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {students.map((student, index) => (
            <div
              key={index}
              className="group rounded-2xl shadow-lg bg-white hover:shadow-xl transition duration-300"
            >
              <div
                className={`p-4 rounded-t-2xl ${student.bg} transition-transform duration-300 group-hover:scale-105`}
              >
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-16 h-16 rounded-full mx-auto object-cover border border-white transform transition-transform duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-orange-400"
                />
              </div>
              <div className="text-center py-2 px-3">
                <img
                  src={student.logo}
                  alt={`${student.name} logo`}
                  className="mx-auto h-6 my-1"
                />
                <p className="text-xs text-gray-500">{student.domain}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacedStudents;
