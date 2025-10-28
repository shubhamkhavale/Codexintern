function HeroSection() {
  return (
    <section className="bg-[#0f1117] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div>
          <p className="text-green-400 font-medium mb-2">Restricted by opportunities?</p>
          <h1 className="text-4xl font-bold leading-snug">
            Get the tech career<br />
            you deserve. <span className="text-white">Faster.</span>
          </h1>

          <ul className="mt-6 space-y-9 text-sm text-gray-200">
            <li className="flex items-center gap-2">
              ✅ <span><strong>128% average hike</strong> via our placement cell</span>
            </li>
            <li className="flex items-center gap-2">
              ✅ <span><strong>1.5 Lac+ learners</strong> cracked top tech companies</span>
            </li>
            <li className="flex items-center gap-2">
              ✅ <span><strong>1,400+ alumni in MAANG</strong> & 103 unicorn startups</span>
            </li>
          </ul>
        </div>

        {/* Right Side - Form Box */}
        <div className="bg-white rounded-xl p-6 text-black shadow-lg">
          <h2 className="font-semibold text-lg mb-4">Let's find the right course for you</h2>

          <form className="space-y-4 text-sm">
            {/* Experience */}
            <div>
              <label className="font-medium">Experience</label>
              <div className="space-y-2 mt-2">
                <div><input type="radio" name="exp" /> Working Professional - Technical Roles</div>
                <div><input type="radio" name="exp" /> Working Professional - Non Technical</div>
                <div><input type="radio" name="exp" /> College Student - Final Year</div>
                <div><input type="radio" name="exp" /> College Student - 1st to Pre-final Year</div>
                <div><input type="radio" name="exp" /> Others</div>
              </div>
            </div>

            {/* Dropdown */}
            <div>
              <label className="block font-medium mb-1" >Select topic of interest</label>
              <select className="w-full border px-3 py-2 rounded" >
                <option>Select your options/choices</option>
                <option>Full Stack Development</option>
                <option>Data Analytics</option>
              </select>
            </div>

            {/* Name */}
            <input type="text" placeholder="Enter name" className="w-full border px-3 py-2 rounded" />
            {/* Phone */}
            <input type="text" placeholder="Enter phone number" className="w-full border px-3 py-2 rounded" />
            {/* Email */}
            <input type="email" placeholder="Enter email" className="w-full border px-3 py-2 rounded" />

            <button className="w-full bg-orange-500 text-white py-2 rounded font-semibold hover:bg-orange-600">
              Find your course
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

