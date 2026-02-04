'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const couponData = [
  {
    id: 1,
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    title: "Amazon",
    category: "Electronics & Fashion",
    Coupons: "Up to 50% OFF on Festive Sale",
    code: "FEST50",
    verified: true,
    expiry: "Exp. in 2 days",
    uses: "22k uses today",
    discount: "50% OFF",
  },
  {
    id: 2,
    logo: "data:image/webp;base64,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",
    title: "Myntra",
    category: "Fashion & Lifestyle",
    Coupons: "Flat ₹500 OFF on Orders Above ₹2500",
    code: "MYNTRA500",
    verified: true,
    expiry: "Exp. in 4 days",
    uses: "17k uses today",
    discount: "₹500 OFF",
  },
  {
    id: 3,
    logo: "data:image/webp;base64,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",
    title: "Flipkart",
    category: "Mobiles & Appliances",
    Coupons: "Extra ₹1000 OFF on Mobiles",
    code: "SAVE1000",
    verified: true,
    expiry: "Exp. in 5 days",
    uses: "25k uses today",
    discount: "₹1000 OFF",
  },
  {
    id: 4,
    logo: "https://tse2.mm.bing.net/th/id/OIP.p8g02dm7amDVp6mam-HOvAHaHa?w=187&h=187&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    title: "Swiggy",
    category: "Food Delivery",
    Coupons: "Flat 30% OFF + Free Delivery",
    code: "EAT30",
    verified: true,
    expiry: "Exp. in 1 day",
    uses: "30k uses today",
    discount: "30% OFF",
  },
];

const Deals = () => {
  const [revealedCodes, setRevealedCodes] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedId, setCopiedId] = useState(null);
  const router=useRouter();

  const handleRevealCode = (id) => {
    setRevealedCodes((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const handleCopyCode = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const handleCoupon = (item) => {
    router.push(`/detailscoupon/${item.title}`, {
      // state: item,
    });
  };

  const filteredCoupons = couponData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Coupons.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-5 py-2 rounded-full text-sm font-medium mb-5 shadow-md">
            <span>🎉</span> <span>Today’s Hottest Deals</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-3">
            Discover the Best Coupons & Discounts
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
            Unlock exclusive offers from top brands — verified, fresh, and ready to save you money.
          </p>

          {/* Search Box */}
          <div className="relative w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="🔍 Search for stores, deals or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-full px-5 py-3 text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Coupon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:ml-20 lg:mr-20">
          {filteredCoupons.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCoupon(item)}
              className="group bg-white/80 backdrop-blur-md border border-gray-100 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:scale-[1.02]"
            >
              {/* Discount Header */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center py-3 font-semibold text-lg">
                {item.discount}
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Logo and Info */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                    <img
                      src={item.logo}
                      alt="Store Logo"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                </div>

                {/* Offer Title */}
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  {item.Coupons}
                </h4>

                {/* Reveal Code Section */}
                <div className="mb-4">
                  {revealedCodes[item.id] ? (
                    <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3 border border-indigo-100">
                      <code className="text-lg font-mono font-bold text-gray-900">
                        {item.code}
                      </code>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyCode(item.id, item.code);
                        }}
                        className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                      >
                        {copiedId === item.id ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRevealCode(item.id);
                      }}
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Reveal Code
                    </button>
                  )}
                </div>

                {/* Verified & Expiry Info */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.verified && (
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      ✅ Verified
                    </span>
                  )}
                  <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
                    {item.expiry}
                  </span>
                </div>

                {/* Usage Stats */}
                <div className="flex justify-between text-xs text-gray-500 border-t pt-2 mt-2">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                    {item.uses}
                  </span>
                  <span className="text-purple-600 font-medium">🔥 Trending</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-14">
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
            Browse All Coupons
          </button>
          <p className="text-gray-500 text-sm mt-4">
            💡 Verified hourly • Fresh deals updated every day
          </p>
        </div>
      </div>
    </div>
  );
};

export default Deals;