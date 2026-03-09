"use client";

import React from "react";
import submitImg from "../../../public/assets/shopping.png";
import Image from "next/image";
import { useState } from "react";

export default function SubmitCoupon() {
  const [formData, setFormData] = useState({
    websiteLink: "",
    storeName: "",
    discount: "",
    couponCode: "",
    conditions: "",
  });
  const handleChange = () => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/submit-coupon/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("Coupon submitted successfully!");
        setFormData({
          websiteLink: "",
          storeName: "",
          discount: "",
          couponCode: "",
          conditions: "",
        });
      } else {
        const errorData = await response.json();
        setSubmitStatus(`Error: ${errorData.message || "Failed to submit."}`);
      }
    } catch (error) {
      setSubmitStatus(`Error: ${error.message}`);
    }
  };

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [submitStatus, setSubmitStatus] = useState(null);

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

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Store Name */}
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              name="websiteLink"
              placeholder="Website Link"
              value={formData.websiteLink}
              onChange={handleChange}
              required
            />

            {/* Store URL */}
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              name="storeName"
              placeholder="Store Name (e.g. Amazon)"
              value={formData.storeName}
              onChange={handleChange}
              required
            />
            {/* discount */}
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              name="discount"
              id="discount"
              placeholder="Discount(e.g 20% off)"
              value={formData.discount}
              onChange={handleChange}
              required
            />
            {/* Coupon Code */}
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              onChange={handleChange}
              value={formData.couponCode}
              required
            />

            {/* Offer Title */}
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              name="conditions"
              placeholder="Conditions"
              value={formData.conditions}
              onChange={handleChange}
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
            >
              Submit Coupon
            </button>
            {submitStatus && (
              <p
                style={{
                  marginTop: "1rem",
                  color: submitStatus.startsWith("Error"),
                }}
              >
                {submitStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
