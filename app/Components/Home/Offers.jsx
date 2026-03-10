"use client";

import React, { useState } from "react";
import storelogo from "../../../public/assets/store.png";
import { MdClose } from "react-icons/md";
import { FaCopy } from "react-icons/fa";
import { useParams, useSearchParams } from "next/navigation";
import Image from "next/image";

const Offers = () => {
  const searchParams = useSearchParams();
  const store = searchParams.get("store") || "Sea Boola";
  const logo = searchParams.get("logo") || "/assets/store.png";
  const cashback = searchParams.get("cashback") || "5%";
  const offers = JSON.parse(searchParams.get("offers")) || [];
  console.log(offers, "offers", store, logo, cashback);

  const categories = [
    "THCA",
    "Travel & Services",
    "Cryptocurrencies",
    "CBD",
    "NFTs",
    "Cryptocurrency",
  ];

  const [popup, setPopup] = useState(false);

  // Dummy coupon for popup UI
  const selectedCoupon = {
    code: "SAVE20",
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(selectedCoupon.code);
  };

  return (
    <>
      {/* TOP HEADER SECTION */}
      <div className="min-h-screen">
        <div className="bg-gradient-to-b from-[#6C63FF] to-[#3D3BFF] py-10 px-5 lg:px-14">
  <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 shadow-xl">

    {/* LEFT - DETAILS */}
    <div className="w-full lg:w-1/2 text-white">
      
      <div className="text-sm opacity-80 flex flex-wrap gap-2">
        <span className="hover:underline cursor-pointer">Stores</span>
        <span>/</span>
        <span className="hover:underline cursor-pointer">Categories</span>
        <span>/</span>
        <span className="font-medium">{store}</span>
      </div>

      <div className="mt-5 inline-block bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm tracking-wide shadow-sm">
        STORE PARTNER HUB
      </div>

      <h1 className="text-4xl lg:text-5xl font-bold mt-5 leading-tight">
        {store}
      </h1>

      <p className="opacity-90 mt-4 text-sm lg:text-[15px] max-w-md leading-relaxed">
        Discover hand-picked coupons, stacks, and exclusive offers curated
        for this store.
      </p>

      <button className="mt-7 bg-white/20 hover:bg-white/30 backdrop-blur px-6 py-2.5 rounded-xl text-white flex items-center gap-3 transition shadow-md">
        <i className="fas fa-link"></i> Copy store link
      </button>

      {/* STATS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 text-center">
        <div>
          <h2 className="text-3xl font-bold">1</h2>
          <p className="text-[11px] opacity-80 mt-1">TOTAL STORES</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">0</h2>
          <p className="text-[11px] opacity-80 mt-1">EXCLUSIVE STORES</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">0</h2>
          <p className="text-[11px] opacity-80 mt-1">COUPONS CODES</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold leading-tight">
            Fresh offers weekly
          </h2>
          <p className="text-[11px] opacity-80 mt-1">TOP SAVING</p>
        </div>
      </div>
    </div>

    {/* RIGHT LOGO + TOP OFFER */}
    <div className="w-full lg:w-1/2 space-y-8">

      <div className="backdrop-blur-lg h-52 rounded-3xl flex items-center justify-center shadow-lg bg-white/10">
        <img
          src={logo}
          alt="Store Logo"
          className="h-24 w-24 lg:h-28 lg:w-28 object-contain"
        />
      </div>

      <div className="bg-white rounded-3xl p-6 lg:p-7 shadow-xl">

        <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm w-fit mb-5 font-medium">
          ● Top offer
        </div>

        <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
          {store} Coupon
        </h3>

        <p className="text-gray-600 mt-2 flex items-center gap-2 text-sm">
          <i className="fas fa-tag text-blue-600"></i>
          Automatic discount applied
        </p>

        <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition">
          Reveal details
        </button>

      </div>
    </div>

  </div>
</div>

        {/* MAIN CONTENT BELOW */}
        <div className="w-full flex flex-col lg:flex-row gap-8 p-6 max-w-7xl mx-auto gap-2">
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-3/4 flex flex-col gap-8">
            {/* 1 LIVE OFFERS CARD */}
            <div className="bg-white shadow-lg rounded-2xl p-6 space-y-5">
              <h1 className="text-xl font-semibold">1 live offers</h1>
              <p className="text-gray-600">
                Updated November 2025 for Sea Boola
              </p>

              <div className="relative">
                <input
                  type="search"
                  className="w-full rounded-xl p-3 pl-10 bg-[#f8faff]"
                  placeholder="Search coupons by keyword or offer details"
                />
                <span className="absolute left-3 top-3 text-gray-400">🔍</span>
              </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 items-center max-w-5xl mx-auto w-full">
  
  {/* All */}
  <button className="h-12 w-full flex items-center justify-center rounded-xl bg-[#eef2ff] text-indigo-700 text-sm font-medium">
    All 1
  </button>

  {/* Exclusive */}
  <button className="h-12 w-full flex items-center justify-center rounded-xl bg-[#f4f5f7] text-sm font-medium">
    Exclusive 0
  </button>

  {/* Coupon codes */}
  <button className="h-12 w-full flex items-center justify-center rounded-xl bg-[#f4f5f7] text-sm font-medium">
    Coupons 0
  </button>

  {/* Deals */}
  <button className="h-12 w-full flex items-center justify-center rounded-xl bg-[#eef2ff] text-indigo-700 text-sm font-medium">
    Deals 1
  </button>

  {/* Select */}
  <select className="h-12 w-full flex items-center justify-center rounded-xl bg-white text-sm px-3">
    <option>Recommended</option>
    <option>Selection</option>
  </select>

  {/* Fresh Codes */}
  <button className="h-12 w-full flex items-center justify-center rounded-xl bg-[#eef2ff] text-indigo-700 text-sm font-medium">
    Fresh Codes
  </button>

</div>


              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" /> Codes only
                </label>

                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" /> Cashback only
                </label>
              </div>
            </div>

            {/* SEA BOOLA COUPON CARD */}
            <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row justify-between gap-6">
              {/* LEFT CONTENT */}
              <div className="space-y-3">
                <div className="flex gap-3 flex-wrap">
                  <span className="px-4 py-1 bg-[#eef2ff] rounded-full text-indigo-700 text-sm font-medium">
                    Verified
                  </span>
                  <span className="px-4 py-1 bg-[#eef2ff] rounded-full text-indigo-700 text-sm font-medium">
                    Sea Boola
                  </span>
                </div>

                <h1 className="text-2xl font-semibold text-gray-900">
                  Sea Boola Coupon
                </h1>

                <p className="text-gray-600 text-sm">Freshness: 19/10/2025</p>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                    ✓ Verified Code
                  </span>

                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                    ✓ View
                  </span>

                  <span className="text-gray-500 text-sm">used</span>
                </div>
              </div>

              {/* RIGHT ACTION */}
              <div className="md:border-l md:pl-6 flex flex-col items-center text-center">
                <h2 className="text-xl font-bold text-indigo-700">Deal</h2>

                <p className="text-green-600 font-medium">Active Now</p>

                <button
                  onClick={() => setPopup(true)}
                  className="mt-3 px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-700 text-white font-medium hover:opacity-90 transition"
                >
                  Show Code
                </button>

                <button className="mt-2 text-indigo-600 text-sm underline hover:text-indigo-800 transition">
                  Show Details
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - ABOUT */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white shadow-lg rounded-2xl p-6 h-100">
              <h1 className="text-xl font-semibold">About Sea Boola</h1>
              <p className="text-gray-600 mt-2">Updated November 2025</p>
            </div>
          </div>
        </div>

        {/* CATEGORIES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 max-w-7xl mx-auto">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4
                 flex flex-col items-center justify-between
                 h-44 w-full
                 hover:shadow-lg transition"
            >
              <Image
                src={storelogo}
                alt="store"
                className="w-24 h-24 object-contain rounded-lg"
              />

              <h1 className="text-sm font-semibold text-gray-800 text-center">
                {item}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP */}
   {popup && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-2">
    <div
      className="
        relative bg-white
        w-full max-w-2xl
        p-4
        rounded-2xl
        shadow-2xl
      "
    >
      {/* Close Button */}
      <button
        onClick={() => setPopup(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
      >
        <MdClose />
      </button>

      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={logo}
          alt="Store Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
        <h2 className="text-lg font-semibold text-gray-900">
          {store}
        </h2>
      </div>

      {/* Verified Date */}
      <div className="flex items-center text-gray-500 text-xs mb-3 gap-2">
        <i className="fas fa-check-circle text-blue-500"></i>
        Verified {selectedCoupon?.date}
      </div>

      {/* Coupon Code Box */}
      <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-3 rounded-xl border border-blue-200">
        <p className="text-center text-gray-600 text-xs mb-2">
          Use this code at checkout
        </p>

        <div className="bg-white shadow rounded-lg h-12 flex items-center justify-center text-lg tracking-widest font-semibold">
          {selectedCoupon?.code}
        </div>

        <div className="text-center mt-2">
          <a
            href={selectedCoupon?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm font-medium"
          >
            Open Store →
          </a>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="text-center">
          <p className="text-gray-500 text-xs mb-2">Did it work?</p>
          <div className="flex justify-center gap-2">
            <button className="px-3 py-1.5 text-xs rounded-lg bg-blue-600 text-white">
              Worked ✓
            </button>
            <button className="px-3 py-1.5 text-xs rounded-lg bg-gray-100 text-gray-700">
              Didn’t
            </button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-xs mb-2">Reminder</p>
          <button className="px-4 py-1.5 text-xs rounded-lg bg-gray-100 text-gray-700">
            Save store
          </button>
        </div>
      </div>

      {/* Share */}
      <div className="mt-4">
        <p className="text-gray-500 text-xs mb-2">Share</p>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 text-xs rounded-lg bg-blue-50 text-blue-600">
            Facebook
          </button>
          <button className="px-3 py-1.5 text-xs rounded-lg bg-gray-100 text-gray-700">
            X
          </button>
          <button className="px-3 py-1.5 text-xs rounded-lg bg-green-50 text-green-600">
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  </div>
)}


    </>
  );
};

export default Offers;
