'use client'

import React from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import laptop from "../../../public/assets/laptop.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from "next/image";

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl">
        
        {/* Left Section - Illustration */}
        <div className="md:w-1/2 flex items-center justify-center p-6 md:p-10">
          <Image
            src={laptop}
            alt="Signup illustration"
            className="w-80 h-auto md:w-[400px] animate-float"
          />
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 bg-white rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-3">
            Create Your Account
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Join us today and start your amazing journey!
          </p>

          <form className="space-y-6">
            {/* Full Name */}
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:border-indigo-500 transition">
              <FaUser className="text-indigo-500 mr-3" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full outline-none text-gray-700 bg-transparent"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:border-indigo-500 transition">
              <FaEnvelope className="text-indigo-500 mr-3" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full outline-none text-gray-700 bg-transparent"
              />
            </div>

            {/* Password */}
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:border-indigo-500 transition">
              <FaLock className="text-indigo-500 mr-3" />
              <input
                type="password"
                placeholder="Password"
                className="w-full outline-none text-gray-700 bg-transparent"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:border-indigo-500 transition">
              <FaLock className="text-indigo-500 mr-3" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full outline-none text-gray-700 bg-transparent"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-transform transform hover:scale-105"
            >
              Sign Up
            </button>

            {/* Already have an account */}
            <p className="text-center text-gray-700 mt-4">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-indigo-600 hover:underline font-semibold"
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
