import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const CodingNinjasFooter = () => {
  return (
    <footer className="bg-[#231F20] text-white text-sm">
      <div className="max-w-screen-xl mx-auto px-6 py-10 grid md:grid-cols-5 gap-8">
        {/* Left Section */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <img src="https://files.codingninjas.com/new-cn-logos-31142.svg" alt="Coding Ninjas" className="w-36" />
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Contact us</h4>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt />
              <span>1800-123-3598</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span>contact@codingninjas.com</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Our offerings</h4>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <img src="https://files.codingninjas.com/new-cn-logos-31142.svg" alt="Job Bootcamp" className="w-10 h-4" />
                <span>/job-bootcamp</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="https://files.codingninjas.com/new_cn_logos_4x-1710497457.webp" alt="Code 360" className="w-10 h-4" />
                <span>by Coding Ninjas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="space-y-2">
          <h4 className="font-semibold">Coding Ninjas</h4>
          <ul className="space-y-1">
            <li>Careers</li>
            <li>Privacy policy</li>
            <li>Terms & conditions</li>
            <li>Pricing & refund policy</li>
            <li>Bug bounty</li>
            <li>Review</li>
            <li>Press release</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold">Products</h4>
          <ul className="space-y-1">
            <li>Job Bootcamp</li>
            <li>Code 360</li>
            <li>Professional Certifications</li>
            <li>Student Certifications</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold">Community</h4>
          <ul className="space-y-1">
            <li>10X Club</li>
            <li>Student Chapters</li>
            <li>Hire from us</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-6 px-6 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-400">&copy; Copyright © Sunrise Mentors Pvt. Ltd.</p>
        <div className="flex space-x-4 text-gray-300 mt-4 md:mt-0">
          {/* <FaInstagram className="hover:text-white cursor-pointer" />
          <FaFacebookF className="hover:text-white cursor-pointer" />
          <FaLinkedinIn className="hover:text-white cursor-pointer" />
          <FaTwitter className="hover:text-white cursor-pointer" />
          <FaYoutube className="hover:text-white cursor-pointer" /> */}
           <a
        href="https://www.instagram.com/coding.ninjas"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="hover:text-white cursor-pointer" />
      </a>

      <a
        href="https://www.facebook.com/codingninjasindia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF className="hover:text-white cursor-pointer" />
      </a>

      <a
        href="https://www.linkedin.com/school/coding-ninjas-india/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="hover:text-white cursor-pointer" />
      </a>

      <a
        href="https://twitter.com/CodingNinjasOff"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className="hover:text-white cursor-pointer" />
      </a>

      <a
        href="https://www.youtube.com/c/CodingNinjasIndia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube className="hover:text-white cursor-pointer" />
      </a>
        </div>
      </div>

      
    </footer>
  );
};

export default CodingNinjasFooter;
