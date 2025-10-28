function Offerings() {
  return (
    // <section className="py-16 px-4 md:px-20 bg-white relative">
    <section id="offerings" className="relative py-16 px-4 md:px-20 bg-white overflow-hidden">

      {/* Left vertical line */}
      <div className="absolute top-0 left-4 md:left-10 h-full border-l-2 border-black z-0"></div>

      {/* Icon at top-left aligned with the line */}
      <div className="absolute left-0 md:left-6 top-6 z-10">
        <div className="bg-white p-2 rounded-full border border-gray-300 shadow w-10 h-10 flex items-center justify-center">
          <img
            src="https://files.codingninjas.com/bootcampicon-32524.svg"
            alt="bootcamp"
            className="w-6 h-6"
          />
        </div>
      </div>

      {/* Section heading */}
      <h2 className="text-6xl font-extrabold text-gray-200 mb-20 tracking-wide text-center">
        OUR OFFERINGS
      </h2>

      {/* Section Label */}
      <div className="pl-10 md:pl-16 mb-10 relative z-10">
        <h3 className="text-xl font-semibold">Job Bootcamp</h3>
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mt-2">
          For graduates
        </span>
      </div>

      {/* Offer cards */}
      <div className="flex flex-col md:flex-row justify-center gap-8 relative z-10">
        {/* Card 1 */}
        <div className="bg-[#f6f8ff] rounded-xl p-6 shadow-md w-full md:w-96">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://files.codingninjas.com/layer-1-1734090969.svg"
              alt="web dev"
              className="w-10 h-10"
            />
            <h4 className="text-lg font-bold">Full Stack Web Development with GenAI</h4>
          </div>
          <div className="text-sm text-gray-600 flex justify-between mt-4">
            <span>140+ Hrs of content</span>
            <span>600+ Problems</span>
            <span>10k+ Learners</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#f6f8ff] rounded-xl p-6 shadow-md w-full md:w-96">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://files.codingninjas.com/data-analytics-1-1734090968.svg"
              alt="analytics"
              className="w-10 h-10"
            />
            <h4 className="text-lg font-bold">Data Analytics with GenAI</h4>
          </div>
          <div className="text-sm text-gray-600 flex justify-between mt-7">
            <span>100+ Hrs of content</span>
            <span>300+ Problems</span>
            <span>2000+ Learners</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offerings;


