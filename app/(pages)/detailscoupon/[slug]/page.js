'use client';

import React, { useState } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Share2,
  Clock,
  Users,
  CheckCircle,
  Zap,
  Shield,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

const DetailsCoupon = () => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const routeTitle = params.slug;
  console.log(params,"data is caming");

  // ✅ Replace location.state with query params
  const stateTitle = searchParams.get("title") || routeTitle;
  const logo = searchParams.get("logo");
  const category = searchParams.get("category");
  const Coupons = searchParams.get("Coupons");
  const code = searchParams.get("code");
  const verified = searchParams.get("verified") === "true";
  const discount = searchParams.get("discount");

  const [copied, setCopied] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [popup, setPopup] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const handleCopyCode = () => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Get ${discount} at ${stateTitle}`,
          text: `Use code ${code} to get ${discount} at ${stateTitle}`,
          url: window.location.href,
        });
      } catch {
        console.log("Sharing cancelled");
      }
    }
  };

  const features = [
    { icon: Shield, text: "100% Verified & Safe", color: "text-green-500" },
    { icon: Zap, text: "Instant Savings", color: "text-yellow-500" },
    { icon: Users, text: "Popular Choice", color: "text-blue-500" },
    { icon: Clock, text: "Limited Time Offer", color: "text-orange-500" },
  ];

  const steps = [
    { number: 1, text: "Copy the coupon code" },
    { number: 2, text: "Visit the store website" },
    { number: 3, text: "Paste code at checkout" },
    { number: 4, text: "Enjoy your savings!" },
  ];

  const faqList = [
    {
      question: "Is this coupon free to use?",
      answer: "Yes, all our coupon codes are completely free and verified daily.",
    },
    {
      question: "Can I combine this coupon with others?",
      answer: "It depends on the store policy. Some allow stacking, others do not.",
    },
    {
      question: "What if my coupon doesn't work?",
      answer:
        "Try refreshing the page or check the expiry date. You can also browse similar active offers.",
    },
  ];

  const cashbackDetails = [
    {
      id: 1,
      heading: "Flat 30% Off Sitewide",
      offers: "Get Upto 30% Off Across All Jewellery Categories",
      deal: "Get This Deal",
      details: "Minimum purchase of ₹5000 required.",
    },
    {
      id: 2,
      heading: "Flat 15% Off Sitewide",
      offers: "Get Upto 15% Off Across All Jewellery Categories",
      deal: "Show Code",
      code: "SBICODE50",
      details: "No minimum purchase required.",
    },
  ];

  const handleCouponClick = (item) => {
    if (item.deal.toLowerCase() === "show code") {
      setSelectedCoupon(item);
      setPopup(true);
    }
  };

  const toggleDetails = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderPopup = () => {
    if (!popup || !selectedCoupon) return null;
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Coupon Code</h3>
          <div className="bg-gray-100 rounded-xl p-6 text-center mb-6">
            <div className="text-3xl font-bold text-gray-900 tracking-widest">
              {selectedCoupon.code}
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => {
                navigator.clipboard.writeText(selectedCoupon.code);
                setPopup(false);
              }}
              className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700"
            >
              Copy Code
            </button>
            <button
              onClick={() => setPopup(false)}
              className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 font-inter">
   
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Coupon Info */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border border-gray-100 relative overflow-hidden transition-transform hover:scale-[1.01]">
              <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-100 blur-3xl opacity-40"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-200 blur-3xl opacity-40"></div>

              <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center border shadow-sm">
                    {logo ? (
                      <img src={logo} alt="store" className="object-contain w-full h-full p-2" />
                    ) : (
                      <span className="text-gray-400 text-sm">No Logo</span>
                    )}
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{stateTitle || routeTitle}</h1>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {category || "General"}
                      </span>
                      {verified && (
                        <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center gap-1">
                          <CheckCircle size={14} />
                          Verified
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold text-xl shadow-md mt-4 sm:mt-0"
                >
                  {discount || "Special Offer"}
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-8">
                {Coupons || "Enjoy exclusive savings with this verified offer."}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-xl p-3 flex items-center gap-3 hover:bg-gray-100 transition"
                  >
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    <span className="text-sm font-medium text-gray-700">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                How to Use This Coupon
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-all"
                  >
                    <div className="bg-indigo-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold">
                      {step.number}
                    </div>
                    <span className="text-gray-700 font-medium">
                      {step.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Offers List */}
            <div className="grid gap-4 mb-8">
              {cashbackDetails.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                >
                  {/* Main Offer */}
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                    <div className="flex-1 mb-4 sm:mb-0">
                      <h3 className="font-bold text-xl text-gray-900 mb-1">
                        {item.heading}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {item.offers}
                      </p>
                      
                      {/* Badges */}
                      <div className="flex flex-wrap gap-2">
                        <span className="border px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                          Code
                        </span>
                        <span className="border px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                          Verified
                        </span>
                        <span className="border px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-sm font-medium">
                          Exp. in 3 days
                        </span>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleCouponClick(item)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold text-sm transition-colors whitespace-nowrap"
                    >
                      {item.deal}
                    </button>
                  </div>

                  {/* Separator */}
                  <hr className="border-gray-200 my-3" />

                  {/* Details Toggle */}
                  <button 
                    onClick={() => toggleDetails(item.id)}
                    className="w-full text-left text-gray-700 text-sm font-medium mb-2"
                  >
                    {expandedItems[item.id] ? "Hide Details ▲" : "Show Details ▼"}
                  </button>

                  {/* Expanded Details */}
                  {expandedItems[item.id] && (
                    <div className="mt-2 text-gray-600 text-sm">
                      <ul className="space-y-1">
                        <li>• Enjoy {item.heading.toLowerCase()}.</li>
                        <li>• Offer valid only on Tuesday.</li>
                        <li>• Use the coupon code to avail the offer.</li>
                      </ul>
                    </div>
                  )}

                  {/* Success Rate */}
                  <div className="flex items-center justify-end mt-3">
                    <span className="text-blue-600 text-xs font-medium">100% Success</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 text-white shadow-2xl border border-gray-700">
              <h3 className="text-gray-300 mb-4 text-center text-lg tracking-wide uppercase">
                Your Coupon Code
              </h3>

              <div className="relative bg-white/10 rounded-2xl py-6 px-4 text-center text-4xl font-extrabold tracking-widest mb-6 select-all">
                {code || "N/A"}
                <span className="absolute top-2 right-3 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></span>
              </div>

              <button
                onClick={handleCopyCode}
                className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg hover:scale-105 hover:bg-gray-200 transition-all duration-300 shadow-md"
              >
                {copied ? "✅ Copied!" : "📋 Copy Code"}
              </button>

              <p className="text-center text-gray-400 text-sm mt-4">
                Click the button to copy and use your code instantly.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className={`w-full flex justify-between items-center text-left text-lg font-semibold rounded-lg p-2 ${
                    openFAQ === index ? "bg-black text-white" : "bg-white text-gray-800"
                  }`}
                >
                  {faq.question}
                  <ChevronDown
                    className={`transition-transform ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFAQ === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* About */}
        <div className="mt-20">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              {stateTitle || routeTitle || "This Store"}
            </span>
          </h2>
          <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-lg border p-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-52 h-52 bg-purple-200 rounded-full blur-3xl opacity-40"></div>
            <p className="relative text-gray-700 text-lg leading-relaxed mb-4 z-10">
              <span className="font-semibold text-indigo-600">
                {stateTitle || routeTitle || "This Store"}
              </span>{" "}
              brings unbeatable deals on fashion, electronics, and more.
              Whether you're shopping for essentials or gifts, our coupons help
              you save instantly.
            </p>
            <p className="relative text-gray-700 text-lg leading-relaxed z-10">
              Stay tuned with{" "}
              <span className="font-semibold text-purple-600">MyFairCoupons</span>{" "}
              to access verified, real-time offers and cashback deals updated daily.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate(-1)}
            className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform"
          >
            🔍 Explore More Deals
          </button>
          <p className="text-gray-500 text-sm mt-3">
            New coupons added daily • Verified hourly • Trusted by shoppers
          </p>
        </div>
      </div>

      {/* Popup Modal */}
      {renderPopup()}
    </div>
  );
};

export default DetailsCoupon;