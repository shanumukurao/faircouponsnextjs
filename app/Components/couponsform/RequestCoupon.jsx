'use client'


import React, { useState } from "react";
import couponImg from "../../../public/assets/sales.png"; // 🖼️ Add your image here
import Image from "next/image";

const RequestCoupon = () => {
  const [formData, setFormData] = useState({
    storeName: "",
    email: "",
    details: "",
    storeURL: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Request submitted successfully!");
    setFormData({ storeName: "", email: "", details: "", storeURL: "" });
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 px-6 py-10">
      {/* Attached Card */}
      <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full">
        
        {/* Left Side Image */}
        <div className="lg:w-1/2 w-full">
          <Image
            src={couponImg}
            alt="Request Coupon"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="lg:w-1/2 w-full p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-center text-indigo-600 mb-3">
            Request Store Coupons
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Tell us the store you want — we'll reach out for exclusive codes.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Store Name */}
            <input
              type="text"
              name="storeName"
              value={formData.storeName}
              onChange={handleChange}
              placeholder="Enter Store Name"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            {/* Store URL */}
            <input
              type="url"
              name="storeURL"
              value={formData.storeURL}
              onChange={handleChange}
              placeholder="Official Store URL"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            {/* Details */}
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Any details (products, regions, timing)"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              rows="3"
            ></textarea>

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RequestCoupon;
