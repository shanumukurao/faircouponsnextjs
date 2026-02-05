"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { MdClose } from "react-icons/md";
import {
  FaCopy,
  FaShareAlt,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import storeImage from "@/public/assets/light.jpg";

const CategoriesStores = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedCoupon, setExpandedCoupon] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [popup, setPopup] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const storeName = searchParams.get("name") || "Boat Ed";
  const logoUrl = decodeURIComponent(searchParams.get("logo") || "");
  const storeRating = parseFloat(searchParams.get("rating")) || 4.5;
  const deals = searchParams.get("deal") || "Deal";

  // Memoized coupons data
  const coupons = useMemo(
    () => [
      {
        id: 1,
        discount: "70% OFF",
        description: "Online boating course and safety course and get 70% off",
        type: "code",
        used: 16,
        time: "4 months ago",
        verified: true,
        viewed: 22,
        code: "BOAT70",
        title: "70% Off Boating Course",
        date: "2 days ago",
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
        viewed: 22,
        code: "BOAT45",
        title: "45% Off All Courses",
        date: "2 months ago",
        link: "https://www.boated.com",
      },
      {
        id: 6,
        discount: "25% OFF",
        description: "Get 25% cashback on your next purchase",
        type: "cashback",
        used: 5,
        time: "2 weeks ago",
        verified: true,
        viewed: 22,
        code: "CASH25",
        title: "25% Cashback",
        date: "5 days ago",
        link: "https://www.boated.com",
      },
    ],
    []
  );

  // Memoized filtered coupons and tab counts
  const { filteredCoupons, tabCounts } = useMemo(() => {
    const filtered = coupons.filter((coupon) => {
      if (activeTab === "all") return true;
      if (activeTab === "deals") return coupon.type === "deal";
      if (activeTab === "cashback") return coupon.type === "cashback";
      if (activeTab === "coupon") return coupon.type === "code";
      return true;
    });

    return {
      filteredCoupons: filtered,
      tabCounts: {
        all: coupons.length,
        coupon: coupons.filter((c) => c.type === "code").length,
        deals: coupons.filter((c) => c.type === "deal").length,
        cashback: coupons.filter((c) => c.type === "cashback").length,
      },
    };
  }, [activeTab, coupons]);

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

  const toggleCoupon = useCallback((id) => {
    setExpandedCoupon(expandedCoupon === id ? null : id);
  }, [expandedCoupon]);

  const toggleFaq = useCallback((index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  }, [expandedFaq]);

  const handlePopup = useCallback((coupon) => {
    if (coupon.type === "code") {
      setSelectedCoupon(coupon);
      setPopup(true);
    } else {
      if (window.confirm(`Do you want to visit ${storeName} to activate this deal?`)) {
        window.open(coupon.link, "_blank", "noopener,noreferrer");
      }
    }
  }, [storeName]);

  const copyToClipboard = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  const handleShare = useCallback((platform) => {
    const shareUrl = window.location.href;
    const shareText = `Check out these amazing ${storeName} coupon codes!`;

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
          "_blank",
          "noopener,noreferrer"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
          "_blank",
          "noopener,noreferrer"
        );
        break;
      case "whatsapp":
        window.open(
          `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
          "_blank",
          "noopener,noreferrer"
        );
        break;
      default:
        if (navigator.share) {
          navigator.share({
            title: `${storeName} Coupons`,
            text: shareText,
            url: shareUrl,
          });
        } else {
          copyToClipboard(shareUrl);
          alert("Link copied to clipboard!");
        }
    }
  }, [storeName, copyToClipboard]);

  // Combined useEffect for body scroll and ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setPopup(false);
        setExpandedCoupon(null);
        setExpandedFaq(null);
      }
    };

    if (popup) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [popup]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="py-4 px-4 sm:px-8 lg:px-28 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <nav className="flex items-center gap-2 text-gray-600 text-sm mb-6 p-4 sm:p-6 max-w-7xl mx-auto">
        <span
          className="cursor-pointer hover:text-black transition"
          onClick={() => router.push("/")}
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
        <span className="text-black font-semibold truncate max-w-xs">{storeName}</span>
      </nav>

      <div className="flex flex-col lg:flex-row p-4 sm:p-6 gap-6 max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="lg:w-1/3 space-y-6">
          {/* Store Logo */}
          <div className="bg-white/80 backdrop-blur-sm p-6 shadow-xl rounded-2xl border border-white/20">
            <div className="flex items-center justify-center">
              <div className="p-2 rounded-xl shadow-inner bg-white">
                {!imageError ? (
                  <Image
                    src={logoUrl || "/placeholder-logo.png"}
                    width={224}
                    height={112}
                    alt={storeName}
                    className="w-56 h-28 object-contain"
                    onError={handleImageError}
                    priority={false}
                  />
                ) : (
                  <div className="w-56 h-28 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-sm font-medium">{storeName}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Trending Offers */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-white/20 p-6">
            <h1 className="text-xl font-semibold text-gray-800 mb-4">
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
              <h2 className="text-center font-semibold text-lg text-gray-800 mb-3">
                Today's {storeName} Top Offers
              </h2>
              <div className="flex justify-between text-center">
                <div>
                  <h3 className="font-semibold text-gray-600">Total Offers</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {tabCounts.all}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-600">Coupon Codes</h3>
                  <p className="text-2xl font-bold text-green-600">
                    {tabCounts.coupon}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Shopping Tips */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-white/20 p-6">
            <h1 className="text-xl font-semibold text-center text-gray-800 mb-4">
              Boating Shopping Tips
            </h1>
            <div className="space-y-4">
              <div>
                <h2 className="font-bold text-gray-800 mb-2">Newsletter Subscriptions</h2>
                <p className="text-gray-600 text-sm">
                  Subscribe to the {storeName} newsletter to receive email notifications about special deals and discounts on boating courses and licenses.
                </p>
              </div>
              <div>
                <h2 className="font-bold text-gray-800 mb-2">Refer and Earn</h2>
                <p className="text-gray-600 text-sm">
                  Refer friends to {storeName} and earn exciting rewards. Share your unique referral code and get discounts on your next course purchase.
                </p>
              </div>
            </div>
          </div>

          {/* Similar Stores */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-white/20 p-6">
            <h1 className="text-xl font-semibold text-gray-800 mb-4">Similar Stores</h1>
            <div className="grid grid-cols-2 gap-2">
              {similarStores.map((store, index) => (
                <Link
                  key={index}
                  href={`/store?name=${encodeURIComponent(store)}`}
                  className="text-blue-500 hover:text-blue-700 transition-colors text-sm p-2 hover:bg-blue-50 rounded-lg block truncate"
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
              {storeName.toUpperCase()} COUPON CODE & DISCOUNTS - FEBRUARY 2026
            </h1>
            <p className="text-gray-600 mb-4">
              {filteredCoupons.length} {storeName} Coupons And Promotional Codes Available For Today
            </p>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex space-x-2 flex-wrap">
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === "all"
                      ? "bg-blue-500 text-white shadow-md"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveTab("all")}
                >
                  All ({tabCounts.all})
                </button>
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === "coupon"
                      ? "bg-blue-500 text-white shadow-md"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveTab("coupon")}
                >
                  Coupon ({tabCounts.coupon})
                </button>
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === "deals"
                      ? "bg-blue-500 text-white shadow-md"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveTab("deals")}
                >
                  Deals ({tabCounts.deals})
                </button>
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === "cashback"
                      ? "bg-blue-500 text-white shadow-md"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveTab("cashback")}
                >
                  Cashback ({tabCounts.cashback})
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
                <button className="text-blue-600 text-lg hover:underline">Rate This</button>
              </div>
            </div>
          </div>

          {/* Coupons List */}
          <div className="space-y-4">
            {filteredCoupons.map((coupon) => (
              <div
                key={coupon.id}
                className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-white/20 p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-3 gap-3">
                  <div className="flex items-start space-x-3">
                    <span
                      className={`${
                        coupon.discount === "COUPON"
                          ? "bg-purple-500"
                          : coupon.type === "cashback"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      } text-white px-3 py-1 rounded-full font-bold text-sm whitespace-nowrap`}
                    >
                      {coupon.discount}
                    </span>
                    <p className="text-gray-700 font-medium leading-relaxed">{coupon.description}</p>
                  </div>
                </div>

                <button
                  onClick={() => toggleCoupon(coupon.id)}
                  className="text-blue-500 hover:text-blue-700 text-sm font-medium mb-3 transition-colors flex items-center gap-1"
                  aria-expanded={expandedCoupon === coupon.id}
                >
                  {expandedCoupon === coupon.id ? "Hide" : "Show"} Coupon Details
                  <span className={`transform transition-transform ${expandedCoupon === coupon.id ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>

                {expandedCoupon === coupon.id && (
                  <div className="bg-blue-50 rounded-lg p-4 mb-3 animate-fade-in">
                    <p className="text-gray-700 mb-2 font-semibold">Terms & Conditions:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Valid for new customers only</li>
                      <li>Minimum purchase of $50 required</li>
                      <li>Cannot be combined with other offers</li>
                      <li>Valid until December 31, 2026</li>
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
                      ✓ {coupon.viewed} Views
                    </span>
                    <span className="text-gray-500 text-sm">{coupon.used} used</span>
                    <span className="text-gray-500 text-sm">• {coupon.time}</span>
                  </div>
                  <button
                    onClick={() => handlePopup(coupon)}
                    className={`px-6 py-2 rounded-lg font-medium transition-all whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                      coupon.type === "code"
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : coupon.type === "cashback"
                        ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                        : "bg-green-500 hover:bg-green-600 text-white"
                    }`}
                    aria-label={`Get ${coupon.title} ${coupon.type}`}
                  >
                    {coupon.type === "code"
                      ? "Show Code"
                      : coupon.type === "cashback"
                      ? "Get Cashback"
                      : "Activate Deal"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* About Store */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-white/20 p-6">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">About {storeName}</h1>
            <div className="flex flex-col lg:flex-row items-center gap-6 mb-6">
              <div className="lg:w-1/3 bg-blue-100 p-6 rounded-2xl shadow-inner flex items-center justify-center">
                <div className="w-full h-48 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">Store Image</span>
                </div>
              </div>
              <div className="lg:w-2/3">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Whether you are a recreational boat operator or professional, many countries and states have made it mandatory to have a boat license and insurance to ride legally. The laws and regulations differ from region to region, but license and certification remain the common element.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {storeName} is a delegated provider of boat courses and boating licenses. Visit{" "}
                  <a href="https://www.boated.com" className="text-blue-600 hover:underline">
                    www.boated.com
                  </a>{" "}
                  to take the state-approved course to complete your online boating safety education.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-white/20 p-6">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Frequently Asked Questions</h1>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                >
                  <button
                    className="w-full px-4 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors flex justify-between items-center"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={expandedFaq === index}
                  >
                    {faq.question}
                    <span
                      className={`transform transition-transform duration-200 ${
                        expandedFaq === index ? "rotate-180" : ""
                      }`}
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

      {/* Coupon Popup Modal */}
      {popup && selectedCoupon && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 p-3 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="coupon-title"
          onClick={() => setPopup(false)}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-5 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition text-xl sm:text-2xl p-2 rounded-full hover:bg-gray-100"
              aria-label="Close popup"
            >
              <MdClose />
            </button>

            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 text-center sm:text-left">
              {!imageError ? (
                <Image
                  src={logoUrl || "/placeholder-logo.png"}
                  alt={`${storeName} logo`}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                  onError={handleImageError}
                />
              ) : (
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium">{storeName.charAt(0)}</span>
                </div>
              )}
              <div>
                <h2 id="coupon-title" className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {storeName}
                </h2>
                <p className="text-gray-500 text-sm">Code for: {selectedCoupon.title}</p>
              </div>
            </div>

            {/* Verified Badge */}
            <div className="flex justify-center sm:justify-start items-center text-gray-500 text-sm mb-5">
              <span className="flex items-center gap-2">
                <span className="text-blue-500">✓</span>
                Verified {selectedCoupon.date}
              </span>
            </div>

            {/* Coupon Code Box */}
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-5 sm:p-6 rounded-2xl border border-blue-200 shadow-inner">
              <p className="text-center text-gray-600 text-sm mb-3">Use this code at checkout</p>
              <div className="bg-white shadow-md rounded-xl p-4 text-center border relative">
                <div className="text-xl sm:text-2xl tracking-widest font-semibold text-gray-800 break-all">
                  {selectedCoupon.code}
                </div>
                <button
                  onClick={() => copyToClipboard(selectedCoupon.code)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-blue-500 transition-colors p-1 rounded-full hover:bg-gray-100"
                  aria-label="Copy coupon code"
                >
                  <FaCopy />
                </button>
                {copied && (
                  <div className="absolute top-3 right-10 bg-green-100 text-green-700 px-2 py-1 rounded text-xs animate-pulse">
                    Copied!
                  </div>
                )}
              </div>
              <div className="text-center mt-4">
                <a
                  href={selectedCoupon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium hover:underline"
                >
                  Open Store →
                </a>
              </div>
            </div>

            {/* Feedback & Reminder */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="border rounded-2xl p-4">
                <p className="text-gray-500 text-sm mb-3 text-center">Did it work?</p>
                <div className="flex justify-center gap-3 flex-wrap">
                  <button className="px-5 py-2 border rounded-xl bg-green-100 text-green-700 hover:bg-green-200 transition">
                    Worked ✓
                  </button>
                  <button className="px-5 py-2 border rounded-xl text-gray-700 hover:bg-gray-100 transition">
                    Didn't work
                  </button>
                </div>
              </div>
              <div className="border rounded-2xl p-4">
                <p className="text-gray-500 text-sm mb-3 text-center">Reminder</p>
                <button className="w-full px-5 py-2 border rounded-xl text-gray-700 hover:bg-gray-100 transition">
                  Save this store
                </button>
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-8">
              <p className="text-gray-500 text-sm mb-4 text-center">Share with a friend</p>
              <div className="flex justify-center gap-3 flex-wrap">
                <button
                  onClick={() => handleShare("facebook")}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border text-blue-600 hover:bg-blue-50 transition"
                >
                  <FaFacebook /> Facebook
                </button>
                <button
                  onClick={() => handleShare("twitter")}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border text-gray-700 hover:bg-gray-100 transition"
                >
                  <FaTwitter /> Twitter
                </button>
                <button
                  onClick={() => handleShare("whatsapp")}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border text-green-600 hover:bg-green-50 transition"
                >
                  <FaWhatsapp /> WhatsApp
                </button>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => handleShare("general")}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition"
                >
                  <FaShareAlt /> Share via…
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
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
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CategoriesStores;
