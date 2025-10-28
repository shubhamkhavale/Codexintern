import React from 'react';

const NsdcPartnerSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 bg-[#f9f9f9] p-8 rounded-2xl shadow">
        <img
          src="https://files.codingninjas.com/nsdc-certificate-1744265691.webp"
          alt="NSDC Certificate"
          className="max-w-[300px] rounded-md shadow"
        />
        <p className="text-lg font-medium">
          We are an approved training partner of NSDC under their scheme for market led fee-based services
        </p>
      </div>
    </div>
  );
};

export default NsdcPartnerSection;
