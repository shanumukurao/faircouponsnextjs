'use client'

import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import loginImg from "../../../public/assets/1.png";
import Image from "next/image";

const Login = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-primary-600 via-accent-600 to-primary-700 flex items-center justify-center p-4">

      <div className="p-[2px] rounded-3xl shadow-2xl max-w-5xl w-full border-gradient-animation max-h-[90vh] overflow-hidden">

        <div className="flex flex-col md:flex-row bg-white/20 backdrop-blur-lg rounded-3xl overflow-hidden h-full">

          {/* LEFT SECTION */}
          <div className="hidden md:flex md:w-1/2 bg-white/10 items-center justify-center p-6">
            <Image
              src={loginImg}
              alt="Login illustration"
              className="w-64 md:w-72 lg:w-80 object-contain"
            />
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full md:w-1/2 bg-white p-6 md:p-10 flex flex-col justify-center overflow-y-auto">

            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-3">
              Welcome Back 👋
            </h2>

            <p className="text-center text-gray-500 mb-6">
              Please sign in to continue your journey!
            </p>

            <form className="space-y-5">
              {/* EMAIL */}
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 shadow-sm">
                <FaEnvelope className="text-primary-500 mr-3 text-lg" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent outline-none text-gray-700"
                />
              </div>

              {/* PASSWORD */}
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 shadow-sm">
                <FaLock className="text-primary-500 mr-3 text-lg" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-transparent outline-none text-gray-700"
                />
              </div>

              {/* FORGOT PASSWORD */}
              <div className="text-right">
                <a href="/forgotpassword" className="text-sm text-accent-600">
                  Forgot Password?
                </a>
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-accent-600 text-white font-semibold py-3 rounded-lg hover:scale-105 transition"
              >
                Log In
              </button>

              {/* DIVIDER */}
              <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="mx-3 text-gray-500 text-sm">OR</span>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>

              {/* SOCIAL LOGIN */}
              <div className="flex justify-center gap-4">
                <button className="bg-gray-100 rounded-full p-3">
                  <i className="fab fa-google text-red-500 text-xl"></i>
                </button>
                <button className="bg-gray-100 rounded-full p-3">
                  <i className="fab fa-facebook-f text-blue-600 text-xl"></i>
                </button>
                <button className="bg-gray-100 rounded-full p-3">
                  <i className="fab fa-github text-gray-800 text-xl"></i>
                </button>
              </div>

              {/* SIGN UP */}
              <p className="text-center text-gray-700 mt-5">
                Don’t have an account?{" "}
                <a href="/signup" className="text-primary-600 font-semibold">
                  Sign Up
                </a>
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
