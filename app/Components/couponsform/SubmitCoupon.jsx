import React from "react";
import submitImg from "../../../public/assets/shopping.png";
import Image from "next/image";

const SubmitCoupon = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 px-6 py-10">
      {/* Attached Card (Image + Form) */}
      <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full">
        
        {/* Left Side Image */}
        <div className="lg:w-1/2 w-full">
          <Image
            src={submitImg}
            alt="Submit Coupon"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="lg:w-1/2 w-full p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-center text-purple-700 mb-3">
            Submit a Coupon
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Share a working code or deal — our team will verify it quickly.
          </p>

          <form className="space-y-4">
            {/* Store Name */}
            <input
              type="text"
              placeholder="Store Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />

            {/* Store URL */}
            <input
              type="text"
              placeholder="Store URL"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />

            {/* Coupon Code */}
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />

            {/* Offer Title */}
            <input
              type="text"
              placeholder="Offer Title"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />

            {/* Expiry Date & Region */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Expiry Date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
              />
              <input
                type="text"
                placeholder="Region / Country"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
            >
              Submit Coupon
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubmitCoupon;
