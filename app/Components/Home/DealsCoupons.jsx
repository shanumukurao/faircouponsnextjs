import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoClose } from "react-icons/io5";

const DealsCoupon = ({ onClose, data }) => {
 
 
  const handleGoToStore = () => {
    if (data.storeLink) {
      window.open(data.storeLink, "_blank");
    } else {
      alert("Store link not available!");
    }
  };

  return (
   <div className="fixed inset-0 bg-black/40 bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50 px-4 py-4 sm:px-6">
  <div className="bg-white rounded-lg sm:rounded-2xl shadow-lg sm:shadow-2xl max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl w-full p-4 sm:p-6 md:p-8 relative animate-fadeIn mx-auto max-h-[90vh] overflow-y-auto">
    {/* Close Button */}
    <button
      onClick={onClose}
      className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
      aria-label="Close modal"
    >
      <IoClose size={24} className="sm:w-7 sm:h-7" />
    </button>

    <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
      {/* Left Content Section */}
      <div className="flex-1 w-full text-center md:text-left order-2 md:order-1 mt-4 md:mt-0">
        <h1 className="text-gray-600 text-sm sm:text-base md:text-lg mb-2">
          By signing in, you could have earned
        </h1>
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-600 mb-3">
          {data.offers}
        </h1>
        <h3 className="text-gray-500 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
          No Coupon Code Required
        </h3>

        {/* Button Container - Stack on mobile, inline on larger screens */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md w-full sm:w-auto"
          >
            Deal Activated
          </button>

          <button
            onClick={handleGoToStore}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md w-full sm:w-auto"
          >
            Go to Store
          </button>
        </div>
      </div>

      {/* Right Content Section */}
      <div className="flex-1 w-full flex flex-col items-center order-1 md:order-2">
        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-md bg-gray-50">
          <img
            src={data.logo}
            alt={`${data.store} logo`}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain p-2"
            loading="lazy"
          />
        </div>

        {/* Store Name */}
        <div className="w-full max-w-[200px] h-10 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center px-2">
          <span className="text-gray-700 text-xs sm:text-sm font-medium truncate px-2">
            {data.store}
          </span>
        </div>
      </div>
    </div>

    {/* Terms and Conditions */}
    <div className="mt-4 sm:mt-6 text-center">
      <p className="text-gray-500 text-xs sm:text-sm px-2">
        * Terms and conditions apply. Cashback credited within 24 hours.
      </p>
    </div>
  </div>
</div>
  );
};

export default DealsCoupon;
