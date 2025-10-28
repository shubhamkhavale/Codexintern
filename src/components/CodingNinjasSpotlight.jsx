import React from 'react';

const CodingNinjasSpotlight = () => {
  return (
    <div className="bg-[#FFF3F2] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-10">
          <span className="bg-white p-2 rounded-lg shadow">
            <img src="https://cdn-icons-png.flaticon.com/512/4701/4701482.png" alt="Spotlight icon" className="w-6 h-6" />
          </span>
          <h2 className="text-xl font-semibold">Coding Ninjas in spotlight</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left TEDx */}
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex flex-col items-center">
              <img src="https://files.codingninjas.com/news_ted-33207.webp" alt="TEDx" className="mb-4 w-[200px]" />
              <h3 className="font-bold text-center mb-2">Demand, Supply, Run! | Ankush Singla | TEDxBVCOE</h3>
              <button className="border border-black px-4 py-1 rounded-md hover:bg-black hover:text-white transition">▶ Play video</button>
            </div>
          </div>

          {/* News Boxes */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Coding Ninjas Unconventional...', site: 'CXOtoday.com' },
              { title: 'Sustainable development through...', site: 'Hindustan Times' },
              { title: 'Women in tech earn 7% more...', site: 'The Hindu' },
              { title: "Tech grads sign up for 'bootcamps'...", site: 'The Economic Times' },
              { title: 'Young professionals must embrace...', site: 'The Times of India' },
              { title: 'Generative AI courses in hot demand...', site: 'moneycontrol' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow text-sm">
                <h4 className="font-bold mb-1">{item.site}</h4>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingNinjasSpotlight;
