"use client";

import React, { useState } from "react";
import store from "../../../../public/assets/light.jpg";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const HomeStores = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedCoupon, setExpandedCoupon] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [popup, setPopup] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const searchParams = useSearchParams();
  const logo = searchParams.get("logo");
  const name = searchParams.get("name");
  const rating = searchParams.get("rating");
  const deal = searchParams.get("deal");
  console.log(logo, name, rating, deal, "null caming");

  // Use dynamic data from location.state or fallback to defaults
  const storeName = name || "Boat Ed";
  const storeLogo = logo || store;
  const storeRating = rating || 5;

  const coupons = [
    {
      id: 1,
      discount: "70% OFF",
      description: "Online boating course and safety course and get 70% off",
      type: "code",
      used: 16,
      time: "4 months ago",
      verified: true,
      code: "BOAT70",
      title: "70% Off Boating Course",
      date: "2 days ago",
      viewed: 22,
      link: "https://www.boated.com",
    },
    {
      id: 2,
      discount: "10% OFF",
      description: "Get up to 10% off on Boat Ed courses",
      type: "deal",
      used: 10,
      time: "5 months ago",
      verified: true,
      code: "BOAT10",
      viewed: 22,
      title: "10% Off Courses",
      date: "1 week ago",
      link: "https://www.boated.com",
    },
    {
      id: 3,
      discount: "40% OFF",
      description: "40% off on a Boating Safety course from Boat Ed",
      type: "deal",
      used: 10,
      time: "5 months ago",
      verified: true,
      viewed: 22,
      code: "SAFETY40",
      title: "40% Off Safety Course",
      date: "3 days ago",
      link: "https://www.boated.com",
    },
    {
      id: 4,
      discount: "COUPON",
      description: "Refer a friend and get exciting deals on Boat Ed",
      type: "code",
      used: 1,
      time: "3 months ago",
      verified: true,
      viewed: 22,
      code: "REFER25",
      title: "Referral Bonus",
      date: "1 month ago",
      link: "https://www.boated.com",
    },
    {
      id: 5,
      discount: "45% OFF",
      description: "Save up to 45% on Boat Ed",
      type: "deal",
      used: 0,
      time: "1 year ago",
      verified: true,
      code: "BOAT45",
      viewed: 22,
      title: "45% Off All Courses",
      date: "2 months ago",
      link: "https://www.boated.com",
    },
  ];

  // Filter coupons based on active tab
  const filteredCoupons = coupons.filter((coupon) => {
    if (activeTab === "all") return true;
    if (activeTab === "codes") return coupon.type === "code";
    if (activeTab === "deals") return coupon.type === "deal";
    return true;
  });

  const similarStores = [
    "Paytm Bus Coupons",
    "Flipkart Coupons",
    "Abibus Coupons",
    "IndiGo Coupons",
    "Air Arabia Coupons",
    "Myntra",
    "Amazon",
    "Dominos",
    "Flipkart",
  ];

  const faqData = [
    {
      question: "How do I use Boat Ed coupon codes?",
      answer:
        "Simply copy the coupon code and apply it during checkout on the Boat Ed website. The discount will be automatically applied to your purchase.",
    },
    {
      question: "Are these coupon codes verified?",
      answer:
        "Yes, all our coupon codes are regularly tested and verified to ensure they work properly. We update them frequently to provide the best deals.",
    },
    {
      question: "Do Boat Ed coupons expire?",
      answer:
        "Yes, most coupon codes have an expiration date. We recommend using them as soon as possible to avoid missing out on great deals.",
    },
    {
      question: "Can I combine multiple coupons?",
      answer:
        "Typically, only one coupon can be used per purchase. However, some promotions may allow stacking with other offers. Check the terms and conditions for details.",
    },
    {
      question: "What if my coupon code doesn't work?",
      answer:
        "If a coupon code doesn't work, it may have expired or reached its usage limit. Try another code from our list or contact Boat Ed customer support for assistance.",
    },
  ];

  const toggleCoupon = (id) => {
    setExpandedCoupon(expandedCoupon === id ? null : id);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handlePopup = (coupon) => {
    // Only show popup for coupon codes, not for deals
    if (coupon.type === "code") {
      setSelectedCoupon(coupon);
      setPopup(true);
    } else {
      // For deals, directly redirect to store or show a message
      window.open(coupon.link, "_blank");
    }
  };
  const router = useRouter();

  return (
    <div className="min-h-screen  ml-32 mr-32">
      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>

      {/* Navigation */}
      <nav className="flex items-center gap-2 text-gray-600 text-sm mb-6 p-6 max-w-7xl mx-auto">
        <span
          className="cursor-pointer hover:text-black transition"
          onClick={() => router.push("/home")}
        >
          Home
        </span>

        <span>/</span>

        <span
          className="cursor-pointer hover:text-black transition"
          onClick={() => router.push("/stores")}
        >
          Stores
        </span>

        <span>/</span>

        <span className="text-black font-semibold">{storeName}</span>
      </nav>

      <div className="flex flex-col lg:flex-row p-6 gap-6 max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <div className="lg:w-1/3 space-y-6">
          {/* Store Logo */}
          <div className="bg-white/80 backdrop-blur-sm p-6 shadow-xl rounded-2xl border border-white/20">
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-xl shadow-inner bg-white">
                <img
                  src={storeLogo}
                  alt={storeName}
                  className="w-56 h-28 object-contain"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/224x112?text=Store+Logo";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Trending Offers */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-white/20 p-6">
            <h1 className="text-xl font-bold text-gray-800 mb-4">
              Trending {storeName} Coupon Codes & Offers
            </h1>
            <div className="space-y-3 mb-4">
              <p className="flex items-center text-green-600 font-semibold">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Up to 75% off on Boat licenses
              </p>
              <p className="flex items-center text-green-600 font-semibold">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Get 15% on the secured boating courses
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 mb-4">
              <h2 className="text-center font-bold text-lg text-gray-800 mb-3">
                Today's {storeName} Top Offers
              </h2>
              <div className="flex justify-between text-center">
                <div>
                  <h3 className="font-semibold text-gray-600">Total Offers</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {coupons.length}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-600">Coupon Codes</h3>
                  <p className="text-2xl font-bold text-green-600">
                    {coupons.filter((c) => c.type === "code").length}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Shopping Tips */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-white/20 p-6">
            <h1 className="text-xl font-bold text-center text-gray-800 mb-4">
              Boating Shopping Tips
            </h1>
            <div className="space-y-4">
              <div>
                <h2 className="font-bold text-gray-800 mb-2">
                  Newsletter Subscriptions
                </h2>
                <p className="text-gray-600 text-sm">
                  Subscribe to the {storeName} newsletter to receive email
                  notifications about special deals and discounts on boating
                  courses and licenses.
                </p>
              </div>
              <div>
                <h2 className="font-bold text-gray-800 mb-2">Refer and Earn</h2>
                <p className="text-gray-600 text-sm">
                  Refer friends to {storeName} and earn exciting rewards. Share
                  your unique referral code and get discounts on your next
                  course purchase.
                </p>
              </div>
            </div>
          </div>

          {/* Similar Stores */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-white/20 p-6">
            <h1 className="text-xl font-bold text-gray-800 mb-4">
              Similar Stores
            </h1>
            <div className="grid grid-cols-2 gap-2">
              {similarStores.map((store, index) => (
                <Link
                  key={index}
                  href="#"
                  className="cursor-pointer text-blue-500 hover:text-blue-700 transition-colors text-sm p-2 hover:bg-blue-50 rounded-lg block"
                >
                  {store}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-2/3 space-y-6">
          {/* Header */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-white/20 p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {storeName.toUpperCase()} COUPON CODE & DISCOUNTS - NOVEMBER 2025
            </h1>
            <p className="text-gray-600 mb-4">
              {filteredCoupons.length} {storeName} Coupons And Promotional Codes
              Available For Today
            </p>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex space-x-2">
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === "all"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveTab("all")}
                >
                  All ({coupons.length})
                </button>
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === "codes"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveTab("codes")}
                >
                  Codes ({coupons.filter((c) => c.type === "code").length})
                </button>
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === "deals"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveTab("deals")}
                >
                  Deals ({coupons.filter((c) => c.type === "deal").length})
                </button>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <div className="flex items-center space-x-2 text-yellow-500">
                  <span className="text-4xl">★</span>
                  <div className="flex flex-col -space-y-1">
                    <span className="text-xl font-semibold text-black">
                      {storeRating} / 5
                    </span>
                    <span className="text-gray-600 text-sm">16 Votes</span>
                  </div>
                </div>
                <button className="text-blue-600 text-lg hover:underline">
                  Rate This
                </button>
              </div>
            </div>
          </div>

          {/* Coupons List */}
          <div className="space-y-4">
            {filteredCoupons.map((coupon) => (
              <div
                key={coupon.id}
                className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-white/20 p-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-3 gap-3">
                  <div className="flex items-start space-x-3">
                    <span
                      className={`${
                        coupon.discount === "COUPON"
                          ? "bg-purple-500"
                          : "bg-red-500"
                      } text-white px-3 py-1 rounded-full font-bold text-sm whitespace-nowrap`}
                    >
                      {coupon.discount}
                    </span>
                    <p className="text-gray-700 font-medium">
                      {coupon.description}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => toggleCoupon(coupon.id)}
                  className="text-blue-500 hover:text-blue-700 text-sm font-medium mb-3 transition-colors"
                >
                  {expandedCoupon === coupon.id ? "Hide" : "Show"} Coupon
                  Details
                </button>

                {expandedCoupon === coupon.id && (
                  <div className="bg-blue-50 rounded-lg p-4 mb-3 animate-fade-in">
                    <p className="text-gray-700 mb-2 font-semibold">
                      Terms & Conditions:
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Valid for new customers only</li>
                      <li>Minimum purchase of $50 required</li>
                      <li>Cannot be combined with other offers</li>
                      <li>Valid until December 31, 2025</li>
                    </ul>
                  </div>
                )}

                <div className="flex flex-col lg:flex-row lg:items-center justify-between pt-3 border-t border-gray-200 gap-3">
                  <div className="flex items-center space-x-2 flex-wrap">
                    {coupon.verified && (
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium flex items-center">
                        ✓ Verified Code
                      </span>
                    )}
                    <span className="bg-green-100 text-green-700 rounded-sm px-2 py-1 text-xs">
                      ✓ {coupon.viewed} View
                    </span>
                    <span className="text-gray-500 text-sm">
                      {coupon.used} used
                    </span>
                    <span className="text-gray-500 text-sm">
                      • {coupon.time}
                    </span>
                  </div>
                  <button
                    onClick={() => handlePopup(coupon)}
                    className={`px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                      coupon.type === "code"
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "bg-green-500 hover:bg-green-600 text-white"
                    }`}
                  >
                    {coupon.type === "code" ? "Show Code" : "Activate Deal"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* About Section */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-white/20 p-6">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
              About {storeName}
            </h1>
            <div className="flex flex-col lg:flex-row items-center gap-6 mb-6">
              <div className="lg:w-1/3 bg-blue-100 p-6 rounded-2xl shadow-inner flex items-center justify-center">
                <div className="w-full h-48 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">
                    Store Image
                  </span>
                </div>
              </div>
              <div className="lg:w-2/3">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Whether you are a recreational boat operator or professional,
                  many countries and states have made it mandatory to have a
                  boat license and insurance to ride legally. The laws and
                  regulations differ from region to region, but license and
                  certification remain the common element. Having a boat
                  driver's license means having enough knowledge to drive a
                  boat. Common prerequisites to owning a boat license include
                  minimum age, good health, etc.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {storeName} is a delegated provider of boat courses and
                  boating licenses. Visit www.boated.com to take the
                  state-approved course to complete your online boating safety
                  education. In return, you will get the necessary certificates
                  and licenses to ride and enjoy boating. While at it, apply the{" "}
                  {storeName} coupon code available on CouponPin and secure big
                  savings.
                </p>
              </div>
            </div>

            <h2 className="font-bold text-xl text-gray-800 mb-4">
              Why is it necessary to take the Boater safety course?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Millions of people enjoy riverside, ocean, and lake boating for
              recreational reasons. Nothing quite compares to a day out on a
              boat. Whether it may be a family tradition, part of the exercise,
              or sports, boating will make you forget the phone. But, the
              excitement is a twin of risk. There are potential risks while
              operating a boat as it is not a complete safe task. Hence, it is a
              big responsibility of the passengers and the boat operator to be
              educated about boat safety practices.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              If you are a beginner, a boating certificate or education course
              is a great first step to preparing for life in water. Wondering
              where I can get my boat safety education? {storeName} has what you
              are looking for. It provides online and practical education
              courses, which you can complete at your own pace in the comfort of
              your home. Each Indian state has different laws and regulations.
              The platform has state-specific boating safety courses for
              recreational boaters of all ages. Visit www.boat-ed.com to learn
              more about your state's rules and regulations.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-white/20 p-6">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Frequently Asked Questions
            </h1>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    className="w-full px-4 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors flex justify-between items-center"
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                    <span
                      className={`transform transition-transform ${expandedFaq === index ? "rotate-180" : ""}`}
                    >
                      ▼
                    </span>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-4 py-3 bg-gray-50 text-gray-700 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal - Only for coupon codes */}
      {popup && selectedCoupon && selectedCoupon.type === "code" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 p-4">
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] p-8">
            {/* Close Button */}
            <button
              onClick={() => setPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition text-2xl"
            >
              <MdClose />
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <Image
                src={storeLogo}
                alt="Store Logo"
                width={48}
                height={48}
                className="w-10 h-10 border p-1 object-fit"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/48x48?text=Store";
                }}
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {storeName}
                </h2>
                <p className="text-gray-500 text-sm">
                  Code for: {selectedCoupon.title}
                </p>
              </div>
            </div>

            {/* Verified + Date */}
            <div className="flex items-center text-gray-500 text-sm mb-5">
              <span className="flex items-center gap-2">
                <i className="fas fa-check-circle text-blue-500"></i>
                Verified {selectedCoupon.date}
              </span>
            </div>

            {/* Large Code Box */}
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-3 rounded-2xl border border-blue-200 shadow-inner">
              <p className="text-center text-gray-600 text-sm mb-2">
                Use this code at checkout
              </p>

              <div className="bg-white shadow-md rounded-xl p-4 text-center text-2xl tracking-widest font-semibold text-gray-800 border">
                {selectedCoupon.code}
              </div>

              <div className="text-center mt-4">
                <a
                  href={selectedCoupon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Open Store →
                </a>
              </div>
            </div>

            {/* Worked / Did not work + Reminder */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {/* LEFT */}
              <div className="border rounded-2xl p-4 text-center">
                <p className="text-gray-500 text-sm mb-3">Did it work?</p>
                <div className="flex justify-center gap-3">
                  <button className="px-5 py-2 border rounded-xl bg-blue-600 text-white">
                    Worked ✓
                  </button>
                  <button className="px-5 py-2 border rounded-xl text-gray-700">
                    Didn't work
                  </button>
                </div>
              </div>

              {/* RIGHT */}
              <div className="border rounded-2xl p-4 text-center">
                <p className="text-gray-500 text-sm mb-3">Reminder</p>
                <button className="px-5 py-2 border rounded-xl text-gray-700">
                  Save this store
                </button>
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-8">
              <p className="text-gray-500 text-sm mb-4">Share with a friend</p>

              <div className="flex gap-3">
                <button className="px-4 py-2 rounded-xl border text-blue-600">
                  Facebook
                </button>
                <button className="px-4 py-2 rounded-xl border text-gray-700">
                  X (Twitter)
                </button>
                <button className="px-4 py-2 rounded-xl border text-green-600">
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeStores;
