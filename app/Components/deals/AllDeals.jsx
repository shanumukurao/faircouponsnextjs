'use client';

import React, { useState } from "react";
import { MdPeopleAlt } from "react-icons/md";
import { useRouter } from "next/navigation";

const AllDeals = () => {
  const router=useRouter();

  const [hidden, setHidden] = useState(true);
  const [popupCode, setPopupCode] = useState("");
  const [popupStore, setPopupStore] = useState("");
  const [popupStatus, setPopupStatus] = useState(null); // "works" or "not"

  const handleHidden = () => setHidden(!hidden);

  const handlePopup = (code, store) => {
    setPopupCode(code);
    setPopupStore(store);
    setPopupStatus(null);
  };

  const deals = [
    {
      store: "TechWorld",
      category: "Electronics Store",
      gradient: "from-blue-500 to-cyan-500",
      badge: "40% OFF",
      badgeColor: "bg-red-100 text-red-800",
      title: "Extra 40% off select laptops & tablets",
      desc: "Limited time offer on premium brands",
      code: "Flip2130",
      icon: "fas fa-store",
      storeUrl: "https://www.techworld.com",
    },
    {
      store: "FashionHub",
      category: "Clothing Store",
      gradient: "from-purple-500 to-pink-500",
      badge: "FREE SHIP",
      badgeColor: "bg-green-100 text-green-800",
      title: "Free shipping on all orders $50+",
      desc: "No code needed. Applies automatically.",
      code: "World123",
      icon: "fas fa-shopping-bag",
      storeUrl: "https://www.fashionhub.com",
    },
    {
      store: "FoodieDelight",
      category: "Restaurant",
      gradient: "from-amber-500 to-orange-500",
      badge: "25% OFF",
      badgeColor: "bg-blue-100 text-blue-800",
      title: "25% off your first order + free delivery",
      desc: "New customers only. Min. order $25.",
      code: "Amaz120",
      icon: "fas fa-utensils",
      storeUrl: "https://www.foodiedelight.com",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-5">

        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900">
              🔥 Today's Best Deals
            </h2>
            <p className="text-gray-600 text-lg">
              Exclusive offers curated just for you
            </p>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {deals.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md border border-gray-200 
              rounded-3xl shadow-xl p-6 hover:-translate-y-2 transition-all"
            >
              {/* Store Info */}
              <div className="flex justify-between items-start mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} 
                    flex items-center justify-center text-white shadow-md`}
                  >
                    <i className={`${item.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      {item.store}
                    </h3>
                    <p className="text-gray-500 text-sm">{item.category}</p>
                  </div>
                </div>

                <span
                  className={`${item.badgeColor} px-3 py-1 rounded-full text-xs font-bold`}
                >
                  {item.badge}
                </span>
              </div>

              {/* Deal Title */}
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>

              {/* Code Section */}
              <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 text-sm">Use Code</p>
                    <p
                      className="font-mono text-xl font-bold cursor-pointer"
                      onClick={handleHidden}
                    >
                      {hidden ? "••••••" : item.code}
                    </p>
                  </div>

                  <button
                    onClick={() => handlePopup(item.code, item.store)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                    px-4 py-2 rounded-xl shadow hover:scale-105 transition"
                  >
                    Show
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex justify-between text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <MdPeopleAlt size={18} />
                  <span>Views</span>
                </div>

                <div className="flex items-center gap-1">
                  <i className="far fa-clock"></i>
                  <span>Last Used</span>
                </div>

                <div className="flex items-center gap-1">
                  <i className="far fa-check-circle text-green-500"></i>
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* POPUP */}
        {popupCode && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white w-96 rounded-2xl p-7 shadow-2xl animate-fadeIn">

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                🎉 Coupon Code
              </h3>

              {/* Store Name */}
              <p className="text-lg font-semibold text-purple-600 text-center mb-2">
                {popupStore}
              </p>

              {/* Code Box */}
              <p className="font-mono text-3xl font-bold text-gray-900 
              bg-gray-100 p-4 rounded-xl text-center mb-6">
                {popupCode}
              </p>

              {/* Go To Store Button */}
              <a
                href="#"
                target="_blank"
                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 
                text-white py-3 rounded-xl font-semibold shadow 
                hover:scale-105 transition text-center mb-3"
              >
                Go to Store
              </a>

              {/* Working Buttons */}
              <div className="flex gap-3 mb-4">
                <button
                  onClick={() => setPopupStatus("works")}
                  className={`w-1/2 py-2 rounded-lg border font-medium transition ${
                    popupStatus === "works"
                      ? "bg-green-600 text-white border-green-600"
                      : "border-green-600 text-green-700 hover:bg-green-50"
                  }`}
                >
                  Works 👍
                </button>

                <button
                  onClick={() => setPopupStatus("not")}
                  className={`w-1/2 py-2 rounded-lg border font-medium transition ${
                    popupStatus === "not"
                      ? "bg-red-600 text-white border-red-600"
                      : "border-red-600 text-red-700 hover:bg-red-50"
                  }`}
                >
                  Not Working 👎
                </button>
              </div>

              {/* Close */}
              <button
                className="w-full py-2 bg-gray-200 hover:bg-gray-300 rounded-xl font-medium"
                onClick={() => setPopupCode("")}
              >
                Close
              </button>

            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllDeals;
