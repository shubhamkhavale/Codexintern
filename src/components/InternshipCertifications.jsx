function InternshipCertifications() {
  return (
    <section className="py-16 px-4 md:px-20 bg-[#fff9f3] relative">
      {/* Vertical Line */}
      <div className="absolute top-0 left-2 md:left-10 h-full w-[2px] bg-black z-0"></div>

      {/* Section Heading */}
      <div className="pl-12 md:pl-20 mb-8 relative z-10">
        <span className="inline-block bg-[#f2e6cb] text-[#5c4420] text-sm font-semibold px-4 py-1 rounded-full mb-2">
          For college students
        </span>
        <h3 className="text-2xl font-bold mt-2">
          Training and Internship Certifications
        </h3>
      </div>

      {/* Cards */}
      <div className="pl-12 md:pl-20 flex overflow-x-auto gap-8 pb-6 relative z-10">
        {/* Card 1 */}
        <div className="min-w-[340px] bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <img
            src="https://files.codingninjas.com/output-onlinepngtools-1-1742818734.webp"
            alt="Advanced DSA"
            className="rounded-xl mb-4 w-full h-40 object-cover"
          />
          <h4 className="font-bold text-lg mb-2 leading-snug">
            Training and Internship Certification in Advanced DSA
          </h4>
          <p className="text-sm text-gray-500 mb-3">
            IITM Pravartak, TIH IIT Madras
          </p>
          <div className="text-sm text-gray-600 flex justify-between">
            <span>🧠 ⚙️ 📘</span>
            <span>4 months</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="min-w-[340px] bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <img
            src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
            alt="Data Analytics"
            className="rounded-xl mb-4 w-full h-40 object-cover"
          />
          <h4 className="font-bold text-lg mb-2 leading-snug">
            Training and Internship Certification in Data Analytics
          </h4>
          <p className="text-sm text-gray-500 mb-3">
            E&ICT Academy, IIT Guwahati
          </p>
          <div className="text-sm text-gray-600 flex justify-between">
            <span>📊 🐍 SQL</span>
            <span>6 months</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="min-w-[340px] bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <img
            src="https://files.codingninjas.com/output-onlinepngtools-1-1742818734.webp"
            alt="Full Stack"
            className="rounded-xl mb-4 w-full h-40 object-cover"
          />
          <h4 className="font-bold text-lg mb-2 leading-snug">
            Training and Internship Certification in Full Stack Web Development
          </h4>
          <p className="text-sm text-gray-500 mb-3">
            IITM Pravartak, TIH IIT Madras
          </p>
          <div className="text-sm text-gray-600 flex justify-between">
            <span>⚛️ Node 🟨</span>
            <span>9 months</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InternshipCertifications;
