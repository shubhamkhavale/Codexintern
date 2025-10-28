function NewLaunches() {
  return (
    <section className="py-16 px-4 md:px-20 bg-white relative">
      {/* Left vertical line */}
      <div className="absolute top-0 left- 10 md:left-10 h-full border-l-2 border-black z-0"></div>

      {/* Icon */}
      <div className="absolute left-0 md:left-6 top-6 z-10">
        <div className="bg-white p-2 rounded-full border border-gray-300 shadow w-10 h-10 flex items-center justify-center">
          <img
            src="https://files.codingninjas.in/scratch_6-1749200916.svg"
            alt="New Launch"
            className="w-6 h-6"
          />
        </div>
      </div>

      {/* Heading */}
      <div className="pl-10 md:pl-16 mb-10 relative z-10">
        <h3 className="text-xl font-semibold">New Launches</h3>
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mt-2">
          For graduates
        </span>
      </div>

      {/* Course Card */}
      <div className="bg-[#f5f7ff] rounded-2xl p-6 md:p-8 shadow-md w-full max-w-5xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://files.codingninjas.in/frame-2087323878-1749044071.svg"
            alt="GenAI Multi Agent"
            className="w-12 h-12"
          />
          <h4 className="text-lg font-bold">
            Advanced Certification in GenAI & Multi Agent Systems
          </h4>
        </div>
        <div className="text-sm text-gray-600 flex flex-wrap justify-between mt-2">
          <span>100+ Hrs of content</span>
          <span>300+ Problems</span>
          <span>500+ Learners</span>
        </div>
      </div>
    </section>
  );
}

export default NewLaunches;
