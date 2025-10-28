import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 text-sm">

        {/* Column 1 */}
        <div>
          <h4 className="font-bold mb-2">Job Bootcamp for professionals</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline text-gray-300">Web Development Bootcamp (MERN & Springboot)</a></li>
            <li><a href="#" className="hover:underline text-gray-300">Data Analytics Job Bootcamp</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-bold mb-2">IIT Certifications for Professionals</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline text-gray-300">PG Certification in Data Analytics by E&ICT Academy, IIT Guwahati</a></li>
            <li><a href="#" className="hover:underline text-gray-300">PG Certification in Data Science by E&ICT Academy, IIT Guwahati</a></li>
            <li><a href="#" className="hover:underline text-gray-300">Generative AI for Non-Tech Professionals by IITM Pravartak, TIH IIT Madras</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-bold mb-2">IIT Certifications for Students</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline text-gray-300">Data Analytics by E&ICT Academy, IIT Guwahati</a></li>
            <li><a href="#" className="hover:underline text-gray-300">Advanced DSA by IITM Pravartak, TIH IIT Madras</a></li>
            <li><a href="#" className="hover:underline text-gray-300">Full Stack Web Dev + GenAI + DSA by IITM Pravartak, TIH IIT Madras</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-bold mb-2">Our New Launches</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline text-gray-300">Advanced Certification in GenAI & Multi Agent Systems</a></li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h4 className="font-bold mb-2">We accept payments using:</h4>
          <div className="flex flex-wrap items-center gap-2">
            <img src="https://files.codingninjas.com/frame-1000003729-32279.webp" alt="Visa" className="h-6" />
            <img src="/assets/paypal.png" alt="PayPal" className="h-6" />
            <img src="https://files.codingninjas.com/upi-32277.webp" alt="UPI" className="h-6" />
            <span className="bg-gray-700 text-xs px-2 py-1 rounded">No Cost EMI</span>
            <img src="https://files.codingninjas.com/razorpay-32276.webp" alt="Razorpay" className="h-6" />
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="mt-10 bg-[#121212] py-6 px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white text-center md:text-left">
          <h3 className="text-2xl font-bold">Coding Ninjas</h3>
        </div>
        <div className="flex flex-wrap gap-4 justify-center md:justify-end">
          {/* <button className="bg-white text-black px-4 py-2 rounded-full font-semibold">Explore Job Bootcamp</button> */}
          <a href="#offerings">
           <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
            Explore Job Bootcamp  &uarr;
           </button>
         </a>
     {/* <button className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">Explore IIT Certifications</button> */}
        <a href="#IITCertifications">
  <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
    Explore IIT Certifications &uarr;
  </button>
</a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
