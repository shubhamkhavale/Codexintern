function IITCertifications() {
  return (
    <section id ="IITCertifications" className="py-16 px-4 md:px-20 bg-[#fff9f3] relative">
      {/* Vertical line */}
      <div className="absolute top-0 left-2 md:left-10 h-full w-[2px] bg-black z-0"></div>

      {/* Icon */}
      <div className="absolute top-6 left-[2px] md:left-[2px] z-10">
        <div className="bg-white p-2 rounded-full border border-gray-300 shadow w-12 h-12 flex items-center justify-center">
          <img
            src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
            alt="iit-icon"
            className="w-6 h-6"
          />
        </div>
      </div>

      {/* Section Heading */}
      <div className="pl-12 md:pl-20 mb-8 relative z-10">
        <h3 className="text-2xl font-bold">IIT Certifications</h3>
        <span className="inline-block bg-[#f2e6cb] text-[#5c4420] text-sm font-semibold px-4 py-1 rounded-full mt-2">
          For graduates
        </span>
      </div>

      {/* Cards */}
      <div className="pl-12 md:pl-20 flex overflow-x-auto gap-8 pb-6 relative z-10">
        {/* Card 1 */}
        <div className="min-w-[340px] bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <img
            src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
            alt="IIT Guwahati"
            className="rounded-xl mb-4 w-full h-40 object-cover"
          />
          <h4 className="font-bold text-lg mb-2 leading-snug">
            PG Certification in Data Analytics with GenAI
          </h4>
          <p className="text-sm text-gray-500 mb-3">
            E&ICT Academy, IIT Guwahati
          </p>
          <div className="text-sm text-gray-600 flex justify-between">
            <span>🧠 🕸 📊</span>
            <span>6 months</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="min-w-[340px] bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <img
            src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
            alt="IIT Guwahati"
            className="rounded-xl mb-4 w-full h-40 object-cover"
          />
          <h4 className="font-bold text-lg mb-2 leading-snug">
            PG Certification in Data Science with GenAI
          </h4>
          <p className="text-sm text-gray-500 mb-3">
            E&ICT Academy, IIT Guwahati
          </p>
          <div className="text-sm text-gray-600 flex justify-between">
            <span>🐍 ❄️ ☁️</span>
            <span>9 months</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="min-w-[340px] bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <img
            src="https://files.codingninjas.com/output-onlinepngtools-1-1742818734.webp"
            alt="IIT Madras"
            className="rounded-xl mb-4 w-full h-40 object-cover"
          />
          <h4 className="font-bold text-lg mb-2 leading-snug">
            Advanced Certification in GenAI for Non-Tech Professionals
          </h4>
          <p className="text-sm text-gray-500 mb-3">
            IITM Pravartak, TIH IIT Madras
          </p>
          <div className="text-sm text-gray-600 flex justify-between">
            <span>🧠 ☀️ ✨</span>
            <span>6 months</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IITCertifications;
