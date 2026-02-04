'use client'

import React, { useState } from "react";
import storelogo from "../../../public/assets/store.png";
import { MdClose } from "react-icons/md";
import { FaCopy } from "react-icons/fa";
import { useParams, useSearchParams } from "next/navigation";
import Image from "next/image";

const Offers = () => {
  const searchParams=useSearchParams();
  const store=searchParams.get("store") || "Sea Boola";
  const logo=searchParams.get("logo") || "/assets/store.png";
  const cashback=searchParams.get("cashback") || "5%";
  const offers=JSON.parse(searchParams.get("offers")) || [];
  console.log(offers,"offers",store,logo,cashback);

  const categories = [
    "THCA",
    "Travel Agency & Services",
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
      <div className="min-h-screen px-4 py-10">
        <div className="max-w-5xl mx-auto w-full bg-gradient-to-b from-[#6C63FF] to-[#3D3BFF] rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row gap-14 shadow-xl">

          {/* LEFT - DETAILS */}
          <div className="w-full lg:w-1/2 text-white">
            <div className="text-sm opacity-80 flex gap-2">
              <span className="hover:underline cursor-pointer">Stores</span>
              <span>/</span>
              <span className="hover:underline cursor-pointer">Categories</span>
              <span>/</span>
              <span className="font-medium">{store}</span>
            </div>

            <div className="mt-5 inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm tracking-wide shadow-sm">
              STORE PARTNER HUB
            </div>

            <h1 className="text-5xl font-bold mt-5 leading-tight">{store}</h1>

            <p className="opacity-90 mt-4 text-[15px] max-w-md leading-relaxed">
              Discover hand-picked coupons, stacks, and exclusive offers curated for this store.
            </p>

            <button className="mt-7 bg-white/20 hover:bg-white/30 backdrop-blur px-6 py-2.5 rounded-xl text-white flex items-center gap-3 transition shadow-md">
              <i className="fas fa-link"></i> Copy store link
            </button>

            <div className="grid grid-cols-4 gap-6 mt-10 text-center">
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
                <p className="text-[11px] opacity-80 mt-1">COUPON CODES</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold leading-tight">
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
                className="h-28 w-28 object-contain mix-blend-multiply"
              />
            </div>

            <div className="bg-white rounded-3xl p-7 shadow-xl">
              <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm w-fit mb-5 font-medium">
                ● Top offer
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {store} Coupon
              </h3>

              <p className="text-gray-600 mt-2 flex items-center gap-2 text-sm">
                <i className="fas fa-tag text-blue-600"></i>
                Automatic discount applied
              </p>

              <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium w-fit transition">
                Reveal details
              </button>
            </div>
          </div>

        </div>

        {/* MAIN CONTENT BELOW */}
        <div className="w-full flex flex-col lg:flex-row gap-8 p-6 max-w-5xl mx-auto gap-2">

          {/* LEFT COLUMN */}
          <div className="w-full lg:w-3/4 flex flex-col gap-8">

            {/* 1 LIVE OFFERS CARD */}
            <div className="bg-white shadow-lg rounded-2xl p-6 space-y-5">
              <h1 className="text-xl font-semibold">1 live offers</h1>
              <p className="text-gray-600">Updated November 2025 for Sea Boola</p>

              <div className="relative">
                <input
                  type="search"
                  className="w-full border rounded-xl p-3 pl-10 bg-[#f8faff]"
                  placeholder="Search coupons by keyword or offer details"
                />
                <span className="absolute left-3 top-3 text-gray-400">🔍</span>
              </div>

             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 items-center">
  <button className="text-xl px-3 py-2 rounded-xl bg-[#eef2ff] text-indigo-700">
    All 1
  </button>

  <button className="px-3 py-2 rounded-xl bg-[#f4f5f7]">
    Exclusive 0
  </button>

  <button className="px-3 py-2 rounded-xl bg-[#f4f5f7]">
    Coupon codes 0
  </button>

  <button className="px-3 py-2 rounded-xl bg-[#eef2ff] text-indigo-700">
    Deals 1
  </button>

  <select className="border px-3 py-2 rounded-xl bg-white">
    <option>Recommended</option>
    <option>Selection</option>
  </select>

  <button className="px-4 py-2 rounded-xl bg-[#eef2ff] text-indigo-700">
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
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="px-4 py-1 bg-[#eef2ff] rounded-full text-indigo-700">Verified</span>
                  <span className="px-4 py-1 bg-[#eef2ff] rounded-full text-indigo-700">Sea Boola</span>
                </div>

                <h1 className="text-2xl font-semibold">Sea Boola Coupon</h1>

                <p className="text-gray-600">Freshness: 19/10/2025</p>
                <p className="text-gray-600">Last used: Unknown</p>
              </div>

              <div className="border-l pl-6 flex flex-col items-center text-center">
                <h2 className="text-xl font-bold text-indigo-700">Deal</h2>
                <p className="text-green-600 font-medium">Active Now</p>

                <button
                  onClick={() => setPopup(true)}
                  className="mt-3 px-6 py-2 rounded-xl bg-linear-to-r from-indigo-600 to-blue-700 text-white"
                >
                  Show Code
                </button>

                <button className="mt-2 text-indigo-600 underline">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 max-w-5xl mx-auto items-center">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-5 flex flex-col items-center gap-3 hover:shadow-lg transition"
            >
              <Image
                src={storelogo}
                alt="store"
                className="w-24 h-24 object-contain rounded-lg"
              />

              <h1 className="text-lg font-semibold text-gray-800 text-center">
                {item}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP */}
   {popup && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-3 sm:p-4">
    <div
      className="
        relative bg-white
        w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl
        max-h-[90vh]
        p-4 sm:p-6
        rounded-2xl sm:rounded-3xl
        shadow-2xl
        overflow-y-auto
      "
    >
      {/* Close Button */}
      <button
        onClick={() => setPopup(false)}
        className="absolute top-3 right-3 sm:top-4 sm:right-4
          text-gray-500 hover:text-gray-800
          text-xl sm:text-2xl p-2"
      >
        <MdClose />
      </button>

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 text-center sm:text-left">
        <img
          src={logo}
          alt="Store Logo"
          width={48}
          height={48}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
        />

        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            {store}
          </h2>
        </div>
      </div>

      {/* Verified Date */}
      <div className="flex items-center justify-center sm:justify-start text-gray-500 text-sm mb-5">
        <span className="flex items-center gap-2">
          <i className="fas fa-check-circle text-blue-500"></i>
          Verified {selectedCoupon?.date}
        </span>
      </div>

      {/* Coupon Code Box */}
      <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 sm:p-6 rounded-2xl border border-blue-200 shadow-inner">
        <p className="text-center text-gray-600 text-sm mb-2">
          Use this code at checkout
        </p>

        <div
          className="
            bg-white shadow-md rounded-xl
            p-3 sm:p-4
            text-center
            text-xl sm:text-2xl
            tracking-widest
            font-semibold
            text-gray-800
            border
          "
        >
          {selectedCoupon?.code}
        </div>

        <div className="text-center mt-4">
          <a
            href={selectedCoupon?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Open Store →
          </a>
        </div>
      </div>

      {/* Worked / Reminder */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {/* Worked */}
        <div className="border rounded-2xl p-4 text-center">
          <p className="text-gray-500 text-sm mb-3">Did it work?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button className="px-4 sm:px-5 py-2 text-sm sm:text-base rounded-xl bg-blue-600 text-white">
              Worked ✓
            </button>
            <button className="px-4 sm:px-5 py-2 text-sm sm:text-base rounded-xl border text-gray-700">
              Didn’t work
            </button>
          </div>
        </div>

        {/* Reminder */}
        <div className="border rounded-2xl p-4 text-center">
          <p className="text-gray-500 text-sm mb-3">Reminder</p>
          <button className="px-4 sm:px-5 py-2 text-sm sm:text-base rounded-xl border text-gray-700">
            Save this store
          </button>
        </div>
      </div>

      {/* Share Section */}
      <div className="mt-8">
        <p className="text-gray-500 text-sm mb-4">Share with a friend</p>

        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-xl border text-blue-600 text-sm sm:text-base">
            Facebook
          </button>
          <button className="px-4 py-2 rounded-xl border text-gray-700 text-sm sm:text-base">
            X (Twitter)
          </button>
          <button className="px-4 py-2 rounded-xl border text-green-600 text-sm sm:text-base">
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